export const LOCALES = ["en", "ja"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  ja: "日本語",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function stripLocale(pathname: string) {
  const [, first, ...rest] = pathname.split("/");
  if (first && isLocale(first)) {
    return `/${rest.join("/")}`;
  }
  return pathname;
}

export function localizePath(pathname: string, locale: Locale) {
  const path = stripLocale(pathname);
  if (locale === DEFAULT_LOCALE) {
    return path;
  }
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
