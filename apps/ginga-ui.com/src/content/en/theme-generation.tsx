import { Heading, Paragraph, Table } from "@ginga-ui/core";
import { ThemeGenerator } from "#/components/theme-generator";
import { HighlightedCodeBlock } from "#/components/highlighted-code-block";
import styles from "../theme-generation.module.css";

const CSS_VARIABLES = [
  { name: "--color-primary", description: "Accent color" },
  { name: "--color-secondary", description: "Text color" },
  { name: "--color-background", description: "Background color" },
  { name: "--width-border", description: "Border width" },
  { name: "--size-radius", description: "Border radius" },
  { name: "--font-family", description: "Font family" },
];

export async function ThemeGenerationContent() {
  return (
    <article>
      <Heading level="h1">Theme Generation</Heading>
      <Paragraph>
        The defining feature of Ginga UI is automatic theme generation powered
        by LLMs. Just enter a prompt, and AI generates CSS variables that
        restyle your entire site.
      </Paragraph>

      <section className="docs-section">
        <Heading level="h2" id="live-demo">
          Live demo
        </Heading>
        <Paragraph>
          Enter a prompt in the form below to try theme generation in real time.
          The &quot;Free tier&quot; works without an API key but is limited to
          100 generations across all users in the last 24 hours. With &quot;Your
          own API key&quot;, you can choose any provider and model. If you
          choose &quot;Gemini Nano&quot;, no API key is needed and generation
          runs entirely in your browser.
        </Paragraph>
        <ThemeGenerator />
      </section>

      <section className="docs-section">
        <Heading level="h2" id="server-side">
          Server-side usage
        </Heading>
        <Paragraph>
          In production, we strongly recommend generating themes on the server.
          This keeps your API key private and also improves SEO and performance.
        </Paragraph>

        <Heading level="h3" id="environment-variables">
          Setting environment variables
        </Heading>
        <Paragraph>
          First, set the API key for your LLM provider as an environment
          variable.
        </Paragraph>
        <HighlightedCodeBlock
          filename=".env.local"
          code={`OPENAI_API_KEY=sk-...
# or
GOOGLE_GENERATIVE_AI_API_KEY=...
# or
ANTHROPIC_API_KEY=...`}
          lang="bash"
        />

        <Heading level="h3" id="nextjs-example">
          Example with the Next.js App Router
        </Heading>
        <HighlightedCodeBlock
          filename="app/layout.tsx"
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
    "Mysteries of the universe"
  );

  return (
    <html lang="en">
      <body>
        <style>{CSSCode}</style>
        {children}
      </body>
    </html>
  );
}`}
          lang="tsx"
        />
      </section>

      <section className="docs-section">
        <Heading level="h2" id="browser">
          In-browser usage
        </Heading>
        <Paragraph>
          Specifying <code>provider: &quot;browser&quot;</code> generates themes
          with Gemini Nano, built into Chrome and Edge. No API key or server
          requests are needed, and generation runs entirely on the device. Only
          in this case, call it from a Client Component rather than a Server
          Component, since it works only in the browser.
        </Paragraph>
        <Paragraph>
          Use <code>getBrowserAIAvailability()</code> to check whether it is
          available. It returns <code>&quot;unavailable&quot;</code>,{" "}
          <code>&quot;downloadable&quot;</code>,{" "}
          <code>&quot;downloading&quot;</code>, or{" "}
          <code>&quot;available&quot;</code>. In unsupported environments, fall
          back to a cloud provider. The first use downloads several gigabytes of
          model data, so we recommend showing progress with{" "}
          <code>onDownloadProgress</code>.
        </Paragraph>
        <HighlightedCodeBlock
          filename="components/browser-theme-button.tsx"
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

    const { CSSCode } = await themeClient.generateTheme("Stillness of the deep sea", {
      onDownloadProgress: (progress) => {
        console.log(\`Downloading: \${Math.round(progress * 100)}%\`);
      },
    });

    setCss(CSSCode);
  };

  return (
    <>
      <button onClick={generate}>Generate theme</button>
      <style>{css}</style>
    </>
  );
}`}
          lang="tsx"
        />
      </section>

      <section className="docs-section">
        <Heading level="h2" id="providers">
          Supported LLM providers
        </Heading>
        <Paragraph>
          ThemeClient supports three cloud LLM providers and Gemini Nano built
          into the browser. Specify the provider with <code>provider</code> and
          any model with <code>model</code>. If you omit model, the
          provider&apos;s default model is used.
        </Paragraph>

        <div>
          <Heading level="h3" id="provider-openai">
            OpenAI
          </Heading>
          <ul>
            <li>
              <code>gpt-6-luna</code> (default)
            </li>
            <li>
              <code>gpt-6.1-sol</code>
            </li>
            <li>
              <code>gpt-6-astra</code>
            </li>
          </ul>

          <Heading level="h3" id="provider-google">
            Google Gemini
          </Heading>
          <ul>
            <li>
              <code>gemini-3.8-flash</code> (default)
            </li>
            <li>
              <code>gemini-3.5-flash-lite</code>
            </li>
            <li>
              <code>gemini-4-argon</code>
            </li>
          </ul>

          <Heading level="h3" id="provider-anthropic">
            Anthropic Claude
          </Heading>
          <ul>
            <li>
              <code>claude-haiku-5-5</code> (default)
            </li>
            <li>
              <code>claude-sonnet-5-5</code>
            </li>
            <li>
              <code>claude-opus-5-5</code>
            </li>
          </ul>

          <Heading level="h3" id="provider-browser">
            Gemini Nano
          </Heading>
          <ul>
            <li>
              <code>gemini-nano</code>
            </li>
          </ul>
          <Paragraph>
            No API key is required, and it runs in the browser. You don&apos;t
            need to specify <code>model</code>.
          </Paragraph>
        </div>
      </section>

      <section className="docs-section">
        <Heading level="h2" id="css-variables">
          Generated CSS variables
        </Heading>
        <Paragraph>
          ThemeClient generates the following CSS variables. Their contrast
          ratios are verified automatically and adjusted to meet accessibility
          standards.
        </Paragraph>

        <div className={styles.tableContainer}>
          <Table
            data={CSS_VARIABLES.map(({ name, description }) => ({
              name: <code>{name}</code>,
              description,
            }))}
            columns={[
              {
                key: "name",
                header: "Variable",
                accessor: "name",
                isRowHeader: true,
              },
              {
                key: "description",
                header: "Description",
                accessor: "description",
              },
            ]}
            striped
            aria-label="List of CSS variables"
          />
        </div>

        <Paragraph>
          In addition, a 0-9 color scale, including intermediate colors blended
          with the background color, is generated automatically for the primary
          and secondary colors.
        </Paragraph>
      </section>
    </article>
  );
}
