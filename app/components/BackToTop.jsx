"use client";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

/** Case studies: a button pinned to the bottom right that takes the reader
 *  back to the top. It shows once the page has scrolled past the first
 *  screen, so it never sits over the opening of a story. */
export default function BackToTop() {
  const lenis = useLenis();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const check = () => setShown(window.scrollY > window.innerHeight * 0.8);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  const go = (e) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      className={`btt${shown ? " is-on" : ""}`}
      href="#top"
      onClick={go}
      aria-label="Back to top"
      tabIndex={shown ? 0 : -1}
    >
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 16V4M4.5 9.5 10 4l5.5 5.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </a>
  );
}
