const crypto = require("crypto");
const { createClient } = require("@supabase/supabase-js");

function safeEqual(left, right) {
  const a = Buffer.from(String(left || ""));
  const b = Buffer.from(String(right || ""));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function client() {
  if (
    !process.env.SUPABASE_URL ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    throw new Error("Supabase environment variables are incomplete.");
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
      error: "Add HISTORY_ADMIN_KEY to Vercel."
    });
    return false;
  }

  if (!safeEqual(req.headers["x-history-key"], configured)) {
    res.status(401).json({
      error: "Invalid business management access key."
    });
    return false;
  }

  return true;
}

function cleanText(value) {
  const text = String(value || "").trim();
  return text || null;
}

function cleanInteger(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function cleanNumber(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function payload(body) {
  return {
    business_name: cleanText(body.businessName),
    registration_number: cleanText(body.registrationNumber),
    industry: cleanText(body.industry),
    province: cleanText(body.province),
    city: cleanText(body.city),
    employee_count: cleanInteger(body.employeeCount),
    annual_revenue: cleanNumber(body.annualRevenue),
    contact_name: cleanText(body.contactName),
    contact_email: cleanText(body.contactEmail),
    contact_phone: cleanText(body.contactPhone),
    website: cleanText(body.website),
    notes: cleanText(body.notes),
    status: cleanText(body.status) || "active"
  };
}

module.exports = async function businessProfilesHandler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (!requireAdmin(req, res)) {
    return;
  }

  let supabase;

  try {
    supabase = client();
  } catch (error) {
    return res.status(503).json({
      error: error.message
    });
  }

  try {
    if (req.method === "GET") {
      const { data, error } = await supabase
        .from("business_audit_summary")
        .select("*")
        .order("business_name", { ascending: true });

      if (error) throw error;

      return res.status(200).json({
        businesses: data || []
      });
    }

    if (req.method === "POST") {
      const record = payload(req.body || {});

      if (!record.business_name) {
        return res.status(400).json({
          error: "Business name is required."
        });
      }

      const { data, error } = await supabase
        .from("business_profiles")
        .insert(record)
        .select("*")
        .single();

      if (error) throw error;

      return res.status(201).json({
        business: data
      });
    }

    if (req.method === "PATCH") {
      const id = cleanText(req.body?.id);

      if (!id) {
        return res.status(400).json({
          error: "Business id is required."
        });
      }

      const record = payload(req.body || {});

      if (!record.business_name) {
        return res.status(400).json({
          error: "Business name is required."
        });
      }

      const { data, error } = await supabase
        .from("business_profiles")
        .update(record)
        .eq("id", id)
        .select("*")
        .single();

      if (error) throw error;

      return res.status(200).json({
        business: data
      });
    }

    if (req.method === "DELETE") {
      const id = cleanText(req.query.id);

      if (!id) {
        return res.status(400).json({
          error: "Business id is required."
        });
      }

      const { error } = await supabase
        .from("business_profiles")
        .update({ status: "inactive" })
        .eq("id", id);

      if (error) throw error;

      return res.status(200).json({
        success: true
      });
    }

    return res.status(405).json({
      error: "Method not allowed."
    });
  } catch (error) {
    console.error("Business profile operation failed:", error);

    return res.status(500).json({
      error: "Business profile operation failed.",
      details: error.message
    });
  }
};
