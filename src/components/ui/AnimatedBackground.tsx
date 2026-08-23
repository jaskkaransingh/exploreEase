import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Leaf } from 'lucide-react'

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    // Generate 25 random floating leaves
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 24 + 24, // 24px to 48px
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      duration: Math.random() * 20 + 20, // slow floating
      delay: Math.random() * 10,
      rotateStart: Math.random() * 360,
      rotateEnd: Math.random() * 360 + 360,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-[#121c17] via-[#0a0f0d] to-black">
      
      {/* Subtle Cinematic Mesh Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-[#5e8b70] rounded-full mix-blend-screen filter blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] -right-[10%] w-[60vw] h-[60vw] bg-[#89a897] rounded-full mix-blend-screen filter blur-[150px]"
      />
      
      {/* Floating Leaves */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-[#89a897]/60"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
          }}
          animate={{
            y: [0, -300, 200, 0], // Float up and down smoothly
            x: [0, 150, -150, 0], // Sway side to side
            rotate: [p.rotateStart, p.rotateEnd, p.rotateStart],
            opacity: [0, 1, 1, 0], // Fade gently
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          <Leaf width={p.size} height={p.size} />
        </motion.div>
      ))}
    </div>
  )
}
