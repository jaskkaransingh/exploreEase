import type { Variants } from "framer-motion"

// ── §2 Motion system ──────────────────────────────────────────────
export const EASE = [0.22, 1, 0.36, 1] as const // Softer, more luxurious cubic bezier

export const DURATION_FAST = 0.5 // hover/tap feedback
export const DURATION_BASE = 1.0 // section reveals
export const DURATION_SLOW = 1.4 // hero/large entrances

// Standard scroll-reveal viewport config
export const VIEWPORT_ONCE = { once: true, margin: "-120px" } as const

// Page/hero-level content — animates on mount (heroContainer/heroItem pattern)
export const heroContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION_SLOW, ease: EASE } },
}

// Section-level content — reveals on scroll into view
export const revealContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION_BASE, ease: EASE } },
}

// Standard card hover lift. Transition is nested inside the gesture target
// so it never overrides a variant's own reveal transition.
export const hoverLift = {
  y: -4,
  transition: { duration: DURATION_FAST, ease: EASE },
}
