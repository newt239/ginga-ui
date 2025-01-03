import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "./Select";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  render: () => (
    <Select defaultSelectedKey="cat">
      <Label>Favorite Animal</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem id="cat">Cat</ListBoxItem>
          <ListBoxItem id="dog">Dog</ListBoxItem>
          <ListBoxItem id="bird">Bird</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  ),
};

// 無効なオプションを含むセレクト
export const WithDisabledOptions: Story = {
  render: () => (
    <Select defaultSelectedKey="dog">
      <Label>Select a Pet</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem id="dog">Dog</ListBoxItem>
          <ListBoxItem id="cat">Cat</ListBoxItem>
          <ListBoxItem id="hamster" isDisabled>
            Hamster (Out of Stock)
          </ListBoxItem>
          <ListBoxItem id="parrot">Parrot</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  ),
};

// 説明付きのオプションを持つセレクト
export const WithDescriptions: Story = {
  render: () => (
    <Select defaultSelectedKey="beginner">
      <Label>Skill Level</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover>
        <ListBox>
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
        </ListBox>
      </Popover>
    </Select>
  ),
};

// 無効化されたセレクト
export const Disabled: Story = {
  render: () => (
    <Select isDisabled defaultSelectedKey="cat">
      <Label>Favorite Animal</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">▼</span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem id="cat">Cat</ListBoxItem>
          <ListBoxItem id="dog">Dog</ListBoxItem>
          <ListBoxItem id="bird">Bird</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  ),
};
