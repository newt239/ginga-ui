"use client";

import { useState } from "react";

import {
  Button,
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
} from "@ginga-ui/core";
import { Check, ChevronRight, Copy, Pencil, Trash2 } from "lucide-react";

import type { Selection } from "react-aria-components";

export function BasicExample() {
  return (
    <MenuTrigger>
      <Button variant="outline">Actions</Button>
      <Menu onAction={(key) => console.log("Action:", key)}>
        <MenuItem id="edit" startIcon={<Pencil />} shortcut="⌘E">
          Edit
        </MenuItem>
        <MenuItem id="duplicate" startIcon={<Copy />} shortcut="⌘D">
          Duplicate
        </MenuItem>
        <MenuSeparator />
        <MenuItem id="delete" startIcon={<Trash2 />}>
          Delete
        </MenuItem>
      </Menu>
    </MenuTrigger>
  );
}

export function SectionExample() {
  return (
    <MenuTrigger>
      <Button variant="outline">File</Button>
      <Menu>
        <MenuSection title="Create">
          <MenuItem id="new">New</MenuItem>
          <MenuItem id="open">Open</MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuSection title="Export">
          <MenuItem id="pdf">PDF</MenuItem>
          <MenuItem id="png" disabled>
            PNG
          </MenuItem>
        </MenuSection>
      </Menu>
    </MenuTrigger>
  );
}

export function SubmenuExample() {
  return (
    <MenuTrigger>
      <Button variant="outline">Share</Button>
      <Menu submenuIcon={<ChevronRight />}>
        <MenuItem id="copy-link">Copy link</MenuItem>
        <SubmenuTrigger>
          <MenuItem id="send">Send to</MenuItem>
          <Menu>
            <MenuItem id="mail">Email</MenuItem>
            <MenuItem id="chat">Chat</MenuItem>
          </Menu>
        </SubmenuTrigger>
      </Menu>
    </MenuTrigger>
  );
}

export function SelectionExample() {
  const [selected, setSelected] = useState<Selection>(new Set(["grid"]));
  return (
    <MenuTrigger>
      <Button variant="outline">View</Button>
      <Menu
        checkIcon={<Check />}
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <MenuItem id="list">List</MenuItem>
        <MenuItem id="grid">Grid</MenuItem>
        <MenuItem id="board">Board</MenuItem>
      </Menu>
    </MenuTrigger>
  );
}
