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



const ENTERPRISE_STATE = {
    businesses: [],
    activeBusinessId: localStorage.getItem("businessforge_active_business_id") || "",
    auditHistory: JSON.parse(localStorage.getItem("businessforge_audit_history") || "[]"),
    currentView: "dashboard"
};

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatNumber(value) {
    const number = Number(value || 0);
    return new Intl.NumberFormat("en-ZA", { maximumFractionDigits: 0 }).format(number);
}

function setWorkspaceHeading(kicker, title) {
    const kickerNode = document.getElementById("workspace-kicker");
    const titleNode = document.getElementById("workspace-title");
    if (kickerNode) kickerNode.textContent = kicker;
    if (titleNode) titleNode.textContent = title;
}

function clearActiveNavigation() {
    document.querySelectorAll(".enterprise-nav-item.active").forEach(node => node.classList.remove("active"));
}

function setActiveNavigation(id) {
    clearActiveNavigation();
    const node = document.getElementById(id);
    if (node) node.classList.add("active");
}

function toggleEnterpriseSidebar() {
    document.getElementById("enterprise-sidebar")?.classList.toggle("collapsed");
}

function getManagementKey() {
    return sessionStorage.getItem("businessforge_management_key") || "";
}

function saveManagementKey(value) {
    const key = String(value || "").trim();
    if (key) sessionStorage.setItem("businessforge_management_key", key);
    else sessionStorage.removeItem("businessforge_management_key");
}

function getActiveBusiness() {
    return ENTERPRISE_STATE.businesses.find(item => item.id === ENTERPRISE_STATE.activeBusinessId) || null;
}

function getBusinessName(businessId) {
    return ENTERPRISE_STATE.businesses.find(item => item.id === businessId)?.business_name || "Unassigned business";
}

function updateActiveBusinessControls() {
    const selector = document.getElementById("active-business-select");
    if (!selector) return;

    selector.innerHTML = '<option value="">No business selected</option>' + ENTERPRISE_STATE.businesses
        .filter(item => item.status !== "inactive")
        .map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.business_name)}</option>`)
        .join("");

    const fallback = ENTERPRISE_STATE.businesses.find(item => item.is_default && item.status !== "inactive") || ENTERPRISE_STATE.businesses.find(item => item.status !== "inactive");
    if (!ENTERPRISE_STATE.activeBusinessId && fallback) ENTERPRISE_STATE.activeBusinessId = fallback.id;
    selector.value = ENTERPRISE_STATE.activeBusinessId;

    const active = getActiveBusiness();
    const meta = document.getElementById("active-business-edition");
    if (meta) meta.textContent = active ? `${active.edition_code || "GLOBAL"} Edition · ${active.currency_code || "—"}` : "No active business";
}

function handleActiveBusinessChange(id) {
    ENTERPRISE_STATE.activeBusinessId = id || "";
    localStorage.setItem("businessforge_active_business_id", ENTERPRISE_STATE.activeBusinessId);
    updateActiveBusinessControls();
    if (ENTERPRISE_STATE.currentView === "dashboard") showExecutiveDashboard();
}

async function enterpriseApi(path, options = {}) {
    const key = getManagementKey();
    const headers = { ...(options.headers || {}) };
    if (options.body && !headers["Content-Type"]) headers["Content-Type"] = "application/json";
    if (key) headers["x-history-key"] = key;

    const response = await fetch(path, { ...options, headers });
    let payload = {};
    try { payload = await response.json(); } catch (_) { payload = {}; }
    if (!response.ok) throw new Error(payload.error || payload.details || `Request failed with status ${response.status}`);
    return payload;
}

async function loadBusinesses({ silent = false } = {}) {
    const key = getManagementKey();
    if (!key) {
        ENTERPRISE_STATE.businesses = [];
        updateActiveBusinessControls();
        return false;
    }

    try {
        const payload = await enterpriseApi("/api/business-profiles");
        ENTERPRISE_STATE.businesses = Array.isArray(payload.businesses) ? payload.businesses : [];
        updateActiveBusinessControls();
        return true;
    } catch (error) {
        if (!silent) showWorkspaceNotice(error.message, "error");
        return false;
    }
}

function showWorkspaceNotice(message, type = "info") {
    const node = document.getElementById("workspace-notice");
    if (node) node.innerHTML = `<div class="notice ${type}">${escapeHtml(message)}</div>`;
}

function openManagementKeyDialog(nextAction = "profiles") {
    const existing = document.getElementById("management-key-modal");
    if (existing) existing.remove();

    document.body.insertAdjacentHTML("beforeend", `
        <div id="management-key-modal" class="modal-backdrop">
            <div class="enterprise-modal" style="max-width:480px">
                <div class="modal-header">
                    <div><div class="enterprise-eyebrow">Owner access</div><div class="modal-title">Connect Business Profiles</div></div>
                    <button class="modal-close" onclick="closeEnterpriseModal('management-key-modal')">×</button>
                </div>
                <div class="notice info">Enter the same value stored as <strong>HISTORY_ADMIN_KEY</strong> in Vercel. It is kept only in this browser session.</div>
                <div class="form-field">
                    <label>Management key</label>
                    <input id="management-key-input" type="password" class="enterprise-input" autocomplete="off" placeholder="Enter owner management key">
                </div>
                <div id="management-key-error" class="mt-3"></div>
                <div class="flex justify-end gap-2 mt-5">
                    <button class="secondary-button" onclick="closeEnterpriseModal('management-key-modal')">Cancel</button>
                    <button class="primary-button" onclick="connectManagementKey('${nextAction}')">Connect</button>
                </div>
            </div>
        </div>`);
}

async function connectManagementKey(nextAction) {
    const input = document.getElementById("management-key-input");
    const errorNode = document.getElementById("management-key-error");
    saveManagementKey(input?.value || "");
    const loaded = await loadBusinesses({ silent: true });
    if (!loaded) {
        saveManagementKey("");
        if (errorNode) errorNode.innerHTML = '<div class="notice error">The management key was rejected or the API is unavailable.</div>';
        return;
    }
    closeEnterpriseModal("management-key-modal");
    if (nextAction === "dashboard") showExecutiveDashboard();
    else showBusinessProfiles();
}

function closeEnterpriseModal(id) {
    document.getElementById(id)?.remove();
}

function getAuditPillar(moduleId) {
    return SYNTAX_SYSTEMS_MODULES.find(item => item.id === moduleId)?.pillar || "unclassified";
}

function calculateAverageScore(records) {
    if (!records.length) return null;
    return Math.round(records.reduce((total, item) => total + Number(item.complianceScore || 0), 0) / records.length);
}

function calculatePillarScore(records, pillar) {
    return calculateAverageScore(records.filter(item => getAuditPillar(item.moduleId) === pillar));
}

function getScoreStatus(score) {
    if (score === null) return { label: "Not measured", className: "neutral" };
    if (score >= 80) return { label: "Strong", className: "good" };
    if (score >= 60) return { label: "Watch", className: "watch" };
    return { label: "Attention", className: "danger" };
}

function calculateTrend(records) {
    if (records.length < 2) return null;
    const recent = records.slice(0, Math.min(5, records.length));
    const previous = records.slice(recent.length, recent.length * 2);
    if (!previous.length) {
        return Number(recent[0].complianceScore || 0) - Number(recent[recent.length - 1].complianceScore || 0);
    }
    return calculateAverageScore(recent) - calculateAverageScore(previous);
}

function buildExecutiveAlerts(records) {
    const alerts = [];
    const latestByModule = new Map();
    records.forEach(record => {
        if (!latestByModule.has(record.moduleId)) latestByModule.set(record.moduleId, record);
    });

    [...latestByModule.values()].forEach(record => {
        const score = Number(record.complianceScore || 0);
        const risk = String(record.riskRating || "").toLowerCase();
        if (risk === "high" || score < 50) {
            alerts.push({
                tone: "danger",
                icon: "!",
                title: `${record.moduleName} requires attention`,
                detail: `${record.riskRating || "Unrated"} risk · ${score}% score`
            });
        } else if (risk === "medium" || score < 70) {
            alerts.push({
                tone: "watch",
                icon: "•",
                title: `${record.moduleName} should be reviewed`,
                detail: `${record.riskRating || "Unrated"} risk · ${score}% score`
            });
        }
    });

    if (!alerts.length && records.length) {
        alerts.push({
            tone: "good",
            icon: "✓",
            title: "No immediate high-risk signals",
            detail: "Recent locally recorded audits contain no high-risk result."
        });
    }

    return alerts.slice(0, 5);
}

function buildExecutiveBriefing(active, records, scores, trend, highRisk) {
    if (!active) {
        return "Select or create a business profile to activate business-specific executive intelligence.";
    }
    if (!records.length) {
        return `${active.business_name} is ready for analysis. Run the first specialist engine to establish a measurable business-health baseline.`;
    }

    const measured = Object.entries(scores).filter(([, value]) => value !== null);
    const strongest = measured.sort((a, b) => b[1] - a[1])[0];
    const weakest = measured.sort((a, b) => a[1] - b[1])[0];
    const labels = { compliance: "compliance", "profit engine": "profit", operations: "operations" };
    const trendText = trend === null ? "A trend will become available after more audits." : trend > 0 ? `The recent score trend is improving by ${trend} points.` : trend < 0 ? `The recent score trend has declined by ${Math.abs(trend)} points.` : "Recent scores are stable.";
    const riskText = highRisk ? `${highRisk} high-risk result${highRisk === 1 ? "" : "s"} require review.` : "No high-risk result is currently recorded.";
    const strengthText = strongest ? `The strongest measured pillar is ${labels[strongest[0]] || strongest[0]} at ${strongest[1]}%.` : "No pillar score is available yet.";
    const weaknessText = weakest && strongest && weakest[0] !== strongest[0] ? ` The lowest measured pillar is ${labels[weakest[0]] || weakest[0]} at ${weakest[1]}%.` : "";

    return `${active.business_name}: ${strengthText}${weaknessText} ${riskText} ${trendText}`;
}

function renderScoreCard(label, score, note) {
    const status = getScoreStatus(score);
    return `<div class="enterprise-card intelligence-score-card">
        <div class="flex items-start justify-between gap-3">
            <div><div class="kpi-label">${escapeHtml(label)}</div><div class="kpi-value">${score === null ? "—" : `${score}%`}</div></div>
            <span class="intelligence-status ${status.className}">${status.label}</span>
        </div>
        <div class="score-track"><span style="width:${score === null ? 0 : Math.max(0, Math.min(100, score))}%"></span></div>
        <div class="kpi-note">${escapeHtml(note)}</div>
    </div>`;
}

function showExecutiveDashboard() {
    ENTERPRISE_STATE.currentView = "dashboard";
    setActiveNavigation("nav-executive-dashboard");
    setWorkspaceHeading("Command Centre", "Executive Dashboard");
    const workspace = document.getElementById("dynamic-workspace");
    if (!workspace) return;

    const active = getActiveBusiness();
    const businessHistory = active ? ENTERPRISE_STATE.auditHistory.filter(item => item.businessId === active.id) : ENTERPRISE_STATE.auditHistory;
    const latest = businessHistory[0];
    const overallScore = calculateAverageScore(businessHistory);
    const complianceScore = calculatePillarScore(businessHistory, "compliance");
    const profitScore = calculatePillarScore(businessHistory, "profit engine");
    const operationsScore = calculatePillarScore(businessHistory, "operations");
    const highRisk = businessHistory.filter(item => String(item.riskRating || "").toLowerCase() === "high").length;
    const trend = calculateTrend(businessHistory);
    const alerts = buildExecutiveAlerts(businessHistory);
    const briefing = buildExecutiveBriefing(active, businessHistory, {
        compliance: complianceScore,
        "profit engine": profitScore,
        operations: operationsScore
    }, trend, highRisk);

    workspace.innerHTML = `
        <div id="workspace-notice"></div>
        ${!getManagementKey() ? '<div class="notice info">Connect the owner management key to load live businesses and database metrics. <button class="ml-2 underline font-bold" onclick="openManagementKeyDialog(\'dashboard\')">Connect now</button></div>' : ''}

        <section class="executive-hero enterprise-card mb-4">
            <div class="executive-hero-copy">
                <div class="enterprise-eyebrow">Executive intelligence briefing</div>
                <h2>${escapeHtml(active?.business_name || "BusinessForge Command Centre")}</h2>
                <p>${escapeHtml(briefing)}</p>
                <div class="executive-context-line">
                    <span>${escapeHtml(active?.industry || "Industry not configured")}</span>
                    <span>${escapeHtml(active?.city || active?.province || "Location not configured")}</span>
                    <span>${escapeHtml(active?.edition_code || "ZA")} Edition</span>
                    <span>${escapeHtml(active?.currency_code || "ZAR")}</span>
                </div>
            </div>
            <div class="executive-health-orb ${getScoreStatus(overallScore).className}">
                <span>${overallScore === null ? "—" : overallScore}</span>
                <small>${overallScore === null ? "No baseline" : "Health score"}</small>
            </div>
        </section>

        <div class="dashboard-grid intelligence-kpis">
            ${renderScoreCard("Compliance", complianceScore, "COIDA, SETA, legal and brand audits")}
            ${renderScoreCard("Profit", profitScore, "Cash flow, margin, quotes and visibility")}
            ${renderScoreCard("Operations", operationsScore, "Procedures, people and retention")}
            <div class="enterprise-card intelligence-score-card">
                <div class="flex items-start justify-between gap-3">
                    <div><div class="kpi-label">Risk signals</div><div class="kpi-value">${highRisk}</div></div>
                    <span class="intelligence-status ${highRisk ? "danger" : businessHistory.length ? "good" : "neutral"}">${highRisk ? "Review" : businessHistory.length ? "Clear" : "No data"}</span>
                </div>
                <div class="metric-detail">${businessHistory.length} completed audit${businessHistory.length === 1 ? "" : "s"}</div>
                <div class="kpi-note">${trend === null ? "Trend needs more results" : trend > 0 ? `Recent trend +${trend} points` : trend < 0 ? `Recent trend ${trend} points` : "Recent trend stable"}</div>
            </div>
        </div>

        <div class="dashboard-two-column intelligence-main-grid">
            <div class="enterprise-card">
                <div class="flex items-start justify-between gap-3">
                    <div><div class="enterprise-card-title">Executive alerts</div><div class="enterprise-card-subtitle">Prioritised from the latest locally recorded result for each engine.</div></div>
                    <button class="secondary-button" onclick="showAuditHistory()">Audit history</button>
                </div>
                <div class="executive-alert-list">
                    ${alerts.length ? alerts.map(alert => `<div class="executive-alert ${alert.tone}"><span class="alert-icon">${alert.icon}</span><div><strong>${escapeHtml(alert.title)}</strong><p>${escapeHtml(alert.detail)}</p></div></div>`).join("") : '<div class="empty-state compact">Run an audit to generate the first executive alert.</div>'}
                </div>
            </div>

            <div class="enterprise-card">
                <div class="enterprise-card-title">Latest intelligence</div>
                <div class="enterprise-card-subtitle">Most recent result for the current business.</div>
                ${latest ? `<div class="latest-intelligence-panel"><div class="latest-module">${escapeHtml(latest.moduleName)}</div><div class="profile-meta">${escapeHtml(latest.businessName)}<br>${escapeHtml(latest.timestamp)}</div><div class="profile-tags"><span class="profile-tag">${escapeHtml(latest.riskRating || "Unrated")}</span><span class="profile-tag">${Number(latest.complianceScore || 0)}%</span></div><button class="primary-button mt-5" onclick="switchModule('${escapeHtml(latest.moduleId)}')">Run again</button></div>` : '<div class="empty-state">No audits recorded for this business yet.</div>'}
            </div>
        </div>

        <div class="enterprise-card">
            <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                <div><div class="enterprise-card-title">Quick launch</div><div class="enterprise-card-subtitle">Start with a core executive engine or open the full specialist catalogue below.</div></div>
                <button class="secondary-button" onclick="showBusinessProfiles()">Manage businesses</button>
            </div>
            <div class="priority-launch-grid">
                ${["flowcast", "coida-specialist", "quoteforge", "procedure-ai"].map(id => {
                    const module = SYNTAX_SYSTEMS_MODULES.find(item => item.id === id);
                    return `<button class="priority-launch-card" onclick="switchModule('${module.id}')"><span>${escapeHtml(module.name)}</span><small>${escapeHtml(module.pillar)}</small></button>`;
                }).join("")}
            </div>
            <details class="engine-catalogue">
                <summary>Open all 13 intelligence engines</summary>
                <div class="module-launch-grid">
                    ${SYNTAX_SYSTEMS_MODULES.map(module => `<button class="module-launch-card" onclick="switchModule('${module.id}')"><div class="module-launch-name">${escapeHtml(module.name)}</div><div class="module-launch-pillar">${escapeHtml(module.pillar)}</div></button>`).join("")}
                </div>
            </details>
        </div>`;
}

function showBusinessProfiles() {
    ENTERPRISE_STATE.currentView = "profiles";
    setActiveNavigation("nav-business-profiles");
    setWorkspaceHeading("Business Management", "Business Profiles");
    const workspace = document.getElementById("dynamic-workspace");
    if (!workspace) return;

    if (!getManagementKey()) {
        workspace.innerHTML = `<div class="enterprise-card"><div class="empty-state"><div class="text-3xl mb-3">▣</div><div class="text-white font-black text-lg">Connect owner access</div><p class="mt-2">Business Profiles uses the protected management API.</p><button class="primary-button mt-5" onclick="openManagementKeyDialog('profiles')">Enter management key</button></div></div>`;
        return;
    }

    renderBusinessProfiles();
    loadBusinesses({ silent: true }).then(ok => { if (ok && ENTERPRISE_STATE.currentView === "profiles") renderBusinessProfiles(); });
}

function renderBusinessProfiles() {
    const workspace = document.getElementById("dynamic-workspace");
    if (!workspace) return;
    const businesses = ENTERPRISE_STATE.businesses;
    workspace.innerHTML = `
        <div id="workspace-notice"></div>
        <div class="profile-toolbar">
            <div><div class="enterprise-card-title">Operating entities</div><div class="enterprise-card-subtitle">Create, select and maintain the businesses attached to this account.</div></div>
            <div class="flex gap-2"><button class="secondary-button" onclick="loadBusinesses().then(renderBusinessProfiles)">Refresh</button><button class="primary-button" onclick="openBusinessForm()">＋ New business</button></div>
        </div>
        ${businesses.length ? `<div class="profile-grid">${businesses.map(renderBusinessCard).join("")}</div>` : `<div class="enterprise-card"><div class="empty-state"><div class="text-3xl mb-3">🏢</div><div class="text-white font-black text-lg">No business profiles found</div><p class="mt-2">Create the first operating entity to activate the Command Centre.</p><button class="primary-button mt-5" onclick="openBusinessForm()">Create first business</button></div></div>`}`;
}

function renderBusinessCard(business) {
    const isActive = business.id === ENTERPRISE_STATE.activeBusinessId;
    return `<article class="profile-card ${business.is_default ? "default" : ""}">
        <div class="flex justify-between gap-3"><div><div class="profile-name">${escapeHtml(business.business_name)}</div><div class="profile-meta">${escapeHtml(business.industry || "Industry not set")}<br>${escapeHtml([business.city, business.province].filter(Boolean).join(", ") || "Location not set")}</div></div><span class="status-pill ${business.status === "inactive" ? "inactive" : ""}">${escapeHtml(business.status || "active")}</span></div>
        <div class="profile-tags"><span class="profile-tag">${escapeHtml(business.country_code || "ZA")}</span><span class="profile-tag">${escapeHtml(business.edition_code || "ZA")} Edition</span><span class="profile-tag">${escapeHtml(business.currency_code || "ZAR")}</span>${business.is_default ? '<span class="profile-tag">Default</span>' : ''}${isActive ? '<span class="profile-tag">Active</span>' : ''}</div>
        <div class="profile-actions"><button class="secondary-button" onclick="selectBusiness('${escapeHtml(business.id)}')">Select</button><button class="secondary-button" onclick="openBusinessForm('${escapeHtml(business.id)}')">Edit</button>${business.status !== "inactive" ? `<button class="danger-button" onclick="deactivateBusiness('${escapeHtml(business.id)}')">Deactivate</button>` : ''}</div>
    </article>`;
}

function selectBusiness(id) {
    handleActiveBusinessChange(id);
    renderBusinessProfiles();
    showWorkspaceNotice("Active business changed.", "success");
}

function openBusinessForm(id = "") {
    const business = ENTERPRISE_STATE.businesses.find(item => item.id === id) || {};
    document.body.insertAdjacentHTML("beforeend", `
        <div id="business-form-modal" class="modal-backdrop">
            <div class="enterprise-modal">
                <div class="modal-header"><div><div class="enterprise-eyebrow">Business profile</div><div class="modal-title">${id ? "Edit business" : "Create business"}</div></div><button class="modal-close" onclick="closeEnterpriseModal('business-form-modal')">×</button></div>
                <form id="business-profile-form" onsubmit="saveBusinessProfile(event, '${escapeHtml(id)}')">
                    <div class="form-grid">
                        ${businessField("businessName", "Business name", business.business_name, true)}
                        ${businessField("registrationNumber", "Registration number", business.registration_number)}
                        ${businessField("industry", "Industry", business.industry)}
                        ${businessField("industryCode", "Industry code", business.industry_code)}
                        ${businessField("countryCode", "Country code", business.country_code || "ZA", true)}
                        ${businessField("editionCode", "Edition code", business.edition_code || "ZA", true)}
                        ${businessField("currencyCode", "Currency", business.currency_code || "ZAR", true)}
                        ${businessField("timezoneName", "Timezone", business.timezone_name || "Africa/Johannesburg", true)}
                        ${businessField("province", "Province / state", business.province)}
                        ${businessField("city", "City", business.city)}
                        ${businessField("employeeCount", "Employee count", business.employee_count, false, "number")}
                        ${businessField("annualRevenue", "Annual revenue", business.annual_revenue, false, "number")}
                        ${businessField("contactName", "Contact name", business.contact_name)}
                        ${businessField("contactEmail", "Contact email", business.contact_email, false, "email")}
                        ${businessField("contactPhone", "Contact phone", business.contact_phone)}
                        ${businessField("website", "Website", business.website)}
                        <div class="form-field"><label>Status</label><select name="status" class="enterprise-select"><option value="active" ${business.status !== "inactive" ? "selected" : ""}>Active</option><option value="inactive" ${business.status === "inactive" ? "selected" : ""}>Inactive</option><option value="archived" ${business.status === "archived" ? "selected" : ""}>Archived</option></select></div>
                        <div class="form-field"><label>Default business</label><select name="isDefault" class="enterprise-select"><option value="false" ${!business.is_default ? "selected" : ""}>No</option><option value="true" ${business.is_default ? "selected" : ""}>Yes</option></select></div>
                        <div class="form-field full"><label>Notes</label><textarea name="notes" class="enterprise-textarea">${escapeHtml(business.notes || "")}</textarea></div>
                    </div>
                    <div id="business-form-error" class="mt-3"></div>
                    <div class="flex justify-end gap-2 mt-5"><button type="button" class="secondary-button" onclick="closeEnterpriseModal('business-form-modal')">Cancel</button><button type="submit" class="primary-button">${id ? "Save changes" : "Create business"}</button></div>
                </form>
            </div>
        </div>`);
}

function businessField(name, label, value = "", required = false, type = "text") {
    return `<div class="form-field"><label>${label}</label><input name="${name}" type="${type}" class="enterprise-input" value="${escapeHtml(value ?? "")}" ${required ? "required" : ""}></div>`;
}

async function saveBusinessProfile(event, id) {
    event.preventDefault();
    const form = event.currentTarget;
    const errorNode = document.getElementById("business-form-error");
    const data = Object.fromEntries(new FormData(form).entries());
    data.isDefault = data.isDefault === "true";
    try {
        await enterpriseApi(id ? `/api/business-profiles?id=${encodeURIComponent(id)}` : "/api/business-profiles", { method: id ? "PATCH" : "POST", body: JSON.stringify({ ...data, id }) });
        closeEnterpriseModal("business-form-modal");
        await loadBusinesses();
        renderBusinessProfiles();
        showWorkspaceNotice(id ? "Business updated successfully." : "Business created successfully.", "success");
    } catch (error) {
        if (errorNode) errorNode.innerHTML = `<div class="notice error">${escapeHtml(error.message)}</div>`;
    }
}

async function deactivateBusiness(id) {
    if (!confirm("Deactivate this business profile? The database row will be retained.")) return;
    try {
        await enterpriseApi(`/api/business-profiles?id=${encodeURIComponent(id)}`, { method: "DELETE" });
        if (ENTERPRISE_STATE.activeBusinessId === id) ENTERPRISE_STATE.activeBusinessId = "";
        await loadBusinesses();
        renderBusinessProfiles();
        showWorkspaceNotice("Business marked as inactive.", "success");
    } catch (error) { showWorkspaceNotice(error.message, "error"); }
}

function showAuditHistory() {
    ENTERPRISE_STATE.currentView = "history";
    setActiveNavigation("nav-audit-history");
    setWorkspaceHeading("Intelligence Records", "Audit History");
    const workspace = document.getElementById("dynamic-workspace");
    if (!workspace) return;
    const rows = ENTERPRISE_STATE.auditHistory;
    workspace.innerHTML = `<div class="enterprise-card"><div class="profile-toolbar"><div><div class="enterprise-card-title">Local audit ledger</div><div class="enterprise-card-subtitle">This first version records successful audits in the current browser. Database history integration follows.</div></div>${rows.length ? '<button class="danger-button" onclick="clearLocalAuditHistory()">Clear local history</button>' : ''}</div>${rows.length ? `<div class="overflow-x-auto"><table class="data-table"><thead><tr><th>Date</th><th>Business</th><th>Engine</th><th>Risk</th><th>Score</th></tr></thead><tbody>${rows.map(item => `<tr><td>${escapeHtml(item.timestamp)}</td><td>${escapeHtml(item.businessName)}</td><td>${escapeHtml(item.moduleName)}</td><td>${escapeHtml(item.riskRating || "Unrated")}</td><td>${Number(item.complianceScore || 0)}%</td></tr>`).join("")}</tbody></table></div>` : '<div class="empty-state">No successful audits have been recorded in this browser yet.</div>'}</div>`;
}

function clearLocalAuditHistory() {
    if (!confirm("Clear locally recorded audit history from this browser?")) return;
    ENTERPRISE_STATE.auditHistory = [];
    localStorage.setItem("businessforge_audit_history", "[]");
    showAuditHistory();
}

function showEnterpriseSettings() {
    ENTERPRISE_STATE.currentView = "settings";
    setActiveNavigation("nav-settings");
    setWorkspaceHeading("Platform Configuration", "Settings");
    const workspace = document.getElementById("dynamic-workspace");
    if (!workspace) return;
    workspace.innerHTML = `<div class="dashboard-two-column"><div class="enterprise-card"><div class="enterprise-card-title">Owner management connection</div><div class="enterprise-card-subtitle">Used temporarily while role-based authentication is being built.</div><div class="mt-5 notice ${getManagementKey() ? "success" : "info"}">${getManagementKey() ? "A management key is connected for this browser session." : "No management key is connected."}</div><div class="flex gap-2"><button class="primary-button" onclick="openManagementKeyDialog('dashboard')">${getManagementKey() ? "Replace key" : "Connect key"}</button>${getManagementKey() ? '<button class="danger-button" onclick="disconnectManagementKey()">Disconnect</button>' : ''}</div></div><div class="enterprise-card"><div class="enterprise-card-title">Platform edition</div><div class="profile-meta mt-4">Interface: BusinessForge Enterprise v2<br>Default edition: South Africa<br>Default currency: ZAR<br>Timezone: Africa/Johannesburg</div></div></div>`;
}

function disconnectManagementKey() {
    saveManagementKey("");
    ENTERPRISE_STATE.businesses = [];
    ENTERPRISE_STATE.activeBusinessId = "";
    updateActiveBusinessControls();
    showEnterpriseSettings();
}


function switchModule(moduleId) {
    console.log("Switching workspace view target to:", moduleId);
    ENTERPRISE_STATE.currentView = "module";
    
    const targetModule = SYNTAX_SYSTEMS_MODULES.find(m => m.id === moduleId);
    if (!targetModule) return;
    clearActiveNavigation();
    document.getElementById(`btn-${moduleId}`)?.classList.add("active");
    setWorkspaceHeading(targetModule.pillar, targetModule.name);
    
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

    clearActiveNavigation();
    document.getElementById(`btn-${moduleId}`)?.classList.add("active");
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
                auditType: moduleId,
                businessId: ENTERPRISE_STATE.activeBusinessId || null,
                businessProfile: getActiveBusiness()
            })
        });

        if (!response.ok) {
            throw new Error(
                `Handshake transaction error. HTTP status caught: ${response.status}`
            );
        }

        const resultPayload = await response.json();

        const activeBusiness = getActiveBusiness();
        const moduleRecord = SYNTAX_SYSTEMS_MODULES.find(item => item.id === moduleId);
        ENTERPRISE_STATE.auditHistory.unshift({
            id: `${Date.now()}-${moduleId}`,
            businessId: activeBusiness?.id || "",
            businessName: activeBusiness?.business_name || "Unassigned business",
            moduleId,
            moduleName: moduleRecord?.name || moduleId,
            riskRating: resultPayload.overallRiskRating || "Unrated",
            complianceScore: Number(resultPayload.complianceScore || 0),
            timestamp: resultPayload.timestamp || new Date().toLocaleString("en-ZA")
        });
        ENTERPRISE_STATE.auditHistory = ENTERPRISE_STATE.auditHistory.slice(0, 100);
        localStorage.setItem("businessforge_audit_history", JSON.stringify(ENTERPRISE_STATE.auditHistory));

        if (!outputScreen) return;

        outputScreen.style.color = "#cbd5e1";

        let report = "";

        report += `═══════════════════════════════════════════════\n`;
        report += ` BUSINESSFORGE ENTERPRISE AUDIT REPORT\n`;
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
            if (
    resultPayload.strategicOpportunities &&
    resultPayload.strategicOpportunities.length
) {

    report += `════════ STRATEGIC OPPORTUNITIES ════════\n\n`;

    resultPayload.strategicOpportunities.forEach((item, index) => {

        report += `${index + 1}. ${item.opportunity}\n`;

        if (item.potentialBenefit) {
            report += `   Potential Benefit: ${item.potentialBenefit}\n`;
        }

        if (item.recommendedAction) {
            report += `   Recommended Action: ${item.recommendedAction}\n`;
        }

        report += `\n`;
    });
}

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
    showExecutiveDashboard();
}

async function initializeApplicationCore() {
    console.log("Mounting BusinessForge Enterprise Command Centre...");

    SYNTAX_SYSTEMS_MODULES.forEach(mod => {
        const sidebarButton = document.getElementById(`btn-${mod.id}`);
        if (sidebarButton) sidebarButton.onclick = () => switchModule(mod.id);
    });

    updateActiveBusinessControls();
    if (getManagementKey()) await loadBusinesses({ silent: true });
    showExecutiveDashboard();
}

window.onload = initializeApplicationCore;