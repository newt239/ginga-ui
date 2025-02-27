"use client";

import { cn } from "@ginga-ui/utils";
import { Input as AriaInput } from "react-aria-components";

import styles from "./Input.module.css";

export type InputProps = React.ComponentProps<typeof AriaInput>;

export const Input: React.FC<InputProps> = ({ className, type, ...props }) => {
  return (
    <AriaInput type={type} className={cn(styles.input, className)} {...props} />
  );
};
