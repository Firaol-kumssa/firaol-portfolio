import type { ElementType, HTMLAttributes, ReactNode, Ref } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
}

/**
 * Wraps children in a fade-up-on-scroll animation. Purely CSS driven
 * (see `.reveal` / `.is-visible` in index.css) so it stays cheap on
 * mobile and never blocks first paint.
 */
const Reveal = ({ children, delay = 0, as: Tag = "div", className, style, ...props }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as Ref<never>}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms", ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
