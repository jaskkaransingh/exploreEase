import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface FlightPathProps {
  className?: string
  startX?: number
  startY?: number
  endX?: number
  endY?: number
  curvature?: number // -1 to 1
}

export function FlightPath({ 
  className,
  startX = 10,
  startY = 90,
  endX = 90,
  endY = 10,
  curvature = 0.5 
}: FlightPathProps) {
  const reduced = useReducedMotion()
  
  // Calculate a control point based on curvature
  const midX = (startX + endX) / 2
  const midY = (startY + endY) / 2
  const dx = endX - startX
  const dy = endY - startY
  
  // Perpendicular vector for the curve
  const perpX = -dy * curvature
  const perpY = dx * curvature
  
  const cpX = midX + perpX
  const cpY = midY + perpY

  const path = `M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`

  return (
    <svg 
      className={cn("absolute w-full h-full pointer-events-none stroke-[var(--color-brand-accent-light)]", className)}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <motion.path
        d={path}
        fill="none"
        strokeWidth="0.5"
        strokeDasharray="1 2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={reduced ? { duration: 0 } : { duration: 2, ease: "easeOut", opacity: { duration: 1 } }}
      />
      <motion.circle
        cx={endX}
        cy={endY}
        r="1"
        fill="var(--color-brand-accent)"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: reduced ? 0 : 1.8, duration: 0.5 }}
      />
    </svg>
  )
}
