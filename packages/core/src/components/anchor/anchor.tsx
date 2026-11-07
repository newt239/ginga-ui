"use client";

import { cn } from "@ginga-ui/utils";
import { Link as AriaLink, composeRenderProps } from "react-aria-components";
import "../button/index.css";
import "./index.css";

import type { ButtonSize, ButtonVariant } from "../button";
import type { OmitStrict } from "@ginga-ui/utils";
import type { LinkRenderProps } from "react-aria-components";

type AriaLinkProps = React.ComponentProps<typeof AriaLink>;

export type AnchorProps = OmitStrict<AriaLinkProps, "isDisabled" | "render"> & {
  render?: (
    props: React.ComponentProps<"a"> & { href: string },
    renderProps: LinkRenderProps
  ) => React.ReactElement;
  variant?: "default" | "button";
  buttonVariant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const Anchor: React.FC<AnchorProps> = ({
  variant = "default",
  buttonVariant = "filled",
  size = "md",
  disabled,
  startIcon,
  endIcon,
  className,
  children,
  render,
  ...props
}) => {
  const renderLink: AriaLinkProps["render"] =
    render &&
    ((domProps, renderProps) =>
      "href" in domProps ? (
        render(domProps, renderProps)
      ) : (
        <span {...domProps} />
      ));

  if (variant === "button") {
    return (
      <AriaLink
        data-variant={buttonVariant}
        data-size={size}
        isDisabled={disabled}
        className={composeRenderProps(className, (c) => cn("ginga-button", c))}
        render={renderLink}
        {...props}
      >
        {(renderProps) => (
          <>
            {startIcon}
            {typeof children === "function" ? children(renderProps) : children}
            {endIcon}
          </>
        )}
      </AriaLink>
    );
  }

  return (
    <AriaLink
      isDisabled={disabled}
      className={composeRenderProps(className, (c) => cn("ginga-anchor", c))}
      render={renderLink}
      {...props}
    >
      {children}
    </AriaLink>
  );
};
