"use client";

import SiteNav from "./SiteNav";
import HeroScroll from "./HeroScroll";
import { SKY_PIECES, SKY_VIEWBOX, SKY_M_PIECES, SKY_M_VIEWBOX } from "./tetrisPieces";

export default function Hero() {
  return (
    <header className="hx" id="top">
      <div className="hx-in">
        <div className="hx-bar">
          <SiteNav logoHref="#top" />
        </div>

        <div className="hx-stair" aria-hidden="true">
          {/* mobile: its own, narrower skyline, traced from the mobile mock,
              one svg per piece for the same scroll curtain as desktop */}
          <div className="hx-sky-m">
            {SKY_M_PIECES.map((p, i) => (
              <svg key={i} className="hx-piece" data-d={p.d} data-rise={p.rise} viewBox={SKY_M_VIEWBOX} preserveAspectRatio="none">
                <polygon fill={p.fill} points={p.pts} />
              </svg>
            ))}
          </div>
          <div className="hx-step hx-s1 hx-y">
            <span className="hx-stat">
              <strong className="hx-num">12+ Yrs</strong>
              <span className="hx-cap hx-cap-d">Brand&nbsp;|&nbsp;Performance&nbsp;|&nbsp;Social</span>
              {/* mobile stacks the three one to a line instead */}
              <span className="hx-cap hx-cap-m">
                Brand.
                <br />
                Performance.
                <br />
                Social.
              </span>
            </span>
          </div>
          <div className="hx-step hx-s3 hx-y">
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
          <div className="hx-step hx-s2 hx-v">
            <span className="hx-tag">
              <span className="hx-cap hx-cap--bold">Seed To</span>
              <strong className="hx-num hx-num--s2">Series D</strong>
              <span className="hx-cap">Playbook</span>
            </span>
          </div>
          <div className="hx-step hx-s4 hx-v">
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

        {/* desktop: the tetris skyline, one svg per piece so the scroll curtain
            can raise each on its own delay (see HeroScroll) */}
        <div className="hx-sky" aria-hidden="true">
          {SKY_PIECES.map((p, i) => (
            <svg key={i} className="hx-piece" data-d={p.d} data-rise={p.rise} viewBox={SKY_VIEWBOX} preserveAspectRatio="xMidYMax slice">
              <polygon fill={p.fill} points={p.pts} />
            </svg>
          ))}
        </div>
        <HeroScroll />

        <div className="hx-copy">
          <h1 className="hx-h">
            {/* each word highlights in the colour of the staircase block it
                lights: words 0 and 2 are the acid steps, 1 and 3 the violet */}
            <u className="hx-w hx-w-y">Marketing</u>{" "}
            <u className="hx-w hx-w-v">Partner</u>
            {/* mobile folds the headline into three lines of its own:
                Marketing Partner / Behind the Fastest- / Growing Startups. */}
            <br className="hx-br-m" />{" "}
            Behind
            <br className="hx-br-d" />
            {" "}the Fastest-
            <br className="hx-br-m" />
            <u className="hx-w hx-w-y">Growing</u>{" "}
            <u className="hx-w hx-w-v">Startups.</u>
          </h1>
          <p className="hx-sub">
            <span className="hx-sub-d">
              We work alongside founders to turn marketing into a clearer, faster and more
              repeatable path to growth.
            </span>
            <span className="hx-sub-m">
              We work alongside founders to turn marketing into a clearer, faster and more
              repeatable path to growth.
            </span>
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
