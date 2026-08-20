import * as React from "react"
import { cn } from "../../lib/utils"

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn("relative w-full h-2 rounded-full bg-[var(--color-brand-border)]", className)}>
        <input
          type="range"
          ref={ref}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          {...props}
        />
        {/* We would typically use a library like Radix UI for a proper accessible multi-thumb slider.
            For this UI mockup, we'll simulate a stylized slider track via CSS based on value/max. */}
        <div 
          className="absolute left-0 top-0 h-full bg-[var(--color-brand-accent)] rounded-full pointer-events-none z-10" 
          style={{ width: `${(Number(props.value || 0) / Number(props.max || 100)) * 100}%` }}
        />
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border-2 border-[var(--color-brand-accent)] shadow-sm pointer-events-none z-20"
          style={{ left: `calc(${(Number(props.value || 0) / Number(props.max || 100)) * 100}% - 10px)` }}
        />
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }
