import PageBanner from "@/components/PageBanner";
import BlogGrids from "@/components/BlogGrids";

export const metadata = { title: "2 Columns + Sidebar – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="2 Columns + Sidebar" crumbs={[{ label: "2 Columns + Sidebar" }]} />
      <BlogGrids variant="g2s" />
    </main>
  );
}
