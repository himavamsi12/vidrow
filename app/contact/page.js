import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { WhatsappIcon, MailIcon, LocationIcon, CornerArrow } from "../components/ContactIcons";
import { OFFICES } from "../data/offices";

export const metadata = {
  title: "Contact - Vidrow",
  description:
    "Tell us where your startup is and what you need next. Write to Vidrow about brand films, performance ads, celebrity campaigns or full-funnel growth marketing.",
};

const CONTACT_LINKS = [
  {
    key: "whatsapp",
    tone: "acid",
    Icon: WhatsappIcon,
    label: "Ping us on WhatsApp",
    href: "https://wa.me/917753058498",
  },
  {
    key: "mail",
    tone: "violet",
    Icon: MailIcon,
    label: "Send us a mail",
    href: "mailto:contact@vidrow.in",
  },
  // the offices, each with its full address under the city
  ...OFFICES.map((o, i) => ({
    key: o.key,
    tone: i % 2 ? "violet" : "acid",
    Icon: LocationIcon,
    label: o.city,
    address: o.address,
    href: o.map,
  })),
];

export default function ContactPage() {
  return (
    <>
      <main className="contact sec">
        <header className="hx-bar hx-bar--page">
          <SiteNav logoHref="/" />
        </header>

        <div className="wrap contact-in">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="contact-head">
                <h1 className="d1">Connect with us</h1>
                <p className="contact-sub">
                  We work alongside founders with an analytical mindset. If you think you&apos;re a
                  fit, here&apos;s how to reach us.
                </p>
              </div>

              <div className="contact-links">
                {CONTACT_LINKS.map(({ key, tone, Icon, label, address, href }) => (
                  <a
                    key={key}
                    className={`contact-link${address ? " contact-link--addr" : ""}`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={`contact-link-icon contact-link-icon--${tone}`}>
                      <Icon />
                    </span>
                    {address ? (
                      <span className="contact-addr">
                        <span className="contact-addr-city">{label}</span>
                        <span className="contact-addr-text">{address}</span>
                      </span>
                    ) : (
                      label
                    )}
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>

      <Footer hideContactCta />
    </>
  );
}
