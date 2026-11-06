import Reveal from "./Reveal";
import { Facebook, Mail, Phone, Twitter, Wordpress, Youtube } from "./Icons";

// Rangée de 3 blocs : adresse, coordonnées, photo (utilisée sur Contact et FAQ)
export default function ContactInfo({ image, imageAlt = "Camion-citerne" }) {
  return (
    <section className="contact-info">
      <div className="container contact-info-grid">
        <Reveal className="ci-card ci-light">
          <span className="eyebrow">Location</span>
          <h2>Find Us</h2>
          <p>132, Tic St, Kingston Mark, New York 12401, United States of America.</p>
          <div className="ci-social">
            <a href="#" aria-label="Facebook"><Facebook size={17} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={17} /></a>
            <a href="#" aria-label="Youtube"><Youtube size={17} /></a>
            <a href="#" aria-label="WordPress"><Wordpress size={17} /></a>
          </div>
        </Reveal>

        <Reveal className="ci-card ci-dark" delay={120}>
          <span className="eyebrow">We Are Here</span>
          <h2>We Are Here</h2>
          <a href="tel:+15284567592" className="ci-line">
            <Phone /> <span>+ 1 (528) 456-7592</span>
          </a>
          <a href="mailto:info@oilrigpro.com" className="ci-line">
            <Mail /> <span>info@oilrigpro.com</span>
          </a>
        </Reveal>

        <Reveal className="ci-photo" delay={240}>
          <img src={image} alt={imageAlt} />
        </Reveal>
      </div>
    </section>
  );
}
