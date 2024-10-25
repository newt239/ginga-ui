import React, { ComponentProps } from "react";

import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
} from "react-aria-components";

import styles from "./Tabs.module.css";

import { cn } from "@/lib/utils";

export type TabProps = ComponentProps<typeof AriaTab>;

const Tab: React.FC<TabProps> = ({ children, className, ...props }) => {
  return (
    <AriaTab className={cn(styles.Tab, className)} {...props}>
      {children}
    </AriaTab>
  );
};

export type TabsProps = ComponentProps<typeof AriaTabs>;

const Tabs: React.FC<TabsProps> = ({ children, className, ...props }) => {
  return (
    <AriaTabs className={cn(styles.Tabs, className)} {...props}>
      {children}
    </AriaTabs>
  );
};

export type TabListProps = ComponentProps<typeof AriaTabList>;

const TabList: React.FC<TabListProps> = ({ children, className, ...props }) => {
  return (
    <AriaTabList className={cn(styles.TabList, className)} {...props}>
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
    <AriaTabPanel className={cn(styles.TabPanel, className)} {...props}>
      {children}
    </AriaTabPanel>
  );
};

export { Tab, TabList, TabPanel, Tabs };
