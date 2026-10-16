import SiteNav from "./SiteNav";
import Footer from "./Footer";
import TagMark from "./TagMark";
import LegalToc from "./LegalToc";
import { CONTACT_EMAIL } from "../data/legal";

const pad = (n) => String(n).padStart(2, "0");

// the last two words share a no-break space, so a long paragraph never ends
// on one word alone (text-wrap: pretty misses some of these)
const tie = (text) => text.replace(/ (\S+)$/, "\u00A0$1");

function Block({ block }) {
  if (block.h) return <h3 className="lg-sub">{block.h}</h3>;
  if (block.p) return <p>{tie(block.p)}</p>;
  if (block.list)
    return (
      <ul className="lg-list">
        {block.list.map((item, i) =>
          Array.isArray(item) ? (
            <li key={i}>
              <strong>{item[0]}</strong> {tie(item[1])}
            </li>
          ) : (
            <li key={i}>{tie(item)}</li>
          )
        )}
      </ul>
    );
  if (block.defs)
    return (
      <dl className="lg-defs">
        {block.defs.map(([term, meaning]) => (
          <div className="lg-def" key={term}>
            <dt>{term}</dt>
            <dd>{tie(meaning)}</dd>
          </div>
        ))}
      </dl>
    );
  if (block.cards)
    return (
      <div className="lg-cards">
        {block.cards.map((c) => (
          <article className="lg-card" key={c.name}>
            <span className="ab-tagwrap lg-cardTag">
              <span className="ab-tag">{c.type}</span>
              <TagMark />
            </span>
            <h4>{c.name}</h4>
            <p className="lg-cardMeta">Administered by {c.admin}</p>
            <p>{tie(c.purpose)}</p>
          </article>
        ))}
      </div>
    );
  return null;
}

// the privacy policy and the terms share one layout: the page header, then a
// sticky contents list beside numbered sections
export default function LegalPage({ doc }) {
  return (
    <>
      <header className="hx-bar hx-bar--page">
        <SiteNav logoHref="/" />
      </header>
      <div className="hx-bar-gap" aria-hidden="true" />

      <main className="lg">
        <div className="lg-head">
          <div className="ab-tagwrap">
            <span className="ab-tag">Legal</span>
            <TagMark />
          </div>
          <h1 className="lg-h">{doc.title}</h1>
          <p className="lg-updated">Last updated {doc.updated}</p>
        </div>

        <div className="lg-body">
          <aside className="lg-side">
            <LegalToc sections={doc.sections.map(({ id, title }) => ({ id, title }))} />
          </aside>

          <div className="lg-content">
            <div className="lg-intro">
              {doc.intro.map((p, i) => (
                <p key={i}>{tie(p)}</p>
              ))}
            </div>

            {doc.sections.map((s, i) => (
              <section className="lg-sec" id={s.id} key={s.id}>
                <span className="lg-num">{pad(i + 1)}</span>
                <h2 className="lg-secH">{s.title}</h2>
                <div className="lg-prose">
                  {s.blocks.map((b, k) => (
                    <Block block={b} key={k} />
                  ))}
                </div>
              </section>
            ))}

            <section className="lg-sec lg-contact" id="contact-us">
              <span className="lg-num">{pad(doc.sections.length + 1)}</span>
              <h2 className="lg-secH">Contact Us</h2>
              <p>{doc.contactNote}</p>
              <a className="lg-mail" href={`mailto:${CONTACT_EMAIL}`}>
                <span>{CONTACT_EMAIL}</span>
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <path d="M10 10 H30 V30 H23.333 V23.333 H16.667 V16.667 H10 Z" />
                </svg>
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
