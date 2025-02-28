import { List, ListItem } from "@ginga-ui/core";

import "@ginga-ui/core/index.css";

import type { Meta, StoryObj } from "@storybook/react";

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
      <ListItem>First item in the list</ListItem>,
      <ListItem>
        Second item with some longer text to show how it wraps
      </ListItem>,
      <ListItem>Third item in the list</ListItem>,
    ],
  },
};

export const OrderedList: Story = {
  args: {
    type: "ordered",
    children: [
      <ListItem>First step in the process</ListItem>,
      <ListItem>
        Second step with detailed explanation that might span multiple lines to
        demonstrate text wrapping behavior
      </ListItem>,
      <ListItem>Final step in the process</ListItem>,
    ],
  },
};

export const WithCustomClassName: Story = {
  args: {
    type: "unordered",
    children: [
      <ListItem className="custom-item-class">Item with custom class</ListItem>,
      <ListItem className="custom-item-class">
        Another item with custom class
      </ListItem>,
    ],
  },
};

export const NestedList: Story = {
  args: {
    type: "unordered",
    children: [
      <ListItem>Parent item 1</ListItem>,
      <ListItem>
        Parent item 2
        <List type="unordered">
          <ListItem>Nested item 1</ListItem>
          <ListItem>Nested item 2</ListItem>
        </List>
      </ListItem>,
      <ListItem>Parent item 3</ListItem>,
    ],
  },
};
