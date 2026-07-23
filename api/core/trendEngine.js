function delta(current, previous) {
  if (current === null || current === undefined || previous === null || previous === undefined) return null;
  return Math.round(Number(current) - Number(previous));
}

function direction(change) {
  if (change === null) return "unknown";
  if (change >= 3) return "improving";
  if (change <= -3) return "declining";
  return "stable";
}

function calculateTrends(currentKpis, previousSnapshot) {
  const previous = previousSnapshot?.kpis || {};
  const healthDelta = delta(currentKpis.healthScore, previous.healthScore);

  return {
    healthDelta,
    healthDirection: direction(healthDelta),
    complianceDelta: delta(currentKpis.complianceScore, previous.complianceScore),
    profitDelta: delta(currentKpis.profitScore, previous.profitScore),
    operationsDelta: delta(currentKpis.operationsScore, previous.operationsScore)
  };
}

module.exports = { delta, direction, calculateTrends };
