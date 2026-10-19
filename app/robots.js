import { SITE_URL } from "./lib/site";

// every page may be crawled; the sitemap lists them all
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
