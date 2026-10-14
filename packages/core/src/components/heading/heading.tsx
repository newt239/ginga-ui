"use client";

import { cn } from "@ginga-ui/utils";
import "./index.css";

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading: React.FC<HeadingProps> = ({
  className,
  level,
  children,
  ...props
}) => {
  const Component = level;
  return (
    <Component
      className={cn(
        "ginga-heading",
        `ginga-heading-level-${level.slice(1)}`,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
