export const STAGES = [
  {
    title: "Get To PMF Fast",
    copy: "We design structured performance marketing experiments across product features, pricing hypotheses, and audience segments. Each campaign is a controlled test, generating precise signals on what converts, what retains, and what scales. We systematically analyse the data and help reach scalable audience cohorts fit for your product.",
    stat: "1 Month",
    quote:
      "A health tech startup that built its first 10,000-subscriber base before a single rupee was spent on ads.",
    client: "Jumpp",
  },
  {
    title: "Reach Fundraise Targets Months Early",
    copy: "We engineer full-funnel marketing strategies to accelerate your next fundraise. Performance marketing drives targeted acquisition, social proof builds credibility, and strategic celebrity partnerships strengthen brand authority helping startups reach fundraise targets months ahead of projection.",
    stat: "4 Months",
    quote:
      "Selling 500 units a day within a month of launch, well ahead of what the plan allowed for.",
    client: "Helium",
  },
  {
    title: "Unlock All Scaling Levers",
    copy: "We build high-conversion creatives across UGC, AI content, influencers, paid partnerships, and celebrity campaigns\u2014each engineered for conversions. Creative diversity unlocks new audiences, keeps performance fresh, and helps acquisition compound. Startups have scaled user acquisition up to 10X in three months.",
    stat: "−38% CAC",
    quote: "Acquisition cost cut by more than a third while revenue kept climbing month on month.",
    client: "Masai",
  },
  {
    title: "Build Category Authority",
    copy: "We build brand and social campaigns with one strategic goal: owning the category. We define the positioning that makes your brand the market reference point\u2014whether disrupting an incumbent or creating a new space. Category leaders attract disproportionate media attention, top talent, strategic partnerships, and capital, creating lasting market authority.",
    stat: "3× recall",
    quote: "The awareness layer that carried the brand from Series B all the way to acquisition.",
    client: "Testbook",
  },
];

// one piece per stage, filling the 4x4 board from the bottom up into:
//   Y V V V
//   Y Y V V
//   V V Y V
//   V V Y Y
export const STAGE_PIECES = [
  { cells: [8, 9, 12, 13], acid: false },
  { cells: [10, 14, 15], acid: true },
  { cells: [0, 4, 5], acid: true },
  { cells: [1, 2, 3, 6, 7, 11], acid: false },
];

// per-cell shade once lit, so the board reads as a mosaic of tints rather
// than two flat colours — indexed like the board, row by row
export const CELL_SHADES = [
  "#F7F97A", "#6F57D9", "#8573E6", "#6F57D9",
  "#FBE556", "#FCF6B4", "#6F57D9", "#8573E6",
  "#6F57D9", "#6F57D9", "#FBE556", "#6F57D9",
  "#6F57D9", "#8573E6", "#F7F97A", "#FCF6B4",
];
