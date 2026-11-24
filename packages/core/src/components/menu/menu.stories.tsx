import { useState } from "react";

import { Check, ChevronRight, Copy, Pencil, Trash2 } from "lucide-react";

import { Button } from "../button";
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
} from "./index";

import type { Selection } from "react-aria-components";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Menu> = {
  title: "Display/Menu",
  component: Menu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  render: () => (
    <MenuTrigger>
      <Button variant="outline">操作</Button>
      <Menu onAction={(key) => console.log(key)}>
        <MenuItem id="edit" startIcon={<Pencil />} shortcut="⌘E">
          編集
        </MenuItem>
        <MenuItem id="duplicate" startIcon={<Copy />} shortcut="⌘D">
          複製
        </MenuItem>
        <MenuSeparator />
        <MenuItem id="delete" startIcon={<Trash2 />}>
          削除
        </MenuItem>
      </Menu>
    </MenuTrigger>
  ),
};

export const Sections: Story = {
  render: () => (
    <MenuTrigger>
      <Button variant="outline">ファイル</Button>
      <Menu>
        <MenuSection title="作成">
          <MenuItem id="new">新規作成</MenuItem>
          <MenuItem id="open">開く</MenuItem>
        </MenuSection>
        <MenuSeparator />
        <MenuSection title="書き出し">
          <MenuItem id="pdf">PDF</MenuItem>
          <MenuItem id="png" disabled>
            PNG
          </MenuItem>
        </MenuSection>
      </Menu>
    </MenuTrigger>
  ),
};

export const Submenu: Story = {
  render: () => (
    <MenuTrigger>
      <Button variant="outline">共有</Button>
      <Menu submenuIcon={<ChevronRight />}>
        <MenuItem id="copy-link">リンクをコピー</MenuItem>
        <SubmenuTrigger>
          <MenuItem id="send">送信先</MenuItem>
          <Menu>
            <MenuItem id="mail">メール</MenuItem>
            <MenuItem id="chat">チャット</MenuItem>
          </Menu>
        </SubmenuTrigger>
      </Menu>
    </MenuTrigger>
  ),
};

const SelectionRender = () => {
  const [selected, setSelected] = useState<Selection>(new Set(["grid"]));
  return (
    <MenuTrigger>
      <Button variant="outline">表示</Button>
      <Menu
        checkIcon={<Check />}
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <MenuItem id="list">リスト</MenuItem>
        <MenuItem id="grid">グリッド</MenuItem>
        <MenuItem id="board">ボード</MenuItem>
      </Menu>
    </MenuTrigger>
  );
};

export const SelectionMode: Story = {
  render: () => <SelectionRender />,
};
