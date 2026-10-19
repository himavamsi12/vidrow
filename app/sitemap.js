import { readdirSync } from "node:fs";
import { join } from "node:path";
import { SITE_URL } from "./lib/site";
import { CAMPAIGNS } from "./data/campaigns";

// every page on the site: the main pages, each case study (one folder per
// study under app/case-study) and each campaign page
export default function sitemap() {
  const caseStudies = readdirSync(join(process.cwd(), "app/case-study"), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const page = (path, priority, changeFrequency = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/about", 0.8),
    page("/contact", 0.8),
    ...caseStudies.map((slug) => page(`/case-study/${slug}`, 0.7)),
    ...Object.keys(CAMPAIGNS).map((slug) => page(`/campaign/${slug}`, 0.5)),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms-and-conditions", 0.2, "yearly"),
  ];
}
