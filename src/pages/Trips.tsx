import { useNavigate } from "react-router-dom"
import { ArrowRight, Plus } from "lucide-react"

export default function Trips() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[var(--color-brand-background)] text-[var(--color-brand-charcoal)] font-sans pt-32 pb-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-24">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)] block mb-6">ExploreEase</span>
            <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-balance">
              Your journeys.
            </h1>
          </div>
          <button 
            onClick={() => navigate('/plan')}
            className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] text-[10px] font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-brand-accent)] transition-colors"
          >
            <Plus className="w-3 h-3" /> New Journey
          </button>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            UPCOMING TRIPS (Editorial Postcards)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mb-24">
          <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4">Upcoming</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div 
              onClick={() => navigate('/trip/demo')}
              className="group cursor-pointer border border-[var(--color-brand-border)] bg-[var(--color-brand-surface)] p-2 rounded-2xl flex flex-col md:flex-row gap-6 hover:border-[var(--color-brand-charcoal-light)] transition-colors"
            >
              <div className="w-full md:w-2/5 aspect-[4/5] overflow-hidden rounded-xl bg-[#0a0f12]">
                <img src="https://images.unsplash.com/photo-1542314831-c6a4d1429df4?q=80&w=2940&auto=format&fit=crop" alt="Manali" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className="w-full md:w-3/5 py-6 pr-6 flex flex-col">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-accent)] block mb-2">12–16 September</span>
                    <h3 className="text-4xl font-serif">Manali</h3>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-brand-charcoal-light)] mb-8">
                  <div className="flex justify-between border-b border-[var(--color-brand-border)] pb-2">
                    <span>Duration</span>
                    <span className="text-[var(--color-brand-charcoal)]">5 Days</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--color-brand-border)] pb-2">
                    <span>Est. Budget</span>
                    <span className="text-[var(--color-brand-charcoal)]">₹26,400</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--color-brand-border)] pb-2">
                    <span>Status</span>
                    <span className="text-[var(--color-brand-accent)]">68% Planned</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-accent)] transition-colors">
                  Continue Journey <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            DRAFTS & PAST
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4">Drafts</h2>
            <div className="border border-[var(--color-brand-border)] border-dashed p-12 rounded-2xl text-center text-[var(--color-brand-charcoal-light)] flex flex-col items-center gap-4">
              <span className="font-serif text-xl italic">No drafts yet.</span>
              <button onClick={() => navigate('/plan')} className="text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-accent)] transition-colors border-b border-[var(--color-brand-charcoal)] pb-1">Start Planning</button>
            </div>
          </div>

          <div>
            <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4">Past Journeys</h2>
            <div className="space-y-6">
              {[
                { name: "Kerala", date: "Jan 2026", img: "https://images.unsplash.com/photo-1514222718160-c3d32cb07cb0?q=80&w=2940&auto=format&fit=crop" },
                { name: "Udaipur", date: "Nov 2025", img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2754&auto=format&fit=crop" }
              ].map(trip => (
                <div key={trip.name} className="flex items-center gap-6 group cursor-pointer border border-transparent hover:border-[var(--color-brand-border)] p-2 rounded-xl transition-colors">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-[var(--color-brand-surface)] shrink-0">
                    <img src={trip.img} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt={trip.name} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors">{trip.name}</h3>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">{trip.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
