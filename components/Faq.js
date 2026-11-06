"use client";
import { useState } from "react";

const FAQS = [
  { q: "Clearing Doubts About Oil Production", a: "We ensure transparent operations, advanced technology, and responsible production practices to maintain efficiency, environmental care, and long-term sustainability." },
  { q: "What services do you offer?", a: "We cover exploration, drilling, field development, pipeline operations and integrated engineering across onshore and offshore projects." },
  { q: "Do you handle offshore projects?", a: "Yes. Our teams operate offshore platforms worldwide with dedicated safety, logistics and engineering support." },
  { q: "What safety standards do you follow?", a: "We follow strict international HSE standards, with continuous training, audits and on-site safety supervision." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq">
      <div className="container faq-wrap">
        <span className="eyebrow">Faq</span>
        <h2 className="title-xl light">Your Oil Questions, Our Answers</h2>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-head" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="faq-num">{String(i + 1).padStart(2, "0")}.</span>
                <span className="faq-q">{f.q}</span>
                <span className="faq-icon" aria-hidden="true" />
              </button>
              <div className="faq-body">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
