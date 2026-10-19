// the site's own address, for the sitemap, robots.txt and the absolute links
// in share previews. Set NEXT_PUBLIC_SITE_URL (e.g. https://vidrow.in) once the
// domain is live; until then it is the Vercel project's production address,
// and localhost in development.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  `http://localhost:${process.env.PORT || 3000}`
).replace(/\/+$/, "");

export const SITE_DESCRIPTION =
  "Vidrow is the marketing partner behind some of India's fastest-growing startups: brand films, celebrity and UGC performance ads, and growth marketing, measured on what they move.";
