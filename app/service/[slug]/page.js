import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICES } from "@/data/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  return { title: s ? `${s.title} – Oilrigpro` : "Service – Oilrigpro" };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
