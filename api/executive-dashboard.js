const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

function safeEqual(a, b) {
  const x = Buffer.from(String(a || ''));
  const y = Buffer.from(String(b || ''));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

function arr(v) { return Array.isArray(v) ? v : []; }
function weight(v) {
  return ({ critical: 4, high: 3, medium: 2, low: 1 })[String(v || '').toLowerCase()] || 0;
}
function average(values) {
  return values.length ? Math.round(values.reduce((a, b) => a + b, 0) / values.length) : 0;
}

function normalise(row) {
  const json = row.report_json && typeof row.report_json === 'object' ? row.report_json : {};
  return {
    id: row.id,
    moduleId: row.module_id || '',
    moduleName: row.module_name || row.module_id || 'Unknown module',
    complianceScore: Number(row.compliance_score ?? json.complianceScore ?? 0),
    riskRating: row.overall_risk_rating || json.overallRiskRating || 'Medium',
    executiveSummary: row.executive_summary || json.executiveSummary || '',
    createdAt: row.created_at || null,
    findings: arr(row.critical_findings || json.criticalFindings),
    actions: arr(row.recommended_actions || json.recommendedActions),
    opportunities: arr(row.strategic_opportunities || json.strategicOpportunities)
  };
}

function modules(reports) {
  const groups = new Map();
  for (const report of reports) {
    const key = report.moduleId || report.moduleName;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(report);
  }
  return [...groups.entries()].map(([key, list]) => {
    const ordered = [...list].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    const latest = ordered[0];
    const previous = ordered[1];
    return {
      moduleId: latest.moduleId,
      moduleName: latest.moduleName,
      auditCount: ordered.length,
      latestScore: latest.complianceScore,
      previousScore: previous ? previous.complianceScore : null,
      scoreChange: previous ? latest.complianceScore - previous.complianceScore : null,
      latestRisk: latest.riskRating,
      latestDate: latest.createdAt
    };
  }).sort((a, b) => weight(b.latestRisk) - weight(a.latestRisk) || a.latestScore - b.latestScore);
}

function priorityFindings(reports) {
  return reports.flatMap(r => r.findings.map(f => ({
    moduleName: r.moduleName,
    severity: f.severity || 'Medium',
    category: f.category || 'General',
    issue: f.issue || f.finding || '',
    impact: f.impact || ''
  }))).sort((a, b) => weight(b.severity) - weight(a.severity)).slice(0, 12);
}

function priorityActions(reports) {
  return reports.flatMap(r => r.actions.map(a => ({
    moduleName: r.moduleName,
    priority: a.priority || 'Medium',
    action: a.action || a.recommendation || '',
    owner: a.owner || ''
  }))).sort((a, b) => weight(b.priority) - weight(a.priority)).slice(0, 12);
}

function opportunities(reports) {
  return reports.flatMap(r => r.opportunities.map(o => ({
    moduleName: r.moduleName,
    opportunity: o.opportunity || o.title || '',
    potentialBenefit: o.potentialBenefit || o.benefit || '',
    recommendedAction: o.recommendedAction || o.action || ''
  }))).slice(0, 12);
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const key = process.env.HISTORY_ADMIN_KEY;
  if (!key) return res.status(503).json({ error: 'Add HISTORY_ADMIN_KEY to Vercel.' });
  if (!safeEqual(req.headers['x-history-key'], key)) return res.status(401).json({ error: 'Invalid dashboard access key.' });
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(503).json({ error: 'Supabase environment variables are incomplete.' });
  }

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  });

  try {
    const { data, error } = await supabase.from('audit_reports').select('*').order('created_at', { ascending: false }).limit(500);
    if (error) throw error;
    const reports = (data || []).map(normalise);
    const scores = reports.map(r => r.complianceScore).filter(Number.isFinite);
    const allFindings = reports.flatMap(r => r.findings);
    const allActions = reports.flatMap(r => r.actions);
    const allOpportunities = reports.flatMap(r => r.opportunities);

    return res.status(200).json({
      generatedAt: new Date().toISOString(),
      summary: {
        totalAudits: reports.length,
        averageComplianceScore: average(scores),
        highRiskAudits: reports.filter(r => ['High', 'Critical'].includes(r.riskRating)).length,
        totalFindings: allFindings.length,
        totalActions: allActions.length,
        totalOpportunities: allOpportunities.length
      },
      riskDistribution: {
        Low: reports.filter(r => r.riskRating === 'Low').length,
        Medium: reports.filter(r => r.riskRating === 'Medium').length,
        High: reports.filter(r => r.riskRating === 'High').length,
        Critical: reports.filter(r => r.riskRating === 'Critical').length
      },
      moduleSummary: modules(reports),
      priorityFindings: priorityFindings(reports),
      priorityActions: priorityActions(reports),
      opportunities: opportunities(reports)
    });
  } catch (error) {
    console.error('Executive dashboard retrieval failed:', error);
    return res.status(500).json({ error: 'Unable to build the executive dashboard.', details: error.message });
  }
};
