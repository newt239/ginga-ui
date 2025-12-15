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
  switch (level) {
    case "h1":
      return (
        <h1
          className={cn("ginga-heading", "heading-level-1", className)}
          {...props}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn("ginga-heading", "heading-level-2", className)}
          {...props}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn("ginga-heading", "heading-level-3", className)}
          {...props}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={cn("ginga-heading", "heading-level-4", className)}
          {...props}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={cn("ginga-heading", "heading-level-5", className)}
          {...props}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={cn("ginga-heading", "heading-level-6", className)}
          {...props}
        >
          {children}
        </h6>
      );
    default:
      return null;
  }
};
