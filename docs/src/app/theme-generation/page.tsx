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

      <section className={styles.demoSection}>
        <Heading level="h2">ライブデモ</Heading>
        <Paragraph>
          下のフォームでAPIキーとプロンプトを入力して、リアルタイムでテーマ生成を試すことができます。
        </Paragraph>
        <ThemeGenerator />
      </section>

      <section className={styles.serverSideSection}>
        <Heading level="h2">サーバーサイドでの使用（推奨）</Heading>
        <Paragraph>
          本番環境では、サーバーサイドでテーマを生成することを強く推奨します。これによりAPIキーが露出せず、SEOやパフォーマンスも向上します。
        </Paragraph>

        <Heading level="h3" className={styles.envSubsection}>
          環境変数の設定
        </Heading>
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

        <Heading level="h3" className={styles.nextSubsection}>
          Next.js App Routerでの実装例
        </Heading>
        <CodeBlock
          code={`import { ThemeClient } from "@ginga-ui/core";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeClient = new ThemeClient({
    model: "gpt-4o-mini", // または "gemini-exp-1206", "claude-3-7-sonnet-latest"
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
            `import { ThemeClient } from "@ginga-ui/core";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeClient = new ThemeClient({
    model: "gpt-4o-mini", // または "gemini-exp-1206", "claude-3-7-sonnet-latest"
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

      <section className={styles.providersSection}>
        <Heading level="h2">サポートされているLLMプロバイダー</Heading>
        <Paragraph>
          ThemeClientは3つの主要なLLMプロバイダーをサポートしています。モデル名のプレフィックスから自動的にプロバイダーを判別します。
        </Paragraph>

        <div className={styles.providersContent}>
          <Heading level="h3">OpenAI</Heading>
          <ul className={styles.providersList}>
            <li>
              <code className={styles.inlineCode}>gpt-4o-mini</code>{" "}
              (デフォルト、高速・低コスト)
            </li>
            <li>
              <code className={styles.inlineCode}>gpt-4o</code> (高品質)
            </li>
            <li>
              <code className={styles.inlineCode}>o1</code> (推論モデル)
            </li>
          </ul>

          <Heading level="h3" className={styles.nextSubsection}>
            Google Gemini
          </Heading>
          <ul className={styles.providersList}>
            <li>
              <code className={styles.inlineCode}>gemini-exp-1206</code>{" "}
              (実験モデル)
            </li>
            <li>
              <code className={styles.inlineCode}>gemini-2.0-flash-exp</code>{" "}
              (高速)
            </li>
          </ul>

          <Heading level="h3" className={styles.nextSubsection}>
            Anthropic Claude
          </Heading>
          <ul className={styles.providersList}>
            <li>
              <code className={styles.inlineCode}>
                claude-3-7-sonnet-latest
              </code>{" "}
              (最新版)
            </li>
            <li>
              <code className={styles.inlineCode}>
                claude-3-5-sonnet-20241022
              </code>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.cssVarsSection}>
        <Heading level="h2">生成されるCSS変数</Heading>
        <Paragraph>
          ThemeClientは以下のCSS変数を生成します。これらは自動的にコントラスト比が検証され、アクセシビリティ基準（WCAG
          AA）を満たすように調整されます。
        </Paragraph>

        <div className={styles.tableContainer}>
          <table className={styles.cssTable}>
            <thead>
              <tr className={styles.tableHead}>
                <th className={styles.tableHeader}>変数名</th>
                <th className={styles.tableHeader}>説明</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <code>--color-primary</code>
                </td>
                <td className={styles.tableCell}>アクセントカラー</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <code>--color-secondary</code>
                </td>
                <td className={styles.tableCell}>テキストカラー</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <code>--color-background</code>
                </td>
                <td className={styles.tableCell}>背景色</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <code>--width-border</code>
                </td>
                <td className={styles.tableCell}>ボーダー幅</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <code>--size-radius</code>
                </td>
                <td className={styles.tableCell}>ボーダー半径</td>
              </tr>
              <tr>
                <td className={styles.tableCell}>
                  <code>--font-family</code>
                </td>
                <td className={styles.tableCell}>フォントファミリー</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Paragraph className={styles.scaleNote}>
          さらに、プライマリカラーとセカンダリカラーには、背景色との中間色を含む0-9のカラースケールが自動生成されます。
        </Paragraph>
      </section>
    </article>
  );
}
