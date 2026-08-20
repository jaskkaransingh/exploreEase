import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Slider } from "../components/ui/Slider"
import { Calendar, Users, Heart, ChevronRight, ChevronLeft, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const STEPS = [
  { id: 1, title: "Where" },
  { id: 2, title: "When" },
  { id: 3, title: "Who" },
  { id: 4, title: "Budget" },
  { id: 5, title: "Interests" }
]

const INTERESTS = [
  { id: "nature", label: "Nature", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop" },
  { id: "adventure", label: "Adventure", img: "https://images.unsplash.com/photo-1533587851505-d119e13bf0eb?q=80&w=1000&auto=format&fit=crop" },
  { id: "food", label: "Food", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" },
  { id: "culture", label: "Culture", img: "https://images.unsplash.com/photo-1601058097950-86711c2016fc?q=80&w=1000&auto=format&fit=crop" },
  { id: "art", label: "Art", img: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1000&auto=format&fit=crop" },
  { id: "shopping", label: "Shopping", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" },
  { id: "nightlife", label: "Nightlife", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop" },
  { id: "relaxation", label: "Relaxation", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" }
]

export default function Plan() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [budget, setBudget] = useState(25000)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [travelType, setTravelType] = useState<string | null>(null)

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
    else navigate('/trip/demo-manali') 
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(i => i !== id))
    } else {
      setSelectedInterests([...selectedInterests, id])
    }
  }

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -20 }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-brand-cream)] pt-20">
      
      {/* Wizard Header / Progress */}
      <div className="w-full bg-white border-b border-[var(--color-brand-border)] sticky top-16 z-40 py-4 px-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {STEPS.map((s, idx) => (
            <div key={s.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1 w-full relative">
                <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors
                  ${step >= s.id ? 'text-[var(--color-brand-accent)]' : 'text-[var(--color-brand-charcoal-lighter)]'}`}>
                  0{s.id} {s.title}
                </span>
                <div className={`h-1 w-full mt-2 rounded-full transition-all duration-500
                  ${step >= s.id ? 'bg-[var(--color-brand-accent)]' : 'bg-[var(--color-brand-border-light)]'}`}>
                </div>
              </div>
              {idx < STEPS.length - 1 && <div className="w-4"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 py-16 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center min-h-[50vh]"
          >
            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-8 text-center max-w-2xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)]">Where are you going?</h2>
                <div className="relative mt-8 group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-[var(--color-brand-charcoal-lighter)] group-focus-within:text-[var(--color-brand-accent)] transition-colors" />
                  <Input placeholder="Search destination (e.g. Manali, India)" className="pl-16 h-20 text-xl md:text-2xl rounded-2xl border-[var(--color-brand-border)] bg-white shadow-sm focus-visible:ring-[var(--color-brand-accent)]" autoFocus />
                </div>
                <div className="pt-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-charcoal-lighter)] mb-4">Popular right now</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['Goa', 'Udaipur', 'Shimla', 'Kasol'].map(dest => (
                      <span key={dest} className="px-5 py-2 rounded-full bg-white border border-[var(--color-brand-border)] text-[var(--color-brand-charcoal-light)] hover:border-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent)] cursor-pointer transition-colors text-sm font-medium">
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-8 text-center max-w-2xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)]">When are you travelling?</h2>
                <div className="flex flex-col md:flex-row gap-4 mt-8">
                  <div className="relative flex-1 group">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-brand-charcoal-lighter)] group-focus-within:text-[var(--color-brand-accent)] transition-colors" />
                    <Input type="date" className="pl-14 h-16 text-lg rounded-2xl border-[var(--color-brand-border)] bg-white shadow-sm" />
                    <span className="absolute top-2 left-14 text-[10px] uppercase font-bold text-[var(--color-brand-charcoal-lighter)]">Start Date</span>
                  </div>
                  <div className="relative flex-1 group">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-brand-charcoal-lighter)] group-focus-within:text-[var(--color-brand-accent)] transition-colors" />
                    <Input type="date" className="pl-14 h-16 text-lg rounded-2xl border-[var(--color-brand-border)] bg-white shadow-sm" />
                    <span className="absolute top-2 left-14 text-[10px] uppercase font-bold text-[var(--color-brand-charcoal-lighter)]">End Date</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-8 text-center max-w-3xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)]">Who is coming?</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { id: 'solo', label: 'Solo', icon: <UserIcon /> },
                    { id: 'couple', label: 'Couple', icon: <UsersIcon /> },
                    { id: 'friends', label: 'Friends', icon: <UsersIcon multi /> },
                    { id: 'family', label: 'Family', icon: <FamilyIcon /> }
                  ].map(type => (
                    <button 
                      key={type.id} 
                      onClick={() => setTravelType(type.id)}
                      className={`h-40 flex flex-col items-center justify-center gap-4 rounded-2xl border-2 transition-all
                        ${travelType === type.id 
                          ? 'border-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/5 text-[var(--color-brand-accent)] shadow-md' 
                          : 'border-[var(--color-brand-border)] bg-white text-[var(--color-brand-charcoal-light)] hover:border-[var(--color-brand-accent-light)]'}`
                      }
                    >
                      <div className={travelType === type.id ? 'text-[var(--color-brand-accent)]' : 'text-[var(--color-brand-charcoal-lighter)]'}>
                        {type.icon}
                      </div>
                      <span className="font-semibold text-lg">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="space-y-12 text-center max-w-2xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)]">What's your budget?</h2>
                <p className="text-[var(--color-brand-charcoal-light)]">Per person, excluding flights.</p>
                
                <div className="bg-white p-10 rounded-3xl border border-[var(--color-brand-border)] shadow-sm mt-8">
                  <div className="text-5xl font-serif text-[var(--color-brand-accent)] mb-10">
                    ₹{budget.toLocaleString('en-IN')}
                  </div>
                  
                  <Slider 
                    min={5000} 
                    max={150000} 
                    step={1000} 
                    value={budget} 
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="mb-8"
                  />
                  
                  <div className="flex justify-between text-sm font-semibold text-[var(--color-brand-charcoal-lighter)]">
                    <span>Budget (₹5k)</span>
                    <span>Luxury (₹1.5L+)</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <div className="space-y-8 text-center max-w-4xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)]">What kind of trip do you want?</h2>
                <p className="text-[var(--color-brand-charcoal-light)]">Select up to 3 interests to personalize your itinerary.</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {INTERESTS.map(interest => {
                    const isSelected = selectedInterests.includes(interest.id);
                    return (
                      <button 
                        key={interest.id} 
                        onClick={() => toggleInterest(interest.id)}
                        className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all group
                          ${isSelected ? 'border-[var(--color-brand-accent)] scale-95 shadow-inner' : 'border-transparent hover:scale-[0.98]'}`
                        }
                      >
                        <img src={interest.img} alt={interest.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className={`absolute inset-0 transition-colors ${isSelected ? 'bg-black/40' : 'bg-black/20 group-hover:bg-black/40'}`}></div>
                        
                        {isSelected && (
                          <div className="absolute top-3 right-3 bg-[var(--color-brand-accent)] text-white p-1.5 rounded-full shadow-lg">
                            <Heart className="w-4 h-4 fill-current" />
                          </div>
                        )}
                        
                        <h3 className="absolute bottom-4 left-4 right-4 text-left text-xl font-serif text-white">{interest.label}</h3>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer / Navigation */}
      <div className="w-full bg-white border-t border-[var(--color-brand-border)] sticky bottom-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={handlePrev} disabled={step === 1} className="gap-2 text-[var(--color-brand-charcoal-light)]">
            <ChevronLeft className="w-4 h-4" /> Back
          </Button>

          {/* Subtle Summary */}
          {step > 1 && (
            <div className="hidden md:flex items-center gap-4 text-xs font-semibold text-[var(--color-brand-charcoal-lighter)]">
              {step > 1 && <span className="text-[var(--color-brand-charcoal)]">Manali</span>}
              {step > 2 && <><span className="w-1 h-1 rounded-full bg-[var(--color-brand-border)]"></span><span className="text-[var(--color-brand-charcoal)]">12–16 Sept</span></>}
              {step > 3 && <><span className="w-1 h-1 rounded-full bg-[var(--color-brand-border)]"></span><span className="text-[var(--color-brand-charcoal)]">2 travelers</span></>}
              {step > 4 && <><span className="w-1 h-1 rounded-full bg-[var(--color-brand-border)]"></span><span className="text-[var(--color-brand-charcoal)]">₹25k p.p.</span></>}
            </div>
          )}

          <Button onClick={handleNext} size="lg" className="gap-2 px-8 shadow-sm">
            {step === 5 ? 'Build my trip' : 'Continue'} {step < 5 && <ChevronRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}

// Simple Icon placeholders for Step 3
function UserIcon() { return <Users className="w-10 h-10" /> }
function UsersIcon({multi}: {multi?: boolean}) { return <div className="flex -space-x-4"><UserIcon/><UserIcon/>{multi && <UserIcon/>}</div> }
function FamilyIcon() { return <div className="flex flex-col items-center"><div className="flex -space-x-2"><UserIcon/><UserIcon/></div><div className="flex -space-x-2 scale-75 -mt-2"><UserIcon/><UserIcon/></div></div> }
