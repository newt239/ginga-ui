"use client";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogTrigger,
  Modal,
} from "@ginga-ui/core";

export function BasicExample() {
  return (
    <DialogTrigger>
      <Button variant="filled">ダイアログを開く</Button>
      <Modal>
        <Dialog>
          <DialogTitle>ようこそ</DialogTitle>
          <p>これは基本的なダイアログです。</p>
          <Button slot="close" variant="outline">
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
      <Button variant="filled">アカウントを削除</Button>
      <Modal>
        <Dialog>
          <DialogTitle>削除の確認</DialogTitle>
          <p>本当にアカウントを削除しますか? この操作は取り消せません。</p>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
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
      <Button variant="filled">サインアップ</Button>
      <Modal>
        <Dialog>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("フォーム送信!");
            }}
          >
            <DialogTitle>アカウント作成</DialogTitle>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="名前"
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--color-primary-3)",
                  borderRadius: "var(--size-radius)",
                }}
              />
              <input
                type="email"
                placeholder="メールアドレス"
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--color-primary-3)",
                  borderRadius: "var(--size-radius)",
                }}
              />
              <input
                type="password"
                placeholder="パスワード"
                style={{
                  padding: "0.5rem",
                  border: "1px solid var(--color-primary-3)",
                  borderRadius: "var(--size-radius)",
                }}
              />
            </div>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
              <Button slot="close" variant="outline">
                キャンセル
              </Button>
              <Button type="submit" variant="filled">
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
      <Button variant="outline">重要なお知らせ</Button>
      <Modal>
        <Dialog>
          <DialogTitle>システムメンテナンス</DialogTitle>
          <p>
            2024年12月20日 2:00-4:00にシステムメンテナンスを実施します。
            この間、サービスがご利用いただけません。
          </p>
          <Button slot="close" variant="filled">
            了解
          </Button>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
