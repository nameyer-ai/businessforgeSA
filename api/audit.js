// api/audit.js
const { generateAuditReport } = require("./services/openaiService");
const { buildVerifiedReport, cleanText } = require("./services/reportValidator");
const { saveAuditReport, saveAuditIntelligence } = require("./services/auditPersistence");
const { processAuditIntelligence } = require("./core/bic");

module.exports = async function auditHandler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      textToScan,
      auditType,
      businessId = null,
      accountId = null,
    } = request.body || {};

    if (!cleanText(textToScan)) {
      return response.status(400).json({ error: "Missing input text context." });
    }

    const safeAuditType = cleanText(auditType, "general-business-audit");
    const cleanInput = textToScan.trim();
    const modelUsed = "gpt-4o-mini";
    const timestamp = new Date().toLocaleString("en-ZA", {
      timeZone: "Africa/Johannesburg",
    });

    console.log(`Routing live AI transaction for module target: ${safeAuditType}`);

    const aiResponseRaw = await generateAuditReport({
      auditType: safeAuditType,
      textToScan: cleanInput,
      modelUsed,
    });

    const verifiedReport = buildVerifiedReport(aiResponseRaw, timestamp);
    let persistence = { saved: false, auditReportId: null, warnings: [] };
    let intelligence = { processed: false, reason: "BIC was not executed." };

    try {
      const auditReportId = await saveAuditReport({
        auditType: safeAuditType,
        textToScan: cleanInput,
        verifiedReport,
        businessId,
        accountId,
        modelUsed,
      });

      const warnings = await saveAuditIntelligence({
        auditReportId,
        businessId,
        auditType: safeAuditType,
        verifiedReport,
      });

      persistence = { saved: true, auditReportId, warnings };

      try {
        intelligence = await processAuditIntelligence({
          businessId,
          auditReportId,
          moduleId: safeAuditType,
          verifiedReport,
        });
      } catch (bicError) {
        console.error("Business Intelligence Core failed:", bicError);
        intelligence = {
          processed: false,
          reason: bicError.message,
        };
        persistence.warnings.push(`BIC: ${bicError.message}`);
      }
    } catch (saveError) {
      console.error("Audit persistence failed:", saveError);
      persistence.warnings.push(saveError.message);
    }

    return response.status(200).json({
      ...verifiedReport,
      persistence,
      intelligence,
    });
  } catch (error) {
    console.error("Backend live AI execution fault:", error);
    return response.status(500).json({
      error: `Live AI optimization loop failed: ${error.message}`,
    });
  }
};
