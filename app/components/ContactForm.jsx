"use client";

import { useState } from "react";
import { CornerArrow } from "./ContactIcons";
import { submitContact } from "../contact/actions";

const REQUIREMENTS = [
  "Performance marketing",
  "Creative production",
  "Full-funnel growth",
  "Something else",
];

const INITIAL = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  requirement: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    try {
      const res = await submitContact(form);
      if (res.ok) {
        setStatus("sent");
        setForm(INITIAL);
      } else {
        setStatus("idle");
        setError(res.error);
      }
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-row">
        <label className="contact-field">
          <span className="contact-label">First name</span>
          <input
            type="text"
            placeholder="Enter first name"
            value={form.firstName}
            onChange={update("firstName")}
            required
          />
        </label>
        <label className="contact-field">
          <span className="contact-label">Last name</span>
          <input
            type="text"
            placeholder="Enter Last name"
            value={form.lastName}
            onChange={update("lastName")}
          />
        </label>
      </div>

      <div className="contact-row">
        <label className="contact-field">
          <span className="contact-label">Email</span>
          <input
            type="email"
            placeholder="Enter the email"
            value={form.email}
            onChange={update("email")}
            required
          />
        </label>
        <label className="contact-field">
          <span className="contact-label">Phone</span>
          <input
            type="tel"
            placeholder="Enter your phone"
            value={form.phone}
            onChange={update("phone")}
          />
        </label>
      </div>

      <label className="contact-field">
        <span className="contact-label">Company/ Brand</span>
        <input
          type="text"
          placeholder="Name of Company/Brand"
          value={form.company}
          onChange={update("company")}
        />
      </label>

      <label className="contact-field contact-field--select">
        <span className="contact-label">What are you looking for?</span>
        <span className="contact-control">
          <select value={form.requirement} onChange={update("requirement")} required>
            <option value="" disabled>
              What&apos;s the requirement
            </option>
            {REQUIREMENTS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          <svg className="contact-field-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 7.5 10 13.5 16 7.5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      </label>

      <label className="contact-field contact-field--area">
        <span className="contact-label">Tell us about your requirement</span>
        <textarea
          placeholder="Write about your requirement"
          rows={4}
          value={form.message}
          onChange={update("message")}
        />
      </label>

      {/* honeypot: hidden from people, left empty by them; bots fill it */}
      <input
        type="text"
        name="website"
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={update("website")}
      />

      {error && (
        <p className="contact-form-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="contact-submit" disabled={status === "sending"}>
        <span className="contact-submit-label">
          {status === "sending" ? "SENDING…" : status === "sent" ? "SENT" : "SUBMIT"}
        </span>
        <span className="contact-submit-icon">
          <CornerArrow />
        </span>
      </button>
    </form>
  );
}
