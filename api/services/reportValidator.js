const DEFAULT_DISCLAIMER =
  "This AI-generated report is for business guidance and does not replace formal professional, legal, tax, financial, or regulatory advice.";

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function cleanText(value, fallback = "") {
  return typeof value === "string" && value.trim() ? value.trim() : fallback;
}

function clampScore(value, fallback = 75) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return fallback;
  return Math.min(100, Math.max(0, Math.round(numeric * 100) / 100));
}

function normaliseRiskRating(value) {
  const rating = cleanText(value, "Medium").toLowerCase();
  if (rating === "critical") return "Critical";
  if (rating === "high") return "High";
  if (rating === "low") return "Low";
  return "Medium";
}

function normaliseSeverity(value) {
  const severity = cleanText(value, "Medium").toLowerCase();
  if (["low", "moderate", "high", "critical"].includes(severity)) {
    return severity;
  }
  if (severity === "medium") return "moderate";
  return "moderate";
}

function normalisePriority(value) {
  const priority = cleanText(value, "30 Days").toLowerCase();
  if (priority.includes("immediate")) return "critical";
  if (priority.includes("7")) return "high";
  if (priority.includes("30")) return "medium";
  if (priority.includes("90")) return "low";
  if (["critical", "high", "medium", "low"].includes(priority)) return priority;
  return "medium";
}

function normaliseTimeHorizon(value) {
  const horizon = cleanText(value).toLowerCase();
  if (horizon.includes("immediate")) return "immediate";
  if (horizon.includes("7")) return "30_days";
  if (horizon.includes("30")) return "30_days";
  if (horizon.includes("60")) return "60_days";
  if (horizon.includes("90")) return "90_days";
  if (horizon.includes("six") || horizon.includes("6 month")) return "six_months";
  return "long_term";
}

function findingTypeFromCategory(category) {
  const value = cleanText(category).toLowerCase();
  if (value.includes("compliance")) return "compliance_issue";
  if (value.includes("financial")) return "financial_issue";
  if (value.includes("operational")) return "operational_issue";
  if (value.includes("growth") || value.includes("strategic")) return "growth_constraint";
  return "weakness";
}

function recurrenceKey(...parts) {
  return parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120) || null;
}

function riskScoreFromRating(rating) {
  return {
    Low: 25,
    Medium: 50,
    High: 75,
    Critical: 95,
  }[rating] || 50;
}

function buildVerifiedReport(aiResponseRaw, timestamp) {
  const overallRiskRating = normaliseRiskRating(aiResponseRaw.overallRiskRating);
  const criticalFindings = asArray(aiResponseRaw.criticalFindings).map((finding) => ({
    severity: cleanText(finding?.severity, "Medium"),
    category: cleanText(finding?.category, "Strategic"),
    issue: cleanText(finding?.issue, "Detailed issue not supplied."),
    impact: cleanText(finding?.impact),
    recommendation: cleanText(finding?.recommendation),
    priority: cleanText(finding?.priority, "30 Days"),
  }));

  return {
    status: cleanText(aiResponseRaw.status, "Analysis concluded."),
    timestamp,
    executiveSummary: cleanText(
      aiResponseRaw.executiveSummary,
      "The audit completed, but the AI response did not include a detailed executive summary."
    ),
    overallRiskRating,
    complianceScore: clampScore(aiResponseRaw.complianceScore),
    keyStrengths: asArray(aiResponseRaw.keyStrengths).filter(Boolean),
    criticalFindings,
    financialExposure: aiResponseRaw.financialExposure || {
      summary: "Financial exposure could not be calculated from the supplied data.",
      estimatedAmount: "Not calculable from supplied data",
      calculationNotes: "Insufficient structured financial data was supplied.",
    },
    recommendedActions: asArray(aiResponseRaw.recommendedActions),
    strategicOpportunities: asArray(aiResponseRaw.strategicOpportunities),
    missingInformation: asArray(aiResponseRaw.missingInformation).filter(Boolean),
    nextSteps: asArray(aiResponseRaw.nextSteps).filter(Boolean),
    disclaimer: cleanText(aiResponseRaw.disclaimer, DEFAULT_DISCLAIMER),

    // Backward compatibility for the current app.js display.
    findings: criticalFindings.map((finding) => ({
      severity: finding.severity,
      issue: finding.issue || finding.recommendation || "Detailed issue not supplied.",
    })),
  };
}

module.exports = {
  buildVerifiedReport,
  cleanText,
  normalisePriority,
  normaliseSeverity,
  normaliseTimeHorizon,
  findingTypeFromCategory,
  recurrenceKey,
  riskScoreFromRating,
};
