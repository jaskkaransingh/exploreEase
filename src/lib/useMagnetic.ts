import { useEffect, useRef, useCallback } from "react"

/**
 * High-performance magnetic follow effect using raw rAF + lerp.
 * Zero React re-renders — directly mutates the DOM element's style.
 */
export function useMagnetic<T extends HTMLElement = any>(strength = 20) {
  const ref = useRef<T | null>(null)
  const current = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)
  const active = useRef(false)

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  const tick = useCallback(() => {
    const el = ref.current
    if (!el) return

    const c = current.current
    const t = target.current
    const factor = 0.1

    c.x = lerp(c.x, t.x, factor)
    c.y = lerp(c.y, t.y, factor)

    el.style.transform = `translate(${c.x}px, ${c.y}px)`

    if (Math.abs(c.x - t.x) > 0.01 || Math.abs(c.y - t.y) > 0.01) {
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

    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)

    target.current.x = x * strength / 100
    target.current.y = y * strength / 100
    startLoop()
  }, [strength, startLoop])

  const handleMouseLeave = useCallback(() => {
    target.current.x = 0
    target.current.y = 0
    startLoop()
  }, [startLoop])

  useEffect(() => {
    return () => cancelAnimationFrame(raf.current)
  }, [])

  return { ref, handleMouseMove, handleMouseLeave }
}
