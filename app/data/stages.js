export const STAGES = [
  {
    title: "Get to PMF Fast",
    copy: "We design structured performance marketing experiments across product features, pricing hypotheses, and audience segments. Each campaign is a controlled test, generating precise signals on what converts, what retains, and what scales. We systematically analyse the data and help reach scalable audience cohorts fit for your product.",
    stat: "1 Month",
    quote:
      "A health tech startup that built its first 10,000-subscriber base before a single rupee was spent on ads.",
    client: "Jumpp",
  },
  {
    title: "Reach Fundraise Targets Months Early",
    copy: "We engineer a full-funnel marketing plan to achieve your next fundraise targets. We systematically cover every touchpoint of your customer journey. Performance marketing drives targeted acquisition. Strategic social proof establishes credibility. A high-trust celebrity association anchors brand legitimacy and positioning.\n\nWe make sure that even a new brand comes out with full category authority. Startups working with us are hitting their fundraise targets months ahead of projection.",
    stat: "4 Months",
    quote:
      "Selling 500 units a day within a month of launch, well ahead of what the plan allowed for.",
    client: "Helium",
  },
  {
    title: "Unlock all scaling levers",
    copy: "We systematically build and operate every high-conversion creative format (UGC, AI content, paid partnerships, influencer collaborations, and celebrity-led campaigns), each engineered precisely toward one outcome: conversions.\n\nCreative diversity feeds the algorithm. Fresh formats unlock new audience pools. Saturation becomes irrelevant. And your performance marketing stops hitting ceilings and starts compounding. Startups working with this framework have scaled their user acquisition up to 10X within three months.",
    stat: "−38% CAC",
    quote: "Acquisition cost cut by more than a third while revenue kept climbing month on month.",
    client: "Masai",
  },
  {
    title: "Build category Authority",
    copy: "We build brand and social campaigns rooted in a single strategic objective: owning the category. We identify the precise positioning that gives your brand the rightful claim to lead. Whether you are disrupting an incumbent-dominated space or pioneering an entirely new category, we make sure you become the reference point in the market.\n\nCategory leaders attract disproportionate media attention, top-tier talent and strategic partnerships, and raise the most capital.",
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
