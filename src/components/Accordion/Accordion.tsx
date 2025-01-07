"use client";

import {
  Button as AriaButton,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
} from "react-aria-components";

import styles from "./Accordion.module.css";

import { cn } from "@/lib/utils";

export type AccordionProps = React.ComponentProps<typeof DisclosureGroup>;

const Accordion = ({ children, className, ...props }: AccordionProps) => {
  return (
    <DisclosureGroup className={cn(styles.accordion, className)} {...props}>
      {children}
    </DisclosureGroup>
  );
};

export type AccordionItemProps = React.ComponentProps<typeof Disclosure>;

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

export type AccordionTriggerProps = React.ComponentProps<typeof AriaButton>;

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

export type AccordionContentProps = React.ComponentProps<
  typeof DisclosurePanel
>;

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
