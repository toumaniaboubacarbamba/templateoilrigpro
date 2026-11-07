import PageBanner from "@/components/PageBanner";
import PortfolioVariants from "@/components/PortfolioVariants";

export const metadata = { title: "Portfolio Grid-4 – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="Portfolio Grid-4" crumbs={[{ label: "Portfolio Grid-4" }]} />
      <PortfolioVariants variant="grid4" />
    </main>
  );
}
