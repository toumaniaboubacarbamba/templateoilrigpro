import Reveal from "./Reveal";
import { Gear } from "./Icons";

const WORDS = ["Drillr", "Petros", "Offrig", "SeaRig"];

export default function Lenders() {
  const loop = [...WORDS, ...WORDS, ...WORDS];
  return (
    <section className="lenders">
      <div className="lenders-clouds" />
      <div className="lenders-marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...loop, ...loop].map((w, i) => (
            <span key={i}>{w}</span>
          ))}
        </div>
      </div>
      <img className="lenders-rig" src="/images/rig.webp" alt="Plateforme offshore" />
      <div className="container lenders-text">
        <Reveal>
          <span className="eyebrow">Trusted by Lenders</span>
          <h2 className="title-xl">Industry Lenders Worldwide</h2>
          <p>High-performance services across the oil and gas value.</p>
          <a href="#" className="btn btn-primary btn-md">
            Explore Oilrig <Gear />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
