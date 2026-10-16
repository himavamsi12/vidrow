import SiteNav from "../components/SiteNav";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { WhatsappIcon, CalendarIcon, LocationIcon, CornerArrow } from "../components/ContactIcons";

export const metadata = {
  title: "Contact - Vidrow",
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
    key: "call",
    tone: "violet",
    Icon: CalendarIcon,
    label: "Set up a call",
    href: "mailto:contact@vidrow.in",
  },
  {
    key: "location",
    tone: "acid",
    Icon: LocationIcon,
    label: "View Maps",
    // Sakti Statesman, Bengaluru
    href: "https://www.google.com/maps/place/Sakti+Statesman/@12.9239742,77.6675882,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1377b38e323f:0xde910e0686a4adac!8m2!3d12.9239742!4d77.6675882!16s%2Fg%2F11f3jg_5h3",
  },
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
                {CONTACT_LINKS.map(({ key, tone, Icon, label, href }) => (
                  <a
                    key={key}
                    className="contact-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={`contact-link-icon contact-link-icon--${tone}`}>
                      <Icon />
                    </span>
                    {label}
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
