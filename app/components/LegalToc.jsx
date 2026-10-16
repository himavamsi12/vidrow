"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const pad = (n) => String(n).padStart(2, "0");

// the sticky "On this page" list beside a legal page: the section being read
// is marked in yellow, and a click glides there through Lenis (a plain #hash
// jump moves the page behind Lenis's back and it glides straight back)
export default function LegalToc({ sections }) {
  const lenis = useLenis();
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    // a section counts as being read once its top passes the upper third
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const go = (e, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    setActive(id);
    if (lenis) lenis.scrollTo(el, { offset: -120 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="lg-toc" aria-label="On this page">
      <p className="lg-tocLabel">On this page</p>
      <ol>
        {sections.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={active === s.id ? "is-on" : undefined}
              onClick={(e) => go(e, s.id)}
            >
              <span className="lg-tocNum">{pad(i + 1)}</span>
              {s.title}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact-us"
            className={active === "contact-us" ? "is-on" : undefined}
            onClick={(e) => go(e, "contact-us")}
          >
            <span className="lg-tocNum">{pad(sections.length + 1)}</span>
            Contact Us
          </a>
        </li>
      </ol>
    </nav>
  );
}
