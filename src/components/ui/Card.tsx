import * as React from "react"
import { cn } from "../../lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] text-[var(--color-brand-charcoal)] shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)]",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
