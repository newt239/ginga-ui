type ClassName =
  | string
  | undefined
  | null
  | false
  | ((...args: unknown[]) => string);

export function cn(...args: ClassName[]): string {
  return args
    .map((arg) => (typeof arg === "function" ? arg() : arg))
    .filter(Boolean)
    .join(" ");
}
