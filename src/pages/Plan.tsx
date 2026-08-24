import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, ArrowRight, Search, MapPin, Plane, Compass, Luggage } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { AmbientGlow } from "../components/ui/AmbientGlow"
import { DynamicPageBackground } from "../components/ui/DynamicPageBackground"
import { FlightPath } from "../components/ui/FlightPath"
import { EASE, hoverLift } from "../lib/motion"

// Steps matching the prompt
const STEPS = [
  { id: "where", title: "Where are you going?", subtitle: "01 WHERE" },
  { id: "when", title: "When are you going?", subtitle: "02 WHEN" },
  { id: "who", title: "Who's coming?", subtitle: "03 WHO" },
  { id: "budget", title: "What's your range?", subtitle: "04 BUDGET" },
  { id: "vibe", title: "What do you want more of?", subtitle: "05 VIBE" }
]

const VIBES = [
  { label: "NATURE", emoji: "🌲" },
  { label: "ADVENTURE", emoji: "⛰️" },
  { label: "FOOD", emoji: "🍜" },
  { label: "CULTURE", emoji: "🕌" },
  { label: "ART", emoji: "🎨" },
  { label: "SHOPPING", emoji: "🛍️" },
  { label: "NIGHTLIFE", emoji: "🍸" },
  { label: "SLOW TRAVEL", emoji: "☕" }
]

const DESTINATIONS = [
  { name: "Manali, Himachal Pradesh", id: "manali" },
  { name: "Munnar, Kerala", id: "munnar" },
  { name: "Jaipur, Rajasthan", id: "jaipur" },
  { name: "Goa, Konkan Coast", id: "goa" }
]

export default function Plan() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const reduced = useReducedMotion()
  
  // State for selections
  const [destination, setDestination] = useState("")
  const [who, setWho] = useState("")
  const [budget, setBudget] = useState("")
  const [vibes, setVibes] = useState<string[]>([])

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      // Final CTA
      navigate('/trip/demo')
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    } else {
      navigate('/')
    }
  }

  const toggleVibe = (vibe: string) => {
    setVibes(prev => 
      prev.includes(vibe) ? prev.filter(v => v !== vibe) : [...prev, vibe]
    )
  }

  // Dynamic glow color based on step
  const glowColors = [
    "bg-[var(--color-brand-accent-dark)]",
    "bg-[#3a4a5c]", // cool blue for dates
    "bg-[#5c4a3a]", // warm orange for people
    "bg-[#3a5c4a]", // green for money
    "bg-[var(--color-brand-accent)]"
  ]

  return (
    <div className="min-h-screen bg-transparent text-[var(--color-brand-charcoal)] font-sans flex flex-col relative overflow-hidden selection:bg-[var(--color-brand-surface-light)]">
      <DynamicPageBackground />
      <AmbientGlow 
        className={`top-[30%] right-[10%] w-[40vw] h-[40vw] ${glowColors[currentStep]} opacity-40 transition-colors duration-1000`} 
        duration={30} 
      />

      {/* Floating Icons */}
      {!reduced && (
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-20">
          <div className="relative w-[500px] h-[500px] animate-orbit" style={{ '--orbit-radius': '350px', '--orbit-duration': '40s' } as any}>
            <Plane className="absolute top-0 left-0 w-8 h-8 text-[var(--color-brand-charcoal)] animate-float" />
          </div>
          <div className="relative w-[500px] h-[500px] animate-orbit" style={{ '--orbit-radius': '-400px', '--orbit-duration': '50s' } as any}>
            <Compass className="absolute top-0 left-0 w-10 h-10 text-[var(--color-brand-accent)] animate-float" />
          </div>
          <div className="relative w-[500px] h-[500px] animate-orbit" style={{ '--orbit-radius': '250px', '--orbit-duration': '60s' } as any}>
            <Luggage className="absolute top-0 left-0 w-6 h-6 text-[var(--color-brand-charcoal-light)] animate-float" />
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 w-full px-8 py-8 flex justify-between items-center">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <motion.div 
          key={STEPS[currentStep].subtitle}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)]"
        >
          {STEPS[currentStep].subtitle}
        </motion.div>
        <button 
          onClick={() => navigate('/')}
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] transition-colors"
        >
          Close
        </button>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 1.05 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="w-full flex flex-col items-center text-center preserve-3d"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-brand-charcoal)] mb-16 tracking-tight text-balance">
              {STEPS[currentStep].title}
            </h1>

            {/* STEP 1: WHERE */}
            {currentStep === 0 && (
              <div className="w-full max-w-2xl relative">
                <FlightPath startX={-20} startY={80} endX={120} endY={20} curvature={0.3} className="opacity-15 -z-10 absolute -inset-x-20 -inset-y-10" />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--color-brand-charcoal-light)] w-6 h-6" />
                <input 
                  type="text" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Search a place..." 
                  className="w-full bg-transparent border-b border-[var(--color-brand-charcoal-light)]/30 text-[var(--color-brand-charcoal)] text-3xl font-serif pb-6 pl-16 focus:outline-none focus:border-[var(--color-brand-accent)] transition-colors placeholder:text-[var(--color-brand-charcoal-light)]/50"
                  autoFocus
                />
                {destination && (
                  <motion.div 
                    initial={{opacity: 0, y: 10}} 
                    animate={{opacity: 1, y: 0}} 
                    className="absolute top-full left-0 w-full mt-4 bg-[var(--color-brand-surface)]/90 backdrop-blur-md border border-[var(--color-brand-border)] rounded-2xl overflow-hidden text-left shadow-2xl"
                  >
                    {DESTINATIONS.filter(d => d.name.toLowerCase().includes(destination.toLowerCase())).map((dest) => (
                      <button 
                        key={dest.id}
                        onClick={() => { setDestination(dest.name); handleNext(); }} 
                        className="w-full px-6 py-4 hover:bg-[var(--color-brand-surface-light)] transition-colors flex items-center gap-4 text-lg border-b border-[var(--color-brand-border)] last:border-0 group"
                      >
                        <MapPin className="text-[var(--color-brand-charcoal-light)] w-5 h-5 group-hover:text-[var(--color-brand-accent)] transition-colors" /> 
                        {dest.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            )}

            {/* STEP 2: WHEN */}
            {currentStep === 1 && (
              <div className="w-full max-w-xl">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                    className="border border-[var(--color-brand-border)] rounded-2xl p-6 bg-[var(--color-brand-surface)]/80 backdrop-blur-md cursor-pointer hover:border-[var(--color-brand-charcoal-light)] transition-colors"
                  >
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] block mb-2">Start Date</span>
                    <span className="text-xl font-serif">12 September</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02, rotateY: -5, rotateX: 5 }}
                    className="border border-[var(--color-brand-border)] rounded-2xl p-6 bg-[var(--color-brand-surface)]/80 backdrop-blur-md cursor-pointer hover:border-[var(--color-brand-charcoal-light)] transition-colors"
                  >
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] block mb-2">End Date</span>
                    <span className="text-xl font-serif">16 September</span>
                  </motion.div>
                </div>
              </div>
            )}

            {/* STEP 3: WHO */}
            {currentStep === 2 && (
              <div className="w-full max-w-2xl grid grid-cols-2 gap-4 perspective-800">
                {["SOLO", "COUPLE", "FRIENDS", "FAMILY"].map((option, idx) => {
                  const rotateYDir = idx % 2 === 0 ? 10 : -10;
                  return (
                    <motion.button 
                      key={option}
                      whileHover={{ scale: 1.03, rotateY: rotateYDir, rotateX: 5 }}
                      onClick={() => { setWho(option); setTimeout(handleNext, 300); }}
                      className={`py-8 rounded-2xl text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border preserve-3d shadow-sm ${
                        who === option 
                          ? 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] border-[var(--color-brand-charcoal)]' 
                          : 'bg-[var(--color-brand-surface)]/80 backdrop-blur-md border-[var(--color-brand-border)] text-[var(--color-brand-charcoal)] hover:border-[var(--color-brand-charcoal-light)] hover:shadow-lg'
                      }`}
                    >
                      {option}
                    </motion.button>
                  )
                })}
              </div>
            )}

            {/* STEP 4: BUDGET */}
            {currentStep === 3 && (
              <div className="w-full max-w-3xl flex flex-wrap justify-center gap-4 perspective-800">
                {["₹10K", "₹20K", "₹30K", "₹50K", "₹75K+"].map((option, idx) => {
                  const rotateDir = idx % 2 === 0 ? 5 : -5;
                  return (
                    <motion.button 
                      key={option}
                      whileHover={{ scale: 1.05, rotateY: rotateDir }}
                      onClick={() => { setBudget(option); setTimeout(handleNext, 300); }}
                      className={`px-8 py-5 rounded-full text-2xl font-serif transition-all duration-300 border shadow-sm ${
                        budget === option 
                          ? 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] border-[var(--color-brand-charcoal)] shadow-[0_0_20px_rgba(243,244,241,0.2)]' 
                          : 'bg-[var(--color-brand-surface)]/80 backdrop-blur-md border-[var(--color-brand-border)] text-[var(--color-brand-charcoal)] hover:border-[var(--color-brand-charcoal-light)]'
                      }`}
                    >
                      {option}
                    </motion.button>
                  )
                })}
              </div>
            )}

            {/* STEP 5: VIBE */}
            {currentStep === 4 && (
              <div className="w-full max-w-3xl flex flex-wrap justify-center gap-3">
                {VIBES.map(({ label, emoji }) => (
                  <motion.button 
                    key={label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleVibe(label)}
                    className={`px-6 py-4 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 border flex items-center gap-2 ${
                      vibes.includes(label)
                        ? 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] border-[var(--color-brand-charcoal)] shadow-[0_0_15px_rgba(243,244,241,0.15)]' 
                        : 'bg-[var(--color-brand-surface)]/60 backdrop-blur-md border-[var(--color-brand-border)] text-[var(--color-brand-charcoal)] hover:border-[var(--color-brand-charcoal-light)]'
                    }`}
                  >
                    <span className="text-sm">{emoji}</span>
                    {label}
                  </motion.button>
                ))}
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Controls */}
      <footer className="relative z-10 w-full p-8 flex justify-between items-center mt-auto">
        
        {/* Progress indicators */}
        <div className="flex gap-2">
          {STEPS.map((_, idx) => (
            <motion.div 
              key={idx} 
              initial={false}
              animate={{ 
                width: idx <= currentStep ? 48 : 24,
                backgroundColor: idx <= currentStep ? 'var(--color-brand-charcoal)' : 'var(--color-brand-border)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="h-[2px] rounded-full"
            />
          ))}
        </div>

        <motion.button 
          whileHover={hoverLift}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          className={`px-10 py-5 rounded-full text-[12px] font-bold tracking-[0.15em] uppercase flex items-center gap-3 transition-all duration-500 ${
            currentStep === STEPS.length - 1 
              ? 'bg-[var(--color-brand-accent)] text-[var(--color-brand-background)] hover:bg-[var(--color-brand-accent-light)] shadow-[0_0_30px_rgba(94,139,112,0.3)] animate-pulse-glow' 
              : 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] hover:bg-[var(--color-brand-charcoal-light)]'
          }`}
        >
          {currentStep === STEPS.length - 1 ? "Build My Trip" : "Next"} 
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </footer>

    </div>
  )
}
