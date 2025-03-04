import { Button, ThemeClient } from "@ginga-ui/core";

import type { Metadata } from "next";

import "@ginga-ui/core/index.css";
import "@ginga-ui/core/variables.css";

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
        <Button>Click me</Button>
        {children}
      </body>
    </html>
  );
}
