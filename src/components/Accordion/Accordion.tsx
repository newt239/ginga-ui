import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState } from "react";
import styles from "./Accordion.module.css";

type AccordionContextType = {
  expanded: string[];
  // eslint-disable-next-line no-unused-vars
  toggleItem: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

// Accordionコンポーネントのプロパティ型
type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: "single" | "multiple";
  defaultValue?: string[];
};

// AccordionTriggerのプロパティ型
type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  icon?: React.ReactNode; // カスタムアイコンのための新しいプロップ
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    { className, type = "single", defaultValue = [], children, ...props },
    ref
  ) => {
    const [expanded, setExpanded] = useState<string[]>(defaultValue);

    const toggleItem = (value: string) => {
      if (type === "single") {
        setExpanded(expanded.includes(value) ? [] : [value]);
      } else {
        setExpanded(
          expanded.includes(value)
            ? expanded.filter((item) => item !== value)
            : [...expanded, value]
        );
      }
    };

    return (
      <AccordionContext.Provider value={{ expanded, toggleItem }}>
        <div ref={ref} className={cn(styles.Accordion, className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(styles.AccordionItem, className)} {...props}>
      {children}
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, value, icon, ...props }, ref) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionTrigger must be used within Accordion");

  const { expanded, toggleItem } = context;
  const isExpanded = expanded.includes(value);

  return (
    <button
      ref={ref}
      className={cn(styles.AccordionTrigger, className)}
      onClick={() => toggleItem(value)}
      aria-expanded={isExpanded}
      {...props}
    >
      {children}
      {icon || (
        <span
          className={cn(
            styles.AccordionIcon,
            isExpanded && styles.AccordionIconExpanded
          )}
        />
      )}
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("AccordionContent must be used within Accordion");

  const { expanded } = context;
  const isExpanded = expanded.includes(value);

  return (
    <div
      ref={ref}
      className={cn(
        styles.AccordionContent,
        isExpanded
          ? styles.AccordionContentExpanded
          : styles.AccordionContentCollapsed,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
