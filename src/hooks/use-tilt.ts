import { useRef, type MouseEvent } from "react";

/**
 * useTilt
 * Gives an element a subtle 3D tilt that follows the cursor, plus a
 * matching CSS custom property (--glow-x/--glow-y) so a card can paint a
 * soft light following the pointer. Disabled for touch input and when the
 * user prefers reduced motion.
 */
export function useTilt<T extends HTMLElement = HTMLDivElement>(max = 6) {
  const ref = useRef<T | null>(null);

  const onMouseMove = (e: MouseEvent<T>) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - py) * max * 2;
    const rotateY = (px - 0.5) * max * 2;

    node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    node.style.setProperty("--glow-x", `${px * 100}%`);
    node.style.setProperty("--glow-y", `${py * 100}%`);
  };

  const onMouseLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
