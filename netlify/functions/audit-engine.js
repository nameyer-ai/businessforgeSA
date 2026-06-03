// netlify/functions/audit-engine.js

exports.handler = async function (event, context) {
    // 1. Guardrail: Only allow secure POST requests
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        // 2. Extract the user payload from the frontend
        const { moduleId, inputs } = JSON.parse(event.body);
        
        // 3. Grab your secure API Key hidden in the Netlify Cloud environment variables
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
        
        if (!GEMINI_API_KEY) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Cloud Configuration Error: Missing API Key storage parameters." })
            };
        }

        // 4. Construct a highly specialized corporate prompt based on the module requested
        let contextualPrompt = `You are the core AI engine for BusinessForgeSA, an expert automated corporate advisory platform. Analyze the following local market data payload for the artifact: [${moduleId}].\n\n`;
        
        for (const [key, value] of Object.entries(inputs)) {
            contextualPrompt += `[DATA TARGET: ${key}]:\n${value}\n\n`;
        }
        
        contextualPrompt += `Provide a professional, brutally honest, high-impact audit ledger response. Format it with clean headings, bullet points, and actionable South African compliance/operational directives where relevant. Avoid generic filler.`;

        // 5. Package the request for the Google Gemini API (Using Gemini 1.5 Flash for optimal velocity/cost efficiency)
        const apiTargetUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        
        const response = await fetch(apiTargetUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: contextualPrompt }] }]
            })
        });

        const apiData = await response.json();
        
        // Extract the textual output safely from Gemini's payload structure
        const aiAnalysis = apiData.candidates[0].content.parts[0].text;

        // 6. Return the raw brilliance straight back to the user's dashboard screen
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ output: aiAnalysis })
        };

    } catch (error) {
        console.error("Pipeline breakdown:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "The cloud pipeline encountered an execution error processing this data." })
        };
    }
};