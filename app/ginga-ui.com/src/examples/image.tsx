import { Image } from "@ginga-ui/core";

export function BasicExample() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      alt="美しい山の風景"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}

export function AvatarExample() {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Image
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
        alt="ユーザーアバター"
        variant="avatar"
        style={{ width: "64px", height: "64px" }}
      />
      <Image
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        alt="ユーザーアバター"
        variant="avatar"
        style={{ width: "96px", height: "96px" }}
      />
      <Image
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36"
        alt="ユーザーアバター"
        variant="avatar"
        style={{ width: "128px", height: "128px" }}
      />
    </div>
  );
}

export function SizesExample() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        alt="小サイズ"
        style={{ width: "200px", height: "auto" }}
      />
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        alt="中サイズ"
        style={{ width: "400px", height: "auto" }}
      />
    </div>
  );
}

export function RoundedExample() {
  return (
    <Image
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
      alt="角丸の画像"
      style={{
        maxWidth: "100%",
        height: "auto",
        borderRadius: "1rem",
      }}
    />
  );
}
