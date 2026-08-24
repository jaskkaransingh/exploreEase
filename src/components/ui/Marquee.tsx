import { cn } from '../../lib/utils'

interface MarqueeProps {
  items: string[]
  className?: string
}

export function Marquee({ items, className }: MarqueeProps) {
  // Duplicate items to ensure smooth infinite scrolling
  const scrollItems = [...items, ...items, ...items]

  return (
    <div className={cn("relative w-full overflow-hidden py-4 flex items-center border-y border-[var(--color-brand-border)] bg-[var(--color-brand-surface)]/30", className)}>
      {/* Edge Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-brand-background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-brand-background)] to-transparent z-10 pointer-events-none" />
      
      {/* Custom keyframes injected inline or could be in index.css */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee-scroll {
          animation: marquee-scroll 40s linear infinite;
        }
        .animate-marquee-scroll:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-scroll {
            animation: none !important;
            transform: translateX(0) !important;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
      
      <div className="flex w-max animate-marquee-scroll">
        {scrollItems.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--color-brand-charcoal-light)] whitespace-nowrap px-8">
              {item}
            </span>
            <span className="text-[var(--color-brand-accent)] text-[8px]">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
