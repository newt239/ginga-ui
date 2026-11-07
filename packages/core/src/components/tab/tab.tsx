"use client";

import { cn } from "@ginga-ui/utils";
import {
  composeRenderProps,
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type TabsProps = OmitStrict<
  React.ComponentProps<typeof AriaTabs>,
  "isDisabled"
> & {
  orientation?: "horizontal" | "vertical";
  fullWidth?: boolean;
  disabled?: boolean;
};

export const Tabs: React.FC<TabsProps> = ({
  children,
  disabled,
  className,
  orientation = "horizontal",
  fullWidth = false,
  ...props
}) => {
  return (
    <AriaTabs
      isDisabled={disabled}
      className={composeRenderProps(className, (c) => cn("ginga-tabs", c))}
      orientation={orientation}
      data-full-width={fullWidth || undefined}
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
      className={composeRenderProps(className, (c) => cn("ginga-tab", c))}
      {...props}
    >
      {children}
    </AriaTab>
  );
};

export type TabListProps = React.ComponentProps<typeof AriaTabList>;

export const TabList: React.FC<TabListProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaTabList
      className={composeRenderProps(className, (c) => cn("ginga-tab-list", c))}
      {...props}
    >
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
    <AriaTabPanel
      className={composeRenderProps(className, (c) => cn("ginga-tab-panel", c))}
      {...props}
    >
      {children}
    </AriaTabPanel>
  );
};
