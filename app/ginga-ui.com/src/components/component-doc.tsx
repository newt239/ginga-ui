import { Heading, Paragraph } from "@ginga-ui/core";
import { notFound } from "next/navigation";
import { CodeBlock } from "#/components/code-block";
import { getComponentById } from "#/data/components";
import { EXAMPLE_CONFIGS } from "#/data/configs";
import { getExampleCode } from "#/lib/get-example-code";
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
      <Paragraph>{component.description}</Paragraph>

      <section className={styles.installSection}>
        <Heading level="h2">インストール</Heading>
        <CodeBlock
          code={installCode}
          highlightedCode={await highlightCode(installCode, "tsx")}
        />
      </section>

      {children}
    </article>
  );
}

type ExampleProps = {
  id: string;
  name: string;
  children: ReactNode;
};

export async function Example({ id, name, children }: ExampleProps) {
  const config = EXAMPLE_CONFIGS[id]?.find((c) => c.name === name);
  const code = await getExampleCode(id, name);
  const highlightedCode = await highlightCode(code, "tsx");

  return (
    <section className={styles.exampleSection}>
      {config ? (
        <>
          <Heading level="h2">{config.title}</Heading>
          <Paragraph>{config.description}</Paragraph>
        </>
      ) : null}

      <div className={styles.examplePreview}>{children}</div>

      <CodeBlock code={code} highlightedCode={highlightedCode} />
    </section>
  );
}
