"use client";

import { cn } from "@/lib/utils";
import React, { type ComponentProps } from "react";
import {
  Button as AriaButton,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
} from "react-aria-components";
import styles from "./Accordion.module.css";

export type AccordionProps = ComponentProps<typeof DisclosureGroup>;

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <DisclosureGroup
        className={cn(styles.accordion, className)}
        ref={ref}
        {...props}
      >
        {children}
      </DisclosureGroup>
    );
  }
);
Accordion.displayName = "Accordion";

export type AccordionItemProps = ComponentProps<typeof Disclosure>;

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Disclosure
        className={cn(styles["accordion-item"], className)}
        ref={ref}
        {...props}
      >
        {children}
      </Disclosure>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

export type AccordionTriggerProps = ComponentProps<typeof AriaButton>;

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, ref) => {
  return (
    <AriaButton
      slot="trigger"
      className={cn(styles["accordion-trigger"], className)}
      ref={ref}
      {...props}
    >
      {children}
    </AriaButton>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

export type AccordionContentProps = ComponentProps<typeof DisclosurePanel>;

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <DisclosurePanel
      className={cn(styles["accordion-content"], className)}
      ref={ref}
      {...props}
    >
      {children}
    </DisclosurePanel>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
