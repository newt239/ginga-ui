"use client";

import { Button, toast, ToastRegion } from "@ginga-ui/core";

import styles from "../toast.module.css";
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from "lucide-react";

export function BasicExample() {
  return (
    <>
      <ToastRegion closeIcon={<X />} />
      <Button
        variant="filled"
        onPress={() => toast.show("You have a new notification")}
      >
        Show toast
      </Button>
    </>
  );
}

export function VariantsExample() {
  return (
    <div className={styles.variantList}>
      <Button
        variant="outline"
        onPress={() =>
          toast.info("A new version is available", { icon: <Info /> })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onPress={() =>
          toast.success("Your changes have been saved", {
            icon: <CircleCheck />,
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onPress={() =>
          toast.warning("You are running low on storage space", {
            icon: <TriangleAlert />,
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onPress={() =>
          toast.danger("Failed to load data", {
            icon: <CircleAlert />,
          })
        }
      >
        Danger
      </Button>
    </div>
  );
}

export function TimeoutExample() {
  return (
    <Button
      variant="filled"
      onPress={() =>
        toast.success("Upload complete", {
          icon: <CircleCheck />,
          description: "Closes automatically after 5 seconds.",
          timeout: 5000,
        })
      }
    >
      Auto-dismissing toast
    </Button>
  );
}
