import Link from "next/link";
import { Heading, Paragraph, Button, Card } from "@ginga-ui/core";

export default function Home() {
  return (
    <article>
      <section className="hero">
        <Heading level="h1">Ginga UI</Heading>
        <Paragraph style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          LLMを活用したテーマ生成機能を持つReact UIコンポーネントライブラリ
        </Paragraph>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/quick-start">
            <Button variant="filled">クイックスタート</Button>
          </Link>
          <Link href="/components">
            <Button variant="outline">コンポーネント一覧</Button>
          </Link>
          <Link href="/theme-generation">
            <Button variant="light">テーマ生成を試す</Button>
          </Link>
        </div>
      </section>

      <section style={{ marginTop: "4rem" }}>
        <Heading level="h2">特徴</Heading>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          <Card>
            <Heading level="h3">🎨 AIテーマ生成</Heading>
            <Paragraph>
              プロンプトから自動的にCSS変数を生成。OpenAI、Gemini、Anthropicの3つのLLMプロバイダーをサポート。
            </Paragraph>
          </Card>

          <Card>
            <Heading level="h3">♿ アクセシビリティ</Heading>
            <Paragraph>
              React Aria
              Componentsをベースに構築され、キーボード操作、スクリーンリーダー、フォーカス管理に完全対応。
            </Paragraph>
          </Card>

          <Card>
            <Heading level="h3">⚡ Next.js対応</Heading>
            <Paragraph>
              App
              Routerに最適化。サーバーコンポーネントでのテーマ生成により、高速な初期表示を実現。
            </Paragraph>
          </Card>

          <Card>
            <Heading level="h3">🎯 型安全</Heading>
            <Paragraph>
              TypeScript
              strictモードで実装。Zodスキーマによるランタイム検証で、AIが生成するテーマも型安全。
            </Paragraph>
          </Card>

          <Card>
            <Heading level="h3">🎨 CSS変数ベース</Heading>
            <Paragraph>
              テーマはCSS変数で管理。既存のスタイルシステムとの統合が容易で、カスタマイズも自由自在。
            </Paragraph>
          </Card>

          <Card>
            <Heading level="h3">📦 19個のコンポーネント</Heading>
            <Paragraph>
              フォーム、レイアウト、表示、ナビゲーション、タイポグラフィの5カテゴリで充実したコンポーネント群。
            </Paragraph>
          </Card>
        </div>
      </section>

      <section style={{ marginTop: "4rem" }}>
        <Heading level="h2">はじめ方</Heading>
        <div style={{ marginTop: "1.5rem" }}>
          <Paragraph>
            Ginga
            UIを使い始めるのは簡単です。パッケージをインストールして、コンポーネントをインポートするだけ。
          </Paragraph>
          <Paragraph>
            詳しい手順は
            <Link
              href="/quick-start"
              style={{ color: "var(--color-primary)", fontWeight: 600 }}
            >
              クイックスタート
            </Link>
            をご覧ください。
          </Paragraph>
        </div>
      </section>
    </article>
  );
}
