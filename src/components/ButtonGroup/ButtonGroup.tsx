"use client";

import React, { ComponentProps } from "react";
import { Group } from "react-aria-components";

import { cn } from "@/lib/utils";

import styles from "./ButtonGroup.module.css";

export type ButtonGroupProps = ComponentProps<typeof Group>;

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Group className={cn(styles["button-group"], className)} {...props}>
      {children}
    </Group>
  );
};

export default ButtonGroup;
