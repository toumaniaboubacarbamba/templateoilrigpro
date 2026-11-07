import PageBanner from "@/components/PageBanner";
import ServiceCards from "@/components/ServiceCards";

export const metadata = { title: "Service Classic Style – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="Service Classic Style" crumbs={[{ label: "Service Classic Style" }]} />
      <ServiceCards variant="classic" />
    </main>
  );
}
