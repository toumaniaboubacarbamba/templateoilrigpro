import Reveal from "./Reveal";
import { ArrowUpRight } from "./Icons";

const ITEMS = [
  { t: "Drilling Operations", d: "Advanced drilling solutions ensuring safe, efficient, and precise well execution across onshore and offshore projects.", img: "service-1.webp" },
  { t: "Field Development", d: "Strategic field development services enhancing reservoir performance and optimizing long-term production efficiency.", img: "service-2.webp" },
  { t: "Pipeline Operations", d: "Reliable pipeline management ensuring safe transport, operational efficiency, and continuous energy distribution.", img: "service-3.webp" },
  { t: "Integrated Operations", d: "Integrated engineering solutions improving coordination, productivity, and overall operational performance.", img: "service-4.webp" },
];

function Card({ item }) {
  return (
    <div className="svc-card">
      <h4>{item.t}</h4>
      <hr />
      <p>{item.d}</p>
      <a href="#" className="svc-arrow" aria-label={item.t}>
        <ArrowUpRight />
      </a>
    </div>
  );
}
function Pic({ item }) {
  return (
    <div className="svc-pic">
      <img src={`/images/${item.img}`} alt={item.t} />
    </div>
  );
}

export default function Services({ plain = false }) {
  const [a, b, c, d] = ITEMS;
  return (
    <section className={`services ${plain ? "plain" : ""}`}>
      <div className="container services-grid">
        <Reveal className="svc-cell"><Card item={a} /></Reveal>
        <Reveal className="svc-cell" delay={80}><Pic item={a} /></Reveal>
        <Reveal className="svc-cell" delay={160}><Card item={b} /></Reveal>
        <Reveal className="svc-cell" delay={240}><Pic item={b} /></Reveal>
        <Reveal className="svc-cell"><Pic item={c} /></Reveal>
        <Reveal className="svc-cell" delay={80}><Card item={c} /></Reveal>
        <Reveal className="svc-cell" delay={160}><Pic item={d} /></Reveal>
        <Reveal className="svc-cell" delay={240}><Card item={d} /></Reveal>
      </div>
    </section>
  );
}
