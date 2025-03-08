import { htmlToComponents } from "#/components/Markdown";
import { cmsClient, getBlogPosts } from "#/libs/cms";
import { Anchor, Box, Heading, Image, ThemeClient } from "@ginga-ui/core";

import { notFound } from "next/navigation";
import { Metadata } from "next/types";
import styles from "./page.module.css";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await await cmsClient.get({
    endpoint: "blogs",
    contentId: slug,
  });

  if (!post) {
    return {
      title: "お知らせが見つかりませんでした",
    };
  }

  return {
    title: post.title,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await await cmsClient.get({
    endpoint: "blogs",
    contentId: slug,
  });

  if (!post) {
    notFound();
  }

  const themeClient = new ThemeClient({
    clientType: "openai",
    apiKey: process.env.OPENAI_API_KEY!,
  });

  const { CSSCode } = await themeClient.generateTheme(post.content);
  const Output = () => htmlToComponents(post.content);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSSCode }} />
      <Image
        src={post.eyecatch.url}
        alt={post.title}
        className={styles["eyecatch"]}
      />
      <Heading level="h2" className={styles.title}>
        {post.title}
      </Heading>
      <div className={styles["author"]}>
        <Image
          src="https://newt239.dev/icon.webp"
          variant="avatar"
          className={styles["avatar"]}
        />
        newt
      </div>
      <Output />
      <Box className={styles["post-footer"]}>
        <Anchor href="/">Back to list</Anchor>
      </Box>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.id,
  }));
}
