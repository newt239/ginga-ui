"use client";

import { cn } from "@ginga-ui/utils";
import {
  composeRenderProps,
  Label as AriaLabel,
  Slider as AriaSlider,
  SliderFill as AriaSliderFill,
  SliderOutput as AriaSliderOutput,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
} from "react-aria-components";
import "./index.css";

import type { OmitStrict } from "@ginga-ui/utils";

export type SliderProps = OmitStrict<
  React.ComponentProps<typeof AriaSlider>,
  "isDisabled"
> & {
  disabled?: boolean;
};

export const Slider: React.FC<SliderProps> = ({
  disabled,
  className,
  ...props
}) => {
  return (
    <AriaSlider
      isDisabled={disabled}
      className={composeRenderProps(className, (c) => cn("ginga-slider", c))}
      {...props}
    />
  );
};

export type SliderLabelProps = React.ComponentProps<typeof AriaLabel>;

export const SliderLabel: React.FC<SliderLabelProps> = ({
  className,
  ...props
}) => {
  return (
    <AriaLabel className={cn("ginga-slider-label", className)} {...props} />
  );
};

export type SliderOutputProps = React.ComponentProps<typeof AriaSliderOutput>;

export const SliderOutput: React.FC<SliderOutputProps> = ({
  className,
  ...props
}) => {
  return (
    <AriaSliderOutput
      className={composeRenderProps(className, (c) =>
        cn("ginga-slider-output", c)
      )}
      {...props}
    />
  );
};

export type SliderTrackProps = React.ComponentProps<typeof AriaSliderTrack>;

export const SliderTrack: React.FC<SliderTrackProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaSliderTrack
      className={composeRenderProps(className, (c) =>
        cn("ginga-slider-track", c)
      )}
      {...props}
    >
      {composeRenderProps(children, (resolvedChildren) => (
        <>
          <span className="ginga-slider-rail">
            <AriaSliderFill className="ginga-slider-fill" />
          </span>
          {resolvedChildren}
        </>
      ))}
    </AriaSliderTrack>
  );
};

export type SliderThumbProps = React.ComponentProps<typeof AriaSliderThumb>;

export const SliderThumb: React.FC<SliderThumbProps> = ({
  className,
  ...props
}) => {
  return (
    <AriaSliderThumb
      className={composeRenderProps(className, (c) =>
        cn("ginga-slider-thumb", c)
      )}
      {...props}
    />
  );
};
