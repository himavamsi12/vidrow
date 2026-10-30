"use client";

import { useEffect, useRef } from "react";

/** The foot of a case study page: three Deep Dives cards, a random three on
 *  every visit. Every candidate card is in the markup; until the page is in
 *  the browser the first three show, then a random three (never both
 *  ApnaMart stories, never both CuriousJr stories) take their place. */
export default function CsThree({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = [...el.children];
    const apna = (c) => c.classList.contains("cs-card-ap") || c.classList.contains("cs-card-ao");
    const cjr = (c) => c.classList.contains("cs-card-cu") || c.classList.contains("cs-card-cl");
    let pick;
    for (let tries = 0; tries < 30; tries++) {
      pick = [...cards].sort(() => Math.random() - 0.5).slice(0, 3);
      if (pick.filter(apna).length < 2 && pick.filter(cjr).length < 2) break;
    }
    cards.forEach((c) => c.classList.toggle("cs-pick", pick.includes(c)));
    pick.forEach((c, i) => (c.style.order = i));
    el.classList.add("is-picked");
  }, []);

  return (
    <div className="cs-three" ref={ref}>
      {children}
    </div>
  );
}
