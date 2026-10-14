"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

const HEADING_SELECTOR = "#main-content h2[id], #main-content h3[id]";

const collectHeadings = (): TocItem[] =>
  [...document.querySelectorAll<HTMLHeadingElement>(HEADING_SELECTOR)]
    .filter((heading) => heading.id && !heading.closest("[data-toc-ignore]"))
    .map((heading) => ({
      id: heading.id,
      text: heading.textContent?.trim() ?? "",
      level: heading.tagName === "H3" ? 3 : 2,
    }));

const isSameToc = (a: TocItem[], b: TocItem[]) =>
  a.length === b.length &&
  a.every((item, i) => item.id === b[i].id && item.text === b[i].text);

export function TableOfContents() {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const main = document.getElementById("main-content");
    if (!main) return;

    const update = () =>
      setItems((prev) => {
        const next = collectHeadings();
        return isSameToc(prev, next) ? prev : next;
      });
    update();

    const observer = new MutationObserver(update);
    observer.observe(main, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (items.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        const firstVisible = items.find((item) => visible.has(item.id));
        if (firstVisible) setActiveId(firstVisible.id);
      },
      { rootMargin: "0px 0px -60% 0px" }
    );
    for (const item of items) {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="docs-toc" aria-labelledby="docs-toc-title">
      <h2 id="docs-toc-title" className="docs-toc-title">
        目次
      </h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} data-level={item.level}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? "location" : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
