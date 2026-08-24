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
          "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium transition-[color,background-color,border-color,box-shadow,transform] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] cursor-pointer border",
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
