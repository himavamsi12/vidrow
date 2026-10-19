// the contact form's checks, shared by the form (instant feedback) and the
// server action (the real gate, which a script skipping the form still meets)

// a name, an @, and a domain with a dot and a 2+ letter ending: "a@b.co" passes,
// "test@test" and "test@test." don't
export const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-z]{2,}$/;

// digits with the usual separators (spaces, dashes, brackets, a leading +),
// 10 to 15 digits in all: an Indian mobile, or an international number
export const PHONE_CHARS_RE = /^\+?[\d\s\-()]+$/;
const phoneDigits = (v) => v.replace(/\D/g, "").length;

// the first problem with the form, or "" when it is fine to send
export function contactError(f) {
  const t = (v) => String(v ?? "").trim();
  if (!t(f.firstName)) return "Please enter your first name.";
  if (!t(f.email)) return "Please enter your email.";
  if (!EMAIL_RE.test(t(f.email))) return "Please enter a valid email, like name@company.com.";
  const phone = t(f.phone);
  if (phone && (!PHONE_CHARS_RE.test(phone) || phoneDigits(phone) < 10 || phoneDigits(phone) > 15)) {
    return "Please enter a valid phone number (10 to 15 digits), or leave it empty.";
  }
  if (!t(f.requirement)) return "Please choose what you're looking for.";
  return "";
}
