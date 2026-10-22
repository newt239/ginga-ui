"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "#/i18n/locale-context";
import { localizePath } from "#/i18n/locales";

export function Logo() {
  const locale = useLocale();

  return (
    <Link href={localizePath("/", locale)} className="docs-logo">
      <Image
        src="/shooting-star.svg"
        alt=""
        width={32}
        height={32}
        className="docs-logo-mark"
        priority
      />
      Ginga UI
    </Link>
  );
}
