import { Anchor, Heading, Paragraph } from "@ginga-ui/core";
import { HighlightedCodeBlock } from "#/components/highlighted-code-block";

const LAYOUT_EXAMPLE = `import { ThemeClient } from "@ginga-ui/utils";
import "@ginga-ui/core/variables.css";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // サーバーサイドでテーマを生成（オプション）
  const themeClient = new ThemeClient({ provider: "openai" });
  const { CSSCode } = await themeClient.generateTheme("モダンでクリーンなデザイン");

  return (
    <html lang="ja">
      <body>
        <style>{CSSCode}</style>
        {children}
      </body>
    </html>
  );
}`;

const PAGE_EXAMPLE = `import { Heading, Paragraph, Button } from "@ginga-ui/core";

export default function Home() {
  return (
    <main>
      <Heading level="h1">Welcome to Ginga UI</Heading>
      <Paragraph>AIで生成されたテーマを使用しています。</Paragraph>
      <Button variant="filled">はじめる</Button>
    </main>
  );
}`;

export default async function QuickStartPage() {
  return (
    <article>
      <Heading level="h1">クイックスタート</Heading>
      <Paragraph>
        Ginga
        UIを使い始めるための簡単なガイドです。わずか3ステップで、美しいUIコンポーネントを使い始められます。
      </Paragraph>

      <section className="docs-section">
        <Heading level="h2" id="install">
          1. インストール
        </Heading>
        <Paragraph>
          パッケージマネージャーを使ってGinga UIをインストールします。
        </Paragraph>
        <HighlightedCodeBlock code="pnpm add @ginga-ui/core" lang="bash" />
        <Paragraph>npmやyarnを使用している場合:</Paragraph>
        <HighlightedCodeBlock
          code={`npm install @ginga-ui/core
# または
yarn add @ginga-ui/core`}
          lang="bash"
        />
      </section>

      <section className="docs-section">
        <Heading level="h2" id="import-variables">
          2. CSS変数のインポート
        </Heading>
        <Paragraph>
          各コンポーネントのCSSはインポート時に自動で読み込まれます。ルートコンポーネントでは、テーマのCSS変数定義のみをインポートします。Next.js
          App Routerの場合は
          <code>layout.tsx</code>
          に記述します。
        </Paragraph>
        <HighlightedCodeBlock
          code={`import "@ginga-ui/core/variables.css";`}
          lang="tsx"
          filename="app/layout.tsx"
        />
      </section>

      <section className="docs-section">
        <Heading level="h2" id="use-components">
          3. コンポーネントを使う
        </Heading>
        <Paragraph>
          コンポーネントを
          <code>@ginga-ui/core</code>
          からインポートして使用します。
        </Paragraph>
        <HighlightedCodeBlock
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
          lang="tsx"
        />
      </section>

      <section className="docs-section">
        <Heading level="h2" id="nextjs-example">
          Next.js App Routerでの完全な例
        </Heading>
        <Paragraph>
          Next.js 13以降のApp Routerを使用する場合の完全なセットアップ例です。
        </Paragraph>

        <HighlightedCodeBlock
          files={[
            { filename: "app/layout.tsx", code: LAYOUT_EXAMPLE, lang: "tsx" },
            { filename: "app/page.tsx", code: PAGE_EXAMPLE, lang: "tsx" },
          ]}
        />
      </section>

      <section className="docs-section">
        <Heading level="h2" id="next-steps">
          次のステップ
        </Heading>
        <ul>
          <li>
            <Anchor href="/components">全コンポーネント</Anchor>
            を確認して、利用可能なUIパーツを探索
          </li>
          <li>
            <Anchor href="/theme-generation">テーマ生成</Anchor>
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
