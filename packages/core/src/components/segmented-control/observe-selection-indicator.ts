export const observeSelectionIndicator = (
  element: HTMLElement
): (() => void) => {
  const update = () => {
    const selected = element.querySelector<HTMLElement>(
      ":scope > [data-selected]"
    );
    if (!selected) {
      delete element.dataset.indicator;
      return;
    }
    const containerRect = element.getBoundingClientRect();
    const selectedRect = selected.getBoundingClientRect();
    element.style.setProperty(
      "--ginga-segmented-control-indicator-x",
      `${selectedRect.left - containerRect.left - element.clientLeft}px`
    );
    element.style.setProperty(
      "--ginga-segmented-control-indicator-width",
      `${selectedRect.width}px`
    );
    element.dataset.indicator = "";
  };

  update();

  const mutationObserver = new MutationObserver(update);
  mutationObserver.observe(element, {
    subtree: true,
    childList: true,
    attributeFilter: ["data-selected"],
  });
  const resizeObserver = new ResizeObserver(update);
  resizeObserver.observe(element);

  return () => {
    mutationObserver.disconnect();
    resizeObserver.disconnect();
  };
};
