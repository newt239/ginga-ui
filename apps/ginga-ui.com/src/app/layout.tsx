import { ThemeClient } from "@ginga-ui/utils";
import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import { DocsLayout } from "#/components/docs-layout";
import { Providers } from "#/components/providers";

import type { Metadata } from "next";

import "@ginga-ui/core/variables.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
    provider: "openai",
  });

  const { CSSCode } = await themeClient.generateTheme(
    "モダンでクリーンなデザイン"
  );

  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <style id="initial-theme">{CSSCode}</style>
        <style id="dynamic-theme"></style>
        <Providers>
          <DocsLayout>{children}</DocsLayout>
        </Providers>
      </body>
    </html>
  );
}
