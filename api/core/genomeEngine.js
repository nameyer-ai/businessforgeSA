const { GENOME_DIMENSIONS, dimensionsForModule } = require("./genomeDefinitions");

function clamp(value, minimum = 0, maximum = 100) {
  return Math.max(minimum, Math.min(maximum, Math.round(Number(value) || 0)));
}

function riskPenalty(rating) {
  const risk = String(rating || "").toLowerCase();
  if (risk === "critical") return 20;
  if (risk === "high") return 12;
  if (risk === "medium") return 5;
  return 0;
}

function severityPenalty(findings = []) {
  return Math.min(15, findings.reduce((total, finding) => {
    const severity = String(finding?.severity || "").toLowerCase();
    if (severity === "critical") return total + 5;
    if (severity === "high") return total + 3;
    if (severity === "medium") return total + 1;
    return total;
  }, 0));
}

function deriveAuditSignal(verifiedReport) {
  const base = clamp(verifiedReport?.complianceScore);
  const adjusted = base - riskPenalty(verifiedReport?.overallRiskRating) - severityPenalty(verifiedReport?.criticalFindings);
  return clamp(adjusted);
}

function mergeGenome({ moduleId, verifiedReport, currentState = [] }) {
  const currentByKey = new Map(currentState.map((item) => [item.dimension_key, item]));
  const affected = new Set(dimensionsForModule(moduleId).map((item) => item.key));
  const signal = deriveAuditSignal(verifiedReport);

  return GENOME_DIMENSIONS.map((definition) => {
    const previous = currentByKey.get(definition.key);
    if (!affected.has(definition.key)) {
      return previous ? { ...previous } : {
        dimension_key: definition.key,
        dimension_label: definition.label,
        pillar: definition.pillar,
        score: null,
        previous_score: null,
        measurement_count: 0,
        confidence: "unmeasured",
        source_module: null
      };
    }

    const previousScore = previous?.score == null ? null : Number(previous.score);
    const measurementCount = Number(previous?.measurement_count || 0) + 1;
    const score = previousScore == null
      ? signal
      : clamp((signal * 0.6) + (previousScore * 0.4));

    return {
      dimension_key: definition.key,
      dimension_label: definition.label,
      pillar: definition.pillar,
      score,
      previous_score: previousScore,
      measurement_count: measurementCount,
      confidence: measurementCount >= 5 ? "high" : measurementCount >= 2 ? "medium" : "low",
      source_module: moduleId
    };
  });
}

module.exports = { clamp, deriveAuditSignal, mergeGenome };
