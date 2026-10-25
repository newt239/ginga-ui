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
      <Button variant="filled">Click</Button>
      <Modal>
        <Dialog>
          <DialogTitle>Clicked</DialogTitle>
          <p>
            Wrapping the button in DialogTrigger opens the dialog when it is
            pressed.
          </p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline">
              Close
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
      <Button startIcon={<Download />}>Download</Button>
      <Button variant="light" endIcon={<ArrowRight />}>
        Next
      </Button>
      <Button variant="outline" startIcon={<Plus />} endIcon={<ChevronDown />}>
        Add
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
          placeholder="Enter your name"
          aria-label="Name"
        />
        <Button
          type="submit"
          variant="filled"
          startIcon={<Send />}
          className={styles.submit}
        >
          Submit
        </Button>
      </form>
      <Modal
        isOpen={submittedName !== null}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSubmittedName(null);
        }}
      >
        <Dialog>
          <DialogTitle>Submitted</DialogTitle>
          <p>Name: {submittedName}</p>
          <div className={styles.actions}>
            <Button slot="close" variant="outline">
              Close
            </Button>
          </div>
        </Dialog>
      </Modal>
    </>
  );
}
