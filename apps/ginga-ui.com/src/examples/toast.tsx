"use client";

import { Button, toast, ToastRegion } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <>
      <ToastRegion />
      <Button variant="filled" onPress={() => toast.show("通知が届きました")}>
        トーストを表示
      </Button>
    </>
  );
}

export function VariantsExample() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Button
        variant="outline"
        onPress={() => toast.info("新しいバージョンが利用可能です")}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onPress={() => toast.success("変更が保存されました")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onPress={() =>
          toast.warning("ストレージの空き容量が少なくなっています")
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onPress={() => toast.danger("データの読み込みに失敗しました")}
      >
        Danger
      </Button>
    </div>
  );
}

export function TimeoutExample() {
  return (
    <Button
      variant="filled"
      onPress={() =>
        toast.success("アップロード完了", {
          description: "5秒後に自動的に閉じます。",
          timeout: 5000,
        })
      }
    >
      自動で閉じるトースト
    </Button>
  );
}
