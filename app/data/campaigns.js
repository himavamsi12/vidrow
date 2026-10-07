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
  "dont-just-dub": {
    title: "Don\u2019t Just Dub!",
    by: "VisualDub",
    about: ABOUT,
    frames: [
      video("94f6ce29c2968c1173c12c300dff400a", "Don\u2019t Just Dub! \u2014 VisualDub, film 1"),
      video("8124355290b768643da812671022beed", "Don\u2019t Just Dub! \u2014 VisualDub, film 2"),
      video("5bd02c3a7ae53729c030574fecfbef32", "Don\u2019t Just Dub! \u2014 VisualDub, film 3"),
      video("03709a4fd5e67950677a216ef324805b", "Don\u2019t Just Dub! \u2014 VisualDub, film 4"),
      video("5855d8d3892e44152e0df4e77a6fa47f", "Don\u2019t Just Dub! \u2014 VisualDub, film 5"),
      video("c180ee2f8b1949017e121c9d6db08353", "Don\u2019t Just Dub! \u2014 VisualDub, film 6"),
      video("b928117a094cf572cdcd8a97bb31e6aa", "Don\u2019t Just Dub! \u2014 VisualDub, film 7"),
      video("7d7670fa795e9c9b55981cc3beb81d46", "Don\u2019t Just Dub! \u2014 VisualDub, film 8"),
      video("6d13affe10d12db0f8b56e4cc7483536", "Don\u2019t Just Dub! \u2014 VisualDub, film 9"),
      video("2e7fc86428cb9466d0523671a37f2ec4", "Don\u2019t Just Dub! \u2014 VisualDub, film 10"),
      video("dc44bf8e719578e8ed1772c66a51e52d", "Don\u2019t Just Dub! \u2014 VisualDub, film 11"),
      video("c971c8572b030712374cfe12e02f2ea4", "Don\u2019t Just Dub! \u2014 VisualDub, film 12"),
      video("469c1ad832bc1c7343ef4d5b54f53ad5", "Don\u2019t Just Dub! \u2014 VisualDub, film 13"),
    ],
  },
  "just-fake-it": {
    title: "Just Fake it",
    by: "Drama",
    about: ABOUT,
    frames: [
      video("749ae13764daa82544648a618edbf168", "Just Fake it \u2014 Drama, film 1"),
      video("5d5344258125000e29e1acd9a6486939", "Just Fake it \u2014 Drama, film 2"),
      video("a0038a53e107363ca19b8c5705fc68de", "Just Fake it \u2014 Drama, film 3"),
      video("b40f53a83d3531d1cc28d9a87d7e34b5", "Just Fake it \u2014 Drama, film 4"),
      video("c0813173af097255a02abe7db752ecd5", "Just Fake it \u2014 Drama, film 5"),
    ],
  },
  "maximise": {
    title: "Maximise",
    by: "Maxim",
    about: ABOUT,
    frames: [
      video("f44de3f203d53b7e1bf91c93bff602df", "Maximise \u2014 Maxim, film 1"),
    ],
  },
  "not-just-ai": {
    title: "Not Just AI",
    by: "Kim.CC",
    about: ABOUT,
    frames: [
      video("e9f769e30abb3dd0f3b1c396da92fb7a", "Not Just AI \u2014 Kim.CC, film 1"),
    ],
  },
  "whatspp-solved": {
    title: "Whatspp Solved",
    by: "Periscope",
    about: ABOUT,
    frames: [
      video("d8a6d10220482c663f830a13c13d1feb", "Whatspp Solved \u2014 Periscope, film 1"),
    ],
  },
  "stop-testing-your-team": {
    title: "Stop testing your team",
    by: "Gocodeo",
    about: ABOUT,
    frames: [
      video("468bbe10614a1ab654d658c0bfe27cf8", "Stop testing your team \u2014 Gocodeo, film 1"),
    ],
  },
  "fayda-uthaao": {
    title: "Fayda Uthaao",
    by: "Apnamart",
    layout: "tall",
    about: ABOUT,
    frames: [
      video("4d3a295d434093fb8744e26fb36e3b66", "Fayda Uthaao \u2014 Apnamart, film 1"),
      video("b9bef7e9a05e8175bd43c6eddd74a664", "Fayda Uthaao \u2014 Apnamart, film 2"),
      video("64c2040320351e1a738835b69ae613d6", "Fayda Uthaao \u2014 Apnamart, film 3"),
      video("af988159fcf1a4735fcc37d7686f2f2d", "Fayda Uthaao \u2014 Apnamart, film 4"),
      video("e43b93aa9f90f9faf8992f181cc0ae87", "Fayda Uthaao \u2014 Apnamart, film 5"),
    ],
  },
  "smart-ac-smart-customer": {
    title: "Smart AC, Smart Customer",
    by: "Helium",
    layout: "tall",
    about: ABOUT,
    frames: [
      video("adc15feb64d00dac356f310912609945", "Smart AC, Smart Customer \u2014 Helium, film 1"),
      video("48c0a5373c29bec7f99f01f0ced0c193", "Smart AC, Smart Customer \u2014 Helium, film 2"),
      video("f32bd7904ee5d4a802c40e6cebbf4584", "Smart AC, Smart Customer \u2014 Helium, film 3"),
      video("67807f2c240d690a4b6cae9b48b0f672", "Smart AC, Smart Customer \u2014 Helium, film 4"),
      video("0e7c578ef6e6ac4b4891f84e9f69c6d7", "Smart AC, Smart Customer \u2014 Helium, film 5"),
    ],
  },
  "book-flights-with-power": {
    title: "Book flights with Power",
    by: "Away",
    layout: "tall",
    about: ABOUT,
    frames: [
      video("e3f03f08a008187943b20170bf16139f", "Book flights with Power \u2014 Away, film 1"),
      video("373a4711947b624836b9103e7269f1d3", "Book flights with Power \u2014 Away, film 2"),
      video("d4447351c3ae60b101dfb1bdbeb8420a", "Book flights with Power \u2014 Away, film 3"),
      video("d95e32d974e4e016c2e6df6705d6687e", "Book flights with Power \u2014 Away, film 4"),
      video("ab2e49fdf301543299b8d0e49c5d6611", "Book flights with Power \u2014 Away, film 5"),
    ],
  },
  "pickled-in-life": {
    title: "Pickled in life",
    by: "The Little Farm Co",
    layout: "tall",
    about: ABOUT,
    frames: [
      video("17921e1f678d1c94e891066aa4b04861", "Pickled in life \u2014 The Little Farm Co, film 1"),
      video("dd394e47578c240574a01e1d999805d9", "Pickled in life \u2014 The Little Farm Co, film 2"),
      video("c02d619eb544ea7484deb2498a442811", "Pickled in life \u2014 The Little Farm Co, film 3"),
      video("e8fd0547db7093525759ad7f5e3c3d4f", "Pickled in life \u2014 The Little Farm Co, film 4"),
      video("9e9ec53bb9c96d51cc834945b34d5a82", "Pickled in life \u2014 The Little Farm Co, film 5"),
    ],
  },
  "for-future-officers": {
    title: "For Future Officers",
    by: "Testbook",
    about: ABOUT,
    frames: [
      video("6e9ce1c6c56f63d48dfee48f61787c6a", "For Future Officers \u2014 Testbook, film 1"),
      video("e1f024f107d289bba91dbc8f694e0ff2", "For Future Officers \u2014 Testbook, film 2"),
      video("9a3d566d1dee558af9d8b7828c78302c", "For Future Officers \u2014 Testbook, film 3"),
      video("2ca5ffe2444508c2ff4896f6903bca71", "For Future Officers \u2014 Testbook, film 4"),
      video("dcee18be37878aeb590d58d6bf4c167c", "For Future Officers \u2014 Testbook, film 5"),
    ],
  },
  "unlock-zindagi": {
    title: "Unlock Zindagi",
    by: "Glance",
    about: ABOUT,
    frames: [
      video("131b67bc2d569de6e03970849bb97697", "Unlock Zindagi \u2014 Glance, film 1"),
      video("640557ec71063d6955a0a5af5e11cd8d", "Unlock Zindagi \u2014 Glance, film 2"),
    ],
  },
  "david-vs-goliath": {
    title: "David vs Goliath",
    by: "Grexa",
    about: ABOUT,
    frames: [
      video("f758f6a7038765d7117afae3f67e0d7b", "David vs Goliath \u2014 Grexa, film 1"),
      video("3acadc007c627cba04d541130fa488bf", "David vs Goliath \u2014 Grexa, film 2"),
      video("97c7ab0380bc1edfbc6653fc6043b2c0", "David vs Goliath \u2014 Grexa, film 3"),
      video("0e095db1dc5c42961aaed14e346254f8", "David vs Goliath \u2014 Grexa, film 4"),
      video("77a2a997bd070434e088e4b0fda2f790", "David vs Goliath \u2014 Grexa, film 5"),
      video("b9ef17e7ba6a69927d3454dc7f889a17", "David vs Goliath \u2014 Grexa, film 6"),
    ],
  },
  "porter-hai-partner": {
    title: "Porter hai Partner",
    by: "Porter",
    about: ABOUT,
    frames: [
      video("1b159aa19c5d8c64530134d434db1d16", "Porter hai Partner \u2014 Porter, film 1"),
      video("4d3dc720cc0bbfb6ca7a608c10200b89", "Porter hai Partner \u2014 Porter, film 2"),
      video("016ca3e8e71a86300f2f881e2d97e926", "Porter hai Partner \u2014 Porter, film 3"),
      video("0cac2f5e36ad92b67fa83b2aeec8127b", "Porter hai Partner \u2014 Porter, film 4"),
    ],
  },
  "india-ka-internet": {
    title: "India ka internet",
    by: "Sharechat",
    about: ABOUT,
    frames: [
      video("605ec6b16138510cfab5d25189f1a523", "India ka internet \u2014 Sharechat, film 1"),
      video("39b1757f700e0fdb67bc0775af66625e", "India ka internet \u2014 Sharechat, film 2"),
      video("a7731fa57b1deaff864468d1829e89c7", "India ka internet \u2014 Sharechat, film 3"),
    ],
  },
  "vyapari-ko-salam": {
    title: "Vyapari ko salam",
    by: "Vyapar",
    about: ABOUT,
    frames: [
      video("40993c3cc3b779c6badee38305ef7bca", "Vyapari ko salam \u2014 Vyapar, film 1"),
      video("69465cc384da1c7a6a259b40ff80b91d", "Vyapari ko salam \u2014 Vyapar, film 2"),
      video("7ba43a25ac04a549cd9dc5d24a618c4d", "Vyapari ko salam \u2014 Vyapar, film 3"),
      video("440166288a851690e221e9deb72a6428", "Vyapari ko salam \u2014 Vyapar, film 4"),
      video("74de7464cae6aeffe53df5637d155b9f", "Vyapari ko salam \u2014 Vyapar, film 5"),
      video("aa9c5074c01a2ccba6c86d6dfcfc091e", "Vyapari ko salam \u2014 Vyapar, film 6"),
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
