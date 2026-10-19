/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
