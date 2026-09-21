"use client";

import {
  Button,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@ginga-ui/core";

export function BasicExample() {
  return (
    <DialogTrigger>
      <Button variant="filled">メニューを開く</Button>
      <Drawer>
        <DrawerContent>
          <DrawerTitle>メニュー</DrawerTitle>
          <p>右側からスライドインするドロワーです。</p>
          <Button slot="close" variant="outline">
            閉じる
          </Button>
        </DrawerContent>
      </Drawer>
    </DialogTrigger>
  );
}

export function PlacementsExample() {
  return (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      {(["left", "right", "top", "bottom"] as const).map((placement) => (
        <DialogTrigger key={placement}>
          <Button variant="outline">{placement}</Button>
          <Drawer placement={placement}>
            <DrawerContent>
              <DrawerTitle>{placement}</DrawerTitle>
              <p>{placement} から表示されるドロワーです。</p>
              <Button slot="close" variant="outline">
                閉じる
              </Button>
            </DrawerContent>
          </Drawer>
        </DialogTrigger>
      ))}
    </div>
  );
}

export function NotDismissableExample() {
  return (
    <DialogTrigger>
      <Button variant="light">外側クリックで閉じない</Button>
      <Drawer dismissable={false}>
        <DrawerContent>
          <DrawerTitle>確認が必要です</DrawerTitle>
          <p>閉じるボタンを押すまでドロワーは閉じません。</p>
          <Button slot="close" variant="filled">
            閉じる
          </Button>
        </DrawerContent>
      </Drawer>
    </DialogTrigger>
  );
}
