"use client";

import { type ComponentProps } from "react";

import {
  Button as AriaButton,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
} from "react-aria-components";

import styles from "./Accordion.module.css";

import { cn } from "@/lib/utils";

export type AccordionProps = ComponentProps<typeof DisclosureGroup>;

const Accordion = ({ children, className, ...props }: AccordionProps) => {
  return (
    <DisclosureGroup className={cn(styles.accordion, className)} {...props}>
      {children}
    </DisclosureGroup>
  );
};

export type AccordionItemProps = ComponentProps<typeof Disclosure>;

const AccordionItem = ({
  children,
  className,
  ...props
}: AccordionItemProps) => {
  return (
    <Disclosure className={cn(styles["accordion-item"], className)} {...props}>
      {children}
    </Disclosure>
  );
};

export type AccordionTriggerProps = ComponentProps<typeof AriaButton>;

const AccordionTrigger = ({
  children,
  className,
  ...props
}: AccordionTriggerProps) => {
  return (
    <AriaButton
      slot="trigger"
      className={cn(styles["accordion-trigger"], className)}
      {...props}
    >
      {children}
    </AriaButton>
  );
};

export type AccordionContentProps = ComponentProps<typeof DisclosurePanel>;

const AccordionContent = ({
  children,
  className,
  ...props
}: AccordionContentProps) => {
  return (
    <DisclosurePanel
      className={cn(styles["accordion-content"], className)}
      {...props}
    >
      {children}
    </DisclosurePanel>
  );
};

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
