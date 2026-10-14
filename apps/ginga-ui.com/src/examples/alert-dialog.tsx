"use client";

import {
  AlertDialog,
  AlertDialogTitle,
  Button,
  DialogTrigger,
  Modal,
} from "@ginga-ui/core";
import styles from "./alert-dialog.module.css";
import { CircleAlert, TriangleAlert } from "lucide-react";

export function BasicExample() {
  return (
    <DialogTrigger>
      <Button variant="filled">ファイルを削除</Button>
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
            <Button slot="close" variant="filled">
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
      <Button variant="outline">ログアウト</Button>
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
            <Button slot="close" variant="filled">
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
      <Button variant="light">利用規約に同意</Button>
      <Modal>
        <AlertDialog>
          <AlertDialogTitle>利用規約の更新</AlertDialogTitle>
          <p>利用規約が更新されました。続行するには同意が必要です。</p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline">
              あとで
            </Button>
            <Button slot="close" variant="filled">
              同意する
            </Button>
          </div>
        </AlertDialog>
      </Modal>
    </DialogTrigger>
  );
}
