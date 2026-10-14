"use client";

import { Image } from "@ginga-ui/core";
import styles from "./image.module.css";

export function BasicExample() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      alt="美しい山の風景"
      className={styles.basicImage}
    />
  );
}

export function AvatarExample() {
  return (
    <div className={styles.avatars}>
      <Image
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
        alt="ユーザーアバター"
        variant="avatar"
        className={styles.avatarSmall}
      />
      <Image
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        alt="ユーザーアバター"
        variant="avatar"
        className={styles.avatarMedium}
      />
      <Image
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
        alt="ユーザーアバター"
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
        alt="小サイズ"
        className={styles.smallImage}
      />
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        alt="中サイズ"
        className={styles.mediumImage}
      />
    </div>
  );
}

export function RoundedExample() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      alt="角丸の画像"
      className={styles.roundedImage}
    />
  );
}
