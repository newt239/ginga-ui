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
  // Generate a theme on the server (optional)
  const themeClient = new ThemeClient({ provider: "openai" });
  const { CSSCode } = await themeClient.generateTheme("Modern and clean design");

  return (
    <html lang="en">
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
      <Paragraph>This page uses an AI-generated theme.</Paragraph>
      <Button variant="filled">Get started</Button>
    </main>
  );
}`;

export async function QuickStartContent() {
  return (
    <article>
      <Heading level="h1">Quick Start</Heading>
      <Paragraph>
        A short guide to getting started with Ginga UI. You can start using its
        UI components in just three steps.
      </Paragraph>

      <section className="docs-section">
        <Heading level="h2" id="install">
          1. Installation
        </Heading>
        <Paragraph>Install Ginga UI with your package manager.</Paragraph>
        <HighlightedCodeBlock code="pnpm add @ginga-ui/core" lang="bash" />
        <Paragraph>If you use npm or yarn:</Paragraph>
        <HighlightedCodeBlock
          code={`npm install @ginga-ui/core
# or
yarn add @ginga-ui/core`}
          lang="bash"
        />
      </section>

      <section className="docs-section">
        <Heading level="h2" id="import-variables">
          2. Import CSS variables
        </Heading>
        <Paragraph>
          Each component's CSS is loaded automatically when you import it. In
          your root component, import only the theme's CSS variable definitions.
          With the Next.js App Router, add this to <code>layout.tsx</code>.
        </Paragraph>
        <HighlightedCodeBlock
          code={`import "@ginga-ui/core/variables.css";`}
          lang="tsx"
          filename="app/layout.tsx"
        />
      </section>

      <section className="docs-section">
        <Heading level="h2" id="use-components">
          3. Use components
        </Heading>
        <Paragraph>
          Import components from <code>@ginga-ui/core</code> and use them.
        </Paragraph>
        <HighlightedCodeBlock
          code={`import {
  Button,
  Card,
  Dialog,
  DialogTitle,
  DialogTrigger,
  Heading,
  Modal,
} from "@ginga-ui/core";

export default function App() {
  return (
    <Card>
      <Heading level="h2">My first Ginga UI app</Heading>
      <DialogTrigger>
        <Button variant="filled">Click me</Button>
        <Modal>
          <Dialog>
            <DialogTitle>Clicked!</DialogTitle>
            <Button slot="close">Close</Button>
          </Dialog>
        </Modal>
      </DialogTrigger>
    </Card>
  );
}`}
          lang="tsx"
        />
      </section>

      <section className="docs-section">
        <Heading level="h2" id="nextjs-example">
          Complete example with the Next.js App Router
        </Heading>
        <Paragraph>
          A complete setup example for the App Router in Next.js 13 and later.
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
          Next steps
        </Heading>
        <ul>
          <li>
            Browse <Anchor href="/components">all components</Anchor> to explore
            the available UI parts
          </li>
          <li>
            Try <Anchor href="/theme-generation">theme generation</Anchor> to
            see AI-powered styling in action
          </li>
          <li>Check each component's page for usage details and variations</li>
        </ul>
      </section>
    </article>
  );
}
