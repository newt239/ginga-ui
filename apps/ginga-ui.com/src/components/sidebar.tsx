"use client";

import { useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { PendingIndicator } from "./pending-indicator";
import { getComponentsByCategory, SORTED_CATEGORIES } from "#/data/components";
import { useDictionary, useLocale } from "#/i18n/locale-context";
import { localizePath } from "#/i18n/locales";

type SidebarNavProps = {
  onNavigate?: () => void;
};

export function SidebarNav({ onNavigate }: SidebarNavProps) {
  const pathname = usePathname();
  const idPrefix = useId();
  const locale = useLocale();
  const { nav } = useDictionary();

  const gettingStartedLinks = [
    { href: "/", label: nav.overview },
    { href: "/quick-start", label: nav.quickStart },
    { href: "/theme-generation", label: nav.themeGeneration },
    { href: "/components", label: nav.allComponents },
  ].map((link) => ({ ...link, href: localizePath(link.href, locale) }));

  const renderLink = (href: string, label: string) => (
    <li key={href}>
      <Link
        href={href}
        aria-current={pathname === href ? "page" : undefined}
        onClick={onNavigate}
      >
        {label}
        <PendingIndicator />
      </Link>
    </li>
  );

  return (
    <nav className="docs-nav" aria-label={nav.label}>
      <section aria-labelledby={`${idPrefix}-getting-started`}>
        <h2 id={`${idPrefix}-getting-started`}>{nav.gettingStarted}</h2>
        <ul>
          {gettingStartedLinks.map(({ href, label }) =>
            renderLink(href, label)
          )}
        </ul>
      </section>

      {SORTED_CATEGORIES.map(([category, { label }]) => {
        const components = getComponentsByCategory(category);
        if (components.length === 0) return null;

        return (
          <section key={category} aria-labelledby={`${idPrefix}-${category}`}>
            <h2 id={`${idPrefix}-${category}`}>{label[locale]}</h2>
            <ul>
              {components.map((component) =>
                renderLink(
                  localizePath(`/components/${component.id}`, locale),
                  component.name
                )
              )}
            </ul>
          </section>
        );
      })}

      <section aria-labelledby={`${idPrefix}-resources`}>
        <h2 id={`${idPrefix}-resources`}>{nav.resources}</h2>
        <ul>
          <li>
            <a
              href="https://github.com/newt239/ginga-ui"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ExternalLink className="docs-nav-external" aria-hidden="true" />
              <span className="visually-hidden">{nav.opensInNewTab}</span>
            </a>
          </li>
        </ul>
      </section>
      <p className="docs-credit">
        {nav.logoCredit}{" "}
        <a
          href="https://github.com/jdecked/twemoji"
          target="_blank"
          rel="noreferrer"
        >
          Twemoji
          <span className="visually-hidden">{nav.opensInNewTab}</span>
        </a>{" "}
        (CC-BY 4.0)
      </p>
    </nav>
  );
}
