function detectAnomalies({ genome, trends, verifiedReport }) {
  const anomalies = [];

  if (trends.healthDelta !== null && trends.healthDelta <= -10) {
    anomalies.push({ type: "health_drop", severity: "high", message: `Business health declined by ${Math.abs(trends.healthDelta)} points.` });
  }

  genome.filter((item) => item.score !== null && item.score < 40).forEach((item) => {
    anomalies.push({ type: "critical_dimension", severity: "high", dimensionKey: item.dimension_key, message: `${item.dimension_label} is critically low at ${item.score}%.` });
  });

  if (["high", "critical"].includes(String(verifiedReport?.overallRiskRating || "").toLowerCase())) {
    anomalies.push({ type: "audit_risk", severity: "high", message: `The latest audit returned a ${verifiedReport.overallRiskRating} risk rating.` });
  }

  return anomalies.slice(0, 8);
}

module.exports = { detectAnomalies };
