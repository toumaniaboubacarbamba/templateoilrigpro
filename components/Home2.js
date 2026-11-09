import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight, Calendar, Gear, IconFolder } from "./Icons";
import { PROJECTS } from "@/data/portfolio";
import { POSTS } from "@/data/posts";

const STEPS = [
  { n: "01.", t: "Exploration & Site Development", d: "We conduct detailed geological assessments and site planning to ensure efficient resource extraction and operational readiness from day one." },
  { n: "02.", t: "Offshore Drilling Operations", d: "Our advanced drilling solutions are designed to enhance precision, safety, and performance in complex offshore environments." },
  { n: "03.", t: "Processing Management", d: "We optimize hydrocarbon production systems to improve output efficiency while maintaining strict safety and compliance standards." },
  { n: "04.", t: "Maintenance & Asset Integrity", d: "Our preventive maintenance and asset monitoring solutions ensure long-term operational reliability and reduced downtime." },
];

const SERVICES = [
  { t: "Field Services", d: "Comprehensive pipeline services supporting safe and sustainable energy delivery.", img: "/images/service-3.webp", icon: "/images/svc-icon-6.webp" },
  { t: "Pipeline Experts", d: "Pipeline design, installation, and management for safe energy transport systems.", img: "/images/service-2.webp", icon: "/images/svc-icon-1.webp" },
  { t: "Gas Solutions", d: "Advanced gas processing, compression, and for optimized plant performance.", img: "/images/service-1.webp", icon: "/images/svc-icon-3.webp" },
];

const FEATURES = [
  { t: "On-Time Delivery", icon: "/images/h2-icon-barrels.webp" },
  { t: "Global Operations", icon: "/images/svc-icon-6.webp" },
  { t: "Powers Success", icon: "/images/svc-icon-2.webp" },
  { t: "Field Energy", icon: "/images/svc-icon-1.webp" },
];

const BLOG = ["oil-and-gas-operations-overview", "oil-exploration-and-drilling-operations-2", "upstream-oil-and-gas-operations", "pipeline-operations-in-oil-industry"].map((s) => POSTS.find((p) => p.slug === s));

export default function Home2() {
  return (
    <main className="home2">
      {/* Hero */}
      <section className="h2-hero" style={{ backgroundImage: "url(/images/h2-hero.webp)" }}>
        <div className="h2-hero-shade" />
        <div className="h2-hero-content">
          <p className="h2-eyebrow">Engineering Systems</p>
          <h1>Precision Engineering for Energy Growth</h1>
          <p className="h2-hero-text">Delivering safe, reliable, and performance-driven oilfield solutions worldwide.</p>
          <Link href="/services-default" className="btn btn-primary btn-lg">Explore Services <Gear /></Link>
        </div>
      </section>
      <div className="h2-band" />

      {/* Ingénierie avancée */}
      <section className="h2-about">
        <div className="container h2-about-grid">
          <Reveal className="h2-cutout"><img src="/images/h2-cutout.webp" alt="Ingénieure et plateforme pétrolière" /></Reveal>
          <Reveal className="h2-about-text" delay={120}>
            <span className="eyebrow">Engineering Systems</span>
            <h2 className="title-xl">Advanced Engineering for Oilfield Performance</h2>
            <p className="h2-lead">Delivering reliable, safety-focused, and high-efficiency engineering solutions.</p>
            <div className="h2-steps">
              {STEPS.map((s) => (
                <div className="h2-step" key={s.n}>
                  <h5><span>{s.n}</span> {s.t}</h5>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn btn-primary btn-md">About Our Company <Gear /></Link>
          </Reveal>
        </div>
      </section>

      {/* Services de bout en bout */}
      <section className="h2-services">
        <div className="container">
          <Reveal className="h2-center">
            <span className="eyebrow">End-to-End Services</span>
            <h2 className="title-xl light">Operational Excellence in Oil &amp; Gas Projects</h2>
          </Reveal>
          <div className="h2-svc-grid">
            {SERVICES.map((s, i) => (
              <Reveal className="h2-svc" key={s.t} delay={i * 110}>
                <div className="h2-svc-img">
                  <img src={s.img} alt={s.t} />
                  <span className="h2-svc-icon"><img src={s.icon} alt="" /></span>
                </div>
                <h4>{s.t}</h4>
                <hr />
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Opérations durables */}
      <section className="h2-sustain">
        <div className="container h2-sustain-grid">
          <Reveal className="h2-person" >
            <img src="/images/h2-worker.webp" alt="" />
            <div className="h2-person-card">
              <div>
                <h5>Dr. Kevin Morra</h5>
                <p>Chiropractor</p>
              </div>
              <div className="h2-avatars">
                {[1, 2, 3, 4].map((n) => (<img key={n} src={`/images/h2-av-${n}.webp`} alt="" />))}
              </div>
            </div>
          </Reveal>
          <Reveal className="h2-sustain-text" delay={120}>
            <span className="eyebrow">Sustainable Operations</span>
            <h2 className="title-xl">Sustainable Energy with Operational Integrity</h2>
            <p className="h2-lead">We combine sustainable engineering practices with strict operational standards to deliver safe, efficient, and environmentally responsible oilfield solutions. Our approach ensures regulatory compliance, optimized resource usage, and long-term performance.</p>
            <img className="h2-valve" src="/images/h2-valve.webp" alt="" />
            <Link href="/service/end-to-end-oil-and-gas-solutions" className="btn btn-primary btn-md">Sustainable Solutions <Gear /></Link>
          </Reveal>
        </div>
      </section>

      {/* Exécution de projets */}
      <section className="h2-exec">
        <div className="h2-exec-dark" />
        <div className="container">
          <Reveal className="h2-exec-head">
            <div>
              <span className="eyebrow">Proven Project Execution</span>
              <h2 className="title-xl">Delivering Performance Across Oilfield Projects</h2>
            </div>
            <p>We execute complex oilfield and infrastructure projects with precision, safety compliance, and operational efficiency. Our team ensures performance and cost control, and reliable delivery across upstream and midstream energy developments.</p>
          </Reveal>
          <div className="h2-feat-grid">
            {FEATURES.map((f, i) => (
              <Reveal className="h2-feat" key={f.t} delay={i * 90}>
                <img src={f.icon} alt="" />
                <h4>{f.t}</h4>
              </Reveal>
            ))}
          </div>
          <div className="h2-video" aria-hidden="true" />
        </div>
      </section>

      {/* Portfolio */}
      <section className="h2-portfolio">
        <div className="container">
          <Reveal className="h2-center">
            <span className="eyebrow">Our Portfolio</span>
            <h2 className="title-xl navy-dark">Operational Excellence Across Energy</h2>
          </Reveal>
          <div className="h2-pf-grid">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 110}>
                <Link href={`/portfolio/${p.slug}`} className="h2-pf"><img src={p.portrait} alt={p.title} /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="h2-blog">
        <div className="container h2-blog-grid">
          <Reveal className="h2-blog-left">
            <span className="eyebrow">Our Blog</span>
            <h2 className="title-xl">Oilfield Engineering Technology</h2>
            <p>Engineering advancements, and operational strategies shaping the oil and gas industry. Explore expert perspectives on efficiency, safety standards, and modern infrastructure development.</p>
            <ul>
              <li>Safety is at the core of everything we do</li>
              <li>Our team of skilled engineers and technical</li>
              <li>We adhere to rigorous quality control</li>
            </ul>
            <Link href="/blog" className="btn btn-primary btn-md">Explore All Articles <Gear /></Link>
          </Reveal>
          <div className="h2-blog-list">
            {BLOG.map((p, i) => (
              <Reveal className="h2-post" key={p.slug} delay={i * 80}>
                <Link href={`/blog/${p.slug}`} className="h2-post-img"><img src={p.img} alt={p.title} /></Link>
                <div>
                  <div className="h2-post-meta">
                    <span><Calendar size={13} /> {p.date}</span>
                    <span><IconFolder size={15} /> {p.category}</span>
                  </div>
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
