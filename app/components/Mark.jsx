export default function Mark({ className = "" }) {
  return (
    <span className={`mark ${className}`.trim()} aria-hidden="true">
      <i></i><i></i><i></i><i></i><i></i><i></i>
    </span>
  );
}
