"use client";

import styles from "./Paragraph.module.css";

import { cn } from "@/lib/utils";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph: React.FC<ParagraphProps> = ({ className, ...props }) => {
  return <p className={cn(styles.paragraph, className)} {...props} />;
};

export default Paragraph;
