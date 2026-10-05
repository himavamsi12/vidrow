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
  const stickyRef = useRef(null);
  // the mobile pin's current geometry, kept for the title taps (see openStage)
  const pinRef = useRef(null);

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
  // of that scroll opens the next stage (closing the one before), the way
  // desktop steps through them. The pinned block is sized from its own
  // rendered height, which changes as stages open and close, so a
  // ResizeObserver keeps the track and the pin's offset in step with it.
  useEffect(() => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = STAGES.length;

    const clear = () => {
      pinRef.current = null;
      track.style.height = "";
      sticky.style.position = "";
      sticky.style.top = "";
    };

    const layout = () => {
      if (reduce || window.innerWidth >= 900) {
        clear();
        return;
      }
      const vh = window.innerHeight;
      const h = sticky.offsetHeight;
      // half a screen of scrolling per stage
      const span = Math.round(vh * 0.5 * n);
      // centred when it fits. When it doesn't, it's bottom-aligned — but
      // never pinned higher than the dark panel's own top, so the section
      // heading scrolls away first and the open card is never cut off at
      // the top (only the closed titles under it can run off the bottom)
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
    <section className="wy" id="stage">
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
                        <div className="wy-bodyIn">
                          <div className="wy-lead">
                            <h3 className="wy-leadTitle">{s.title}</h3>
                            <p className="wy-copy">{s.copy}</p>
                          </div>
                          {/* desktop: the link sits in the card's lower notch */}
                          <a className="wy-read wy-read--d" href="#featured">
                            Read Case Study <WyMark />
                          </a>
                          <div className="wy-cardwrap">
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
