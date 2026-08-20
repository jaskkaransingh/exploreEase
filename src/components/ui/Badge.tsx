import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "border-transparent bg-[#c08552] text-white": variant === "default",
          "border-transparent bg-[#f9f7f4] text-[#222222]": variant === "secondary",
          "text-[#222222] border-[#e2e2e2]": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
