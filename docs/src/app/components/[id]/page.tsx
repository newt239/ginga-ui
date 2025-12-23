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
  accordion: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "最もシンプルなアコーディオンの使用例です。",
    },
    {
      name: "MultipleExpansionExample",
      title: "複数展開",
      description: "複数のアコーディオンアイテムを同時に展開できます。",
    },
    {
      name: "DefaultClosedExample",
      title: "デフォルト閉じた状態",
      description: "初期状態で全て閉じているアコーディオンです。",
    },
    {
      name: "ControlledExample",
      title: "制御されたアコーディオン",
      description: "状態を外部から制御するアコーディオンです。",
    },
  ],
  anchor: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルなリンクの使用例です。",
    },
    {
      name: "ExternalExample",
      title: "外部リンク",
      description: "外部サイトへのリンクを新しいタブで開きます。",
    },
    {
      name: "DisabledExample",
      title: "無効化",
      description: "disabledプロップでリンクを無効化できます。",
    },
    {
      name: "ButtonVariantExample",
      title: "ボタンスタイル",
      description: "ボタンのようなスタイルでリンクを表示します。",
    },
  ],
  box: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルなボックスの使用例です。",
    },
    {
      name: "LayoutExample",
      title: "レイアウト",
      description: "Flexboxを使用したレイアウトの例です。",
    },
    {
      name: "CardStyleExample",
      title: "カードスタイル",
      description: "カードのようなスタイリングの例です。",
    },
    {
      name: "NestedExample",
      title: "ネスト",
      description: "ボックスをネストして複雑なレイアウトを作成します。",
    },
  ],
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
  card: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "ヘッダーとコンテンツを持つ基本的なカードです。",
    },
    {
      name: "WithFooterExample",
      title: "フッター付き",
      description: "フッターを持つカードの例です。",
    },
    {
      name: "MultipleCardsExample",
      title: "複数のカード",
      description: "グリッドレイアウトで複数のカードを表示します。",
    },
    {
      name: "SimpleExample",
      title: "シンプルなカード",
      description: "ヘッダーなしのシンプルなカードです。",
    },
  ],
  checkbox: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "単一のチェックボックスの使用例です。",
    },
    {
      name: "SelectedExample",
      title: "選択済み",
      description: "初期状態で選択されているチェックボックスです。",
    },
    {
      name: "DisabledExample",
      title: "無効化",
      description: "無効化されたチェックボックスの例です。",
    },
    {
      name: "CheckboxGroupExample",
      title: "チェックボックスグループ",
      description: "複数のチェックボックスをグループ化した例です。",
    },
  ],
  dialog: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルなダイアログの使用例です。",
    },
    {
      name: "ConfirmationExample",
      title: "確認ダイアログ",
      description: "ユーザーの確認を求めるダイアログです。",
    },
    {
      name: "FormExample",
      title: "フォーム付き",
      description: "ダイアログ内にフォームを配置した例です。",
    },
    {
      name: "AlertExample",
      title: "アラート",
      description: "シンプルなアラートダイアログです。",
    },
  ],
  "form-control": [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "ラベル付きフォームコントロールの例です。",
    },
    {
      name: "WithIdExample",
      title: "ID指定",
      description: "明示的にIDを指定した例です。",
    },
    {
      name: "MultipleFieldsExample",
      title: "複数のフィールド",
      description: "複数のフォームコントロールを配置した例です。",
    },
    {
      name: "FormExample",
      title: "フォーム",
      description: "完全なフォームの例です。",
    },
  ],
  heading: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルな見出しの使用例です。",
    },
    {
      name: "AllLevelsExample",
      title: "全レベル",
      description: "h1からh6までの全レベルの見出しを表示します。",
    },
    {
      name: "PageStructureExample",
      title: "ページ構造",
      description: "適切な見出し階層を持つページ構造の例です。",
    },
    {
      name: "CustomStyleExample",
      title: "カスタムスタイル",
      description: "カスタムスタイルを適用した見出しです。",
    },
  ],
  image: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルな画像の使用例です。",
    },
    {
      name: "AvatarExample",
      title: "アバター",
      description: "アバター画像の例です。",
    },
    {
      name: "SizesExample",
      title: "サイズ",
      description: "様々なサイズの画像を表示します。",
    },
    {
      name: "RoundedExample",
      title: "角丸",
      description: "角丸の画像を表示します。",
    },
  ],
  input: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルなテキスト入力フィールドです。",
    },
    {
      name: "TypesExample",
      title: "様々なタイプ",
      description:
        "email、password、numberなど様々なタイプの入力フィールドです。",
    },
    {
      name: "DisabledExample",
      title: "無効化",
      description: "無効化された入力フィールドです。",
    },
    {
      name: "WithValueExample",
      title: "初期値あり",
      description: "初期値を持つ入力フィールドです。",
    },
  ],
  list: [
    {
      name: "UnorderedExample",
      title: "順序なしリスト",
      description: "順序なしリスト(ul)の使用例です。",
    },
    {
      name: "OrderedExample",
      title: "順序付きリスト",
      description: "順序付きリスト(ol)の使用例です。",
    },
    {
      name: "NestedExample",
      title: "ネストされたリスト",
      description: "リストをネストして階層構造を作成します。",
    },
    {
      name: "MixedExample",
      title: "混合リスト",
      description: "順序付きと順序なしを組み合わせたリストです。",
    },
  ],
  paragraph: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルな段落の使用例です。",
    },
    {
      name: "MultipleExample",
      title: "複数の段落",
      description: "複数の段落を表示します。",
    },
    {
      name: "LongTextExample",
      title: "長文",
      description: "長い文章を含む段落の例です。",
    },
    {
      name: "CustomStyleExample",
      title: "カスタムスタイル",
      description: "カスタムスタイルを適用した段落です。",
    },
  ],
  radio: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルなラジオグループの使用例です。",
    },
    {
      name: "DefaultValueExample",
      title: "デフォルト値",
      description: "初期選択値を持つラジオグループです。",
    },
    {
      name: "DisabledExample",
      title: "無効化",
      description: "一部のオプションが無効化されたラジオグループです。",
    },
    {
      name: "ControlledExample",
      title: "制御されたラジオグループ",
      description: "状態を外部から制御するラジオグループです。",
    },
  ],
  select: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルなセレクトボックスの使用例です。",
    },
    {
      name: "DisabledOptionsExample",
      title: "無効化されたオプション",
      description: "一部のオプションが無効化されたセレクトボックスです。",
    },
    {
      name: "DisabledExample",
      title: "無効化",
      description: "セレクトボックス全体を無効化した例です。",
    },
    {
      name: "ControlledExample",
      title: "制御されたセレクト",
      description: "状態を外部から制御するセレクトボックスです。",
    },
  ],
  slider: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルなスライダーの使用例です。",
    },
    {
      name: "CustomRangeExample",
      title: "カスタム範囲",
      description: "カスタムの最小値・最大値を持つスライダーです。",
    },
    {
      name: "WithStepsExample",
      title: "ステップ付き",
      description: "ステップを指定したスライダーです。",
    },
    {
      name: "DisabledExample",
      title: "無効化",
      description: "無効化されたスライダーです。",
    },
  ],
  switch: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルなスイッチの使用例です。",
    },
    {
      name: "SelectedExample",
      title: "選択済み",
      description: "初期状態でオンになっているスイッチです。",
    },
    {
      name: "DisabledExample",
      title: "無効化",
      description: "無効化されたスイッチの例です。",
    },
    {
      name: "ControlledExample",
      title: "制御されたスイッチ",
      description: "状態を外部から制御するスイッチです。",
    },
  ],
  tab: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルなタブの使用例です。",
    },
    {
      name: "VerticalExample",
      title: "垂直タブ",
      description: "垂直方向に配置されたタブです。",
    },
    {
      name: "DisabledTabExample",
      title: "無効化されたタブ",
      description: "一部のタブが無効化された例です。",
    },
    {
      name: "ControlledExample",
      title: "制御されたタブ",
      description: "状態を外部から制御するタブです。",
    },
  ],
  table: [
    {
      name: "BasicExample",
      title: "基本的な使い方",
      description: "シンプルなテーブルの使用例です。",
    },
    {
      name: "WithSelectionExample",
      title: "行選択",
      description: "行を選択できるテーブルです。",
    },
    {
      name: "UserTableExample",
      title: "ユーザーテーブル",
      description: "実用的なユーザーデータテーブルの例です。",
    },
    {
      name: "EmptyStateExample",
      title: "空の状態",
      description: "データがない場合の表示例です。",
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
