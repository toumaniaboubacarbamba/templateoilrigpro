import PageBanner from "@/components/PageBanner";
import BlogIndex from "@/components/BlogIndex";

export const metadata = { title: "Blog List – Oilrigpro" };

export default function BlogListPage() {
  return (
    <main>
      <PageBanner title="Blog List" crumbs={[{ label: "Blog List" }]} />
      <BlogIndex variant="list" />
    </main>
  );
}
