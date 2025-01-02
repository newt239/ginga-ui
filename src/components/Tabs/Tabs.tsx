import React, { ComponentProps } from "react";

import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
} from "react-aria-components";

import styles from "./Tabs.module.css";

import { cn } from "@/lib/utils";

export type TabsProps = ComponentProps<typeof AriaTabs> & {
  orientation?: "horizontal" | "vertical";
};

const Tabs: React.FC<TabsProps> = ({
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

export type TabProps = ComponentProps<typeof AriaTab>;

const Tab: React.FC<TabProps> = ({ children, className, ...props }) => {
  return (
    <AriaTab className={cn(styles.tab, className)} {...props}>
      {children}
    </AriaTab>
  );
};

export type TabListProps = ComponentProps<typeof AriaTabList>;

const TabList: React.FC<TabListProps> = ({ children, className, ...props }) => {
  return (
    <AriaTabList className={cn(styles["tab-list"], className)} {...props}>
      {children}
    </AriaTabList>
  );
};

export type TabPanelProps = ComponentProps<typeof AriaTabPanel>;

const TabPanel: React.FC<TabPanelProps> = ({
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

export { Tab, TabList, TabPanel, Tabs };
