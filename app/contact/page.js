import PageBanner from "@/components/PageBanner";
import ContactInfo from "@/components/ContactInfo";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Contact US – Oilrigpro" };

// Carte intégrée (la démo d'origine affiche « London Eye »). Changez la requête q= pour votre adresse.
const MAP_SRC = "https://www.google.com/maps?q=London+Eye,+London,+United+Kingdom&output=embed";

export default function ContactPage() {
  return (
    <main>
      <PageBanner title="Contact US" crumbs={[{ label: "Contact US" }]} />
      <ContactInfo image="/images/contact-truck.webp" />

      <section className="contact-form-section">
        <div className="container contact-form-grid">
          <Reveal className="cf-left">
            <span className="eyebrow">Drop Us a Line</span>
            <h2 className="title-xl">Reach Out to Us Anytime</h2>
            <p className="cf-intro">Get in touch to discuss your employee wellbeing needs today.</p>
            <form className="cf-form" action="#">
              <label>
                Your name
                <input type="text" />
              </label>
              <label>
                Your email
                <input type="email" />
              </label>
              <label>
                Phone number
                <input type="tel" />
              </label>
              <label>
                Your subject
                <input type="text" />
              </label>
              <label className="full">
                Your message (optional)
                <textarea rows={5} />
              </label>
              <div className="full">
                <button type="button" className="btn btn-primary btn-md">Get In Touch</button>
              </div>
            </form>
          </Reveal>

          <Reveal className="cf-map" delay={150}>
            <iframe title="Carte" src={MAP_SRC} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
