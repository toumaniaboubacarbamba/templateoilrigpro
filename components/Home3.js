import Link from "next/link";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { ArrowRight, ArrowUpRight, Calendar, Gear } from "./Icons";
import { POSTS } from "@/data/posts";

const BLOG = ["oil-exploration-and-drilling-operations", "energy-transportation-and-pipeline", "upstream-oil-and-gas-operations"].map((s) => POSTS.find((p) => p.slug === s));

const MARKETS = [["Brazil", 98], ["Indonesia", 90], ["Saudi Arabia", 80], ["Mexico", 60]];

export default function Home3() {
  return (
    <main className="home3">
      {/* Hero */}
      <section className="h3-hero" style={{ backgroundImage: "url(/images/h3-hero.webp)" }}>
        <div className="h3-hero-fade" />
        <div className="h3-offshore" aria-label="Offshore">
          {"Offshore".split("").map((c, i) => (<span key={i} style={{ animationDelay: `${i * 90}ms` }}>{c}</span>))}
        </div>
      </section>

      {/* Ingénierie : fond sombre + 2 cartes */}
      <section className="h3-power">
        <div className="container">
          <Reveal className="h3-power-head">
            <div>
              <span className="eyebrow">Maximum Power</span>
              <h2 className="title-xl light">Advancing Engineering Across Energy Operations</h2>
            </div>
            <p>We apply advanced engineering methods and modern technologies to improve performance, reliability, and efficiency across complex oilfield operations.</p>
          </Reveal>
          <div className="h3-cards">
            {[
              { t: "Offshore Drilling Platform", d: "Improving system efficiency through precision-driven engineering solutions.", img: "/images/h3-bit-1.webp" },
              { t: "High Performance Rig Module", d: "Improving drilling reliability and equipment output with advanced technical support.", img: "/images/h3-bit-2.webp" },
            ].map((c, i) => (
              <Reveal className="h3-card" key={c.t} delay={i * 120}>
                <div className="h3-card-text">
                  <h4>{c.t}</h4>
                  <p>{c.d}</p>
                  <Link href="/service-classic-pro" className="h3-sq" aria-label={c.t}><ArrowUpRight size={18} /></Link>
                </div>
                <img src={c.img} alt={c.t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="h3-lead">
        <div className="container h3-lead-grid">
          <Reveal><img className="h3-lead-img" src="/images/h3-leader.webp" alt="Ouvrier sur une plateforme" /></Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Energy Technologies</span>
            <h2 className="title-xl">Global Leadership in Oilfield Excellence</h2>
            <p className="h3-p">Delivering trusted engineering solutions across international oil and gas markets. Maintaining strict safety standards and operational reliability. Building long-term partnerships through performance-driven results.</p>
            <div className="h3-feature"><img src="/images/h3-icon-rig.webp" alt="" /><div><h5>Certified Engineering Teams</h5><p>Consistent execution across complex oilfield operations.</p></div></div>
            <div className="h3-feature"><img src="/images/h3-icon-tanker.webp" alt="" /><div><h5>Proven Project Delivery</h5><p>Experienced professionals ensuring safety and precision.</p></div></div>
            <Link href="/about" className="btn btn-primary btn-md">Our Expertise <Gear /></Link>
          </Reveal>
        </div>
      </section>

      {/* Future of Energy : stats */}
      <section className="h3-future">
        <div className="container h3-future-grid">
          <Reveal className="h3-f-head">
            <span className="eyebrow">Future of Energy</span>
            <h2 className="title-xl">Advanced Oilfield Infrastructure Solutions</h2>
            <p className="h3-p">Implement scalable infrastructure systems that improve operational efficiency, ensure asset reliability, and support long-term performance across upstream and midstream oilfield projects.</p>
          </Reveal>
          <Reveal className="h3-stat s1"><img src="/images/h3-stat-tanker.webp" alt="" /><div><strong>+35%</strong><span>Production Efficiency Increase</span></div></Reveal>
          <Reveal className="h3-stat s2" delay={100}><img src="/images/h3-stat-refinery.webp" alt="" /><div><strong>99.2%</strong><span>Operational Reliability Rate</span></div></Reveal>
          <Reveal className="h3-stat s3" delay={150}><div className="r"><strong>-28%</strong><span>Operational Cost Reduction</span></div><img src="/images/h3-stat-pump.webp" alt="" /></Reveal>
          <Reveal className="h3-stat s4" delay={200}><div className="r"><strong>150M+</strong><span>Barrels Managed Annually</span></div><img src="/images/h3-stat-ship.webp" alt="" /></Reveal>
        </div>
      </section>

      {/* Carte du monde */}
      <section className="h3-map">
        <div className="container h3-map-grid">
          <Reveal className="h3-map-head">
            <span className="eyebrow">Global Energy Footprint</span>
            <h2 className="title-xl light">Delivering Energy Solutions Worldwide</h2>
            <Link href="/about" className="btn btn-primary btn-md">Explore Markets <Gear /></Link>
          </Reveal>
          <ul className="h3-markets">
            {MARKETS.map(([n, v]) => (
              <li key={n}>
                <div><span>{n}</span><b>{v}%</b></div>
                <i><u style={{ width: `${v}%` }} /></i>
              </li>
            ))}
          </ul>
          <img className="h3-worldmap" src="/images/h3-world-map.png" alt="Carte du monde" />
          <div className="h3-rig">
            <img src="/images/h3-rig-line.webp" alt="" />
            <ul>
              <li>Rig Operational Excellence</li>
              <li>Oil Rig Operational Excellence</li>
              <li>Excellence in Rig Operations</li>
            </ul>
          </div>
          <div className="h3-invest">
            <strong><Counter to={90} suffix="%" /></strong>
            <h4>Total Global investments (₽)</h4>
            <p>Supporting the International Oil &amp; Gas Operations.</p>
          </div>
        </div>
      </section>

      {/* Trusted worldwide */}
      <section className="h3-trust">
        <div className="container h3-trust-grid">
          <Reveal>
            <span className="eyebrow">Trusted Worldwide</span>
            <h2 className="title-xl">Proven Expertise in Oilfield Operations</h2>
            <p className="h3-p">Delivering high-performance engineering solutions across demanding oilfield environments. With decades of industry experience, we ensure operational excellence, regulatory compliance, and sustainable energy project execution.</p>
            <Link href="/service" className="btn btn-primary btn-md">Our Oilfield Services <Gear /></Link>
          </Reveal>
          <div className="h3-counters">
            <Reveal className="h3-count c1"><strong><Counter to={25} /></strong><h5>Years of Proven Excellence</h5><p>Delivering trusted engineering solutions worldwide.</p></Reveal>
            <Reveal className="h3-count c2" delay={120}><strong><Counter to={50} /></strong><h5>Decades of Energy Expertise</h5><p>Supporting complex oil and gas developments.</p></Reveal>
          </div>
        </div>
      </section>

      {/* Deux bandeaux 50/50 */}
      <section className="h3-split">
        <div className="h3-split-row grey">
          <img src="/images/h3-safety.webp" alt="" />
          <Reveal className="h3-split-text">
            <h2 className="title-xl">Committed to Rig Safety &amp; Structural Integrity</h2>
            <p className="h3-p">Delivering disciplined safety practices and certified engineering processes across drilling operations to ensure secure, compliant, and high-performance oilfield environments.</p>
            <Link href="/about" className="btn btn-primary btn-md">Our Safety Approach <Gear /></Link>
          </Reveal>
        </div>
        <div className="h3-split-row white">
          <img src="/images/pf-oil-sphere.webp" alt="" />
          <Reveal className="h3-split-text">
            <img className="h3-splash" src="/images/h3-splash.webp" alt="" />
            <h2 className="title-xl">Protecting Assets. Ensuring Performance.</h2>
            <p className="h3-p">Implementing strict safety protocols and precision maintenance practices to safeguard critical oilfield systems and enhance operational reliability.</p>
            <Link href="/service" className="btn btn-primary btn-md">View Our Capabilities <Gear /></Link>
          </Reveal>
        </div>
      </section>

      {/* Blog */}
      <section className="h3-blog">
        <div className="container">
          <Reveal className="h2-center">
            <span className="eyebrow">Next-Generation Blog</span>
            <h2 className="title-xl navy-dark">Technology Transforming Energy Operations</h2>
          </Reveal>
          <div className="h3-blog-grid">
            {BLOG.map((p, i) => (
              <Reveal className="h3-post" key={p.slug} delay={i * 110}>
                <Link href={`/blog/${p.slug}`} className="h3-post-img"><img src={p.img} alt={p.title} /></Link>
                <div className="h3-post-box">
                  <span className="h3-date"><Calendar size={13} /> {p.date}</span>
                  <h4><Link href={`/blog/${p.slug}`}>{p.title}</Link></h4>
                  <Link href={`/blog/${p.slug}`} className="read-more">Read More <ArrowRight /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
