export const SW_FILTERS = [
  { cat: "performance", label: "Performance" },
  { cat: "brand", label: "Brand" },
  { cat: "celebrity", label: "Celebrity" },
  { cat: "social", label: "Social" },
  { cat: "adops", label: "Adops" },
  { cat: "ai", label: "AI" },
];

// TODO: the category tags beyond "performance" are placeholders guessed from
// each shot — swap in the real ones once you have them.
export const SW_ITEMS = [
  {
    cats: ["performance", "brand"],
    img: "/selected/1.png",
    alt: "Vyapar — on-set shoot with a shop owner",
    title: "Vyapar Store Campaign",
    client: "Vyapar",
    logo: "/logos/vyapar.png",
  },
  {
    cats: ["performance", "celebrity"],
    img: "/selected/platinumrtx.png",
    alt: "PlatinumRx — save up to 60% on medicines",
    title: "Save Up To 60%",
    client: "PlatinumRx",
    logo: "/selected/logo-platinumrx.png",
    logoScale: 1.6,
  },
  {
    cats: ["performance", "social"],
    img: "/selected/3.png",
    alt: "Ivy Homes — walking a family through a renovation",
    title: "Ivy Homes Renovation Story",
    client: "Ivy Homes",
    logo: "/logos/ivy-homes.png",
  },
  {
    cats: ["performance", "adops"],
    img: "/selected/4.png",
    alt: "Ivy Homes — meet the team",
    title: "Meet the Ivy Homes Team",
    client: "Ivy Homes",
    logo: "/logos/ivy-homes.png",
  },
  {
    cats: ["performance", "brand", "ai"],
    img: "/selected/5.png",
    alt: "Helium Smart Air — in the living room",
    title: "Helium Smart Air",
    client: "Helium",
    logo: "/selected/logo-helium.png",
  },
  {
    cats: ["performance", "social"],
    img: "/selected/6.png",
    pos: "center top",
    alt: "Vyapar — a shopkeeper in his store",
    title: "Vyapar Shop Owner Story",
    client: "Vyapar",
    logo: "/selected/logo-apnamart.png",
  },
];
