import Hero from "./components/Hero";
import FeaturedWork from "./components/FeaturedWork";
import FeaturedWorkMobile from "./components/FeaturedWorkMobile";
import WhereYouAreNow from "./components/WhereYouAreNow";
import Levers from "./components/Levers";
import SelectedWork from "./components/SelectedWork";
import CaseStudies from "./components/CaseStudies";
import Partnership from "./components/Partnership";
import News from "./components/News";
import Footer from "./components/Footer";
import { SITE_URL, SITE_DESCRIPTION } from "./lib/site";

// structured data for search engines: who Vidrow is (name, logo, founders,
// contact) and the site itself, so Google can show a proper brand result
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Vidrow",
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/apple-icon.png`, width: 180, height: 180 },
      description: SITE_DESCRIPTION,
      email: "contact@vidrow.in",
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
      areaServed: "IN",
      founder: [
        {
          "@type": "Person",
          name: "Aditya Raj Somani",
          jobTitle: "Co-Founder",
          sameAs: ["https://www.linkedin.com/in/adityarajasomani/", "https://x.com/adityarajsomani"],
        },
        {
          "@type": "Person",
          name: "Anushank Jain",
          jobTitle: "Co-Founder",
          sameAs: ["https://www.linkedin.com/in/anushank-jain-7390a696/", "https://x.com/anushankjain"],
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@vidrow.in",
        url: `${SITE_URL}/contact`,
        areaServed: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Vidrow",
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />
      <Hero />
      {/* two Featured Work layouts share the one anchor: the stacked cards on
          desktop, the original expanding rows on mobile (swapped in CSS) */}
      <div id="featured">
        <FeaturedWork />
        <FeaturedWorkMobile />
      </div>
      <WhereYouAreNow />
      <Levers />
      <SelectedWork />
      {/* Founders section is hidden for now */}
      <Partnership />
      <CaseStudies />
      <News />
      <Footer />
    </>
  );
}
