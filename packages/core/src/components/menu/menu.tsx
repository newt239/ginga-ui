"use client";

import { createContext, useContext } from "react";

import { cn } from "@ginga-ui/utils";
import {
  composeRenderProps,
  Header as AriaHeader,
  Keyboard as AriaKeyboard,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  MenuTrigger as AriaMenuTrigger,
  Popover as AriaPopover,
  Separator as AriaSeparator,
  SubmenuTrigger as AriaSubmenuTrigger,
} from "react-aria-components";

import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";
import type {
  MenuItemProps as AriaMenuItemProps,
  MenuProps as AriaMenuProps,
  MenuSectionProps as AriaMenuSectionProps,
  PopoverProps as AriaPopoverProps,
  SeparatorProps as AriaSeparatorProps,
} from "react-aria-components";

type MenuIcons = {
  checkIcon?: React.ReactNode;
  submenuIcon?: React.ReactNode;
};

const MenuIconsContext = createContext<MenuIcons>({});

export type MenuTriggerProps = React.ComponentProps<typeof AriaMenuTrigger>;

export const MenuTrigger: React.FC<MenuTriggerProps> = (props) => {
  return <AriaMenuTrigger {...props} />;
};

export type SubmenuTriggerProps = React.ComponentProps<
  typeof AriaSubmenuTrigger
>;

export const SubmenuTrigger: React.FC<SubmenuTriggerProps> = (props) => {
  return <AriaSubmenuTrigger {...props} />;
};

export type MenuProps = OmitStrict<AriaMenuProps<object>, "children"> &
  Pick<AriaPopoverProps, "placement" | "offset"> &
  MenuIcons & {
    children?: React.ReactNode;
  };

export const Menu: React.FC<MenuProps> = ({
  children,
  className,
  placement,
  offset,
  checkIcon,
  submenuIcon,
  ...props
}) => {
  const parentIcons = useContext(MenuIconsContext);
  const icons: MenuIcons = {
    checkIcon: checkIcon ?? parentIcons.checkIcon,
    submenuIcon: submenuIcon ?? parentIcons.submenuIcon,
  };
  const popoverProps: Pick<AriaPopoverProps, "placement" | "offset"> = {
    ...(placement !== undefined && { placement }),
    ...(offset !== undefined && { offset }),
  };

  return (
    <AriaPopover className="ginga-menu-popover" {...popoverProps}>
      <MenuIconsContext.Provider value={icons}>
        <AriaMenu
          className={composeRenderProps(className, (c) => cn("ginga-menu", c))}
          {...props}
        >
          {children}
        </AriaMenu>
      </MenuIconsContext.Provider>
    </AriaPopover>
  );
};

export type MenuItemProps = OmitStrict<
  AriaMenuItemProps<object>,
  "isDisabled" | "children"
> & {
  children?: React.ReactNode;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  shortcut?: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className,
  disabled,
  startIcon,
  shortcut,
  textValue,
  ...props
}) => {
  const { checkIcon, submenuIcon } = useContext(MenuIconsContext);

  return (
    <AriaMenuItem
      isDisabled={disabled}
      className={composeRenderProps(className, (c) => cn("ginga-menu-item", c))}
      textValue={
        textValue ?? (typeof children === "string" ? children : undefined)
      }
      {...props}
    >
      {({ selectionMode, isSelected, hasSubmenu }) => (
        <>
          {selectionMode !== "none" && (
            <span className="ginga-menu-item-check" aria-hidden="true">
              {isSelected && checkIcon}
            </span>
          )}
          {startIcon && (
            <span className="ginga-menu-item-icon" aria-hidden="true">
              {startIcon}
            </span>
          )}
          <span className="ginga-menu-item-label">{children}</span>
          {shortcut && (
            <AriaKeyboard className="ginga-menu-item-shortcut">
              {shortcut}
            </AriaKeyboard>
          )}
          {hasSubmenu && (
            <span className="ginga-menu-item-submenu" aria-hidden="true">
              {submenuIcon}
            </span>
          )}
        </>
      )}
    </AriaMenuItem>
  );
};

export type MenuSectionProps = OmitStrict<
  AriaMenuSectionProps<object>,
  "children"
> & {
  children?: React.ReactNode;
  title?: React.ReactNode;
};

export const MenuSection: React.FC<MenuSectionProps> = ({
  children,
  className,
  title,
  ...props
}) => {
  return (
    <AriaMenuSection className={cn("ginga-menu-section", className)} {...props}>
      {title && (
        <AriaHeader className="ginga-menu-section-title">{title}</AriaHeader>
      )}
      {children}
    </AriaMenuSection>
  );
};

export type MenuSeparatorProps = AriaSeparatorProps;

export const MenuSeparator: React.FC<MenuSeparatorProps> = ({
  className,
  ...props
}) => {
  return (
    <AriaSeparator
      className={cn("ginga-menu-separator", className)}
      {...props}
    />
  );
};
