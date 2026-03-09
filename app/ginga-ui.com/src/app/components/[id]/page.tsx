import { CodeBlock } from "#/components/code-block";
import type { ComponentMetadata } from "#/data/components";
import { COMPONENTS, getComponentById } from "#/data/components";
import { EXAMPLE_CONFIGS } from "#/data/configs";
import { getExampleCode } from "#/lib/get-example-code";
import { highlightCode } from "#/lib/shiki";
import { Heading, Paragraph } from "@ginga-ui/core";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const component = getComponentById(id);

  if (!component) {
    notFound();
  }

  const exampleConfigs = EXAMPLE_CONFIGS[id] || [];

  // 各例のコンポーネントとコードを動的インポート
  const examples = await Promise.all(
    exampleConfigs.map(async (config) => {
      const code = await getExampleCode(id, config.name);
      const highlightedCode = await highlightCode(code, "tsx");

      // 動的インポート
      const module = await import(`#/examples/${id}`);
      const ExampleComponent = module[config.name];

      return {
        ...config,
        code,
        highlightedCode,
        Component: ExampleComponent,
      };
    })
  );

  return (
    <article>
      <Heading level="h1">{component.name}</Heading>
      <Paragraph>{component.description}</Paragraph>

      <section className={styles.installSection}>
        <Heading level="h2">インストール</Heading>
        <CodeBlock
          code={`import { ${component.name} } from "@ginga-ui/core";`}
          highlightedCode={await highlightCode(
            `import { ${component.name} } from "@ginga-ui/core";`,
            "tsx"
          )}
        />
      </section>

      {examples.map((example) => (
        <section key={example.name} className={styles.exampleSection}>
          <Heading level="h2">{example.title}</Heading>
          <Paragraph>{example.description}</Paragraph>

          <div className={styles.examplePreview}>
            <example.Component />
          </div>

          <CodeBlock
            code={example.code}
            highlightedCode={example.highlightedCode}
          />
        </section>
      ))}
    </article>
  );
}

export function generateStaticParams() {
  return COMPONENTS.map((component: ComponentMetadata) => ({
    id: component.id,
  }));
}

export const dynamicParams = false;
