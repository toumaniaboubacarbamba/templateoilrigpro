import Counter from "./Counter";
import Reveal from "./Reveal";
import { Gear } from "./Icons";

export default function About() {
  return (
    <section className="about">
      <div className="container about-grid">
        <Reveal className="about-left">
          <span className="eyebrow">About Us</span>
          <h2 className="title-xl">Projects Completed &amp; Field Professionals</h2>
          <img className="about-tank" src="/images/about-tank.webp" alt="Réservoir de stockage" />
        </Reveal>

        <Reveal className="about-mid" delay={120}>
          <p className="about-intro">
            OilRigPro is a globally recognized oil and gas services provider specializing in exploration, drilling,
            pipeline construction, and operational management.
          </p>
          <h4 className="about-sub">Dedicated to Excellence in Oil and Gas Service</h4>
          <ul className="about-list">
            <li>Safety is at the core of everything we do</li>
            <li>Our team of skilled engineers and technical</li>
            <li>We adhere to rigorous quality control</li>
          </ul>
          <div className="about-stats">
            <div className="badge">
              <img src="/images/badge.webp" alt="" />
              <span>2500+ Employes</span>
            </div>
            <div className="stat">
              <h3>
                <Counter to={57} />
              </h3>
              <h5>Active Fields</h5>
            </div>
          </div>
        </Reveal>

        <Reveal className="about-right" delay={240}>
          <img className="about-worker" src="/images/about-worker.webp" alt="Technicien avec tablette" />
          <a href="#" className="btn btn-primary btn-md">
            Explore Our Capabilities <Gear />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
