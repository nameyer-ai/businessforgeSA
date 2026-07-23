function buildCoaching({ genome, kpis, trends, anomalies, moduleId }) {
  const measured = genome.filter((item) => item.score !== null).sort((a, b) => a.score - b.score);
  const priorities = measured.slice(0, 3).map((item, index) => ({
    rank: index + 1,
    dimensionKey: item.dimension_key,
    title: `Strengthen ${item.dimension_label}`,
    reason: `${item.dimension_label} is currently measured at ${item.score}%.`,
    recommendedModule: item.source_module || moduleId
  }));

  let briefing = "The first intelligence baseline has been established.";
  if (kpis.healthScore !== null) {
    briefing = `Overall business health is ${kpis.healthScore}% with ${kpis.coverage}% genome coverage.`;
    if (trends.healthDirection === "improving") briefing += ` Health improved by ${trends.healthDelta} points.`;
    if (trends.healthDirection === "declining") briefing += ` Health declined by ${Math.abs(trends.healthDelta)} points and requires review.`;
  }
  if (anomalies.length) briefing += ` ${anomalies.length} material signal${anomalies.length === 1 ? "" : "s"} detected.`;

  return { briefing, priorities };
}

module.exports = { buildCoaching };
