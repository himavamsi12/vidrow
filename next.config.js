/** @type {import('next').NextConfig} */
// campaign pages that moved to lowercase-hyphen addresses: old address -> new
const MOVED_CAMPAIGNS = {
  "whatspp-solved": "whatsapp-solved",
  curious_jr_shailesh: "curiousjr-shailesh-lodha",
  oolka_jimmy: "oolka-jimmy-shergill",
  platinumrx_anup_soni: "platinumrx-anup-soni",
  platinumrx_anupam_kher: "platinumrx-anupam-kher",
  seekho_naveen_kasturia: "seekho-naveen-kasturia",
  seekho_mandar: "seekho-mandar-chandwadkar",
  Bachatt_brandformance: "bachatt-brandformance",
  helium_Ads: "helium-performance-ads",
  masai_Ads: "masai-performance-ads",
  oolka_Ads: "oolka-performance-ads",
  pice_Ads: "pice-performance-ads",
  performance_platinum_rx: "platinumrx-performance-ads",
  pw_cjr_ads: "curiousjr-performance-ads",
};

const nextConfig = {
  reactStrictMode: false,
  // links already shared to an old campaign address still land on the page
  async redirects() {
    return Object.entries(MOVED_CAMPAIGNS).map(([from, to]) => ({
      source: `/campaign/${from}`,
      destination: `/campaign/${to}`,
      permanent: true,
    }));
  },
  // images, fonts and videos in /public keep their names when they're
  // replaced, so they're cached for a day and then served from cache while
  // the browser checks for a new copy in the background (a replaced file
  // shows up on the next visit) rather than cached forever
  async headers() {
    return [
      {
        source: "/:all*(webp|png|jpg|jpeg|svg|woff2|ttf|webm|mov|mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
