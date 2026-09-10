"use client";
import { useEffect } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScrolling({ children }) {
  // every load/reload should start at the top (the hero), regardless of
  // where the browser remembers the user last scrolled to or which #hash
  // is in the URL — the browser's own scroll restoration runs before React
  // hydrates, so it has to be turned off, not just overridden after
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return <ReactLenis root>{children}</ReactLenis>;
}
