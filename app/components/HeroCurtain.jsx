"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { TET_W, TET_H, TET_PIECES, TET_M_W, TET_M_H, TET_M_PIECES, tetPoints } from "./tetrisPieces";

// timings for the three acts: the staircase growing to cover the screen,
// a short hold while the page jumps to Featured Work behind it (invisible),
// then the curtain lifting off upward to reveal it
const CLOSE_MS = 750; // the bars' .65s rise plus a small settle
const HOLD_MS = 100;
const FADE_MS = 600; // matches .hero-curtain's lift-off transform transition
const TAG_GAP = 24; // px left above the Featured Work tag once revealed
const RISE_MS = 1400; // #featured.is-rising's slide-up: its delays plus the 1s slide

// the hero draws a different skyline on desktop and on phones, so the
// curtain rises whichever one is on screen
const SKYLINES = {
  desktop: { sel: ".hx-tet", w: TET_W, h: TET_H, pieces: TET_PIECES, seam: 0 },
  mobile: { sel: ".hx-tet-m", w: TET_M_W, h: TET_M_H, pieces: TET_M_PIECES, seam: 3 },
};
// the top of a skyline's lowest piece: rising this far (plus a little)
// clears every piece off the top of the screen
const lowestTop = (sky) =>
  Math.max(...sky.pieces.map((p) => Math.min(...p.pts.map(([, y]) => y))));

/**
 * A fixed, viewport-covering overlay that plays the hero's staircase-close
 * animation as a genuine curtain: it is never part of the scrolling document,
 * so whatever it reveals underneath is whatever the page actually is at —
 * not whatever happens to be some scroll-distance below the hero.
 *
 * Sequence: the first deliberate scroll-down gesture -> blocks grow to fully
 * cover the screen -> the real page is jumped to Featured Work instantly
 * while hidden -> the curtain fades away, revealing Featured Work already
 * in place.
 */
export default function HeroCurtain() {
  const [mounted, setMounted] = useState(false);
  const [closed, setClosed] = useState(false);
  const [fading, setFading] = useState(false);
  const svgRef = useRef(null); // polygons are driven straight from the rAF loop, not React state
  const [sky, setSky] = useState(SKYLINES.desktop);
  const [vbH, setVbH] = useState(TET_H);
  const [skyDy, setSkyDy] = useState(0); // where the hero's skyline actually sits, in viewBox units
  const lenis = useLenis();
  const firedRef = useRef(false);
  // true from the moment a reveal starts until its curtain has fully gone, so
  // nothing can start a second one on top of it
  const busyRef = useRef(false);

  // mount first with the resting staircase shape, then flip to "closed" a
  // couple of frames later so the browser actually has a starting point to
  // transition from
  useEffect(() => {
    if (!mounted) return;
    let raf1;
    let raf2;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setClosed(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [mounted]);

  // the bars rise on a rAF-driven ease (SVG points can't be CSS-transitioned
  // everywhere), and the viewBox is sized to the screen so the resting
  // skyline lands exactly on the hero's
  useEffect(() => {
    if (!mounted) return;
    const de = document.documentElement;
    setVbH((sky.w * de.clientHeight) / de.clientWidth);
  }, [mounted, sky]);

  useEffect(() => {
    if (!closed) return;
    let raf;
    const start = performance.now();
    const dy = skyDy;
    // far enough that the lowest piece clears the top of the screen
    const travel = dy + lowestTop(sky) + 10;
    const flat = Math.min(...sky.pieces.flatMap((p) => p.pts.map(([, y]) => y)));
    const apply = (t) => {
      const polys = svgRef.current?.children;
      if (!polys) return;
      // the paper-coloured backing is drawn first, then the pieces over it
      sky.pieces.forEach((p, i) => {
        const pts = tetPoints(p.pts, dy, t, travel, sky.h, flat);
        polys[i]?.setAttribute("points", pts);
        polys[sky.pieces.length + i]?.setAttribute("points", pts);
      });
    };
    const tick = (now) => {
      const k = Math.min((now - start) / 650, 1);
      apply(k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [closed, vbH, skyDy, sky]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // which skyline (and Featured Work layout) is showing is read when the
    // gesture fires, so a window resized after load still gets the right one
    const desktop = () => window.innerWidth > 900;

    // a page load that already targets a section (e.g. a nav link from the
    // case study page landing on /#partnership) means the user never saw
    // the hero to begin with — the jump SmoothScrolling performs to get
    // there is not the "user scrolled past the hero" gesture this curtain
    // exists for, and the onScroll fallback below must not mistake it for
    // one. Scrolling back up near the top still re-arms it normally, same
    // as it does mid-session.
    if (window.location.hash) {
      firedRef.current = true;
    }

    let touchStartY = 0;
    const blockTouch = (e) => {
      if (e.cancelable) e.preventDefault();
    };

    const trigger = () => {
      if (firedRef.current || busyRef.current) return;
      firedRef.current = true;
      busyRef.current = true;
      const isDesktop = desktop();
      const line = isDesktop ? SKYLINES.desktop : SKYLINES.mobile;

      lenis?.stop();
      // the nav drops under the curtain and stops reacting to scrolling while
      // it plays, so the page jump behind it can't make it hide and re-show
      document.documentElement.dataset.heroCurtain = "1";
      document.body.style.overflow = "hidden";
      // a touch scroll is native, so hold the page still under the curtain
      window.addEventListener("touchmove", blockTouch, { passive: false });
      // sized before it mounts, so its first paint is already the screen-sized
      // skyline rather than one stretched to fit for a frame
      const de = document.documentElement;
      const scale = de.clientWidth / line.w;
      setSky(line);
      setVbH(de.clientHeight / scale);
      // the hero isn't always exactly one screen tall, so line the curtain's
      // skyline up with where the hero's actually sits on screen
      const skyEl = document.querySelector(line.sel);
      setSkyDy(skyEl ? skyEl.getBoundingClientRect().top / scale : de.clientHeight / scale - line.h);
      setMounted(true);

      setTimeout(() => {
        // fully covered now — jump the real page to Featured Work while it
        // can't be seen. Lenis is stopped, so `force: true` is required —
        // without it, scrollTo is a no-op while stopped.
        // it lands with the "Featured work" tag just under the top edge,
        // rather than at the section's own top, which would leave its full
        // top padding showing above the heading. Measured from the heading's
        // padding, not the tag's rect — the heading is still offset by its
        // not-yet-played fade-up at this point.
        const section = document.getElementById("featured");
        document.documentElement.classList.add("nav-hidden");
        const head = section?.querySelector(isDesktop ? ".fw2-head" : ".fw-head");
        if (section) {
          let pad = head ? parseFloat(getComputedStyle(head).paddingTop) : 0;
          // on phones the tag also sits below the mobile section's own padding
          const fw = !isDesktop && section.querySelector(".fw");
          if (fw) pad += parseFloat(getComputedStyle(fw).paddingTop);
          const top =
            section.getBoundingClientRect().top + window.scrollY + Math.max(pad - TAG_GAP, 0);
          if (lenis) {
            lenis.scrollTo(top, { immediate: true, force: true });
          } else {
            const prevBehavior = document.documentElement.style.scrollBehavior;
            document.documentElement.style.scrollBehavior = "auto";
            window.scrollTo(0, top);
            document.documentElement.style.scrollBehavior = prevBehavior;
          }
        }

        setTimeout(() => {
          setFading(true);
          // as the curtain lifts, Featured Work slides up into place under
          // it rather than just being uncovered. The class is dropped once
          // the slide is done so it replays on the next reveal and leaves
          // no transform on the section afterwards.
          if (section) {
            section.classList.remove("is-rising");
            void section.offsetWidth;
            section.classList.add("is-rising");
            setTimeout(() => section.classList.remove("is-rising"), RISE_MS);
          }
          setTimeout(() => {
            document.body.style.overflow = "";
            window.removeEventListener("touchmove", blockTouch);
            lenis?.start();
            delete document.documentElement.dataset.heroCurtain;
            setMounted(false);
            setClosed(false);
            setFading(false);
            busyRef.current = false;
          }, FADE_MS);
        }, HOLD_MS);
      }, CLOSE_MS);
    };

    // only ever respond to a genuine, deliberate scroll gesture — never a
    // bare native "scroll" event, since browsers can fire one on their own
    // (hydration reflow, scroll restoration, elastic overscroll) and that
    // must never be mistaken for the user asking to move on
    const onWheel = (e) => {
      if (e.deltaY > 0) trigger();
    };
    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    // not passive: the swipe that starts the reveal is cancelled here, so the
    // page never begins its own native scroll under the curtain (on iPhones
    // that showed as the hero shifting, and the small scroll it caused also
    // re-armed the trigger, so the curtain played twice)
    const onTouchMove = (e) => {
      if (busyRef.current) return;
      if (touchStartY - e.touches[0].clientY > 5) {
        if (!firedRef.current && e.cancelable && window.scrollY < 40) e.preventDefault();
        trigger();
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") trigger();
    };

    // a plain "scroll" listener catches inputs wheel/touch/key miss
    // (scrollbar dragging, some trackpads) — but it's only armed after a
    // short grace period so it can never fire on a load-time reflow blip
    let armed = false;
    const armTimer = setTimeout(() => {
      armed = true;
    }, 400);
    const onScroll = () => {
      if (document.documentElement.dataset.navScrolling) return;
      // scrolling back up into the hero re-arms the curtain, so scrolling
      // down through it again replays the same reveal instead of doing
      // nothing the second time
      if (busyRef.current) return;
      if (window.scrollY < 40) {
        firedRef.current = false;
        return;
      }
      if (armed && window.scrollY > 0) trigger();
    };

    // a click on any in-page hash link (nav, footer, "read full story", …)
    // is a deliberate jump to a specific section, not the "scrolling past
    // the hero" gesture this curtain exists for — the resulting scroll
    // must not be mistaken for that by the onScroll fallback below, or the
    // link's own destination gets hijacked and replaced with Featured Work
    const onClickCapture = (e) => {
      const link = e.target.closest?.('a[href*="#"]');
      if (link) firedRef.current = true;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClickCapture, true);

    return () => {
      clearTimeout(armTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("touchmove", blockTouch);
      document.body.style.overflow = "";
    };
  }, [lenis]);

  if (!mounted) return null;

  return (
    <div
      className={`hero-curtain${closed ? " is-closed" : ""}${fading ? " hero-curtain--fading" : ""}`}
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        className="hc-svg"
        shapeRendering="crispEdges"
        viewBox={`0 0 ${sky.w} ${vbH}`}
        preserveAspectRatio="none"
      >
        {/* a paper-coloured copy of every piece, thickened past the seams,
            so the hero's headline doesn't show through the gaps while it rises */}
        {sky.pieces.map((p, i) => (
          <polygon
            key={`back-${i}`}
            fill="var(--paper)"
            stroke="var(--paper)"
            strokeWidth="10"
            strokeLinejoin="miter"
            points={tetPoints(p.pts, skyDy, 0, vbH + 400, sky.h)}
          />
        ))}
        {/* the mobile skyline keeps its paper seams between pieces, as in the hero */}
        {sky.pieces.map((p, i) => (
          <polygon
            key={i}
            fill={p.fill}
            stroke={sky.seam ? "var(--paper)" : undefined}
            strokeWidth={sky.seam || undefined}
            strokeLinejoin="miter"
            points={tetPoints(p.pts, skyDy, 0, vbH + 400, sky.h)}
          />
        ))}
      </svg>
    </div>
  );
}
