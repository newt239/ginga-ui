"use client";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogTrigger,
  Input,
  Modal,
} from "@ginga-ui/core";
import {
  Check,
  Megaphone,
  PanelTop,
  Plus,
  Trash2,
  UserPlus,
  X,
} from "lucide-react";

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
          <Button slot="close" variant="outline" startIcon={<X />}>
            閉じる
          </Button>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

export function ConfirmationExample() {
  return (
    <DialogTrigger>
      <Button variant="filled" startIcon={<Trash2 />}>
        アカウントを削除
      </Button>
      <Modal>
        <Dialog>
          <DialogTitle>削除の確認</DialogTitle>
          <p>本当にアカウントを削除しますか? この操作は取り消せません。</p>
          <div className={styles.confirmActions}>
            <Button slot="close" variant="outline">
              キャンセル
            </Button>
            <Button variant="filled" onPress={() => alert("削除しました")}>
              削除する
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("フォーム送信!");
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
            <div className={styles.formActions}>
              <Button slot="close" variant="outline">
                キャンセル
              </Button>
              <Button type="submit" variant="filled" startIcon={<Plus />}>
                作成
              </Button>
            </div>
          </form>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

export function AlertExample() {
  return (
    <DialogTrigger>
      <Button variant="outline" startIcon={<Megaphone />}>
        重要なお知らせ
      </Button>
      <Modal>
        <Dialog>
          <DialogTitle>システムメンテナンス</DialogTitle>
          <p>
            2024年12月20日 2:00-4:00にシステムメンテナンスを実施します。
            この間、サービスがご利用いただけません。
          </p>
          <Button slot="close" variant="filled" startIcon={<Check />}>
            了解
          </Button>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
