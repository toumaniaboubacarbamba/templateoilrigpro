import Reveal from "./Reveal";

const MAP_SRC = "https://www.google.com/maps?q=London+Eye,+London,+United+Kingdom&output=embed";

// Section « Drop Us a Line » (formulaire + carte)
export default function ContactSection({ id }) {
  return (
    <section className="contact-form-section" id={id}>
      <div className="container contact-form-grid">
        <Reveal className="cf-left">
          <span className="eyebrow">Drop Us a Line</span>
          <h2 className="title-xl">Reach Out to Us Anytime</h2>
          <p className="cf-intro">Get in touch to discuss your employee wellbeing needs today.</p>
          <form className="cf-form" action="#">
            <label>Your name<input type="text" /></label>
            <label>Your email<input type="email" /></label>
            <label>Phone number<input type="tel" /></label>
            <label>Your subject<input type="text" /></label>
            <label className="full">Your message (optional)<textarea rows={5} /></label>
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
  );
}
