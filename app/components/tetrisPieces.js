// the hero's tetris skyline, traced from the design mock on a 1550 x 433
// canvas. Each point is [x, y]; the curtain lifts the whole thing as one.
export const TET_W = 1550;
export const TET_H = 433;

export const TET_PIECES = [
  { fill: "var(--violet)", pts: [[0,353,1],[176,353,1],[176,265,1],[260,265,1],[260,433],[0,433]] },
  { fill: "var(--acid)", pts: [[264,265,1],[352,265,1],[352,177,1],[436,177,1],[436,265,1],[613,265,1],[613,349],[524,349],[524,433],[264,433]] },
  { fill: "var(--violet)", pts: [[528,433],[528,353],[617,353],[617,265,1],[701,265,1],[701,351],[793,351],[793,265,1],[882,265,1],[882,177,1],[1054,177,1],[1054,261],[966,261],[966,433]] },
  { fill: "#FCE862", pts: [[705,177],[790,177],[790,347],[705,347]] },
  { fill: "var(--acid)", pts: [[969,265,1],[1058,265,1],[1058,89,1],[1230,89,1],[1230,177],[1319,177],[1319,261],[1230,261],[1230,433],[969,433]] },
  { fill: "#FCFFAB", pts: [[1235,265],[1410,265],[1410,433],[1235,433]] },
  { fill: "var(--violet)", pts: [[1235,1,1],[1319,1,1],[1319,89,1],[1495,89,1],[1495,261],[1550,261],[1550,433],[1414,433],[1414,261],[1323,261],[1323,173],[1235,173]] },
  { fill: "var(--acid)", pts: [[1500,1,1],[1550,1,1],[1550,257],[1500,257]] },
];

// `travel` is how far the whole skyline rises by the end (t = 1). Pieces
// move up as rigid shapes, so the skyline keeps its exact outline the whole
// way; the points on the bottom edge stay put, below the screen, so each
// piece's body just keeps extending down to cover what it rises off.
// `base` is the canvas height, where the bottom edge sits.
// Over the last stretch of the rise the stepped tops ease up onto `flat` (the
// skyline's highest edge), so the curtain leaves as a straight bar rather than
// as the tetris outline.
export const tetPoints = (pts, dy = 0, t = 0, travel = 0, base = TET_H, flat = null) => {
  const m = flat === null ? 0 : Math.min(Math.max((t - 0.55) / 0.45, 0), 1);
  return pts
    .map(([x, y]) => {
      if (y >= base) return `${x},${y + dy + travel}`;
      const yy = y + (flat === null ? 0 : (flat - y) * m);
      return `${x},${yy + dy - travel * t}`;
    })
    .join(" ");
};

// the mobile hero's skyline, traced from the mobile mock on a 505 x 404
// canvas. Edges that meet the screen run a few units past the canvas, so the
// paper-coloured seam stroke only shows between pieces, never along the bleed.
export const TET_M_W = 505;
export const TET_M_H = 404;

export const TET_M_PIECES = [
  { fill: "var(--violet)", pts: [[-4,345],[31,345],[31,282],[93,282],[93,220],[217,220],[217,282],[155,282],[155,408],[-4,408]] },
  { fill: "var(--acid)", pts: [[155,282],[217,282],[217,158],[341,158],[341,220],[403,220],[403,282],[341,282],[341,408],[155,408]] },
  { fill: "#FCFFAB", pts: [[341,282],[466,282],[466,408],[341,408]] },
  { fill: "var(--violet)", pts: [[341,97],[416,97],[416,158],[509,158],[509,408],[466,408],[466,282],[403,282],[403,220],[341,220]] },
  { fill: "var(--acid)", pts: [[416,-4],[509,-4],[509,158],[416,158]] },
];
