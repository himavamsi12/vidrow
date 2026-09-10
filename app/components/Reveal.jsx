"use client";

import useReveal from "../hooks/useReveal";

/** Wraps a section child in the `.rv` fade-up-on-scroll treatment. */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const [ref, inView] = useReveal();
  return (
    <Tag ref={ref} className={`${className} rv${inView ? " in" : ""}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
