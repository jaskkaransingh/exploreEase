import { useNavigate } from "react-router-dom"
import { ArrowRight, Plus, Compass } from "lucide-react"
import { motion } from "framer-motion"
import { AmbientGlow } from "../components/ui/AmbientGlow"
import { DynamicPageBackground } from "../components/ui/DynamicPageBackground"
import { FramedImage } from "../components/ui/FramedImage"
import { Card } from "../components/ui/Card"
import { FlightPath } from "../components/ui/FlightPath"
import { useTilt } from "../lib/useTilt"
import { heroContainer, heroItem, revealContainer, revealItem, hoverLift, EASE } from "../lib/motion"

export default function Trips() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-transparent text-[var(--color-brand-charcoal)] font-sans pt-32 pb-40 relative overflow-hidden">
      <DynamicPageBackground />
      <AmbientGlow className="top-[10%] left-[10%] w-[40vw] h-[40vw] bg-[var(--color-brand-accent-dark)] opacity-20" duration={35} />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="flex justify-between items-end mb-24"
        >
          <div>
            <motion.span variants={heroItem} className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)] block mb-6">ExploreEase</motion.span>
            <motion.h1 variants={heroItem} className="text-5xl md:text-6xl font-serif tracking-tight text-balance">
              Your journeys.
            </motion.h1>
          </div>
          <motion.button 
            variants={heroItem}
            whileHover={hoverLift}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/plan')}
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-brand-accent)] transition-colors animate-pulse-glow"
          >
            <Plus className="w-3 h-3" /> New Journey
          </motion.button>
        </motion.div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            UPCOMING TRIPS (Editorial Postcards)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mb-24"
        >
          <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4">Upcoming</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TripCard 
              name="Manali"
              date="12–16 September"
              duration="5 Days"
              budget="₹26,400"
              status="68% Planned"
              img="https://images.unsplash.com/photo-1542314831-c6a4d1429df4?q=80&w=2940&auto=format&fit=crop"
            />
            <TripCard 
              name="Goa"
              date="24–28 October"
              duration="4 Days"
              budget="₹18,500"
              status="10% Planned"
              statusColor="text-[var(--color-brand-charcoal-light)]"
              img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop"
            />
          </div>
        </motion.div>


        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            DRAFTS & PAST
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div 
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          
          <motion.div variants={revealItem}>
            <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4">Drafts</h2>
            <div className="border border-[var(--color-brand-border)] border-dashed p-12 rounded-2xl bg-[var(--color-brand-surface)]/30 backdrop-blur-sm text-center text-[var(--color-brand-charcoal-light)] flex flex-col items-center gap-4 hover:border-[var(--color-brand-charcoal-light)] transition-colors group cursor-pointer relative overflow-hidden" onClick={() => navigate('/plan')}>
              <FlightPath startX={10} startY={50} endX={90} endY={50} className="absolute inset-0 opacity-10 pointer-events-none -z-10" />
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="text-[var(--color-brand-charcoal-lighter)] group-hover:text-[var(--color-brand-accent)] transition-colors"
              >
                <Compass className="w-8 h-8" />
              </motion.div>
              <span className="font-serif text-xl italic group-hover:text-[var(--color-brand-charcoal)] transition-colors">No drafts yet.</span>
              <button className="text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-accent)] transition-colors border-b border-transparent group-hover:border-[var(--color-brand-accent)] pb-1">Start Planning</button>
            </div>
          </motion.div>

          <motion.div variants={revealItem}>
            <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4">Past Journeys</h2>
            <div className="space-y-6">
              {[
                { name: "Kerala", date: "Jan 2026", img: "https://images.unsplash.com/photo-1514222718160-c3d32cb07cb0?q=80&w=2940&auto=format&fit=crop" },
                { name: "Udaipur", date: "Nov 2025", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2754&auto=format&fit=crop" }
              ].map(trip => (
                <motion.div 
                  key={trip.name} 
                  whileHover={hoverLift}
                  className="flex items-center gap-6 group cursor-pointer border border-transparent hover:border-[var(--color-brand-border)] hover:bg-[var(--color-brand-surface)]/50 p-2 rounded-xl transition-all"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                    <FramedImage src={trip.img} alt={trip.name} className="w-full h-full opacity-60 group-hover:opacity-100" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors">{trip.name}</h3>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">{trip.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--color-brand-charcoal-light)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all mr-4" />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  )
}

function TripCard({ name, date, duration, budget, status, img, statusColor = "text-[var(--color-brand-accent)]" }: any) {
  const navigate = useNavigate()
  const tiltRef = useTilt(3)

  return (
    <motion.div
      ref={tiltRef.ref}
      onMouseMove={tiltRef.handleMouseMove}
      onMouseLeave={tiltRef.handleMouseLeave}
      whileHover={{ y: -5 }}
      onClick={() => navigate('/trip/demo')}
      className="group cursor-pointer will-change-transform"
    >
      <Card variant="glass" className="p-2 flex flex-col md:flex-row gap-6 hover:border-[var(--color-brand-charcoal-light)] transition-colors shadow-lg h-full">
        <div className="w-full md:w-2/5 aspect-[4/5] overflow-hidden rounded-xl">
          <FramedImage src={img} alt={name} className="w-full h-full" kenBurnsScale={1.1} />
        </div>
        <div className="w-full md:w-3/5 py-6 pr-6 flex flex-col">
          <div className="flex justify-between items-start mb-12">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] block mb-2">{date}</span>
              <h3 className="text-4xl font-serif group-hover:text-[var(--color-brand-accent)] transition-colors">{name}</h3>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-brand-charcoal-light)] mb-8">
            <div className="flex justify-between border-b border-[var(--color-brand-border)] pb-2 group-hover:border-[var(--color-brand-charcoal-light)]/50 transition-colors">
              <span>Duration</span>
              <span className="text-[var(--color-brand-charcoal)]">{duration}</span>
            </div>
            <div className="flex justify-between border-b border-[var(--color-brand-border)] pb-2 group-hover:border-[var(--color-brand-charcoal-light)]/50 transition-colors">
              <span>Est. Budget</span>
              <span className="text-[var(--color-brand-charcoal)]">{budget}</span>
            </div>
            <div className="flex justify-between border-b border-[var(--color-brand-border)] pb-2 group-hover:border-[var(--color-brand-charcoal-light)]/50 transition-colors">
              <span>Status</span>
              <span className={statusColor}>{status}</span>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-accent)] transition-colors transform-style-3d">
            Continue Journey <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
