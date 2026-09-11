"use client";

import { useEffect, useRef, useState } from "react";

// One entry per top-level section on the page, in document order — the id
// must match the id given to that section below. There are 10, so the well
// is built from 5 two-piece tetromino blocks (an L/J pair, an I pair, a J/L
// pair, an L/J pair, an I pair) — 10 pieces landing bottom-up, one per
// section, ported from case-masai.html's rail.
const SECTIONS = [
  { id: "csp-sec-hero", label: "Overview" },
  { id: "csp-sec-aoc", label: "The Audience" },
  { id: "csp-sec-mid", label: "Where It Landed" },
  { id: "csp-sec-how", label: "How We Did It" },
  { id: "csp-sec-hooks", label: "The Hooks" },
  { id: "csp-sec-celeb", label: "Celebrity Ads" },
  { id: "csp-sec-cac", label: "Controlled CAC" },
  { id: "csp-sec-reel1", label: "Celebrity Performance" },
  { id: "csp-sec-reel2", label: "Performance Ads" },
  { id: "csp-sec-more", label: "More Stories" },
];

const ROWS = 20;
const SHADES = ["#F5FA5E", "#715BE4"];
const BLOCKS = ["LJ", "II", "JL", "LJ", "II"];
const GAP = 4;

// the well itself sits behind a section with a dark background (the
// celebrity-ads section) — the rail flips light-on-dark while it's there
const DARK_SECTION_ID = "csp-sec-celeb";

// how far from the top of the viewport the nav sticks — must match
// .csp-sideNav's own `top` in globals.css
const STICK_TOP = 140;

export default function CspSectionNav() {
  const [active, setActive] = useState(0);
  // null while plain CSS `position: sticky` is doing the job; a px value
  // once the nav has to be pinned in place instead (see the effect below)
  const [dockTop, setDockTop] = useState(null);
  const navRef = useRef(null);
  const wellRef = useRef(null);
  const pieceElsRef = useRef([]);
  const landedRef = useRef(-1);
  const railRef = useRef(null);

  // build the well once: a 2 x ROWS grid tiled by tetromino blocks, each
  // piece rendered as its own absolutely-positioned wrapper with one <i>
  // per cell — same construction as case-masai.html's rail
  useEffect(() => {
    const well = wellRef.current;
    if (!well) return;

    const pieces = [];
    let row = 0;
    // an even split of the two shades, shuffled — not an independent random
    // pick per piece, which at only 10 pieces is prone to a lopsided run
    // (all-violet, in this case) purely by chance. Built once, client-side
    // only (this effect never runs during SSR), so the shuffle is safe —
    // no server/client mismatch to worry about the way there would be if
    // this rendered in JSX.
    const PIECE_COUNT = BLOCKS.reduce((n, b) => n + (b === "O" ? 1 : 2), 0);
    const bag = Array.from({ length: PIECE_COUNT }, (_, i) => SHADES[i % SHADES.length]);
    for (let i = bag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bag[i], bag[j]] = [bag[j], bag[i]];
    }
    const add = (cells) => pieces.push({ c: bag[pieces.length], cells });
    BLOCKS.forEach((b) => {
      const r = row;
      if (b === "O") {
        add([[0, r], [1, r], [0, r + 1], [1, r + 1]]);
        row += 2;
      }
      if (b === "LJ") {
        add([[0, r], [0, r + 1], [0, r + 2], [1, r]]);
        add([[1, r + 1], [1, r + 2], [1, r + 3], [0, r + 3]]);
        row += 4;
      }
      if (b === "JL") {
        add([[1, r], [1, r + 1], [1, r + 2], [0, r]]);
        add([[0, r + 1], [0, r + 2], [0, r + 3], [1, r + 3]]);
        row += 4;
      }
      if (b === "II") {
        add([[0, r], [0, r + 1], [0, r + 2], [0, r + 3]]);
        add([[1, r], [1, r + 1], [1, r + 2], [1, r + 3]]);
        row += 4;
      }
    });

    const owner = {};
    pieces.forEach((p, n) => p.cells.forEach((c) => { owner[`${c[0]},${c[1]}`] = n; }));
    const edge = (n, c, r) => {
      const k = owner[`${c},${r}`];
      return k !== undefined && k !== n ? GAP / 2 : 0;
    };

    well.innerHTML = "";
    const pieceEls = pieces.map((p, n) => {
      const el = document.createElement("div");
      let low = ROWS - 1;
      el.className = "csp-sideNav-piece";
      el.style.setProperty("--c", p.c);
      p.cells.forEach((cell) => {
        const [c, r] = cell;
        const gl = edge(n, c - 1, r);
        const gr = edge(n, c + 1, r);
        const gt = edge(n, c, r + 1);
        const gb = edge(n, c, r - 1);
        const i = document.createElement("i");
        i.style.left = `calc(${c * 50}% + ${gl}px)`;
        i.style.width = `calc(50% - ${gl + gr}px)`;
        i.style.top = `calc(${((ROWS - 1 - r) / ROWS) * 100}% + ${gt}px)`;
        i.style.height = `calc(${100 / ROWS}% - ${gt + gb}px)`;
        el.appendChild(i);
        low = Math.min(low, r);
      });
      el.style.setProperty("--from", `-${(((ROWS - low) / ROWS) * 100 + 3).toFixed(2)}%`);
      well.appendChild(el);
      return el;
    });

    pieceElsRef.current = pieceEls;
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!els.length) return;

    const dark = document.getElementById(DARK_SECTION_ID)?.closest(".csp-in");

    // the section is "current" once its top has crossed a line near the top
    // of the viewport — the last one to have crossed it wins
    const marker = 220;
    const onScroll = () => {
      let idx = 0;
      for (let i = 0; i < els.length; i++) {
        if (els[i].getBoundingClientRect().top <= marker) idx = i;
      }
      setActive(idx);

      // flip the rail while the dark section is behind it
      const rail = railRef.current;
      if (dark && rail) {
        const r = dark.getBoundingClientRect();
        const mid = rail.getBoundingClientRect();
        const y = mid.top + mid.height / 2;
        rail.classList.toggle("on-dark", y > r.top && y < r.bottom);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // one piece lands per section reached — same landed/thud logic as
  // case-masai.html's tick(), just driven by the real section index instead
  // of an even fraction of total scroll height
  useEffect(() => {
    const well = wellRef.current;
    const pieceEls = pieceElsRef.current;
    if (!well || !pieceEls.length) return;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const n = Math.min(pieceEls.length, active + 1);
    if (n === landedRef.current) return;
    const up = n > landedRef.current;
    landedRef.current = n;

    pieceEls.forEach((el, i) => el.classList.toggle("in", i < n));
    well.classList.toggle("done", n === pieceEls.length);

    if (up && n > 0 && !reduce) {
      const t = setTimeout(() => {
        well.classList.remove("thud");
        void well.offsetWidth;
        well.classList.add("thud");
      }, 540);
      return () => clearTimeout(t);
    }
  }, [active]);

  // .csp-sideNav is zero-height so it never pushes the sections below it
  // down (see globals.css) — but that also means plain CSS `position:
  // sticky` has no idea how tall the track actually is, and keeps it glued
  // to the same spot for the rest of the page's scroll range, running it
  // straight through the footer. Once there's no longer room between the
  // stick line and the bottom of .csp for the full track to fit, this pins
  // the nav at the exact spot it would have reached — same effect as a
  // sticky element finally releasing at the end of its container.
  useEffect(() => {
    const main = navRef.current?.closest(".csp");
    const inner = railRef.current;
    if (!main || !inner) return;

    const onScroll = () => {
      const mainRect = main.getBoundingClientRect();
      const spaceBelowStick = mainRect.bottom - STICK_TOP;
      if (spaceBelowStick < inner.offsetHeight) {
        setDockTop(main.offsetHeight - inner.offsetHeight);
      } else {
        setDockTop(null);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const total = SECTIONS.length;

  return (
    <div
      className={`csp-sideNav${dockTop !== null ? " is-docked" : ""}`}
      aria-hidden="true"
      ref={navRef}
      style={dockTop !== null ? { top: dockTop } : undefined}
    >
      <div className="csp-sideNav-inner csp-sideNav-rail" ref={railRef}>
        <div className="csp-sideNav-index">
          {String(active + 1).padStart(2, "0")}
          <span className="csp-sideNav-sep">|</span>
          {String(total).padStart(2, "0")}
        </div>
        <div className="csp-sideNav-label">{SECTIONS[active].label}</div>
        <div className="csp-sideNav-well" ref={wellRef} />
      </div>
    </div>
  );
}
