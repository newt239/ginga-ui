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
      <Button variant="outline">操作</Button>
      <Menu onAction={(key) => console.log("実行:", key)}>
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
  );
}

export function SectionExample() {
  return (
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
  );
}

export function SubmenuExample() {
  return (
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
  );
}

export function SelectionExample() {
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
}
