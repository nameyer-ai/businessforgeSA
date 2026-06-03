// api/audit.js
// Uses traditional CommonJS module formatting to align perfectly with Vercel's default compilation architecture

module.exports = async function (request, response) {
    // 1. Force safety restrictions
    if (request.method !== 'POST') {
        return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { textToScan, auditType } = request.body;

        console.log(`Executing secure live engine transaction context for: ${auditType}`);

        // 2. Your exact custom compliance demonstration data array package
        const verifiedReport = {
            status: "Complete",
            timestamp: new Date().toLocaleTimeString(),
            complianceScore: 84,
            findings: [
                { severity: "High", issue: "POPIA Privacy Policy footprint missing on data capture fields." },
                { severity: "Medium", issue: "Linguistic jargon exceeds recommended clarity threshold for local SMME target audiences." }
            ]
        };

        // 3. Return the payload response cleanly
        return response.status(200).json(verifiedReport);

    } catch (error) {
        console.error("Backend runtime failure:", error);
        return response.status(500).json({ error: 'Internal validation loop failed: ' + error.message });
    }
};