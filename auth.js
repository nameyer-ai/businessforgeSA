// Valid Master Keys / Transaction IDs for your consultancy
// ==========================================
// ACCESS CORE GATEWAY (AUTH MANAGER)
// ==========================================

// Your authorized premium product access keys
const VALID_KEYS = ["GUEST2026", "AUDIT-GUEST-24"];
// FORCE THE LANDING PAGE TO STAY LOCKED DURING LOCAL TESTING:

/**
 * Open the login gate popup overlay on top of the marketing page
 */
function activatePortalConsole() {
    console.log("Button clicked: Activating Portal Console Overlay...");
    const authGate = document.getElementById('gate-overlay');
    
    if (authGate) {
        // Remove Tailwinds 'hidden' class and explicitly show it
        authGate.classList.remove('hidden');
        authGate.style.display = 'flex';
    } else {
        console.error("Error: Could not find the element with ID 'gate-overlay' in index.html");
    }
}

/**
 * Manage DOM visibility frames cleanly across the app states when access is successful
 */
function revealApplicationWorkspace() {
    const marketingPage = document.getElementById('public-marketing-page');
    const authGate = document.getElementById('gate-overlay');
    const appShell = document.getElementById('main-dashboard');

    // 1. Hide public-facing marketing material
    if (marketingPage) {
        marketingPage.style.display = 'none';
        marketingPage.classList.add('hidden');
    }
    
    // 2. Hide the credential access gate overlay
    if (authGate) {
        authGate.style.display = 'none';
        authGate.classList.add('hidden');
    }
    
    // 3. Unveil the core app framework
    if (appShell) {
        appShell.classList.remove('hidden');
        appShell.style.display = 'flex';
    }

    // 4. Safely trigger any welcome dashboard layouts from app.js if active
    if (typeof showWelcomeDashboard === 'function') {
        showWelcomeDashboard();
    }
}

/**
 * Validates the user's input key and unlocks the interface if correct
 */
function verifyAccessKey() {
    const userKeyInput = document.getElementById('gate-access-key');
    const errorMsg = document.getElementById('gate-error-message');
    
    if (!userKeyInput) {
        console.error("Critical Error: Target input field '#gate-access-key' missing from template.");
        return;
    }
    
    // Extract and format the user input to be uppercase and clean
    const enteredKey = userKeyInput.value.trim().toUpperCase();

    // Validate the token against your keys directory
    if (VALID_KEYS.includes(enteredKey)) {
        console.log("Access Granted. Unlocking the Forge...");
        
        if (errorMsg) {
            errorMsg.classList.add('hidden');
            errorMsg.style.display = 'none';
        }
        
        // Save the session locally so they stay authorized on page refresh
        localStorage.setItem('bf_authorized_session', enteredKey);

        // Transition views cleanly to the active app
        revealApplicationWorkspace();
        
    } else {
        console.warn("Unauthorized key iteration attempted: " + enteredKey);
        
        if (errorMsg) {
            errorMsg.innerText = "Invalid Key or Transaction ID. Access Denied.";
            errorMsg.style.display = 'block';
            errorMsg.classList.remove('hidden');
        } else {
            alert("Invalid Key or Transaction ID. Access Denied.");
        }
    }
}

/**
 * Run standard gateway logic on initial page load
 */
document.addEventListener("DOMContentLoaded", () => {
    const authGate = document.getElementById('gate-overlay');
    const marketingPage = document.getElementById('public-marketing-page');
    const appShell = document.getElementById('main-dashboard');
    
    // 1. AUTOMATED CHECKOUT DETECTION: Read parameters from PayPal Redirect
    const urlParams = new URLSearchParams(window.location.search);
    const autoKey = urlParams.get('pass');

    if (autoKey && VALID_KEYS.includes(autoKey.toUpperCase())) {
        localStorage.setItem('bf_authorized_session', autoKey.toUpperCase());
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // 2. RUN STANDARD GATE VALIDATION PROTOCOL
    const savedSession = localStorage.getItem('bf_authorized_session');
    
    if (savedSession && VALID_KEYS.includes(savedSession.toUpperCase())) {
        revealApplicationWorkspace();
    } else {
        console.log("Portal gate locked. Awaiting user interaction...");
        
        // Ensure the app back-end stays hidden
        if (appShell) {
            appShell.classList.add('hidden');
            appShell.style.display = 'none';
        }
        // Keep the input portal overlay tucked away until a button is clicked
        if (authGate) {
            authGate.classList.add('hidden');
            authGate.style.display = 'none';
        }
        // Make sure the down-to-earth landing page shines through clearly
        if (marketingPage) {
            marketingPage.classList.remove('hidden');
            marketingPage.style.display = 'block';
        }
    }     
});

/**
 * Terminates the active session, clears storage tokens, and restores the landing page architecture
 */
function terminateConsoleSession() {
    console.log("Terminating secure session context...");
    
    // 1. Clear authorization state tokens completely
    localStorage.removeItem('bf_authorized_session');
    
    // 2. Clear any active session states safely
    if (window.sessionStorage) {
        sessionStorage.clear();
    }

    // 3. Force a clean page reload to completely reset variables, scripts, and layout view states
    window.location.reload();
}

/**
 * Triggers the decoupled secure backend Audit Loop without exposing proprietary code to the browser
 */
async function runDashboardAuditLoop() {
    const outputWorkspace = document.getElementById('dynamic-workspace');
    
    // UI Feedback: Show a clean loading state to your testers
    if (outputWorkspace) {
        outputWorkspace.innerHTML = `
            <div class="flex flex-col items-center justify-center p-12 text-center h-full">
                <span class="text-3xl animate-spin mb-4">🔄</span>
                <p class="text-slate-200 font-mono text-sm tracking-wide">Executing Secure Audit Engine context via Vercel Infrastructure...</p>
                <p class="text-slate-500 text-xs mt-1">Evaluating regulatory footprints & linguistic density... (Up to 60s limit allowed)</p>
            </div>
        `;
    }

    try {
        // 1. Dispatch the request payload to your hidden serverless endpoint
        const response = await fetch('/api/audit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                textToScan: "Target website sample or compliance data goes here",
                auditType: "Marketing & Compliance Audit"
            })
        });

        if (!response.ok) throw new Error(`Server returned HTTP status ${response.status}`);
        
        const reportData = await response.json();

        // 2. Render the final output cleanly back into your Tailwind UI workspace
        if (outputWorkspace) {
            outputWorkspace.innerHTML = `
                <div class="p-6 font-mono">
                    <div class="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
                        <h3 class="text-emerald-400 font-bold text-base">🛡️ Audit Loop Analysis Result: ${reportData.status}</h3>
                        <span class="text-xs text-slate-500">Score: ${reportData.complianceScore}%</span>
                    </div>
                    <ul class="space-y-3">
                        ${reportData.findings.map(item => `
                            <li class="p-3 bg-slate-950/50 border border-slate-800/80 rounded-lg text-sm">
                                <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mr-2 ${item.severity === 'High' ? 'bg-rose-950 text-rose-400' : 'bg-amber-950 text-amber-400'}">${item.severity}</span>
                                <span class="text-slate-300">${item.issue}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        }

    } catch (error) {
        console.error("Frontend handler caught error:", error);
        if (outputWorkspace) {
            outputWorkspace.innerHTML = `
                <div class="p-6 text-center border border-rose-950 bg-rose-950/10 rounded-xl m-6">
                    <span class="text-2xl block mb-2">⚠️</span>
                    <h4 class="text-rose-400 font-bold text-sm">Engine Communication Error</h4>
                    <p class="text-xs text-slate-400 mt-1">${error.message}</p>
                </div>
            `;
        }
    }
}