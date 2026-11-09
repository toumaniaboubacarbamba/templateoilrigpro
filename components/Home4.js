import Link from "next/link";
import Reveal from "./Reveal";
import Counter from "./Counter";
import ServiceCards from "./ServiceCards";
import Faq from "./Faq";
import Blog from "./Blog";
import { Gear, Medal, Phone } from "./Icons";
import { PROJECTS } from "@/data/portfolio";

const LIST = ["Smart Energy Systems", "Industrial Optimization", "Reliable Infrastructure", "Sustainable Innovation"];

export default function Home4() {
  const loop = [...PROJECTS, ...PROJECTS];
  return (
    <main className="home4">
      {/* Hero */}
      <section className="h4-hero">
        <div className="h4-hero-top">
          <p className="h4-eyebrow">Fueling Industrial Growth</p>
          <h1 className="h4-giant" style={{ backgroundImage: "url(/images/h4-hero.webp)" }}>Energy Transport</h1>
        </div>
        <div className="h4-hero-img" style={{ backgroundImage: "url(/images/h4-hero.webp)" }}>
          <div className="h4-hero-cards">
            <div className="h4-hc dark"><h4>Skilled Field Professionals</h4><strong><Counter to={10} /></strong></div>
            <div className="h4-hc orange"><h4>Marine Cargo Operations</h4><strong><Counter to={10} /></strong></div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="h4-about">
        <img className="h4-splash" src="/images/h3-splash.webp" alt="" />
        <div className="container h4-about-grid">
          <Reveal className="h4-about-left">
            <span className="eyebrow">Powering Industries Worldwide</span>
            <h2 className="title-xl">Engineering Sustainable Energy for Tomorrow</h2>
          </Reveal>
          <Reveal className="h4-about-mid" delay={100}>
            <img src="/images/h2-cutout.webp" alt="Ingénieure et plateforme" />
            <div className="h4-cta">
              <Link href="/about" className="btn btn-primary btn-md">Explore Our Company <Gear /></Link>
              <a href="tel:+15284567592" className="h4-phone"><Phone size={18} /> + 1 (528) 456-7592</a>
            </div>
          </Reveal>
          <Reveal className="h4-about-right" delay={200}>
            <p>Our commitment to innovation ensures every project meets global standards of safety, sustainability, and performance.</p>
            <ol>
              {LIST.map((l, i) => (
                <li key={l}><span>0{i + 1}.</span> {l}</li>
              ))}
            </ol>
            <div className="h4-award"><img src="/images/h4-badge.webp" alt="" /><span>Best Rated Landscaping Company 2025</span></div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="h4-services">
        <div className="container">
          <Reveal className="h2-center">
            <span className="eyebrow">Services</span>
            <h2 className="title-xl light">Powering Energy Through Expert Services</h2>
          </Reveal>
        </div>
        <ServiceCards variant="modern" />
      </section>

      {/* Cadre opérationnel */}
      <section className="h4-frame">
        <div className="container">
          <Reveal className="h4-frame-head">
            <div>
              <span className="eyebrow">Operational Framework</span>
              <h2 className="title-xl">A Strategic Approach to Energy &amp; Logistics</h2>
            </div>
            <Link href="/about" className="btn btn-primary btn-md">Explore Our Benifits <Gear /></Link>
          </Reveal>
          <div className="h4-frame-stage">
            <div className="h4-floor" style={{ backgroundImage: "url(/images/h4-floor.webp)" }} />
            <img className="h4-truck" src="/images/h4-truck.webp" alt="Camion-citerne" />
            <div className="h4-f f1"><Medal size={24} /><div><h5>Smart Planning</h5><p>Clear strategies built on data and industry expertise.</p></div></div>
            <div className="h4-f f2"><Medal size={24} /><div><h5>Efficient Transport</h5><p>Optimized distribution with safety-focused systems.</p></div></div>
            <div className="h4-f f3"><Medal size={24} /><div><h5>Trusted Delivery</h5><p>Reliable execution backed by quality control.</p></div></div>
          </div>
        </div>
      </section>

      {/* Portfolio défilant */}
      <section className="h4-portfolio">
        <div className="container">
          <Reveal className="h4-pf-head">
            <div>
              <span className="eyebrow">Our Portfolio</span>
              <h2 className="title-xl">Driving Innovation In Global Energy</h2>
            </div>
            <Link href="/portfolio" className="btn btn-primary btn-md">View All Gallery <Gear /></Link>
          </Reveal>
        </div>
        <div className="h4-marquee">
          <div className="h4-track">
            {loop.map((p, i) => (
              <Link key={i} href={`/portfolio/${p.slug}`} className="h4-pf"><img src={p.img} alt={p.title} /></Link>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <Blog />
    </main>
  );
}
