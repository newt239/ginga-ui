import { notFound } from "next/navigation";
import { ComponentDoc } from "#/components/component-doc";
import { COMPONENTS } from "#/data/components";
import { alternatesFor } from "#/i18n/alternates";
import { isLocale } from "#/i18n/locales";

import type { Metadata } from "next";

export function generateStaticParams() {
  return COMPONENTS.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return { alternates: alternatesFor(`/components/${id}`) };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if (!isLocale(locale)) notFound();

  return <ComponentDoc id={id} locale={locale} />;
}
