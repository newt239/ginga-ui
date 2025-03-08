"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  ...props
}) => {
  return <p className={cn("ginga-paragraph", className)} {...props} />;
};
