"use client";

import { useEffect, useRef, useState } from "react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import WyMark from "./WyMark";
import { STAGES, STAGE_PIECES, CELL_SHADES } from "../data/stages";

const CELL_COUNT = 16;
const ACID_CELLS = new Set(STAGE_PIECES.filter((p) => p.acid).flatMap((p) => p.cells));

export default function WhereYouAreNow() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(-1);
  const [allOn, setAllOn] = useState(false);
  const [scrollOn, setScrollOn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(0);
  // whether the mobile pin is on — it switches the panel to its one-card,
  // step-bar layout
  const [mobilePinned, setMobilePinned] = useState(false);
  const bodyInRefs = useRef([]);
  const leadRefs = useRef([]);
  const cardwrapRefs = useRef([]);
  const notchRefs = useRef([]);
  const stickyRef = useRef(null);
  // the mobile pin's current geometry, kept for the title taps (see openStage)
  const pinRef = useRef(null);

  // the stat card is position:absolute (so it sits pinned exactly where the
  // design wants it, near the light card's tab, rather than just flowing
  // below it) — that means its vertical offset has to be measured from the
  // light card's actual rendered height rather than hard-coded, since the
  // copy text runs 2 or 3 lines depending on the stage
  useEffect(() => {
    const place = () => {
      // this pinned-offset math only applies to the desktop notch/tab
      // layout (.wy-item.on .wy-cardwrap is position:absolute only at
      // min-width:901px) — on mobile the card sits in normal flow, so any
      // leftover inline top/minHeight from a previous wide layout has to be
      // cleared or it shifts the card up over the copy text above it
      if (window.innerWidth < 901) {
        STAGES.forEach((_, i) => {
          const cardwrap = cardwrapRefs.current[i];
          const bodyIn = bodyInRefs.current[i];
          const notch = notchRefs.current[i];
          if (cardwrap) cardwrap.style.top = "";
          if (bodyIn) bodyIn.style.minHeight = "";
          if (notch) notch.style.display = "";
        });
        return;
      }
      STAGES.forEach((_, i) => {
        const lead = leadRefs.current[i];
        const cardwrap = cardwrapRefs.current[i];
        const bodyIn = bodyInRefs.current[i];
        const notch = notchRefs.current[i];
        if (!lead || !cardwrap || !bodyIn) return;
        // the light card's own bottom padding is its left tab's length —
        // reset to the baseline before measuring, since a previous call
        // may have already stretched it (see below), which would otherwise
        // throw off this measurement on resize/re-runs
        const leadTabLength = 80;
        lead.style.setProperty("--wy-tab", `${leadTabLength}px`);
        const leadTop = lead.offsetTop;
        // the stat card should sit just under the text's own edge, not the
        // tab's full length, so the tab peeks out behind it rather than
        // pushing it down with a huge gap
        const textEdge = leadTop + lead.offsetHeight - leadTabLength;
        const cardTop = textEdge;
        cardwrap.style.top = `${cardTop}px`;
        // stretch the tab to match the stat card's own rendered height, so
        // the white strip runs the card's full height instead of just the
        // baseline peek — card height is intrinsic (content-driven), so
        // this doesn't feed back into cardTop above
        const cardHeight = cardwrap.offsetHeight;
        lead.style.setProperty("--wy-tab", `${cardHeight}px`);
        bodyIn.style.minHeight = `${cardTop + cardHeight}px`;

        // caps the notch .wy-lead's clip-path cuts out of its own top-right
        // corner with a matching border, so the stat card's border-right
        // reads as one continuous line up to that step instead of stopping
        // short of it. The shallow step sits calc(90 * var(--k)) down from
        // the lead card's own top — read via the card's padding (also a
        // calc(N * var(--k)) length) since --k itself isn't resolvable in JS
        const card = cardwrap.querySelector(".wy-card");
        if (card && notch) {
          const kPx = parseFloat(getComputedStyle(card).paddingLeft) / 24;
          const shallowStepY = leadTop + 90 * kPx;
          const notchHeight = cardTop - shallowStepY;
          if (notchHeight > 0) {
            notch.style.display = "block";
            notch.style.top = `${shallowStepY}px`;
            notch.style.height = `${notchHeight}px`;
          } else {
            notch.style.display = "none";
          }
        }
      });
    };
    place();
    window.addEventListener("resize", place);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [active, allOn, mobileOpen]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("requestAnimationFrame" in window)) {
      setAllOn(true);
      return;
    }

    let ticking = false;
    const scan = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (window.innerWidth < 900) {
          // mobile runs its own pinned scroll (see the effect below), which
          // opens one stage at a time through mobileOpen — so this must NOT
          // force every stage open the way the true reduced-motion/no-rAF
          // fallback below does
          setScrollOn(false);
          setAllOn(false);
          return;
        }
        setScrollOn(true);
        const track = trackRef.current;
        if (!track) return;
        // compute the span from the .scroll-on height formula (420vh) rather
        // than measuring the track's current offsetHeight — scrollOn was
        // just requested via setState, which hasn't re-rendered yet, so the
        // element is still measuring its pre-scroll-on (short) height here
        const span = window.innerHeight * 3.2;
        if (span < 80) {
          setAllOn(true);
          return;
        }
        setAllOn(false);
        let pr = -track.getBoundingClientRect().top / span;
        pr = pr < 0 ? 0 : pr > 1 ? 1 : pr;
        setActive(Math.min(STAGES.length - 1, Math.floor(pr * STAGES.length)));
      });
    };

    window.addEventListener("scroll", scan, { passive: true });
    window.addEventListener("resize", scan);
    scan();

    return () => {
      window.removeEventListener("scroll", scan);
      window.removeEventListener("resize", scan);
    };
  }, []);

  // mobile: the section pins while it's scrolled through, and each stretch
  // of that scroll swaps in the next stage, the way desktop steps through
  // them. While pinned, the panel shows only the open stage's card under a
  // row of four step bars (the closed titles are folded away, see .m-pin
  // in globals.css), so it's one card tall and fits the screen. The pin is
  // placed for the tallest of the four cards, so it holds still as they
  // swap; a ResizeObserver re-places it if the layout changes.
  useEffect(() => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = STAGES.length;

    const clear = () => {
      pinRef.current = null;
      setMobilePinned(false);
      track.style.height = "";
      sticky.style.position = "";
      sticky.style.top = "";
    };

    const layout = () => {
      if (reduce || window.innerWidth >= 900) {
        clear();
        return;
      }
      setMobilePinned(true);
      const vh = window.innerHeight;
      // the height with the tallest card open: the closed stages' cards
      // still lay out at full size inside their collapsed rows
      const openCard = sticky.querySelector(".wy-item.on .wy-bodyIn");
      const tallest = Math.max(
        0,
        ...[...sticky.querySelectorAll(".wy-bodyIn")].map((el) => el.offsetHeight)
      );
      const h = sticky.offsetHeight - (openCard ? openCard.offsetHeight : 0) + tallest;
      // half a screen of scrolling per stage
      const span = Math.round(vh * 0.5 * n);
      // centred when it fits. When it doesn't, it's bottom-aligned — but
      // never pinned higher than the dark panel's own top, so the section
      // heading scrolls away first and the card's top is never cut off
      const panel = sticky.querySelector(".wy-panel");
      const panelTop = panel
        ? panel.getBoundingClientRect().top - sticky.getBoundingClientRect().top
        : 0;
      const top = h <= vh ? Math.round((vh - h) / 2) : Math.round(Math.max(vh - h, -panelTop));
      pinRef.current = { span, top };
      sticky.style.position = "sticky";
      sticky.style.top = `${top}px`;
      track.style.height = `${h + span}px`;
    };

    // one rect read per scroll event; setMobileOpen bails out on its own
    // when the stage hasn't changed, so this needs no rAF throttle
    const onScroll = () => {
      const pin = pinRef.current;
      if (!pin) return;
      let pr = (pin.top - track.getBoundingClientRect().top) / pin.span;
      pr = pr < 0 ? 0 : pr > 1 ? 1 : pr;
      setMobileOpen(Math.min(n - 1, Math.floor(pr * n)));
    };

    const onResize = () => {
      layout();
      onScroll();
    };

    const ro = new ResizeObserver(layout);
    ro.observe(sticky);
    layout();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      clear();
    };
  }, []);

  // a tapped title scrolls to its own stretch of the pinned scroll rather
  // than opening directly, so the scroll position and the open stage agree
  const openStage = (i) => {
    const pin = pinRef.current;
    if (!pin) {
      setMobileOpen(i);
      return;
    }
    const trackTop = trackRef.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: trackTop - pin.top + (pin.span * (i + 0.5)) / STAGES.length,
      behavior: "smooth",
    });
  };

  const isOn = (i) => {
    if (allOn) return true;
    if (scrollOn) return i === active;
    return i === mobileOpen;
  };
  const isLit = (cellIndex) => {
    if (allOn) return true;
    if (active < 0) return false;
    return STAGE_PIECES.slice(0, active + 1).some((piece) => piece.cells.includes(cellIndex));
  };

  return (
    <section className={`wy${mobilePinned ? " m-pin" : ""}`} id="stage">
      <div className={`wy-track${scrollOn ? " scroll-on" : ""}`} ref={trackRef}>
        <div className="wy-sticky" ref={stickyRef}>
          <div className="wy-in">
            <Reveal className="wy-head">
              <div className="wy-tagwrap">
                <span className="wy-tag">Where You Are Now</span>
                <Mark />
              </div>
              <h2 className="wy-h">
                We help founders hit their <br className="wy-hBreak" />
                milestones faster.
              </h2>
            </Reveal>

            <div className="wy-panel">
              {/* mobile's pinned layout only: one bar per stage, filled up
                  to the open one; a tap jumps to that stage */}
              <div className="wy-steps">
                {STAGES.map((s, i) => (
                  <button
                    key={s.title}
                    type="button"
                    className={`wy-stepBar${i <= mobileOpen ? " on" : ""}`}
                    aria-label={s.title}
                    aria-current={i === mobileOpen ? "step" : undefined}
                    onClick={() => openStage(i)}
                  />
                ))}
              </div>
              <div className="wy-left">
                {STAGES.map((s, i) => (
                  <article className={`wy-item${isOn(i) ? " on" : ""}`} key={s.title}>
                    <h3
                      className="wy-title"
                      onClick={() => {
                        if (!scrollOn) openStage(i);
                      }}
                      role={scrollOn ? undefined : "button"}
                      tabIndex={scrollOn ? undefined : 0}
                      onKeyDown={(e) => {
                        if (scrollOn) return;
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          openStage(i);
                        }
                      }}
                    >
                      {s.title}
                    </h3>
                    <div className="wy-body">
                      <div>
                        <div
                          className="wy-bodyIn"
                          ref={(el) => {
                            bodyInRefs.current[i] = el;
                          }}
                        >
                          <div
                            className="wy-lead"
                            ref={(el) => {
                              leadRefs.current[i] = el;
                            }}
                          >
                            <h3 className="wy-leadTitle">{s.title}</h3>
                            <p className="wy-copy">{s.copy}</p>
                          </div>
                          <div
                            className="wy-notch"
                            aria-hidden="true"
                            ref={(el) => {
                              notchRefs.current[i] = el;
                            }}
                          />
                          <div
                            className="wy-cardwrap"
                            ref={(el) => {
                              cardwrapRefs.current[i] = el;
                            }}
                          >
                            <div className="wy-card">
                              <div>
                                <span className="wy-stat">{s.stat}</span>
                                <p className="wy-quote">&ldquo;{s.quote}&rdquo;</p>
                              </div>
                              <a className="wy-read" href="#featured">
                                Read full story <WyMark />
                              </a>
                            </div>
                            <span className="wy-client">{s.client}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="wy-boardwrap" aria-hidden="true">
                <div className="wy-grid">
                  {Array.from({ length: CELL_COUNT }).map((_, k) => (
                    <span
                      key={k}
                      className={`wy-cell${ACID_CELLS.has(k) ? " wy-cell--y" : ""}${isLit(k) ? " lit" : ""}`}
                      style={{ "--wy-shade": CELL_SHADES[k] }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
