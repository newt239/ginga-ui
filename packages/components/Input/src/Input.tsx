"use client";

import { Input as AriaInput } from "react-aria-components";

import styles from "./Input.module.css";

import { cn } from "@ginga-ui/utils";

export type InputProps = React.ComponentProps<typeof AriaInput>;

export const Input: React.FC<InputProps> = ({ className, type, ...props }) => {
  return (
    <AriaInput type={type} className={cn(styles.input, className)} {...props} />
  );
};