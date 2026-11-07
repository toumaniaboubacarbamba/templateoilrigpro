import PageBanner from "@/components/PageBanner";
import PortfolioVariants from "@/components/PortfolioVariants";

export const metadata = { title: "Portfolio Grid-2 – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="Portfolio Grid-2" crumbs={[{ label: "Portfolio Grid-2" }]} />
      <PortfolioVariants variant="grid2" />
    </main>
  );
}
