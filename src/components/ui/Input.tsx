import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] px-4 py-2 text-base ring-offset-[var(--color-brand-cream)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-brand-charcoal-lighter)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:border-transparent focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-[border-color,box-shadow] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
