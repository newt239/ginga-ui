import { Heading, Paragraph } from "@ginga-ui/core";
import { ThemeGenerator } from "#/components/theme-generator";
import { CodeBlock } from "#/components/code-block";
import { highlightCode } from "#/lib/shiki";
import styles from "./page.module.css";

export default async function ThemeGenerationPage() {
  return (
    <article>
      <Heading level="h1">テーマ生成</Heading>
      <Paragraph>
        Ginga
        UIの最大の特徴は、LLMを活用した自動テーマ生成機能です。プロンプトを入力するだけで、AIがCSS変数を生成してサイト全体のデザインを変更できます。
      </Paragraph>

      <section className="docs-section">
        <Heading level="h2">ライブデモ</Heading>
        <Paragraph>
          下のフォームでAPIキーとプロンプトを入力して、リアルタイムでテーマ生成を試すことができます。プロバイダーに「Gemini
          Nano」を選んだ場合はAPIキーが不要で、生成はすべてブラウザ内で完結します。
        </Paragraph>
        <ThemeGenerator />
      </section>

      <section className="docs-section">
        <Heading level="h2">サーバーサイドでの使用（推奨）</Heading>
        <Paragraph>
          本番環境では、サーバーサイドでテーマを生成することを強く推奨します。これによりAPIキーが露出せず、SEOやパフォーマンスも向上します。
        </Paragraph>

        <Heading level="h3">環境変数の設定</Heading>
        <Paragraph>
          まず、使用するLLMプロバイダーのAPIキーを環境変数に設定します。
        </Paragraph>
        <CodeBlock
          code={`# .env.local
OPENAI_API_KEY=sk-...
# または
GOOGLE_GENERATIVE_AI_API_KEY=...
# または
ANTHROPIC_API_KEY=...`}
          highlightedCode={await highlightCode(
            `# .env.local
OPENAI_API_KEY=sk-...
# または
GOOGLE_GENERATIVE_AI_API_KEY=...
# または
ANTHROPIC_API_KEY=...`,
            "bash"
          )}
        />

        <Heading level="h3">Next.js App Routerでの実装例</Heading>
        <CodeBlock
          code={`import { ThemeClient } from "@ginga-ui/utils";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeClient = new ThemeClient({
    provider: "openai",
  });

  const { CSSCode } = await themeClient.generateTheme(
    "宇宙の神秘"
  );

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
            `import { ThemeClient } from "@ginga-ui/utils";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeClient = new ThemeClient({
    provider: "openai",
  });

  const { CSSCode } = await themeClient.generateTheme(
    "宇宙の神秘"
  );

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
      </section>

      <section className="docs-section">
        <Heading level="h2">ブラウザ内での使用（Gemini Nano）</Heading>
        <Paragraph>
          <code>provider: &quot;browser&quot;</code>
          を指定すると、ChromeやEdgeが搭載するGemini
          Nanoでテーマを生成します。APIキーもサーバーへの通信も不要で、生成はすべて端末上で完結します。この指定のときだけはServer
          ComponentではなくClient
          Componentから呼び出してください。ブラウザ内でしか動作しないためです。
        </Paragraph>
        <Paragraph>
          利用できるかどうかは
          <code>getBrowserAIAvailability()</code>
          で判定できます。戻り値は
          <code>&quot;unavailable&quot;</code> /{" "}
          <code>&quot;downloadable&quot;</code> /{" "}
          <code>&quot;downloading&quot;</code> /{" "}
          <code>&quot;available&quot;</code>
          で、未対応環境ではクラウドのプロバイダーにフォールバックしてください。初回利用時はモデルのダウンロードに数GBの通信が発生するため、
          <code>onDownloadProgress</code>
          で進捗を表示することを推奨します。
        </Paragraph>
        <CodeBlock
          code={`"use client";

import { getBrowserAIAvailability, ThemeClient } from "@ginga-ui/utils";
import { useState } from "react";

export function BrowserThemeButton() {
  const [css, setCss] = useState("");

  const generate = async () => {
    const availability = await getBrowserAIAvailability();

    if (availability === "unavailable") {
      return;
    }

    const themeClient = new ThemeClient({ provider: "browser" });

    const { CSSCode } = await themeClient.generateTheme("深海の静けさ", {
      onDownloadProgress: (progress) => {
        console.log(\`ダウンロード中: \${Math.round(progress * 100)}%\`);
      },
    });

    setCss(CSSCode);
  };

  return (
    <>
      <button onClick={generate}>テーマを生成</button>
      <style>{css}</style>
    </>
  );
}`}
          highlightedCode={await highlightCode(
            `"use client";

import { getBrowserAIAvailability, ThemeClient } from "@ginga-ui/utils";
import { useState } from "react";

export function BrowserThemeButton() {
  const [css, setCss] = useState("");

  const generate = async () => {
    const availability = await getBrowserAIAvailability();

    if (availability === "unavailable") {
      return;
    }

    const themeClient = new ThemeClient({ provider: "browser" });

    const { CSSCode } = await themeClient.generateTheme("深海の静けさ", {
      onDownloadProgress: (progress) => {
        console.log(\`ダウンロード中: \${Math.round(progress * 100)}%\`);
      },
    });

    setCss(CSSCode);
  };

  return (
    <>
      <button onClick={generate}>テーマを生成</button>
      <style>{css}</style>
    </>
  );
}`,
            "tsx"
          )}
        />
      </section>

      <section className="docs-section">
        <Heading level="h2">サポートされているLLMプロバイダー</Heading>
        <Paragraph>
          ThemeClientは3つのクラウドLLMプロバイダーと、ブラウザ内蔵のGemini
          Nanoをサポートしています。
          <code>provider</code>
          で使用するプロバイダーを指定し、
          <code>model</code>
          で任意のモデルを指定できます。model
          を省略した場合は各プロバイダーのデフォルトモデルが使われます。
        </Paragraph>

        <div>
          <Heading level="h3">
            OpenAI — <code>provider: &quot;openai&quot;</code>
          </Heading>
          <ul>
            <li>
              <code>gpt-6-luna</code> — デフォルト、高速・低コスト
            </li>
            <li>
              <code>gpt-6.1-sol</code> — バランス型
            </li>
            <li>
              <code>gpt-6-astra</code> — 最高品質
            </li>
          </ul>

          <Heading level="h3">
            Google Gemini — <code>provider: &quot;google&quot;</code>
          </Heading>
          <ul>
            <li>
              <code>gemini-3.8-flash</code> — デフォルト、高速・低コスト
            </li>
            <li>
              <code>gemini-3.5-flash-lite</code> — 最軽量
            </li>
            <li>
              <code>gemini-4-argon</code> — 高品質
            </li>
          </ul>

          <Heading level="h3">
            Anthropic Claude — <code>provider: &quot;anthropic&quot;</code>
          </Heading>
          <ul>
            <li>
              <code>claude-haiku-5-5</code> — デフォルト、高速・低コスト
            </li>
            <li>
              <code>claude-sonnet-5-5</code> — バランス型
            </li>
            <li>
              <code>claude-opus-5-5</code> — 最高品質
            </li>
          </ul>

          <Heading level="h3">
            Gemini Nano — <code>provider: &quot;browser&quot;</code>
          </Heading>
          <ul>
            <li>
              <code>gemini-nano</code> — APIキー不要、ブラウザ内で実行。
              <code>model</code>
              の指定は不要です
            </li>
          </ul>
        </div>
      </section>

      <section className="docs-section">
        <Heading level="h2">生成されるCSS変数</Heading>
        <Paragraph>
          ThemeClientは以下のCSS変数を生成します。これらは自動的にコントラスト比が検証され、アクセシビリティ基準（WCAG
          AA）を満たすように調整されます。
        </Paragraph>

        <div className={styles.tableContainer}>
          <table className={styles.cssTable}>
            <thead>
              <tr>
                <th>変数名</th>
                <th>説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>--color-primary</code>
                </td>
                <td>アクセントカラー</td>
              </tr>
              <tr>
                <td>
                  <code>--color-secondary</code>
                </td>
                <td>テキストカラー</td>
              </tr>
              <tr>
                <td>
                  <code>--color-background</code>
                </td>
                <td>背景色</td>
              </tr>
              <tr>
                <td>
                  <code>--width-border</code>
                </td>
                <td>ボーダー幅</td>
              </tr>
              <tr>
                <td>
                  <code>--size-radius</code>
                </td>
                <td>ボーダー半径</td>
              </tr>
              <tr>
                <td>
                  <code>--font-family</code>
                </td>
                <td>フォントファミリー</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Paragraph>
          さらに、プライマリカラーとセカンダリカラーには、背景色との中間色を含む0-9のカラースケールが自動生成されます。
        </Paragraph>
      </section>
    </article>
  );
}
