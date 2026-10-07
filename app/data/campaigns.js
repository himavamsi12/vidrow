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
  // apnamart
  apnamart: {
    title: "Apnamart",
    by: "Apnamart - Anupam Kher",
    about: ABOUT,
    frames: [
      video("42d0d1564b3b5b27352749f7fab1f42e"," Apnamart, film 1"),
      video("95a9e8494eedf78dc80f1f26247e94da", " Apnamart, film 2"),
      video("f7d99955fde4bd4fa2b020ebaf4f461f", " Apnamart, film 3"),
      video("2a943c2a25a2f0e385e48fb2c78c5af5", " Apnamart, film 4"),
      video("7fff47a3392285a788b5c09a3e0e67ed", " Apnamart, film 5"),
    ],
  },
  //Elo Elo
  eloelo: {
    title: "Elo Elo",
    by: "Elo Elo - Anupam Kher",
    about: ABOUT,
    frames: [
      video("19676b4587a227b740c7aa8dfa002e68", " Elo Elo, film 1"),
      video("08e6995af62f3fabb0122e8bf9a917a9", " Elo Elo, film 2"),
    ],
  },
  //Helium
  helium: {
    title: "Helium",
    by: "Helium - Anupam Kher",
    about: ABOUT,
    frames: [
      video("f05f15baef6f3fa850ca99e97ff2d73a", " Helium, film 1"),
      video("a5c4fb593ce18c3f6f93d8de815734c8", " Helium, film 2"),
      video("657c5f2e5a98fbde0c93db528d575840", " Helium, film 3"),
      video("8c73913bf4b4860395987d69107c9af9", " Helium, film 4"),
      video("2ab02974e87da78cd515ef4221feb116", " Helium, film 5"),
    ],
  },
  //Ivy Homes
  ivyhomes: {
    title: "Ivy Homes",
    by: "Ivy Homes - Anupam Kher",
    about: ABOUT,
    frames: [
      video("309d1dce77cabc97336fe633405475c0", " Ivy Homes, Possesion"),
      video("f35deeb5ade88fae9999754e93334e28", " Ivy Homes, legal"),
      video("6293b509193bbd72853794b6217cee52", " Ivy Homes, Renovated Properties"),
      video("612f35ab4c3505f560ecb9bc2a48ab60", " Ivy Homes, Pricing"),
      video("51e270624b6324696c19b7dff64bbb8c", " Ivy Homes, Booking"),
    ],
  },
  //Platinum RX
  platinumrx: {
    title: "Platinum RX",
    by: "Platinum RX - Anupam Kher",
    about: ABOUT,
    frames: [
      video("eb54a821aed01f7b4d1851159be31a54", " Platinum RX, film 1"),
      video("fb44c37fca415eba584a3cd9fde88ec8", " Platinum RX, film 2"),
      video("2ce79ff3d26dddde865172f626976220", " Platinum RX, film 3"),
    ],
  },


  //Celebrity Performance

  // Curious Jr - Shailesh
  curious_jr_shailesh: {
    title: "Curious Jr - Shailesh",
    by: "Curious Jr - Shailesh - Anupam Kher",
    about: ABOUT,
    frames: [
      video("286c07ac44c4ace2bf472cb426600160", " Curious Jr - Shailesh, film 1"),
      video("775fd2d492dce0d98cace5046f00e5aa", " Curious Jr - Shailesh, film 2"),
      video("fdad645d3b3c31870e8bb11fb16357cd", " Curious Jr - Shailesh, film 3"),
      video("5066daa9d74d0faacdc6ee0ee3467d84", " Curious Jr - Shailesh, film 4"),
      video("eb6ba7d131252ff2f83335a73b396bf4", " Curious Jr - Shailesh, film 5"),
      video("e657e0df8b8135a73aa8ac007aa3cb2a", " Curious Jr - Shailesh, film 6"),
    ],
  },
  // Oolka Jimmy
  oolka_jimmy: {
    title: "Oolka Jimmy",
    by: "Oolka Jimmy - Anupam Kher",
    about: ABOUT,
    frames: [
      video("7557ddc957b671c1e1a2649192a873c9", " Oolka Jimmy, film 1"),
      video("2ac2c3f6d0ca9dc235defebcbd329b0b", " Oolka Jimmy, film 2"),
      video("cec0ed24fc53fcbaf073cac4ddddd4f4", " Oolka Jimmy, film 3"),
      video("b1461fbbfee8be846b6482aa8f83394f", " Oolka Jimmy, film 4"),
      video("d7e4bb8e286b5e8f220394a05208e81b", " Oolka Jimmy, film 5"),
    ],
  },
  // Platinum RX - Anup Soni
  platinumrx_anup_soni: {
    title: "Platinum RX - Anup Soni",
    by: "Platinum RX - Anup Soni",
    about: ABOUT,
    frames: [
      video("27d821612014a64fe4c2818bdd798f85", " Platinum RX - Anup Soni, film 1"),
      video("a4088867f56ea7fc10fbd4e1d5639595", " Platinum RX - Anup Soni, film 2"),
      video("65f1f8556941359fefcb537ac6db2190", " Platinum RX - Anup Soni, film 3"),
      video("a72a31092e1156f9d791fd965b25a278", " Platinum RX - Anup Soni, film 4"),
      video("4c3d6d8e20a8165761917640458e3811", " Platinum RX - Anup Soni, film 5"),
      video("f807f04d5523dd446dfc0282a9387621", " Platinum RX - Anup Soni, film 6"),
    ],
  },
  // Platinum RX - Anupam Kher
  platinumrx_anupam_kher: {
    title: "Platinum RX - Anupam Kher",
    by: "Platinum RX - Anupam Kher",
    about: ABOUT,
    frames: [
      video("23c24839c157306de2636c473e87154b", " Platinum RX - Anupam Kher, film 1"),
      video("a9baf34a743f2f74acc62368b749033d", " Platinum RX - Anupam Kher, film 2"),
      video("770d9353aef765fb940c94210897fdf8", " Platinum RX - Anupam Kher, film 3"),
      video("768fbaf9dd42a2cac642af924a7a60af", " Platinum RX - Anupam Kher, film 4"),
      video("aba888b35f0e553781b5a8eb1bd1e631", " Platinum RX - Anupam Kher, film 5"),
      video("a7771551fc363b2a9acf1e7a9f0a146c", " Platinum RX - Anupam Kher, film 6"),
    ],
  },
  // Seekho - Naveen Kasturia
  seekho_naveen_kasturia: {
    title: "Seekho - Naveen Kasturia",
    by: "Seekho - Naveen Kasturia",
    about: ABOUT,
    frames: [
      video("79be8b74182f5a492e9dffaff4774126", " Seekho - Naveen Kasturia, youtube, film 1"),
      video("9fffd24edfcd6ae87f3759a37acbb3c3", " Seekho - Naveen Kasturia, English with captions, film 2"),
      video("c296a4bd7dd8692eadc8ae9b2977f1f3", " Seekho - Naveen Kasturia, film 3"),
      video("30421abfab69530769975d47fb7bae6c", " Seekho - Naveen Kasturia, Aadhaar Card with Captions, film 4"),
      video("6c4751f502a4f3423b5ce536e6377990", " Seekho - Naveen Kasturia,  PART TIME INCOME , film 5"),
    ],
  },
  // Seekho - Mandar
  seekho_mandar: {
    title: "Seekho - Mandar",
    by: "Seekho - Mandar",
    about: ABOUT,
    frames: [
      video("fb9afb53398265bd9d65a407e2f39c38", " Seekho - Mandar, film 1"),
      video("a98bcbcb8a6a854e580be2f1a76b0227", " Seekho - Mandar, film 2"),
      video("e971b3905d9844b268e6ef2bfaf7d103", " Seekho - Mandar, film 3"),
      video("d4e237b06ef088da80342fe543e8fb17", " Seekho - Mandar, film 4"),
      video("62a42983742afdfd0662dedae597ea57", " Seekho - Mandar, film 5"),
    ],
  },



  // Performance Creatives

  // Bachatt - brandformance
  Bachatt_brandformance: {
    title: "Bachatt - brandformance",
    by: "Bachatt - brandformance",
    about: ABOUT,
    frames: [
      video("660559078e11ffc47f182ac800fccf98", " Bachatt - brandformance, film 1"),
      video("d3c22ad63f21703585a68bd9ad0e0fae", " Bachatt - brandformance, film 2"),
      video("3ecfdfe1a11cf6ac434c45ab325c426e", " Bachatt - brandformance, film 3"),
      video("c81251a0499046308669b4b76a2303c4", " Bachatt - brandformance, film 4"),
      video("113935b6840449e54eb2851d3883d475", " Bachatt - brandformance, film 5"),
      video("4dbcd348a929d47591c862df3aba9a87", " Bachatt - brandformance, film 6"),
      video("b3d551be06597ef204ea3279557d2ce8", " Bachatt - brandformance, film 7"),
      video("1b3bd6510fe807d146680ae78531b055", " Bachatt - brandformance, film 8"),
      video("a0dd985ff67bfff2022fd1a8c69e97f0", " Bachatt - brandformance, film 9"),
      video("ea5b6f2b7cddf5ba486aed20cfcfc431", " Bachatt - brandformance, film 10"),
      video("0a278e95d7a88e8ac8326e81a77fffe5", " Bachatt - brandformance, film 11"),
      video("fde780da532c467a44bb15bc476634cd", " Bachatt - brandformance, film 12"),
      video("316117109ce22b2988d749440304db4e", " Bachatt - brandformance, film 13"),
      video("958705feb5c0c9d6c225e282ba739ef6", " Bachatt - brandformance, film 14"),
      video("362ea3467010ba82d4029e2f709cad5e", " Bachatt - brandformance, film 15"),
      video("f4e67f6e37065d1f50e1ba9bdbfcd41c", " Bachatt - brandformance, film 16"),
    ],
  },
  // groww
  groww: {
    title: "Groww",
    by: "Groww",
    about: ABOUT,
    frames: [
      video("3bd7b9625d51678b4053ebbb791d698b", " Groww, film 1"),
      video("39c897647d2a214bf4c15cf29a0293e6", " Groww, film 2"),
      video("238ad87e2036686a885405e7b9c771ec", " Groww, film 3"),
      video("c536a42642e01c517aef9bfd36f0a058", " Groww, film 4"),
      video("8199317d024c550c1025237f98ffb4c6", " Groww, film 5"),
    ],
  },
  // Helium Ads
  helium_Ads: {
    title: "Helium Ads",
    by: "Helium Ads",
    about: ABOUT,
    frames: [
      video("cf9cccab9dd945b19466385c49d6641d", " Helium Ads, film 1"),
      video("a47ba234f76e7a24630691c2d9716125", " Helium Ads, film 2"),
      video("3f438c1c66288d0917346623f87cc6fa", " Helium Ads, film 3"),
      video("cd323482cab88f7650d35c0808a17a99", " Helium Ads, film 4"),
      video("528ab1632b7d0bb850591c76dfea7c5d", " Helium Ads, film 5"),
      video("a2969cf38a513af8dc367045ef264bbb", " Helium Ads, film 6"),
    ],
  },
  // Masai Ads
  masai_Ads: {
    title: "Masai Ads",
    by: "Masai Ads",
    about: ABOUT,
    frames: [
      video("d511b23b5036e711f169b555a2943b8d", " Masai Ads, film 1"),
      video("b41db9b74ed6e9bda2c5fd66780179c8", " Masai Ads, film 2"),
      video("3abb7fdebab2020f6d4c7132d31bbc16", " Masai Ads, film 3"),
      video("61b2b6901ddee9decc4d6e7b44723f63", " Masai Ads, film 4"),
      video("4b6d6f60f20d50a7c17a5d9d13f02129", " Masai Ads, film 5"),
    ],
  },
  //Oolka Ads
  oolka_Ads: {
    title: "Oolka Ads",
    by: "Oolka Ads",
    about: ABOUT,
    frames: [
      video("96b61f4139b242df93110bd90e4c01f2", " Oolka Ads, film 1"),
      video("ac9b388f562b8206477cd6282cf7f966", " Oolka Ads, film 2"),
      video("c54eb5560feaa9c55674de496dab5318", " Oolka Ads, film 3"),
      video("6d66f5e2927685f01a1c1417e7d9f86f", " Oolka Ads, film 4"),
      video("9f0c30782ea1b45380173d67282d5f8e", " Oolka Ads, film 5"),
      video("69a7439dc94a50de77ef30fface47818", " Oolka Ads, film 6"),
      video("f7631997b5bb50eadb2ec8fbac3e5ab6", " Oolka Ads, film 7"),
      video("662a87e28fcfc08a231b2fe3fe0e363c", " Oolka Ads, film 8"),
    ],
  },
    // Pice Ads
  pice_Ads: {
    title: "Pice Ads",
    by: "Pice Ads",
    about: ABOUT,
    frames: [
      video("12567b669c9e6f55d0204803ab7b4eec", " Pice Ads, film 1"),
      video("b440590ab3139d8ef9c6befb06311d7e", " Pice Ads, film 2"),
      video("d8de3633e2dd0038b8bed29d6e738284", " Pice Ads, film 3"),
      video("eee4958ae733d09721531e8d5884f5ef", " Pice Ads, film 4"),
      video("72bf863a69e543fa19d23a0dbd5eeab0", " Pice Ads, film 5"),
    ],
  },
  // Performance Platinum RX 
  performance_platinum_rx: {
    title: "Platinum RX",
    by: "Platinum RX",
    about: ABOUT,
    frames: [
      video("e899e733a6cb5fb4bdceb8c3211625d9", " Performance Platinum RX, film 1"),
      video("a5461a86055bfd3bd6a4fcd97d4386e5", " Performance Platinum RX, film 2"),
      video("0d7c6b6fa502d19f0bbeb350e34176f8", " Performance Platinum RX, film 3"),
      video("9b2c8328268f979865eddeb1f0750239", " Performance Platinum RX, film 4"),
    ],
  },
  // PW CJR Ads
  pw_cjr_ads: {
    title: "PW CJR Ads",
    by: "PW CJR Ads",
    about: ABOUT,
    frames: [
      video("bcb2a06c0c118fe0561b71a00fb07899", " PW CJR Ads, film 1"),
      video("7c8200bb8d83f93d289657572d87eeed", " PW CJR Ads, film 2"),
      video("976b138e9a59a4b06d10ad4cbe0c34d0", " PW CJR Ads, film 3"),
      video("2beda0ac594ef582bfd2ac5bea178592", " PW CJR Ads, film 4"),
      video("070147df130638341e499be7857e51e5", " PW CJR Ads, film 5"),
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
