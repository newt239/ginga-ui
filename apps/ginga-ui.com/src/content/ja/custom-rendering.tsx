import { Heading, Paragraph, Table } from "@ginga-ui/core";
import { HighlightedCodeBlock } from "#/components/highlighted-code-block";
import styles from "../custom-rendering.module.css";

const LINK_EXAMPLE = `import { Anchor } from "@ginga-ui/core";
import NextLink from "next/link";

export function DocsLink() {
  return (
    <Anchor href="/docs" render={(props) => <NextLink {...props} />}>
      ドキュメント
    </Anchor>
  );
}`;

const BUTTON_LINK_EXAMPLE = `<Anchor
  href="/signup"
  variant="button"
  render={(props) => <NextLink {...props} />}
>
  登録する
</Anchor>`;

const MERGE_PROPS_EXAMPLE = `<Box
  render={({ className, ...props }) => (
    <div {...props} className={\`\${className} my-layout\`} />
  )}
>
  …
</Box>`;

const RENDER_PROPS_EXAMPLE = `<Button
  render={(props, { isPressed }) => (
    <button {...props} data-pressed-label={isPressed ? "押下中" : undefined} />
  )}
>
  送信
</Button>`;

const TARGETS = [
  {
    component: "Anchor",
    target: "a 要素。href がないときは render を使わず span で描画します",
  },
  {
    component: "Modal",
    target: "内側のモーダル本体。背景のオーバーレイは対象外です",
  },
  {
    component: "Drawer / Popover",
    target: "外側の要素。中に自動で入る要素は対象外です",
  },
  {
    component: "Table",
    target: "table 要素。外側のスクロール用コンテナは対象外です",
  },
  {
    component: "AccordionTrigger",
    target: "中のボタン。外側の見出し要素は対象外です",
  },
  {
    component: "ToastRegion",
    target: "通知を並べる領域。個々の通知は対象外です",
  },
  {
    component: "DialogTrigger / PopoverTrigger",
    target: "DOM を持たないため render を受け取りません",
  },
];

export async function CustomRenderingContent() {
  return (
    <article>
      <Heading level={1}>要素の差し替え</Heading>
      <Paragraph>
        すべてのコンポーネントは
        <code>render</code>
        を受け取ります。関数を渡すと、ginga-ui
        のスタイルと挙動を保ったまま、ルート要素を
        <code>next/link</code>
        などの別のコンポーネントで描画できます。
      </Paragraph>

      <section className="docs-section">
        <Heading level={2} id="basic">
          基本的な使い方
        </Heading>
        <Paragraph>
          <code>render</code>
          には、描画に必要な props
          を受け取って要素を返す関数を渡します。次の例では、
          <code>Anchor</code>
          を Next.js の<code>Link</code>
          で描画し、クライアントサイドで遷移するリンクにしています。
        </Paragraph>
        <HighlightedCodeBlock code={LINK_EXAMPLE} lang="tsx" />
        <Paragraph>
          ボタンの見た目のリンクも同じように書けます。
          <code>Button</code>
          をリンクにしたい場合は、
          <code>{`<Anchor variant="button">`}</code>
          を使ってください。
        </Paragraph>
        <HighlightedCodeBlock code={BUTTON_LINK_EXAMPLE} lang="tsx" />
      </section>

      <section className="docs-section">
        <Heading level={2} id="rules">
          守ること
        </Heading>
        <ul>
          <li>
            既定と同じ種類の要素を描画してください。
            <code>Anchor</code>
            なら
            <code>a</code>
            要素、
            <code>Button</code>
            なら
            <code>button</code>
            要素です。別の種類にするとキーボード操作や読み上げが正しく動きません
          </li>
          <li>
            受け取った props は<code>ref</code>
            も含めてすべて要素に渡してください。ref
            を落とすとフォーカスの管理やイベントが動かなくなります
          </li>
          <li>Fragment は使わず、要素を 1 つだけ返してください</li>
        </ul>
      </section>

      <section className="docs-section">
        <Heading level={2} id="merge-props">
          自分の props と合わせる
        </Heading>
        <Paragraph>
          受け取った props には ginga-ui のクラス名や data
          属性が入っています。自分のクラス名を足すときは、上書きせずに結合してください。
        </Paragraph>
        <HighlightedCodeBlock code={MERGE_PROPS_EXAMPLE} lang="tsx" />
      </section>

      <section className="docs-section">
        <Heading level={2} id="render-props">
          状態を受け取る
        </Heading>
        <Paragraph>
          React Aria Components を使っているコンポーネントでは、2
          つ目の引数に押下中や選択中などの状態が渡されます。Box や Card などの
          HTML 要素で作っているコンポーネントでは
          <code>undefined</code>
          です。
        </Paragraph>
        <HighlightedCodeBlock code={RENDER_PROPS_EXAMPLE} lang="tsx" />
      </section>

      <section className="docs-section">
        <Heading level={2} id="targets">
          差し替わる要素
        </Heading>
        <Paragraph>
          <code>render</code>は<code>className</code>
          が付く要素に渡されます。複数の要素からなるコンポーネントで注意が必要なものは次のとおりです。
        </Paragraph>
        <div className={styles.tableContainer}>
          <Table
            data={TARGETS.map(({ component, target }) => ({
              component: <code>{component}</code>,
              target,
            }))}
            columns={[
              {
                key: "component",
                header: "コンポーネント",
                accessor: "component",
                isRowHeader: true,
              },
              { key: "target", header: "差し替わる要素", accessor: "target" },
            ]}
            striped
            aria-label="render で差し替わる要素の一覧"
          />
        </div>
      </section>
    </article>
  );
}
