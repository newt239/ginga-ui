import { Heading, Paragraph, Table } from "@ginga-ui/core";
import { HighlightedCodeBlock } from "#/components/highlighted-code-block";
import styles from "../custom-rendering.module.css";

const LINK_EXAMPLE = `import { Anchor } from "@ginga-ui/core";
import NextLink from "next/link";

export function DocsLink() {
  return (
    <Anchor href="/docs" render={(props) => <NextLink {...props} />}>
      Docs
    </Anchor>
  );
}`;

const BUTTON_LINK_EXAMPLE = `<Anchor
  href="/signup"
  variant="button"
  render={(props) => <NextLink {...props} />}
>
  Sign up
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
    <button {...props} data-pressed-label={isPressed ? "pressed" : undefined} />
  )}
>
  Submit
</Button>`;

const TARGETS = [
  {
    component: "Anchor",
    target:
      "The a element. Without href, render is not used and a span is drawn",
  },
  {
    component: "Modal",
    target: "The inner modal. The backdrop overlay is not replaced",
  },
  {
    component: "Drawer / Popover",
    target: "The outer element. Elements added inside are not replaced",
  },
  {
    component: "Table",
    target: "The table element. The outer scroll container is not replaced",
  },
  {
    component: "AccordionTrigger",
    target: "The inner button. The outer heading is not replaced",
  },
  {
    component: "ToastRegion",
    target: "The region that lists toasts. Individual toasts are not replaced",
  },
  {
    component: "DialogTrigger / PopoverTrigger",
    target: "They have no DOM element and do not accept render",
  },
];

export async function CustomRenderingContent() {
  return (
    <article>
      <Heading level={1}>Custom rendering</Heading>
      <Paragraph>
        Every component accepts <code>render</code>. Pass a function to draw the
        root element with another component such as <code>next/link</code> while
        keeping ginga-ui&apos;s styles and behavior.
      </Paragraph>

      <section className="docs-section">
        <Heading level={2} id="basic">
          Basic usage
        </Heading>
        <Paragraph>
          Pass <code>render</code> a function that receives the props needed for
          rendering and returns an element. The following example draws{" "}
          <code>Anchor</code> with the Next.js <code>Link</code> so that it
          navigates on the client side.
        </Paragraph>
        <HighlightedCodeBlock code={LINK_EXAMPLE} lang="tsx" />
        <Paragraph>
          A link that looks like a button works the same way. To use{" "}
          <code>Button</code> as a link, use{" "}
          <code>{`<Anchor variant="button">`}</code> instead.
        </Paragraph>
        <HighlightedCodeBlock code={BUTTON_LINK_EXAMPLE} lang="tsx" />
      </section>

      <section className="docs-section">
        <Heading level={2} id="rules">
          Requirements
        </Heading>
        <ul>
          <li>
            Render the same kind of element as the default, such as an{" "}
            <code>a</code> element for <code>Anchor</code> or a{" "}
            <code>button</code> element for <code>Button</code>. A different
            kind of element breaks keyboard interaction and screen reader output
          </li>
          <li>
            Pass all received props, including <code>ref</code>, to the element.
            Dropping the ref breaks focus management and events
          </li>
          <li>Return a single element, not a fragment</li>
        </ul>
      </section>

      <section className="docs-section">
        <Heading level={2} id="merge-props">
          Merging your own props
        </Heading>
        <Paragraph>
          The received props include ginga-ui&apos;s class names and data
          attributes. When adding your own class name, combine it instead of
          overwriting it.
        </Paragraph>
        <HighlightedCodeBlock code={MERGE_PROPS_EXAMPLE} lang="tsx" />
      </section>

      <section className="docs-section">
        <Heading level={2} id="render-props">
          Reading state
        </Heading>
        <Paragraph>
          Components built on React Aria Components pass state such as pressed
          or selected as the second argument. For components built on plain HTML
          elements, such as Box and Card, it is <code>undefined</code>.
        </Paragraph>
        <HighlightedCodeBlock code={RENDER_PROPS_EXAMPLE} lang="tsx" />
      </section>

      <section className="docs-section">
        <Heading level={2} id="targets">
          Which element is replaced
        </Heading>
        <Paragraph>
          <code>render</code> is passed to the element that receives{" "}
          <code>className</code>. These components made of several elements need
          attention.
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
                header: "Component",
                accessor: "component",
                isRowHeader: true,
              },
              { key: "target", header: "Replaced element", accessor: "target" },
            ]}
            striped
            aria-label="Elements replaced by render"
          />
        </div>
      </section>
    </article>
  );
}
