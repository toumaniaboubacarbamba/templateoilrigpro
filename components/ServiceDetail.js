"use client";
import { useState } from "react";
import Link from "next/link";
import PageBanner from "./PageBanner";
import { ArrowUpLeft, ArrowUpRight, Drop } from "./Icons";
import { SERVICES } from "@/data/services";

const STEPS = [
  { n: "01", t: "Exploration & Site Development", d: "We conduct detailed geological assessments and site planning to ensure efficient resource extraction and operational readiness from day one." },
  { n: "02", t: "Offshore Drilling Operations", d: "Our advanced drilling solutions are designed to enhance precision, safety, and performance in complex offshore environments." },
  { n: "03", t: "Processing Management", d: "We optimize hydrocarbon production systems to improve output efficiency while maintaining strict safety and standards." },
  { n: "04", t: "Maintenance & Asset Integrity", d: "Our preventive maintenance and asset monitoring solutions ensure long-term operational reliability and reduced downtime." },
];

const FAQS = [
  { q: "What services do you provide for offshore oil rigs?", a: "We provide drilling support, rig maintenance, production optimization, and operational management services. Our team ensures safe, efficient, and uninterrupted offshore performance. We focus on maximizing output while minimizing operational risks." },
  { q: "How do you ensure safety on oil rig operations?", a: "We apply strict international HSE standards, continuous crew training, regular audits and on-site safety supervision on every project." },
  { q: "Do you handle natural gas production facilities?", a: "Yes. We support natural gas production facilities from planning and commissioning to day-to-day operations and maintenance." },
  { q: "What makes your oil and gas solutions reliable?", a: "Proven engineering expertise, disciplined project management and advanced monitoring technology keep our operations consistent and dependable." },
  { q: "Can you manage large-scale offshore drilling projects?", a: "Absolutely. Our specialists oversee every stage of large offshore drilling projects with precision, control and strict quality standards." },
  { q: "What types of oil rigs do you support?", a: "We support jack-up, semi-submersible and fixed platform rigs, as well as onshore drilling installations." },
];

export default function ServiceDetail({ service, sidebar = false }) {
  const [open, setOpen] = useState(0);
  const idx = SERVICES.findIndex((x) => x.slug === service.slug);
  const prev = idx > 0 ? SERVICES[idx - 1] : null;
  const next = idx < SERVICES.length - 1 ? SERVICES[idx + 1] : null;

  return (
    <main>
      <PageBanner title={service.title} crumbs={sidebar ? [{ label: service.title }] : [{ label: "Service", href: "/service" }, { label: service.title }]} />
      <section className="svc-detail">
        <div className={`container svc-detail-grid ${sidebar ? "" : "full"}`}>
          {sidebar && (
          <aside className="svc-side">
            <h4>
              <Drop size={16} /> Our Services
            </h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug} className={s.slug === service.slug ? "on" : ""}>
                  <span className="side-arrow"><ArrowUpRight size={12} /></span>
                  <Link href={`/service/${s.slug}`}>{s.short}</Link>
                </li>
              ))}
            </ul>
          </aside>
          )}

          <div className="svc-main">
            <img className="svc-hero-img" src={service.img} alt={service.title} />
            <h3>Integrated Offshore &amp; Oilfield Operations</h3>
            <p>
              Our offshore drilling and oilfield services are engineered to support safe, efficient, and high-performance energy production. We
              manage exploration planning, rig deployment, well operations, and infrastructure maintenance with technical expertise and
              operational discipline.
            </p>
            <p>
              We deliver end-to-end offshore and oilfield service solutions focused on operational excellence and long-term performance. From
              site evaluation and rig mobilization to drilling execution and production management, our specialists oversee every stage with
              precision and control. Through advanced technology integration and strict safety standards, we maintain consistent output,
              minimize risk, and ensure dependable operations across challenging offshore and gas field environments.
            </p>

            <div className="steps">
              {STEPS.map((s, i) => (
                <div key={s.n} className={`step ${i === 1 ? "rowline" : ""}`}>
                  <div className="step-head">
                    <span className="step-n">{s.n} .</span>
                    <h5>{s.t}</h5>
                  </div>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>

            <h3 className="faq-h">Frequently Asked Questions</h3>
            <div className="svc-faq">
              {FAQS.map((f, i) => (
                <div key={f.q} className={`sf-item ${open === i ? "open" : ""}`}>
                  <button className="sf-head" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                    <span>{i + 1}. {f.q}</span>
                    <i aria-hidden="true" />
                  </button>
                  <div className="sf-body">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>

            {!sidebar && (
              <div className="svc-nav">
                {prev ? (
                  <Link href={`/service/${prev.slug}`} className="prev-btn">
                    <ArrowUpLeft /> {prev.title}
                  </Link>
                ) : <span />}
                {next ? (
                  <Link href={`/service/${next.slug}`} className="prev-btn">
                    {next.title} <ArrowUpRight />
                  </Link>
                ) : <span />}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
