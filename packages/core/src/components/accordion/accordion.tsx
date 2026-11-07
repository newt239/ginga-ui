"use client";

import { cn } from "@ginga-ui/utils";
import {
  Button as AriaButton,
  composeRenderProps,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading as AriaHeading,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type AccordionProps = OmitStrict<
  React.ComponentProps<typeof DisclosureGroup>,
  "isDisabled"
> & {
  disabled?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <DisclosureGroup
      className={composeRenderProps(className, (c) => cn("ginga-accordion", c))}
      isDisabled={disabled}
      {...props}
    >
      {children}
    </DisclosureGroup>
  );
};

export type AccordionItemProps = OmitStrict<
  React.ComponentProps<typeof Disclosure>,
  "isDisabled" | "isExpanded"
> & {
  disabled?: boolean;
  expanded?: boolean;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  className,
  disabled,
  expanded,
  ...props
}) => {
  return (
    <Disclosure
      className={composeRenderProps(className, (c) =>
        cn("ginga-accordion-item", c)
      )}
      isDisabled={disabled}
      isExpanded={expanded}
      {...props}
    >
      {children}
    </Disclosure>
  );
};

export type AccordionTriggerProps = OmitStrict<
  React.ComponentProps<typeof AriaButton>,
  "isDisabled"
> & {
  disabled?: boolean;
  level?: 2 | 3 | 4 | 5 | 6;
  icon?: React.ReactNode;
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
  disabled,
  level = 3,
  icon,
  ...props
}) => {
  return (
    <AriaHeading level={level} className="ginga-accordion-heading">
      <AriaButton
        slot="trigger"
        className={composeRenderProps(className, (c) =>
          cn("ginga-accordion-trigger", c)
        )}
        isDisabled={disabled}
        {...props}
      >
        {(renderProps) => (
          <>
            <span className="ginga-accordion-trigger-label">
              {typeof children === "function"
                ? children(renderProps)
                : children}
            </span>
            {icon && (
              <span className="ginga-accordion-icon" aria-hidden="true">
                {icon}
              </span>
            )}
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
      className={composeRenderProps(className, (c) =>
        cn("ginga-accordion-content", c)
      )}
      {...props}
    >
      <div className="ginga-accordion-content-inner">{children}</div>
    </DisclosurePanel>
  );
};
