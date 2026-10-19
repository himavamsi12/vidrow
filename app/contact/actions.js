"use server";

// server-only: the secret key never reaches the browser (no NEXT_PUBLIC_
// prefix, and this file only runs as a Server Action). It writes straight to
// Supabase's REST API rather than through supabase-js, whose client also sets
// up a realtime socket that crashes on Node versions without a built-in
// WebSocket (Node 20).
import { contactError } from "../lib/contactRules";

const clip = (v, n) => String(v ?? "").trim().slice(0, n);

export async function submitContact(data) {
  // hidden honeypot field: real people never fill it, bots usually do
  if (clip(data?.website, 200)) return { ok: true };

  const row = {
    first_name: clip(data?.firstName, 100),
    last_name: clip(data?.lastName, 100) || null,
    email: clip(data?.email, 200),
    phone: clip(data?.phone, 40) || null,
    company: clip(data?.company, 200) || null,
    requirement: clip(data?.requirement, 100),
    message: clip(data?.message, 5000) || null,
  };

  const invalid = contactError(data || {});
  if (invalid) return { ok: false, error: invalid };

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("contact form: SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY missing");
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  try {
    const res = await fetch(`${url.replace(/\/+$/, "")}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("contact form insert failed", res.status, await res.text());
      return { ok: false, error: "Something went wrong. Please try again." };
    }
  } catch (err) {
    console.error("contact form insert failed", err);
    return { ok: false, error: "Something went wrong. Please try again." };
  }
  return { ok: true };
}
