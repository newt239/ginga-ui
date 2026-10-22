import { Heading, Paragraph } from "@ginga-ui/core";
import { notFound } from "next/navigation";
import { CodeBlock } from "#/components/code-block";
import { getComponentById } from "#/data/components";
import { EXAMPLE_CONFIGS } from "#/data/configs";
import { EXAMPLES } from "#/examples";
import { getDictionary } from "#/i18n/dictionaries";
import { getExampleSource } from "#/lib/get-example-code";
import { highlightCode } from "#/lib/shiki";
import styles from "./component-doc.module.css";

import type { Locale } from "#/i18n/locales";

type ComponentDocProps = {
  id: string;
  locale: Locale;
};

export async function ComponentDoc({ id, locale }: ComponentDocProps) {
  const component = getComponentById(id);
  const examples = EXAMPLES[locale][id];

  if (!component || !examples) {
    notFound();
  }

  const { components } = getDictionary(locale);
  const installCode = `import { ${component.name} } from "@ginga-ui/core";`;

  return (
    <article>
      <Heading level="h1">{component.name}</Heading>
      <p className="docs-lead">{component.description[locale]}</p>

      <section className="docs-section">
        <Heading level="h2" id="install">
          {components.install}
        </Heading>
        <CodeBlock
          code={installCode}
          highlightedCode={await highlightCode(installCode, "tsx")}
        />
      </section>

      {(EXAMPLE_CONFIGS[id] ?? []).map(({ name }) => {
        const ExampleComponent = examples[name];
        if (!ExampleComponent) return null;

        return (
          <Example key={name} id={id} name={name} locale={locale}>
            <ExampleComponent />
          </Example>
        );
      })}
    </article>
  );
}

const toKebabCase = (value: string) =>
  value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

type ExampleProps = {
  id: string;
  name: string;
  locale: Locale;
  children: React.ReactNode;
};

async function Example({ id, name, locale, children }: ExampleProps) {
  const config = EXAMPLE_CONFIGS[id]?.find((c) => c.name === name);
  const source = await getExampleSource(locale, id, name);
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
            {config.title[locale]}
          </Heading>
          <Paragraph>{config.description[locale]}</Paragraph>
        </>
      ) : null}

      <div className={styles.example}>
        <div className={styles.examplePreview} data-toc-ignore>
          {children}
        </div>
        <CodeBlock files={files} variant="attached" />
      </div>
    </section>
  );
}
