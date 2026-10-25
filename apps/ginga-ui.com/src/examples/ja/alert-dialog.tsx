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
        ファイルを削除
      </Button>
      <Modal>
        <AlertDialog variant="danger">
          <AlertDialogTitle icon={<CircleAlert />}>
            ファイルの削除
          </AlertDialogTitle>
          <p>この操作は取り消せません。本当に削除しますか?</p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline">
              キャンセル
            </Button>
            <Button slot="close" variant="filled" startIcon={<Trash2 />}>
              削除する
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
        ログアウト
      </Button>
      <Modal>
        <AlertDialog variant="warning">
          <AlertDialogTitle icon={<TriangleAlert />}>
            ログアウトの確認
          </AlertDialogTitle>
          <p>保存されていない変更は失われます。ログアウトしますか?</p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline">
              キャンセル
            </Button>
            <Button slot="close" variant="filled" startIcon={<LogOut />}>
              ログアウト
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
        セッション切れを再現
      </Button>
      <Modal>
        <AlertDialog>
          <AlertDialogTitle>セッションの有効期限切れ</AlertDialogTitle>
          <p>
            安全のためログアウトしました。続けるには再度ログインしてください。
          </p>
          <div className={styles.actions}>
            <Button slot="close" variant="filled" startIcon={<LogIn />}>
              ログイン
            </Button>
          </div>
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}
