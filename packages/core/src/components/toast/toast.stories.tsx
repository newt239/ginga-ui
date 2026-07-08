import { Button } from "../button";
import { toast, ToastRegion } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToastRegion> = {
  title: "Display/Toast",
  component: ToastRegion,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToastRegion>;

export const Basic: Story = {
  render: () => (
    <>
      <ToastRegion />
      <Button onPress={() => toast.show("通知が届きました")}>
        トーストを表示
      </Button>
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <>
      <ToastRegion />
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        <Button onPress={() => toast.info("新しいバージョンが利用可能です")}>
          Info
        </Button>
        <Button onPress={() => toast.success("変更が保存されました")}>
          Success
        </Button>
        <Button
          onPress={() =>
            toast.warning("ストレージの空き容量が少なくなっています")
          }
        >
          Warning
        </Button>
        <Button onPress={() => toast.danger("データの読み込みに失敗しました")}>
          Danger
        </Button>
      </div>
    </>
  ),
};

export const WithDescriptionAndTimeout: Story = {
  render: () => (
    <>
      <ToastRegion placement="top-right" />
      <Button
        onPress={() =>
          toast.success("アップロード完了", {
            description: "5秒後に自動的に閉じます。",
            timeout: 5000,
          })
        }
      >
        自動で閉じるトースト
      </Button>
    </>
  ),
};
