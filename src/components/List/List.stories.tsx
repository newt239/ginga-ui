import type { Meta, StoryObj } from "@storybook/react";
import List from "./List";

const meta: Meta<typeof List> = {
  title: "Display/List",
  component: List,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["ordered", "unordered"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const UnorderedList: Story = {
  args: {
    type: "unordered",
    children: [
      <List.Item key="1">First item in the list</List.Item>,
      <List.Item key="2">
        Second item with some longer text to show how it wraps
      </List.Item>,
      <List.Item key="3">Third item in the list</List.Item>,
    ],
  },
};

export const OrderedList: Story = {
  args: {
    type: "ordered",
    children: [
      <List.Item key="1">First step in the process</List.Item>,
      <List.Item key="2">
        Second step with detailed explanation that might span multiple lines to
        demonstrate text wrapping behavior
      </List.Item>,
      <List.Item key="3">Final step in the process</List.Item>,
    ],
  },
};

export const WithCustomClassName: Story = {
  args: {
    type: "unordered",
    className: "custom-list-class",
    children: [
      <List.Item key="1" className="custom-item-class">
        Item with custom class
      </List.Item>,
      <List.Item key="2" className="custom-item-class">
        Another item with custom class
      </List.Item>,
    ],
  },
};

export const NestedList: Story = {
  args: {
    type: "unordered",
    children: [
      <List.Item key="1">Parent item 1</List.Item>,
      <List.Item key="2">
        Parent item 2
        <List type="unordered">
          <List.Item>Nested item 1</List.Item>
          <List.Item>Nested item 2</List.Item>
        </List>
      </List.Item>,
      <List.Item key="3">Parent item 3</List.Item>,
    ],
  },
};
