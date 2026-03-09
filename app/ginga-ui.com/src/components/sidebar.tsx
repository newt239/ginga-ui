"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES, getComponentsByCategory } from "#/data/components";
import type { ComponentCategory, ComponentMetadata } from "#/data/components";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <nav>
        <section>
          <h2>はじめに</h2>
          <ul>
            <li>
              <Link href="/" data-active={pathname === "/"}>
                概要
              </Link>
            </li>
            <li>
              <Link
                href="/quick-start"
                data-active={pathname === "/quick-start"}
              >
                クイックスタート
              </Link>
            </li>
            <li>
              <Link
                href="/theme-generation"
                data-active={pathname === "/theme-generation"}
              >
                テーマ生成
              </Link>
            </li>
            <li>
              <Link href="/components" data-active={pathname === "/components"}>
                全コンポーネント
              </Link>
            </li>
          </ul>
        </section>

        {(
          Object.entries(CATEGORIES) as [
            ComponentCategory,
            { label: string; order: number },
          ][]
        )
          .sort(([, a], [, b]) => a.order - b.order)
          .map(([category, { label }]) => {
            const components = getComponentsByCategory(category);
            if (components.length === 0) return null;

            return (
              <section key={category}>
                <h2>{label}</h2>
                <ul>
                  {components.map((component: ComponentMetadata) => (
                    <li key={component.id}>
                      <Link
                        href={`/components/${component.id}`}
                        data-active={pathname === `/components/${component.id}`}
                      >
                        {component.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
      </nav>
    </aside>
  );
}
