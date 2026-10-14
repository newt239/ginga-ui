export function PageSkeleton() {
  return (
    <output className="docs-skeleton" aria-label="読み込み中">
      <div className="docs-skeleton-title" />
      <div className="docs-skeleton-line" />
      <div className="docs-skeleton-line docs-skeleton-line-short" />
      <div className="docs-skeleton-block" />
      <div className="docs-skeleton-line" />
      <div className="docs-skeleton-line docs-skeleton-line-short" />
    </output>
  );
}
