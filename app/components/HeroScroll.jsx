"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

// the flat colours the pieces take once they start rising (index = piece)
const RISING_FILL = ["", "#F5FA5E", "", "#FFE94A", "#FBE556", "", "#FCF6B4", "#F7F97A"];

const easeInOut = (x) => -(Math.cos(Math.PI * Math.min(Math.max(x, 0), 1)) - 1) / 2;
const easeCubic = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

/**
 * Scroll-scrubbed hero curtain (desktop). The hero is pinned for a long
 * stretch of scroll; across it each tetris piece of the skyline rises up the
 * screen on its own delay, its body trailing off the bottom, until the
 * skyline has swept the whole hero away. Featured Work is held at the top of
 * the screen behind it and is revealed as the last piece leaves. A wheel or
 * swipe inside the stretch glides the page to the nearer end rather than
 * stopping part-way.
 */
export default function HeroScroll() {
  const lenis = useLenis();

  useEffect(() => {
    const hero = document.querySelector(".hx");
    const sky = document.querySelector(".hx-sky");
    const featured = document.getElementById("featured");
    const svgs = [...document.querySelectorAll(".hx-piece")];
    if (!hero || !sky || !svgs.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const off = () => reduce.matches || window.innerWidth < 901;
    const L = () => lenis;

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

    let raf = 0;
    let cur = -1;
    let target = 0;
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
      const vh = window.innerHeight;
      if (on && W === lw && vh === lh) return;
      lw = on ? W : 0;
      lh = on ? vh : 0;
      if (!on) {
        polys.forEach((g) => {
          g.style.display = "";
          g.setAttribute("points", g.dataset.t);
        });
        return;
      }
      const k = W / 2000;
      const sy = (y) => vh - (1250 - y) * k;
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
      });
    };

    const tint = (on) => {
      if (on === tinted) return;
      tinted = on;
      polys.forEach((g, i) => {
        if (RISING_FILL[i]) g.style.fill = on ? RISING_FILL[i] : "";
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

    const span = () => hero.offsetHeight - window.innerHeight;
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
        cur = -1;
        return;
      }
      layout(true);
      hold();
      target = read();
      if (cur < 0) cur = target;
      else cur += (target - cur) * 0.32;
      if (Math.abs(target - cur) < 5e-4) cur = target;
      draw(cur);
      if (cur !== target) raf = requestAnimationFrame(tick);
    };

    // gliding to the nearer end of the pinned stretch
    let lastY = window.scrollY;
    let dir = 1;
    let snapTimer = 0;
    let lastInput = 0;
    let gliding = false;

    const glideTo = (y, opts) => {
      const l = L();
      if (l && l.scrollTo) l.scrollTo(y, { force: true, ...opts });
      else window.scrollTo({ top: y, behavior: "smooth" });
    };

    const snap = () => {
      if (off() || gliding) return;
      const sp = span();
      const t = -hero.getBoundingClientRect().top;
      if (t <= 4 || t >= sp - 4) return;
      const top0 = hero.getBoundingClientRect().top + window.scrollY;
      const to = top0 + (dir > 0 ? sp : 0);
      const rem = Math.abs(to - window.scrollY);
      glideTo(to, { duration: 0.35 + (0.45 * rem) / sp, easing: (x) => 1 - Math.pow(1 - x, 3) });
    };

    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY) {
        if (Date.now() - lastInput > 500) dir = y > lastY ? 1 : -1;
        lastY = y;
      }
      if (Date.now() - lastInput > 500) {
        clearTimeout(snapTimer);
        snapTimer = setTimeout(snap, 160);
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const jump = (d) => {
      if (off() || gliding) return false;
      const sp = span();
      const t = -hero.getBoundingClientRect().top;
      if (sp < 2 || (d > 0 ? t >= sp - 4 || t < -4 : t <= 4 || t > sp + 4)) return false;
      const top0 = hero.getBoundingClientRect().top + window.scrollY;
      const to = top0 + (d > 0 ? sp : 0);
      const done = () => {
        gliding = false;
      };
      gliding = true;
      clearTimeout(snapTimer);
      glideTo(to, { duration: 0.9, easing: easeCubic, lock: true, onComplete: done });
      setTimeout(done, 1200);
      return true;
    };

    const onWheel = (e) => {
      lastInput = Date.now();
      if (e.deltaY) dir = e.deltaY > 0 ? 1 : -1;
      if (e.deltaY && jump(dir)) return;
      clearTimeout(snapTimer);
      snapTimer = setTimeout(snap, 90);
    };
    let touchY = 0;
    const onTouchStart = (e) => {
      lastInput = Date.now();
      touchY = e.touches[0].clientY;
    };
    const onTouchEnd = (e) => {
      lastInput = Date.now();
      const c = e.changedTouches[0];
      if (c && Math.abs(c.clientY - touchY) > 8) dir = c.clientY < touchY ? 1 : -1;
      if (c && Math.abs(c.clientY - touchY) > 8 && jump(dir)) return;
      clearTimeout(snapTimer);
      snapTimer = setTimeout(snap, 60);
    };

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      clearTimeout(snapTimer);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      svgs.forEach((s) => (s.style.transform = ""));
      if (featured) featured.style.transform = "";
      hero.classList.remove("hx--covered");
    };
  }, [lenis]);

  return null;
}
