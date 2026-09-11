"use client";

import { useEffect, useRef, useState } from "react";
import { FOOTER_PIECES, FOOTER_PIECES_MOBILE } from "../data/footerPieces";

const CTA_CELLS = [
  [0, 0],
  [1, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
];

// the last piece to flatten starts at --uat 3742ms and takes .5s — this is
// when the whole sequence is actually done, not just when the last piece
// stops falling
const REVEAL_DELAY = 4260;

export default function Footer() {
  const footerRef = useRef(null);
  const wellRef = useRef(null);
  const wellWrapRef = useRef(null);
  const pieceRefs = useRef([]);
  const [playing, setPlaying] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [mobile, setMobile] = useState(false);

  // the 35x5 single-row wordmark reads fine wide, but wraps to nothing on
  // narrow screens — below 640px it's regrouped onto a 19x11 two-line grid
  // ("VID" / "ROW") instead, see FOOTER_PIECES_MOBILE
  useEffect(() => {
    const mq = window.matchMedia("(max-width:640px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const pieces = mobile ? FOOTER_PIECES_MOBILE : FOOTER_PIECES;

  // watch the block well itself, not the whole footer — the footer's title
  // and CTA sit well above the well, so observing the footer fired this
  // before the well had scrolled into view and the fall was already over
  // by the time it did
  useEffect(() => {
    const el = wellRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setPlaying(true);
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setPlaying(true);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // each piece's fall is a plain CSS transition, kicked off by its own JS
  // timer rather than a long CSS animation-delay — a delay of up to 2.68s
  // followed by a ~600ms burst is exactly the kind of animation some
  // browsers deprioritize on an offscreen/throttled timeline, skipping
  // straight to the end state instead of painting the drop. A setTimeout
  // fires a real callback at the right moment and starts the transition
  // fresh, so the fall is always actually visible.
  useEffect(() => {
    if (!playing) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers = [];
    pieces.forEach((p, i) => {
      if (p.pre) return;
      const el = pieceRefs.current[i];
      if (!el) return;
      if (reduce) {
        el.classList.add("vfoot__piece--fallen");
        return;
      }
      timers.push(setTimeout(() => el.classList.add("vfoot__piece--fallen"), p.at));
    });
    return () => timers.forEach(clearTimeout);
  }, [playing, pieces]);

  // the flatten-to-yellow is timed off its own --uat, independent of the
  // fall/seat above — every piece lands in its own shade first, and only
  // once the whole wordmark has assembled does it flatten to one yellow
  useEffect(() => {
    if (!playing) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const timers = [];
    pieces.forEach((p, i) => {
      const el = pieceRefs.current[i];
      if (!el) return;
      timers.push(setTimeout(() => el.classList.add("vfoot__piece--flat"), p.uat));
    });
    return () => timers.forEach(clearTimeout);
  }, [playing, pieces]);

  // the bottom nav/legal panel only slides into view once the wordmark has
  // fully finished falling and flattening — revealing it any earlier would
  // step on the tetris sequence
  useEffect(() => {
    if (!playing) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setRevealed(true);
      return;
    }
    const t = setTimeout(() => setRevealed(true), REVEAL_DELAY);
    return () => clearTimeout(t);
  }, [playing]);

  // once the wordmark is fully formed, the well wrap's empty runway (the
  // headroom the pieces fell through) collapses away, sliding the wordmark
  // up to close the gap under the CTA — right as the nav panel below fades
  // in. Both ends of the height change are measured and set explicitly, so
  // there's a real px-to-px transition rather than an unanimatable jump
  // from an aspect-ratio-derived "auto" height
  useEffect(() => {
    if (!revealed) return;
    const wrap = wellWrapRef.current;
    if (!wrap) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = wrap.getBoundingClientRect();
    const collapsedHeight = mobile ? (rect.width * 11) / 19 : (rect.width * 5) / 35;
    if (reduce) {
      wrap.style.height = `${collapsedHeight}px`;
      return;
    }
    wrap.style.height = `${rect.height}px`;
    // a plain timer, not requestAnimationFrame — rAF only fires on an
    // actual paint frame, which a throttled/backgrounded tab can withhold
    // indefinitely (the same failure mode the fall's old animation-delay
    // hit); setTimeout's callback queue keeps running regardless, so the
    // second height write is guaranteed to actually happen
    const t = setTimeout(() => {
      wrap.style.height = `${collapsedHeight}px`;
    }, 20);
    return () => clearTimeout(t);
  }, [revealed, mobile]);

  return (
    <footer
      className={`vfoot vfoot--v2${playing ? " is-playing" : ""}${revealed ? " is-revealed" : ""}`}
      id="contact"
      ref={footerRef}
    >
      <div className="vfoot__copy">
        <h2 className="vfoot__title">Ready for your next growth stage?</h2>
        <div className="vfoot__ctaWrap">
          <a className="vfoot__cta" href="#contact">
            <span className="vfoot__ctaLabel">Click to grow</span>
            <span className="vfoot__ctaIcon">
              <span className="vfoot__ctaMark">
                {CTA_CELLS.map(([x, y], i) => (
                  <i key={i} style={{ "--x": x, "--y": y }} />
                ))}
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className={`vfoot__wellWrap${mobile ? " is-2line" : ""}`} ref={wellWrapRef}>
        <div className={`vfoot__well${mobile ? " is-2line" : ""}`} ref={wellRef}>
          {pieces.map((p, i) => (
            <span
              className={`vfoot__piece${p.pre ? " vfoot__piece--pre" : ""}`}
              key={i}
              ref={(el) => {
                pieceRefs.current[i] = el;
              }}
              style={{
                "--x": p.x,
                "--y": p.y,
                "--w": p.w,
                "--h": p.h,
                "--fall": p.fall,
                "--dur": p.dur + "ms",
                "--c": `var(--shade-${p.shade})`,
              }}
            >
              <span className="vfoot__pieceIn">
                {p.cells.map(([x, y], k) => (
                  <i key={k} style={{ "--x": x, "--y": y }} />
                ))}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="vfoot__bottomOuter">
        <div className="vfoot__bottomIn">
          <div className="vfoot__bottom">
            <div className="vfoot__bottomRow">
              <p className="vfoot__tagline">We turn attention into impact.</p>

              <div className="vfoot__legal">
                <span>© 2026 Vidrow</span>
                <span className="vfoot__dot" aria-hidden="true">
                  ·
                </span>
                <a href="#contact">Privacy</a>
                <span className="vfoot__dot" aria-hidden="true">
                  ·
                </span>
                <a href="#contact">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
