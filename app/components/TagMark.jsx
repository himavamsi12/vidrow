// the solid violet step that hangs off the top-right corner of every section
// tag, half tucked behind it. Each section's own `.xx-tagwrap .mark` rule
// places and sizes it.
export default function TagMark() {
  return (
    <svg className="mark mark--solid" viewBox="0 0 40 40" aria-hidden="true">
      <path fill="#715BE4" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
    </svg>
  );
}
