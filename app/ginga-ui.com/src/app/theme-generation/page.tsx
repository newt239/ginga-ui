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
          code={`import { ThemeClient } from "@ginga-ui/utils";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeClient = new ThemeClient({
    provider: "openai", // または "google", "anthropic"
    // model を省略するとプロバイダーごとのデフォルトモデルが使われます
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
    provider: "openai", // または "google", "anthropic"
    // model を省略するとプロバイダーごとのデフォルトモデルが使われます
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
          ThemeClientは3つの主要なLLMプロバイダーをサポートしています。
          <code className={styles.inlineCode}>provider</code>
          で使用するプロバイダーを指定し、
          <code className={styles.inlineCode}>model</code>
          で任意のモデルを指定できます。model
          を省略した場合は各プロバイダーのデフォルトモデルが使われます。
        </Paragraph>

        <div className={styles.providersContent}>
          <Heading level="h3">
            OpenAI (
            <code className={styles.inlineCode}>
              provider: &quot;openai&quot;
            </code>
            )
          </Heading>
          <ul className={styles.providersList}>
            <li>
              <code className={styles.inlineCode}>gpt-5.6-luna</code>{" "}
              (デフォルト、高速・低コスト)
            </li>
            <li>
              <code className={styles.inlineCode}>gpt-5.6-terra</code>{" "}
              (バランス型)
            </li>
            <li>
              <code className={styles.inlineCode}>gpt-5.6-sol</code> (最高品質)
            </li>
          </ul>

          <Heading level="h3" className={styles.nextSubsection}>
            Google Gemini (
            <code className={styles.inlineCode}>
              provider: &quot;google&quot;
            </code>
            )
          </Heading>
          <ul className={styles.providersList}>
            <li>
              <code className={styles.inlineCode}>gemini-3.7-flash</code>{" "}
              (デフォルト、高速・低コスト)
            </li>
            <li>
              <code className={styles.inlineCode}>gemini-3.5-flash-lite</code>{" "}
              (最軽量)
            </li>
            <li>
              <code className={styles.inlineCode}>gemini-2.5-pro</code> (高品質)
            </li>
          </ul>

          <Heading level="h3" className={styles.nextSubsection}>
            Anthropic Claude (
            <code className={styles.inlineCode}>
              provider: &quot;anthropic&quot;
            </code>
            )
          </Heading>
          <ul className={styles.providersList}>
            <li>
              <code className={styles.inlineCode}>claude-haiku-4-5</code>{" "}
              (デフォルト、高速・低コスト)
            </li>
            <li>
              <code className={styles.inlineCode}>claude-sonnet-5</code>{" "}
              (バランス型)
            </li>
            <li>
              <code className={styles.inlineCode}>claude-opus-5</code>{" "}
              (最高品質)
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
