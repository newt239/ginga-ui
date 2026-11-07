import { createElement } from "react";

import type { DOMRenderProps } from "react-aria-components";

type Tag = keyof React.JSX.IntrinsicElements;

type DataAttributes = { [key: `data-${string}`]: unknown };

export type ElementRenderProps<E extends Tag> = DOMRenderProps<E, undefined>;

export function renderElement<E extends Tag>(
  tag: E,
  render: ElementRenderProps<E>["render"],
  props: React.JSX.IntrinsicElements[E] & DataAttributes
): React.ReactElement {
  return render ? render(props, undefined) : createElement(tag, props);
}
