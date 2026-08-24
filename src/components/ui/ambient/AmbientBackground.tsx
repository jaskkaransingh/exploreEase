import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

// ── Organic SVG Leaf Shapes ───────────────────────────────────────
// Hand-drawn looking leaf paths for a natural, editorial feel
const LEAF_PATHS = [
  // Monstera-style split leaf
  "M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.5 8.4C7.8 16.2 9 12 12 8c3-4 4.2-2 5.5 1.6C20.2 6.6 22 3.5 22 0c0-5.5-4.5-10-10-10z",
  // Simple rounded leaf
  "M10 0C4 0 0 6 0 12c0 4 2 7.5 5 9.5C6 15 8 9 12 5c4-4 6 0 7 4 2-2 3-5 3-9C22 4 18 0 10 0z",
  // Elongated tropical leaf
  "M8 0C3 2 0 8 0 15c0 5 2 9 5 11C6 18 7 11 10 6c3-5 5-2 6 2 1.5-3 2-7 2-11C18 3 14-1 8 0z",
  // Fern frond shape
  "M6 0C2 1 0 5 0 10c0 4 1.5 7 4 9C5 13 6 7 9 4c3-3 4.5-1 5 2 1-2.5 1.5-5.5 1.5-9C15.5 3 11-1 6 0z",
  // Ginkgo-style fan leaf
  "M12 2C8 2 4 5 4 10c0 3 1.5 5.5 3.5 7C8 13 9.5 9 12 6c2.5-3 4 0 4.5 3 2-1.5 3.5-4 3.5-7 0-5-4-8-8-8z",
]

// Color palette for leaves - subtle green tones matching the brand
const LEAF_COLORS = [
  'var(--color-brand-accent)',
  'var(--color-brand-accent-light)',
  'var(--color-brand-accent-dark)',
  'var(--color-brand-surface-light)',
  'var(--color-brand-charcoal-lighter)',
]

function ForegroundDust({ count }: { count: number }) {
  const dust = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const seed = (i + 1) * 73.19
      return {
        id: i,
        x: (seed * 3.1) % 100,
        y: (seed * 2.7) % 100,
        size: 20 + ((seed * 5) % 1) * 40,
        duration: 4 + ((seed * 7) % 1) * 6,
        delay: ((seed * 11) % 1) * 10,
        driftX: (((seed * 4) % 1) - 0.5) * 600,
        driftY: -300 - ((seed * 6) % 1) * 500,
      }
    })
  }, [count])

  return (
    <>
      {dust.map((p) => (
        <motion.div
          key={`dust-${p.id}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'var(--color-brand-accent-light)',
            filter: `blur(${p.size * 0.5}px)`,
          }}
          animate={{
            x: [0, p.driftX],
            y: [0, p.driftY],
            opacity: [0, 0.15, 0],
            scale: [0.5, 2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </>
  )
}

type Variant = "hero" | "section" | "minimal"

export default function AmbientBackground({ variant: propVariant }: { variant?: Variant }) {
  const reduced = useReducedMotion()
  const location = useLocation()
  const { scrollYProgress } = useScroll()

  let variant = propVariant
  if (!variant) {
    if (location.pathname === '/') variant = 'hero'
    else if (location.pathname.startsWith('/plan')) variant = 'minimal'
    else variant = 'section'
  }

  // ── Mouse tracking (throttled for performance) ──────────────────
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 40 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 30, damping: 40 })

  const rotateX = useTransform(smoothMouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [3, -3])
  const rotateY = useTransform(smoothMouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-3, 3])

  useEffect(() => {
    if (reduced) return
    let frame: number
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frame)
    }
  }, [reduced, mouseX, mouseY])

  // ── Scroll-reactive transforms for parallax layers ──────────────
  const auroraOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.2, 0.35, 0.2, 0.15])
  const deepLayerY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const midLayerY = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])
  const nearLayerY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])

  const deepLayerZ = useTransform(scrollYProgress, [0, 1], [-600, -300])
  const midLayerZ = useTransform(scrollYProgress, [0, 1], [-300, -100])
  const nearLayerZ = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden perspective-1500">
      <motion.div 
        className="absolute inset-0 w-full h-full preserve-3d"
        style={{
          rotateX: reduced ? 0 : rotateX,
          rotateY: reduced ? 0 : rotateY,
        }}
      >
        {/* Layer 0: Deep base gradient — scroll-reactive color shift */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(145deg, 
            hsl(160, 30%, 4%) 0%, 
            hsl(170, 25%, 3%) 30%, 
            hsl(180, 20%, 2%) 60%, 
            hsl(0, 0%, 2%) 100%)`
        }}
      />

      {/* Layer 1: Deep parallax aurora nebulas — 200% tall for parallax room */}
      <motion.div className="absolute inset-x-0 -top-[50%] h-[200%] preserve-3d" style={{ y: deepLayerY, z: deepLayerZ }}>
        <AuroraLayer reduced={reduced} scrollOpacity={auroraOpacity} variant={variant} />
      </motion.div>

      {/* Layer 2: Topographic contour lines */}
      {variant !== 'minimal' && (
        <motion.div className="absolute inset-x-0 -top-[25%] h-[150%] preserve-3d" style={{ y: midLayerY, z: midLayerZ }}>
          <TopoLayer reduced={reduced} />
        </motion.div>
      )}

      {/* Layer 3: Grain texture (always present, adds depth) */}
      <GrainLayer />

      {/* Layer 4: Floating organic leaves at different depths */}
      {variant !== 'minimal' && (
        <>
          <motion.div className="absolute inset-x-0 -top-[50%] h-[200%] preserve-3d" style={{ y: deepLayerY, z: deepLayerZ }}>
            <FloatingLeaves count={variant === 'hero' ? 10 : 5} depth="far" reduced={reduced} />
          </motion.div>
          <motion.div className="absolute inset-x-0 -top-[25%] h-[150%] preserve-3d" style={{ y: midLayerY, z: midLayerZ }}>
            <FloatingLeaves count={variant === 'hero' ? 8 : 4} depth="mid" reduced={reduced} />
          </motion.div>
          <motion.div className="absolute inset-x-0 -top-[10%] h-[120%] preserve-3d" style={{ y: nearLayerY, z: nearLayerZ }}>
            <FloatingLeaves count={variant === 'hero' ? 5 : 3} depth="near" reduced={reduced} />
          </motion.div>
        </>
      )}

      {/* Layer 5: Firefly particles */}
      {variant !== 'minimal' && !reduced && (
        <motion.div className="absolute inset-x-0 -top-[25%] h-[150%] preserve-3d" style={{ y: midLayerY, z: midLayerZ }}>
          <Fireflies count={variant === 'hero' ? 25 : 14} />
        </motion.div>
      )}

      {/* Layer 5.5: Foreground Bokeh Dust for extreme 4D depth */}
      {variant !== 'minimal' && !reduced && (
        <motion.div className="absolute inset-x-0 top-0 h-[100%] preserve-3d pointer-events-none" style={{ z: 400 }}>
          <ForegroundDust count={variant === 'hero' ? 8 : 4} />
        </motion.div>
      )}

      {/* Layer 6: Radial vignette for focus */}
      <VignetteLayer variant={variant} />

      {/* Layer 7: Interactive cursor spotlight */}
      {!reduced && (
        <CursorSpotlight mouseX={smoothMouseX} mouseY={smoothMouseY} />
      )}

      {/* Layer 8: Subtle scan lines for cinematic texture */}
      <ScanLines />
      </motion.div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════
// SUB-LAYERS
// ═══════════════════════════════════════════════════════════════════

function AuroraLayer({
  reduced,
  scrollOpacity,
  variant
}: {
  reduced: boolean | null
  scrollOpacity: any
  variant: Variant
}) {
  return (
    <>
      {/* Primary aurora — large, warm-tinted nebula */}
      <motion.div
        className="absolute rounded-full mix-blend-screen filter blur-[180px]"
        style={{
          width: '90vw',
          height: '90vw',
          maxWidth: '1200px',
          maxHeight: '1200px',
          top: '-30%',
          left: '-15%',
          opacity: scrollOpacity,
          background: 'radial-gradient(ellipse, var(--color-brand-accent-dark) 0%, transparent 70%)',
        }}
        animate={reduced ? undefined : {
          scale: [1, 1.15, 1.05, 1.2, 1],
          x: [0, 80, -40, 60, 0],
          y: [0, -30, 20, -50, 0],
          rotate: [0, 15, -10, 20, 0],
        }}
        transition={reduced ? undefined : {
          duration: 45,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary aurora — cool accent, counter-rotating */}
      {variant !== 'minimal' && (
        <motion.div
          className="absolute rounded-full mix-blend-screen filter blur-[160px]"
          style={{
            width: '70vw',
            height: '70vw',
            maxWidth: '900px',
            maxHeight: '900px',
            top: '30%',
            right: '-20%',
            background: 'radial-gradient(ellipse, var(--color-brand-surface-light) 0%, transparent 70%)',
          }}
          animate={reduced ? undefined : {
            scale: [1, 1.2, 0.95, 1.15, 1],
            x: [0, -60, 30, -80, 0],
            y: [0, 40, -20, 60, 0],
            rotate: [0, -20, 10, -15, 0],
            opacity: [0.1, 0.22, 0.12, 0.18, 0.1],
          }}
          transition={reduced ? undefined : {
            duration: 55,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 8,
          }}
        />
      )}

      {/* Third aurora — accent-tinted underbelly */}
      {variant !== 'minimal' && (
        <motion.div
          className="absolute rounded-full mix-blend-screen filter blur-[200px]"
          style={{
            width: '60vw',
            height: '60vw',
            maxWidth: '800px',
            maxHeight: '800px',
            bottom: '-10%',
            left: '25%',
            background: 'radial-gradient(ellipse, var(--color-brand-accent) 0%, transparent 65%)',
          }}
          animate={reduced ? undefined : {
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 45, 0],
          }}
          transition={reduced ? undefined : {
            duration: 60,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 15,
          }}
        />
      )}
    </>
  )
}

function TopoLayer({ reduced }: { reduced: boolean | null }) {
  const svgContent = useMemo(() => {
    const paths: string[] = []
    for (let i = 0; i < 8; i++) {
      const yBase = 100 + i * 120
      const amplitude = 30 + (i * 7) % 40
      const freq = 0.003 + (i * 0.0004)
      const phase = (i * 1.3) % (Math.PI * 2)
      let d = `M -50 ${yBase}`
      for (let x = -50; x <= 1050; x += 20) {
        const y = yBase + Math.sin(x * freq + phase) * amplitude + Math.cos(x * freq * 1.7 + phase * 0.5) * amplitude * 0.4
        d += ` L ${x} ${y}`
      }
      paths.push(d)
    }
    return paths
  }, [])

  return (
    <motion.div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      animate={reduced ? undefined : {
        x: [0, -80, 0],
        y: [0, -30, 0],
      }}
      transition={reduced ? undefined : {
        duration: 120,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {svgContent.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="var(--color-brand-charcoal)"
            strokeWidth={0.5 + i * 0.15}
            opacity={0.5 - i * 0.04}
          />
        ))}
      </svg>
    </motion.div>
  )
}

function GrainLayer() {
  return (
    <div
      className="absolute inset-0 pointer-events-none mix-blend-overlay"
      style={{
        opacity: 0.06,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
      }}
    />
  )
}

function FloatingLeaves({
  count,
  depth,
  reduced
}: {
  count: number
  depth: 'far' | 'mid' | 'near'
  reduced: boolean | null
}) {
  const leaves = useMemo(() => {
    const config = {
      far: { sizeRange: [18, 32], opacityRange: [0.06, 0.15], speedRange: [35, 50], blur: 2 },
      mid: { sizeRange: [24, 40], opacityRange: [0.1, 0.25], speedRange: [25, 40], blur: 1 },
      near: { sizeRange: [30, 50], opacityRange: [0.15, 0.35], speedRange: [18, 30], blur: 0 },
    }
    const c = config[depth]

    // Use deterministic seed-like values for stable layout
    return Array.from({ length: count }).map((_, i) => {
      const seed = (i + 1) * 137.508 // Golden angle for even distribution
      return {
        id: `${depth}-${i}`,
        path: LEAF_PATHS[i % LEAF_PATHS.length],
        color: LEAF_COLORS[i % LEAF_COLORS.length],
        size: c.sizeRange[0] + ((seed * 7) % 1) * (c.sizeRange[1] - c.sizeRange[0]),
        x: (seed * 3.7) % 100,
        y: (seed * 2.3) % 100,
        opacity: c.opacityRange[0] + ((seed * 5) % 1) * (c.opacityRange[1] - c.opacityRange[0]),
        duration: c.speedRange[0] + ((seed * 11) % 1) * (c.speedRange[1] - c.speedRange[0]),
        delay: ((seed * 13) % 1) * 15,
        rotateStart: (seed * 9) % 360,
        driftX: (((seed * 4) % 1) - 0.5) * 300,
        driftY: -200 - ((seed * 6) % 1) * 400,
        blur: c.blur,
      }
    })
  }, [count, depth])

  if (reduced) {
    return (
      <>
        {leaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute pointer-events-none"
            style={{
              left: `${leaf.x}%`,
              top: `${leaf.y}%`,
              filter: leaf.blur ? `blur(${leaf.blur}px)` : undefined,
            }}
          >
            <svg
              width={leaf.size}
              height={leaf.size}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                opacity: leaf.opacity * 0.7,
                transform: `rotate(${leaf.rotateStart}deg)`,
              }}
            >
              <path d={leaf.path} fill={leaf.color} />
              <line x1="12" y1="2" x2="8" y2="20" stroke={leaf.color} strokeWidth="0.3" opacity="0.5" />
            </svg>
          </div>
        ))}
      </>
    )
  }

  return (
    <>
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute pointer-events-none"
          style={{
            left: `${leaf.x}%`,
            top: `${leaf.y}%`,
            filter: leaf.blur ? `blur(${leaf.blur}px)` : undefined,
          }}
          animate={{
            y: [0, leaf.driftY * 0.3, leaf.driftY * 0.7, leaf.driftY, 0],
            x: [0, leaf.driftX * 0.4, leaf.driftX * -0.3, leaf.driftX * 0.6, 0],
            rotateZ: [leaf.rotateStart, leaf.rotateStart + 120, leaf.rotateStart + 240, leaf.rotateStart + 360],
            rotateX: [0, 180, 360, 180, 0],
            rotateY: [0, 90, 180, 270, 360],
            opacity: [0, leaf.opacity, leaf.opacity, leaf.opacity * 0.5, 0],
            scale: [0.5, 1, 1.1, 0.9, 0.5],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: 'easeInOut',
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={leaf.path} fill={leaf.color} fillOpacity="0.8" />
            {/* Leaf mid-rib vein */}
            <line x1="12" y1="2" x2="8" y2="20" stroke={leaf.color} strokeWidth="0.4" opacity="0.4" />
            {/* Secondary veins */}
            <line x1="10" y1="6" x2="6" y2="10" stroke={leaf.color} strokeWidth="0.2" opacity="0.25" />
            <line x1="11" y1="10" x2="7" y2="14" stroke={leaf.color} strokeWidth="0.2" opacity="0.25" />
            <line x1="10" y1="8" x2="15" y2="12" stroke={leaf.color} strokeWidth="0.2" opacity="0.25" />
          </svg>
        </motion.div>
      ))}
    </>
  )
}

function Fireflies({ count }: { count: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const seed = (i + 1) * 97.31
      return {
        id: i,
        x: (seed * 3.1) % 100,
        y: (seed * 2.7) % 100,
        size: 1.5 + ((seed * 5) % 1) * 2.5,
        duration: 4 + ((seed * 7) % 1) * 8,
        delay: ((seed * 11) % 1) * 10,
        driftX: (((seed * 4) % 1) - 0.5) * 80,
        driftY: (((seed * 6) % 1) - 0.5) * 80,
      }
    })
  }, [count])

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={`firefly-${p.id}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: 'var(--color-brand-accent-light)',
            boxShadow: `0 0 ${p.size * 6}px ${p.size * 1.5}px var(--color-brand-accent-light)`,
          }}
          animate={{
            x: [0, p.driftX, -p.driftX * 0.5, p.driftX * 0.7, 0],
            y: [0, p.driftY, -p.driftY * 0.5, p.driftY * 0.7, 0],
            opacity: [0, 0.6, 0.3, 0.8, 0],
            scale: [0, 1, 0.7, 1.2, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}

function VignetteLayer({ variant }: { variant: Variant }) {
  return (
    <>
      {/* Primary radial vignette — very soft, just a gentle focus */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, var(--color-brand-background) 100%)',
          opacity: variant === 'hero' ? 0.35 : 0.5,
        }}
      />
      {/* Very subtle corner darkening */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 75%, var(--color-brand-background) 100%)',
          opacity: 0.25,
        }}
      />
    </>
  )
}

function CursorSpotlight({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
  return (
    <div className="hidden [@media(hover:hover)_and_(pointer:fine)]:block absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full mix-blend-overlay pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, var(--color-brand-accent) 0%, transparent 60%)',
          opacity: 0.12,
          filter: 'blur(40px)',
        }}
      />
      {/* Tighter, brighter inner glow */}
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full mix-blend-screen pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, var(--color-brand-accent-light) 0%, transparent 70%)',
          opacity: 0.06,
          filter: 'blur(20px)',
        }}
      />
    </div>
  )
}

function ScanLines() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: 0.015,
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          var(--color-brand-charcoal) 2px,
          var(--color-brand-charcoal) 3px
        )`,
        backgroundSize: '100% 3px',
        mixBlendMode: 'overlay',
      }}
    />
  )
}
