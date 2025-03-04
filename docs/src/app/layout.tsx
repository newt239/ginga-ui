import { Heading, ThemeClient } from "@ginga-ui/core";
import Link from "next/link";

import type { Metadata } from "next";

import "@ginga-ui/core/index.css";
import "@ginga-ui/core/variables.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "GingaUI",
  description: "brand-new UI component library for web",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeClient = new ThemeClient({
    clientType: "openai",
    apiKey: process.env.OPENAI_API_KEY!,
  });

  const { CSSCode } = await themeClient.generateTheme("fairy tale");

  return (
    <html lang="en">
      <body>
        <style>{CSSCode}</style>
        <header>
          <Link href="/">
            <Heading level="h1">GingaUI</Heading>
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
