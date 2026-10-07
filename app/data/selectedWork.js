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
  alt: `${title} \u2014 ${client}`,
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
      ["Pay for Cooling", "Helium Smart Air", "5.png", "/campaign/pay-for-cooling"],
      ["Bimaari par Bhari", "PlatinumRx", "2.png", "/campaign/bimaari-par-bhari"],
      ["Fayda Uthaiye", "Apnamart", "apnamart-1.png", "/campaign/fayda-uthaiye"],
      ["Business Banega Digital", "Vyapar", "vyapar.png", "/campaign/vyapar"],
      ["Khul ke Bolega", "Eloelo", "eloela.png"],
      ["Stressfree Buying", "Ivy Homes", "ivyhomes.png", "/campaign/stressfree-buying"],
    ],
  },
  {
    cat: "celebrity",
    label: "Celebrity Performance",
    layout: "wide",
    items: [
      ["Anupam Kher", "PlatinumRx - Smart Choice", "platinum-rx.png"],
      ["Jimy Shergil", "Ookla - Credit Socre Badhao", "ookla.png"],
      ["Mandar Chandwadkar", "Seekho - Kuchh naya Seekho", "seekho.png"],
      ["Naveen kasturia", "Seekho - Seekhega India", "sekkho.png"],
      ["Shailesh Lodha", "Physics Wallah - Ratta nahi Padhai", "physics wallah.png"],
      ["Anup Soni", "Platinum Rx - Aapki mehnat Ki Kamai", "platinumrx.png"],
    ],
  },
  {
    cat: "global",
    label: "Global Launch",
    layout: "wide",
    items: [
      ["Don\u2019t Just Dub!", "VisualDub", "visualdb.png", "/campaign/dont-just-dub"],
      ["Stop testing your team", "Gocodeo", "gacodeo.png", "/campaign/stop-testing-your-team"],
      ["Whatspp Solved", "Periscope", "periscope.png", "/campaign/whatspp-solved"],
      ["Just Fake it", "Drama", "drama.png", "/campaign/just-fake-it"],
      ["Not Just AI", "Kim.CC", "klim.cc.png", "/campaign/not-just-ai"],
      ["Maximise", "Maxim", "maxim.png", "/campaign/maximise"],
    ],
  },
  {
    cat: "content",
    label: "Branded Content",
    layout: "wide",
    items: [
      ["For Future Officers", "Testbook", "testbook.png", "/campaign/for-future-officers"],
      ["Vyapari ko salam", "Vyapar", "vyapar1.png", "/campaign/vyapari-ko-salam"],
      ["India ka internet", "Sharechat", "sharechat.png", "/campaign/india-ka-internet"],
      ["Porter hai Partner", "Porter", "porter.png", "/campaign/porter-hai-partner"],
      ["David vs Goliath", "Grexa", "grexa.png", "/campaign/david-vs-goliath"],
      ["Unlock Zindagi", "Glance", "glance.png", "/campaign/unlock-zindagi"],
    ],
  },
  {
    cat: "creatives",
    label: "Performance Creatives",
    layout: "tall",
    items: [
      ["Bachatt hai to Budget hai", "Bachatt", "performation creative.png"],
      ["Dump Title", "Groww", "groww.png"],
      ["Signup For the Test", "Masai", "masai.png"],
      ["Buy your first Substitute Medicine", "Platinum Rx", "platinumrx1.png"],
      ["Book now on website", "Helium", "helium.png"],
      ["Try Demo classes", "Curious Jr", "curiousjr.png"],
      ["Start Subscription", "Ookla", "ookla1.png"],
      ["Try First Transaction", "Pice", "pice1.png"],
    ],
  },
  {
    cat: "social",
    label: "Social Media",
    layout: "tall",
    items: [
      ["Book flights with Power", "Away", "away.png", "/campaign/book-flights-with-power"],
      ["Smart AC, Smart Customer", "Helium", "helium1.png", "/campaign/smart-ac-smart-customer"],
      ["Fayda Uthaao", "Apnamart", "apnamart1.png", "/campaign/fayda-uthaao"],
      ["Pickled in life", "The Little Farm Co", "the little farm.png", "/campaign/pickled-in-life"],
    ],
  },
].map((tab) => ({ ...tab, items: tab.items.map((it, i) => card(i, it)) }));
