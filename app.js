// ==========================================
// 1. COMPLETE 13-ARTIFACT CONFIGURATION MAP
// ==========================================
const SYNTAX_SYSTEMS_MODULES = [
    // --- PILLAR 1: COMPLIANCE ---
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

    // --- PILLAR 2: PROFIT ENGINE ---
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

    // --- PILLAR 3: OPERATIONS ---
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

// ==========================================
// 2. DYNAMIC WORKSPACE ROUTER (THE BRIDGE)
// ==========================================
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
                    <button id="execution-loop-trigger" class="w-full sm:flex-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white py-4 px-6 rounded-xl font-bold shadow-lg shadow-indigo-500/10 transition-all flex items-center justify-center gap-2 tracking-wide text-sm">
                        <span>⚡</span> Execute Local Audit Loop
                    </button>
                </div>
            </div>

            <div class="w-full md:w-1/2 flex flex-col bg-slate-950/60">
                <div class="border-b border-slate-800 px-5 py-3 bg-slate-950/40 flex items-center justify-between">
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">Audit Ledger Transcript</span>
                    <div class="flex gap-1.5">
                        <span class="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                        <span class="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                    </div>
                </div>
                <div id="audit-output-screen" class="p-5 flex-1 text-slate-500 text-sm font-mono whitespace-pre-wrap leading-relaxed"></div>
            </div>
        </div>
    `;

    const inputContainer = document.getElementById('dynamic-inputs-container');
    inputContainer.innerHTML = ""; 

    targetModule.inputs.forEach(input => {
        const fieldWrapper = document.createElement('div');
        fieldWrapper.className = "space-y-2";

        const label = document.createElement('label');
        label.className = "block text-xs font-bold uppercase tracking-wider text-slate-400";
        label.innerHTML = `${input.label} <span class="text-indigo-400">*</span>`;

        let inputField;
        if (input.type === "textarea") {
            inputField = document.createElement('textarea');
            inputField.className = "w-full h-40 bg-slate-900 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none";
        } else {
            inputField = document.createElement('input');
            inputField.type = "text";
            inputField.className = "w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500";
        }

        inputField.id = input.id;
        inputField.placeholder = input.placeholder;

        fieldWrapper.appendChild(label);
        fieldWrapper.appendChild(inputField);
        inputContainer.appendChild(fieldWrapper);
    });

    const runButton = document.getElementById('execution-loop-trigger');
    if (runButton) {
        runButton.setAttribute('onclick', `processModuleAudit('${moduleId}')`);
        
        let buttonGroup = runButton.parentElement;
        
        const oldDemoBtn = document.getElementById('demo-data-trigger');
        if (oldDemoBtn) oldDemoBtn.remove();

        const demoButton = document.createElement('button');
        demoButton.id = 'demo-data-trigger';
        demoButton.type = 'button';
        demoButton.className = "bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-3 px-4 rounded-xl transition-all text-sm font-mono border border-slate-700 shadow-md ml-2";
        demoButton.innerText = "📋 Load Demo Data";
        demoButton.setAttribute('onclick', `loadModuleDemoData('${moduleId}')`);
        
        buttonGroup.appendChild(demoButton);
    }

    const outputScreen = document.getElementById('audit-output-screen');
    if (outputScreen) {
        outputScreen.className = "p-5 flex-1 text-slate-500 text-sm font-mono whitespace-pre-wrap";
        outputScreen.innerHTML = `[SYSTEM STANDBY]: Awaiting execution parameters for ${targetModule.name}...`;
    }

    SYNTAX_SYSTEMS_MODULES.forEach(mod => {
        const btn = document.getElementById(`btn-${mod.id}`);
        if (btn) {
            if (mod.id === moduleId) {
                btn.className = "w-full flex items-center justify-between px-4 py-3 bg-slate-800 text-white rounded-xl border border-slate-700 transition-all font-medium text-sm text-left";
            } else {
                btn.className = "w-full flex items-center justify-between px-4 py-3 hover:bg-slate-900/50 text-slate-400 hover:text-slate-200 rounded-xl transition-all text-sm text-left";
            }
        }
    });
}

// =========================================================================
// 3. SECURE BACKEND PIPELINE EXECUTION (POINTING TO NETLIFY FUNCTIONS)
// =========================================================================
async function processModuleAudit(moduleId) {
    console.log("Initiating Secure Netlify Cloud Pipeline for Artifact:", moduleId);
    
    const outputScreen = document.getElementById('audit-output-screen');
    const targetModule = SYNTAX_SYSTEMS_MODULES.find(m => m.id === moduleId);
    
    if (!outputScreen || !targetModule) return;

    // Set loading state
    outputScreen.className = "p-5 flex-1 text-indigo-400 text-sm font-mono animate-pulse whitespace-pre-wrap";
    outputScreen.innerHTML = `[CONNECTING]: Contacting secure Netlify backend vault...\n[PROCESSING]: Running specialized BusinessForgeSA audit frameworks via cloud middleman...`;

    const collectedInputs = {};
    let missingField = false;

    targetModule.inputs.forEach(input => {
        const inputElement = document.getElementById(input.id);
        if (inputElement) {
            collectedInputs[input.id] = inputElement.value.trim();
            if (!collectedInputs[input.id]) missingField = true;
        }
    });

    if (missingField) {
        outputScreen.className = "p-5 flex-1 text-rose-400 text-sm font-mono whitespace-pre-wrap";
        outputScreen.innerHTML = `[INPUT ERROR]: Verification failed. All parameter data fields are mandatory.`;
        return;
    }

    try {
        // --- SECURITY REMASTER: WE CALL THE RELATIVE SERVERLESS PATH INSSTEAD OF GOOGLE DIRECTLY ---
        const apiTargetUrl = "/.netlify/functions/audit-engine";
        console.log("Pinging local secure middleman function...");

        const response = await fetch(apiTargetUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                moduleId: moduleId,
                inputs: collectedInputs
            })
        });

        const apiData = await response.json();
        
        // Match the structural return parameter output of audit-engine.js ({ output: aiAnalysis })
        if (response.ok && apiData.output) {
            const aiAnalysis = apiData.output;
            
            outputScreen.className = "flex flex-col flex-1 h-full max-h-[500px] overflow-hidden";
            outputScreen.innerHTML = `
                <div class="flex items-center justify-between p-3 border-b border-slate-800 bg-slate-950/50">
                    <span class="text-xs font-mono text-indigo-400 uppercase tracking-wider">Audit Ledger Verified</span>
                    <button onclick="exportAuditToPDF('${targetModule.name}')" class="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-1.5 px-3 rounded-lg transition-all text-xs font-mono shadow-sm flex items-center space-x-1">
                        <span>📥 Export PDF Report</span>
                    </button>
                </div>
                <div id="printable-audit-content" class="p-5 flex-1 text-slate-200 text-sm overflow-y-auto leading-relaxed space-y-4 whitespace-pre-wrap">
${aiAnalysis}
                </div>
            `;
        } else {
            console.error("Netlify serverless function rejection details:", apiData);
            outputScreen.className = "p-5 flex-1 text-rose-400 text-sm font-mono whitespace-pre-wrap";
            outputScreen.innerHTML = `[API ERROR]: Serverless function execution failed. Code: ${apiData.error ? apiData.error : 'UNKNOWN'}`;
        }

    } catch (networkError) {
        console.error("Cloud middleman communication failure:", networkError);
        outputScreen.className = "p-5 flex-1 text-rose-400 text-sm font-mono whitespace-pre-wrap";
        outputScreen.innerHTML = `[CONNECTION ERROR]: Failed to contact your Netlify environment. Ensure site is deployed.`;
    }
}

// AUTOMATIC DEMO DATA INJECTOR
function loadModuleDemoData(moduleId) {
    const targetModule = SYNTAX_SYSTEMS_MODULES.find(m => m.id === moduleId);
    if (!targetModule || !targetModule.demoData) {
        console.warn(`No demo data layout verified for module: ${moduleId}`);
        return;
    }

    Object.entries(targetModule.demoData).forEach(([inputId, sampleValue]) => {
        const inputField = document.getElementById(inputId);
        if (inputField) {
            inputField.value = sampleValue;
            inputField.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
    
    console.log(`Demo data successfully injected for artifact: ${moduleId}`);
}

// ISOLATED AUDIT LEDGER PDF EXPORTER
function exportAuditToPDF(moduleName) {
    const contentElement = document.getElementById('printable-audit-content');
    if (!contentElement) return;

    const printWindow = window.open('', '_blank', 'width=800,height=600');
    const reportStyles = `
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; }
            .header { border-bottom: 2px solid #4f46e5; padding-bottom: 15px; margin-bottom: 30px; }
            .title { font-size: 24px; font-weight: bold; color: #0f172a; margin: 0; }
            .subtitle { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px; }
            .content { font-size: 14px; white-space: pre-wrap; color: #334155; }
            @media print { body { padding: 0; } @page { margin: 2cm; } }
        </style>
    `;

    printWindow.document.write(`
        <html>
        <head>
            <title>BusinessForgeSA - ${moduleName} Audit</title>
            ${reportStyles}
        </head>
        <body>
            <div class="header">
                <div class="title">${moduleName} Ledger Report</div>
                <div class="subtitle">Generated via BusinessForgeSA Advisory Core • System Verified</div>
            </div>
            <div class="content">${contentElement.innerText}</div>
        </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 250);
}

// ==========================================
// 4. LANDING INTERFACE HUB CONTROL ROUTER
// ==========================================
function showWelcomeDashboard() {
    console.log("Loading default platform onboarding dashboard layout...");
    
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
            <a href="operating-instructions.pdf" target="_blank" class="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-bold py-3 px-4 rounded-xl border border-slate-700 shrink-0 transition-all flex items-center gap-2">
                    📖 Instruction Manual (.PDF)
                </a>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div class="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                    <div class="text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">🛡️ Pillar 01</div>
                    <h3 class="text-slate-200 font-bold text-sm">Compliance</h3>
                    <p class="text-slate-400 text-xs mt-2 leading-relaxed">Audit corporate assets against COIDA statutory boundaries, SETA frameworks, and POPIA privacy laws.</p>
                </div>
                <div class="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                    <div class="text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">📈 Pillar 02</div>
                    <h3 class="text-slate-200 font-bold text-sm">Profit Engine</h3>
                    <p class="text-slate-400 text-xs mt-2 leading-relaxed">Isolate margin erosion targets, manage cash runway parameters, and secure business estimations.</p>
                </div>
                <div class="p-5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                    <div class="text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">⚙️ Pillar 03</div>
                    <h3 class="text-slate-200 font-bold text-sm">Operations</h3>
                    <p class="text-slate-400 text-xs mt-2 leading-relaxed">Convert tribal workflows into repeatable Standard Operating Procedures and performance trackers.</p>
                </div>
            </div>

            <div class="bg-indigo-950/20 border border-indigo-900/40 p-5 rounded-xl flex items-start space-x-4">
                <span class="text-indigo-400 text-xl mt-0.5">⚡</span>
                <div>
                    <h4 class="text-indigo-300 font-semibold text-xs font-mono uppercase tracking-wider">Initialization Instructions</h4>
                    <p class="text-slate-300 text-xs mt-1.5 leading-relaxed">
                        To initiate a live advisory data loop, manage parameter targets, or review transcripts, select an active operational module from the left control terminal sidebar menu.
                    </p>
                </div>
            </div>
        </div>
    `;

    SYNTAX_SYSTEMS_MODULES.forEach(mod => {
        const btn = document.getElementById(`btn-${mod.id}`);
        if (btn) {
            btn.className = "w-full text-left px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium";
        }
    });
}

// Run default layout load immediately on initiation
showWelcomeDashboard();

console.log("BusinessForgeSA Core Engine Map successfully injected and secured.");