"use client";

import { List, ListItem } from "@ginga-ui/core";

export function UnorderedExample() {
  return (
    <List type="unordered">
      <ListItem>List item 1</ListItem>
      <ListItem>List item 2</ListItem>
      <ListItem>List item 3</ListItem>
    </List>
  );
}

export function OrderedExample() {
  return (
    <List type="ordered">
      <ListItem>First step</ListItem>
      <ListItem>Second step</ListItem>
      <ListItem>Final step</ListItem>
    </List>
  );
}

export function NestedExample() {
  return (
    <List type="unordered">
      <ListItem>Parent item 1</ListItem>
      <ListItem>
        Parent item 2
        <List type="unordered">
          <ListItem>Nested item 1</ListItem>
          <ListItem>Nested item 2</ListItem>
        </List>
      </ListItem>
      <ListItem>Parent item 3</ListItem>
    </List>
  );
}

export function MixedExample() {
  return (
    <List type="ordered">
      <ListItem>Define requirements for the task management system</ListItem>
      <ListItem>
        UI/UX design
        <List type="unordered">
          <ListItem>Create wireframes</ListItem>
          <ListItem>Design mockups</ListItem>
          <ListItem>Usability testing</ListItem>
        </List>
      </ListItem>
      <ListItem>Development and testing</ListItem>
      <ListItem>Deployment</ListItem>
    </List>
  );
}
