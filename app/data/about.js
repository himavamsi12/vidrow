// the About Us hero mosaic: 17 columns x 6 rows, row by row. A, B and C are
// the three yellows (bright, pale, palest); P is a team photo, taken in turn
// from PHOTOS in reading order.
export const ABOUT_ROWS = [
  "ABBPCCCAPBBABBABP",
  "AABBACAAABBBPAABB",
  "APBAPABPAAPACAPAA",
  "BAAAAABBBBAACCCAP",
  "BBAPABAPACAPAAAAA",
  "BPBBBPACCPABBAPBB",
];

export const ABOUT_PHOTOS = [
  "hero1", "hero2", "hero3",
  "hero8",
  "hero4", "hero5", "hero16", "hero7", "hero9",
  "hero11",
  "hero10", "hero14", "hero17",
  "hero12", "hero13", "hero15", "hero18",
];

// the phone mosaic: 11 columns x 12 rows, row by row, laid out to the mobile
// mock. Y and L are its two yellows (bright, pale); P is a team photo, taken
// in turn from the same PHOTOS in reading order.
export const ABOUT_ROWS_MOBILE = [
  "YPLLLPYLLLP",
  "YYLLYYYYPLY",
  "LYPYYYLYYLL",
  "LLLLYLLPYLY",
  "YPLYYYYLLYY",
  "LLYYYLPYLPY",
  "YYLPLLYYLLL",
  "LYYLLYYPYYP",
  "LPYLYYLLYLL",
  "LLLLPYLLPYL",
  "YYPLYYYYLYL",
  "YYYLLLPYLYY",
];

// the phone mosaic's photos in its own order, per the mobile mock; ZOOM is how
// far each is enlarged, and where it is anchored
export const ABOUT_PHOTOS_MOBILE = [
  "hero1", "hero2", "hero3",
  "hero8",
  "hero4",
  "hero16",
  "hero7",
  "hero9", "hero11",
  "hero10",
  "hero14", "hero17",
  "hero12",
  "hero13", "hero15",
  "hero18",
  "hero5",
];

// [zoom, x%, y%]: matched against the mobile mock, tile by tile
export const ABOUT_PHOTO_ZOOM_MOBILE = {
  hero1: [1.16, 87.5, 50],
  hero2: [1.28, 37.5, 25],
  hero3: [1.28, 25, 0],
  hero8: [1.22, 62.5, 12.5],
  hero4: [1.63, 50, 12.5],
  hero16: [1.63, 50, 12.5],
  hero7: [1.63, 50, 12.5],
  hero9: [1.71, 50, 10],
  hero11: [1.9, 50, 12.5],
  hero10: [1.9, 50, 12.5],
  hero14: [1.63, 50, 12.5],
  hero17: [1.16, 62.5, 37.5],
  hero12: [1.53, 50, 0],
  hero13: [1.9, 50, 12.5],
  hero15: [1.76, 50, 12.5],
  hero18: [1.53, 37.5, 25],
  hero5: [1.71, 50, 10],
};
