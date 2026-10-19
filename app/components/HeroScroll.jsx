"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

const easeInOut = (x) => -(Math.cos(Math.PI * Math.min(Math.max(x, 0), 1)) - 1) / 2;
// the glide sets off at full speed (no slow start) and eases into the end
const easeGlide = (x) => 1 - Math.pow(1 - x, 3);
// how long the curtain takes to play through once set off, in seconds
const GLIDE_S = 0.85;
const GLIDE_MIN_S = 0.3;
// phones play it slower: a swipe sets the whole thing off at once, and on a
// small screen the desktop pace read as a blink
const PHONE_SLOW = 1.3;

/**
 * Scroll-scrubbed hero curtain (desktop and phones alike, each with its own
 * skyline). The hero is pinned for a long
 * stretch of scroll; across it each tetris piece of the skyline rises up the
 * screen on its own delay, its body trailing off the bottom, until the
 * skyline has swept the whole hero away. Featured Work is held at the top of
 * the screen behind it and is revealed as the last piece leaves. The pieces
 * follow the page's scroll; any wheel or swipe inside the pinned stretch
 * glides the page right through it (down to Featured Work, or back up to the
 * top), so the curtain always plays to the end and never stops part-way.
 */
export default function HeroScroll() {
  const lenis = useLenis();
  const lenisRef = useRef(null);
  lenisRef.current = lenis;

  useEffect(() => {
    // desktop and phones draw different skylines; the curtain runs on
    // whichever is showing, and starts over on the other if the layout swaps
    const wide = window.matchMedia("(min-width: 901px)");
    let stop = run(wide.matches ? ".hx-sky" : ".hx-sky-m", lenisRef);
    const swap = () => {
      stop?.();
      stop = run(wide.matches ? ".hx-sky" : ".hx-sky-m", lenisRef);
    };
    wide.addEventListener("change", swap);
    return () => {
      wide.removeEventListener("change", swap);
      stop?.();
    };
  }, []);

  return null;
}

function run(skySel, lenisRef) {
  const hero = document.querySelector(".hx");
  const inner = hero?.querySelector(".hx-in");
  const sky = document.querySelector(skySel);
  const featured = document.getElementById("featured");
  const svgs = sky ? [...sky.querySelectorAll(".hx-piece")] : [];
  if (!hero || !inner || !sky || !svgs.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const off = () => reduce.matches;
  // the canvas the pieces are drawn on: its top edge and its width
  const [, vbY, vbW] = svgs[0].getAttribute("viewBox").split(" ").map(Number);

  const polys = svgs.map((s) => {
    const g = s.querySelector("polygon");
    if (!g.dataset.t) g.dataset.t = g.getAttribute("points");
    return g;
  });
  // each piece's top outline (the points that aren't on the bottom run)
  const tops = polys.map((g) => {
    const P = g.dataset.t.split(" ").map((q) => q.split(",").map(Number));
    const isBottom = P.map((q) => q[1] >= 6000);
    if (!isBottom.some(Boolean)) return P.slice(0, 2);
    const n = P.length;
    const last = isBottom.lastIndexOf(true);
    const first = isBottom.indexOf(true);
    const out = [];
    for (let m = (last + 1) % n; m !== first; m = (m + 1) % n) out.push(P[m]);
    return out;
  });
  // each body's left and right edge on the canvas (none for the pieces that
  // don't run off the bottom)
  const bodies = polys.map((g, i) =>
    /,6000/.test(g.dataset.t) ? [tops[i][0][0], tops[i][tops[i].length - 1][0]] : null
  );
  // the width of the gap from a body's edge to the next body that way (0 when
  // they meet, or when nothing sits close by)
  const gapTo = (i, x, d) => {
    let gap = Infinity;
    bodies.forEach((b, j) => {
      if (!b || j === i) return;
      const dx = d < 0 ? x - b[1] : b[0] - x;
      if (dx >= 0 && dx < gap) gap = dx;
    });
    return gap <= 20 ? gap : 0;
  };
  const NS = "http://www.w3.org/2000/svg";
  const backs = polys.map((g, i) => {
    if (!bodies[i]) return null;
    const b = document.createElementNS(NS, "polygon");
    b.setAttribute("class", "hx-back");
    g.before(b);
    return b;
  });

  let raf = 0;
  let lw = 0;
  let lh = 0;
  let covered = false;
  let tinted = false;
  let reach = 0; // how far below its top each piece's body has to run
  const topY = []; // each piece's top and bottom edge on screen at rest
  const botY = [];

  // sizes each piece's body to the screen and works out where it sits
  const layout = (on) => {
    const W = sky.clientWidth || window.innerWidth;
    const vh = inner.clientHeight || window.innerHeight;
    if (on && W === lw && vh === lh) return;
    lw = on ? W : 0;
    lh = on ? vh : 0;
    if (!on) {
      polys.forEach((g) => {
        g.style.display = "";
        g.setAttribute("points", g.dataset.t);
      });
      backs.forEach((b) => b?.removeAttribute("points"));
      return;
    }
    const k = W / vbW;
    // the skyline sits along the bottom of the pinned hero on desktop, and
    // under the copy on phones: measured, not assumed
    const skyTop = sky.getBoundingClientRect().top - inner.getBoundingClientRect().top;
    const sy = (y) => skyTop + (y - vbY) * k;
    let range = 0;
    tops.forEach((c, i) => {
      const ys = c.map((q) => q[1]);
      topY[i] = sy(Math.min(...ys));
      botY[i] = sy(Math.max(...ys));
      range = Math.max(range, botY[i] - topY[i]);
    });
    reach = vh * 1.75 + range + 6;
    const hu = reach / k;
    polys.forEach((g, i) => {
      const P = g.dataset.t;
      g.style.display = "";
      if (!/,6000/.test(P)) {
        g.setAttribute("points", P);
        return;
      }
      const c = tops[i];
      const pts = c.concat(c.slice().reverse().map((q) => [q[0], q[1] + hu]));
      g.setAttribute("points", pts.map((q) => q[0] + "," + Math.round(q[1])).join(" "));
      // the skyline leaves a small gap between neighbouring bodies; a paper
      // strip behind each body fills its half of the gap on either side, so
      // the gaps stay white as the pieces rise instead of showing the hero's
      // copy and Featured Work through them
      const back = backs[i];
      if (!back) return;
      const x0 = c[0][0];
      const x1 = c[c.length - 1][0];
      const y0 = Math.max(...c.map((q) => q[1]));
      // (each half reaches a hair past the middle, so the two halves overlap
      // instead of meeting on a part pixel that lets a faint line through)
      const gl = gapTo(i, x0, -1);
      const gr = gapTo(i, x1, 1);
      const l = gl ? x0 - gl / 2 - 1 : x0;
      const r = gr ? x1 + gr / 2 + 1 : x1;
      back.setAttribute("points", `${l},${y0} ${r},${y0} ${r},${Math.round(y0 + hu)} ${l},${Math.round(y0 + hu)}`);
    });
  };

  const tint = (on) => {
    if (on === tinted) return;
    tinted = on;
    svgs.forEach((s, i) => {
      if (s.dataset.rise) polys[i].style.fill = on ? s.dataset.rise : "";
    });
  };

  const draw = (p) => {
    let all = true;
    const travel = Math.max(...botY) + 3 + reach;
    svgs.forEach((s, i) => {
      const x = travel * easeInOut((p - +s.dataset.d) / 0.88);
      if (x < botY[i] + 3) all = false;
      s.style.transform = x > 0.05 ? `translate3d(0,${(-x).toFixed(2)}px,0)` : "";
    });
    tint(p > 0.005);
    const c = all && p > 0;
    if (c !== covered) {
      covered = c;
      hero.classList.toggle("hx--covered", c);
    }
  };

  const span = () => hero.offsetHeight - inner.offsetHeight;
  const read = () => {
    const sp = span();
    return sp < 2 ? 0 : Math.min(Math.max(-hero.getBoundingClientRect().top / sp, 0), 1);
  };
  // Featured Work waits at the top of the screen, behind the skyline, for
  // the last stretch of the pin, so the rising pieces uncover it in place
  const hold = () => {
    if (!featured) return;
    const sp = span();
    const t = -hero.getBoundingClientRect().top;
    featured.style.transform =
      !off() && t < sp && t > sp - window.innerHeight * 1.5
        ? `translate3d(0,${(t - sp).toFixed(1)}px,0)`
        : "";
  };

  const tick = () => {
    raf = 0;
    if (off()) {
      svgs.forEach((s) => (s.style.transform = ""));
      tint(false);
      layout(false);
      if (featured) featured.style.transform = "";
      if (covered) {
        covered = false;
        hero.classList.remove("hx--covered");
      }
      return;
    }
    layout(true);
    hold();
    draw(read());
  };

  // ── playing the curtain through ──
  // a wheel or swipe anywhere in the pinned stretch glides the page to its
  // far end in that direction, locked so a trackpad's momentum after even a
  // small swipe can't stop it part-way. If the user is still scrolling hard
  // when it lands (not just the tail of a swipe's momentum), the page
  // carries on past Featured Work's top instead of coming to rest there, so
  // a fast scroll never feels braked. Scrolling that stops part-way some
  // other way (keys, the scrollbar) is finished off in the direction it was
  // going
  let gliding = false;
  let dir = 1;
  let lastY = window.scrollY;
  let settle = 0;
  // recent wheel input, to tell a user still scrolling hard from a swipe's
  // dying momentum (whose deltas are tiny)
  let wheelLog = [];
  const pushing = (d) => {
    const now = performance.now();
    wheelLog = wheelLog.filter(([t]) => now - t < 160);
    const sum = wheelLog.reduce((a, [, dy]) => a + dy, 0);
    return d > 0 ? sum > 140 : sum < -140;
  };

  const pos = () => {
    const sp = span();
    const top0 = hero.getBoundingClientRect().top + window.scrollY;
    return { sp, top0, t: window.scrollY - top0 };
  };

  const glide = (d) => {
    if (off() || gliding) return false;
    const { sp, top0, t } = pos();
    if (sp < 2) return false;
    // down: from the top of the stretch up to just short of its end;
    // up: from inside the stretch (or just past it) back to the top
    if (d > 0 ? t < -4 || t >= sp - 4 : t <= 4 || t > sp + 4) return false;
    const to = top0 + (d > 0 ? sp : 0);
    const frac = Math.min(Math.abs(to - window.scrollY) / sp, 1);
    const done = () => {
      gliding = false;
      // still scrolling hard as it lands: keep going into the next section
      const l = lenisRef.current;
      if (d > 0 && l?.scrollTo && pushing(d)) {
        l.scrollTo(to + window.innerHeight * 0.35, { force: true });
      }
    };
    gliding = true;
    clearTimeout(settle);
    // set off by a hard scroll: a quicker glide at constant speed, so it
    // hands straight on to the carry-on above with no slow-down between;
    // a small scroll keeps the soft landing
    const hard = d > 0 && pushing(d);
    const l = lenisRef.current;
    if (l?.scrollTo) {
      l.scrollTo(to, {
        duration:
          (GLIDE_MIN_S + GLIDE_S * frac) * (hard ? 0.7 : 1) * (skySel === ".hx-sky-m" ? PHONE_SLOW : 1),
        easing: hard ? (x) => x : easeGlide,
        lock: true,
        force: true,
        onComplete: done,
      });
    } else {
      window.scrollTo({ top: to, behavior: "smooth" });
    }
    return true;
  };

  const onWheel = (e) => {
    if (!e.deltaY || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    wheelLog.push([performance.now(), e.deltaY]);
    dir = e.deltaY > 0 ? 1 : -1;
    glide(dir);
  };
  let touchY = 0;
  const onTouchStart = (e) => {
    touchY = e.touches[0].clientY;
  };
  const onTouchEnd = (e) => {
    const c = e.changedTouches[0];
    if (!c || Math.abs(c.clientY - touchY) < 8) return;
    dir = c.clientY < touchY ? 1 : -1;
    glide(dir);
  };
  // a phone scrolls natively, so a swipe that would play the curtain is
  // held from the very first move (or the page's own momentum fights the
  // glide), and so is every touch while it plays
  const onTouchMove = (e) => {
    if (off()) return;
    if (gliding) {
      if (e.cancelable) e.preventDefault();
      return;
    }
    const dy = touchY - e.touches[0].clientY;
    if (!dy) return;
    const d = dy > 0 ? 1 : -1;
    const { sp, t } = pos();
    if (sp < 2) return;
    const inStretch = d > 0 ? t >= -4 && t < sp - 4 : t > 4 && t <= sp + 4;
    if (!inStretch) return;
    if (e.cancelable) e.preventDefault();
    if (Math.abs(dy) >= 6) {
      dir = d;
      glide(d);
    }
  };

  const onScroll = () => {
    const y = window.scrollY;
    if (y !== lastY) {
      if (!gliding) dir = y > lastY ? 1 : -1;
      lastY = y;
    }
    // once the page has come to rest (glide done, or the user's own scroll
    // stopped), a curtain left part-way is finished off in the direction it
    // was going
    clearTimeout(settle);
    settle = setTimeout(() => {
      gliding = false;
      const { sp, t } = pos();
      if (t > 4 && t < sp - 4) glide(dir);
    }, 120);
    if (!raf) raf = requestAnimationFrame(tick);
  };

  tick();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  window.addEventListener("wheel", onWheel, { passive: true });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: false });
  window.addEventListener("touchend", onTouchEnd, { passive: true });
  return () => {
    clearTimeout(settle);
    if (raf) cancelAnimationFrame(raf);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("touchend", onTouchEnd);
    svgs.forEach((s) => (s.style.transform = ""));
    tint(false);
    layout(false);
    backs.forEach((b) => b?.remove());
    if (featured) featured.style.transform = "";
    hero.classList.remove("hx--covered");
  };
}
