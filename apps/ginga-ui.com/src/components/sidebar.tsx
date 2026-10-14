"use client";

import { useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { PendingIndicator } from "./pending-indicator";
import { CATEGORIES, getComponentsByCategory } from "#/data/components";
import type { ComponentCategory } from "#/data/components";

const GETTING_STARTED_LINKS = [
  { href: "/", label: "概要" },
  { href: "/quick-start", label: "クイックスタート" },
  { href: "/theme-generation", label: "テーマ生成" },
  { href: "/components", label: "全コンポーネント" },
];

const SORTED_CATEGORIES = (
  Object.entries(CATEGORIES) as [
    ComponentCategory,
    { label: string; order: number },
  ][]
).sort(([, a], [, b]) => a.order - b.order);

type SidebarNavProps = {
  onNavigate?: () => void;
};

export function SidebarNav({ onNavigate }: SidebarNavProps) {
  const pathname = usePathname();
  const idPrefix = useId();

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
    <nav className="docs-nav" aria-label="ドキュメント">
      <section aria-labelledby={`${idPrefix}-getting-started`}>
        <h2 id={`${idPrefix}-getting-started`}>はじめに</h2>
        <ul>
          {GETTING_STARTED_LINKS.map(({ href, label }) =>
            renderLink(href, label)
          )}
        </ul>
      </section>

      {SORTED_CATEGORIES.map(([category, { label }]) => {
        const components = getComponentsByCategory(category);
        if (components.length === 0) return null;

        return (
          <section key={category} aria-labelledby={`${idPrefix}-${category}`}>
            <h2 id={`${idPrefix}-${category}`}>{label}</h2>
            <ul>
              {components.map((component) =>
                renderLink(`/components/${component.id}`, component.name)
              )}
            </ul>
          </section>
        );
      })}

      <section aria-labelledby={`${idPrefix}-resources`}>
        <h2 id={`${idPrefix}-resources`}>リソース</h2>
        <ul>
          <li>
            <a
              href="https://github.com/newt239/ginga-ui"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ExternalLink className="docs-nav-external" aria-hidden="true" />
              <span className="visually-hidden">（新しいタブで開く）</span>
            </a>
          </li>
        </ul>
      </section>
      <p className="docs-credit">
        ロゴ:{" "}
        <a
          href="https://github.com/jdecked/twemoji"
          target="_blank"
          rel="noreferrer"
        >
          Twemoji
          <span className="visually-hidden">（新しいタブで開く）</span>
        </a>{" "}
        (CC-BY 4.0)
      </p>
    </nav>
  );
}
