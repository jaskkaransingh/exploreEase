import { motion, useMotionValue, useTransform, animate, useReducedMotion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "../../lib/utils"

interface StatCounterProps {
  value: number
  label: string
  className?: string
  suffix?: string
}

export function StatCounter({ value, label, className, suffix = "" }: StatCounterProps) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      if (reduced) {
        count.set(value)
      } else {
        const controls = animate(count, value, { duration: 1.5, ease: "easeOut" })
        return controls.stop
      }
    }
  }, [isInView, value, reduced, count])

  return (
    <div ref={ref} className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-baseline gap-1">
        <motion.span className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)]">
          {rounded}
        </motion.span>
        {suffix && (
          <span className="text-xl font-serif text-[var(--color-brand-charcoal-light)]">
            {suffix}
          </span>
        )}
      </div>
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">
        {label}
      </span>
    </div>
  )
}
