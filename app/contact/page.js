import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { WhatsappIcon, CalendarIcon, LocationIcon, CornerArrow } from "../components/ContactIcons";

export const metadata = {
  title: "Contact — Vidrow",
};

const CONTACT_CARDS = [
  {
    key: "whatsapp",
    tone: "acid",
    Icon: WhatsappIcon,
    title: "Whatsapp",
    desc: "Ping us and we will respond quickly",
    href: "https://wa.me/911234567890",
  },
  {
    key: "call",
    tone: "violet",
    Icon: CalendarIcon,
    title: "Call",
    desc: "Schedule a call and talk",
    href: "mailto:hello@vidrow.com",
  },
  {
    key: "location",
    tone: "acid",
    Icon: LocationIcon,
    title: "Location",
    desc: "Schedule a call and talk",
    href: "https://maps.google.com/?q=Mumbai,India",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="contact sec">
        <header className="hx-bar">
          <SiteNav logoHref="/" />
        </header>

        <div className="wrap contact-in">
          <div className="contact-head">
            <h1 className="d1">Connect with us</h1>
            <p className="lead contact-sub">
              We work alongside founders with an analytical mindset. If you think you&apos;re a
              fit, here&apos;s how to reach us.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-cards">
              {CONTACT_CARDS.map(({ key, tone, Icon, title, desc, href }) => (
                <a
                  key={key}
                  className={`contact-card contact-card--${tone}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-card-fill" aria-hidden="true" />
                  <span className="contact-card-icon">
                    <Icon />
                  </span>
                  <span className="contact-card-body">
                    <b>{title}</b>
                    <span>{desc}</span>
                  </span>
                  <span className="contact-card-arrow">
                    <CornerArrow />
                  </span>
                </a>
              ))}
            </div>

            <ContactForm />
          </div>
        </div>
      </main>

      <Footer hideCta />
    </>
  );
}
