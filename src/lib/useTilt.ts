import { useEffect, useRef, useCallback } from "react"

/**
 * High-performance tilt effect using raw CSS transforms + requestAnimationFrame.
 * Zero React re-renders — directly mutates the DOM element's style.
 */
export function useTilt(maxTilt = 5) {
  const ref = useRef<HTMLDivElement | null>(null)
  const current = useRef({ rx: 0, ry: 0, scale: 1 })
  const target = useRef({ rx: 0, ry: 0, scale: 1 })
  const raf = useRef<number>(0)
  const active = useRef(false)

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  const tick = useCallback(() => {
    const el = ref.current
    if (!el) return

    const c = current.current
    const t = target.current
    const factor = 0.08 // Lower = smoother, silkier

    c.rx = lerp(c.rx, t.rx, factor)
    c.ry = lerp(c.ry, t.ry, factor)
    c.scale = lerp(c.scale, t.scale, factor)

    el.style.transform = `perspective(1000px) rotateX(${c.rx}deg) rotateY(${c.ry}deg) scale3d(${c.scale},${c.scale},${c.scale})`

    // Keep animating until we've settled
    if (
      Math.abs(c.rx - t.rx) > 0.01 ||
      Math.abs(c.ry - t.ry) > 0.01 ||
      Math.abs(c.scale - t.scale) > 0.0001
    ) {
      raf.current = requestAnimationFrame(tick)
    } else {
      active.current = false
    }
  }, [])

  const startLoop = useCallback(() => {
    if (!active.current) {
      active.current = true
      raf.current = requestAnimationFrame(tick)
    }
  }, [tick])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const { clientX, clientY } = e
    const { height, width, left, top } = el.getBoundingClientRect()

    const xPct = (clientX - left) / width - 0.5
    const yPct = (clientY - top) / height - 0.5

    target.current.rx = -yPct * maxTilt * 2
    target.current.ry = xPct * maxTilt * 2
    target.current.scale = 1.02
    startLoop()
  }, [maxTilt, startLoop])

  const handleMouseLeave = useCallback(() => {
    target.current.rx = 0
    target.current.ry = 0
    target.current.scale = 1
    startLoop()
  }, [startLoop])

  useEffect(() => {
    return () => cancelAnimationFrame(raf.current)
  }, [])

  return { ref, handleMouseMove, handleMouseLeave }
}
