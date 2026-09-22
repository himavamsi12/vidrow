"use client";

import { useEffect, useMemo, useRef } from "react";
import Mark from "./Mark";
import { CUBE_PX, CUBE_W, PIECES } from "../data/levers";

function seg(x, a, b) {
  return Math.min(1, Math.max(0, (x - a) / (b - a)));
}
function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function Levers() {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const cubesRef = useRef(null);
  const sectionRef = useRef(null);
  const aRef = useRef(null);
  const bRef = useRef(null)
  const hyRef = useRef(null);
  const eyebrowRef = useRef(null);
  const midRef = useRef(null);
  const colRefs = useRef([]);
  const slotRefs = useRef([]);
  const cellRefs = useRef([]);

  // derive per-piece bounds and a flat cell list, same shape the original script built at runtime
  const { pieceMeta, cells } = useMemo(() => {
    const pieceMeta = PIECES.map((pc) => {
      const xs = pc.cells.map((c) => c[0]);
      const ys = pc.cells.map((c) => c[1]);
      const minX = Math.min(...xs);
      const minY = Math.min(...ys);
      const w = Math.max(...pc.cells.map((c) => c[0] + c[2])) - minX;
      const h = Math.max(...pc.cells.map((c) => c[1] + c[3])) - minY;
      return { minX, minY, w, h };
    });
    const cells = [];
    PIECES.forEach((pc, pi) => {
      pc.cells.forEach((c) => cells.push({ pi, x: c[0], y: c[1], w: c[2], h: c[3], fill: c[4] }));
    });
    return { pieceMeta, cells };
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const levTrack = trackRef.current;
    const levStage = stageRef.current;
    const levA = aRef.current;
    const levB = bRef.current;
    const levHy = hyRef.current;
    const levEyebrow = eyebrowRef.current;
    const levMid = midRef.current;
    const levCols = colRefs.current;
    const levSlots = slotRefs.current;
    if (sectionRef.current) sectionRef.current.classList.add("js-lev");

    let L = null;

    function measureLevers() {
      levA.style.transform = levB.style.transform = levHy.style.transform = "";
      levMid.style.transform = "";
      levCols.forEach((c) => {
        c.style.transform = "";
      });

      const sr = levStage.getBoundingClientRect();
      const split = window.innerWidth >= 900;
      const aR = levA.getBoundingClientRect();
      const bR = levB.getBoundingClientRect();
      const hR = levHy.getBoundingClientRect();
      // the size each piece settles at in its column: a touch smaller on
      // mobile, where the three columns are narrow and the pieces were
      // crowding their own labels
      const ex = split ? 80 / 200 : 62 / 200;
      const ey = ex;

      [[0, 3], [3, 6]].forEach((rng) => {
        let tallest = 0;
        for (let i = rng[0]; i < rng[1]; i++) tallest = Math.max(tallest, pieceMeta[i].h);
        for (let i = rng[0]; i < rng[1]; i++) levSlots[i].style.height = tallest * ey + "px";
      });
      // each slot is exactly as wide as its settled piece, so a column that
      // centres or right-aligns its slot (the mobile ring layout) lands the
      // piece centred / flush right too, since pieces fly to the slot's left
      pieceMeta.forEach((m, i) => {
        levSlots[i].style.width = m.w * ex + "px";
      });
      const sR = levSlots[0].getBoundingClientRect();

      const fit = (sr.width * 0.94 - aR.width - bR.width) / (1.18 * CUBE_W);
      const kx = split
        ? Math.max(ex * 1.2, Math.min(CUBE_PX / CUBE_W, fit))
        : Math.max(ex * 1.15, Math.min(CUBE_PX / CUBE_W, sr.width / 760));
      const ky = kx;

      const gap = CUBE_W * kx * 1.18;
      const Sx = sr.width / 2;
      let head = null;
      let midOffset = 0;
      let cx;
      let cy;

      if (split) {
        const total = aR.width + gap + bR.width;
        const left = Sx - total / 2;
        cx = left + aR.width + gap / 2;
        cy = aR.top - sr.top + aR.height / 2;
        head = {
          a: left + aR.width / 2 - (aR.left - sr.left + aR.width / 2),
          b: left + aR.width + gap + bR.width / 2 - (bR.left - sr.left + bR.width / 2),
          hy: cx - (hR.left - sr.left + hR.width / 2),
        };
      } else {
        // on mobile the cube + heading assemble together as one centered
        // block (cube on top, heading right under it, like the reference).
        // lev-mid stays in its natural in-flow spot between the two card
        // rows the whole time — only its start position is faked with a
        // transform, so once settled there's no leftover reserved gap
        const midR = levMid.getBoundingClientRect();
        const midTop = midR.top - sr.top;
        const midGap = 24;
        const cubeH = CUBE_W * kx;
        const total = cubeH + midGap + midR.height;

        cx = Sx;
        cy = sr.height / 2 - total / 2 + cubeH / 2;

        const startMidTop = cy + cubeH / 2 + midGap;
        midOffset = startMidTop - midTop;
      }

      const ox = cx - (CUBE_W * kx) / 2;
      const oy = cy - (CUBE_W * ky) / 2;

      L = {
        split,
        kx,
        ky,
        ex,
        ey,
        head,
        midOffset,
        anchors: PIECES.map((pc, i) => {
          const slot = levSlots[i].getBoundingClientRect();
          return {
            from: [ox + pieceMeta[i].minX * kx, oy + pieceMeta[i].minY * ky],
            to: [slot.left - sr.left, slot.top - sr.top + (slot.height - pieceMeta[i].h * ey)],
          };
        }),
        cells: cells.map((c, idx) => ({
          el: cellRefs.current[idx],
          pi: c.pi,
          dx: c.x - pieceMeta[c.pi].minX,
          dy: c.y - pieceMeta[c.pi].minY,
        })),
      };
    }

    function renderLevers(p) {
      if (!L) return;

      const hj = easeInOut(seg(p, 0.06, 0.8));
      if (L.split) {
        levA.style.transform = "translateX(" + L.head.a * (1 - hj) + "px)";
        levB.style.transform = "translateX(" + L.head.b * (1 - hj) + "px)";
        levHy.style.transform = "translateX(" + L.head.hy * (1 - hj) + "px)";
        levHy.style.opacity = seg(hj, 0.62, 1);
      } else {
        levMid.style.transform = "translateY(" + L.midOffset * (1 - hj) + "px)";
      }

      const an = PIECES.map((pc, i) => {
        const t = seg(p, 0.05 + i * 0.085, 0.46 + i * 0.085);
        const tx = easeInOut(seg(t, 0, 0.6));
        const ty = easeInOut(seg(t, 0.5, 1));
        const e = easeInOut(t);
        const a = L.anchors[i];
        return {
          x: lerp(a.from[0], a.to[0], tx),
          y: lerp(a.from[1], a.to[1], ty),
          sx: lerp(L.kx, L.ex, e),
          sy: lerp(L.ky, L.ey, e),
        };
      });

      L.cells.forEach((c) => {
        const a = an[c.pi];
        if (!c.el) return;
        c.el.style.transform =
          "translate(" + (a.x + c.dx * a.sx) + "px," + (a.y + c.dy * a.sy) + "px) scale(" +
          a.sx + "," + a.sy + ")";
      });

      levEyebrow.style.opacity = easeOut(seg(p, 0.26, 0.52));
      levCols.forEach((col, i) => {
        const t = easeOut(seg(p, 0.24 + i * 0.085, 0.46 + i * 0.085));
        col.style.opacity = t;
        col.style.transform = "translateY(" + (1 - t) * 14 + "px)";
      });
    }

    let levTicking = false;
    let lastProgress = null;
    function onLevScroll() {
      if (levTicking) return;
      levTicking = true;
      requestAnimationFrame(() => {
        levTicking = false;
        if (!levTrack.classList.contains("scroll-on")) return;
        const r = levTrack.getBoundingClientRect();
        const span = r.height - window.innerHeight;
        const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 1;
        // progress clamps to 0/1 whenever the track is off-screen, so this
        // skips re-writing every piece's styles on each frame elsewhere
        if (p === lastProgress) return;
        lastProgress = p;
        renderLevers(p);
      });
    }

    function setupLevers() {
      // the cube-forming scroll animation isn't desktop-only — the same
      // rig (measureLevers/renderLevers) already supports a single-column
      // "not split" mode for the heading, so mobile gets the identical
      // scroll-driven piece assembly, just flying into the 2-column card
      // grid instead of the two 3-up desktop rows
      const scrolls = !reduce;
      levTrack.classList.toggle("scroll-on", scrolls);
      measureLevers();
      lastProgress = null;
      if (scrolls) onLevScroll();
      else renderLevers(1);
    }

    setupLevers();
    window.addEventListener("scroll", onLevScroll, { passive: true });
    window.addEventListener("resize", setupLevers);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setupLevers);

    return () => {
      window.removeEventListener("scroll", onLevScroll);
      window.removeEventListener("resize", setupLevers);
    };
  }, [cells, pieceMeta]);

  const topPieces = PIECES.slice(0, 3);
  const botPieces = PIECES.slice(3);

  const Col = ({ pc, index }) => (
    <div
      className="lev-col"
      ref={(el) => {
        colRefs.current[index] = el;
      }}
    >
      <span
        className="lev-slot"
        aria-hidden="true"
        ref={(el) => {
          slotRefs.current[index] = el;
        }}
      />
      <h3>{pc.lever}</h3>
      <p>{pc.copy}</p>
    </div>
  );

  return (
    <section className="lev" id="levers" ref={sectionRef}>
      <div className="lev-track" id="levTrack" ref={trackRef}>
        <div className="lev-stage" id="levStage" ref={stageRef}>
          <div className="lev-row" id="levRowTop">
            {topPieces.map((pc, i) => (
              <Col pc={pc} index={i} key={pc.lever} />
            ))}
          </div>
          <div className="lev-mid" ref={midRef}>
            <div className="lev-eyebrow" ref={eyebrowRef}>
              <span className="lev-eyebrow-t">
                The levers
                <Mark />
              </span>
            </div>
            <h2 className="lev-h">
              <span className="lev-a" ref={aRef}>
                Unlock high
              </span>
              <span className="lev-hy" ref={hyRef}>
                -
              </span>
              <span className="lev-b" ref={bRef}>
                velocity growth.
              </span>
            </h2>
          </div>
          <div className="lev-row" id="levRowBot">
            {botPieces.map((pc, i) => (
              <Col pc={pc} index={i + 3} key={pc.lever} />
            ))}
          </div>
          <div className="lev-cubes" ref={cubesRef} aria-hidden="true">
            {cells.map((c, i) => (
              <span
                key={i}
                className="lev-cell"
                ref={(el) => {
                  cellRefs.current[i] = el;
                }}
                style={{ width: c.w + "px", height: c.h + "px", background: c.fill }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
