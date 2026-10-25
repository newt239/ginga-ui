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
        ダイアログを開く
      </Button>
      <Modal>
        <Dialog>
          <DialogTitle>ようこそ</DialogTitle>
          <p>これは基本的なダイアログです。</p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline" startIcon={<X />}>
              閉じる
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
        サインアップ
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
              <DialogTitle>アカウント作成</DialogTitle>
              <div className={styles.formFields}>
                <Input type="text" aria-label="名前" placeholder="名前" />
                <Input
                  type="email"
                  aria-label="メールアドレス"
                  placeholder="メールアドレス"
                />
                <Input
                  type="password"
                  aria-label="パスワード"
                  placeholder="パスワード"
                />
              </div>
              <div className={styles.actions}>
                <Button slot="close" variant="outline">
                  キャンセル
                </Button>
                <Button type="submit" variant="filled" startIcon={<Plus />}>
                  作成
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
        重要なお知らせ
      </Button>
      <Modal>
        <Dialog>
          <DialogTitle>システムメンテナンス</DialogTitle>
          <p>
            2024年12月20日
            2:00〜4:00にシステムメンテナンスを実施します。この間、サービスをご利用いただけません。
          </p>
          <div className={styles.actions}>
            <Button slot="close" variant="filled" startIcon={<Check />}>
              了解
            </Button>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
