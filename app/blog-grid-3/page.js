import PageBanner from "@/components/PageBanner";
import BlogGrids from "@/components/BlogGrids";

export const metadata = { title: "Blog Grid-3 – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="Blog Grid-3" crumbs={[{ label: "Blog Grid-3" }]} />
      <BlogGrids variant="g3" />
    </main>
  );
}
