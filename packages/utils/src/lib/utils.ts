type ClassName = string | undefined | null | false;

export function cn(...args: ClassName[]): string {
  return args.filter(Boolean).join(" ");
}
