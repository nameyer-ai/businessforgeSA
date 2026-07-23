const GENOME_DIMENSIONS = Object.freeze([
  { key: "workplace_safety", label: "Workplace Safety", pillar: "compliance", modules: ["coida-specialist"] },
  { key: "statutory_readiness", label: "Statutory Readiness", pillar: "compliance", modules: ["coida-specialist", "seta-navigator"] },
  { key: "classification_accuracy", label: "Classification Accuracy", pillar: "compliance", modules: ["coida-specialist"] },
  { key: "skills_development", label: "Skills Development", pillar: "compliance", modules: ["seta-navigator"] },
  { key: "grant_readiness", label: "Grant Readiness", pillar: "compliance", modules: ["seta-navigator"] },
  { key: "legal_exposure", label: "Legal Exposure", pillar: "compliance", modules: ["claralex"] },
  { key: "contract_discipline", label: "Contract Discipline", pillar: "compliance", modules: ["claralex"] },
  { key: "brand_quality", label: "Brand Quality", pillar: "compliance", modules: ["brandguard-auditor"] },

  { key: "cash_resilience", label: "Cash Resilience", pillar: "profit", modules: ["flowcast"] },
  { key: "working_capital", label: "Working Capital", pillar: "profit", modules: ["flowcast"] },
  { key: "margin_strength", label: "Margin Strength", pillar: "profit", modules: ["margin-protector"] },
  { key: "cost_control", label: "Cost Control", pillar: "profit", modules: ["margin-protector"] },
  { key: "pricing_discipline", label: "Pricing Discipline", pillar: "profit", modules: ["quoteforge"] },
  { key: "scope_protection", label: "Scope Protection", pillar: "profit", modules: ["quoteforge"] },
  { key: "market_visibility", label: "Market Visibility", pillar: "profit", modules: ["rankcraft"] },
  { key: "search_positioning", label: "Search Positioning", pillar: "profit", modules: ["rankcraft"] },

  { key: "process_maturity", label: "Process Maturity", pillar: "operations", modules: ["procedure-ai"] },
  { key: "documentation_quality", label: "Documentation Quality", pillar: "operations", modules: ["procedure-ai"] },
  { key: "talent_fit", label: "Talent Fit", pillar: "operations", modules: ["hireforge"] },
  { key: "performance_management", label: "Performance Management", pillar: "operations", modules: ["review-ai"] },
  { key: "communication_quality", label: "Communication Quality", pillar: "operations", modules: ["voiceforge"] },
  { key: "change_readiness", label: "Change Readiness", pillar: "operations", modules: ["voiceforge", "procedure-ai"] },
  { key: "client_retention", label: "Client Retention", pillar: "operations", modules: ["retainiq"] },
  { key: "engagement_health", label: "Engagement Health", pillar: "operations", modules: ["retainiq"] }
]);

function dimensionsForModule(moduleId) {
  return GENOME_DIMENSIONS.filter((dimension) => dimension.modules.includes(moduleId));
}

module.exports = { GENOME_DIMENSIONS, dimensionsForModule };
