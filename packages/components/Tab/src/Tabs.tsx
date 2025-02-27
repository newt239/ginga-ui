"use client";

import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
} from "react-aria-components";

import styles from "./Tabs.module.css";

import type { OmitStrict } from "@ginga-ui/utils";

import { cn } from "@ginga-ui/utils";

export type TabsProps = React.ComponentProps<typeof AriaTabs> & {
  orientation?: "horizontal" | "vertical";
};

export const Tabs: React.FC<TabsProps> = ({
  children,
  className,
  orientation = "horizontal",
  ...props
}) => {
  return (
    <AriaTabs
      className={cn(styles.tabs, className)}
      orientation={orientation}
      {...props}
    >
      {children}
    </AriaTabs>
  );
};

export type TabProps = OmitStrict<
  React.ComponentProps<typeof AriaTab>,
  "isDisabled"
> & {
  disabled?: boolean;
};

export const Tab: React.FC<TabProps> = ({
  children,
  disabled,
  className,
  ...props
}) => {
  return (
    <AriaTab
      isDisabled={disabled}
      className={cn(styles.tab, className)}
      {...props}
    >
      {children}
    </AriaTab>
  );
};

export type TabListProps = React.ComponentProps<typeof AriaTabList>;

export const TabList: React.FC<TabListProps> = ({ children, className, ...props }) => {
  return (
    <AriaTabList className={cn(styles["tab-list"], className)} {...props}>
      {children}
    </AriaTabList>
  );
};

export type TabPanelProps = React.ComponentProps<typeof AriaTabPanel>;

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaTabPanel className={cn(styles["tab-panel"], className)} {...props}>
      {children}
    </AriaTabPanel>
  );
};