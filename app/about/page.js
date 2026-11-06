import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Outreach from "@/components/Outreach";
import TeamCarousel from "@/components/TeamCarousel";

export const metadata = { title: "About us – Oilrigpro" };

export default function AboutPage() {
  return (
    <main>
      <PageBanner title="About us" crumbs={[{ label: "About us" }]} />
      <About />
      <Services plain />
      <Outreach />
      <TeamCarousel />
    </main>
  );
}
