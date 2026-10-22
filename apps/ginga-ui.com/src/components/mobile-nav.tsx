"use client";

import { useState } from "react";
import {
  Button,
  DialogTrigger,
  Drawer,
  DrawerContent,
  DrawerTitle,
} from "@ginga-ui/core";
import { Menu, X } from "lucide-react";
import { useDictionary } from "#/i18n/locale-context";
import { SidebarNav } from "./sidebar";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { nav } = useDictionary();

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        variant="ghost"
        aria-label={nav.openMenu}
        className="docs-icon-button"
      >
        <Menu />
      </Button>
      <Drawer placement="left">
        <DrawerContent className="docs-drawer">
          <div className="docs-drawer-header">
            <DrawerTitle>{nav.menu}</DrawerTitle>
            <Button
              variant="ghost"
              slot="close"
              aria-label={nav.closeMenu}
              className="docs-icon-button"
            >
              <X />
            </Button>
          </div>
          <SidebarNav onNavigate={() => setIsOpen(false)} />
        </DrawerContent>
      </Drawer>
    </DialogTrigger>
  );
}
