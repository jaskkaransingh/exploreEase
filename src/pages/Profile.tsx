import { Settings, LogOut, Heart, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { AmbientGlow } from "../components/ui/AmbientGlow"
import { FramedImage } from "../components/ui/FramedImage"
import { heroContainer, heroItem, revealContainer, revealItem, hoverLift, EASE } from "../lib/motion"

export default function Profile() {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-brand-charcoal)] font-sans pt-32 pb-40 relative overflow-hidden">
      <AmbientGlow className="top-[30%] left-[20%] w-[40vw] h-[40vw] bg-[var(--color-brand-accent-dark)] opacity-20" duration={35} />
      
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header & Identity */}
        <motion.div 
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="mb-24 flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left"
        >
          <motion.div variants={heroItem} className="relative group cursor-pointer">
            <div className="absolute inset-[-4px] bg-[var(--color-brand-accent)] rounded-full opacity-30 group-hover:opacity-100 group-hover:scale-110 animate-breathe transition-all duration-500"></div>
            <div className="w-32 h-32 rounded-full overflow-hidden bg-[var(--color-brand-surface)] border-2 border-[var(--color-brand-border)] shrink-0 relative z-10">
              {/* Minimal profile placeholder */}
              <div className="w-full h-full flex items-center justify-center text-4xl font-serif text-[var(--color-brand-charcoal-light)] bg-gradient-to-br from-[var(--color-brand-surface-light)] to-[var(--color-brand-surface)] group-hover:text-[var(--color-brand-accent)] transition-colors">
                J
              </div>
            </div>
          </motion.div>
          <div>
            <motion.h1 variants={heroItem} className="text-5xl font-serif tracking-tight mb-3">Your travel story.</motion.h1>
            <motion.p variants={heroItem} className="text-[var(--color-brand-charcoal-light)] text-lg mb-8">Jaskaran Singh</motion.p>
            
            <motion.div variants={heroItem} className="flex gap-4 justify-center md:justify-start">
              <button className="px-6 py-2.5 rounded-full border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)]/50 backdrop-blur-sm text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--color-brand-surface)] hover:border-[var(--color-brand-charcoal-light)] transition-all flex items-center gap-2 group">
                <Settings className="w-3 h-3 group-hover:rotate-90 transition-transform duration-500" /> Settings
              </button>
              <button className="px-6 py-2.5 rounded-full border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)]/50 backdrop-blur-sm text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--color-brand-surface)] hover:border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] transition-all flex items-center gap-2 group">
                <LogOut className="w-3 h-3 group-hover:-translate-x-1 transition-transform duration-300" /> Log Out
              </button>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              LEFT: TRAVEL DNA
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="md:col-span-5"
          >
            <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4">Travel DNA</h2>
            <p className="text-sm font-serif italic text-[var(--color-brand-charcoal-light)] mb-8 text-balance">
              Based on your saved places and past journeys, you gravitate towards nature and slow experiences.
            </p>
            
            <div className="space-y-6">
              {[
                { label: "NATURE", val: 82 },
                { label: "SLOW TRAVEL", val: 64 },
                { label: "FOOD", val: 58 },
                { label: "CULTURE", val: 42 },
                { label: "ADVENTURE", val: 35 }
              ].map((dna, idx) => (
                <div key={dna.label} className="group cursor-pointer">
                  <div className="flex justify-between items-center text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                    <span className="text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-accent)] transition-colors">{dna.label}</span>
                    <span className="text-[var(--color-brand-charcoal-light)]">{dna.val}%</span>
                  </div>
                  <div className="h-1 bg-[var(--color-brand-surface)] rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${dna.val}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                      className="h-full bg-[var(--color-brand-charcoal-light)] group-hover:bg-[var(--color-brand-accent)] transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              RIGHT: ACTIVITY
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <motion.div 
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7 flex flex-col gap-12"
          >
            
            {/* Saved Places */}
            <motion.div variants={revealItem}>
              <div className="flex justify-between items-center mb-6 border-b border-[var(--color-brand-border)] pb-4">
                <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">Saved Places</h2>
                <button className="text-[10px] font-bold tracking-[0.1em] uppercase hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-1 group">
                  View All <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Johnson's Cafe", type: "EAT", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop" },
                  { name: "The Himalayan", type: "STAY", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop" }
                ].map(place => (
                  <motion.div key={place.name} whileHover={hoverLift} className="group cursor-pointer">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 relative">
                      <div className="absolute top-2 right-2 p-1.5 bg-[var(--color-brand-background)]/50 backdrop-blur-sm rounded-full z-10 text-[var(--color-brand-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                        <Heart className="w-3 h-3 fill-current" />
                      </div>
                      <FramedImage src={place.img} alt={place.name} className="w-full h-full opacity-80 group-hover:opacity-100" />
                    </div>
                    <h3 className="text-lg font-serif mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors">{place.name}</h3>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">{place.type}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Menu Links */}
            <motion.div variants={revealItem} className="flex flex-col gap-4 mt-8 border-t border-[var(--color-brand-border)] pt-8">
              {['Preferences', 'Payment Methods', 'Notifications', 'Privacy & Security'].map(link => (
                <button key={link} className="flex justify-between items-center py-4 border-b border-[var(--color-brand-border)]/50 hover:border-[var(--color-brand-charcoal-light)] transition-colors group bg-transparent">
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-accent)] group-hover:translate-x-2 transition-all">{link}</span>
                  <ChevronRight className="w-4 h-4 text-[var(--color-brand-charcoal-light)] group-hover:translate-x-1 group-hover:text-[var(--color-brand-accent)] transition-all" />
                </button>
              ))}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </div>
  )
}
