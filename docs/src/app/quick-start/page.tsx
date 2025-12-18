import { Heading, Paragraph } from "@ginga-ui/core";
import { CodeBlock } from "#/components/code-block";
import { highlightCode } from "#/lib/shiki";

export default async function QuickStartPage() {
  return (
    <article>
      <Heading level="h1">クイックスタート</Heading>
      <Paragraph>
        Ginga
        UIを使い始めるための簡単なガイドです。わずか3ステップで、美しいUIコンポーネントを使い始められます。
      </Paragraph>

      <section style={{ marginTop: "3rem" }}>
        <Heading level="h2">1. インストール</Heading>
        <Paragraph>
          パッケージマネージャーを使ってGinga UIをインストールします。
        </Paragraph>
        <CodeBlock
          code="pnpm add @ginga-ui/core"
          highlightedCode={await highlightCode(
            "pnpm add @ginga-ui/core",
            "bash"
          )}
        />
        <Paragraph style={{ marginTop: "1rem" }}>
          npmやyarnを使用している場合:
        </Paragraph>
        <CodeBlock
          code={`npm install @ginga-ui/core
# または
yarn add @ginga-ui/core`}
          highlightedCode={await highlightCode(
            `npm install @ginga-ui/core
# または
yarn add @ginga-ui/core`,
            "bash"
          )}
        />
      </section>

      <section style={{ marginTop: "3rem" }}>
        <Heading level="h2">2. CSSファイルのインポート</Heading>
        <Paragraph>
          ルートコンポーネントでGinga UIのCSSファイルをインポートします。Next.js
          App Routerの場合は
          <code
            style={{
              backgroundColor: "var(--color-primary-1)",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
            }}
          >
            layout.tsx
          </code>
          に記述します。
        </Paragraph>
        <CodeBlock
          code={`import "@ginga-ui/core/index.css";
import "@ginga-ui/core/variables.css";`}
          highlightedCode={await highlightCode(
            `import "@ginga-ui/core/index.css";
import "@ginga-ui/core/variables.css";`,
            "tsx"
          )}
        />
      </section>

      <section style={{ marginTop: "3rem" }}>
        <Heading level="h2">3. コンポーネントを使う</Heading>
        <Paragraph>
          コンポーネントを
          <code
            style={{
              backgroundColor: "var(--color-primary-1)",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
            }}
          >
            @ginga-ui/core
          </code>
          からインポートして使用します。
        </Paragraph>
        <CodeBlock
          code={`import { Button, Card, Heading } from "@ginga-ui/core";

export default function App() {
  return (
    <Card>
      <Heading level="h2">はじめての Ginga UI</Heading>
      <Button variant="filled" onPress={() => alert("クリック!")}>
        クリックしてみる
      </Button>
    </Card>
  );
}`}
          highlightedCode={await highlightCode(
            `import { Button, Card, Heading } from "@ginga-ui/core";

export default function App() {
  return (
    <Card>
      <Heading level="h2">はじめての Ginga UI</Heading>
      <Button variant="filled" onPress={() => alert("クリック!")}>
        クリックしてみる
      </Button>
    </Card>
  );
}`,
            "tsx"
          )}
        />
      </section>

      <section style={{ marginTop: "3rem" }}>
        <Heading level="h2">Next.js App Routerでの完全な例</Heading>
        <Paragraph>
          Next.js 13以降のApp Routerを使用する場合の完全なセットアップ例です。
        </Paragraph>

        <Heading level="h3" style={{ marginTop: "2rem" }}>
          app/layout.tsx
        </Heading>
        <CodeBlock
          code={`import { ThemeClient } from "@ginga-ui/core";
import "@ginga-ui/core/index.css";
import "@ginga-ui/core/variables.css";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // サーバーサイドでテーマを生成（オプション）
  const themeClient = new ThemeClient({ model: "gpt-4o-mini" });
  const { CSSCode } = await themeClient.generateTheme("モダンでクリーンなデザイン");

  return (
    <html lang="ja">
      <body>
        <style>{CSSCode}</style>
        {children}
      </body>
    </html>
  );
}`}
          highlightedCode={await highlightCode(
            `import { ThemeClient } from "@ginga-ui/core";
import "@ginga-ui/core/index.css";
import "@ginga-ui/core/variables.css";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // サーバーサイドでテーマを生成（オプション）
  const themeClient = new ThemeClient({ model: "gpt-4o-mini" });
  const { CSSCode } = await themeClient.generateTheme("モダンでクリーンなデザイン");

  return (
    <html lang="ja">
      <body>
        <style>{CSSCode}</style>
        {children}
      </body>
    </html>
  );
}`,
            "tsx"
          )}
        />

        <Heading level="h3" style={{ marginTop: "2rem" }}>
          app/page.tsx
        </Heading>
        <CodeBlock
          code={`import { Heading, Paragraph, Button } from "@ginga-ui/core";

export default function Home() {
  return (
    <main>
      <Heading level="h1">Welcome to Ginga UI</Heading>
      <Paragraph>AIで生成されたテーマを使用しています。</Paragraph>
      <Button variant="filled">はじめる</Button>
    </main>
  );
}`}
          highlightedCode={await highlightCode(
            `import { Heading, Paragraph, Button } from "@ginga-ui/core";

export default function Home() {
  return (
    <main>
      <Heading level="h1">Welcome to Ginga UI</Heading>
      <Paragraph>AIで生成されたテーマを使用しています。</Paragraph>
      <Button variant="filled">はじめる</Button>
    </main>
  );
}`,
            "tsx"
          )}
        />
      </section>

      <section style={{ marginTop: "3rem" }}>
        <Heading level="h2">次のステップ</Heading>
        <ul style={{ lineHeight: 2 }}>
          <li>
            <a
              href="/components"
              style={{ color: "var(--color-primary)", fontWeight: 600 }}
            >
              全コンポーネント
            </a>
            を確認して、利用可能なUIパーツを探索
          </li>
          <li>
            <a
              href="/theme-generation"
              style={{ color: "var(--color-primary)", fontWeight: 600 }}
            >
              テーマ生成
            </a>
            を試して、AIによる自動スタイリングを体験
          </li>
          <li>
            各コンポーネントの詳細ページで、使い方やバリエーションをチェック
          </li>
        </ul>
      </section>
    </article>
  );
}
