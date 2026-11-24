import { Search, X } from "lucide-react";

import { SearchField } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchField> = {
  title: "Forms/SearchField",
  component: SearchField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchField>;

export const Default: Story = {
  args: {
    label: "検索",
    placeholder: "キーワードを入力",
    defaultValue: "Ginga UI",
  },
};

export const WithIcons: Story = {
  args: {
    "aria-label": "検索",
    placeholder: "コンポーネントを検索",
    icon: <Search />,
    clearIcon: <X />,
  },
};

export const WithDescription: Story = {
  args: {
    label: "検索",
    placeholder: "キーワードを入力",
    description: "Enter で検索、Esc でクリアします",
    icon: <Search />,
  },
};

export const Disabled: Story = {
  args: {
    label: "検索",
    defaultValue: "Ginga UI",
    disabled: true,
    icon: <Search />,
  },
};
