import Footer from "../../components/Footer";
import SiteNav from "../../components/SiteNav";
import CspSectionNav from "../../components/CspSectionNav";
import { DeepDiveCards } from "../../components/CaseStudies";

export const metadata = {
  title: "VisualDub - Case Study | Vidrow",
};

// what VisualDub needed the campaign to do
const REQUIREMENTS = [
  "Increase the Outbound Conversion (emails/inmails)",
  "Establish and strengthen its position as a Global Brand",
  "Engage with and Generate high intent B2B Leads",
  "Explain its technology - highlighting the various use cases and its amazing technology",
];

// the two choices behind the ToFu films
const TOFU_POINTS = [
  "A premium and minimalist set was designed with the different personas to target the global audience. The cast with global resemblance was selected for global appeal.",
  "To engage a larger group of target audience, pain points chosen were not any persona-specific problem but something that is faced by a greater number of personas.",
];

// TODO: placeholder posters, frames from the "Don't Just Dub!" campaign films
// on Cloudflare Stream — swap in each ICP's own film when it arrives
const STREAM = "https://customer-np97ccync4jeshuk.cloudflarestream.com";
const ICPS = [
  { label: "An Influencer", video: "469c1ad832bc1c7343ef4d5b54f53ad5", time: "15s" },
  { label: "A Director", video: "2e7fc86428cb9466d0523671a37f2ec4", time: "3s" },
  { label: "A CTO", video: "5bd02c3a7ae53729c030574fecfbef32", time: "3s" },
];

// what the explainer film had to get right
const CARE = [
  {
    title: "Persona",
    desc: "3 Global Personas from different Industries were chosen combination of which creates an exhaustive set for all the feature use cases of VisualDub",
  },
  {
    title: "Ease and Convenience",
    desc: "The ease of using the platform for Lip Syncing was highlighted in the explainer video",
  },
  {
    title: "Global Identity",
    desc: "The Campaign positions VisualDub as a Global Tech entity based out of the USA or the UK. Creates an ease in trust for the global stake holders",
  },
];

// TODO: placeholder posters for the launch films (same stills as the ICPs)
const LAUNCH_ICPS = [
  { video: "469c1ad832bc1c7343ef4d5b54f53ad5", time: "15s", alt: "Influencer film" },
  { video: "2e7fc86428cb9466d0523671a37f2ec4", time: "3s", alt: "Director film" },
  { video: "5bd02c3a7ae53729c030574fecfbef32", time: "3s", alt: "CTO film" },
];

// TODO: placeholder posters — the "Don't Just Dub!" client films on Cloudflare
// Stream; swap in the MoFu case-study films (and make them play) when they arrive
const MOFU = [
  { video: "94f6ce29c2968c1173c12c300dff400a", alt: "VisualDub case study film 1" },
  { video: "c180ee2f8b1949017e121c9d6db08353", alt: "VisualDub case study film 2" },
  { video: "c971c8572b030712374cfe12e02f2ea4", alt: "VisualDub case study film 3" },
  { video: "8124355290b768643da812671022beed", alt: "VisualDub case study film 4" },
  { video: "6d13affe10d12db0f8b56e4cc7483536", alt: "VisualDub case study film 5" },
  { video: "dc44bf8e719578e8ed1772c66a51e52d", alt: "VisualDub case study film 6" },
];

// TODO: placeholder poster for the BoFu tech explainer until the film arrives
const EXPLAINER = { video: "6d13affe10d12db0f8b56e4cc7483536", time: "3s" };

// the side rail flips light-on-dark over the BoFu band
const DARK_SECTIONS = ["csp-sec-bofu"];

const SECTIONS = [
  { id: "csp-sec-hero", label: "VisualDub" },
  { id: "csp-sec-problem", label: "Problem Statement" },
  { id: "csp-sec-tofu", label: "ToFu Campaign" },
  { id: "csp-sec-creative", label: "Creative Solution" },
  { id: "csp-sec-launch", label: "First Campaign" },
  { id: "csp-sec-mofu", label: "MoFu Campaign" },
  { id: "csp-sec-bofu", label: "BoFu Campaign" },
  { id: "csp-sec-more", label: "More Stories" },
];

// the Vidrow step mark, for the co-brand plate in the banner's corner
function VidrowMark() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <path fill="#0B0B0D" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
    </svg>
  );
}

export default function VisualDubCaseStudy() {
  return (
    <>
    <main className="csp csp--vdub">
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <CspSectionNav sections={SECTIONS} darkSectionIds={DARK_SECTIONS} />

      <div className="csp-in" id="csp-sec-hero">
        <h1 className="cst-h">
          Increase the Outbound Conversion. Generate
          <br />
          high intent B2B Leads.
        </h1>

        <div className="cst-banner">
          <img
            className="cst-bannerImg cst-bannerImg--full"
            src="/casestudy%20images/visual-dub.png"
            alt="VisualDub campaign: three presenters on yellow, green and blue backdrops"
          />
          <span className="cst-plate">
            <VidrowMark />
            <i aria-hidden="true" />
            <img className="cst-appLogo" src="/logos/visual-dub.png" alt="" />
            <span className="cst-appName">VisualDub</span>
          </span>
        </div>

        <div className="cst-meta">
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Client</span>
            <span className="csp-metaValue">VisualDub</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Timeline</span>
            <span className="csp-metaValue">12 Months</span>
          </div>
          <div className="csp-metaItem">
            <span className="csp-metaLabel">Funnel</span>
            <span className="csp-metaValue">ToFu &middot; MoFu &middot; BoFu</span>
          </div>
          <p className="cst-metaNote">
            VisualDub is a global B2B platform that enables businesses to produce Studio quality
            Lip Sync while maintaining exceptionally high visual fidelity and spatio-temporal
            consistency.
          </p>
        </div>
      </div>

      <div className="csp-in">
        <section className="cst-problem cst-problem--reqs" id="csp-sec-problem">
          <div className="cst-problemTop">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>01</b>
                VISUALDUB &times; VIDROW &middot; CASE STUDY
              </div>
              <h2 className="cst-secH">Problem Statement</h2>
            </div>
            <div className="cst-problemCopy">
              <p>
                VisualDub is a global B2B platform that enables businesses to produce Studio
                quality Lip Sync while maintaining exceptionally high visual fidelity and
                spatio-temporal consistency.
              </p>
              <p>VisualDub wanted a campaign that could overcome the following requirements:</p>
            </div>
          </div>

          <ol className="cst-reqs">
            {REQUIREMENTS.map((r, i) => (
              <li className="cst-req" key={r}>
                <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                <p>{r}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="csp-in">
        <section className="cvd-tofu" id="csp-sec-tofu">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>02</b>
            TOFU CAMPAIGN
          </div>
          <h2 className="cst-secH">
            For Global Positioning and covering the{" "}
            <br />
            largest spectrum of the target audience
          </h2>

          <div className="cvd-tofuRow">
            <ol className="cvd-points">
              {TOFU_POINTS.map((t, i) => (
                <li className="cvd-point" key={i}>
                  <span className="cst-reqNum">{String(i + 1).padStart(2, "0")}</span>
                  <p>{t}</p>
                </li>
              ))}
            </ol>

            <div className="cvd-icps">
              <span className="cst-pmfCap cst-pmfCap--violet">The following 3 ICPs were chosen:</span>
              <div className="cvd-icpRow">
                {ICPS.map((icp) => (
                  <figure className="cvd-icp" key={icp.label}>
                    <span className="cvd-icpShot">
                      <img
                        src={`${STREAM}/${icp.video}/thumbnails/thumbnail.jpg?time=${icp.time}&height=600`}
                        alt=""
                        loading="lazy"
                      />
                      <span className="cvd-play" aria-hidden="true" />
                    </span>
                    <figcaption>{icp.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="cst-problem cst-problem--reqs cvd-creative" id="csp-sec-creative">
          <div className="cst-problemTop">
          <div>
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>03</b>
              CREATIVE SOLUTION
            </div>
            <h2 className="cst-secH">
              Tech-savvy, scientific{" "}
              <br />
              and futuristic.
            </h2>
          </div>
          <div className="cst-problemCopy">
            <p>
              The mood and tone of the explainer video was designed to be a combination of all
              tech-savvy, scientific and futuristic.
            </p>
            <p>
              This ensures that high intent leads, who have spent their time watching the video,
              were able to understand the technology easily with their understanding being that
              VisualDub really has a great scientific solution towards solving the dubbing and lip
              syncing problem.
            </p>
          </div>
          </div>

          <span className="cst-pmfCap cst-pmfCap--violet cvd-careCap">3 important things that were taken care of:</span>
          <ol className="cvd-care">
            {CARE.map((c, i) => (
              <li className="cvd-careItem" key={c.title}>
                <span className="cvd-careNum">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="cvd-careTitle">{c.title}</h3>
                <p className="cvd-careDesc">{c.desc}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="csp-in">
        <section className="cvd-launch" id="csp-sec-launch">
          <div className="csp-eyebrow2">
            <span className="csp-eyebrow2-dot" aria-hidden="true" />
            <b>04</b>
            FIRST CAMPAIGN
          </div>
          <h2 className="cst-secH">
            The resultant Global Launch Campaign of{" "}
            <br />
            this collaboration comprised of 4 videos
          </h2>
          <p className="cvd-launchCopy">
            A series of short product showcase, use showcase, client work were used to remind the
            leads about VisualDub and stay on their top of mind while making any decision. Since
            it&rsquo;s not pure SaaS, VisualDub stuck to organic channels for marketing (LinkedIn +
            emails) instead of paid ads.
          </p>

          <div className="cvd-media">
            <figure className="cvd-mediaItem">
              <div className="cvd-trio">
                {LAUNCH_ICPS.map((v) => (
                  <span className="cvd-icpShot cvd-shot" key={v.alt}>
                    <img
                      src={`${STREAM}/${v.video}/thumbnails/thumbnail.jpg?time=${v.time}&height=600`}
                      alt={v.alt}
                      loading="lazy"
                    />
                    <span className="cvd-play" aria-hidden="true" />
                  </span>
                ))}
              </div>
              <figcaption>3 Videos: one of each ICP</figcaption>
            </figure>

            <figure className="cvd-mediaItem">
              <span className="cvd-icpShot cvd-shot cvd-shot--wide">
                {/* TODO: placeholder — the campaign key art until the master film arrives */}
                <img src="/casestudy%20images/visual-dub.png" alt="Master video of all 3 ICPs" loading="lazy" />
                <span className="cvd-play" aria-hidden="true" />
              </span>
              <figcaption>Master Video of all 3 ICPs</figcaption>
            </figure>

            <figure className="cvd-mediaItem">
              {/* TODO: placeholder for the LinkedIn event post screenshot */}
              <span className="cvd-icpShot cvd-shot cvd-shot--post">
                <span className="cvd-postPh">Event post</span>
              </span>
              <figcaption>VisualDub showcases these videos in all the events they attend</figcaption>
            </figure>
          </div>
        </section>
      </div>

      <div className="csp-in">
        <section className="cvd-mofu" id="csp-sec-mofu">
          <div className="cst-problemTop">
            <div>
              <div className="csp-eyebrow2">
                <span className="csp-eyebrow2-dot" aria-hidden="true" />
                <b>05</b>
                MOFU CAMPAIGN
              </div>
              <h2 className="cst-secH">
                Use Case Explaining{" "}
                <br />
                Case Studies
              </h2>
            </div>
            <p className="cst-problemCopy cvd-mofuCopy">
              After the ToFu Campaign, VisualDub now wanted to target potential leads that are
              already aware and would like to understand more about VisualDub&rsquo;s use cases and
              the relevant work that they did for their various clients. For this, we decided to
              make case study videos for VisualDub&rsquo;s every client. With these videos, the idea
              was also to filter leads with low or medium intent.
            </p>
          </div>

          <span className="cst-pmfCap cvd-mofuCap">Below are the videos from this MoFu campaign:</span>
          <div className="cvd-mofuGrid">
            {MOFU.map((v) => (
              <span className="cvd-icpShot cvd-mofuShot" key={v.video}>
                <img
                  src={`${STREAM}/${v.video}/thumbnails/thumbnail.jpg?time=3s&height=600`}
                  alt={v.alt}
                  loading="lazy"
                />
                <span className="cvd-play" aria-hidden="true" />
              </span>
            ))}
          </div>
        </section>
      </div>

      <div className="cst-outputBand">
        <div className="csp-in">
          <section className="cst-output cvd-bofu" id="csp-sec-bofu">
            <div className="csp-eyebrow2">
              <span className="csp-eyebrow2-dot" aria-hidden="true" />
              <b>06</b>
              BOFU CAMPAIGN
            </div>
            <h2 className="cst-secH">Tech Explainer Video</h2>

            <div className="cvd-bofuRow">
              <span className="cvd-icpShot cvd-bofuShot">
                <img
                  src={`${STREAM}/${EXPLAINER.video}/thumbnails/thumbnail.jpg?time=${EXPLAINER.time}&height=720`}
                  alt="VisualDub tech explainer video"
                  loading="lazy"
                />
                <span className="cvd-play" aria-hidden="true" />
              </span>

              <div className="cvd-bofuCopy">
                <p>
                  With VisualDub&rsquo;s potential clients already aware about their global
                  presence and with consideration already built with the help of the use cases
                  videos, now the objective was to explain to high-intent leads about their
                  technology, the ease and the benefits of using VisualDub.
                </p>
                <p>
                  For this, the idea was to create an animated video that explains the technology
                  in simple terms for ease of understanding while not missing the science behind
                  their technology.
                </p>
                <p className="cst-outNote cvd-bofuNote">
                  Here is the video for catering to the BoFu high intent leads
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="csp-in">
        <section className="csp-more" id="csp-sec-more">
          <div className="csp-more-head">
            <h2 className="csp-more-h">More deep dives.</h2>
            <a className="csp-more-cta csp-more-cta--desktop" href="/#deepdive">
                <span className="csp-more-cta-label">See all case studies</span>
                <span className="csp-more-cta-i" aria-hidden="true">
                  <svg viewBox="0 0 40 40" aria-hidden="true">
                    <path fill="var(--violet)" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
                  </svg>
                </span>
              </a>
          </div>

          <DeepDiveCards embed exclude="/case-study/visual-dub" />
          <div className="csp-more-ctaMobile">
            <a className="csp-more-cta csp-more-cta--mobile" href="/#deepdive">
              <span className="csp-more-cta-label">See all case studies</span>
              <span className="csp-more-cta-i" aria-hidden="true">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path fill="var(--violet)" d="M0 0 H40 V40 H26.667 V26.667 H13.333 V13.333 H0 Z" />
                </svg>
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
    <Footer />
    </>
  );
}
