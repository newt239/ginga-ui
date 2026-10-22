"use client";

import { Slider, SliderOutput, SliderThumb, SliderTrack } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Slider defaultValue={50}>
      <div>Volume</div>
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
      <div>Balance</div>
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
      <div>Price range</div>
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
      <div>Volume level (steps of 10)</div>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export function DisabledExample() {
  return (
    <Slider defaultValue={50} isDisabled>
      <div>Disabled slider</div>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}
