import { useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'

/**
 * Lightweight background using pure CSS animations only.
 * No Framer Motion animate loops — everything is GPU-composited via CSS transforms.
 */

export function DynamicPageBackground() {
  const reduced = useReducedMotion()

  // Pre-compute particle data once
  const particles = useMemo(() => Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: 3 + (i * 1.5) % 6,
    top: `${12 + (i * 37) % 80}%`,
    left: `${8 + (i * 29) % 85}%`,
    delay: `${(i * 1.7) % 8}s`,
    duration: `${14 + (i * 3) % 12}s`,
  })), [])

  if (reduced) {
    return (
      <div className="fixed inset-0 z-0 bg-[var(--color-brand-background)] pointer-events-none" />
    )
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--color-brand-background)]">
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-brand-background)_80%)] z-[1]" />
      
      {/* Ambient glow orbs — pure CSS, no JS */}
      <div 
        className="absolute w-[60vw] h-[60vw] rounded-full top-[15%] left-[10%] will-change-transform"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-accent-dark) 0%, transparent 70%)',
          opacity: 0.15,
          animation: 'bg-drift 25s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute w-[50vw] h-[50vw] rounded-full bottom-[10%] right-[10%] will-change-transform"
        style={{
          background: 'radial-gradient(circle, var(--color-brand-surface-light) 0%, transparent 70%)',
          opacity: 0.12,
          animation: 'bg-drift 30s ease-in-out infinite reverse',
        }}
      />

      {/* Topo rings — pure CSS rotation, no SVG morph */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ top: '20%' }}>
        <div 
          className="absolute rounded-full border border-[var(--color-brand-charcoal-light)] will-change-transform"
          style={{
            width: '80vw', height: '80vw', maxWidth: 900, maxHeight: 900,
            opacity: 0.06,
            animation: 'topo-spin 180s linear infinite',
          }}
        />
        <div 
          className="absolute rounded-full border border-dashed border-[var(--color-brand-charcoal-light)] will-change-transform"
          style={{
            width: '55vw', height: '55vw', maxWidth: 650, maxHeight: 650,
            opacity: 0.08,
            animation: 'topo-spin 140s linear infinite reverse',
          }}
        />
        <div 
          className="absolute rounded-full border border-[var(--color-brand-charcoal-light)] will-change-transform"
          style={{
            width: '30vw', height: '30vw', maxWidth: 400, maxHeight: 400,
            opacity: 0.1,
            animation: 'topo-spin 100s linear infinite',
          }}
        />
      </div>

      {/* Floating particles — pure CSS */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[var(--color-brand-accent-light)] will-change-transform"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            opacity: 0.3,
            animation: `particle-float ${p.duration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  )
}
