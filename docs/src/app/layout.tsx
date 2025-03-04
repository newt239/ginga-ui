import { Heading, Input } from "@ginga-ui/core";
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
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">
            <Heading level="h1">GingaUI</Heading>
          </Link>
          <Input placeholder="Search" />
        </header>
        {children}
      </body>
    </html>
  );
}
