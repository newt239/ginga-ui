import { ThemeClient } from "@ginga-ui/core";
import { DocsLayout } from "#/components/docs-layout";

import type { Metadata } from "next";

import "@ginga-ui/core/index.css";
import "@ginga-ui/core/variables.css";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Ginga UI - LLMを活用したテーマ生成可能なReact UIコンポーネントライブラリ",
  description:
    "Webサイトのコンテンツやプロンプトに基づいて動的にスタイリングされるReactコンポーネント",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeClient = new ThemeClient({
    model: "gpt-4o-mini",
  });

  const { CSSCode } = await themeClient.generateTheme(
    "モダンでクリーンなデザイン"
  );

  return (
    <html lang="ja">
      <body>
        <style id="initial-theme">{CSSCode}</style>
        <style id="dynamic-theme"></style>
        <DocsLayout>{children}</DocsLayout>
      </body>
    </html>
  );
}
