function calculateMaturity(kpis) {
  if (!kpis.measuredDimensions) {
    return { level: 0, label: "Unmeasured", rationale: "Run specialist audits to establish the first baseline." };
  }

  const health = Number(kpis.healthScore || 0);
  const coverage = Number(kpis.coverage || 0);
  let level = 1;
  if (coverage >= 25 && health >= 55) level = 2;
  if (coverage >= 45 && health >= 65) level = 3;
  if (coverage >= 65 && health >= 75) level = 4;
  if (coverage >= 85 && health >= 85) level = 5;

  const labels = ["Unmeasured", "Reactive", "Structured", "Managed", "Optimised", "Executive-grade"];
  return {
    level,
    label: labels[level],
    rationale: `${coverage}% of the Business Genome is measured with a ${health}% health score.`
  };
}

module.exports = { calculateMaturity };
