"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const LENIS_OPTIONS = {
  lerp: 0.08,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
};

export default function SmoothScrolling({ children }) {
  const lenisRef = useRef(null);

  // every load/reload should start at the top (the hero), regardless of
  // where the browser remembers the user last scrolled to — the browser's
  // own scroll restoration runs before React hydrates, so it has to be
  // turned off, not just overridden after. The one exception is an actual
  // #hash in the URL (e.g. a nav link from the case study page to a
  // homepage section): that still has to land on its target, not the top.
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const target = window.location.hash && document.querySelector(window.location.hash);
    if (target) {
      // land on the section before the first paint, so there is no flash of
      // the top of the page and no visible scroll
      target.scrollIntoView({ behavior: "instant" });
      // give Lenis a tick to attach before handing it the jump, so it isn't
      // left thinking the page is still at 0 and fighting the next real
      // scroll — falls back to a plain jump if it isn't ready yet. A plain
      // timer, not requestAnimationFrame: rAF only fires on an actual paint
      // frame, which a backgrounded/throttled tab can withhold indefinitely,
      // leaving the page stuck at the top instead of landing on the target.
      setTimeout(() => {
        const lenis = lenisRef.current?.lenis;
        if (lenis) lenis.scrollTo(target, { immediate: true });
        else target.scrollIntoView();
        // drop the hash once landed, so a reload starts back at the hero
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }, 0);
      return;
    }

    // Back from a campaign page: the homepage is loaded again from scratch,
    // so put the page back on Selected Work where the card was opened. The
    // sections above it (the pinned Playbook and Levers) settle their
    // heights over the first moments, so the spot is re-applied until the
    // layout has stopped moving or the user takes over.
    let saved = null;
    try {
      const nav = performance.getEntriesByType("navigation")[0];
      saved = JSON.parse(sessionStorage.getItem("sw-return") || "null");
      if (!nav || nav.type !== "back_forward") saved = null;
    } catch {}
    if (saved && document.getElementById("work")) {
      let stopped = false;
      const put = () => {
        if (stopped) return;
        const sec = document.getElementById("work");
        if (!sec) return;
        const y = sec.getBoundingClientRect().top + window.scrollY + saved.offset;
        const lenis = lenisRef.current?.lenis;
        if (lenis) lenis.scrollTo(y, { immediate: true, force: true });
        else window.scrollTo(0, y);
      };
      const stop = () => {
        stopped = true;
        clearInterval(iv);
        ["wheel", "touchstart", "keydown", "mousedown"].forEach((t) =>
          window.removeEventListener(t, stop)
        );
      };
      ["wheel", "touchstart", "keydown", "mousedown"].forEach((t) =>
        window.addEventListener(t, stop, { passive: true })
      );
      const iv = setInterval(put, 100);
      setTimeout(stop, 3000);
      put();
      // Lenis may not be attached yet on the first call; the interval covers it
      return;
    }

    window.scrollTo(0, 0);
  }, []);

  // coming back (browser Back) to a page, the browser puts the page at its
  // old scroll position behind Lenis's back, so Lenis still holds the target
  // from the page just left and the first scroll glides toward that stale
  // spot — landing on a different section. Re-sync it to where the page
  // really is, a few times because the position is restored a moment after
  // the page renders.
  const pathname = usePathname();
  useEffect(() => {
    const sync = () => {
      const lenis = lenisRef.current?.lenis;
      if (!lenis) return;
      lenis.resize();
      lenis.scrollTo(window.scrollY, { immediate: true, force: true });
    };
    const timers = [0, 150, 400, 900].map((ms) => setTimeout(sync, ms));
    return () => timers.forEach(clearTimeout);
  }, [pathname]);

  return (
    <ReactLenis root options={LENIS_OPTIONS} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
