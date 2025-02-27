"use client";

import { useEffect, useId, useRef } from "react";

import { Label } from "react-aria-components";

import styles from "./form-control.module.css";

export type FormControlProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
};

export const FormControl: React.FC<FormControlProps> = ({
  title,
  htmlFor,
  className,
  children,
  ...props
}) => {
  const defaultHtmlFor = useId();
  const managedHtmlFor = htmlFor ?? defaultHtmlFor;
  const inputWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inputWrapper = inputWrapperRef.current;
    if (inputWrapper) {
      const input = inputWrapper.querySelector("input");
      if (input && !input.id) {
        input.id = managedHtmlFor;
      }
    }
  }, [managedHtmlFor]);

  return (
    <div {...props} className={`${styles["form-control"]} ${className ?? ""}`}>
      <Label htmlFor={managedHtmlFor} className={styles["form-control-label"]}>
        {title}
      </Label>
      <div ref={inputWrapperRef} className={styles["form-control-inner"]}>
        {children}
      </div>
    </div>
  );
};
