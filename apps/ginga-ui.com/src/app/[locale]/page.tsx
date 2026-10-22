import { Anchor, Heading } from "@ginga-ui/core";
import { ArrowRight, LayoutGrid, Sparkles } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { alternatesFor } from "#/i18n/alternates";
import { getDictionary } from "#/i18n/dictionaries";
import { isLocale, localizePath } from "#/i18n/locales";
import styles from "./page.module.css";

export const metadata = { alternates: alternatesFor("/") };

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const { home, nav } = getDictionary(locale);

  return (
    <article>
      <Heading level="h1" className={styles.title}>
        Ginga UI
      </Heading>
      <Image
        src="/ginga-ui-eyecatch.webp"
        alt={home.eyecatchAlt}
        width={1920}
        height={1080}
        sizes="(width <= 56rem) 100vw, 52rem"
        className={styles.visual}
        priority
      />
      <div className={styles.actions}>
        <Anchor
          href={localizePath("/quick-start", locale)}
          variant="button"
          size="lg"
          endIcon={<ArrowRight />}
        >
          {nav.quickStart}
        </Anchor>
        <Anchor
          href={localizePath("/theme-generation", locale)}
          variant="button"
          buttonVariant="light"
          size="lg"
          startIcon={<Sparkles />}
        >
          {nav.themeGeneration}
        </Anchor>
        <Anchor
          href={localizePath("/components", locale)}
          variant="button"
          buttonVariant="ghost"
          size="lg"
          startIcon={<LayoutGrid />}
        >
          {nav.allComponents}
        </Anchor>
      </div>
    </article>
  );
}
