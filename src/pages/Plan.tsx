import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { MapPin, Calendar, Users, IndianRupee, Heart, ChevronRight, ChevronLeft } from "lucide-react"

const STEPS = [
  { id: 1, title: "Destination" },
  { id: 2, title: "Dates" },
  { id: 3, title: "Travelers" },
  { id: 4, title: "Budget" },
  { id: 5, title: "Interests" }
]

const INTERESTS = ["Nature", "Adventure", "Food", "Culture", "Art", "Shopping", "Nightlife", "Relaxation"]

export default function Plan() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
    else navigate('/trip/trip_001') // mock navigation for now
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest))
    } else {
      setSelectedInterests([...selectedInterests, interest])
    }
  }

  return (
    <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-4 py-12 md:py-24">
      {/* Progress */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          {STEPS.map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-2 w-full">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors
                ${step > s.id ? 'bg-[#222222] text-white' : step === s.id ? 'bg-[#c08552] text-white' : 'bg-[#e2e2e2] text-[#888888]'}
              `}>
                {s.id}
              </div>
              <span className={`text-xs font-medium hidden md:block ${step === s.id ? 'text-[#222222]' : 'text-[#888888]'}`}>{s.title}</span>
            </div>
          ))}
        </div>
        <div className="h-1 w-full bg-[#e2e2e2] rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#c08552] transition-all duration-300"
            style={{ width: `${((step - 1) / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center min-h-[40vh]">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {step === 1 && (
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-5xl font-serif text-[#222222]">Where are you going?</h2>
              <p className="text-[#555555]">Search for a city, region, or country.</p>
              <div className="relative max-w-md mx-auto mt-8">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#888888]" />
                <Input placeholder="e.g. Manali, India" className="pl-14 h-16 text-lg rounded-xl border-[#e2e2e2] bg-white shadow-sm" autoFocus />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-5xl font-serif text-[#222222]">When are you travelling?</h2>
              <p className="text-[#555555]">Select your dates or approximate month.</p>
              <div className="relative max-w-md mx-auto mt-8 flex gap-4">
                <div className="relative flex-1">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#888888]" />
                  <Input type="date" className="pl-14 h-16 text-lg rounded-xl border-[#e2e2e2] bg-white shadow-sm" />
                </div>
                <div className="relative flex-1">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-[#888888]" />
                  <Input type="date" className="pl-14 h-16 text-lg rounded-xl border-[#e2e2e2] bg-white shadow-sm" />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-5xl font-serif text-[#222222]">Who are you travelling with?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {['Solo', 'Couple', 'Family', 'Friends'].map(type => (
                  <button key={type} className="h-32 flex flex-col items-center justify-center gap-3 rounded-xl border border-[#e2e2e2] bg-white hover:border-[#c08552] transition-all">
                    <Users className="h-8 w-8 text-[#888888]" />
                    <span className="font-medium text-[#222222]">{type}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-5xl font-serif text-[#222222]">What's your budget?</h2>
              <p className="text-[#555555]">Per person, excluding flights.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {[
                  { label: 'Budget', range: 'Under ₹20k' },
                  { label: 'Moderate', range: '₹20k - ₹50k' },
                  { label: 'Luxury', range: '₹50k+' }
                ].map(b => (
                  <button key={b.label} className="p-6 flex flex-col items-center justify-center gap-2 rounded-xl border border-[#e2e2e2] bg-white hover:border-[#c08552] transition-all">
                    <IndianRupee className="h-6 w-6 text-[#888888]" />
                    <span className="font-semibold text-lg text-[#222222]">{b.label}</span>
                    <span className="text-sm text-[#555555]">{b.range}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6 text-center">
              <h2 className="text-3xl md:text-5xl font-serif text-[#222222]">What do you enjoy?</h2>
              <p className="text-[#555555]">Select at least 3 interests to personalize your itinerary.</p>
              <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-2xl mx-auto">
                {INTERESTS.map(interest => (
                  <button 
                    key={interest} 
                    onClick={() => toggleInterest(interest)}
                    className={`px-6 py-3 rounded-full border transition-all text-sm font-medium flex items-center gap-2
                      ${selectedInterests.includes(interest) 
                        ? 'border-[#c08552] bg-[#c08552] text-white shadow-md' 
                        : 'border-[#e2e2e2] bg-white text-[#222222] hover:border-[#c08552]'}`
                    }
                  >
                    <Heart className={`w-4 h-4 ${selectedInterests.includes(interest) ? 'fill-current' : ''}`} />
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-12 flex items-center justify-between pt-8 border-t border-[#e2e2e2]">
        <Button variant="ghost" onClick={handlePrev} disabled={step === 1} className="gap-2">
          <ChevronLeft className="w-4 h-4" /> Back
        </Button>
        <Button onClick={handleNext} className="gap-2 px-8">
          {step === 5 ? 'Build my trip' : 'Next'} {step < 5 && <ChevronRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  )
}
