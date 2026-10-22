// the yellow tetris corner on each card: a grid of w x h units (one unit is a
// fixed share of the card's width, anchored bottom-right) and the filled
// [col, row] cells in it. Six shapes, cycled across the cards.
const S = [
  { w: 2, h: 2, cells: [[1, 0], [0, 1], [1, 1]] },
  { w: 2, h: 3, cells: [[0, 0], [1, 0], [1, 1], [1, 2]] },
  { w: 2, h: 3, cells: [[0, 0], [0, 1], [1, 1], [1, 2]] },
  { w: 3, h: 2, cells: [[0, 0], [1, 0], [2, 0], [0, 1], [2, 1]] },
  { w: 3, h: 2, cells: [[0, 0], [1, 1], [2, 1]] },
  { w: 2, h: 3, cells: [[0, 0], [1, 1], [0, 2], [1, 2]] },
];

const P = "/selected/";
// [title, client, image (null = placeholder), page it links to (optional)]
const card = (i, [title, client, img, href]) => ({
  href,
  title,
  client,
  img: img ? P + encodeURIComponent(img) : null,
  alt: `${title} - ${client}`,
  corner: S[i % S.length],
});

// one tab per service, each with its own cards. "wide" tabs show three
// landscape stills across; "tall" ones show four portrait reels.
//
// TODO: the corner shapes beyond the first tab are approximations.
export const SW_TABS = [
  {
    cat: "brand",
    label: "Brand Marketing",
    layout: "wide",
    items: [
      ["Pay for Cooling", "Helium Smart Air", "5.webp", "/campaign/helium"],
      ["Bimaari par Bhari", "PlatinumRx", "2.webp", "/campaign/platinumrx"],
      ["Fayda Uthaiye", "ApnaMart", "apnamart-1.webp", "/campaign/apnamart"],
      ["Business Banega Digital", "Vyapar", "vyapar.webp", "/campaign/vyapar"],
      ["Khul ke Bolega", "Eloelo", "eloela.webp", "/campaign/eloelo"],
      ["Stress-Free Buying", "Ivy Homes", "ivyhomes.webp", "/campaign/ivyhomes"],
    ],
  },
  {
    cat: "celebrity",
    label: "Celebrity Performance",
    layout: "wide",
    items: [
      ["Anupam Kher", "PlatinumRx - Smart Choice", "platinum-rx.webp", "/campaign/platinumrx-anupam-kher"],
      ["Jimmy Shergill", "Oolka - Credit Score Badhao", "ookla.webp", "/campaign/oolka-jimmy-shergill"],
      ["Mandar Chandwadkar", "Seekho - Kuchh naya Seekho", "seekho.webp", "/campaign/seekho-mandar-chandwadkar"],
      ["Naveen Kasturia", "Seekho - Seekhega India", "sekkho.webp", "/campaign/seekho-naveen-kasturia"],
      ["Shailesh Lodha", "PhysicsWallah - Ratta nahi Padhai", "physics wallah.webp", "/campaign/curiousjr-shailesh-lodha"],
      ["Anup Soni", "PlatinumRx - Aapki Mehnat Ki Kamai", "platinumrx.webp", "/campaign/platinumrx-anup-soni"],
    ],
  },
  {
    cat: "global",
    label: "Global Launch",
    layout: "wide",
    items: [
      ["Don\u2019t Just Dub!", "NeuralGarage", "visualdb.webp", "/campaign/dont-just-dub"],
      ["Stop testing your team", "GoCodeo", "gacodeo.webp", "/campaign/stop-testing-your-team"],
      ["WhatsApp Solved", "Periskope", "periscope.webp", "/campaign/whatsapp-solved"],
      ["Just Fake It", "DRAMA", "drama.webp", "/campaign/just-fake-it"],
      ["Not Just AI", "Kim.cc", "klim.cc.webp", "/campaign/not-just-ai"],
      ["Maximise", "Maxim", "maxim.webp", "/campaign/maximise"],
    ],
  },
  {
    cat: "content",
    label: "Branded Content",
    layout: "wide",
    items: [
      ["For Future Officers", "Testbook", "testbook.webp", "/campaign/for-future-officers"],
      ["Vyapari ko salam", "Vyapar", "vyapar1.webp", "/campaign/vyapari-ko-salam"],
      ["India ka internet", "ShareChat", "sharechat.webp", "/campaign/india-ka-internet"],
      ["Porter hai Partner", "Porter", "porter.webp", "/campaign/porter-hai-partner"],
      ["David vs Goliath", "Grexa", "grexa.webp", "/campaign/david-vs-goliath"],
      ["Unlock Zindagi", "Glance", "glance.webp", "/campaign/unlock-zindagi"],
    ],
  },
  {
    cat: "creatives",
    label: "Performance Creatives",
    layout: "tall",
    items: [
      ["Bachatt hai to Budget hai", "Bachatt", "performation creative.webp", "/campaign/bachatt-brandformance"],
      ["Easiest App for Investment", "Groww", "groww.webp", "/campaign/groww"],
      ["Course Explainers", "Masai", "masai.webp", "/campaign/masai-performance-ads"],
      ["Medicine Price Explainers", "PlatinumRx", "platinumrx1.webp", "/campaign/platinumrx-performance-ads"],
      ["Right-Sized AC", "Helium", "helium.webp", "/campaign/helium-performance-ads"],
      ["Concept-Led Learning", "CuriousJr", "curiousjr.webp", "/campaign/curiousjr-performance-ads"],
      ["AI Credit Expert", "Oolka", "ookla1.webp", "/campaign/oolka-performance-ads"],
      ["Everyday Money Tools", "Pice", "pice1.webp", "/campaign/pice-performance-ads"],
    ],
  },
  {
    cat: "social",
    label: "Social Media",
    layout: "tall",
    items: [
      ["Book flights with Power", "Away", "away.webp", "/campaign/book-flights-with-power"],
      ["Smart AC, Smart Customer", "Helium", "helium1.webp", "/campaign/smart-ac-smart-customer"],
      ["Fayda Uthaao", "ApnaMart", "apnamart1.webp", "/campaign/fayda-uthaao"],
      ["Pickled in life", "The Little Farm Co", "the little farm.webp", "/campaign/pickled-in-life"],
    ],
  },
].map((tab) => ({ ...tab, items: tab.items.map((it, i) => card(i, it)) }));
