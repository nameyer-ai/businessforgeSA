// api/audit.js
export default async function handler(request, response) {
    if (request.method !== 'POST') return response.status(405).end();

    try {
        // Automatically reads your private key from Vercel's encrypted system vault
        const secureGoogleKey = process.env.GOOGLE_API_KEY; 
        
        const { textToScan } = request.body;

        // Execute your external API calls using the secure, hidden token variable
        const externalScan = await fetch(`https://language.googleapis.com/v1/documents:analyzeSentiment?key=${secureGoogleKey}`, {
            method: 'POST',
            body: JSON.stringify({ document: { content: textToScan, type: 'PLAIN_TEXT' } })
        });

        const data = await externalScan.json();
        return response.status(200).json(data);

    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}