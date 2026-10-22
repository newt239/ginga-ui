import { LOCALES, localizePath } from "./locales";

import type { Metadata } from "next";

export function alternatesFor(pathname: string): Metadata["alternates"] {
  return {
    languages: Object.fromEntries(
      LOCALES.map((locale) => [locale, localizePath(pathname, locale)])
    ),
  };
}
