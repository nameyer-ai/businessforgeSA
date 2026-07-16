const { OpenAI } = require("openai");
const { buildSystemPrompt } = require("./promptBuilder");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateAuditReport({ auditType, textToScan, modelUsed }) {
  const completion = await openai.chat.completions.create({
    model: modelUsed,
    messages: [
      { role: "system", content: buildSystemPrompt(auditType) },
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

  try {
    return JSON.parse(rawContent);
  } catch (error) {
    throw new Error(`The AI returned invalid JSON: ${error.message}`);
  }
}

module.exports = { generateAuditReport };
