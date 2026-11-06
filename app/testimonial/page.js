import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { Quote } from "@/components/Icons";

export const metadata = { title: "Testimonial – Oilrigpro" };

const A =
  "Our organization values long-term partnerships built on trust and measurable results, and this team consistently exceeds expectations. Their deep industry knowledge, advanced technical capabilities, and commitment to quality have strengthened our infrastructure and improved overall operational efficiency. We look forward..";
const B =
  "Managing offshore energy projects requires precision, coordination, and technical strength. This team consistently demonstrates all three. Their structured planning, skilled workforce, and advanced equipment ensured our offshore installation was completed safely and efficiently under challenging conditions.";
const C =
  "Partnering with this company has been a critical factor in the success of our offshore operations. Their engineering expertise, disciplined project management, and unwavering commitment to safety allowed us to complete complex installations ahead of schedule. The team consistently demonstrates..";

const ITEMS = [
  { text: A, name: "Kristen Stewart", role: "Investor", img: "/images/avatar-kristen.webp" },
  { text: B, name: "Mia Hernandez", role: "Customer", img: "/images/avatar-mia.jpg" },
  { text: A, name: "Daniel Scott", role: "Client", img: "/images/avatar-daniel.webp" },
  { text: C, name: "Emma Watson", role: "Client", img: "/images/avatar-emma.webp" },
];

export default function TestimonialPage() {
  return (
    <main>
      <PageBanner title="Testimonial" crumbs={[{ label: "Testimonial" }]} />
      <section className="testi-page">
        <div className="container testi-grid">
          {ITEMS.map((t, i) => (
            <Reveal key={t.name} className="testi-card" delay={(i % 2) * 120}>
              <Quote />
              <p>{t.text}</p>
              <img src={t.img} alt={t.name} />
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
