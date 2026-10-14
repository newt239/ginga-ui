import { Anchor } from "@ginga-ui/core";

import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => <Anchor href={href}>{children}</Anchor>,
    ...components,
  };
}
