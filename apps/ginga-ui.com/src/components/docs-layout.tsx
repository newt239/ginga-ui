import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { SidebarNav } from "./sidebar";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-layout">
      <a href="#main-content" className="skip-link">
        本文へスキップ
      </a>
      <header className="docs-mobile-header">
        <Logo />
        <MobileNav />
      </header>
      <aside className="docs-sidebar">
        <Logo />
        <SidebarNav />
      </aside>
      <main id="main-content" className="docs-main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
