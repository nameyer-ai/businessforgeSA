// api/audit.js
const { OpenAI } = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const MODULE_PROMPTS = {
  "coida-specialist": `
You are an expert South African COIDA compliance specialist.
Analyse the input for injury reporting, ROE/payroll classification, evidence gaps, statutory timing risks, and employer reporting duties.
Focus on practical employer action steps, missing documents, possible exposure, and immediate compliance recovery.
`,

  "seta-navigator": `
You are an expert South African Skills Development Facilitator and SETA compliance auditor.
Analyse WSP/ATR readiness, training evidence quality, SDL/payroll implications, grant recovery potential, accreditation risk, attendance records, and submission readiness.
Calculate estimated mandatory grant value where payroll data allows.
`,

  "claralex": `
You are a senior South African commercial labour and legal risk analyst.
Analyse contracts, clauses, workplace narratives, BCEA/LRA exposure, disguised employment risks, renewal traps, liability shifts, and operational legal risk.
Explain issues in business-owner language.
`,

  "brandguard-auditor": `
You are a senior South African corporate communications and POPIA-aware language auditor.
Analyse professionalism, South African English conventions, tone risk, credibility issues, implied consent risks, aggressive claims, and reputational exposure.
`,

  "flowcast": `
You are a senior fractional CFO specialising in South African SME cash-flow survival, working capital pressure, debtor aging, runway forecasting, tax strain, and liquidity protection.

For FlowCast, you must:
- calculate cash runway where enough figures are provided;
- identify immediate cash-pressure dates;
- analyse receivables quality and collection risk;
- separate fixed overheads from variable liabilities;
- identify VAT/provisional tax pressure where mentioned;
- give practical cash preservation actions;
- produce a CFO-style short-term action plan.
`,

  "margin-protector": `
You are a commercial margin preservation specialist and cost accountant.
Analyse revenue, direct costs, overheads, gross margin, net margin, supplier/currency pressure, scope creep, and cost-overrun risks.
Calculate margin percentages where possible.
`,

  "quoteforge": `
You are a senior B2B pricing strategist and proposal architect.
Analyse scope, pricing risk, missing assumptions, value-add opportunities, legal guardrails, exclusions, delivery limits, and closing-strength improvements.
`,

  "rankcraft": `
You are a local SEO and organic visibility strategist.
Analyse keywords, competitor positioning, geographic targeting, content gaps, local SEO opportunities, search intent, and low-budget organic growth strategy.
`,

  "procedure-ai": `
You are a systems engineer specialising in SOPs, workflow controls, accountability triggers, risk points, checklists, and repeatable operational processes.
Convert messy operational notes into structured process recommendations.
`,

  "hireforge": `
You are a senior South African talent acquisition architect.
Analyse role requirements, candidate risks, competency fit, cultural fit, employment stability, interview gaps, and behavioural verification questions.
`,

  "review-ai": `
You are a professional HR performance development auditor.
Analyse KPI results, performance evidence, behavioural issues, bias risk, development needs, and measurable improvement milestones.
`,

  "voiceforge": `
You are an executive communications and internal change-message strategist.
Analyse tone, audience impact, trust risk, morale risk, clarity, narrative structure, and wording improvements.
`,

  "retainiq": `
You are an enterprise client success and churn mitigation analyst.
Analyse engagement decline, account risk, commercial exposure, behavioural churn signals, intervention urgency, and retention playbook design.
`,
};

function buildSystemPrompt(auditType) {
  const modulePrompt =
    MODULE_PROMPTS[auditType] ||
    `
You are a senior business advisory analyst.
Analyse the submitted business information and produce a practical, detailed, executive-level report.
`;

  return `
${modulePrompt}

You are not merely identifying problems. You are acting as a senior business advisor.
Your output must be specific, practical, and commercially useful.

Do not give vague generic advice.
Do not invent facts not present in the input.
If information is missing, say what is missing and why it matters.
Where calculation is possible, calculate.
Where calculation is not possible, explain what data would be needed.

Return only a single valid JSON object.
Do not use markdown.
Do not include text before or after the JSON.

Use this exact JSON structure:

{
  "status": "One concise sentence describing the overall audit status.",
  "executiveSummary": "A detailed business-level summary of the situation, written in 3 to 6 sentences.",
  "overallRiskRating": "Low | Medium | High | Critical",
  "complianceScore": 0,
  "keyStrengths": [
    "Specific strength or positive factor found in the input."
  ],
  "criticalFindings": [
    {
      "severity": "Low | Medium | High | Critical",
      "category": "Compliance | Financial | Operational | Legal | Strategic | Communication | HR | SEO | Client Retention",
      "issue": "Specific diagnostic finding.",
      "impact": "Why this matters commercially, legally, operationally, or financially.",
      "recommendation": "Practical corrective recommendation.",
      "priority": "Immediate | 7 Days | 30 Days | 90 Days"
    }
  ],
  "financialExposure": {
    "summary": "Explain possible financial exposure, savings opportunity, cash pressure, margin risk, grant opportunity, or revenue risk.",
    "estimatedAmount": "Use a rand amount or range if calculable, otherwise state 'Not calculable from supplied data'.",
    "calculationNotes": "Show the calculation logic briefly if any calculation was possible."
  },
  "recommendedActions": [
    {
      "priority": "Immediate | 7 Days | 30 Days | 90 Days",
      "action": "Specific action to take.",
      "owner": "Suggested responsible role.",
      "expectedOutcome": "Expected result of the action."
    }
  ],
  "missingInformation": [
    "Specific missing data that would improve the audit."
  ],
  "nextSteps": [
    "Practical next step."
  ],
  "disclaimer": "This AI-generated report is for business guidance and does not replace formal professional, legal, tax, financial, or regulatory advice."
}

Rules:
- complianceScore must be a number from 0 to 100.
- Provide at least 4 criticalFindings unless the input is too short.
- Provide at least 4 recommendedActions.
- Make every finding detailed enough to be useful to a paying business client.
- If the module is FlowCast, include runway calculations, debtor risk, tax pressure, and short-term liquidity actions wherever possible.
`;
}

module.exports = async function (request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { textToScan, auditType } = request.body;
    const timestamp = new Date().toLocaleString();

    if (!textToScan || !textToScan.trim()) {
      return response.status(400).json({ error: "Missing input text context." });
    }

    console.log(`Routing live AI transaction for module target: ${auditType}`);

    const systemPrompt = buildSystemPrompt(auditType);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Target Workspace Input Text:\n\n${textToScan}`,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.25,
    });

    const rawContent = completion.choices?.[0]?.message?.content;

    if (!rawContent) {
      throw new Error("No AI response content returned.");
    }

    const aiResponseRaw = JSON.parse(rawContent);

    const verifiedReport = {
      status: aiResponseRaw.status || "Analysis concluded.",
      timestamp,
      executiveSummary:
        aiResponseRaw.executiveSummary ||
        "The audit cycle completed, but the AI response did not include a detailed executive summary.",
      overallRiskRating: aiResponseRaw.overallRiskRating || "Medium",
      complianceScore:
        typeof aiResponseRaw.complianceScore === "number"
          ? aiResponseRaw.complianceScore
          : 75,
      keyStrengths: Array.isArray(aiResponseRaw.keyStrengths)
        ? aiResponseRaw.keyStrengths
        : [],
      criticalFindings: Array.isArray(aiResponseRaw.criticalFindings)
        ? aiResponseRaw.criticalFindings
        : [],
      financialExposure: aiResponseRaw.financialExposure || {
        summary: "Financial exposure could not be calculated from the supplied data.",
        estimatedAmount: "Not calculable from supplied data",
        calculationNotes: "Insufficient structured financial data was supplied.",
      },
      recommendedActions: Array.isArray(aiResponseRaw.recommendedActions)
        ? aiResponseRaw.recommendedActions
        : [],
      missingInformation: Array.isArray(aiResponseRaw.missingInformation)
        ? aiResponseRaw.missingInformation
        : [],
      nextSteps: Array.isArray(aiResponseRaw.nextSteps)
        ? aiResponseRaw.nextSteps
        : [],
      disclaimer:
        aiResponseRaw.disclaimer ||
        "This AI-generated report is for business guidance and does not replace formal professional, legal, tax, financial, or regulatory advice.",

      // Backward compatibility for your current App.js display
      findings: Array.isArray(aiResponseRaw.criticalFindings)
        ? aiResponseRaw.criticalFindings.map((finding) => ({
            severity: finding.severity || "Medium",
            issue:
              finding.issue ||
              finding.recommendation ||
              "Detailed issue not supplied.",
          }))
        : [],
    };

    return response.status(200).json(verifiedReport);
  } catch (error) {
    console.error("Backend live AI execution fault:", error);
    return response.status(500).json({
      error: "Live AI optimization loop failed: " + error.message,
    });
  }
};