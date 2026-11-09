import Link from "next/link";
import Reveal from "./Reveal";
import Counter from "./Counter";
import TeamCarousel from "./TeamCarousel";
import Testimonials5 from "./Testimonials5";
import { ArrowRight, Gear } from "./Icons";
import { SERVICES } from "@/data/services";
import { POSTS } from "@/data/posts";
import { TEAM } from "@/data/team";

const BARS = [["South America", 98], ["Southeast Asia", 95], ["Middle East", 90]];
const SKILLS = [["Operational Efficiency", 85], ["Project Success Rate", 95], ["Asset Reliability", 80]];
const PROJ = [
  ["Oil Sphere", "oil-sphere", "sphere"], ["Oil-Odyssey", "oil-odyssey", "odyssey"], ["Drill-Dynamics", "drill-dynamics", "drill"], ["Energy-Echo", "energy-echo", "echo"],
  ["Petro-Vision", "petro-vision", "petro"], ["Gas-Glide", "gas-glide", "gas"], ["Hydro-Core", "hydro-core", "hydro"], ["Fuel-Frontier", "fuel-frontier", "fuel"],
];
const BLOG = ["energy-transportation-and-pipeline", "oil-and-gas-safety-operations", "industrial-automation-in-oil-operations"].map((s) => POSTS.find((p) => p.slug === s));
const TEAM_ORDER = ["carlos-ramirez", "david-morgan", "karen-blake", "adam-lin", "mei-tanaka", "victor-ahmed"].map((s) => TEAM.find((m) => m.slug === s));

export default function Home5() {
  const svc = [...SERVICES, ...SERVICES];
  const proj = [...PROJ, ...PROJ];
  return (
    <main className="home5">
      {/* Hero */}
      <section className="h5-hero" style={{ backgroundImage: "url(/images/h5-hero.webp)" }}>
        <div className="h5-hero-shade" />
        <div className="h5-hero-content">
          <h1>Engineering Offshore Excellence</h1>
          <p>Innovative offshore services built for safety, and sustainable energy growth.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Start Your Project <Gear /></Link>
        </div>
        <div className="h5-bars">
          {BARS.map(([n, v]) => (
            <div className="h5-bar" key={n}>
              <span className="h5-bar-label">{n}</span>
              <div className="h5-bar-track"><i style={{ width: `${v}%` }} /><b>{v}%</b></div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="h5-expertise">
        <div className="h5-expertise-grid">
          <Reveal className="h5-exp-left">
            <span className="eyebrow">Our Expertise</span>
            <h2 className="title-xl navy-t">Delivering Energy Solutions With Excellence</h2>
            <p>We provide reliable and efficient energy services tailored to meet the demands of modern industries.</p>
            <Link href="/service" className="btn btn-primary btn-md">Explore Our Services <Gear /></Link>
          </Reveal>
          <div className="h5-exp-right">
            <div className="h5-svc-track">
              {svc.map((s, i) => (
                <article className="h5-svc" key={i}>
                  <Link href={`/service/${s.slug}`} className="h5-svc-img">
                    <img src={s.img} alt={s.title} />
                    <span className="h5-svc-icon"><img src={s.icon} alt="" /></span>
                  </Link>
                  <h4><Link href={`/service/${s.slug}`}>{s.title}</Link></h4>
                  <p>Integrated Offshore &amp; Oilfield Operations Our offshore drilling and oilfield services..</p>
                  <Link href={`/service/${s.slug}`} className="svc-more orange">Read More <ArrowRight size={16} /></Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous */}
      <section className="h5-who">
        <div className="container h5-who-grid">
          <Reveal className="h5-who-img">
            <img src="/images/h5-who.webp" alt="Ouvrier sur une plateforme" />
            <span className="h5-award"><img src="/images/h5-award.png" alt="MCA's Awards 2022" /></span>
          </Reveal>
          <Reveal className="h5-who-text" delay={120}>
            <span className="eyebrow">Who We Are</span>
            <h2 className="title-xl navy-t">Innovating the Future of Energy</h2>
            <p>With decades of industry experience, we deliver sustainable and performance-driven energy solutions. Our integrated approach ensures safety, efficiency, and long-term operational success.</p>
            <h5 className="h5-build">Building Reliable Energy Systems Worldwide</h5>
            <div className="h5-who-row">
              <div>
                <strong><Counter to={25} /></strong>
                <h6>Years of experience</h6>
                <Link href="/contact" className="btn btn-primary btn-md">Start Partnership <Gear /></Link>
              </div>
              <ul>
                <li>Smart Technology</li><li>Reliable Operations</li><li>Certified Standards</li><li>Strategic Planning</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projets */}
      <section className="h5-projects">
        <div className="container">
          <Reveal className="h5-proj-head">
            <div>
              <span className="eyebrow">Project Excellence</span>
              <h2 className="title-xl navy-t">Presenting Our Top Completed Projects</h2>
            </div>
            <p>We take pride in delivering high-quality solutions across complex operations, ensuring efficiency, safety, and long-term value for every client we serve.</p>
          </Reveal>
        </div>
        <div className="h5-marquee">
          <div className="h5-proj-track">
            {proj.map(([t, slug, key], i) => (
              <Link key={i} href={`/portfolio/${slug}`} className="h5-proj">
                <span className="h5-proj-img"><img src={`/images/h5-pf-${key}.webp`} alt={t} /></span>
                <h4>{t}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaire industriel */}
      <section className="h5-partner">
        <div className="container h5-partner-grid">
          <Reveal className="h5-partner-imgs">
            <img className="a" src="/images/h5-pipe.webp" alt="" />
            <img className="b" src="/images/about-worker.webp" alt="" />
          </Reveal>
          <Reveal className="h5-partner-text" delay={120}>
            <span className="eyebrow">Why Partner With Us</span>
            <h2 className="title-xl navy-t">Powering Industrial Success</h2>
            <p>We deliver high-impact industrial solutions through technical expertise, disciplined execution, and uncompromising safety standards. Our team ensures operational efficiency, asset reliability, and measurable results across every stage of the project lifecycle.</p>
            {SKILLS.map(([n, v]) => (
              <div className="h5-skill" key={n}>
                <h6>{n}</h6>
                <div className="h5-skill-track"><i style={{ width: `${v}%` }} /><b style={{ left: `${v}%` }}>{v}%</b></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Industriel */}
      <section className="h5-industrial">
        <div className="h5-ind-bg" style={{ backgroundImage: "url(/images/h5-steel.webp)" }}>
          <div className="h5-ind-fade" />
          <img className="h5-ship" src="/images/h5-ship.webp" alt="" />
        </div>
        <Reveal className="h5-ind-card">
          <span className="eyebrow">Industrial</span>
          <h2 className="title-xl light">Powering the Future of Energy</h2>
          <p>We deliver advanced industrial and energy solutions designed to optimize performance, enhance operational safety, and drive sustainable growth across complex environments.</p>
          <Link href="/service" className="btn btn-primary btn-md">Explore Our Capabilities <Gear /></Link>
        </Reveal>
      </section>

      <TeamCarousel eyebrow="Our Team" title="Industry Professionals" members={TEAM_ORDER} />

      {/* Témoignages */}
      <section className="h5-testi">
        <div className="container h5-testi-grid">
          <Reveal className="h5-testi-left">
            <span className="eyebrow">What Clients Say</span>
            <h2 className="title-xl navy-t">Energy Backed by Experience</h2>
            <Testimonials5 />
          </Reveal>
          <Reveal className="h5-testi-img" delay={120}><img src="/images/h5-testi.jpg" alt="Plateforme offshore" /></Reveal>
        </div>
      </section>

      {/* Blog */}
      <section className="h5-blog">
        <div className="container">
          <Reveal className="h5-blog-head">
            <div>
              <span className="eyebrow">Latest News &amp; Updates</span>
              <h2 className="title-xl navy-t">Innovating Energy Solutions for a Sustainable Tomorrow</h2>
            </div>
            <Link href="/blog" className="btn btn-primary btn-md">Explore Articles <Gear /></Link>
          </Reveal>
          <div className="h5-blog-grid">
            {BLOG.map((p, i) => (
              <Reveal className="h5-post" key={p.slug} delay={i * 110}>
                <Link href={`/blog/${p.slug}`} className="h5-post-img"><img src={p.img} alt={p.title} /></Link>
                <div className="h5-post-meta"><span><img src="/images/admin.png" alt="" /> admin</span><span>{p.date}</span></div>
                <h4><Link href={`/blog/${p.slug}`}>{p.title}</Link></h4>
                <Link href={`/blog/${p.slug}`} className="read-more">Read More <ArrowRight /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
