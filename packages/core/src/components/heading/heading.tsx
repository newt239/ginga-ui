"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = React.ComponentProps<"h1"> & {
  level: HeadingLevel;
};

export const Heading: React.FC<HeadingProps> = ({
  className,
  level,
  children,
  ...props
}) => {
  const Component = `h${level}` as const;
  return (
    <Component
      className={cn("ginga-heading", `ginga-heading-level-${level}`, className)}
      {...props}
    >
      {children}
    </Component>
  );
};
