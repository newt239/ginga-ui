"use client";

import { cn } from "@ginga-ui/utils";
import {
  Button as AriaButton,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
} from "react-aria-components";

import styles from "./accordion.module.css";

export type AccordionProps = React.ComponentProps<typeof DisclosureGroup>;

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <DisclosureGroup className={cn(styles.accordion, className)} {...props}>
      {children}
    </DisclosureGroup>
  );
};

export type AccordionItemProps = React.ComponentProps<typeof Disclosure>;

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Disclosure className={cn(styles["accordion-item"], className)} {...props}>
      {children}
    </Disclosure>
  );
};

export type AccordionTriggerProps = React.ComponentProps<typeof AriaButton>;

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
  ...props
}) => {
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

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <DisclosurePanel
      className={cn(styles["accordion-content"], className)}
      {...props}
    >
      {children}
    </DisclosurePanel>
  );
};
