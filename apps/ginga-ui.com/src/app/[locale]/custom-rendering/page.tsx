import { CustomRenderingContent as En } from "#/content/en/custom-rendering";
import { CustomRenderingContent as Ja } from "#/content/ja/custom-rendering";
import { alternatesFor } from "#/i18n/alternates";
import { isLocale } from "#/i18n/locales";
import { notFound } from "next/navigation";

export const metadata = { alternates: alternatesFor("/custom-rendering") };

export default async function CustomRenderingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale === "ja" ? <Ja /> : <En />;
}
