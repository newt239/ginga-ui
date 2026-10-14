import { Anchor, Card, Heading, Paragraph } from "@ginga-ui/core";
import {
  Accessibility,
  ArrowRight,
  Layers,
  Palette,
  ShieldCheck,
  Variable,
  Zap,
} from "lucide-react";
import { COMPONENTS } from "#/data/components";
import styles from "./page.module.css";

import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Palette,
    title: "AIテーマ生成",
    description:
      "プロンプトから自動的にCSS変数を生成。OpenAI、Gemini、Anthropicの3つのLLMプロバイダーとブラウザ内蔵のGemini Nanoをサポート。",
  },
  {
    icon: Accessibility,
    title: "アクセシビリティ",
    description:
      "React Aria Componentsをベースに構築され、キーボード操作、スクリーンリーダー、フォーカス管理に対応。",
  },
  {
    icon: Zap,
    title: "Next.js対応",
    description:
      "App Routerに最適化。サーバーコンポーネントでのテーマ生成により、高速な初期表示を実現。",
  },
  {
    icon: ShieldCheck,
    title: "型安全",
    description:
      "TypeScript strictモードで実装。Zodスキーマによるランタイム検証で、AIが生成するテーマも型安全。",
  },
  {
    icon: Variable,
    title: "CSS変数ベース",
    description:
      "テーマはCSS変数で管理。既存のスタイルシステムとの統合が容易で、カスタマイズも自由自在。",
  },
  {
    icon: Layers,
    title: `${COMPONENTS.length}個のコンポーネント`,
    description:
      "フォーム、レイアウト、表示、ナビゲーション、タイポグラフィの5カテゴリで充実したコンポーネント群。",
  },
];

export default function Home() {
  return (
    <article>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>React UI Component Library</p>
        <Heading level="h1" className={styles.heroTitle}>
          プロンプトひとつで、
          <br />
          サイトの表情を変える。
        </Heading>
        <p className="docs-lead">
          Ginga UIは、LLMを活用したテーマ生成機能を持つReact
          UIコンポーネントライブラリです。
        </p>
        <div className={styles.actions}>
          <Anchor href="/quick-start" variant="button" size="lg">
            はじめる
            <ArrowRight aria-hidden="true" />
          </Anchor>
          <Anchor
            href="/theme-generation"
            variant="button"
            buttonVariant="light"
            size="lg"
          >
            テーマ生成を試す
          </Anchor>
          <Anchor
            href="/components"
            variant="button"
            buttonVariant="ghost"
            size="lg"
          >
            コンポーネント一覧
          </Anchor>
        </div>
      </section>

      <section className="docs-section" aria-labelledby="features-heading">
        <Heading level="h2" id="features-heading">
          特徴
        </Heading>
        <div className={styles.featuresGrid}>
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <Card key={title} className={styles.featureCard}>
              <span className={styles.featureIcon} aria-hidden="true">
                <Icon />
              </span>
              <Heading level="h3" className={styles.featureTitle}>
                {title}
              </Heading>
              <Paragraph className={styles.featureDescription}>
                {description}
              </Paragraph>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="docs-section"
        aria-labelledby="getting-started-heading"
      >
        <Heading level="h2" id="getting-started-heading">
          はじめ方
        </Heading>
        <Paragraph>
          Ginga
          UIを使い始めるのは簡単です。パッケージをインストールして、コンポーネントをインポートするだけ。詳しい手順は
          <Anchor href="/quick-start">クイックスタート</Anchor>
          をご覧ください。
        </Paragraph>
      </section>
    </article>
  );
}
