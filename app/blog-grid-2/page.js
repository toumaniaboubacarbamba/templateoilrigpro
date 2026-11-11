import PageBanner from "@/components/PageBanner";
import BlogGrids from "@/components/BlogGrids";

export const metadata = { title: "Blog Grid-2 – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="Blog Grid-2" crumbs={[{ label: "Blog Grid-2" }]} />
      <BlogGrids variant="g2" />
    </main>
  );
}
