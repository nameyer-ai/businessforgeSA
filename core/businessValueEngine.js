// core/businessValueEngine.js

/**
 * BusinessForge Business Value Engine
 *
 * Purpose:
 * Convert an existing verified audit report into a structured,
 * commercially useful business-value summary.
 *
 * Important:
 * - This engine does not invent financial values.
 * - It only uses monetary figures already present in the audit report.
 * - Missing values remain null rather than being estimated without evidence.
 * - All outputs include confidence and supporting basis.
 */

const DEFAULT_CURRENCY = "ZAR";

const VALUE_TYPES = {
    FINANCIAL_RISK: "financialRisk",
    RECOVERABLE_OPPORTUNITY: "recoverableOpportunity",
    COST_SAVING: "costSavingPotential",
    REVENUE_GROWTH: "revenueGrowthPotential"
};

const MODULE_VALUE_RULES = {
    "coida-specialist": {
        primaryType: VALUE_TYPES.FINANCIAL_RISK,
        label: "Statutory and compensation exposure"
    },

    "seta-navigator": {
        primaryType: VALUE_TYPES.RECOVERABLE_OPPORTUNITY,
        label: "Potential grant and levy recovery"
    },

    claralex: {
        primaryType: VALUE_TYPES.FINANCIAL_RISK,
        label: "Contract and legal exposure"
    },

    "brandguard-auditor": {
        primaryType: VALUE_TYPES.FINANCIAL_RISK,
        label: "Brand, consent and communication exposure"
    },

    flowcast: {
        primaryType: VALUE_TYPES.RECOVERABLE_OPPORTUNITY,
        label: "Working-capital improvement opportunity"
    },

    "margin-protector": {
        primaryType: VALUE_TYPES.COST_SAVING,
        label: "Margin leakage and cost-saving potential"
    },

    quoteforge: {
        primaryType: VALUE_TYPES.REVENUE_GROWTH,
        label: "Pricing and quotation growth opportunity"
    },

    rankcraft: {
        primaryType: VALUE_TYPES.REVENUE_GROWTH,
        label: "Market visibility and demand opportunity"
    },

    "procedure-ai": {
        primaryType: VALUE_TYPES.COST_SAVING,
        label: "Process-efficiency saving potential"
    },

    hireforge: {
        primaryType: VALUE_TYPES.COST_SAVING,
        label: "Hiring-risk and recruitment saving potential"
    },

    "review-ai": {
        primaryType: VALUE_TYPES.COST_SAVING,
        label: "Performance-improvement opportunity"
    },

    voiceforge: {
        primaryType: VALUE_TYPES.FINANCIAL_RISK,
        label: "Change-communication risk"
    },

    retainiq: {
        primaryType: VALUE_TYPES.REVENUE_GROWTH,
        label: "Client-retention value opportunity"
    }
};

function cleanText(value) {
    return String(value ?? "").trim();
}

function normaliseCurrency(currency) {
    const safeCurrency = cleanText(currency).toUpperCase();

    if (/^[A-Z]{3}$/.test(safeCurrency)) {
        return safeCurrency;
    }

    return DEFAULT_CURRENCY;
}

/**
 * Extract monetary amounts from ordinary audit text.
 *
 * Supported examples:
 * R85,000
 * R 85 000
 * ZAR 85,000
 * 85000 ZAR
 * $12,500
 *
 * The function returns all valid positive amounts it can identify.
 */
function extractMonetaryAmounts(value) {
    const text = cleanText(value);

    if (!text) {
        return [];
    }

    const amounts = [];
    const patterns = [
        /(?:R|ZAR)\s*([\d\s,]+(?:\.\d{1,2})?)/gi,
        /([\d\s,]+(?:\.\d{1,2})?)\s*(?:ZAR)/gi,
        /\$\s*([\d\s,]+(?:\.\d{1,2})?)/gi
    ];

    patterns.forEach(pattern => {
        let match;

        while ((match = pattern.exec(text)) !== null) {
            const parsed = Number(
                String(match[1] || "")
                    .replace(/\s/g, "")
                    .replace(/,/g, "")
            );

            if (Number.isFinite(parsed) && parsed > 0) {
                amounts.push(parsed);
            }
        }
    });

    return amounts;
}

function extractAmountsFromObject(value, visited = new WeakSet()) {
    if (value === null || value === undefined) {
        return [];
    }

    if (typeof value === "string" || typeof value === "number") {
        return extractMonetaryAmounts(value);
    }

    if (typeof value !== "object") {
        return [];
    }

    if (visited.has(value)) {
        return [];
    }

    visited.add(value);

    if (Array.isArray(value)) {
        return value.flatMap(item =>
            extractAmountsFromObject(item, visited)
        );
    }

    return Object.values(value).flatMap(item =>
        extractAmountsFromObject(item, visited)
    );
}

function largestAmount(values) {
    const validValues = values.filter(
        value => Number.isFinite(value) && value > 0
    );

    if (!validValues.length) {
        return null;
    }

    return Math.max(...validValues);
}

function sumUniqueAmounts(values) {
    const uniqueValues = [
        ...new Set(
            values
                .filter(value => Number.isFinite(value) && value > 0)
                .map(value => Math.round(value * 100) / 100)
        )
    ];

    if (!uniqueValues.length) {
        return null;
    }

    return uniqueValues.reduce((total, value) => total + value, 0);
}

function buildEvidenceItem({
    amount = null,
    confidence = "low",
    basis = [],
    source = "",
    label = ""
} = {}) {
    return {
        amount:
            Number.isFinite(amount) && amount > 0
                ? Math.round(amount * 100) / 100
                : null,
        confidence,
        basis: Array.isArray(basis)
            ? basis.filter(Boolean)
            : [],
        source: cleanText(source),
        label: cleanText(label)
    };
}

function getRiskPriority(report) {
    const risk = cleanText(
        report?.overallRiskRating ||
        report?.riskRating
    ).toLowerCase();

    const score = Number(report?.complianceScore);

    if (
        risk === "critical" ||
        risk === "high" ||
        (Number.isFinite(score) && score < 50)
    ) {
        return {
            level: "HIGH",
            score: 3,
            reason:
                "The audit contains a high-risk rating or a critically weak score."
        };
    }

    if (
        risk === "medium" ||
        (Number.isFinite(score) && score < 70)
    ) {
        return {
            level: "MEDIUM",
            score: 2,
            reason:
                "The audit contains material issues that should be addressed."
        };
    }

    if (
        risk === "low" ||
        (Number.isFinite(score) && score >= 70)
    ) {
        return {
            level: "LOW",
            score: 1,
            reason:
                "The audit does not currently indicate an urgent financial threat."
        };
    }

    return {
        level: "UNMEASURED",
        score: 0,
        reason:
            "The audit did not provide enough information to determine priority."
    };
}

function getFinancialExposureEvidence(report) {
    const financialExposure = report?.financialExposure || {};

    const amounts = extractAmountsFromObject(
        financialExposure
    );

    const amount = largestAmount(amounts);

    const basis = [
        cleanText(financialExposure.summary),
        cleanText(financialExposure.estimatedAmount),
        cleanText(financialExposure.calculationNotes)
    ].filter(Boolean);

    return buildEvidenceItem({
        amount,
        confidence: amount
            ? "high"
            : "low",
        basis,
        source: "financialExposure",
        label: "Financial exposure identified in the audit"
    });
}

function getOpportunityEvidence(report) {
    const opportunities = Array.isArray(
        report?.strategicOpportunities
    )
        ? report.strategicOpportunities
        : [];

    const amounts = extractAmountsFromObject(
        opportunities
    );

    const amount = sumUniqueAmounts(amounts);

    const basis = opportunities
        .map(item => {
            if (typeof item === "string") {
                return cleanText(item);
            }

            return [
                cleanText(item?.opportunity),
                cleanText(item?.potentialBenefit),
                cleanText(item?.recommendedAction)
            ]
                .filter(Boolean)
                .join(" — ");
        })
        .filter(Boolean);

    return buildEvidenceItem({
        amount,
        confidence: amount
            ? "moderate"
            : "low",
        basis,
        source: "strategicOpportunities",
        label: "Financial opportunity identified in the audit"
    });
}

function getRecommendedActionEvidence(report) {
    const actions = Array.isArray(
        report?.recommendedActions
    )
        ? report.recommendedActions
        : [];

    const amounts = extractAmountsFromObject(actions);
    const amount = sumUniqueAmounts(amounts);

    const basis = actions
        .map(item => {
            if (typeof item === "string") {
                return cleanText(item);
            }

            return [
                cleanText(item?.action),
                cleanText(item?.expectedOutcome),
                cleanText(item?.priority)
            ]
                .filter(Boolean)
                .join(" — ");
        })
        .filter(Boolean);

    return buildEvidenceItem({
        amount,
        confidence: amount
            ? "moderate"
            : "low",
        basis,
        source: "recommendedActions",
        label: "Value associated with recommended actions"
    });
}

function classifyValue({
    moduleId,
    financialExposure,
    opportunity,
    recommendedActions
}) {
    const rule =
        MODULE_VALUE_RULES[moduleId] || {
            primaryType: VALUE_TYPES.FINANCIAL_RISK,
            label: "Business value identified"
        };

    const result = {
        financialRisk: buildEvidenceItem({
            label: "Financial risk"
        }),

        recoverableOpportunity: buildEvidenceItem({
            label: "Recoverable opportunity"
        }),

        costSavingPotential: buildEvidenceItem({
            label: "Cost-saving potential"
        }),

        revenueGrowthPotential: buildEvidenceItem({
            label: "Revenue-growth potential"
        })
    };

    if (financialExposure.amount) {
        result.financialRisk = {
            ...financialExposure,
            label:
                rule.primaryType === VALUE_TYPES.FINANCIAL_RISK
                    ? rule.label
                    : "Financial exposure identified"
        };
    }

    const opportunitySource =
        opportunity.amount
            ? opportunity
            : recommendedActions;

    if (opportunitySource.amount) {
        result[rule.primaryType] = {
            ...opportunitySource,
            label: rule.label
        };
    }

    return result;
}

function calculatePotentialValue(valueSummary) {
    const opportunityTypes = [
        valueSummary.recoverableOpportunity,
        valueSummary.costSavingPotential,
        valueSummary.revenueGrowthPotential
    ];

    const amounts = opportunityTypes
        .map(item => item.amount)
        .filter(value => Number.isFinite(value) && value > 0);

    if (!amounts.length) {
        return null;
    }

    return amounts.reduce(
        (total, amount) => total + amount,
        0
    );
}

function calculateBusinessValue({
    moduleId,
    verifiedReport,
    currency = DEFAULT_CURRENCY
} = {}) {
    const safeReport = verifiedReport || {};
    const safeModuleId =
        cleanText(moduleId) ||
        "unclassified";

    const financialExposure =
        getFinancialExposureEvidence(safeReport);

    const opportunity =
        getOpportunityEvidence(safeReport);

    const recommendedActions =
        getRecommendedActionEvidence(safeReport);

    const classified = classifyValue({
        moduleId: safeModuleId,
        financialExposure,
        opportunity,
        recommendedActions
    });

    const priority =
        getRiskPriority(safeReport);

    const totalPotentialValue =
        calculatePotentialValue(classified);

    const hasFinancialEvidence = [
        classified.financialRisk.amount,
        classified.recoverableOpportunity.amount,
        classified.costSavingPotential.amount,
        classified.revenueGrowthPotential.amount
    ].some(
        value =>
            Number.isFinite(value) &&
            value > 0
    );

    return {
        processed: true,
        moduleId: safeModuleId,
        currency: normaliseCurrency(currency),

        financialRisk:
            classified.financialRisk,

        recoverableOpportunity:
            classified.recoverableOpportunity,

        costSavingPotential:
            classified.costSavingPotential,

        revenueGrowthPotential:
            classified.revenueGrowthPotential,

        totalPotentialValue,

        implementationPriority: priority,

        evidenceStatus: hasFinancialEvidence
            ? "financial-evidence-found"
            : "no-financial-value-stated",

        notice: hasFinancialEvidence
            ? "Values are derived from monetary amounts explicitly stated in the audit report."
            : "The audit did not contain enough explicit financial information to calculate a monetary value.",

        generatedAt:
            new Date().toISOString()
    };
}

module.exports = {
    calculateBusinessValue,
    extractMonetaryAmounts,
    MODULE_VALUE_RULES,
    VALUE_TYPES
};