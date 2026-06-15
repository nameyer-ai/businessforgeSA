const SYNTAX_SYSTEMS_MODULES = [
    {
        id: "coida-specialist",
        name: "COIDA 2022 Specialist",
        pillar: "compliance",
        guidance: "Validate employee classifications and earnings calculations strictly against the 2022 COIDA Amendment standards to mitigate penalty exposure.",
        inputs: [
            { id: "coida-class", type: "text", placeholder: "e.g., Class V: Construction, Class XIV: Professional Services", label: "Industry Sub-Class" },
            { id: "coida-payroll", type: "textarea", placeholder: "Paste summarized annual payroll and employee classification breakdowns...", label: "Return of Earnings (ROE) Data" }
        ],
        demoData: {
            "coida-class": "Class XIV: Professional Services (Sub-class 1910)",
            "coida-payroll": "Total Headcount: 14 employees.\nDirector A Earnings: R850,000\nSenior Consultant B Earnings: R720,000\nAdmin Staff (x12) Combined Earnings: R2,400,000\n\nNote: One minor office slip-and-fall injury occurred on 12 March; employee took 3 days off. No formal forms filed yet."
        }
    },
    {
        id: "seta-navigator",
        name: "SETA Navigator",
        pillar: "compliance",
        guidance: "Audit and align corporate training registries with mandatory grant framework metrics to optimize your WSP/ATR submissions.",
        inputs: [
            { id: "seta-chamber", type: "text", placeholder: "e.g., INSETA, MICT SETA, SERVICES SETA", label: "Target SETA Sector" },
            { id: "seta-data", type: "textarea", placeholder: "Paste raw training logs, course descriptions, and attendance summaries here...", label: "Training Registry Data" }
        ],
        demoData: {
            "seta-chamber": "SERVICES SETA",
            "seta-data": "Annual Leviable Payroll: R3,200,000.\nTraining Records:\n- 4x Staff completed 'Advanced Project Management' via an external unaccredited academy (Cost: R45,000).\n- 2x Junior Interns attended an internal basic office orientation (No formal attendance registers kept).\n- Looking to claim mandatory grants for the current financial cycle."
        }
    },
    {
        id: "claralex",
        name: "ClaraLex",
        pillar: "compliance",
        guidance: "Instantly parse legal agreements to flag hidden risk vectors, automatic renewals, and non-standard liability shifts.",
        inputs: [
            { id: "contract-type", type: "text", placeholder: "e.g., Master Services Agreement, Mutual NDA", label: "Agreement Category" },
            { id: "contract-text", type: "textarea", placeholder: "Paste contract clauses or full agreement text here...", label: "Legal Document Copy" }
        ],
        demoData: {
            "contract-type": "Independent Contractor Agreement (Advisory Service)",
            "contract-text": "Clause 4.1: The Service Provider shall be required to work a fixed 45 hours per week at our local branch.\nClause 7.3: Total fixed remuneration is set at R18,000 per month inclusive of all overtime.\nClause 11.2: This agreement shall automatically renew for further 12-month periods unless terminated via written notice exactly 90 days prior to the anniversary date."
        }
    },
    {
        id: "brandguard-auditor",
        name: "BrandGuard Auditor",
        pillar: "compliance",
        guidance: "Run a high-level corporate linguistic audit to guarantee absolute professional South African English alignment.",
        inputs: [
            { id: "brand-context", type: "text", placeholder: "e.g., Public Press Release, Client-Facing RFP Response", label: "Document Context" },
            { id: "brand-text", type: "textarea", placeholder: "Paste the marketing, operational, or legal copy requiring verification...", label: "Draft Content" }
        ],
        demoData: {
            "brand-context": "Client-Facing B2B Services Proposal Cover Page",
            "brand-text": "Hey guys! Check out our cheap solutions to fix your corporate stuff real fast. We analyze your systems and guarantee 100% full proof protection from legal hassles, no cap."
        }
    },
    {
        id: "flowcast",
        name: "FlowCast",
        pillar: "profit engine",
        guidance: "Analyze historical cash cycles and upcoming liabilities to map cash flow runways and flag working capital bottlenecks.",
        inputs: [
            { id: "fc-cycle", type: "text", placeholder: "e.g., 30-Day Net, 60-Day Accounts Receivable Retainers", label: "Standard Invoicing Terms" },
            { id: "fc-data", type: "textarea", placeholder: "Paste current accounts receivable aging balances and fixed overhead data...", label: "Cash Flow Ledgers" }
        ],
        demoData: {
            "fc-cycle": "30-Day Net from Statement Date",
            "fc-data": "Current Liquid Cash Reserves: R145,000.\nMonthly Fixed Overheads: R110,000.\nAccounts Receivable: Current: R45,000, 30 Days: R80,000, 60 Days: R120,000."
        }
    },
    {
        id: "margin-protector",
        name: "Margin Protector",
        pillar: "profit engine",
        guidance: "Isolate direct production costs, supplier shifts, and currency swings to defend baseline net margins from erosion.",
        inputs: [
            { id: "mp-target", type: "text", placeholder: "e.g., 35% Gross Margin Baseline", label: "Target Net/Gross Threshold" },
            { id: "mp-data", type: "textarea", placeholder: "Paste cost-of-goods-sold (COGS) breakdowns and recent supplier pricing sheets...", label: "Cost & Expense Logs" }
        ],
        demoData: {
            "mp-target": "Target Gross Margin: 45%, Target Net Margin: 18%",
            "mp-data": "Current Revenue: R500,000.\nDirect Component Imports (USD based): R180,000 (Up from R140,000 due to currency shift).\nLocal Logistics & Freight: R60,000.\nFixed Overhead/Salaries: R150,000."
        }
    },
    {
        id: "quoteforge",
        name: "QuoteForge",
        pillar: "profit engine",
        guidance: "Generate structural commercial pricing estimates embedded with scoping guardrails to prevent unbilled scope creep.",
        inputs: [
            { id: "qf-scope", type: "text", placeholder: "e.g., Enterprise Software Migration, Bespoke SLA Support", label: "Project/Service Scope Brief" },
            { id: "qf-data", type: "textarea", placeholder: "Paste resource hour estimations, specific material costs, and timeline constraints...", label: "Pricing Variables" }
        ],
        demoData: {
            "qf-scope": "Corporate Restructuring Advisory Plan",
            "qf-data": "Estimated Consultation Time: 45 hours on-site. Deliverables: 1x Comprehensive COIDA Audit Ledger. Requested delivery within 6 weeks."
        }
    },
    {
        id: "rankcraft",
        name: "RankCraft",
        pillar: "profit engine",
        guidance: "Audit corporate visibility rankings and keyword profiles to build high-converting search query positioning strategies.",
        inputs: [
            { id: "rc-competitors", type: "text", placeholder: "e.g., CompetitorA.co.za, CompetitorB.com", label: "Primary Market Rivals" },
            { id: "rc-data", type: "textarea", placeholder: "Paste current target keyword goals, search impressions, or copy drafts...", label: "SEO Positioning Profile" }
        ],
        demoData: {
            "rc-competitors": "apexcompliance.co.za, hyperion-advisory.co.za",
            "rc-data": "Target Focus Phrase: 'SDF consultant Johannesburg'. Current site traffic: 210 monthly unique visitors."
        }
    },
    {
        id: "procedure-ai",
        name: "ProcedureAI",
        pillar: "operations",
        guidance: "Convert chaotic tribal operational knowledge into crystal-clear Standard Operating Procedures (SOPs).",
        inputs: [
            { id: "proc-title", type: "text", placeholder: "e.g., Client Onboarding Pipeline, Weekly Server Backup Patching", label: "SOP Focus Area" },
            { id: "proc-data", type: "textarea", placeholder: "Paste raw, unorganized step-by-step notes on how the task is currently executed...", label: "Tribal Knowledge Dump" }
        ],
        demoData: {
            "proc-title": "End-of-Month Client Data Reporting under POPIA Compliance",
            "proc-data": "First, Thabo extracts the client list from Excel. Then he runs it through the analyzer. If there are missing IDs, he emails Sarah to look them up. Once complete, we save the PDF onto Google Drive."
        }
    },
    {
        id: "hireforge",
        name: "HireForge",
        pillar: "operations",
        guidance: "Build highly specialized job profiles and behavioral interview scoring matrices tuned to professional local standards.",
        inputs: [
            { id: "hf-role", type: "text", placeholder: "e.g., Senior Systems Auditor, Implementation Consultant", label: "Target Job Designation" },
            { id: "hf-data", type: "textarea", placeholder: "Paste internal core competency requirements, daily tasks, or basic skill prerequisites...", label: "Role Parameters" }
        ],
        demoData: {
            "hf-role": "Senior Skills Development Facilitator (SDF)",
            "hf-data": "Must have 5+ years verified experience working directly with SERVICES and MICT SETA portals. Expert competency in compiling WSP/ATR frameworks."
        }
    },
    {
        id: "review-ai",
        name: "ReviewAI",
        pillar: "operations",
        guidance: "Structure performance appraisal reviews, distilling performance logs into actionable development milestones.",
        inputs: [
            { id: "ra-metrics", type: "text", placeholder: "e.g., SLA Resolution Speed, Client Retention Key Performance Indicators", label: "Evaluation Benchmarks" },
            { id: "ra-data", type: "textarea", placeholder: "Paste internal manager observations, quarterly peer feedback, and performance results...", label: "Appraisal Inputs" }
        ],
        demoData: {
            "ra-metrics": "SLA Deadline Adherence (Target: >95%), Client Survey Score (Target: >4.5/5)",
            "ra-data": "Employee managed to successfully submit all 12 assigned corporate WSP ledgers completely on time this cycle. Client satisfaction scores averaged 4.7/5."
        }
    },
    {
        id: "voiceforge",
        name: "VoiceForge",
        pillar: "operations",
        guidance: "Refine training scripts, internal addresses, or client pitches to align precisely with targeted cultural tones.",
        inputs: [
            { id: "vf-audience", type: "text", placeholder: "e.g., Executive Board Proposal, Internal Staff Restructure Briefing", label: "Target Listening Audience" },
            { id: "vf-data", type: "textarea", placeholder: "Paste the draft script or rough outline of talking points...", label: "Draft Speech Content" }
        ],
        demoData: {
            "vf-audience": "Executive Board of Directors (Conservative Logistics Sector)",
            "vf-data": "Listen up everyone, we found a huge problem where we've been overpaying our skills development levy because our previous agency messed up our registration mappings."
        }
    },
    {
        id: "retainiq",
        name: "RetainIQ",
        pillar: "operations",
        guidance: "Identify early indicators of client or staff churn, creating localized proactive intervention strategies.",
        inputs: [
            { id: "ri-indicators", type: "text", placeholder: "e.g., Drop-off in support portal logins, unreturned account manager calls", label: "Risk Flags Observed" },
            { id: "ri-data", type: "textarea", placeholder: "Paste historical interaction dates, recent milestone surveys, or account drop-off records...", label: "Engagement Data Payload" }
        ],
        demoData: {
            "ri-indicators": "Unreturned strategy calls, drop-off in active portal utilization metrics",
            "ri-data": "Client account has been active for 14 months. Over the last 45 days, portal logins dropped from 8 times a week down to zero. Three separate outreach emails went completely unreplied."
        }
    }
];

function switchModule(moduleId) {
    console.log("Switching workspace view target to:", moduleId);
    
    const targetModule = SYNTAX_SYSTEMS_MODULES.find(m => m.id === moduleId);
    if (!targetModule) return;
    
    const workspace = document.getElementById('dynamic-workspace');
    if (!workspace) return;
    
    workspace.innerHTML = `
        <div class="flex-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-800 h-full">
            <div class="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
                <div class="space-y-6">
                    <div>
                        <h2 id="active-module-title" class="text-xl font-bold tracking-tight text-white">${targetModule.name}</h2>
                        <p id="active-module-guidance" class="text-xs text-slate-400 mt-1 leading-relaxed">${targetModule.guidance}</p>
                    </div>
                    <div id="dynamic-inputs-container" class="space-y-4"></div>
                </div>
                
                <div class="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full" id="action-trigger-row">
                    <button id="execution-loop-trigger" class="w-full sm:w-2/3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white py-4 px-6 rounded-xl font-bold shadow-lg shadow-indigo-500/10 transition-all flex items-center justify-center gap-2 tracking-wide text-sm">
                        <span>⚡</span> Execute Secure Audit Loop
                    </button>
                    <button id="sample-data-trigger" class="w-full sm:w-1/3 bg-slate-800 hover:bg-slate-700 text-slate-200 py-4 px-4 rounded-xl font-mono font-bold text-xs transition-all flex items-center justify-center gap-1.5 border border-slate-700">
                        <span>📋</span> Load Sample
                    </button>
                </div>
            </div>

            <div class="w-full md:w-1/2 flex flex-col bg-slate-950/60">
                <div class="border-b border-slate-800 px-5 py-3 bg-slate-950/40 flex items-center justify-between">
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Audit Ledger Transcript</span>
                    <div class="flex items-center gap-4">
                        <button id="print-ledger-trigger" class="hidden text-[11px] font-mono font-bold bg-slate-900 hover:bg-slate-800 text-indigo-400 border border-slate-800 px-2.5 py-1 rounded-md transition-all flex items-center gap-1">
                            🖨️ Export PDF
                        </button>
                        <div class="flex gap-1.5">
                            <span class="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                            <span id="pulsing-radar-dot" class="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                        </div>
                    </div>
                </div>
                <div id="audit-output-screen" class="p-5 flex-1 text-slate-500 text-sm font-mono whitespace-pre-wrap leading-relaxed overflow-y-auto">
                    Awaiting target data execution command input...
                </div>
            </div>
        </div>
    `;

    const inputsContainer = document.getElementById('dynamic-inputs-container');
    inputsContainer.innerHTML = `
        <div class="space-y-2">
            <label class="block text-[11px] font-mono uppercase tracking-wider text-indigo-400">Workspace Text Input Target</label>
            <textarea id="audit-text-input" class="w-full h-44 bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm font-mono text-white placeholder-slate-700 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Paste structural configuration logs, employee frameworks, or workspace text content details here..."></textarea>
        </div>
    `;

    document.getElementById('execution-loop-trigger').onclick = () => {
        executeSecureVercelAudit(moduleId);
    };

    document.getElementById('sample-data-trigger').onclick = () => {
        injectModuleSampleData(moduleId);
    };

    SYNTAX_SYSTEMS_MODULES.forEach(mod => {
        const btn = document.getElementById(`btn-${mod.id}`);
        if (btn) {
            if (mod.id === moduleId) {
                btn.className = "w-full text-left px-3 py-2.5 rounded-lg bg-slate-800 text-white transition-colors flex items-center gap-2 text-sm font-medium border border-slate-700/60";
            } else {
                btn.className = "w-full text-left px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium border border-transparent";
            }
        }
    });
}

async function executeSecureVercelAudit(moduleId) {
    const outputScreen = document.getElementById('audit-output-screen');
    const statusDot = document.getElementById('pulsing-radar-dot');

    const inputArea = document.getElementById('audit-text-input');
    const textToAnalyze = inputArea ? inputArea.value.trim() : "";

    if (!textToAnalyze) {
        alert("Please enter script or system text details before running an analysis lifecycle scan.");
        return;
    }

    if (outputScreen) {
        outputScreen.innerHTML =
`[🔄 SYSTEM TRACE]
Establishing secure advisory session...
Evaluating submitted data against specialist frameworks...
Generating executive audit report...`;

        outputScreen.style.color = "#818cf8";
    }

    if (statusDot) {
        statusDot.className =
            "w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse";
    }

    try {
        const response = await fetch('/api/audit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                textToScan: textToAnalyze,
                auditType: moduleId
            })
        });

        if (!response.ok) {
            throw new Error(
                `Handshake transaction error. HTTP status caught: ${response.status}`
            );
        }

        const resultPayload = await response.json();

        if (!outputScreen) return;

        outputScreen.style.color = "#cbd5e1";

        let report = "";

        report += `═══════════════════════════════════════════════\n`;
        report += ` BUSINESSFORGESA EXECUTIVE AUDIT REPORT\n`;
        report += `═══════════════════════════════════════════════\n\n`;

        report += `STATUS: ${resultPayload.status || "Complete"}\n`;
        report += `RISK RATING: ${resultPayload.overallRiskRating || "Medium"}\n`;
        report += `COMPLIANCE SCORE: ${resultPayload.complianceScore || 0}%\n`;
        report += `TIMESTAMP: ${resultPayload.timestamp || "N/A"}\n\n`;

        report += `════════ EXECUTIVE SUMMARY ════════\n`;
        report += `${resultPayload.executiveSummary || "No executive summary generated."}\n\n`;

        if (
            resultPayload.keyStrengths &&
            resultPayload.keyStrengths.length
        ) {
            report += `════════ KEY STRENGTHS ════════\n`;

            resultPayload.keyStrengths.forEach((item, index) => {
                report += `${index + 1}. ${item}\n`;
            });

            report += `\n`;
        }

        if (
            resultPayload.criticalFindings &&
            resultPayload.criticalFindings.length
        ) {
            report += `════════ CRITICAL FINDINGS ════════\n\n`;

            resultPayload.criticalFindings.forEach((finding, index) => {

                report += `${index + 1}. ${finding.category || "General"}\n`;
                report += `   Severity: ${finding.severity || "Medium"}\n`;
                report += `   Issue: ${finding.issue || ""}\n`;

                if (finding.impact) {
                    report += `   Impact: ${finding.impact}\n`;
                }

                if (finding.recommendation) {
                    report += `   Recommendation: ${finding.recommendation}\n`;
                }

                if (finding.priority) {
                    report += `   Priority: ${finding.priority}\n`;
                }

                report += `\n`;
            });
        }

        if (resultPayload.financialExposure) {

            report += `════════ FINANCIAL EXPOSURE ════════\n`;

            report += `Summary:\n`;
            report += `${resultPayload.financialExposure.summary || ""}\n\n`;

            report += `Estimated Amount:\n`;
            report += `${resultPayload.financialExposure.estimatedAmount || ""}\n\n`;

            report += `Calculation Notes:\n`;
            report += `${resultPayload.financialExposure.calculationNotes || ""}\n\n`;
        }

        if (
            resultPayload.recommendedActions &&
            resultPayload.recommendedActions.length
        ) {

            report += `════════ RECOMMENDED ACTION PLAN ════════\n\n`;

            resultPayload.recommendedActions.forEach((action, index) => {

                report += `${index + 1}. ${action.action || ""}\n`;

                if (action.priority) {
                    report += `   Priority: ${action.priority}\n`;
                }

                if (action.owner) {
                    report += `   Owner: ${action.owner}\n`;
                }

                if (action.expectedOutcome) {
                    report += `   Expected Outcome: ${action.expectedOutcome}\n`;
                }

                report += `\n`;
            });
        }

        if (
            resultPayload.missingInformation &&
            resultPayload.missingInformation.length
        ) {

            report += `════════ ADDITIONAL INFORMATION REQUIRED ════════\n`;

            resultPayload.missingInformation.forEach((item, index) => {
                report += `${index + 1}. ${item}\n`;
            });

            report += `\n`;
        }

        if (
            resultPayload.nextSteps &&
            resultPayload.nextSteps.length
        ) {

            report += `════════ NEXT STEPS ════════\n`;

            resultPayload.nextSteps.forEach((item, index) => {
                report += `${index + 1}. ${item}\n`;
            });

            report += `\n`;
        }

        report += `════════ DISCLAIMER ════════\n`;

        report +=
            resultPayload.disclaimer ||
            "This report is AI-generated and should be reviewed by an appropriate professional advisor.";

        outputScreen.innerHTML = report;

        const printBtn =
            document.getElementById('print-ledger-trigger');

        if (printBtn) {
            printBtn.classList.remove('hidden');
        }

        if (statusDot) {
            statusDot.className =
                "w-2.5 h-2.5 rounded-full bg-emerald-500";
        }

    } catch (error) {

        console.error(
            "Secure execution caught pipeline error:",
            error
        );

        if (outputScreen) {

            outputScreen.style.color = "#f87171";

            outputScreen.innerHTML =
`⚠️ [API EXPORT FAULT]

Serverless function routing failure.

Details:
${error.message}

Check:

1. Vercel deployment completed.
2. audit.js saved correctly.
3. OPENAI_API_KEY exists.
4. JSON response format remains valid.`;
        }

        if (statusDot) {
            statusDot.className =
                "w-2.5 h-2.5 rounded-full bg-rose-500";
        }
    }
}

const MODULE_SAMPLE_DATABASE = {
    "coida-specialist": `Incident Date: 2026-05-14\nIndustry Sector: Light Industrial Engineering\nEvent Narrative: Assistant technician sustained a laceration on the left forearm while operating a stationary grinding unit. Incident logged in internal register within 24 hours. Medical treatment received at local clinic. Urgent requirement to generate a compliant COIDA Section 24 employer report package to mitigate statutory non-compliance penalties.`,
    "seta-navigator": `Company Profile: Merchandising & Logistics Enterprise\nAnnual Payroll (SDL Taxable): R850,000\nWorkplace Skills Plan (WSP) Status: Draft completed but alignment metrics unverified.\nTarget Objective: Map internal software training and staff onboarding hours against specific SETA unit standards to safely claim back the 20% Mandatory Grant allocation before the upcoming annual submission deadline window closes.`,
    "claralex": `Legal Dilemma Context: An independent service provider was contracted under a fixed 3-month operational mandate. The project has concluded, but the contractor is now claiming expectations of permanent employment under the Labour Relations Act (LRA), citing the continuous use of company equipment and access to internal communication channels. Requesting clear risk mitigation paths in everyday language.`,
    "brandguard-auditor": `Welcome to our platform! Fill out this digital questionnaire to initialize your profile. By clicking submit, you explicitly agree to receive promotional text messages, automated calls, and third-party marketing offers from our corporate partners. We track your precise location via background browser cookies to optimize your delivery stream. No manual opt-out checkboxes are provided because continuing past this interface implies full contractual consent under our localized service terms.`,
    "flowcast": `Starting Cash Reserve: R95,000\nProjected Inbound Receivables (Day 1-30): R140,000\nProjected Inbound Receivables (Day 31-60): R60,000\nFixed Operational Debits (Salaries & Rent): R85,000/month\nVariable Supplier Invoices Due (Day 15): R45,000\nTax Commitments (Provisional VAT Due): R32,000`,
    "margin-protector": `Quoted Service Package Value: R65,000\nDirect Labor Allocation: 120 Hours @ R250/hour\nRaw Consumables & Material Procurement: R18,500\nSubcontractor Specialized Fees: R7,000\nLogistical Transport & Site Setup Allowances: R4,500\nObserved Slippage Margin: Historical 10% operational cost overrun on similar client handoffs.`,
    "quoteforge": `Target Client Profile: Corporate Financial Institution\nProject Mandate: Turnkey office automation and document management system migration.\nCore Competitive Edge: 100% local support desk response times under 2 hours, built-in POPIA encryption standards, and a completely flat-fee pricing tier. Need a high-closing proposal outline that highlights structural stability.`,
    "rankcraft": `Primary Business Niche: Commercial Commercial Pest Control\nTarget Geographic Focus: Johannesburg Northern Suburbs (Sandton, Randburg, Midrand)\nPrimary Competitor Profile: Large national franchises utilizing heavy Google Ads spend.\nCore Constraint: Budget is strictly limited; must capture organic local visibility through targeted search positioning rather than paid clicks.`,
    "procedure-ai": `Task Process Profile: End-of-Day Point of Sale (POS) Reconciliation and Physical Cash Vault Deposit.\nResponsible Staff Tier: Junior Shift Supervisor\nCurrent Friction Points: Frequent shortfalls in manual ledger balancing, missing supervisor signatures on physical tracking slips, and general confusion regarding the exact protocol to follow if a variance is detected.`,
    "hireforge": `Job Profile: Senior Customer Success Associate\nKey Competencies: High emotional intelligence, fluent corporate English, experience with CRM software ticketing architecture, and basic dispute de-escalation tactics.\nCandidate Interview Answers: Demonstrates excellent communication skills but exhibits a history of switching employers every 6 months.`,
    "review-ai": `Employee Review Framework: 6-Month Mid-Year Operational Performance Audit\nStaff Member Role: Internal Inventory & Warehouse Clerk\nPerformance Metrics: Exceptional score on physical accuracy and barcode tracking (98%); critical score drop on shift punctuality and internal communication responsiveness. Team collaboration notes show frequent friction.`,
    "voiceforge": `Internal Communication Objective: Announce a critical structural change to the company's monthly commission and performance bonus calculation metrics.\nTarget Audience: Core Outbound Sales and Account Management Teams\nCore Directive: Transition from a flat-rate payout structure to a tiered, performance-linked matrix. Tone must remain motivating, clear, and focused on growth without sparking internal panic.`,
    "retainiq": `Client Account Status: Flagged for high churn risk.\nSubscription Profile: Active 18 months, medium enterprise level, recent drop in daily platform login metrics by 65% over the past 30 days.\nCustomer Feedback Log: Complained about a slow interface speed during historical document generation loops via a support ticket closed last week.`
};

function injectModuleSampleData(moduleId) {
    const inputArea = document.getElementById('audit-text-input');
    const outputScreen = document.getElementById('audit-output-screen');
    const sampleText = MODULE_SAMPLE_DATABASE[moduleId] || `Sample placeholder data matrix for target workspace ID: \${moduleId}`;
    
    if (inputArea) {
        inputArea.value = sampleText.trim();
        if (outputScreen) {
            outputScreen.style.color = "#94a3b8";
            outputScreen.innerHTML = `[i] Live module sample data successfully loaded into input panel matrix.\nPress "Execute Secure Audit Loop" to analyze this text structure...`;
        }
    }
}

function showWelcomeDashboard() {
    const workspace = document.getElementById('dynamic-workspace');
    if (!workspace) return;

    workspace.innerHTML = `
        <div class="p-8 space-y-8 max-w-5xl">
            <div class="border-b border-slate-800 pb-6">
                <div class="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-1">System Core Console</div>
                <h1 class="text-3xl font-extrabold tracking-tight text-white">Syntax & Systems Framework</h1>
                <p class="text-slate-400 text-sm mt-2 leading-relaxed">
                    Welcome to BusinessForgeSA. This automated corporate advisory environment processes raw audit telemetry parameters across compliance, financial forecasting, and operational procedures.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div class="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                    <div class="text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">🛡️ Pillar 01</div>
                    <h3 class="text-slate-200 font-bold text-sm">Compliance</h3>
                    <p class="text-slate-400 text-xs mt-2 leading-relaxed">Audit corporate assets against COIDA statutory boundaries, SETA frameworks, and POPIA privacy laws.</p>
                </div>
                <div class="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                    <div class="text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">📈 Pillar 02</div>
                    <h3 class="text-slate-200 font-bold text-sm">Profit Engine</h3>
                    <p class="text-slate-400 text-xs mt-2 leading-relaxed">Isolate margin erosion targets, manage cash runwayparameters, and secure business estimations.</p>
                </div>
                <div class="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                    <div class="text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">⚙️ Pillar 03</div>
                    <h3 class="text-slate-200 font-bold text-sm">Operations</h3>
                    <p class="text-slate-400 text-xs mt-2 leading-relaxed">Convert tribal workflows into repeatable Standard Operating Procedures and performance trackers.</p>
                </div>
            </div>
        </div>
    `;
}

function initializeApplicationCore() {console.log("Mounting sidebar event hooks to configuration artifacts...");
    
    SYNTAX_SYSTEMS_MODULES.forEach(mod => {
        const sidebarButton = document.getElementById(`btn-${mod.id}`);
        if (sidebarButton) {
            sidebarButton.onclick = () => {
                switchModule(mod.id);
            };
        }
    });

    showWelcomeDashboard();
}

window.onload = initializeApplicationCore;