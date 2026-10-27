"use client";

import { useEffect, type RefObject } from "react";

/**
 * Closes a popover/menu when the user clicks outside of `ref` or presses Escape.
 * `onDismiss` should be memoised (useCallback) so the listeners are not re-bound
 * on every render.
 */
export function useDismiss(
  ref: RefObject<HTMLElement | null>,
  active: boolean,
  onDismiss: () => void
) {
  useEffect(() => {
    if (!active) return;

    const handlePointerDown = (event: PointerEvent) => {
      const node = ref.current;
      if (node && !node.contains(event.target as Node)) {
        onDismiss();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onDismiss();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, onDismiss, ref]);
}
