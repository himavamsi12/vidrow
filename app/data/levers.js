// The assembled block is a 4x4 grid of 100-unit cells with an even seam
// between every cell, laid out (by shade) as:
//   Y  V  VL V
//   Y2 Y3 V  VL
//   V  V  Y2 V
//   V  VL Y  Y3
const SEAM = 6;
const Y = "#F7F97A";
const Y2 = "#FBE556";
const Y3 = "#FCF6B4";
const V = "#6F57D9";
const VL = "#8573E6";
const cell = (col, row, fill) => [col * (100 + SEAM), row * (100 + SEAM), 100, 100, fill];

export const CUBE_W = 4 * 100 + 3 * SEAM;
export const CUBE_PX = 280; // how wide the assembled block sits on screen

export const PIECES = [
  {
    lever: "Performance Creatives",
    copy: "Access Vidrow's high-velocity ads creative engine, trained on 1000Cr+ of ad spends, delivering the highest win rate across the industry.",
    cells: [cell(0, 0, Y), cell(0, 1, Y2), cell(1, 1, Y3)],
  },
  {
    lever: "Brand Marketing",
    copy: "Create celebrity-led brand marketing campaigns, built for virality and conceptualised for standing out.",
    cells: [cell(1, 0, V), cell(2, 0, VL)],
  },
  {
    lever: "Celebrity Performance Creatives",
    copy: "Unlock 200+ tested celebrity faces for conversion-led campaigns to 3X your user acquisition.",
    cells: [cell(3, 0, V), cell(2, 1, V), cell(3, 1, VL)],
  },
  {
    lever: "Social Media Marketing",
    copy: "Build your niche, go viral and introduce a layer of social media validation through Vidrow's social media retainers.",
    cells: [cell(0, 2, V), cell(1, 2, V), cell(0, 3, V), cell(1, 3, VL)],
  },
  {
    lever: "Ads Account Management",
    copy: "Bring best practices in Google and Meta ads management with Vidrow's data and tech driven approach.",
    cells: [cell(2, 2, Y2), cell(2, 3, Y), cell(3, 3, Y3)],
  },
  {
    lever: "AI for Marketing",
    copy: "Plug and play with Vidrow's proprietary AI video ads tool, 'Double Down', built for scaling your winning ads at lower cost and faster TAT.",
    cells: [cell(3, 2, V)],
  },
];
