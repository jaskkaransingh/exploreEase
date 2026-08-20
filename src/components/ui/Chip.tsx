import * as React from "react"
import { cn } from "../../lib/utils"

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className, active, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer border",
          active 
            ? "border-[var(--color-brand-accent)] bg-[var(--color-brand-accent)] text-white shadow-sm" 
            : "border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-charcoal)] hover:border-[var(--color-brand-accent-light)]",
          className
        )}
        {...props}
      />
    )
  }
)
Chip.displayName = "Chip"

export { Chip }
