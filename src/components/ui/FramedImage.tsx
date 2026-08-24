import { cn } from "../../lib/utils"

interface FramedImageProps {
  src: string
  alt: string
  /** Outer frame classes: aspect ratio, rounding, hover-zoom, positioning */
  className?: string
  /** <img> classes: opacity / grayscale hover states */
  imgClassName?: string
  /** Extra gradient layered over the base vignette */
  overlayClassName?: string
  kenBurnsDuration?: number
  kenBurnsScale?: number
}

export function FramedImage({
  src,
  alt,
  className,
  imgClassName,
  overlayClassName,
  kenBurnsDuration = 22,
}: FramedImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--color-brand-surface)]",
        "ring-1 ring-white/[0.06]",
        "shadow-[0_25px_90px_-20px_rgba(0,0,0,0.65)]",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn("absolute inset-0 w-full h-full object-cover will-change-transform", imgClassName)}
        style={{
          animation: `ken-burns ${kenBurnsDuration}s ease-in-out infinite`,
        }}
      />
      {/* Cinematic frame: vignette + inset falloff */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-gradient-to-t from-black/50 via-transparent to-black/20",
          "shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]",
          overlayClassName
        )}
      />
    </div>
  )
}
