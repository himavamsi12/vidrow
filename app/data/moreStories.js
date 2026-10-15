// the "More deep dives" cards at the foot of every case study. Each card links
// to its own case study page; `moreStories("helium")` returns the other
// stories (never the page's own) for that page to show.
const CR = "/casestudy%20images/casestudy-recommendations";

const STORIES = [
  {
    key: "masai",
    href: "/case-study/masai",
    image: `${CR}/masai.png`,
    imageAlt: "Masai case study",
    logoType: "image",
    logoSrc: `${CR}/masai-logo.png`,
    logoAlt: "Masai",
    stat: "₹250+ Cr",
    statLabel: "revenue",
    desc: "Masai School reaches ₹250+ crore in revenue in Edtech.",
  },
  {
    key: "helium",
    href: "/case-study/helium",
    image: `${CR}/helium.png`,
    imageAlt: "Helium case study",
    logoType: "image",
    logoSrc: `${CR}/helium-logo.png`,
    logoAlt: "Helium",
    stat: "500",
    statLabel: "ACs a day",
    desc: "Helium sold 500 ACs a day within a month of launch, entirely from its website.",
  },
  {
    key: "vyapar",
    href: "/case-study/vyapar",
    image: `${CR}/vyapar.png`,
    imageAlt: "Vyapar case study",
    logoType: "image",
    logoSrc: "/partnership/vyapar.svg",
    logoAlt: "Vyapar",
    stat: "1 Cr+",
    statLabel: "businesses",
    desc: "Vyapar went from 1 Mn to 1 Cr+ businesses on brand marketing alone, with 400 Mn+ organic views.",
  },
  {
    key: "platinumrx",
    href: "/case-study/platinumrx",
    image: `${CR}/platinumx.png`,
    imageAlt: "PlatinumRx case study",
    logoType: "image",
    logoSrc: "/partnership/platinumRx.svg",
    logoAlt: "PlatinumRx",
    stat: "3x",
    statLabel: "in 3 months",
    desc: "PlatinumRx tripled in three months, June to August, at a controlled CAC.",
  },
  {
    key: "apnamart",
    href: "/case-study/apnamart",
    image: "/deep drives/apnamart deep drive.png",
    imageAlt: "ApnaMart case study",
    logoType: "image",
    logoSrc: "/partnership/apnamart.svg",
    logoAlt: "ApnaMart",
    stat: "2.5×",
    statLabel: "revenue in FY26",
    desc: "ApnaMart grew its revenue 2.5× in FY26 to around ₹500 crore.",
  },
];

export const moreStories = (self) => STORIES.filter((s) => s.key !== self).slice(0, 3);
