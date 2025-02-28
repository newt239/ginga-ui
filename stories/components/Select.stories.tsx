import { Select } from "@ginga-ui/core";
import "@ginga-ui/core/index.css";
import { ListBoxItem } from "react-aria-components";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  render: () => (
    <Select defaultSelectedKey="cat" label="Favorite Animal">
      <ListBoxItem id="cat">Cat</ListBoxItem>
      <ListBoxItem id="dog">Dog</ListBoxItem>
      <ListBoxItem id="bird">Bird</ListBoxItem>
    </Select>
  ),
};

// 無効なオプションを含むセレクト
export const WithDisabledOptions: Story = {
  render: () => (
    <Select defaultSelectedKey="dog" label="Select a Pet">
      <ListBoxItem id="dog">Dog</ListBoxItem>
      <ListBoxItem id="cat">Cat</ListBoxItem>
      <ListBoxItem id="hamster" isDisabled>
        Hamster (Out of Stock)
      </ListBoxItem>
      <ListBoxItem id="parrot">Parrot</ListBoxItem>
    </Select>
  ),
};

// 説明付きのオプションを持つセレクト
export const WithDescriptions: Story = {
  render: () => (
    <Select defaultSelectedKey="beginner" label="Skill Level">
      <ListBoxItem id="beginner" textValue="Beginner">
        <div>
          <span>Beginner</span>
          <span>Just starting out</span>
        </div>
      </ListBoxItem>
      <ListBoxItem id="intermediate" textValue="Intermediate">
        <div>
          <span>Intermediate</span>
          <span>Comfortable with basics</span>
        </div>
      </ListBoxItem>
      <ListBoxItem id="advanced" textValue="Advanced">
        <div>
          <span>Advanced</span>
          <span>Expert level knowledge</span>
        </div>
      </ListBoxItem>
    </Select>
  ),
};

// 無効化されたセレクト
export const Disabled: Story = {
  render: () => (
    <Select disabled defaultSelectedKey="cat" label="Favorite Animal">
      <ListBoxItem id="cat">Cat</ListBoxItem>
      <ListBoxItem id="dog">Dog</ListBoxItem>
      <ListBoxItem id="bird">Bird</ListBoxItem>
    </Select>
  ),
};
