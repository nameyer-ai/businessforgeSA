const crypto = require("crypto");
const { createClient } = require("@supabase/supabase-js");

const COUNTRY_DEFAULTS = Object.freeze({
  ZA: {
    editionCode: "ZA",
    currencyCode: "ZAR",
    timezoneName: "Africa/Johannesburg"
  },
  GB: {
    editionCode: "UK",
    currencyCode: "GBP",
    timezoneName: "Europe/London"
  },
  US: {
    editionCode: "US",
    currencyCode: "USD",
    timezoneName: "America/New_York"
  },
  CA: {
    editionCode: "GLOBAL",
    currencyCode: "CAD",
    timezoneName: "America/Toronto"
  },
  AU: {
    editionCode: "ANZ",
    currencyCode: "AUD",
    timezoneName: "Australia/Sydney"
  },
  NZ: {
    editionCode: "ANZ",
    currencyCode: "NZD",
    timezoneName: "Pacific/Auckland"
  },
  IE: {
    editionCode: "EU",
    currencyCode: "EUR",
    timezoneName: "Europe/Dublin"
  },
  DE: {
    editionCode: "EU",
    currencyCode: "EUR",
    timezoneName: "Europe/Berlin"
  },
  FR: {
    editionCode: "EU",
    currencyCode: "EUR",
    timezoneName: "Europe/Paris"
  },
  NL: {
    editionCode: "EU",
    currencyCode: "EUR",
    timezoneName: "Europe/Amsterdam"
  },
  BE: {
    editionCode: "EU",
    currencyCode: "EUR",
    timezoneName: "Europe/Brussels"
  },
  ES: {
    editionCode: "EU",
    currencyCode: "EUR",
    timezoneName: "Europe/Madrid"
  },
  IT: {
    editionCode: "EU",
    currencyCode: "EUR",
    timezoneName: "Europe/Rome"
  },
  PT: {
    editionCode: "EU",
    currencyCode: "EUR",
    timezoneName: "Europe/Lisbon"
  }
});

const ALLOWED_STATUSES = new Set([
  "active",
  "inactive",
  "archived"
]);

function safeEqual(left, right) {
  const a = Buffer.from(String(left || ""));
  const b = Buffer.from(String(right || ""));

  return (
    a.length === b.length &&
    crypto.timingSafeEqual(a, b)
  );
}

function client() {
  if (
    !process.env.SUPABASE_URL ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    throw new Error(
      "Supabase environment variables are incomplete."
    );
  }

  return createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    }
  );
}

function requireAdmin(req, res) {
  const configured = process.env.HISTORY_ADMIN_KEY;

  if (!configured) {
    res.status(503).json({
      success: false,
      error: "Add HISTORY_ADMIN_KEY to Vercel."
    });

    return false;
  }

  if (
    !safeEqual(
      req.headers["x-history-key"],
      configured
    )
  ) {
    res.status(401).json({
      success: false,
      error: "Invalid business management access key."
    });

    return false;
  }

  return true;
}

function firstDefined(...values) {
  return values.find(
    (value) =>
      value !== undefined &&
      value !== null
  );
}

function cleanText(value) {
  const text = String(value || "").trim();

  return text || null;
}

function cleanUpperCode(value, requiredLength) {
  const text = cleanText(value);

  if (!text) {
    return null;
  }

  const code = text.toUpperCase();

  if (code.length !== requiredLength) {
    return null;
  }

  return code;
}

function cleanInteger(value) {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return null;
  }

  const parsed = Number.parseInt(value, 10);

  return Number.isFinite(parsed)
    ? parsed
    : null;
}

function cleanNumber(value) {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return null;
  }

  const parsed = Number(value);

  return Number.isFinite(parsed)
    ? parsed
    : null;
}

function cleanBoolean(value, fallback = false) {
  if (value === true || value === false) {
    return value;
  }

  if (
    value === "true" ||
    value === 1 ||
    value === "1"
  ) {
    return true;
  }

  if (
    value === "false" ||
    value === 0 ||
    value === "0"
  ) {
    return false;
  }

  return fallback;
}

function toIndustryCode(value) {
  const text = cleanText(value);

  if (!text) {
    return null;
  }

  return (
    text
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || null
  );
}

function buildLocationDefaults(body) {
  const requestedCountry = cleanUpperCode(
    firstDefined(
      body.countryCode,
      body.country_code
    ),
    2
  );

  const countryCode =
    requestedCountry || "ZA";

  const defaults =
    COUNTRY_DEFAULTS[countryCode] || {};

  const editionCode =
    cleanText(
      firstDefined(
        body.editionCode,
        body.edition_code
      )
    ) ||
    defaults.editionCode ||
    "GLOBAL";

  const currencyCode =
    cleanUpperCode(
      firstDefined(
        body.currencyCode,
        body.currency_code
      ),
      3
    ) ||
    defaults.currencyCode ||
    null;

  const timezoneName =
    cleanText(
      firstDefined(
        body.timezoneName,
        body.timezone_name
      )
    ) ||
    defaults.timezoneName ||
    "UTC";

  return {
    countryCode,
    editionCode,
    currencyCode,
    timezoneName
  };
}

function payload(body) {
  const location =
    buildLocationDefaults(body);

  const industry = cleanText(
    firstDefined(
      body.industry,
      body.industryName
    )
  );

  const status =
    cleanText(body.status)?.toLowerCase() ||
    "active";

  return {
    business_name: cleanText(
      firstDefined(
        body.businessName,
        body.business_name
      )
    ),

    registration_number: cleanText(
      firstDefined(
        body.registrationNumber,
        body.registration_number
      )
    ),

    industry,

    industry_code:
      toIndustryCode(
        firstDefined(
          body.industryCode,
          body.industry_code
        )
      ) ||
      toIndustryCode(industry),

    country_code:
      location.countryCode,

    edition_code:
      location.editionCode,

    currency_code:
      location.currencyCode,

    timezone_name:
      location.timezoneName,

    province: cleanText(body.province),

    city: cleanText(body.city),

    employee_count: cleanInteger(
      firstDefined(
        body.employeeCount,
        body.employee_count
      )
    ),

    annual_revenue: cleanNumber(
      firstDefined(
        body.annualRevenue,
        body.annual_revenue
      )
    ),

    contact_name: cleanText(
      firstDefined(
        body.contactName,
        body.contact_name
      )
    ),

    contact_email: cleanText(
      firstDefined(
        body.contactEmail,
        body.contact_email
      )
    ),

    contact_phone: cleanText(
      firstDefined(
        body.contactPhone,
        body.contact_phone
      )
    ),

    website: cleanText(body.website),

    notes: cleanText(body.notes),

    status,

    is_default: cleanBoolean(
      firstDefined(
        body.isDefault,
        body.is_default
      ),
      false
    )
  };
}

function validateRecord(record) {
  if (!record.business_name) {
    return "Business name is required.";
  }

  if (
    !record.country_code ||
    !/^[A-Z]{2}$/.test(
      record.country_code
    )
  ) {
    return (
      "Country code must contain " +
      "two uppercase letters."
    );
  }

  if (!record.edition_code) {
    return "BusinessForge edition is required.";
  }

  if (
    !record.currency_code ||
    !/^[A-Z]{3}$/.test(
      record.currency_code
    )
  ) {
    return (
      "Currency code must contain " +
      "three uppercase letters."
    );
  }

  if (!record.timezone_name) {
    return "Timezone is required.";
  }

  if (
    !ALLOWED_STATUSES.has(
      record.status
    )
  ) {
    return (
      "Status must be active, " +
      "inactive, or archived."
    );
  }

  if (
    record.employee_count !== null &&
    record.employee_count < 0
  ) {
    return (
      "Employee count cannot be negative."
    );
  }

  if (
    record.annual_revenue !== null &&
    record.annual_revenue < 0
  ) {
    return (
      "Annual revenue cannot be negative."
    );
  }

  return null;
}

async function listBusinesses(supabase) {
  const [
    summaryResult,
    profileResult
  ] = await Promise.all([
    supabase
      .from("business_audit_summary")
      .select("*")
      .order(
        "business_name",
        { ascending: true }
      ),

    supabase
      .from("business_profiles")
      .select(
        [
          "id",
          "account_id",
          "business_name",
          "registration_number",
          "industry",
          "industry_code",
          "country_code",
          "edition_code",
          "currency_code",
          "timezone_name",
          "province",
          "city",
          "employee_count",
          "annual_revenue",
          "contact_name",
          "contact_email",
          "contact_phone",
          "website",
          "notes",
          "status",
          "is_default",
          "created_at",
          "updated_at"
        ].join(",")
      )
  ]);

  if (summaryResult.error) {
    throw summaryResult.error;
  }

  if (profileResult.error) {
    throw profileResult.error;
  }

  const profilesById = new Map(
    (profileResult.data || []).map(
      (profile) => [
        profile.id,
        profile
      ]
    )
  );

  return (
    summaryResult.data || []
  ).map((summary) => {
    const profile =
      profilesById.get(
        summary.business_id
      ) || {};

    return {
      ...summary,
      ...profile,

      id:
        profile.id ||
        summary.business_id,

      business_id:
        summary.business_id
    };
  });
}

module.exports =
  async function businessProfilesHandler(
    req,
    res
  ) {
    res.setHeader(
      "Cache-Control",
      "no-store"
    );

    res.setHeader(
      "Allow",
      "GET, POST, PATCH, DELETE"
    );

    if (!requireAdmin(req, res)) {
      return;
    }

    let supabase;

    try {
      supabase = client();
    } catch (error) {
      return res.status(503).json({
        success: false,
        error: error.message
      });
    }

    try {
      if (req.method === "GET") {
        const businesses =
          await listBusinesses(supabase);

        return res.status(200).json({
          success: true,
          message:
            "Businesses loaded successfully.",
          businesses
        });
      }

      if (req.method === "POST") {
        const record = payload(
          req.body || {}
        );

        const validationError =
          validateRecord(record);

        if (validationError) {
          return res.status(400).json({
            success: false,
            error: validationError
          });
        }

        const {
          data,
          error
        } = await supabase
          .from("business_profiles")
          .insert(record)
          .select("*")
          .single();

        if (error) {
          throw error;
        }

        return res.status(201).json({
          success: true,
          message:
            "Business created successfully.",
          business: data
        });
      }

      if (req.method === "PATCH") {
        const id = cleanText(
          firstDefined(
            req.body?.id,
            req.query?.id
          )
        );

        if (!id) {
          return res.status(400).json({
            success: false,
            error:
              "Business id is required."
          });
        }

        const record = payload(
          req.body || {}
        );

        const validationError =
          validateRecord(record);

        if (validationError) {
          return res.status(400).json({
            success: false,
            error: validationError
          });
        }

        const {
          data,
          error
        } = await supabase
          .from("business_profiles")
          .update(record)
          .eq("id", id)
          .select("*")
          .single();

        if (error) {
          throw error;
        }

        return res.status(200).json({
          success: true,
          message:
            "Business updated successfully.",
          business: data
        });
      }

      if (req.method === "DELETE") {
        const id = cleanText(
          req.query.id
        );

        if (!id) {
          return res.status(400).json({
            success: false,
            error:
              "Business id is required."
          });
        }

        const {
          data,
          error
        } = await supabase
          .from("business_profiles")
          .update({
            status: "inactive",
            is_default: false
          })
          .eq("id", id)
          .select("*")
          .single();

        if (error) {
          throw error;
        }

        return res.status(200).json({
          success: true,
          message:
            "Business marked as inactive.",
          business: data
        });
      }

      return res.status(405).json({
        success: false,
        error: "Method not allowed."
      });
    } catch (error) {
      console.error(
        "Business profile operation failed:",
        error
      );

      return res.status(500).json({
        success: false,
        error:
          "Business profile operation failed.",
        details: error.message
      });
    }
  };