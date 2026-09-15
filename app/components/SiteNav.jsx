"use client";

import { useEffect, useState } from "react";

// links always point back at the homepage's own sections — from the case
// study page that's a real navigation, from the homepage itself the browser
// just scrolls (same path, only the fragment differs)
const NAV_LINKS = [
  { label: "Works", href: "/#featured" },
  { label: "Case study", href: "/#deepdive" },
  { label: "Partnership", href: "/#partnership" },
  { label: "Founders", href: "/#people" },
];

function ContactButton({ className = "hx-contact", onClick }) {
  return (
    <a className={className} href="/contact" onClick={onClick}>
      <span>Contact us</span>
      <span className="hx-contact-i" aria-hidden="true">
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <g fill="var(--acid)">
            <rect x="10" y="10" width="6" height="6" />
            <rect x="17" y="10" width="6" height="6" />
            <rect x="24" y="10" width="6" height="6" />
            <rect x="17" y="17" width="6" height="6" />
            <rect x="24" y="17" width="6" height="6" />
            <rect x="24" y="24" width="6" height="6" />
          </g>
        </svg>
      </span>
    </a>
  );
}

// the logo + links + contact button shared by the homepage hero bar and the
// case study page nav — each page supplies its own wrapper (.hx-bar /
// .csp-nav) for positioning, this just renders the elements. Below 900px the
// links + contact button fold into a hamburger-triggered full-screen menu
// carrying the same options, plus its own contact button.
export default function SiteNav({ logoHref = "/" }) {
  const [open, setOpen] = useState(false);

  // the menu is a full-screen overlay, so lock the page behind it while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // sticky nav: hides on a deliberate scroll down, reappears on any scroll
  // up (even a small one) — a toggled class on <html> rather than component
  // state, so .hx-bar (and any other nav wrapper that opts in) can just
  // style off it in CSS without this component knowing which page it's on.
  // Never hides while the mobile menu is open or near the very top.
  useEffect(() => {
    if (open) return;
    let lastY = window.scrollY;
    let ticking = false;
    const DELTA = 6; // ignores sub-pixel/jitter scroll noise
    const NEAR_TOP = 40; // always show once back near the page top

    const setHidden = (hidden) => {
      document.documentElement.classList.toggle("nav-hidden", hidden);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = Math.max(0, window.scrollY);
        const delta = y - lastY;
        if (y <= NEAR_TOP) {
          setHidden(false);
        } else if (delta > DELTA) {
          setHidden(true);
        } else if (delta < -DELTA) {
          setHidden(false);
        }
        lastY = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      setHidden(false);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a className="hx-logo" href={logoHref} aria-label="Vidrow">
        <img src="/Logo.svg" alt="Vidrow" />
      </a>

      <div className="hx-right">
        <nav className="hx-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <ContactButton className="hx-contact hx-contact--bar" />

        <button
          type="button"
          className={`hx-burger${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="hx-mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`hx-mobileMenu${open ? " is-open" : ""}`} id="hx-mobile-menu">
        <nav className="hx-mobileLinks" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <ContactButton onClick={close} />
      </div>
    </>
  );
}
