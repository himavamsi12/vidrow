"use client";

import { useEffect, useRef, useState } from "react";
import Mark from "./Mark";
import Reveal from "./Reveal";
import { SW_FILTERS, SW_ITEMS, SW_RATE } from "../data/selectedWork";

export default function SelectedWork() {
  const [activeCat, setActiveCat] = useState("all");
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const imgRefs = useRef([]);
  const itemRefs = useRef([]);

  // ── the photo travels inside its still frame as you scroll past it ──
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let ticking = false;
    const drift = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const vh = window.innerHeight;
        const mid = vh / 2;
        imgRefs.current.forEach((img) => {
          if (!img) return;
          const shot = img.parentElement;
          const r = shot.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          let p = (r.top + r.height / 2 - mid) / (mid + r.height / 2);
          p = Math.max(-1, Math.min(1, p));
          img.style.setProperty("--py", (p * r.height * 0.09).toFixed(1) + "px");
        });
      });
    };

    window.addEventListener("scroll", drift, { passive: true });
    window.addEventListener("resize", drift);
    drift();

    return () => {
      window.removeEventListener("scroll", drift);
      window.removeEventListener("resize", drift);
    };
  }, []);

  // ── lenis-style eased drift, one rate per tile ───────────────────────
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = sectionRef.current;
    if (reduce || !section || !("requestAnimationFrame" in window)) return;

    const tiles = itemRefs.current;
    const cur = tiles.map(() => 0);
    const tgt = cur.slice();
    let raf = null;

    const aim = () => {
      const vh = window.innerHeight;
      const mid = vh / 2;
      tiles.forEach((t, i) => {
        if (!t) return;
        const r = t.getBoundingClientRect();
        if (r.bottom < -300 || r.top > vh + 300) return;
        const p = (r.top + r.height / 2 - mid) / vh;
        tgt[i] = -p * vh * SW_RATE[i % SW_RATE.length];
      });
    };

    const step = () => {
      aim();
      tiles.forEach((t, i) => {
        if (!t) return;
        const d = tgt[i] - cur[i];
        cur[i] += Math.abs(d) > 0.05 ? d * 0.085 : d;
        t.style.setProperty("--ty", cur[i].toFixed(2) + "px");
      });
      raf = requestAnimationFrame(step);
    };

    const run = (on) => {
      if (on && raf === null) raf = requestAnimationFrame(step);
      else if (!on && raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
    };

    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => run(e.isIntersecting && window.innerWidth > 1000));
        },
        { rootMargin: "200px 0px" }
      );
      io.observe(section);
    } else {
      run(window.innerWidth > 1000);
    }

    const onResize = () => {
      if (window.innerWidth <= 1000) {
        run(false);
        tiles.forEach((t, i) => {
          cur[i] = tgt[i] = 0;
          if (t) t.style.setProperty("--ty", "0px");
        });
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (io) io.disconnect();
      run(false);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="sw" id="work" ref={sectionRef}>
      <div className="sw-in">
        <Reveal className="sw-head">
          <div className="sw-headL">
            <div className="sw-tagwrap">
              <span className="sw-tag">Selected Work</span>
              <Mark />
            </div>
            <div className="sw-titleRow">
              <h2 className="sw-h">
                Our Selected
                <br className="sw-hBreak" />
                Works
              </h2>
              <a className="sw-viewAll" href="#work">
                View all
              </a>
            </div>
          </div>
          <div className="sw-filters" role="group" aria-label="Filter work by industry">
            {SW_FILTERS.map((f) => (
              <button
                key={f.cat}
                className="sw-filter"
                aria-pressed={activeCat === f.cat}
                onClick={() => setActiveCat(f.cat)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="sw-field">
          <div className="sw-grid" ref={gridRef}>
            {SW_ITEMS.map((item, i) => (
              <a
                key={item.title + i}
                className="sw-item"
                href="#work"
                data-cat={item.cat}
                hidden={activeCat !== "all" && item.cat !== activeCat}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                style={{
                  gridColumn: item.gridColumn,
                  gridRow: item.gridRow,
                  marginTop: item.marginTop,
                  "--ar": item.ar,
                }}
              >
                <span className="sw-shot">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    width="492"
                    height="298"
                    ref={(el) => {
                      imgRefs.current[i] = el;
                    }}
                  />
                </span>
                <span className="sw-meta">
                  <span className="sw-client">{item.client}</span>
                  <span className="sw-title">{item.title}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
