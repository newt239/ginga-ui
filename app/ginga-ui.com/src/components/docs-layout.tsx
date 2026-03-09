import { Heading } from "@ginga-ui/core";
import Link from "next/link";
import { Sidebar } from "./sidebar";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-layout">
      <header className="docs-header">
        <Link href="/">
          <Heading level="h1">Ginga UI</Heading>
        </Link>
        <nav className="header-nav">
          <Link href="/quick-start">クイックスタート</Link>
          <Link href="/components">コンポーネント</Link>
          <Link href="/theme-generation">テーマ生成</Link>
        </nav>
      </header>
      <div className="docs-content">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
