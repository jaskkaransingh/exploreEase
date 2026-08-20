import * as React from "react"
import { cn } from "../../lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-[#e2e2e2] bg-white text-[#222222] shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
