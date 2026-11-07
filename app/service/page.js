import PageBanner from "@/components/PageBanner";
import ServiceCards from "@/components/ServiceCards";

export const metadata = { title: "Services – Oilrigpro" };

export default function ServicesArchive() {
  return (
    <main>
      <PageBanner title="Services" crumbs={[{ label: "Services" }]} />
      <ServiceCards variant="default" />
    </main>
  );
}
