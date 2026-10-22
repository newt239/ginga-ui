"use client";

import { Button, toast, ToastRegion } from "@ginga-ui/core";

import styles from "../toast.module.css";
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from "lucide-react";

export function BasicExample() {
  return (
    <>
      <ToastRegion closeIcon={<X />} />
      <Button variant="filled" onPress={() => toast.show("通知が届きました")}>
        トーストを表示
      </Button>
    </>
  );
}

export function VariantsExample() {
  return (
    <div className={styles.variantList}>
      <Button
        variant="outline"
        onPress={() =>
          toast.info("新しいバージョンが利用可能です", { icon: <Info /> })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onPress={() =>
          toast.success("変更が保存されました", { icon: <CircleCheck /> })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onPress={() =>
          toast.warning("ストレージの空き容量が少なくなっています", {
            icon: <TriangleAlert />,
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onPress={() =>
          toast.danger("データの読み込みに失敗しました", {
            icon: <CircleAlert />,
          })
        }
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
          icon: <CircleCheck />,
          description: "5秒後に自動的に閉じます。",
          timeout: 5000,
        })
      }
    >
      自動で閉じるトースト
    </Button>
  );
}
