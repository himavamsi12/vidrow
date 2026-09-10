// Cell coordinates and fills are lifted straight from Cube.svg, so the
// assembled block is the artwork exactly — including the 4px daylight the
// file leaves between pieces.
export const CUBE_W = 404; // 4 x 4 of 100-unit cells, plus the seams
export const CUBE_PX = 280; // how wide the assembled block sits on screen

export const PIECES = [
  {
    lever: "Performance",
    copy: "Scientific media buying across Meta, Google & niche networks.",
    cells: [
      [-1.4, -1.4, 100, 100, "#F5F25D"],
      [98.6, -1.4, 100, 100, "#F5F25D"],
      [-1.4, 98.6, 100, 100, "#FFE41C"],
      [98.6, 98.6, 100, 100, "#FEF7AD"],
    ],
  },
  {
    lever: "Brand",
    copy: "Developing narratives that stick in the modern consumer’s mind.",
    cells: [
      [201.2, -1.6, 100, 100, "#F5F25D"],
      [301.2, -1.6, 100, 100, "#F5F25D"],
      [201.2, 98.4, 100, 100, "#FFE41C"],
    ],
  },
  {
    lever: "Celebrity",
    copy: "High-impact influencer and celebrity collaborations that convert.",
    cells: [
      [302.0, 100.3, 100, 100, "#947AF0"],
      [202.0, 200.3, 100, 100, "#7253E1"],
      [302.0, 200.3, 100, 100, "#8B6FEE"],
    ],
  },
  {
    lever: "Social",
    copy: "Organic & community growth strategies for sustained engagement.",
    cells: [
      [-1.8, 200.9, 100, 100, "#7253E1"],
      [98.2, 200.9, 100, 100, "#947AF0"],
    ],
  },
  {
    lever: "AdOps",
    copy: "Full-stack technical measurement and funnel optimization.",
    cells: [
      [-1.1, 301.7, 100, 100, "#F5F25D"],
      [98.9, 301.7, 100, 100, "#FEF7AD"],
    ],
  },
  {
    lever: "AI",
    copy: "Automated creative testing and predictive growth modeling.",
    cells: [
      [201.1, 301.7, 100, 100, "#7253E1"],
      [301.1, 301.7, 100, 100, "#947AF0"],
    ],
  },
];
