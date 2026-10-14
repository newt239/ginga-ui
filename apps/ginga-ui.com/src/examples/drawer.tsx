"use client";

import {
  Button,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@ginga-ui/core";
import { Menu, PanelRight, X } from "lucide-react";
import styles from "./drawer.module.css";

export function BasicExample() {
  return (
    <DialogTrigger>
      <Button variant="filled" startIcon={<Menu />}>
        メニューを開く
      </Button>
      <Drawer>
        <DrawerContent>
          <DrawerTitle>メニュー</DrawerTitle>
          <p>右側からスライドインするドロワーです。</p>
          <Button slot="close" variant="outline" startIcon={<X />}>
            閉じる
          </Button>
        </DrawerContent>
      </Drawer>
    </DialogTrigger>
  );
}

export function PlacementsExample() {
  return (
    <div className={styles.placementRow}>
      {(["left", "right", "top", "bottom"] as const).map((placement) => (
        <DialogTrigger key={placement}>
          <Button variant="outline">{placement}</Button>
          <Drawer placement={placement}>
            <DrawerContent>
              <DrawerTitle>{placement}</DrawerTitle>
              <p>{placement} から表示されるドロワーです。</p>
              <Button slot="close" variant="outline" startIcon={<X />}>
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
      <Button variant="light" startIcon={<PanelRight />}>
        外側クリックで閉じない
      </Button>
      <Drawer dismissable={false}>
        <DrawerContent>
          <DrawerTitle>確認が必要です</DrawerTitle>
          <p>閉じるボタンを押すまでドロワーは閉じません。</p>
          <Button slot="close" variant="filled" startIcon={<X />}>
            閉じる
          </Button>
        </DrawerContent>
      </Drawer>
    </DialogTrigger>
  );
}
