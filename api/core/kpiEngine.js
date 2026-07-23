function average(values) {
  const measured = values.filter((value) => value !== null && value !== undefined && Number.isFinite(Number(value)));
  if (!measured.length) return null;
  return Math.round(measured.reduce((sum, value) => sum + Number(value), 0) / measured.length);
}

function calculateKpis(genome) {
  const measured = genome.filter((item) => item.score !== null);
  const pillarScore = (pillar) => average(measured.filter((item) => item.pillar === pillar).map((item) => item.score));
  const healthScore = average(measured.map((item) => item.score));
  const coverage = Math.round((measured.length / Math.max(genome.length, 1)) * 100);

  return {
    healthScore,
    complianceScore: pillarScore("compliance"),
    profitScore: pillarScore("profit"),
    operationsScore: pillarScore("operations"),
    coverage,
    measuredDimensions: measured.length,
    totalDimensions: genome.length,
    highRiskDimensions: measured.filter((item) => Number(item.score) < 50).length
  };
}

module.exports = { average, calculateKpis };
