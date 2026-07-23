const { createClient } = require("@supabase/supabase-js");
const { mergeGenome } = require("./genomeEngine");
const { calculateKpis } = require("./kpiEngine");
const { calculateTrends } = require("./trendEngine");
const { calculateMaturity } = require("./maturityEngine");
const { detectAnomalies } = require("./anomalyEngine");
const { buildCoaching } = require("./coachingEngine");

function getClient() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase environment variables are incomplete.");
  }
  return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false }
  });
}

async function readCurrentState(supabase, businessId) {
  const [{ data: genome, error: genomeError }, { data: snapshots, error: snapshotError }] = await Promise.all([
    supabase.from("business_genome_state").select("*").eq("business_id", businessId),
    supabase.from("business_intelligence_snapshots").select("*").eq("business_id", businessId).order("created_at", { ascending: false }).limit(1)
  ]);
  if (genomeError) throw genomeError;
  if (snapshotError) throw snapshotError;
  return { genome: genome || [], previousSnapshot: snapshots?.[0] || null };
}

async function persistIntelligence(supabase, payload) {
  const { businessId, auditReportId, moduleId, verifiedReport, genome, snapshot } = payload;
  const now = new Date().toISOString();

  const eventResult = await supabase.from("business_intelligence_events").insert({
    business_id: businessId,
    audit_report_id: auditReportId ? String(auditReportId) : null,
    module_id: moduleId,
    event_type: "audit_completed",
    source_score: Number(verifiedReport.complianceScore || 0),
    risk_rating: verifiedReport.overallRiskRating || null,
    payload: verifiedReport
  });
  if (eventResult.error) throw eventResult.error;

  const genomeRows = genome.filter((item) => item.score !== null).map((item) => ({
    business_id: businessId,
    dimension_key: item.dimension_key,
    dimension_label: item.dimension_label,
    pillar: item.pillar,
    score: item.score,
    previous_score: item.previous_score,
    measurement_count: item.measurement_count,
    confidence: item.confidence,
    source_module: item.source_module,
    last_audit_report_id: auditReportId ? String(auditReportId) : null,
    updated_at: now
  }));

  if (genomeRows.length) {
    const genomeResult = await supabase.from("business_genome_state").upsert(genomeRows, { onConflict: "business_id,dimension_key" });
    if (genomeResult.error) throw genomeResult.error;
  }

  const snapshotResult = await supabase.from("business_intelligence_snapshots").insert({
    business_id: businessId,
    audit_report_id: auditReportId ? String(auditReportId) : null,
    module_id: moduleId,
    health_score: snapshot.kpis.healthScore,
    compliance_score: snapshot.kpis.complianceScore,
    profit_score: snapshot.kpis.profitScore,
    operations_score: snapshot.kpis.operationsScore,
    coverage: snapshot.kpis.coverage,
    maturity_level: snapshot.maturity.level,
    maturity_label: snapshot.maturity.label,
    trend_direction: snapshot.trends.healthDirection,
    genome,
    kpis: snapshot.kpis,
    trends: snapshot.trends,
    coaching: snapshot.coaching,
    anomalies: snapshot.anomalies
  });
  if (snapshotResult.error) throw snapshotResult.error;
}

async function processAuditIntelligence({ businessId, auditReportId, moduleId, verifiedReport }) {
  if (!businessId) {
    return { processed: false, reason: "No business selected; BIC requires a businessId." };
  }

  const supabase = getClient();
  const { genome: currentState, previousSnapshot } = await readCurrentState(supabase, businessId);
  const genome = mergeGenome({ moduleId, verifiedReport, currentState });
  const kpis = calculateKpis(genome);
  const trends = calculateTrends(kpis, previousSnapshot);
  const maturity = calculateMaturity(kpis);
  const anomalies = detectAnomalies({ genome, trends, verifiedReport });
  const coaching = buildCoaching({ genome, kpis, trends, anomalies, moduleId });
  const snapshot = { processed: true, businessId, moduleId, genome, kpis, trends, maturity, anomalies, coaching };

  await persistIntelligence(supabase, { businessId, auditReportId, moduleId, verifiedReport, genome, snapshot });
  return snapshot;
}

module.exports = { processAuditIntelligence };
