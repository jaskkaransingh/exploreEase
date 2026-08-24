import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { MapPin } from 'lucide-react'

interface PassportStampProps {
  placeName: string
  date?: string
  className?: string
  angle?: number
}

export function PassportStamp({ placeName, date, className, angle = -12 }: PassportStampProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: reduced ? angle : angle - 20 }}
      whileInView={{ scale: 1, opacity: 0.8, rotate: angle }}
      viewport={{ once: true, margin: "-20px" }}
      transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 200, damping: 15 }}
      className={cn(
        "inline-flex flex-col items-center justify-center rounded-full border-2 border-dashed border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] bg-transparent aspect-square w-24 p-2 relative mix-blend-screen opacity-80 select-none",
        className
      )}
    >
      <div className="absolute inset-1 rounded-full border border-[var(--color-brand-accent)]/30" />
      <MapPin className="w-4 h-4 mb-1" strokeWidth={2} />
      <span className="font-serif text-sm leading-tight text-center uppercase tracking-widest px-1">
        {placeName}
      </span>
      {date && (
        <span className="text-[8px] font-bold tracking-[0.2em] uppercase mt-1 border-t border-[var(--color-brand-accent)]/50 pt-1 w-3/4 text-center">
          {date}
        </span>
      )}
    </motion.div>
  )
}
