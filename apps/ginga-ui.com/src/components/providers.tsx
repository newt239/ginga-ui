"use client";

import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";
import { LocaleProvider } from "#/i18n/locale-context";

import type { Locale } from "#/i18n/locales";

type ProvidersProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function Providers({ locale, children }: ProvidersProps) {
  const router = useRouter();
  return (
    <LocaleProvider value={locale}>
      <RouterProvider navigate={router.push}>{children}</RouterProvider>
    </LocaleProvider>
  );
}
