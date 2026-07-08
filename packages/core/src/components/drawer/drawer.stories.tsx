import { Button } from "../button";
import { DialogTrigger } from "../dialog";
import { Drawer, DrawerContent, DrawerTitle } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Drawer> = {
  title: "Display/Drawer",
  component: Drawer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Basic: Story = {
  render: () => (
    <DialogTrigger>
      <Button>メニューを開く</Button>
      <Drawer>
        <DrawerContent>
          <DrawerTitle>メニュー</DrawerTitle>
          <p>右側からスライドインするドロワーです。</p>
          <Button slot="close">閉じる</Button>
        </DrawerContent>
      </Drawer>
    </DialogTrigger>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {(["left", "right", "top", "bottom"] as const).map((placement) => (
        <DialogTrigger key={placement}>
          <Button variant="outline">{placement}</Button>
          <Drawer placement={placement}>
            <DrawerContent>
              <DrawerTitle>{placement}</DrawerTitle>
              <p>{placement} から表示されるドロワーです。</p>
              <Button slot="close">閉じる</Button>
            </DrawerContent>
          </Drawer>
        </DialogTrigger>
      ))}
    </div>
  ),
};

export const NotDismissable: Story = {
  render: () => (
    <DialogTrigger>
      <Button variant="light">外側クリックで閉じない</Button>
      <Drawer dismissable={false}>
        <DrawerContent>
          <DrawerTitle>確認が必要です</DrawerTitle>
          <p>閉じるボタンを押すまでドロワーは閉じません。</p>
          <Button slot="close">閉じる</Button>
        </DrawerContent>
      </Drawer>
    </DialogTrigger>
  ),
};
