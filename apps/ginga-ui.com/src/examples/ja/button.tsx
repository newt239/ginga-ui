"use client";

import { useState } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogTrigger,
  Input,
  Modal,
} from "@ginga-ui/core";
import { ArrowRight, ChevronDown, Download, Plus, Send } from "lucide-react";
import styles from "../button.module.css";

export function BasicExample() {
  return (
    <DialogTrigger>
      <Button variant="filled">クリック</Button>
      <Modal>
        <Dialog>
          <DialogTitle>クリックされました</DialogTitle>
          <p>
            DialogTrigger で囲むと、ボタンを押したときにダイアログが開きます。
          </p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline">
              閉じる
            </Button>
          </div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}

export function VariantsExample() {
  return (
    <div className={styles.variantRow}>
      <Button variant="filled">Filled</Button>
      <Button variant="light">Light</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="reverse">Reverse</Button>
    </div>
  );
}

export function SizesExample() {
  return (
    <div className={styles.sizeRow}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

export function WithIconExample() {
  return (
    <div className={styles.variantRow}>
      <Button startIcon={<Download />}>ダウンロード</Button>
      <Button variant="light" endIcon={<ArrowRight />}>
        次へ
      </Button>
      <Button variant="outline" startIcon={<Plus />} endIcon={<ChevronDown />}>
        追加
      </Button>
    </div>
  );
}

export function DisabledExample() {
  return (
    <div className={styles.disabledRow}>
      <Button variant="filled" disabled>
        Disabled Filled
      </Button>
      <Button variant="light" disabled>
        Disabled Light
      </Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
    </div>
  );
}

export function FormExample() {
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          setSubmittedName(String(formData.get("name") ?? ""));
        }}
        className={styles.form}
      >
        <Input
          type="text"
          name="name"
          placeholder="名前を入力"
          aria-label="名前"
        />
        <Button
          type="submit"
          variant="filled"
          startIcon={<Send />}
          className={styles.submit}
        >
          送信
        </Button>
      </form>
      <Modal
        isOpen={submittedName !== null}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSubmittedName(null);
        }}
      >
        <Dialog>
          <DialogTitle>送信しました</DialogTitle>
          <p>名前: {submittedName}</p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline">
              閉じる
            </Button>
          </div>
        </Dialog>
      </Modal>
    </>
  );
}
