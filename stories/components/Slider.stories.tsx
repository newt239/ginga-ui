import {
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "../../packages/components/slider/src";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Slider> = {
  title: "Forms/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "スライダーコンポーネントは、ユーザーが指定された範囲内の値を選択できるようにする制御要素です。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

// 基本的な使用例
export const Default: Story = {
  render: () => (
    <Slider defaultValue={50}>
      <div>音量</div>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "最も基本的なスライダーの使用例です。ラベル、出力値、トラック、サムを含みます。",
      },
    },
  },
};

// カスタム範囲の例
export const CustomRange: Story = {
  render: () => (
    <Slider defaultValue={0} minValue={-50} maxValue={50}>
      <div>バランス</div>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  ),
  parameters: {
    docs: {
      description: {
        story: "負の値を含むカスタム範囲を持つスライダーの例です。",
      },
    },
  },
};

// 無効状態の例
export const Disabled: Story = {
  render: () => (
    <Slider defaultValue={50} isDisabled>
      <div>音量</div>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  ),
  parameters: {
    docs: {
      description: {
        story: "無効状態のスライダーの例です。",
      },
    },
  },
};

// ステップ付きの例
export const WithSteps: Story = {
  render: () => (
    <Slider defaultValue={50} step={10}>
      <div>音量レベル</div>
      <SliderOutput />
      <SliderTrack>
        <SliderThumb />
      </SliderTrack>
    </Slider>
  ),
  parameters: {
    docs: {
      description: {
        story: "10単位でステップ移動するスライダーの例です。",
      },
    },
  },
};
