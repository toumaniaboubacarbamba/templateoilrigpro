import PageBanner from "@/components/PageBanner";
import ServiceCards from "@/components/ServiceCards";

export const metadata = { title: "Service Modern Style – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="Service Modern Style" crumbs={[{ label: "Service Modern Style" }]} />
      <ServiceCards variant="modern" />
    </main>
  );
}
