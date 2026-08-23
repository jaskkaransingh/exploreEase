import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, ArrowRight, Search, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Steps matching the prompt
const STEPS = [
  { id: "where", title: "Where are you going?", subtitle: "01 WHERE" },
  { id: "when", title: "When are you going?", subtitle: "02 WHEN" },
  { id: "who", title: "Who's coming?", subtitle: "03 WHO" },
  { id: "budget", title: "What's your range?", subtitle: "04 BUDGET" },
  { id: "vibe", title: "What do you want more of?", subtitle: "05 VIBE" }
]

export default function Plan() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  
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

  return (
    <div className="min-h-screen bg-[var(--color-brand-background)] text-[var(--color-brand-charcoal)] font-sans flex flex-col relative overflow-hidden selection:bg-[var(--color-brand-surface-light)]">
      
      {/* Background visual element to keep it cinematic but minimal */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-brand-surface-light),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--color-brand-surface-light),transparent_50%)]"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 w-full px-8 py-8 flex justify-between items-center">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)]">
          {STEPS[currentStep].subtitle}
        </div>
        <button 
          onClick={() => navigate('/')}
          className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] transition-colors"
        >
          Close
        </button>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full flex flex-col items-center text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-brand-charcoal)] mb-16 tracking-tight text-balance">
              {STEPS[currentStep].title}
            </h1>

            {/* STEP 1: WHERE */}
            {currentStep === 0 && (
              <div className="w-full max-w-2xl relative">
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
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} className="absolute top-full left-0 w-full mt-4 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-2xl overflow-hidden text-left shadow-2xl">
                    <button onClick={() => { setDestination("Manali, Himachal Pradesh"); handleNext(); }} className="w-full px-6 py-4 hover:bg-[var(--color-brand-surface-light)] transition-colors flex items-center gap-4 text-lg border-b border-[var(--color-brand-border)]">
                      <MapPin className="text-[var(--color-brand-charcoal-light)] w-5 h-5" /> Manali, Himachal Pradesh
                    </button>
                    <button onClick={() => { setDestination("Munnar, Kerala"); handleNext(); }} className="w-full px-6 py-4 hover:bg-[var(--color-brand-surface-light)] transition-colors flex items-center gap-4 text-lg">
                      <MapPin className="text-[var(--color-brand-charcoal-light)] w-5 h-5" /> Munnar, Kerala
                    </button>
                  </motion.div>
                )}
              </div>
            )}

            {/* STEP 2: WHEN */}
            {currentStep === 1 && (
              <div className="w-full max-w-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-[var(--color-brand-border)] rounded-2xl p-6 bg-[var(--color-brand-surface)] cursor-pointer hover:border-[var(--color-brand-charcoal-light)] transition-colors">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] block mb-2">Start Date</span>
                    <span className="text-xl font-serif">12 September</span>
                  </div>
                  <div className="border border-[var(--color-brand-border)] rounded-2xl p-6 bg-[var(--color-brand-surface)] cursor-pointer hover:border-[var(--color-brand-charcoal-light)] transition-colors">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] block mb-2">End Date</span>
                    <span className="text-xl font-serif">16 September</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: WHO */}
            {currentStep === 2 && (
              <div className="w-full max-w-2xl grid grid-cols-2 gap-4">
                {["SOLO", "COUPLE", "FRIENDS", "FAMILY"].map((option) => (
                  <button 
                    key={option}
                    onClick={() => { setWho(option); setTimeout(handleNext, 300); }}
                    className={`py-8 rounded-2xl text-[13px] font-bold tracking-[0.2em] uppercase transition-all border ${
                      who === option 
                        ? 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] border-[var(--color-brand-charcoal)]' 
                        : 'bg-[var(--color-brand-surface)] border-[var(--color-brand-border)] text-[var(--color-brand-charcoal)] hover:border-[var(--color-brand-charcoal-light)]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* STEP 4: BUDGET */}
            {currentStep === 3 && (
              <div className="w-full max-w-3xl flex flex-wrap justify-center gap-4">
                {["₹10K", "₹20K", "₹30K", "₹50K", "₹75K+"].map((option) => (
                  <button 
                    key={option}
                    onClick={() => { setBudget(option); setTimeout(handleNext, 300); }}
                    className={`px-8 py-5 rounded-full text-2xl font-serif transition-all border ${
                      budget === option 
                        ? 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] border-[var(--color-brand-charcoal)]' 
                        : 'bg-[var(--color-brand-surface)] border-[var(--color-brand-border)] text-[var(--color-brand-charcoal)] hover:border-[var(--color-brand-charcoal-light)]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* STEP 5: VIBE */}
            {currentStep === 4 && (
              <div className="w-full max-w-3xl flex flex-wrap justify-center gap-3">
                {["NATURE", "ADVENTURE", "FOOD", "CULTURE", "ART", "SHOPPING", "NIGHTLIFE", "SLOW TRAVEL"].map((vibe) => (
                  <button 
                    key={vibe}
                    onClick={() => toggleVibe(vibe)}
                    className={`px-6 py-4 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all border ${
                      vibes.includes(vibe)
                        ? 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] border-[var(--color-brand-charcoal)]' 
                        : 'bg-transparent border-[var(--color-brand-border)] text-[var(--color-brand-charcoal)] hover:border-[var(--color-brand-charcoal-light)]'
                    }`}
                  >
                    {vibe}
                  </button>
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
            <div 
              key={idx} 
              className={`h-[2px] transition-all duration-500 ${idx <= currentStep ? 'w-12 bg-[var(--color-brand-charcoal)]' : 'w-6 bg-[var(--color-brand-border)]'}`}
            ></div>
          ))}
        </div>

        <button 
          onClick={handleNext}
          className={`px-10 py-5 rounded-full text-[12px] font-bold tracking-[0.15em] uppercase flex items-center gap-3 transition-all ${
            currentStep === STEPS.length - 1 
              ? 'bg-[var(--color-brand-accent)] text-[var(--color-brand-background)] hover:bg-[var(--color-brand-accent-light)] shadow-lg' 
              : 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] hover:bg-[var(--color-brand-charcoal-light)]'
          }`}
        >
          {currentStep === STEPS.length - 1 ? "Build My Trip" : "Next"} 
          <ArrowRight className="w-4 h-4" />
        </button>
      </footer>

    </div>
  )
}
