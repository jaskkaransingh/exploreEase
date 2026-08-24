import { ArrowRight, ArrowDown, Compass, CloudRain } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"
import videoBg from "../mylivewallpapers-com-Northern-Lights-4K.mp4"
import { AmbientGlow } from "../components/ui/AmbientGlow"
import { FramedImage } from "../components/ui/FramedImage"
import { DynamicPageBackground } from "../components/ui/DynamicPageBackground"
import { Marquee } from "../components/ui/Marquee"
import { Card } from "../components/ui/Card"
import { useTilt } from "../lib/useTilt"
import { useMagnetic } from "../lib/useMagnetic"
import { getDestinationWeather } from "../services/weather"
import type { WeatherContext } from "../services/weather"
import {
  heroContainer,
  heroItem,
  hoverLift,
  revealContainer,
  revealItem,
  VIEWPORT_ONCE,
} from "../lib/motion"

const sectionLabel =
  "text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4"

const collections = [
  {
    title: "Mountain Air",
    desc: "High altitude escapes.",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop",
    kenBurns: 22,
  },
  {
    title: "Coastal Days",
    desc: "Where the land meets the sea.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop",
    kenBurns: 18,
  },
  {
    title: "Hidden Places",
    desc: "Away from the crowds.",
    img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2940&auto=format&fit=crop",
    kenBurns: 25,
  },
]

const escapes = ["Rishikesh", "Coorg", "Ooty", "Udaipur"]

export default function Landing() {
  const navigate = useNavigate()
  const { scrollY } = useScroll()
  const reduced = useReducedMotion()

  // Direct transforms off scrollY — no useSpring wrapper (avoids re-renders every frame)
  const textY = useTransform(scrollY, [0, 500], [0, 150])
  const textRotateX = useTransform(scrollY, [0, 500], [0, 25])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9])
  const compassY = useTransform(scrollY, [0, 800], [0, 400])
  const compassRotate = useTransform(scrollY, [0, 800], [0, 90])

  const ladakhTilt = useTilt(3)
  const magneticCTA = useMagnetic(10)

  const [weather, setWeather] = useState<WeatherContext | null>(null)

  useEffect(() => {
    getDestinationWeather('ladakh').then(setWeather)
  }, [])

  return (
    <div className="w-full bg-transparent min-h-screen text-[var(--color-brand-charcoal)] font-sans overflow-x-clip">
      <DynamicPageBackground />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. CINEMATIC HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center perspective-1000 mb-24">

        {/* Background Layer (Video) */}
        <div className="absolute inset-0 z-0 mix-blend-screen opacity-60">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src={videoBg} type="video/mp4" />
          </video>
        </div>

        {/* Film grain overlay on the hero video itself */}
        <div className="absolute inset-0 z-0 bg-grain pointer-events-none mix-blend-overlay opacity-30" />

        {/* Advanced Dark Overlay - Allows background texture to bleed through */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-background)]/80 via-[var(--color-brand-background)]/30 to-[var(--color-brand-background)]"></div>
          {/* Edge vignette to focus center */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-brand-background)_100%)] opacity-80"></div>
        </div>

        {/* Floating background compass element (Deep Parallax) */}
        <motion.div
          className="absolute z-0 text-[var(--color-brand-surface-light)] opacity-20 pointer-events-none will-change-transform"
          style={{ 
            y: compassY, 
            rotate: compassRotate,
            display: reduced ? 'none' : 'block'
          }}
        >
          <Compass className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={0.5} />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center text-center mt-12 px-6 transform-style-3d pointer-events-none"
          style={{ y: textY, opacity, rotateX: textRotateX, scale: heroScale }}
        >
          <motion.span variants={heroItem} className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)] mb-8 drop-shadow-md">
            Travel, your way
          </motion.span>

          <motion.h1 variants={heroItem} className="text-4xl md:text-6xl font-serif text-[var(--color-brand-background)] mb-2 font-medium tracking-tight drop-shadow-2xl">
            The world<br />is waiting.
          </motion.h1>

          <motion.h2
            variants={heroItem}
            className="text-[14vw] md:text-[12vw] font-black leading-none tracking-tighter opacity-95 drop-shadow-2xl text-[var(--color-brand-background)]"
            style={{ textShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.2)' }}
          >
            EXPLORE
          </motion.h2>

          <motion.p variants={heroItem} className="mt-8 text-base md:text-lg text-[var(--color-brand-background)]/80 max-w-lg font-medium text-balance drop-shadow-md">
            Thoughtfully planned journeys built around the places and experiences you love.
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-col sm:flex-row items-center gap-6 mt-12 pointer-events-auto">
            <button
              onClick={() => navigate('/plan')}
              className="group flex items-center gap-2 text-[12px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-background)] hover:text-white transition-colors drop-shadow-md"
            >
              Plan a Trip
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Peripheral Hero Elements */}
        <div className="absolute bottom-12 left-0 w-full flex justify-between items-end px-12 z-20 pointer-events-none">
          <div className="flex gap-4 pointer-events-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-charcoal)]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-charcoal)]/30 hover:bg-[var(--color-brand-charcoal)]/60 transition-colors cursor-pointer border border-transparent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-transparent border border-[var(--color-brand-charcoal)]/50 hover:bg-[var(--color-brand-charcoal)]/30 transition-colors cursor-pointer"></div>
          </div>
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
                  animate={reduced ? undefined : { y: [0, 24, 0] }}
                  transition={reduced ? undefined : { repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-full h-1/2 bg-[var(--color-brand-charcoal)] absolute top-0"
                />
              </div>
              <ArrowDown className="w-3 h-3 mt-1" />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* ━━━━━━━━━━━━ Trending Now ━━━━━━━━━━━━ */}
        <section className="relative mb-32">
          <AmbientGlow
            className="absolute top-1/3 -left-[18%] w-[55vw] h-[55vw] bg-[var(--color-brand-surface-light)]"
            duration={46}
            delay={10}
            from={0.06}
            to={0.16}
          />
          <motion.div
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
          >
            <motion.h2 variants={revealItem} className={sectionLabel}>
              Trending Now
            </motion.h2>

            <motion.div
              variants={revealContainer}
              className="grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              {/* Ladakh — large feature */}
              <motion.div
                ref={ladakhTilt.ref}
                onMouseMove={ladakhTilt.handleMouseMove}
                onMouseLeave={ladakhTilt.handleMouseLeave}
                variants={revealItem}
                whileHover={hoverLift}
                onClick={() => navigate("/trip/demo")}
                className="md:col-span-8 group cursor-pointer relative will-change-transform"
              >
                <FramedImage
                  src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2940&auto=format&fit=crop"
                  alt="Ladakh"
                  kenBurnsDuration={26}
                  className="aspect-[16/10] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  imgClassName="opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-background)]/90 via-[var(--color-brand-background)]/20 to-transparent flex flex-col justify-end p-8 md:p-12 transform-style-3d">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-accent)]">
                      High Altitude
                    </span>
                    {weather && (
                      <Card variant="glass" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-brand-border)]/50">
                        <CloudRain className="w-3 h-3 text-[var(--color-brand-charcoal-light)]" />
                        <span className="text-[10px] font-bold tracking-wider">{weather.temp}°C • {weather.condition}</span>
                      </Card>
                    )}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-serif mb-4">Ladakh</h3>
                  <p className="text-lg text-[var(--color-brand-charcoal-light)] font-medium max-w-md mb-6">
                    Where the road disappears into the mountains and time slows down.
                  </p>
                  <div 
                    ref={magneticCTA.ref}
                    onMouseMove={magneticCTA.handleMouseMove}
                    onMouseLeave={magneticCTA.handleMouseLeave}
                    className="w-fit will-change-transform"
                  >
                    <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] uppercase group-hover:text-[var(--color-brand-accent)] transition-colors">
                      Explore Journey <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Kerala + Rajasthan — stacked rail */}
              <motion.div
                variants={revealContainer}
                className="md:col-span-4 flex flex-col gap-6"
              >
                {[
                  {
                    title: "Kerala",
                    desc: "Slow mornings. Wild coastlines.",
                    img: "https://images.unsplash.com/photo-1514222718160-c3d32cb07cb0?q=80&w=2940&auto=format&fit=crop",
                    kenBurns: 21,
                  },
                  {
                    title: "Rajasthan",
                    desc: "Colour, history and horizons.",
                    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2754&auto=format&fit=crop",
                    kenBurns: 24,
                  },
                ].map((card) => (
                  <DestinationCard key={card.title} card={card} navigate={navigate} />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ━━━━━━━━━━━━ Curated Collections ━━━━━━━━━━━━ */}
        <section className="relative mb-24">
          <AmbientGlow
            className="absolute top-10 -right-[15%] w-[50vw] h-[50vw] bg-[var(--color-brand-accent-dark)]"
            duration={32}
            delay={14}
            from={0.08}
            to={0.2}
          />
          <motion.div
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
          >
            <motion.h2 variants={revealItem} className={sectionLabel}>
              Curated Collections
            </motion.h2>

            <motion.div
              variants={revealContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {collections.map((collection) => (
                <motion.div
                  key={collection.title}
                  variants={revealItem}
                  whileHover={hoverLift}
                  className="group cursor-pointer"
                >
                  <FramedImage
                    src={collection.img}
                    alt={collection.title}
                    kenBurnsDuration={collection.kenBurns}
                    className="aspect-square rounded-2xl mb-6 transition-transform duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    imgClassName="opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0 transition-[opacity,filter] duration-700"
                  />
                  <h3 className="text-2xl font-serif mb-2 group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">
                    {collection.title}
                  </h3>
                  <p className="text-[var(--color-brand-charcoal-light)]">{collection.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ━━━━━━━━━━━━ Weekend Escapes ━━━━━━━━━━━━ */}
        <section className="relative mb-32">
          <AmbientGlow
            className="absolute -bottom-32 left-1/4 w-[45vw] h-[45vw] bg-[var(--color-brand-surface-light)]"
            duration={40}
            delay={6}
            from={0.06}
            to={0.14}
          />
          <motion.div
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
          >
            <motion.h2 variants={revealItem} className={sectionLabel}>
              Weekend Escapes
            </motion.h2>

            <motion.div
              variants={revealContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              {escapes.map((place) => (
                <motion.div
                  key={place}
                  variants={revealItem}
                  whileHover={hoverLift}
                  className="border border-[var(--color-brand-border)] p-8 rounded-2xl hover:bg-[var(--color-brand-surface)]/60 hover:border-[var(--color-brand-border-light)] transition-colors duration-300 cursor-pointer group"
                >
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-lighter)] block mb-12">
                    2-3 Days
                  </span>
                  <h3 className="text-3xl font-serif mb-4 group-hover:text-[var(--color-brand-accent)] transition-colors duration-300">
                    {place}
                  </h3>
                  <div className="w-8 h-[1px] bg-[var(--color-brand-charcoal-light)] group-hover:w-16 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* ━━━━━━━━━━━━ Marquee ━━━━━━━━━━━━ */}
      <div className="mt-24 mb-24">
        <Marquee items={["Manali", "Goa", "Jaipur", "Kerala", "Ladakh", "Rajasthan", "Meghalaya"]} />
      </div>
    </div>
  )
}

function DestinationCard({ card, navigate }: { card: any, navigate: any }) {
  const cardTilt = useTilt(4)
  return (
    <motion.div
      ref={cardTilt.ref}
      onMouseMove={cardTilt.handleMouseMove}
      onMouseLeave={cardTilt.handleMouseLeave}
      variants={revealItem}
      whileHover={hoverLift}
      onClick={() => navigate("/trip/demo")}
      className="flex-1 min-h-[240px] group cursor-pointer relative will-change-transform"
    >
      <FramedImage
        src={card.img}
        alt={card.title}
        kenBurnsDuration={card.kenBurns}
        className="absolute inset-0"
        imgClassName="opacity-80 group-hover:opacity-100 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-background)]/90 to-transparent flex flex-col justify-end p-8">
        <h3 className="text-3xl font-serif mb-2">{card.title}</h3>
        <p className="text-sm text-[var(--color-brand-charcoal-light)]">
          {card.desc}
        </p>
      </div>
    </motion.div>
  )
}
