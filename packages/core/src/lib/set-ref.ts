export const setRef = <T>(
  ref: React.Ref<T> | undefined,
  value: T
): (() => void) => {
  if (typeof ref === "function") {
    const cleanup = ref(value);
    return typeof cleanup === "function" ? cleanup : () => ref(null);
  }
  if (ref) {
    ref.current = value;
    return () => {
      ref.current = null;
    };
  }
  return () => {};
};
