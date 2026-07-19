const crypto = require("crypto");
const { createClient } = require("@supabase/supabase-js");

function equalKey(a, b) {
  const x = Buffer.from(String(a || ""));
  const y = Buffer.from(String(b || ""));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

function report(row) {
  const json = row.report_json && typeof row.report_json === "object"
    ? row.report_json
    : {};

  const findings = Array.isArray(row.critical_findings)
    ? row.critical_findings
    : (json.criticalFindings || []);

  const actions = Array.isArray(row.recommended_actions)
    ? row.recommended_actions
    : (json.recommendedActions || []);

  const opportunities = Array.isArray(row.strategic_opportunities)
    ? row.strategic_opportunities
    : (json.strategicOpportunities || []);

  return {
    id: row.id,
    moduleId: row.module_id || "",
    moduleName: row.module_name || row.module_id || "Unknown module",
    status: row.status || "Complete",
    riskRating: row.overall_risk_rating || json.overallRiskRating || "Medium",
    complianceScore: Number(row.compliance_score ?? json.complianceScore ?? 0),
    executiveSummary: row.executive_summary || json.executiveSummary || "",
    financialExposure: row.financial_exposure || json.financialExposure || {},
    keyStrengths: row.key_strengths || json.keyStrengths || [],
    criticalFindings: findings,
    recommendedActions: actions,
    strategicOpportunities: opportunities,
    missingInformation: row.missing_information || json.missingInformation || [],
    nextSteps: row.next_steps || json.nextSteps || [],
    rawInput: row.raw_input || "",
    createdAt: row.created_at || null,
    counts: {
      findings: findings.length,
      recommendations: actions.length,
      opportunities: opportunities.length
    }
  };
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const adminKey = process.env.HISTORY_ADMIN_KEY;

  if (!adminKey) {
    return res.status(503).json({
      error: "Add HISTORY_ADMIN_KEY to the Vercel environment variables."
    });
  }

  if (!equalKey(req.headers["x-history-key"], adminKey)) {
    return res.status(401).json({ error: "Invalid history access key." });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );

  const limit = Math.min(Math.max(parseInt(req.query.limit || "50", 10), 1), 100);
  const offset = Math.max(parseInt(req.query.offset || "0", 10), 0);
  const moduleId = String(req.query.moduleId || "").trim();
  const riskRating = String(req.query.riskRating || "").trim();
  const search = String(req.query.search || "").replace(/[%_,()]/g, " ").trim();

  try {
    let query = supabase
      .from("audit_reports")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (moduleId) query = query.eq("module_id", moduleId);
    if (riskRating) query = query.eq("overall_risk_rating", riskRating);

    if (search) {
      query = query.or(
        `module_name.ilike.%${search}%,executive_summary.ilike.%${search}%,raw_input.ilike.%${search}%`
      );
    }

    const { data, error, count } = await query;

    if (error) throw error;

    return res.status(200).json({
      reports: (data || []).map(report),
      pagination: {
        total: Number(count || 0),
        limit,
        offset,
        hasMore: offset + (data || []).length < Number(count || 0)
      }
    });
  } catch (error) {
    console.error("Audit history retrieval failed:", error);
    return res.status(500).json({
      error: "Unable to retrieve audit history.",
      details: error.message
    });
  }
};
