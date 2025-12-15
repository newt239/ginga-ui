import { List, ListItem } from "../../packages/components/list/src";

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
      <ListItem key="1">First item in the list</ListItem>,
      <ListItem key="2">
        Second item with some longer text to show how it wraps
      </ListItem>,
      <ListItem key="3">Third item in the list</ListItem>,
    ],
  },
};

export const OrderedList: Story = {
  args: {
    type: "ordered",
    children: [
      <ListItem key="1">First step in the process</ListItem>,
      <ListItem key="2">
        Second step with detailed explanation that might span multiple lines to
        demonstrate text wrapping behavior
      </ListItem>,
      <ListItem key="3">Final step in the process</ListItem>,
    ],
  },
};

export const WithCustomClassName: Story = {
  args: {
    type: "unordered",
    children: [
      <ListItem key="1" className="custom-item-class">
        Item with custom class
      </ListItem>,
      <ListItem key="2" className="custom-item-class">
        Another item with custom class
      </ListItem>,
    ],
  },
};

export const NestedList: Story = {
  args: {
    type: "unordered",
    children: [
      <ListItem key="1">Parent item 1</ListItem>,
      <ListItem key="2">
        Parent item 2
        <List type="unordered">
          <ListItem key="1">Nested item 1</ListItem>
          <ListItem key="2">Nested item 2</ListItem>
        </List>
      </ListItem>,
      <ListItem key="3">Parent item 3</ListItem>,
    ],
  },
};
