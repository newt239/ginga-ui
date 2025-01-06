"use client";

import React, { useEffect, useId, useRef } from "react";

import { Label } from "react-aria-components";

import styles from "./FormControl.module.css";

interface Props {
  title: string;
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}

const FormControl = React.forwardRef<HTMLDivElement, Props>(
  ({ title, htmlFor, className, children, ...props }, ref) => {
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
      <div
        {...props}
        className={`${styles["form-control"]} ${className ?? ""}`}
        ref={ref}
      >
        <Label
          htmlFor={managedHtmlFor}
          className={styles["form-control-label"]}
        >
          {title}
        </Label>
        <div ref={inputWrapperRef} className={styles["form-control-inner"]}>
          {children}
        </div>
      </div>
    );
  }
);

FormControl.displayName = "FormControl";

export default FormControl;
