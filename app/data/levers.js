// Cell coordinates and fills are lifted straight from Cube.svg, so the
// assembled block is the artwork exactly — including the 4px daylight the
// file leaves between pieces.
export const CUBE_W = 404; // 4 x 4 of 100-unit cells, plus the seams
export const CUBE_PX = 280; // how wide the assembled block sits on screen

export const PIECES = [
  {
    lever: "Performance Creatives",
    copy: "Access Vidrow's high-velocity ads creative engine, trained on 1000Cr+ of ad spends, delivering the highest win rate across the industry.",
    cells: [
      [-1.4, -1.4, 100, 100, "#F5F25D"],
      [98.6, -1.4, 100, 100, "#F5F25D"],
      [-1.4, 98.6, 100, 100, "#FFE41C"],
      [98.6, 98.6, 100, 100, "#FEF7AD"],
    ],
  },
  {
    lever: "Brand Marketing",
    copy: "Create celebrity-led brand marketing campaigns, built for virality and conceptualised for standing out.",
    cells: [
      [201.2, -1.6, 100, 100, "#F5F25D"],
      [301.2, -1.6, 100, 100, "#F5F25D"],
      [201.2, 98.4, 100, 100, "#FFE41C"],
    ],
  },
  {
    lever: "Celebrity Performance Creatives",
    copy: "Unlock 200+ tested celebrity faces for conversion-led campaigns to 3X your user acquisition.",
    cells: [
      [302.0, 100.3, 100, 100, "#947AF0"],
      [202.0, 200.3, 100, 100, "#7253E1"],
      [302.0, 200.3, 100, 100, "#8B6FEE"],
    ],
  },
  {
    lever: "Social Media Marketing",
    copy: "Build your niche, go viral and introduce a layer of social media validation through Vidrow's social media retainers.",
    cells: [
      [-1.8, 200.9, 100, 100, "#7253E1"],
      [98.2, 200.9, 100, 100, "#947AF0"],
    ],
  },
  {
    lever: "Ads Account Management",
    copy: "Bring best practices in Google and Meta ads management with Vidrow's data and tech driven approach.",
    cells: [
      [-1.1, 301.7, 100, 100, "#F5F25D"],
      [98.9, 301.7, 100, 100, "#FEF7AD"],
    ],
  },
  {
    lever: "AI for Marketing",
    copy: "Plug and play with Vidrow's proprietary AI video ads tool, 'Double Down', built for scaling your winning ads at lower cost and faster TAT.",
    cells: [
      [201.1, 301.7, 100, 100, "#7253E1"],
      [301.1, 301.7, 100, 100, "#947AF0"],
    ],
  },
];
