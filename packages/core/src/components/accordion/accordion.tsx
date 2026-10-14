"use client";

import { cn } from "@ginga-ui/utils";
import {
  Button as AriaButton,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading as AriaHeading,
} from "react-aria-components";

import { ChevronDownIcon } from "../../icons";
import "./index.css";

export type AccordionProps = React.ComponentProps<typeof DisclosureGroup>;

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <DisclosureGroup className={cn("ginga-accordion", className)} {...props}>
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
    <Disclosure className={cn("ginga-accordion-item", className)} {...props}>
      {children}
    </Disclosure>
  );
};

export type AccordionTriggerProps = React.ComponentProps<typeof AriaButton> & {
  level?: 2 | 3 | 4 | 5 | 6;
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
  level = 3,
  ...props
}) => {
  return (
    <AriaHeading level={level} className="ginga-accordion-heading">
      <AriaButton
        slot="trigger"
        className={cn("ginga-accordion-trigger", className)}
        {...props}
      >
        {(renderProps) => (
          <>
            <span className="ginga-accordion-trigger-label">
              {typeof children === "function"
                ? children(renderProps)
                : children}
            </span>
            <ChevronDownIcon className="ginga-accordion-icon" />
          </>
        )}
      </AriaButton>
    </AriaHeading>
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
      className={cn("ginga-accordion-content", className)}
      {...props}
    >
      <div className="ginga-accordion-content-inner">{children}</div>
    </DisclosurePanel>
  );
};
