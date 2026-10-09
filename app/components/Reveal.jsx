"use client";

import useReveal from "../hooks/useReveal";

/** Wraps a section child in the `.rv` fade-up-on-scroll treatment. */
export default function Reveal({
  as: Tag = "div",
  className = "",
  replay = false,
  resetOnExit = false,
  rootMargin,
  threshold,
  children,
  ...rest
}) {
  const [ref, inView] = useReveal(replay, resetOnExit, rootMargin, threshold);
  return (
    <Tag ref={ref} className={`${className} rv${inView ? " in" : ""}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
