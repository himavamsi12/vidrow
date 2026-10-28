"use server";

// server-only: the secret key never reaches the browser (no NEXT_PUBLIC_
// prefix, and this file only runs as a Server Action). It writes straight to
// Supabase's REST API rather than through supabase-js, whose client also sets
// up a realtime socket that crashes on Node versions without a built-in
// WebSocket (Node 20).
import { contactError } from "../lib/contactRules";

const clip = (v, n) => String(v ?? "").trim().slice(0, n);

const esc = (v) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// emails the team about a new enquiry through Resend's REST API. The row is
// already saved by now, so a failed email is logged, never shown to the person
async function notifyTeam(row) {
  const key = process.env.RESEND_API_KEY;
  // CONTACT_NOTIFY_TO (comma-separated) overrides the default inbox
  const to = process.env.CONTACT_NOTIFY_TO || "contact@vidrow.in";
  if (!key) {
    console.error("contact form: RESEND_API_KEY missing, no email sent");
    return;
  }

  const name = [row.first_name, row.last_name].filter(Boolean).join(" ");
  const fields = [
    ["Name", name],
    ["Email", row.email],
    ["Phone", row.phone],
    ["Company", row.company],
    ["Requirement", row.requirement],
    ["Message", row.message],
  ].filter(([, v]) => v);

  const html = `<h2 style="font-family:sans-serif">New enquiry from the Vidrow site</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${fields
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#666;vertical-align:top">${k}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`
    )
    .join("")}</table>`;
  const text = fields.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_NOTIFY_FROM || "Vidrow <contact@vidrow.in>",
        to: to.split(",").map((t) => t.trim()).filter(Boolean),
        reply_to: row.email,
        subject: `New enquiry: ${name} (${row.company})`,
        html,
        text,
      }),
      cache: "no-store",
    });
    if (!res.ok) console.error("contact form email failed", res.status, await res.text());
  } catch (err) {
    console.error("contact form email failed", err);
  }
}

export async function submitContact(data) {
  // hidden honeypot field: real people never fill it, bots usually do
  if (clip(data?.website, 200)) return { ok: true };

  const row = {
    first_name: clip(data?.firstName, 100),
    last_name: clip(data?.lastName, 100) || null,
    email: clip(data?.email, 200),
    phone: clip(data?.phone, 40) || null,
    company: clip(data?.company, 200),
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
  await notifyTeam(row);
  return { ok: true };
}
