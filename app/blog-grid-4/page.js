import PageBanner from "@/components/PageBanner";
import BlogGrids from "@/components/BlogGrids";

export const metadata = { title: "Blog Grid-4 – Oilrigpro" };

export default function Page() {
  return (
    <main>
      <PageBanner title="Blog Grid-4" crumbs={[{ label: "Blog Grid-4" }]} />
      <BlogGrids variant="g4" />
    </main>
  );
}
