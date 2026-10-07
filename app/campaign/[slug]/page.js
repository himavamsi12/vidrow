import { notFound } from "next/navigation";
import SiteNav from "../../components/SiteNav";
import Footer from "../../components/Footer";
import CampaignFrame from "../../components/CampaignFrame";
import { CAMPAIGNS } from "../../data/campaigns";

export function generateStaticParams() {
  return Object.keys(CAMPAIGNS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = CAMPAIGNS[slug];
  return { title: c ? `${c.title} \u2014 ${c.by.split(" - ")[0]} | Vidrow` : "Campaign | Vidrow" };
}

export default async function CampaignPage({ params }) {
  const { slug } = await params;
  const c = CAMPAIGNS[slug];
  if (!c) notFound();

  return (
    <>
      <header className="cmp-nav">
        <SiteNav logoHref="/" />
      </header>

      <main className="cmp">
        <a className="cmp-back" href="/">
          <span aria-hidden="true">&larr;</span> Back to Home page
        </a>

        <header className="cmp-head">
          <div className="cmp-title">
            <h1 className="cmp-h">{c.title}</h1>
            <p className="cmp-by">{c.by}</p>
          </div>
          <p className="cmp-about">{c.about}</p>
        </header>

        <div className="cmp-frames">
          {c.frames.map((f, i) => (
            <CampaignFrame key={i} frame={f} title={`${c.title} \u2014 film ${i + 1}`} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
