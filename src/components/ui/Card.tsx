import * as React from "react"
import { cn } from "../../lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass"
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-[var(--color-brand-border)] text-[var(--color-brand-charcoal)]",
        variant === "default" 
          ? "bg-[var(--color-brand-surface)] shadow-[0_2px_10px_-3px_rgba(0,0,0,0.03)]" 
          : "bg-[var(--color-brand-surface)]/40 backdrop-blur-xl",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
