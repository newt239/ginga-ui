import { Inter, JetBrains_Mono, Noto_Sans_JP } from "next/font/google";
import { notFound } from "next/navigation";
import { DocsLayout } from "#/components/docs-layout";
import { Providers } from "#/components/providers";
import { getDictionary } from "#/i18n/dictionaries";
import { isLocale, LOCALES } from "#/i18n/locales";

import type { Metadata } from "next";

import "@ginga-ui/core/variables.css";
import "../globals.css";

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

const RESTORE_THEME_SCRIPT = `try{const t=localStorage.getItem("ginga-docs-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch{}`;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const { metadata } = getDictionary(locale);
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${notoSansJP.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: RESTORE_THEME_SCRIPT }} />
      </head>
      <body>
        <style id="dynamic-theme"></style>
        <Providers locale={locale}>
          <DocsLayout locale={locale}>{children}</DocsLayout>
        </Providers>
      </body>
    </html>
  );
}
