import { SITE_URL, SITE_DESCRIPTION } from "../lib/site";
import { CAMPAIGNS } from "../data/campaigns";
import { SW_TABS } from "../data/selectedWork";

// /llms.txt: a plain-text map of the site for AI assistants and LLM crawlers
// (the llmstxt.org format: a title, a one-line summary, then sections of
// links with a short note each). Built once at build time from the same data
// the pages use, so a new campaign shows up here on its own.
export const dynamic = "force-static";

const CASE_STUDIES = [
  ["helium", "Helium Smart Air", "Launching a 0.8 ton AC sold online at ₹16,999: positioning against the incumbents, casting, brand films, performance ads and creator reviews in one summer."],
  ["platinumrx", "PlatinumRx", "UGC and celebrity performance ads explaining substitute medicines and medicine savings."],
  ["stealth-app", "Stealth App", "Finding product-market fit in a consumer app's paying-user cohort by testing features, audiences and creatives."],
  ["masai", "Masai", "Reducing dependence on influencer marketing by scaling performance ads built around the right face and tested hooks."],
  ["curiousjr", "PW CuriousJr", "Performance videos for parents that lowered cost per lead and improved lead quality."],
  ["seekho", "Seekho", "Celebrity performance videos with Mandar Chandwadkar to beat ad fatigue and keep acquisition costs low."],
  ["goodscore", "GoodScore", "Celebrity performance ads from one shoot, tested hook by hook against the rest of the account on cost per conversion."],
  ["vyapar", "Vyapar", "Brand films for small-business owners that made Vyapar the name its category is known by."],
  ["apnamart", "ApnaMart (staples)", "A celebrity campaign made for social media to build brand recall around staples."],
  ["apnamart-online-offline", "ApnaMart (online + offline)", "Phase-by-phase testing of offline and online channels in Bilaspur to grow app downloads and online orders."],
  ["visual-dub", "VisualDub by NeuralGarage", "Product showcase videos for global buyers to raise outbound conversion and generate B2B leads."],
];

const line = (title, path, note) => `- [${title}](${SITE_URL}${path})${note ? `: ${note}` : ""}`;

export function GET() {
  const work = SW_TABS.map((tab) => {
    const items = tab.items
      .filter((item) => item.href?.startsWith("/campaign/"))
      .map((item) => {
        const c = CAMPAIGNS[item.href.slice("/campaign/".length)];
        return line(`${item.title} (${item.client})`, item.href, c?.about);
      });
    return items.length ? `### ${tab.label}\n\n${items.join("\n")}` : "";
  }).filter(Boolean);

  const body = `# Vidrow

> ${SITE_DESCRIPTION}

Vidrow is a marketing partner for startups, based in Bengaluru, India. It plans and makes brand films, celebrity performance ads, UGC and creator ads, social media content and global launch campaigns, and runs performance marketing on Meta and Google. The team is largely IIT Kanpur alumni, and Vidrow invests in some of the startups it works with.

## Main pages

${line("Home", "/", "What Vidrow does, selected work, client testimonials and case studies")}
${line("About", "/about", "The founders, the team and how Vidrow works with startups")}
${line("Contact", "/contact", "Enquiry form; email contact@vidrow.in")}

## Case studies

${CASE_STUDIES.map(([slug, name, note]) => line(name, `/case-study/${slug}`, note)).join("\n")}

## Campaigns

${work.join("\n\n")}

## Optional

${line("Privacy Policy", "/privacy-policy")}
${line("Terms and Conditions", "/terms-and-conditions")}
${line("Sitemap", "/sitemap.xml", "Every page on the site")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
