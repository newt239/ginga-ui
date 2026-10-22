"use client";

import {
  Button,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@ginga-ui/core";
import { Menu, PanelRight, X } from "lucide-react";
import styles from "../drawer.module.css";

export function BasicExample() {
  return (
    <DialogTrigger>
      <Button variant="filled" startIcon={<Menu />}>
        Open menu
      </Button>
      <Drawer>
        <DrawerContent>
          <DrawerTitle>Menu</DrawerTitle>
          <p>A drawer that slides in from the right.</p>
          <Button slot="close" variant="outline" startIcon={<X />}>
            Close
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
              <p>A drawer that appears from the {placement}.</p>
              <Button slot="close" variant="outline" startIcon={<X />}>
                Close
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
        Stay open on outside click
      </Button>
      <Drawer dismissable={false}>
        <DrawerContent>
          <DrawerTitle>Confirmation required</DrawerTitle>
          <p>The drawer stays open until you press the close button.</p>
          <Button slot="close" variant="filled" startIcon={<X />}>
            Close
          </Button>
        </DrawerContent>
      </Drawer>
    </DialogTrigger>
  );
}
