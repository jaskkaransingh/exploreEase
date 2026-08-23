import { ArrowRight, ArrowDown, Compass } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import videoBg from "../mylivewallpapers-com-Northern-Lights-4K.mp4"
import AnimatedBackground from "../components/ui/AnimatedBackground"

export default function Landing() {
  const navigate = useNavigate()
  const { scrollY } = useScroll()
  
  // Parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Discover Section Scroll-Jacking
  const discoverRef = useRef<HTMLElement>(null)
  const { scrollYProgress: discoverProgress } = useScroll({
    target: discoverRef,
    offset: ["start start", "end end"]
  })

  // 3 items -> scroll 2 items up -> -66.666%
  const imagesY = useTransform(discoverProgress, [0, 1], ["0%", "-66.666%"])
  
  // Opacities and Y-shifts for descriptions to crossfade cleanly without overlapping.
  // ALWAYS map full [0,1] range so CSS values don't get extrapolated to invalid numbers!
  const text1Op = useTransform(discoverProgress, [0, 0.28, 0.31, 1], [1, 1, 0, 0])
  const text2Op = useTransform(discoverProgress, [0, 0.34, 0.37, 0.61, 0.64, 1], [0, 0, 1, 1, 0, 0])
  const text3Op = useTransform(discoverProgress, [0, 0.67, 0.70, 1], [0, 0, 1, 1])
  const textOpacities = [text1Op, text2Op, text3Op]

  const text1Y = useTransform(discoverProgress, [0, 0.28, 0.31, 1], [0, 0, -20, -20])
  const text2Y = useTransform(discoverProgress, [0, 0.34, 0.37, 0.61, 0.64, 1], [20, 20, 0, 0, -20, -20])
  const text3Y = useTransform(discoverProgress, [0, 0.67, 0.70, 1], [20, 20, 0, 0])
  const textYs = [text1Y, text2Y, text3Y]

  const places = [
    {
      title: "Manali",
      region: "Himachal Pradesh",
      desc: "Mountain mornings, winding roads and slow evenings.",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop"
    },
    {
      title: "Goa",
      region: "Konkan Coast",
      desc: "Beyond the beaches and into the slow life.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop"
    },
    {
      title: "Jaipur",
      region: "Rajasthan",
      desc: "Royal heritage, color, and endless horizons.",
      img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2940&auto=format&fit=crop"
    }
  ]

  return (
    <div className="w-full bg-transparent min-h-screen text-[var(--color-brand-charcoal)] font-sans">
      <AnimatedBackground />
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. CINEMATIC HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
          {/* Dark Overlay for text legibility and cinematic mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f12]/60 via-[#0a0f12]/20 to-[#0a0f12]/90"></div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 flex flex-col items-center text-center mt-12 px-6"
          style={{ y: textY, opacity }}
        >
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)] mb-8">
            Travel, your way
          </span>
          
          <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-brand-charcoal)] mb-2 font-medium tracking-tight">
            The world<br />is waiting.
          </h1>
          
          <h2 className="text-[14vw] md:text-[12vw] font-black leading-none tracking-tighter text-[var(--color-brand-charcoal)] opacity-90 drop-shadow-2xl">
            EXPLORE
          </h2>
          
          <p className="mt-8 text-base md:text-lg text-[var(--color-brand-charcoal-light)] max-w-lg font-medium text-balance">
            Thoughtfully planned journeys built around the places and experiences you love.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-12">
            <button 
              onClick={() => navigate('/explore')}
              className="px-8 py-4 rounded-full bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-white/90 transition-colors"
            >
              Start Exploring
            </button>
            <button 
              onClick={() => navigate('/plan')}
              className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-accent)] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-full after:bg-[var(--color-brand-charcoal-light)]/50"
            >
              Plan a trip
            </button>
          </div>
        </motion.div>

        {/* Peripheral Hero Elements */}
        <div className="absolute bottom-12 left-0 w-full flex justify-between items-end px-12 z-20 pointer-events-none">
          
          {/* Left: Slide indicators */}
          <div className="flex gap-4 pointer-events-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-charcoal)]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-charcoal)]/30 hover:bg-[var(--color-brand-charcoal)]/60 transition-colors cursor-pointer border border-transparent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-transparent border border-[var(--color-brand-charcoal)]/50 hover:bg-[var(--color-brand-charcoal)]/30 transition-colors cursor-pointer"></div>
          </div>

          {/* Right: Instagram & Scroll */}
          <div className="flex flex-col items-end gap-16 pointer-events-auto">
            <a href="#" className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] origin-right -rotate-90 translate-x-3 transition-colors">
              Instagram
            </a>
            
            <div className="flex flex-col items-center gap-4 text-[var(--color-brand-charcoal-light)]">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase origin-center -rotate-90 whitespace-nowrap mb-4">
                Scroll
              </span>
              <div className="w-px h-12 bg-[var(--color-brand-border)] relative">
                <motion.div 
                  animate={{ y: [0, 24, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-full h-1/2 bg-[var(--color-brand-charcoal)] absolute top-0"
                />
              </div>
              <ArrowDown className="w-3 h-3 mt-1" />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. DISCOVERY SECTION (Scroll-Jacking)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section ref={discoverRef} className="relative w-full h-[300vh] bg-[var(--color-brand-background)] z-10">
        <div className="sticky top-0 pt-24 pb-16 h-screen w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-center overflow-hidden">
          
          <div className="mb-10 shrink-0">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)] block mb-4">Suggested for you</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)]">Where will you go next?</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 h-[55vh] lg:h-[65vh] items-center w-full mb-12">
            
            {/* LEFT: 70% Scrolling Images Box */}
            <div className="w-full lg:w-[70%] h-full rounded-2xl overflow-hidden relative bg-[var(--color-brand-surface)]">
              <motion.div className="w-full h-[300%] flex flex-col" style={{ y: imagesY }}>
                {places.map((place, idx) => (
                  <div key={idx} className="w-full h-1/3 relative group cursor-pointer" onClick={() => navigate('/explore')}>
                    <img src={place.img} alt={place.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT: 30% Sticky Text Box */}
            <div className="w-full lg:w-[30%] h-full relative flex items-center">
              {places.map((place, idx) => (
                <motion.div 
                  key={idx} 
                  style={{ 
                    opacity: textOpacities[idx], 
                    y: textYs[idx],
                    pointerEvents: idx === 0 ? 'auto' : 'none' 
                  }} 
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] block mb-3">{place.region}</span>
                  <h3 className="text-4xl lg:text-5xl font-serif mb-6">{place.title}</h3>
                  <p className="text-[var(--color-brand-charcoal-light)] font-medium text-lg leading-relaxed mb-10">{place.desc}</p>
                  
                  <div className="flex flex-col gap-6">
                    <div className="flex gap-8 text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--color-brand-charcoal-lighter)]">
                      <span>4-5 Days</span>
                      <span>₹18K-₹30K</span>
                    </div>
                    <button onClick={() => navigate('/explore')} className="text-[10px] w-fit font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-2 pointer-events-auto">
                      Explore <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. TRAVEL PERSONALITY SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 px-6 md:px-12 bg-[var(--color-brand-surface)]/40 backdrop-blur-xl border-y border-[var(--color-brand-border)] relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="sticky top-32"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)] block mb-6">Travel Your Way</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)] mb-8 text-balance">
                Not every journey looks the same.
              </h2>
              <p className="text-[var(--color-brand-charcoal-light)] text-lg max-w-md">
                We design itineraries that adapt to your rhythm, whether you seek isolation in the mountains or chaos in the city.
              </p>
            </motion.div>

            <div className="flex flex-col gap-12">
              {[
                { title: "WILD", desc: "For mountain trails, open roads, and untouched landscapes." },
                { title: "SLOW", desc: "For quiet mornings, hidden stays, and nowhere to be." },
                { title: "CURIOUS", desc: "For food, culture, architecture, and local stories." },
                { title: "SOCIAL", desc: "For cities, nightlife, shared experiences, and energy." }
              ].map((mood, idx) => (
                <motion.div 
                  key={mood.title} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                  className="border-b border-[var(--color-brand-border)] pb-12 group"
                >
                  <h3 className="text-2xl font-bold tracking-tight text-[var(--color-brand-charcoal)] mb-3 group-hover:text-[var(--color-brand-accent)] transition-colors">
                    {mood.title}
                  </h3>
                  <p className="text-[var(--color-brand-charcoal-light)] text-lg font-serif italic">
                    {mood.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4. PLANNER ENTRY
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-40 px-6 text-center relative z-10 overflow-hidden">
        {/* Subtle animated background glow */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-brand-surface-light)] rounded-full blur-[100px] pointer-events-none z-0"
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl mx-auto flex flex-col items-center relative z-10"
        >
          <Compass className="w-10 h-10 text-[var(--color-brand-accent)] mb-8 opacity-50" strokeWidth={1} />
          <h2 className="text-5xl md:text-6xl font-serif text-[var(--color-brand-charcoal)] mb-6 text-balance">
            Build a trip that feels like yours.
          </h2>
          <p className="text-lg text-[var(--color-brand-charcoal-light)] mb-12 max-w-md">
            Tell us where you're going, when you're leaving and what you want to experience.
          </p>
          <button 
            onClick={() => navigate('/plan')}
            className="px-10 py-5 rounded-full bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] text-[12px] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-brand-accent)] transition-colors shadow-2xl relative overflow-hidden group"
          >
            <span className="relative z-10">Plan my trip</span>
            <div className="absolute inset-0 bg-[var(--color-brand-charcoal-light)]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </motion.div>
      </section>
      
    </div>
  )
}
