export default function WyMark({ className = "" }) {
  return (
    <svg className={`wy-mark ${className}`.trim()} viewBox="0 0 40 40" aria-hidden="true">
      <path
        fill="#715BE4"
        d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z"
      />
    </svg>
  );
}
