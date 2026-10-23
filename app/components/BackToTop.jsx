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
      {/* the violet staircase mark the site's buttons carry */}
      <svg viewBox="10 10 20 20" aria-hidden="true">
        <path fill="var(--violet)" d="M10 10 H30 V30 H23.333 V23.333 H16.667 V16.667 H10 Z" />
      </svg>
      <span className="btt-t">Back to top</span>
    </a>
  );
}
