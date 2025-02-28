import { Switch } from "@ginga-ui/core";

import "@ginga-ui/core/index.css";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "スイッチコンポーネントは、2つの状態（オン/オフ）を切り替えることができる制御要素です。",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    children: "通知を許可",
  },
  parameters: {
    docs: {
      description: {
        story: "最も基本的なスイッチの使用例です。ラベルとともに使用されます。",
      },
    },
  },
};

export const DefaultChecked: Story = {
  args: {
    children: "通知を許可",
    selected: true,
  },
  parameters: {
    docs: {
      description: {
        story: "デフォルトでオン状態のスイッチの例です。",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "通知を許可",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "無効状態のスイッチの例です。オンとオフの両方の状態を表示しています。",
      },
    },
  },
};
