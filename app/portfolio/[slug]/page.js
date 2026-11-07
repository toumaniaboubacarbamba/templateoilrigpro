import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { ArrowUpLeft, ArrowUpRight, Check, IconBriefcase, IconCalendar, IconFolder, IconPin, IconUser, Quote } from "@/components/Icons";
import { PROJECTS } from "@/data/portfolio";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = PROJECTS.find((x) => x.slug === slug);
  return { title: p ? `${p.title} – Oilrigpro` : "Portfolio – Oilrigpro" };
}

const INFOS = [
  { label: "Date:", value: "March 10, 2026", icon: IconCalendar },
  { label: "Client:", value: "Samira & Rufus", icon: IconUser },
  { label: "Category:", value: "Agriculture Farm", icon: IconFolder },
  { label: "Place:", value: "Mongus St, UK", icon: IconPin },
  { label: "Service:", value: "Pure Organic Farms", icon: IconBriefcase },
];

const STRENGTHS = [
  "Safety-first operational culture", "Reliable global energy supply", "Asset integrity and maintenance",
  "Environmental responsibility focus", "Onshore and offshore operations", "Regulatory compliance standards",
  "Efficient production management", "Advanced drilling technologies", "Cost-effective energy solutions",
];

const P1 =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum It is a long established fact that a reader will be distracted.";
const P2 =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";

export default async function PortfolioSingle({ params }) {
  const { slug } = await params;
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const project = PROJECTS[idx];
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  return (
    <main>
      <PageBanner compact title={project.title} crumbs={[{ label: "Portfolio", href: "/portfolio" }, { label: project.title }]} />

      <section className="pf-single">
        <div className="container">
          <img className="pf-hero" src={project.img} alt={project.title} />

          <div className="pf-infos">
            {INFOS.map(({ label, value, icon: Icon }) => (
              <div className="pf-info" key={label}>
                <span className="pf-ico"><Icon /></span>
                <div>
                  <h5>{label}</h5>
                  <p>{value}</p>
                </div>
              </div>
            ))}
          </div>

          <h3>Project Overview and Technical Highlights</h3>
          <p className="pf-p">{P1}</p>

          <blockquote className="pf-quote">
            <span className="pf-quote-ico"><Quote size={22} /></span>
            <img src="/images/pf-quote-avatar.webp" alt="" />
            <div>
              <p>“From exploration to transportation, oil and gas transform natural resources into dependable energy that fuels modern life, economic growth, and industrial development across nations.”</p>
              <cite>– Global Energy Forum</cite>
            </div>
          </blockquote>

          <h4 className="pf-h4">Key Strengths of Our Oil &amp; Gas Expertise</h4>
          <p className="pf-p">{P2}</p>
          <ul className="pf-strengths">
            {STRENGTHS.map((s) => (
              <li key={s}><Check /> {s}</li>
            ))}
          </ul>
          <p className="pf-p">{P1.replace("industry's", "industry’s")}</p>

          <div className="svc-nav">
            {prev ? (
              <Link href={`/portfolio/${prev.slug}`} className="prev-btn">
                <ArrowUpLeft /> {prev.title}
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`/portfolio/${next.slug}`} className="prev-btn">
                {next.title} <ArrowUpRight />
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </main>
  );
}
