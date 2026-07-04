import { forwardRef, type MutableRefObject } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";

/**
 * Drop-in replacement for <Button> that gently follows the cursor while
 * hovered, springing back on leave. Purely transform-based so it's cheap
 * and never shifts layout.
 */
const MagneticButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, forwardedRef) => {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLButtonElement>(14);

  return (
    <Button
      ref={(node) => {
        ref.current = node;
        if (typeof forwardedRef === "function") forwardedRef(node);
        else if (forwardedRef) (forwardedRef as MutableRefObject<HTMLButtonElement | null>).current = node;
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("transition-transform duration-300 ease-out will-change-transform", className)}
      {...props}
    >
      {children}
    </Button>
  );
});
MagneticButton.displayName = "MagneticButton";

export default MagneticButton;
