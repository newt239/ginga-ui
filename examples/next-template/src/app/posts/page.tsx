import { getBlogPosts } from "#/libs/cms";
import { Metadata } from "next";
import ArticleList from "../_components/ArticleList";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "All Posts",
  description: "Created with ginga-ui",
};

export default async function BlogListPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <ArticleList posts={posts} />
    </>
  );
}
