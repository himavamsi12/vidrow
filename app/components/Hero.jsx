"use client";

import { useEffect, useState } from "react";
import SiteNav from "./SiteNav";

const WORD_COUNT = 4;

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);
  const [reduceStepsLit, setReduceStepsLit] = useState(false);

  // ── Autoplay text and block highlights ──
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setReduceStepsLit(true);
      return;
    }

    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % WORD_COUNT);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const isLit = (g) => reduceStepsLit || g === activeWord;
  const wordLit = (i) => !reduceStepsLit && i === activeWord;

  return (
    <header className="hx" id="top">
      <div className="hx-in">
        <div className="hx-bar">
          <SiteNav logoHref="#top" />
        </div>

        <div className="hx-stair" aria-hidden="true">
          <div className={`hx-step hx-s5 hx-y${isLit(0) ? " lit" : ""}`} />
          <div className={`hx-step hx-s6 hx-y${isLit(2) ? " lit" : ""}`} />
          <div className={`hx-step hx-s1 hx-y${isLit(0) ? " lit" : ""}`}>
            <span className="hx-stat">2x - 10x</span>
            <span className="hx-note">Increase in ad spends without CAC increase</span>
          </div>
          <div className={`hx-step hx-s3 hx-y${isLit(2) ? " lit" : ""}`}>
            <span className="hx-tag">
              REPEATABLE
              <br />
              GROWTH
              <br />
              ENGINE
            </span>
          </div>
          <div className={`hx-step hx-s2 hx-v${isLit(1) ? " lit" : ""}`}>
            <span className="hx-stat">5x - 10x</span>
            <span className="hx-note">Increase in ad spends without CAC increase</span>
          </div>
          <div className={`hx-step hx-s4 hx-v${isLit(3) ? " lit" : ""}`}>
            <span className="hx-tag">
              SPEED THAT
              <br />
              COMPOUNDS
            </span>
          </div>
        </div>

        <div className="hx-copy">
          <h1 className="hx-h">
            <u className={`hx-w${wordLit(0) ? " lit" : ""}`}>Marketing</u>{" "}
            <u className={`hx-w${wordLit(1) ? " lit" : ""}`}>Partner</u>
            &nbsp; behind
            <br />
            Fastest <u className={`hx-w${wordLit(2) ? " lit" : ""}`}>Growing</u>{" "}
            <u className={`hx-w${wordLit(3) ? " lit" : ""}`}>Startups.</u>
          </h1>
          <p className="hx-sub">
            We work alongside founders to turn marketing into a clearer, faster and more repeatable
            path to growth.
          </p>
          <a className="hx-cta" href="/contact">
            <span className="hx-cta-t">Click to grow</span>
            <span className="hx-cta-i" aria-hidden="true">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <g fill="#715BE4">
                  <rect x="10" y="10" width="6" height="6" />
                  <rect x="17" y="10" width="6" height="6" />
                  <rect x="24" y="10" width="6" height="6" />
                  <rect x="17" y="17" width="6" height="6" />
                  <rect x="24" y="17" width="6" height="6" />
                  <rect x="24" y="24" width="6" height="6" />
                </g>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
