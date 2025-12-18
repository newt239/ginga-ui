import { Heading, Paragraph } from "@ginga-ui/core";
import { ThemeGenerator } from "#/components/theme-generator";
import { CodeBlock } from "#/components/code-block";
import { highlightCode } from "#/lib/shiki";

export default async function ThemeGenerationPage() {
  return (
    <article>
      <Heading level="h1">テーマ生成</Heading>
      <Paragraph>
        Ginga
        UIの最大の特徴は、LLMを活用した自動テーマ生成機能です。プロンプトを入力するだけで、AIがCSS変数を生成してサイト全体のデザインを変更できます。
      </Paragraph>

      <section style={{ marginTop: "3rem" }}>
        <Heading level="h2">ライブデモ</Heading>
        <Paragraph>
          下のフォームでAPIキーとプロンプトを入力して、リアルタイムでテーマ生成を試すことができます。
        </Paragraph>
        <ThemeGenerator />
      </section>

      <section style={{ marginTop: "4rem" }}>
        <Heading level="h2">サーバーサイドでの使用（推奨）</Heading>
        <Paragraph>
          本番環境では、サーバーサイドでテーマを生成することを強く推奨します。これによりAPIキーが露出せず、SEOやパフォーマンスも向上します。
        </Paragraph>

        <Heading level="h3" style={{ marginTop: "2rem" }}>
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

        <Heading level="h3" style={{ marginTop: "2rem" }}>
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

      <section style={{ marginTop: "3rem" }}>
        <Heading level="h2">サポートされているLLMプロバイダー</Heading>
        <Paragraph>
          ThemeClientは3つの主要なLLMプロバイダーをサポートしています。モデル名のプレフィックスから自動的にプロバイダーを判別します。
        </Paragraph>

        <div style={{ marginTop: "2rem" }}>
          <Heading level="h3">OpenAI</Heading>
          <ul style={{ lineHeight: 2 }}>
            <li>
              <code
                style={{
                  backgroundColor: "var(--color-primary-1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                }}
              >
                gpt-4o-mini
              </code>{" "}
              (デフォルト、高速・低コスト)
            </li>
            <li>
              <code
                style={{
                  backgroundColor: "var(--color-primary-1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                }}
              >
                gpt-4o
              </code>{" "}
              (高品質)
            </li>
            <li>
              <code
                style={{
                  backgroundColor: "var(--color-primary-1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                }}
              >
                o1
              </code>{" "}
              (推論モデル)
            </li>
          </ul>

          <Heading level="h3" style={{ marginTop: "2rem" }}>
            Google Gemini
          </Heading>
          <ul style={{ lineHeight: 2 }}>
            <li>
              <code
                style={{
                  backgroundColor: "var(--color-primary-1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                }}
              >
                gemini-exp-1206
              </code>{" "}
              (実験モデル)
            </li>
            <li>
              <code
                style={{
                  backgroundColor: "var(--color-primary-1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                }}
              >
                gemini-2.0-flash-exp
              </code>{" "}
              (高速)
            </li>
          </ul>

          <Heading level="h3" style={{ marginTop: "2rem" }}>
            Anthropic Claude
          </Heading>
          <ul style={{ lineHeight: 2 }}>
            <li>
              <code
                style={{
                  backgroundColor: "var(--color-primary-1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                }}
              >
                claude-3-7-sonnet-latest
              </code>{" "}
              (最新版)
            </li>
            <li>
              <code
                style={{
                  backgroundColor: "var(--color-primary-1)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                }}
              >
                claude-3-5-sonnet-20241022
              </code>
            </li>
          </ul>
        </div>
      </section>

      <section style={{ marginTop: "3rem" }}>
        <Heading level="h2">生成されるCSS変数</Heading>
        <Paragraph>
          ThemeClientは以下のCSS変数を生成します。これらは自動的にコントラスト比が検証され、アクセシビリティ基準（WCAG
          AA）を満たすように調整されます。
        </Paragraph>

        <div style={{ marginTop: "2rem" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid var(--color-primary-2)",
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "var(--color-primary-1)",
                  borderBottom: "1px solid var(--color-primary-2)",
                }}
              >
                <th style={{ padding: "0.75rem", textAlign: "left" }}>
                  変数名
                </th>
                <th style={{ padding: "0.75rem", textAlign: "left" }}>説明</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--color-primary-2)" }}>
                <td style={{ padding: "0.75rem" }}>
                  <code>--color-primary</code>
                </td>
                <td style={{ padding: "0.75rem" }}>アクセントカラー</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-primary-2)" }}>
                <td style={{ padding: "0.75rem" }}>
                  <code>--color-secondary</code>
                </td>
                <td style={{ padding: "0.75rem" }}>テキストカラー</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-primary-2)" }}>
                <td style={{ padding: "0.75rem" }}>
                  <code>--color-background</code>
                </td>
                <td style={{ padding: "0.75rem" }}>背景色</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-primary-2)" }}>
                <td style={{ padding: "0.75rem" }}>
                  <code>--width-border</code>
                </td>
                <td style={{ padding: "0.75rem" }}>ボーダー幅</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--color-primary-2)" }}>
                <td style={{ padding: "0.75rem" }}>
                  <code>--size-radius</code>
                </td>
                <td style={{ padding: "0.75rem" }}>ボーダー半径</td>
              </tr>
              <tr>
                <td style={{ padding: "0.75rem" }}>
                  <code>--font-family</code>
                </td>
                <td style={{ padding: "0.75rem" }}>フォントファミリー</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Paragraph style={{ marginTop: "1.5rem" }}>
          さらに、プライマリカラーとセカンダリカラーには、背景色との中間色を含む0-9のカラースケールが自動生成されます。
        </Paragraph>
      </section>
    </article>
  );
}
