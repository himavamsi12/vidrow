// the hero's tetris skylines as the scroll curtain draws them (see
// HeroScroll). Each piece is its own svg so it can rise on its own delay `d`,
// taking the flat colour `rise` (if any) as it sets off; the 6000s are the
// body that runs off the bottom of the screen, which HeroScroll resizes to
// the screen's height.

// desktop, on a 2000-wide canvas (viewBox "0 690 2000 560")
export const SKY_VIEWBOX = "0 690 2000 560";
export const SKY_PIECES = [
  { d: 0.12, fill: "var(--violet)", pts: "0,1147 228,1147 228,1033 336,1033 336,6000 0,6000" },
  { d: 0.05, fill: "var(--acid)", rise: "#F5FA5E", pts: "342,1033 456,1033 456,919 563,919 563,1033 792,1033 792,1141 678,1141 678,6000 342,6000" },
  { d: 0.05, fill: "var(--violet)", pts: "683,1147 797,1147 797,1033 905,1033 905,1147 1025,1147 1025,1033 1139,1033 1139,919 1360,919 1360,1027 1248,1027 1248,6000 683,6000" },
  { d: 0.05, fill: "#FFE94A", rise: "#FFE94A", pts: "911,919 1019,919 1019,1141 911,1141" },
  { d: 0.05, fill: "var(--acid)", rise: "#FBE556", pts: "1367,805 1589,805 1589,919 1703,919 1703,1027 1589,1027 1589,6000 1253,6000 1253,1033 1367,1033" },
  { d: 0, fill: "var(--violet)", pts: "1595,692 1703,692 1703,805 1930,805 1930,1033 2010,1033 2010,6000 1822,6000 1822,1027 1708,1027 1708,913 1595,913" },
  { d: 0.08, fill: "#F9FBA0", rise: "#FCF6B4", pts: "1595,1033 1817,1033 1817,6000 1595,6000" },
  { d: 0, fill: "var(--acid)", rise: "#F7F97A", pts: "1936,692 2010,692 2010,1027 1936,1027" },
];

// phones: their own, narrower skyline, traced from the mobile mock on a
// 505 x 404 canvas. Edges that meet the screen run a few units past it, so
// the paper-coloured seams only show between pieces, never along the bleed.
export const SKY_M_VIEWBOX = "0 0 505 404";
export const SKY_M_PIECES = [
  { d: 0.12, fill: "var(--violet)", pts: "-4,345 31,345 31,282 93,282 93,220 217,220 217,282 155,282 155,6000 -4,6000" },
  { d: 0.05, fill: "var(--acid)", rise: "#F5FA5E", pts: "155,282 217,282 217,158 341,158 341,220 403,220 403,282 341,282 341,6000 155,6000" },
  { d: 0.08, fill: "#FCFFAB", rise: "#FCF6B4", pts: "341,282 466,282 466,6000 341,6000" },
  { d: 0, fill: "var(--violet)", pts: "341,97 416,97 416,158 509,158 509,6000 466,6000 466,282 403,282 403,220 341,220" },
  { d: 0, fill: "var(--acid)", rise: "#F7F97A", pts: "416,-4 509,-4 509,158 416,158" },
];
