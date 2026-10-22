"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { useLocale } from "#/i18n/locale-context";
import { LOCALE_LABELS, localizePath } from "#/i18n/locales";
import styles from "./site-settings.module.css";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const target = locale === "ja" ? "en" : "ja";

  return (
    <Link
      href={localizePath(pathname, target)}
      hrefLang={target}
      lang={target}
      className={styles.language}
    >
      <Languages aria-hidden="true" />
      {LOCALE_LABELS[target]}
    </Link>
  );
}
