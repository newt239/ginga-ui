"use client";

import { cn } from "@ginga-ui/utils";

import styles from "./Paragraph.module.css";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph: React.FC<ParagraphProps> = ({
  className,
  ...props
}) => {
  return <p className={cn(styles.paragraph, className)} {...props} />;
};
