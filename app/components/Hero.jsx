"use client";

import { useEffect, useState } from "react";
import SiteNav from "./SiteNav";

const WORD_COUNT = 4;

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0);
  // the word the pointer is on, which takes over from the autoplay while
  // it's there — hovering a word lights its own block in the staircase
  const [hoverWord, setHoverWord] = useState(null);
  const [reduceStepsLit, setReduceStepsLit] = useState(false);

  // ── Autoplay text and block highlights ──
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setReduceStepsLit(true);
      return;
    }

    // paused while a word is hovered, so the cycle doesn't move on under
    // the pointer; it picks up again from that word on leaving
    if (hoverWord !== null) return;

    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % WORD_COUNT);
    }, 1500);

    return () => clearInterval(interval);
  }, [hoverWord]);

  const shown = hoverWord ?? activeWord;
  const isLit = (g) => (reduceStepsLit && hoverWord === null) || g === shown;
  const wordLit = (i) => (!reduceStepsLit || hoverWord !== null) && i === shown;

  // hovering a word also leaves the cycle there once the pointer goes
  const hoverProps = (i) => ({
    onMouseEnter: () => setHoverWord(i),
    onMouseLeave: () =>
      setHoverWord((h) => {
        if (h !== i) return h;
        setActiveWord(i);
        return null;
      }),
  });

  return (
    <header className="hx" id="top">
      <div className="hx-in">
        <div className="hx-bar">
          <SiteNav logoHref="#top" />
        </div>

        <div className="hx-stair" aria-hidden="true">
          <div className={`hx-step hx-s1 hx-y${isLit(0) ? " lit" : ""}`}>
            <span className="hx-stat">
              <strong className="hx-num">12+ Yrs</strong>
              <span className="hx-cap">Brand&nbsp;|&nbsp;Performance&nbsp;|&nbsp;Social</span>
            </span>
          </div>
          <div className={`hx-step hx-s3 hx-y${isLit(2) ? " lit" : ""}`}>
            <span className="hx-tag hx-tag--s3">
              <strong className="hx-num">
                2x
                <br />
                Faster
              </strong>
              <span className="hx-cap">
                Reach Your
                <br />
                Fundraiser Goals
              </span>
            </span>
          </div>
          <div className={`hx-step hx-s2 hx-v${isLit(1) ? " lit" : ""}`}>
            <span className="hx-tag">
              <span className="hx-cap hx-cap--bold">Seed To</span>
              <strong className="hx-num hx-num--s2">Series D</strong>
              <span className="hx-cap">Playbook</span>
            </span>
          </div>
          <div className={`hx-step hx-s4 hx-v${isLit(3) ? " lit" : ""}`}>
            <span className="hx-tag">
              <strong className="hx-num">50+</strong>
              <span className="hx-cap">
                Startups worked
                <br />
                with so far
              </span>
            </span>
          </div>
        </div>

        <div className="hx-copy">
          <h1 className="hx-h">
            {/* each word highlights in the colour of the staircase block it
                lights: words 0 and 2 are the acid steps, 1 and 3 the violet */}
            <u className={`hx-w hx-w-y${wordLit(0) ? " lit" : ""}`} {...hoverProps(0)}>Marketing</u>{" "}
            <u className={`hx-w hx-w-v${wordLit(1) ? " lit" : ""}`} {...hoverProps(1)}>Partner</u>
            {/* mobile folds the headline into three lines of its own:
                Marketing Partner / behind Fastest / Growing Startups. */}
            <br className="hx-br-m" />{" "}
            behind
            <br className="hx-br-d" />
            {" "}Fastest
            <br className="hx-br-m" />{" "}
            <u className={`hx-w hx-w-y${wordLit(2) ? " lit" : ""}`} {...hoverProps(2)}>Growing</u>{" "}
            <u className={`hx-w hx-w-v${wordLit(3) ? " lit" : ""}`} {...hoverProps(3)}>Startups.</u>
          </h1>
          <p className="hx-sub">
            We work alongside founders to turn marketing into a clearer, faster and more repeatable
            path to growth.
          </p>
          <a className="hx-cta" href="/contact">
            <span className="hx-cta-t">Click to grow</span>
            <span className="hx-cta-i" aria-hidden="true">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                {/* the same solid step mark as Where You Are Now's "Read full story" */}
                <path fill="#715BE4" d="M10 10 H30 V30 H23.333 V23.333 H16.667 V16.667 H10 Z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
