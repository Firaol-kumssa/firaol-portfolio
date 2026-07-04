import { useRef, type MouseEvent } from "react";

/**
 * useMagnetic
 * Returns a ref to attach to any element. While the pointer hovers the
 * element, it nudges toward the cursor for a "magnetic button" feel, then
 * springs back on leave. Skipped entirely on touch devices and when the
 * user prefers reduced motion.
 */
export function useMagnetic<T extends HTMLElement = HTMLDivElement>(strength = 18) {
  const ref = useRef<T | null>(null);

  const handleMouseMove = (e: MouseEvent<T>) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = node.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate(${(x / rect.width) * strength}px, ${(y / rect.height) * strength}px)`;
  };

  const handleMouseLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate(0px, 0px)";
  };

  return { ref, handleMouseMove, handleMouseLeave };
}
