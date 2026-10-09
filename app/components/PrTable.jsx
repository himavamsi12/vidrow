"use client";

import useReveal from "../hooks/useReveal";

/** The partnership logo table: once it scrolls into view, each stage's tiles
 *  drop in and fade up in turn (see .pr-table.in in globals.css). */
export default function PrTable({ children }) {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} className={`pr-table${inView ? " in" : ""}`}>
      {children}
    </div>
  );
}
