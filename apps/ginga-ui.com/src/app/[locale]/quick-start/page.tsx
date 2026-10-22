import { QuickStartContent as En } from "#/content/en/quick-start";
import { QuickStartContent as Ja } from "#/content/ja/quick-start";
import { alternatesFor } from "#/i18n/alternates";
import { isLocale } from "#/i18n/locales";
import { notFound } from "next/navigation";

export const metadata = { alternates: alternatesFor("/quick-start") };

export default async function QuickStartPage({
  params,
}: PageProps<"/[locale]/quick-start">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale === "ja" ? <Ja /> : <En />;
}
