import { notFound } from "next/navigation";
import { Heading, Paragraph } from "@ginga-ui/core";
import { CodeBlock } from "#/components/code-block";
import { getComponentById, COMPONENTS } from "#/data/components";
import type { ComponentMetadata } from "#/data/components";
import { getExampleCode } from "#/lib/get-example-code";
import { highlightCode } from "#/lib/shiki";

type ExampleConfig = {
  name: string;
  title: string;
  description: string;
};

// 各コンポーネントの例の設定
const EXAMPLE_CONFIGS: Record<string, ExampleConfig[]> = {
  button: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "最もシンプルなボタンの使用例です。",
    },
    {
      name: "VariantsExample",
      title: "バリエーション",
      description:
        "4種類のバリアント(filled、light、outline、reverse)を表示します。",
    },
    {
      name: "DisabledExample",
      title: "無効化",
      description: "disabledプロップでボタンを無効化できます。",
    },
    {
      name: "FormExample",
      title: "フォームでの使用",
      description: "フォーム送信ボタンとしての使用例です。",
    },
  ],
};

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

      <section style={{ marginTop: "3rem" }}>
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
        <section key={example.name} style={{ marginTop: "3rem" }}>
          <Heading level="h2">{example.title}</Heading>
          <Paragraph>{example.description}</Paragraph>

          <div
            style={{
              padding: "2rem",
              marginTop: "1rem",
              border: "1px solid var(--color-primary-2)",
              borderRadius: "var(--size-radius)",
              backgroundColor: "var(--color-primary-0)",
            }}
          >
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
