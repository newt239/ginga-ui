"use client";

import { ComponentProps } from "react";

import { Input as AriaInput } from "react-aria-components";

import styles from "./Input.module.css";

import { cn } from "@/lib/utils";

export type InputProps = ComponentProps<typeof AriaInput>;

const Input = ({ className, type, ...props }: InputProps) => {
  return (
    <AriaInput type={type} className={cn(styles.input, className)} {...props} />
  );
};

export default Input;
