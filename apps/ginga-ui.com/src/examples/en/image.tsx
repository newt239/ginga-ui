"use client";

import { Image } from "@ginga-ui/core";
import styles from "../image.module.css";

export function BasicExample() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      alt="A beautiful mountain landscape"
      className={styles.basicImage}
    />
  );
}

export function AvatarExample() {
  return (
    <div className={styles.avatars}>
      <Image
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
        alt="User avatar"
        variant="avatar"
        className={styles.avatarSmall}
      />
      <Image
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        alt="User avatar"
        variant="avatar"
        className={styles.avatarMedium}
      />
      <Image
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
        alt="User avatar"
        variant="avatar"
        className={styles.avatarLarge}
      />
    </div>
  );
}

export function SizesExample() {
  return (
    <div className={styles.sizes}>
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        alt="Small size"
        className={styles.smallImage}
      />
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        alt="Medium size"
        className={styles.mediumImage}
      />
    </div>
  );
}

export function RoundedExample() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      alt="Image with rounded corners"
      className={styles.roundedImage}
    />
  );
}
