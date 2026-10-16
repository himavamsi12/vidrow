// A tiny stylesheet that ties "the loader has played" to the browser's HTTP
// cache, so clearing the cache brings the loader back like a first visit.
// The page always asks for it plainly and gets ":root{--loader-cached:0}",
// never stored. Once the loader has played, PageLoader fetches it again with
// an `x-loader-seen` header and gets the "1" version, kept for a year; from
// then on the browser serves that copy from its cache without asking, until
// the cache is cleared. No `Vary` on purpose: the plain request must hit the
// stored copy. `private` keeps CDNs from sharing either version.
export async function GET(request) {
  const seen = request.headers.get("x-loader-seen") === "1";
  return new Response(`:root{--loader-cached:${seen ? 1 : 0}}`, {
    headers: {
      "Content-Type": "text/css; charset=utf-8",
      "Cache-Control": seen ? "private, max-age=31536000, immutable" : "no-store",
    },
  });
}
