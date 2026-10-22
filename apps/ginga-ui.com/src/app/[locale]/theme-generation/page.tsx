import { ThemeGenerationContent as En } from "#/content/en/theme-generation";
import { ThemeGenerationContent as Ja } from "#/content/ja/theme-generation";
import { alternatesFor } from "#/i18n/alternates";
import { isLocale } from "#/i18n/locales";
import { notFound } from "next/navigation";

export const metadata = { alternates: alternatesFor("/theme-generation") };

export default async function ThemeGenerationPage({
  params,
}: PageProps<"/[locale]/theme-generation">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale === "ja" ? <Ja /> : <En />;
}
