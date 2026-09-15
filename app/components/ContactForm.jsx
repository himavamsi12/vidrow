"use client";

import { useState } from "react";
import { CornerArrow } from "./ContactIcons";

const REQUIREMENTS = [
  "Performance marketing",
  "Creative production",
  "Full-funnel growth",
  "Something else",
];

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  requirement: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="contact-form-h">Send a Message</h2>

      <label className="contact-field">
        <span className="sr-only">Full name</span>
        <input
          type="text"
          placeholder="Full name"
          value={form.name}
          onChange={update("name")}
          required
        />
      </label>

      <label className="contact-field">
        <span className="sr-only">Email</span>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={update("email")}
          required
        />
      </label>

      <label className="contact-field">
        <span className="sr-only">Phone number</span>
        <input
          type="tel"
          placeholder="Phone number"
          value={form.phone}
          onChange={update("phone")}
        />
      </label>

      <label className="contact-field contact-field--select">
        <span className="sr-only">What&apos;s the requirement</span>
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
          <path d="M4 7.5 10 13.5 16 7.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </label>

      <label className="contact-field contact-field--area">
        <span className="sr-only">Write about your requirement</span>
        <textarea
          placeholder="Write about your requirement"
          rows={4}
          value={form.message}
          onChange={update("message")}
        />
      </label>

      <button type="submit" className="contact-submit">
        <span className="contact-submit-label">{status === "sent" ? "SENT" : "SUBMIT"}</span>
        <span className="contact-submit-icon">
          <CornerArrow />
        </span>
      </button>
    </form>
  );
}
