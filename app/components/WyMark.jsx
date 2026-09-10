const CELLS = [
  [0, 0],
  [1, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
];

export default function WyMark() {
  return (
    <span className="wy-mark" aria-hidden="true">
      {CELLS.map(([x, y], i) => (
        <i key={i} style={{ "--x": x, "--y": y }} />
      ))}
    </span>
  );
}
