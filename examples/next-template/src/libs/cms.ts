import { createClient } from "microcms-js-sdk";

export const cmsClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type ArticleProps = {
  title: string;
  body: string;
  content: string;
  id: string;
  eyecatch: {
    url: string;
  };
};

export async function getBlogPosts(): Promise<ArticleProps[]> {
  const data = await cmsClient.getAllContents({
    endpoint: "blogs",
  });

  return data;
}
