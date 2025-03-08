"use client";

import { cn } from "@ginga-ui/utils";
import {
  Slider as AriaSlider,
  SliderOutput as AriaSliderOutput,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
} from "react-aria-components";
import "./index.css";

export type SliderProps = React.HTMLAttributes<HTMLInputElement> &
  React.ComponentProps<typeof AriaSlider>;

export const Slider: React.FC<SliderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaSlider className={cn("ginga-slider", className)} {...props}>
      {children}
    </AriaSlider>
  );
};

export type SliderOutputProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof AriaSliderOutput>;

export const SliderOutput: React.FC<SliderOutputProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaSliderOutput
      className={cn("ginga-slider-output", className)}
      {...props}
    >
      {children}
    </AriaSliderOutput>
  );
};

export type AriaSliderTrackProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof AriaSliderTrack>;

export const SliderTrack: React.FC<AriaSliderTrackProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaSliderTrack className={cn("ginga-slider-track", className)} {...props}>
      {children}
    </AriaSliderTrack>
  );
};

export type SliderThumbProps = React.HTMLAttributes<HTMLDivElement> &
  React.ComponentProps<typeof AriaSliderThumb>;

export const SliderThumb: React.FC<SliderThumbProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaSliderThumb className={cn("ginga-slider-thumb", className)} {...props}>
      {children}
    </AriaSliderThumb>
  );
};
