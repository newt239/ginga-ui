import { Slider, SliderOutput, SliderThumb, SliderTrack } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Slider defaultValue={50}>
      <div>音量</div>
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
      <div>バランス</div>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}

export function WithStepsExample() {
  return (
    <Slider defaultValue={50} step={10}>
      <div>音量レベル(10刻み)</div>
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
      <div>無効化されたスライダー</div>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  );
}
