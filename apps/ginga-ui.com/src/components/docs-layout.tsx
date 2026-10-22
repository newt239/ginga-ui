import { getDictionary } from "#/i18n/dictionaries";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { SidebarNav } from "./sidebar";
import { SiteSettings } from "./site-settings";
import { TableOfContents } from "./table-of-contents";

import type { Locale } from "#/i18n/locales";

type DocsLayoutProps = {
  locale: Locale;
  children: React.ReactNode;
};

export function DocsLayout({ locale, children }: DocsLayoutProps) {
  const dictionary = getDictionary(locale);

  return (
    <div className="docs-layout">
      <a href="#main-content" className="skip-link">
        {dictionary.layout.skipToContent}
      </a>
      <header className="docs-mobile-header">
        <Logo />
        <div className="docs-header-actions">
          <SiteSettings />
          <MobileNav />
        </div>
      </header>
      <aside className="docs-sidebar">
        <div className="docs-sidebar-header">
          <Logo />
          <SiteSettings />
        </div>
        <SidebarNav />
      </aside>
      <main id="main-content" className="docs-main" tabIndex={-1}>
        {children}
      </main>
      <aside className="docs-toc-container" data-toc-ignore>
        <TableOfContents />
      </aside>
    </div>
  );
}
