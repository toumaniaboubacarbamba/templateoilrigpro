import PageBanner from "@/components/PageBanner";
import ServiceCards from "@/components/ServiceCards";

export const metadata = { title: "Service Classic Pro – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="Service Classic Pro" crumbs={[{ label: "Service Classic Pro" }]} />
      <ServiceCards variant="pro" />
    </main>
  );
}
