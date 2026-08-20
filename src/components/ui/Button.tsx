import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-[var(--color-brand-cream)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-accent-dark)] shadow-sm hover:shadow-md": variant === "default",
            "border border-[var(--color-brand-border)] bg-transparent hover:bg-[var(--color-brand-surface)] text-[var(--color-brand-charcoal)]": variant === "outline",
            "hover:bg-[var(--color-brand-surface)] text-[var(--color-brand-charcoal)]": variant === "ghost",
            "text-[var(--color-brand-accent)] underline-offset-4 hover:underline": variant === "link",
            "h-11 px-5 py-2": size === "default",
            "h-9 rounded-md px-4": size === "sm",
            "h-14 rounded-xl px-8 text-base": size === "lg",
            "h-11 w-11 rounded-full": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
