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
      <SliderLabel>音量</SliderLabel>
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
      <SliderLabel>バランス</SliderLabel>
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
      <SliderLabel>価格帯</SliderLabel>
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
      <SliderLabel>音量レベル(10刻み)</SliderLabel>
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
      <SliderLabel>無効化されたスライダー</SliderLabel>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}
