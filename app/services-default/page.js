import PageBanner from "@/components/PageBanner";
import ServiceCards from "@/components/ServiceCards";

export const metadata = { title: "Services Default – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="Services Default" crumbs={[{ label: "Services Default" }]} />
      <ServiceCards variant="default" />
    </main>
  );
}
