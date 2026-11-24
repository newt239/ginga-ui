import { Check, ChevronDown } from "lucide-react";

import { ComboBox, ComboBoxItem } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ComboBox> = {
  title: "Forms/ComboBox",
  component: ComboBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

const PREFECTURES = [
  { id: "hokkaido", name: "北海道" },
  { id: "aomori", name: "青森県" },
  { id: "tokyo", name: "東京都" },
  { id: "kanagawa", name: "神奈川県" },
  { id: "osaka", name: "大阪府" },
  { id: "kyoto", name: "京都府" },
  { id: "fukuoka", name: "福岡県" },
  { id: "okinawa", name: "沖縄県" },
];

export const Basic: Story = {
  render: () => (
    <ComboBox
      label="都道府県"
      placeholder="入力して絞り込む"
      icon={<ChevronDown />}
      checkIcon={<Check />}
    >
      {PREFECTURES.map((p) => (
        <ComboBoxItem key={p.id} id={p.id}>
          {p.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  ),
};

export const DefaultIcon: Story = {
  render: () => (
    <ComboBox label="都道府県" defaultSelectedKey="tokyo">
      {PREFECTURES.map((p) => (
        <ComboBoxItem key={p.id} id={p.id}>
          {p.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <ComboBox
      label="都道府県"
      description="お届け先の都道府県を選んでください"
      errorMessage="都道府県を選んでください"
      required
      icon={<ChevronDown />}
    >
      {PREFECTURES.map((p) => (
        <ComboBoxItem key={p.id} id={p.id}>
          {p.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ComboBox
      label="都道府県"
      disabled
      defaultSelectedKey="osaka"
      icon={<ChevronDown />}
    >
      {PREFECTURES.map((p) => (
        <ComboBoxItem key={p.id} id={p.id}>
          {p.name}
        </ComboBoxItem>
      ))}
    </ComboBox>
  ),
};
