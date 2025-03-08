import "@ginga-ui/core/index.css";
import "@ginga-ui/core/variables.css";

import Header from "./_components/Header";

import type { Metadata } from "next";

import "./styles.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Ginga Blog",
    default: "Ginga Blog",
  },
  description: "Created with ginga-ui",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
