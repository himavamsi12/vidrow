export const PR_FILTERS = [
  { cat: "all", label: "All" },
  { cat: "consumer", label: "Consumer Tech" },
  { cat: "biz", label: "Biz tech" },
  { cat: "ai", label: "AI/ SaaS" },
  { cat: "edtech", label: "Ed Tech" },
  { cat: "fintech", label: "Fintech" },
  { cat: "retail", label: "Retail/ D2C" },
  { cat: "prop", label: "Prop Tech" },
];

// the six funding stages printed along the hexagon's yellow band, in order
// round from the top edge
export const PR_STAGES = ["SEED", "SERIES A", "SERIES B", "SERIES C+", "MATURE", "OTHERS"];

// one bordered tile per logo. x/y are the tile centre's offset from the
// hexagon's centre and w/h its size, all in the 1440-wide design frame's
// units — measured off the reference layout.
// TODO: the industry tags are best guesses from each brand — swap in the
// real ones once you have them.
export const PR_NODES = [
  { cat: "prop", label: "Ivy Homes", logo: "/logos/logo1.png", x: -144, y: -387, w: 112, h: 56 },
  { cat: "consumer", label: "Helium", logo: "/logos/logo5.png", x: -18, y: -373, w: 91, h: 46 },
  { cat: "consumer", label: "Maxim", logo: "/logos/logo3.png", x: 123, y: -399, w: 125, h: 42 },
  { cat: "consumer", label: "Oright", logo: "/logos/logo4.png", x: 124, y: -345, w: 89, h: 45 },
  { cat: "biz", label: "Chhota Stock", logo: "/logos/logo2.png", x: -57, y: -312, w: 168, h: 56 },
  { cat: "ai", label: "Grexa", logo: "/logos/logo7.png", x: 95, y: -287, w: 110, h: 56 },
  { cat: "ai", label: "Crafto", logo: "/logos/logo13.png", x: -261, y: -296, w: 74, h: 73 },
  { cat: "fintech", label: "Groww", logo: "/logos/logo11.png", x: -223, y: -200, w: 110, h: 56 },
  { cat: "fintech", label: "Pice", logo: "/logos/logo6.png", x: -79, y: -222, w: 73, h: 37 },
  { cat: "ai", label: "Periskope", logo: "/logos/logo9.png", x: 39, y: -212, w: 134, h: 46 },
  { cat: "ai", label: "VisualDub", logo: "/logos/logo10.png", x: 1, y: -155, w: 135, h: 45 },
  { cat: "edtech", label: "PW Talk", logo: "/logos/logo12.png", x: -280, y: -125, w: 112, h: 55 },
  { cat: "fintech", label: "Aditya Birla Capital", logo: "/logos/logo14.png", x: -126, y: -88, w: 75, h: 75 },
  { cat: "retail", label: "Little Farm", logo: "/logos/logo8.png", x: 0, y: -90, w: 56, h: 56 },
  { cat: "fintech", label: "Sahamati", logo: "/logos/logo16.png", x: -261, y: -42, w: 167, h: 55 },
  { cat: "consumer", label: "PlatinumRx", logo: "/logos/logo18.png", x: 258, y: -202, w: 56, h: 56 },
  { cat: "biz", label: "Vahak", logo: "/logos/logo21.png", x: 180, y: -142, w: 56, h: 56 },
  { cat: "biz", label: "PagarBook", logo: "/logos/logo20.png", x: 269, y: -113, w: 56, h: 56 },
  { cat: "consumer", label: "Partner", logo: "/logos/logo19.png", x: 107, y: -54, w: 75, h: 75 },
  { cat: "consumer", label: "Lila", logo: "/logos/logo22.png", x: 226, y: -36, w: 112, h: 56 },
  { cat: "fintech", label: "Goodscore", logo: "/logos/logo23.png", x: 369, y: -52, w: 113, h: 56 },
  { cat: "biz", label: "Porter", logo: "/logos/logo15.png", x: -195, y: 73, w: 167, h: 56 },
  { cat: "fintech", label: "Sahamati", logo: "/logos/logo16.png", x: 339, y: 41, w: 167, h: 56 },
  { cat: "consumer", label: "Eloelo", logo: "/logos/logo27.png", x: 103, y: 69, w: 56, h: 56 },
  { cat: "biz", label: "Vyapar", logo: "/logos/logo24.png", x: 231, y: 128, w: 112, h: 56 },
  { cat: "edtech", label: "Seekho", logo: "/logos/logo26.png", x: 368, y: 156, w: 56, h: 56 },
  { cat: "fintech", label: "Jar", logo: "/logos/logo25.png", x: 242, y: 240, w: 112, h: 56 },
  { cat: "retail", label: "Apnamart", logo: "/logos/logo17.png", x: 0, y: 298, w: 152, h: 32 },
];
