import { Heading, Paragraph } from "@ginga-ui/core";
import { notFound } from "next/navigation";
import { CodeBlock } from "#/components/code-block";
import { getComponentById } from "#/data/components";
import { EXAMPLE_CONFIGS } from "#/data/configs";
import { getExampleSource } from "#/lib/get-example-code";
import { highlightCode } from "#/lib/shiki";
import styles from "./component-doc.module.css";

import type { ReactNode } from "react";

type ComponentDocProps = {
  id: string;
  children: ReactNode;
};

export async function ComponentDoc({ id, children }: ComponentDocProps) {
  const component = getComponentById(id);

  if (!component) {
    notFound();
  }

  const installCode = `import { ${component.name} } from "@ginga-ui/core";`;

  return (
    <article>
      <Heading level="h1">{component.name}</Heading>
      <p className="docs-lead">{component.description}</p>

      <section className="docs-section">
        <Heading level="h2" id="install">
          インストール
        </Heading>
        <CodeBlock
          code={installCode}
          highlightedCode={await highlightCode(installCode, "tsx")}
        />
      </section>

      {children}
    </article>
  );
}

const toKebabCase = (value: string) =>
  value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

type ExampleProps = {
  id: string;
  name: string;
  children: ReactNode;
};

export async function Example({ id, name, children }: ExampleProps) {
  const config = EXAMPLE_CONFIGS[id]?.find((c) => c.name === name);
  const source = await getExampleSource(id, name);
  const files = [
    {
      filename: `${id}.tsx`,
      code: source.tsx,
      highlightedCode: await highlightCode(source.tsx, "tsx"),
    },
    ...(source.css
      ? [
          {
            filename: `${id}.module.css`,
            code: source.css,
            highlightedCode: await highlightCode(source.css, "css"),
          },
        ]
      : []),
  ];

  return (
    <section className={styles.exampleSection}>
      {config ? (
        <>
          <Heading level="h2" id={toKebabCase(name)}>
            {config.title}
          </Heading>
          <Paragraph>{config.description}</Paragraph>
        </>
      ) : null}

      <div className={styles.examplePreview} data-toc-ignore>
        {children}
      </div>

      <CodeBlock files={files} />
    </section>
  );
}
