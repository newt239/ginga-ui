"use client";

import {
  Slider,
  SliderLabel,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Slider defaultValue={50}>
      <SliderLabel>Volume</SliderLabel>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export function CustomRangeExample() {
  return (
    <Slider defaultValue={0} minValue={-50} maxValue={50}>
      <SliderLabel>Balance</SliderLabel>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export function RangeExample() {
  return (
    <Slider defaultValue={[20, 80]}>
      <SliderLabel>Price range</SliderLabel>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb index={0} />
        <SliderThumb index={1} />
      </SliderTrack>
    </Slider>
  );
}

export function WithStepsExample() {
  return (
    <Slider defaultValue={50} step={10}>
      <SliderLabel>Volume level (steps of 10)</SliderLabel>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export function DisabledExample() {
  return (
    <Slider defaultValue={50} disabled>
      <SliderLabel>Disabled slider</SliderLabel>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}
