"use server";

import { createClient } from "@supabase/supabase-js";

// server-only: the secret key never reaches the browser (no NEXT_PUBLIC_
// prefix, and this file only runs as a Server Action)
function getClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

const clip = (v, n) => String(v ?? "").trim().slice(0, n);

export async function submitContact(data) {
  // hidden honeypot field: real people never fill it, bots usually do
  if (clip(data?.website, 200)) return { ok: true };

  const name = clip(data?.name, 200);
  const email = clip(data?.email, 200);
  const requirement = clip(data?.requirement, 100);

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !requirement) {
    return { ok: false, error: "Please fill in your name, email and requirement." };
  }

  const supabase = getClient();
  if (!supabase) {
    console.error("contact form: SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY missing");
    return { ok: false, error: "Something went wrong. Please try again." };
  }

  const { error } = await supabase.from("contact_submissions").insert({
    name,
    email,
    phone: clip(data?.phone, 40) || null,
    requirement,
    message: clip(data?.message, 5000) || null,
  });

  if (error) {
    console.error("contact form insert failed", error);
    return { ok: false, error: "Something went wrong. Please try again." };
  }
  return { ok: true };
}
