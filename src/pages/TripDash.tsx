import { Map, Share2, Download, ArrowLeft, CloudRain, Sun } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { AmbientGlow } from "../components/ui/AmbientGlow"
import { FramedImage } from "../components/ui/FramedImage"
import { Card } from "../components/ui/Card"
import { StatCounter } from "../components/ui/StatCounter"
import { RouteMap } from "../components/ui/RouteMap"
import { revealContainer, revealItem, hoverLift, EASE } from "../lib/motion"

export default function TripDash() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-transparent text-[var(--color-brand-charcoal)] font-sans relative overflow-hidden">
      
      <AmbientGlow className="top-[20%] right-[30%] w-[40vw] h-[40vw] bg-[var(--color-brand-accent-dark)] opacity-30" duration={45} />
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TOP NAV / CONTEXT
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header className="sticky top-0 z-40 bg-[var(--color-brand-background)]/80 backdrop-blur-xl border-b border-[var(--color-brand-border)]">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/trips')} className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-accent)] transition-colors transform hover:scale-110 active:scale-95">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-serif tracking-tight mb-1">YOUR JOURNEY</h1>
              <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">
                <span className="text-[var(--color-brand-charcoal)]">Manali</span>
                <span className="w-1 h-1 bg-[var(--color-brand-border)] rounded-full"></span>
                <span>12–16 September</span>
                <span className="w-1 h-1 bg-[var(--color-brand-border)] rounded-full"></span>
                <span>5 Days · 2 Travellers</span>
                <span className="w-1 h-1 bg-[var(--color-brand-border)] rounded-full"></span>
                <span className="text-[var(--color-brand-accent)]">₹26,400 EST.</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 hidden md:flex">
            <button className="p-2 text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-accent)] transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-accent)] transition-colors">
              <Download className="w-4 h-4" />
            </button>
            <button className="px-5 py-2 bg-[var(--color-brand-surface)]/80 backdrop-blur-md border border-[var(--color-brand-border)] rounded-full text-[10px] font-bold tracking-[0.1em] uppercase hover:border-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] transition-colors">
              Edit Trip
            </button>
          </div>
        </div>
      </header>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SPLIT LAYOUT
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto h-[calc(100vh-80px)] relative z-10">
        
        {/* LEFT PANE: ITINERARY TIMELINE */}
        <div className="w-full lg:w-1/2 h-full overflow-y-auto px-6 py-12 hide-scrollbar">
          
          <div className="max-w-xl mx-auto">
            {/* Day Selector */}
            <div className="flex items-center gap-6 mb-16 overflow-x-auto pb-4 hide-scrollbar">
              {['DAY 01', 'DAY 02', 'DAY 03', 'DAY 04', 'DAY 05'].map((day, i) => (
                <button 
                  key={day} 
                  className={`relative text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap transition-colors pb-1 ${
                    i === 0 
                      ? 'text-[var(--color-brand-charcoal)]' 
                      : 'text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)]'
                  }`}
                >
                  {day}
                  {i === 0 && (
                    <motion.div layoutId="dayIndicator" className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-brand-charcoal)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Weather Integration (Contextual) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mb-16 border-l-2 border-[var(--color-brand-accent)] pl-6 py-1"
            >
              <div className="flex items-center gap-3 mb-2 text-[var(--color-brand-charcoal)]">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-[var(--color-brand-accent)]"
                >
                  <Sun className="w-5 h-5" />
                </motion.div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Today · 23° · Clear Skies</span>
              </div>
              <p className="text-sm text-[var(--color-brand-charcoal-light)] font-serif italic text-balance">
                20% chance of rain. Good conditions for outdoor exploration in the morning.
              </p>
            </motion.div>

            {/* Itinerary Timeline */}
            <motion.div 
              variants={revealContainer}
              initial="hidden"
              animate="show"
              className="relative border-l border-[var(--color-brand-border)] ml-3 space-y-16 pb-16"
            >
              
              {/* Item 1 */}
              <motion.div variants={revealItem} className="relative pl-10 group">
                {/* Active Pulsing Dot */}
                <div className="absolute left-[-6px] top-1">
                  <div className="w-[11px] h-[11px] bg-[var(--color-brand-accent)] border-2 border-[var(--color-brand-background)] rounded-full relative z-10"></div>
                  <div className="absolute inset-0 bg-[var(--color-brand-accent)] rounded-full animate-marker-ping"></div>
                </div>
                
                <div className="mb-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-accent)]">09:00</span>
                </div>
                <h3 className="text-2xl font-serif mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors">Hotel Check-in</h3>
                <p className="text-[var(--color-brand-charcoal-light)] text-[11px] font-bold tracking-[0.1em] uppercase mb-4">Manali Town</p>
                <div className="aspect-[16/7] overflow-hidden rounded-xl">
                  <FramedImage src="https://images.unsplash.com/photo-1542314831-c6a4d1429df4?q=80&w=2940&auto=format&fit=crop" alt="Hotel" className="w-full h-full" kenBurnsScale={1.1} />
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div variants={revealItem} className="relative pl-10 group cursor-pointer">
                <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] bg-[var(--color-brand-background)] border-2 border-[var(--color-brand-border-light)] rounded-full group-hover:border-[var(--color-brand-charcoal)] transition-all"></div>
                <div className="mb-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">10:30</span>
                </div>
                <h3 className="text-2xl font-serif mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors">Hadimba Temple</h3>
                <p className="text-[var(--color-brand-charcoal-light)] text-sm font-medium mb-3">Ancient wooden architecture surrounded by cedar forests.</p>
                <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-brand-charcoal-lighter)]">
                  <span>1 HR 15 MIN</span>
                  <span className="w-1 h-1 bg-[var(--color-brand-border)] rounded-full"></span>
                  <span>₹30 ENTRY</span>
                </div>
              </motion.div>

              {/* Weather Interruption Context */}
              <motion.div variants={revealItem} className="relative pl-10 my-4">
                <div className="absolute left-[-12px] top-1 bg-[var(--color-brand-background)] py-2">
                  <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <CloudRain className="w-5 h-5 text-[var(--color-brand-charcoal-lighter)]" />
                  </motion.div>
                </div>
                <Card variant="glass" className="p-4 hover:border-[var(--color-brand-charcoal-light)] transition-colors">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] block mb-1">Friday Forecast Update</span>
                  <p className="text-sm font-serif italic text-[var(--color-brand-charcoal)]">Rain likely after 15:00. Consider moving outdoor activities earlier.</p>
                </Card>
              </motion.div>

              {/* Item 3 */}
              <motion.div variants={revealItem} className="relative pl-10 group cursor-pointer">
                <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] bg-[var(--color-brand-background)] border-2 border-[var(--color-brand-border-light)] rounded-full group-hover:border-[var(--color-brand-charcoal)] transition-all"></div>
                <div className="mb-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">13:00</span>
                </div>
                <h3 className="text-2xl font-serif mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors">Lunch at Johnson's</h3>
                <p className="text-[var(--color-brand-charcoal-light)] text-[11px] font-bold tracking-[0.1em] uppercase mb-4">Old Manali</p>
                <div className="aspect-[16/7] overflow-hidden rounded-xl">
                  <FramedImage src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop" alt="Cafe" className="w-full h-full" />
                </div>
              </motion.div>

              {/* Item 4 */}
              <motion.div variants={revealItem} className="relative pl-10 group cursor-pointer">
                <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] bg-[var(--color-brand-background)] border-2 border-[var(--color-brand-border-light)] rounded-full group-hover:border-[var(--color-brand-charcoal)] transition-all"></div>
                <div className="mb-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">15:30</span>
                </div>
                <h3 className="text-2xl font-serif mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors">Vashisht Hot Springs</h3>
                <p className="text-[var(--color-brand-charcoal-light)] text-sm font-medium mb-3">Relax in natural hot sulfur springs.</p>
                <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-brand-charcoal-lighter)]">
                  <span>2 HRS</span>
                  <span className="w-1 h-1 bg-[var(--color-brand-border)] rounded-full"></span>
                  <span>FREE</span>
                </div>
              </motion.div>

            </motion.div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                STATS
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-16 pt-16 border-t border-[var(--color-brand-border)] relative"
            >
              <div className="grid grid-cols-3 gap-6">
                <StatCounter value={5} label="DAYS" />
                <StatCounter value={12} label="PLACES SAVED" />
                <StatCounter value={28} label="ITEMS PACKED" />
              </div>
            </motion.div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                TRIP DNA & BUDGET
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-24 pt-16 border-t border-[var(--color-brand-border)] relative"
            >
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-charcoal-light)] mb-10">Your Trip DNA</h2>
              <div className="space-y-6 max-w-sm">
                {[
                  { label: "NATURE", val: 82 },
                  { label: "SLOW TRAVEL", val: 64 },
                  { label: "FOOD", val: 58 },
                  { label: "CULTURE", val: 42 }
                ].map((dna, idx) => (
                  <div key={dna.label} className="group">
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

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="mt-20 pt-16 border-t border-[var(--color-brand-border)] pb-24 relative"
            >
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-charcoal-light)] mb-10">The Numbers</h2>
              <div className="mb-10">
                <StatCounter value={26400} label="Estimated Total" suffix="₹" className="group-hover:text-[var(--color-brand-accent)] transition-colors" />
              </div>
              <div className="space-y-5 max-w-sm">
                {[
                  { label: "STAY", val: "₹12,000" },
                  { label: "TRANSPORT", val: "₹5,400" },
                  { label: "FOOD", val: "₹4,500" },
                  { label: "EXPERIENCES", val: "₹2,500" },
                  { label: "MISC.", val: "₹2,000" }
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center text-[10px] font-bold tracking-[0.15em] uppercase border-b border-[var(--color-brand-border)]/50 pb-3 hover:border-[var(--color-brand-charcoal-light)] transition-colors group">
                    <span className="text-[var(--color-brand-charcoal-light)] group-hover:text-[var(--color-brand-charcoal)] transition-colors">{item.label}</span>
                    <span className="text-[var(--color-brand-charcoal)]">{item.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* RIGHT PANE: MAP PLACEHOLDER */}
        <div className="hidden lg:block w-1/2 h-full bg-[#080d0f] relative overflow-hidden border-l border-[var(--color-brand-border)]">
          <RouteMap 
            coordinates={[{ lat: 31.63, lng: 77.06 }, { lat: 32.23, lng: 77.18 }]} 
            className="absolute inset-0 opacity-40 mix-blend-screen scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--color-brand-background)] opacity-50"></div>
          
          <AmbientGlow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[var(--color-brand-accent-light)] opacity-10" duration={25} />
          
          {/* Map markers (Placeholder) */}
          <div className="absolute top-1/3 left-1/3 group">
            <div className="w-4 h-4 bg-[var(--color-brand-accent)] rounded-full shadow-[0_0_20px_var(--color-brand-accent)] border-[3px] border-[var(--color-brand-background)] relative z-10 cursor-pointer group-hover:scale-125 transition-transform"></div>
            <div className="absolute inset-[-4px] bg-[var(--color-brand-accent)] rounded-full animate-marker-ping"></div>
          </div>
          
          <div className="absolute top-[45%] left-[45%] group">
            <div className="w-3 h-3 bg-[var(--color-brand-charcoal)] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] border-2 border-[var(--color-brand-background)] cursor-pointer group-hover:scale-125 transition-transform group-hover:bg-[var(--color-brand-accent)]"></div>
          </div>
          
          <motion.div 
            whileHover={hoverLift}
            className="absolute bottom-8 right-8 bg-[var(--color-brand-surface)]/80 backdrop-blur-md border border-[var(--color-brand-border)] p-4 rounded-xl flex items-center gap-4 shadow-xl cursor-pointer hover:border-[var(--color-brand-charcoal-light)] transition-colors"
          >
            <Map className="w-5 h-5 text-[var(--color-brand-charcoal-light)]" />
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase">Interactive Map Loading</span>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
