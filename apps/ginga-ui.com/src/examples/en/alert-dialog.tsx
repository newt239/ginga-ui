"use client";

import {
  AlertDialog,
  AlertDialogTitle,
  Button,
  DialogTrigger,
  Modal,
} from "@ginga-ui/core";
import styles from "../alert-dialog.module.css";
import {
  CircleAlert,
  LogIn,
  LogOut,
  TimerOff,
  Trash2,
  TriangleAlert,
} from "lucide-react";

export function BasicExample() {
  return (
    <DialogTrigger>
      <Button variant="filled" startIcon={<Trash2 />}>
        Delete file
      </Button>
      <Modal>
        <AlertDialog variant="danger">
          <AlertDialogTitle icon={<CircleAlert />}>
            Delete file
          </AlertDialogTitle>
          <p>
            This action cannot be undone. Are you sure you want to delete it?
          </p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline">
              Cancel
            </Button>
            <Button slot="close" variant="filled" startIcon={<Trash2 />}>
              Delete
            </Button>
          </div>
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}

export function WarningExample() {
  return (
    <DialogTrigger>
      <Button variant="outline" startIcon={<LogOut />}>
        Log out
      </Button>
      <Modal>
        <AlertDialog variant="warning">
          <AlertDialogTitle icon={<TriangleAlert />}>
            Confirm log out
          </AlertDialogTitle>
          <p>Any unsaved changes will be lost. Do you want to log out?</p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline">
              Cancel
            </Button>
            <Button slot="close" variant="filled" startIcon={<LogOut />}>
              Log out
            </Button>
          </div>
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}

export function PlainExample() {
  return (
    <DialogTrigger>
      <Button variant="light" startIcon={<TimerOff />}>
        Simulate session timeout
      </Button>
      <Modal>
        <AlertDialog>
          <AlertDialogTitle>Session expired</AlertDialogTitle>
          <p>
            You have been logged out for your security. Log in again to
            continue.
          </p>
          <div className={styles.actions}>
            <Button slot="close" variant="filled" startIcon={<LogIn />}>
              Log in
            </Button>
          </div>
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}
