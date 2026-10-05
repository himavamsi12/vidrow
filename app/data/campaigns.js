// the campaign pages (/campaign/<slug>), opened from the Selected Work cards.
//
// TODO: every `about` is the same stand-in blurb the mock uses, and the frames
// are stand-in stills from /public/selected — swap in each campaign's own copy
// and frames as they arrive.
const ABOUT =
  "Running a business is hard enough. Managing bills, accounts and everyday operations shouldn\u2019t be. Vyapar helps small business owners amplify their day-to-day business management. Vidrow brought this idea to life through relatable storytelling, using Manoj Joshi to connect Vyapar with the real-world challenges of Indian business owners.";

const still = (file, alt) => ({ src: `/selected/${file}`, alt });

export const CAMPAIGNS = {
  vyapar: {
    title: "Business Banega Digital",
    by: "Vyapar - Manoj Joshi",
    about: ABOUT,
    frames: [
      still("1.png", "A shop owner greets a customer while a photographer shoots the counter"),
      still("vyapar1.png", "Two men at a desk going through the day\u2019s accounts"),
      still("vyapar.png", "A shopkeeper shows the Vyapar app on his phone"),
      still("5.png", "A shopkeeper writing in his ledger"),
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
