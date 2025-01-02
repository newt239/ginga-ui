import React, { ComponentProps } from "react";

import {
  Slider as AriaSlider,
  SliderOutput as AriaSliderOutput,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
} from "react-aria-components";

import styles from "./Slider.module.css";

import { cn } from "@/lib/utils";

export type SliderProps = React.HTMLAttributes<HTMLInputElement> &
  ComponentProps<typeof AriaSlider>;

const Slider: React.FC<SliderProps> = ({ children, className, ...props }) => {
  return (
    <AriaSlider className={cn(styles.slider, className)} {...props}>
      {children}
    </AriaSlider>
  );
};

export type SliderOutputProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentProps<typeof AriaSliderOutput>;

export const SliderOutput: React.FC<SliderOutputProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaSliderOutput
      className={cn(styles["slider-output"], className)}
      {...props}
    >
      {children}
    </AriaSliderOutput>
  );
};

export type AriaSliderTrackProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentProps<typeof AriaSliderTrack>;

export const SliderTrack: React.FC<AriaSliderTrackProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaSliderTrack
      className={cn(styles["slider-track"], className)}
      {...props}
    >
      {children}
    </AriaSliderTrack>
  );
};

export type SliderThumbProps = React.HTMLAttributes<HTMLDivElement> &
  ComponentProps<typeof AriaSliderThumb>;

export const SliderThumb: React.FC<SliderThumbProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <AriaSliderThumb
      className={cn(styles["slider-thumb"], className)}
      {...props}
    >
      {children}
    </AriaSliderThumb>
  );
};

export default Slider;
