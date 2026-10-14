import { Select, SelectItem } from "./select";

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
      <SelectItem id="cat">Cat</SelectItem>
      <SelectItem id="dog">Dog</SelectItem>
      <SelectItem id="bird">Bird</SelectItem>
    </Select>
  ),
};

// 無効なオプションを含むセレクト
export const WithDisabledOptions: Story = {
  render: () => (
    <Select defaultSelectedKey="dog" label="Select a Pet">
      <SelectItem id="dog">Dog</SelectItem>
      <SelectItem id="cat">Cat</SelectItem>
      <SelectItem id="hamster" isDisabled>
        Hamster (Out of Stock)
      </SelectItem>
      <SelectItem id="parrot">Parrot</SelectItem>
    </Select>
  ),
};

// 説明付きのオプションを持つセレクト
export const WithDescriptions: Story = {
  render: () => (
    <Select defaultSelectedKey="beginner" label="Skill Level">
      <SelectItem id="beginner" textValue="Beginner">
        <div>
          <span>Beginner</span>
          <span>Just starting out</span>
        </div>
      </SelectItem>
      <SelectItem id="intermediate" textValue="Intermediate">
        <div>
          <span>Intermediate</span>
          <span>Comfortable with basics</span>
        </div>
      </SelectItem>
      <SelectItem id="advanced" textValue="Advanced">
        <div>
          <span>Advanced</span>
          <span>Expert level knowledge</span>
        </div>
      </SelectItem>
    </Select>
  ),
};

// 無効化されたセレクト
export const Disabled: Story = {
  render: () => (
    <Select disabled defaultSelectedKey="cat" label="Favorite Animal">
      <SelectItem id="cat">Cat</SelectItem>
      <SelectItem id="dog">Dog</SelectItem>
      <SelectItem id="bird">Bird</SelectItem>
    </Select>
  ),
};
