"use client";

import { useDictionary } from "#/i18n/locale-context";

export function PageSkeleton() {
  const { layout } = useDictionary();

  return (
    <output className="docs-skeleton" aria-label={layout.loading}>
      <div className="docs-skeleton-title" />
      <div className="docs-skeleton-line" />
      <div className="docs-skeleton-line docs-skeleton-line-short" />
      <div className="docs-skeleton-block" />
      <div className="docs-skeleton-line" />
      <div className="docs-skeleton-line docs-skeleton-line-short" />
    </output>
  );
}
