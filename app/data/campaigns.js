// the campaign pages (/campaign/<slug>), opened from the Selected Work cards.
//
// TODO: every `about` is the same stand-in blurb the mock uses, and the frames
// are stand-in stills from /public/selected — swap in each campaign's own copy
// and frames as they arrive.
const ABOUT =
  "Running a business is hard enough. Managing bills, accounts and everyday operations shouldn\u2019t be. Vyapar helps small business owners amplify their day-to-day business management. Vidrow brought this idea to life through relatable storytelling, using Manoj Joshi to connect Vyapar with the real-world challenges of Indian business owners.";

const still = (file, alt) => ({ src: `/selected/${file}`, alt });

// a frame played from Cloudflare Stream: `id` is the video's id in its watch link
const video = (id, alt) => ({ video: id, alt });

export const CAMPAIGNS = {
  vyapar: {
    title: "Business Banega Digital",
    by: "Vyapar - Manoj Joshi",
    about: ABOUT,
    frames: [
      video("5892a5659d9d6b84b47781adc7664991", "Business Banega Digital \u2014 Vyapar, film 1"),
      video("3a1fe7a7c49a99b2257b49048fdfd7b7", "Business Banega Digital \u2014 Vyapar, film 2"),
      video("c5183e74e4233770bd96ec0b0ada5c0f", "Business Banega Digital \u2014 Vyapar, film 3"),
      video("8a869636f24364c7ecfe0370b2a5e04d", "Business Banega Digital \u2014 Vyapar, film 4"),
    ],
  },
  "bimaari-par-bhari": {
    title: "Bimaari par Bhari",
    by: "PlatinumRx - Anupam Kher",
    about: ABOUT,
    frames: [
      still("platinum-rx.png", "Anupam Kher seated in a dressing room"),
      still("2.png", "Anupam Kher beside a phone showing PlatinumRx savings"),
      still("platinumrtx.png", "Anupam Kher with the PlatinumRx app"),
    ],
  },
  "stressfree-buying": {
    title: "Stressfree Buying",
    by: "Ivy Homes",
    about: ABOUT,
    frames: [
      still("ivyhomes.png", "Two policemen in a new flat"),
      still("3.png", "A family talking through a renovation"),
      still("4.png", "An Ivy Homes agent"),
      still("ivyhomes.png", "Two policemen in a new flat"),
      still("3.png", "A family talking through a renovation"),
    ],
  },
  "pay-for-cooling": {
    title: "Pay for cooling",
    by: "Helium Smart",
    about: ABOUT,
    frames: Array.from({ length: 5 }, () => still("5.png", "A man gesturing in front of a Helium air conditioner")),
  },
  "fayda-uthaiye": {
    title: "Fayda Uthaiye",
    by: "Apnamart",
    about: ABOUT,
    frames: Array.from({ length: 5 }, () => still("6.png", "An Apnamart store assistant among the shelves")),
  },
};
