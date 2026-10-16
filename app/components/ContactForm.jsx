"use client";

import { useEffect, useRef, useState } from "react";
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

  const [open, setOpen] = useState(false);
  const controlRef = useRef(null);

  // close the list on an outside click or Escape
  useEffect(() => {
    if (!open) return;
    const away = (e) => {
      if (!controlRef.current?.contains(e.target)) setOpen(false);
    };
    const esc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", away);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", away);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

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

  // once sent, the form gives way to a thank-you note in the same box
  if (status === "sent") {
    return (
      <div className="contact-form contact-thanks" role="status">
        <span className="contact-thanks-icon" aria-hidden="true">
          <CornerArrow />
        </span>
        <h2 className="contact-thanks-h">Thank you for submitting.</h2>
        <p className="contact-thanks-p">We&apos;ll reach out to you shortly.</p>
        <button type="button" className="contact-thanks-again" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

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
        <span className="contact-control" ref={controlRef}>
          <input
            className="contact-select-value"
            tabIndex={-1}
            aria-hidden="true"
            required
            value={form.requirement}
            onChange={() => {}}
          />
          <button
            type="button"
            className={`contact-select${form.requirement ? "" : " is-empty"}`}
            aria-haspopup="listbox"
            aria-expanded={open}
            onClick={(e) => {
              e.preventDefault();
              setOpen((o) => !o);
            }}
          >
            {form.requirement || "What\u2019s the requirement"}
          </button>
          {open && (
            <ul className="contact-options" role="listbox">
              {REQUIREMENTS.map((r) => (
                <li
                  key={r}
                  role="option"
                  aria-selected={form.requirement === r}
                  className={form.requirement === r ? "is-on" : ""}
                  onClick={() => {
                    setForm((f) => ({ ...f, requirement: r }));
                    setOpen(false);
                  }}
                >
                  {r}
                </li>
              ))}
            </ul>
          )}
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
          {status === "sending" ? "SENDING…" : "SUBMIT"}
        </span>
        <span className="contact-submit-icon">
          <CornerArrow />
        </span>
      </button>
    </form>
  );
}
