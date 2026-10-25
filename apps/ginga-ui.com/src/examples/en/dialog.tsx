"use client";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogTrigger,
  Input,
  Modal,
} from "@ginga-ui/core";
import { Check, Megaphone, PanelTop, Plus, UserPlus, X } from "lucide-react";

import styles from "../dialog.module.css";

export function BasicExample() {
  return (
    <DialogTrigger>
      <Button variant="filled" startIcon={<PanelTop />}>
        Open dialog
      </Button>
      <Modal>
        <Dialog>
          <DialogTitle>Welcome</DialogTitle>
          <p>This is a basic dialog.</p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline" startIcon={<X />}>
              Close
            </Button>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

export function FormExample() {
  return (
    <DialogTrigger>
      <Button variant="filled" startIcon={<UserPlus />}>
        Sign up
      </Button>
      <Modal>
        <Dialog>
          {({ close }) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                close();
              }}
            >
              <DialogTitle>Create account</DialogTitle>
              <div className={styles.formFields}>
                <Input type="text" aria-label="Name" placeholder="Name" />
                <Input
                  type="email"
                  aria-label="Email address"
                  placeholder="Email address"
                />
                <Input
                  type="password"
                  aria-label="Password"
                  placeholder="Password"
                />
              </div>
              <div className={styles.actions}>
                <Button slot="close" variant="outline">
                  Cancel
                </Button>
                <Button type="submit" variant="filled" startIcon={<Plus />}>
                  Create
                </Button>
              </div>
            </form>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

export function NoticeExample() {
  return (
    <DialogTrigger>
      <Button variant="outline" startIcon={<Megaphone />}>
        Important notice
      </Button>
      <Modal>
        <Dialog>
          <DialogTitle>System maintenance</DialogTitle>
          <p>
            System maintenance is scheduled for December 20, 2024, from 2:00 to
            4:00 AM. The service will be unavailable during this time.
          </p>
          <div className={styles.actions}>
            <Button slot="close" variant="filled" startIcon={<Check />}>
              Got it
            </Button>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
