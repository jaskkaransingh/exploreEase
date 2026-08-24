import { cn } from "../../lib/utils"

interface AmbientGlowProps {
  /** Position + size + color. Size in vw so it scales down on mobile. */
  className?: string
  delay?: number
  /** 20–50s */
  duration?: number
  from?: number
  to?: number
  peakScale?: number
}

/**
 * Pure CSS ambient glow — no Framer Motion overhead.
 * Uses will-change-transform for GPU compositing.
 */
export function AmbientGlow({
  className,
  delay = 0,
  duration = 30,
  from = 0.08,
  to = 0.2,
  peakScale = 1.15,
}: AmbientGlowProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full will-change-transform", className)}
      style={{
        filter: 'blur(80px)',
        animation: `ambient-glow ${duration}s ease-in-out ${delay}s infinite`,
        '--glow-from': from,
        '--glow-to': to,
        '--glow-peak-scale': peakScale,
      } as React.CSSProperties}
    />
  )
}
