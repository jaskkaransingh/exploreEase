import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-accent)] focus:ring-offset-2",
        {
          "border-transparent bg-[var(--color-brand-accent)] text-white": variant === "default",
          "border-transparent bg-[var(--color-brand-border-light)] text-[var(--color-brand-charcoal)]": variant === "secondary",
          "text-[var(--color-brand-charcoal)] border-[var(--color-brand-border)]": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
