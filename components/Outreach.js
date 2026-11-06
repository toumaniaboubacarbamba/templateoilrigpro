import Counter from "./Counter";
import Reveal from "./Reveal";
import { Pin } from "./Icons";

const PINS = [
  { x: 14, y: 56, label: "200,000 - barrels", show: true },
  { x: 25, y: 40, label: "400,000 - barrels", show: true },
  { x: 20, y: 72, label: "100,000 - barrels" },
  { x: 29, y: 70, label: "300,000 - barrels" },
];

export default function Outreach() {
  return (
    <section className="outreach">
      <div className="container outreach-grid">
        <Reveal className="outreach-left">
          <span className="eyebrow">Global Outreach</span>
          <h2 className="title-xl">Fueling Progress, One Barrel at a Time</h2>
          <div className="map">
            <img src="/images/world-map.webp" alt="Carte du monde" />
            {PINS.map((p) => (
              <div key={p.label} className={`pin ${p.show ? "show" : ""}`} style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                <span className="pin-tip">{p.label}</span>
                <Pin />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="outreach-right" delay={120}>
          <div className="big-number">
            500,000 <em>+</em> <small>Barrels</small>
          </div>
          <p>Delivering consistent energy output through strategic operations, advanced technology, and reliable global production performance.</p>

          <div className="stat-row">
            <h3><Counter to={340} /></h3>
            <span className="line" />
            <div>
              <h5>Completed Drilling Projects</h5>
              <p>Successfully executed drilling projects with precision planning, safety compliance, and operational.</p>
            </div>
          </div>
          <div className="stat-row">
            <h3><Counter to={500} /></h3>
            <span className="line" />
            <div>
              <h5>Skilled Field Professionals</h5>
              <p>Highly trained industry experts ensuring safe operations, technical accuracy, and dependable.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
