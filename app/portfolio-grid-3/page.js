import PageBanner from "@/components/PageBanner";
import PortfolioVariants from "@/components/PortfolioVariants";

export const metadata = { title: "Portfolio Grid-3 – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="Portfolio Grid-3" crumbs={[{ label: "Portfolio Grid-3" }]} />
      <PortfolioVariants variant="grid3" />
    </main>
  );
}
