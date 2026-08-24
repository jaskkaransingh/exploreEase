import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface Coordinate {
  lat: number
  lng: number
}

interface RouteMapProps {
  coordinates: Coordinate[]
  className?: string
}

// A simple equirectangular projection for plotting dots on our abstract map
const project = (lat: number, lng: number) => {
  // SVG coordinates: x goes 0 to 100 (lng -180 to 180)
  // y goes 0 to 100 (lat 90 to -90)
  const x = ((lng + 180) / 360) * 100
  const y = ((-lat + 90) / 180) * 100
  return { x, y }
}

export function RouteMap({ coordinates, className }: RouteMapProps) {
  const reduced = useReducedMotion()

  // Generate some faint dot grid background points
  const gridPoints = []
  for (let x = 0; x <= 100; x += 5) {
    for (let y = 0; y <= 100; y += 5) {
      gridPoints.push({ x, y })
    }
  }

  const projected = coordinates.map(c => project(c.lat, c.lng))

  return (
    <div className={cn("relative w-full aspect-video rounded-2xl overflow-hidden bg-[var(--color-brand-surface)]/30 backdrop-blur-md border border-[var(--color-brand-border)]", className)}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Abstract map grid/texture */}
        {gridPoints.map((p, i) => (
          <circle key={`grid-${i}`} cx={p.x} cy={p.y} r="0.2" fill="var(--color-brand-charcoal-light)" opacity="0.2" />
        ))}

        {/* Route Lines */}
        {projected.length > 1 && (
          <motion.path
            d={`M ${projected.map(p => `${p.x} ${p.y}`).join(' L ')}`}
            fill="none"
            stroke="var(--color-brand-accent-light)"
            strokeWidth="0.5"
            strokeDasharray="1 2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={reduced ? { duration: 0 } : { duration: 2, ease: "easeInOut" }}
          />
        )}

        {/* Pins */}
        {projected.map((p, i) => (
          <g key={`pin-${i}`}>
            {!reduced && (
              <motion.circle
                cx={p.x}
                cy={p.y}
                r="3"
                fill="var(--color-brand-accent)"
                className="mix-blend-screen animate-pulse-glow"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
              />
            )}
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="0.8"
              fill="var(--color-brand-accent)"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}
