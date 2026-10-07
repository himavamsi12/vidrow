// the funding stages, in the legend's order
export const PR_STAGES = [
  { key: "seed", label: "Seed" },
  { key: "a", label: "Series A" },
  { key: "b", label: "Series B" },
  { key: "c", label: "Series C+" },
];

// each logo file's viewBox [w, h], for sizing the mobile tiles to an even visual weight
const DIMS = {
  "BACHAT.svg": [102, 30],
  "BESHARAM.svg": [100, 37],
  "EloElo logo.svg": [94, 49],
  "Group 1686553684.svg": [99, 28],
  "MASAI.svg": [92, 24],
  "OOLKA.svg": [88, 32],
  "VAHAK.svg": [55, 55],
  "apnamart.svg": [110, 11],
  "atomberg.svg": [109, 24],
  "away.svg": [84, 24],
  "chhota stock.svg": [98, 26],
  "emergent.svg": [94, 20],
  "glance.svg": [83, 30],
  "gocredit.svg": [91, 20],
  "goodscore.svg": [99, 16],
  "grexa.png": [90, 28],
  "groww.svg": [106, 29],
  "helium.svg": [105, 26],
  "housie.svg": [85, 22],
  "inshorts.svg": [95, 21],
  "ivy homes.svg": [104, 22],
  "jar.svg": [71, 28],
  "khare.svg": [82, 24],
  "kim.svg": [82, 28],
  "kukufm.svg": [85, 24],
  "kutumb.svg": [93, 20],
  "littlefarm.svg": [51, 50],
  "llia.svg": [54, 24],
  "material depot.svg": [94, 24],
  "maxim.svg": [91, 20],
  "neuralgarage.svg": [107, 39],
  "nubra.svg": [91, 17],
  "oright.svg": [83, 29],
  "pagarbook.svg": [100, 27],
  "periskope.svg": [95, 16],
  "physicswallah.svg": [94, 27],
  "pice.svg": [67, 32],
  "platinumRx.svg": [101, 22],
  "porter.svg": [93, 15],
  "sahi.svg": [73, 32],
  "seekho.svg": [85, 28],
  "sharechat.svg": [92, 25],
  "slay-fashion.svg": [59, 28],
  "vyapar.svg": [98, 22],
  "wellopia.svg": [85, 24],
};

// optical corrections on top of the even-area sizing: marks with padding or
// fine type inside their file read small, heavy solid wordmarks read big
const OPTICAL = {
  Vahak: 1.9, "Neural Garage": 1.35, "Little Farm": 1.3, Eloelo: 1.45,
  PagarBook: 1.15, PlatinumRx: 1.1, ShareChat: 1.2, Seekho: 1.1, Oolka: 1.1,
  "Chhota Stock": 1.1,
  Lila: .72, Goodscore: .85, Nubra: .85, Porter: .8, Pice: .85, "Slay Fashion": .85,
  Kim: .85, Jar: .85, Inshorts: .85, Housie: .85, Groww: .9, "Ivy Homes": .9,
  "Kuku FM": .9, Emergent: .9, Vyapar: .9, Maxim: .9, Wellopia: .9, Away: .9,
};

// each logo's website, from Portfolio_Logo_Website_Links.docx. A logo with no
// verified link there has no entry, and its tile is not clickable.
const SITE = {
  Grexa: "https://grexa.ai/",
  "Neural Garage": "https://visualdub.ai/",
  "Slay Fashion": "https://slay.fashion/",
  Helium: "https://www.helium.com/",
  Nubra: "https://nubra.io/",
  Pice: "https://piceapp.com/",
  Periskope: "https://www.getperiscope.ai/",
  "Little Farm": "https://thelittlefarm.co.in/",
  Lila: "https://liva.ai/",
  Vahak: "https://www.vahak.in/",
  Goodscore: "https://goodscore.app/",
  "Material Depot": "https://materialdepot.com/",
  Sahi: "https://www.sahi.com/",
  Atomberg: "https://atomberg.com/",
  Groww: "https://groww.in/",
  Wellopia: "https://www.wellopia.in/",
  Kutumb: "https://www.kutumbapp.com/",
  PlatinumRx: "https://www.platinumrx.in/",
  Eloelo: "https://www.eloelo.in/",
  Masai: "https://www.masaischool.com/",
  Glance: "https://www.glance.app/",
  Emergent: "https://emergent.sh/",
  PagarBook: "https://pagarbook.com/",
  Oolka: "https://oolka.in/",
  Besharam: "https://in.imbesharam.com/",
  Vyapar: "https://vyapar.com/",
  "Super K": "https://www.superk.in/",
  ShareChat: "https://sharechat.com/",
  "Kuku FM": "https://kukufm.com/",
  Porter: "https://porter.in/",
  "Physics Wallah": "https://www.pw.live/",
};

// the periodic table: one tile per logo on a 10 x 6 grid (col, row from 1).
// The top row's middle is left empty for the legend.
const P = "/partnership/";
export const PR_TILES = [
  [1, 1, "seed", "Grexa", "grexa.png", 90],
  [10, 1, "c", "Porter", "porter.svg", 93],

  [1, 2, "seed", "Neural Garage", "neuralgarage.svg", 107],
  [2, 2, "seed", "Chhota Stock", "chhota stock.svg", 98],
  [3, 2, "seed", "Slay Fashion", "slay-fashion.svg", 59],
  [9, 2, "b", "Seekho", "seekho.svg", 85],
  [10, 2, "c", "Physics Wallah", "physicswallah.svg", 94],

  [1, 3, "seed", "Maxim", "maxim.svg", 91],
  [2, 3, "seed", "Helium", "helium.svg", 105],
  [3, 3, "seed", "Nubra", "nubra.svg", 91],
  [4, 3, "seed", "Pice", "pice.svg", 67],
  [7, 3, "a", "Material Depot", "material depot.svg", 94],
  [8, 3, "b", "Sahi", "sahi.svg", 73],
  [9, 3, "c", "Atomberg", "atomberg.svg", 109],
  [10, 3, "c", "Groww", "groww.svg", 106],

  [1, 4, "seed", "Periskope", "periskope.svg", 95],
  [2, 4, "seed", "Little Farm", "littlefarm.svg", 51],
  [3, 4, "seed", "Housie", "housie.svg", 85],
  [4, 4, "a", "Lila", "llia.svg", 54],
  [5, 4, "a", "Vahak", "VAHAK.svg", 55],
  [6, 4, "a", "Goodscore", "goodscore.svg", 99],
  [7, 4, "a", "Kim", "kim.svg", 82],
  [8, 4, "b", "Jar", "jar.svg", 71],
  [9, 4, "c", "Inshorts", "inshorts.svg", 95],
  [10, 4, "c", "Apnamart", "apnamart.svg", 110],

  [1, 5, "seed", "Khare", "khare.svg", 82],
  [2, 5, "seed", "Wellopia", "wellopia.svg", 85],
  [3, 5, "seed", "Away", "away.svg", 84],
  [4, 5, "a", "Kutumb", "kutumb.svg", 93],
  [5, 5, "a", "Bachatt", "BACHAT.svg", 102],
  [6, 5, "a", "PlatinumRx", "platinumRx.svg", 101],
  [7, 5, "b", "Eloelo", "EloElo logo.svg", 94],
  [8, 5, "b", "Masai", "MASAI.svg", 92],
  [9, 5, "c", "Glance", "glance.svg", 83],
  [10, 5, "c", "Emergent", "emergent.svg", 94],

  [1, 6, "seed", "Oright", "oright.svg", 83],
  [2, 6, "seed", "Ivy Homes", "ivy homes.svg", 104],
  [3, 6, "seed", "GoCredit", "gocredit.svg", 91],
  [4, 6, "a", "PagarBook", "pagarbook.svg", 100],
  [5, 6, "a", "Oolka", "OOLKA.svg", 88],
  [6, 6, "a", "Besharam", "BESHARAM.svg", 100],
  [7, 6, "b", "Vyapar", "vyapar.svg", 98],
  [8, 6, "b", "Super K", "Group 1686553684.svg", 99],
  [9, 6, "c", "ShareChat", "sharechat.svg", 92],
  [10, 6, "c", "Kuku FM", "kukufm.svg", 85],
].map(([c, r, stage, label, file, vw]) => ({
  c, r, stage, label, logo: P + encodeURIComponent(file),
  href: SITE[label],
  // the logo's drawn width as a share of its tile: the file's own width at
  // 1.07x, on a tile 137 wide (measured off the design)
  w: +((vw * 1.07 * 100) / 137).toFixed(1),
  // mobile: every logo gets the same drawn area, so a wide wordmark and a
  // square mark read the same size — as a share of the tile's width (cqw),
  // capped to fit the tile both ways
  mw: (() => {
    const [dw, dh] = DIMS[file] || [3, 1];
    const ar = dw / dh;
    const w = Math.sqrt(1200 * ar) * (OPTICAL[label] || 1);
    return +Math.min(w, 84, 30 * ar).toFixed(1);
  })(),
}));

// mobile lists the logos grouped by stage, three to a row, in this order
// (from the mobile mock); any tile not named here follows in table order
const MOBILE_ORDER = [
  "Grexa", "Neural Garage", "Maxim", "Periskope", "Oright", "Chhota Stock", "Helium",
  "Little Farm", "Wellopia", "Ivy Homes", "Housie", "Away", "Nubra", "GoCredit", "Pice",
  "Slay Fashion", "Khare",
  "PagarBook", "Kim", "Kutumb", "Material Depot", "Besharam", "PlatinumRx", "Goodscore",
  "Oolka", "Bachatt", "Vahak", "Lila",
  "Super K", "Masai", "Jar", "Sahi", "Seekho", "Vyapar", "Eloelo",
];
const rank = (t) => {
  const i = MOBILE_ORDER.indexOf(t.label);
  return i < 0 ? MOBILE_ORDER.length : i;
};
export const PR_GROUPS = PR_STAGES.map((s) => ({
  ...s,
  tiles: PR_TILES.filter((t) => t.stage === s.key)
    .map((t, i) => ({ t, i }))
    .sort((a, b) => rank(a.t) - rank(b.t) || a.i - b.i)
    .map(({ t }) => t),
}));
