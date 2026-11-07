import { cn } from "@ginga-ui/utils";
import { renderElement } from "../../lib/render-element";
import "./index.css";

import type { ElementRenderProps } from "../../lib/render-element";

export type BoxProps = React.ComponentProps<"div"> & ElementRenderProps<"div">;

export const Box: React.FC<BoxProps> = ({ className, render, ...props }) =>
  renderElement("div", render, {
    className: cn("ginga-box", className),
    ...props,
  });
