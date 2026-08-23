import { Settings, LogOut, Heart, ChevronRight } from "lucide-react"

export default function Profile() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-background)] text-[var(--color-brand-charcoal)] font-sans pt-32 pb-40">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        
        {/* Header & Identity */}
        <div className="mb-24 flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-[var(--color-brand-surface)] border-2 border-[var(--color-brand-border)] shrink-0">
            {/* Minimal profile placeholder */}
            <div className="w-full h-full flex items-center justify-center text-4xl font-serif text-[var(--color-brand-charcoal-light)] bg-gradient-to-br from-[var(--color-brand-surface-light)] to-[var(--color-brand-surface)]">
              J
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-serif tracking-tight mb-3">Your travel story.</h1>
            <p className="text-[var(--color-brand-charcoal-light)] text-lg mb-8">Jaskaran Singh</p>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <button className="px-6 py-2.5 rounded-full border border-[var(--color-brand-border)] text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--color-brand-surface)] transition-colors flex items-center gap-2">
                <Settings className="w-3 h-3" /> Settings
              </button>
              <button className="px-6 py-2.5 rounded-full border border-[var(--color-brand-border)] text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--color-brand-surface)] text-[var(--color-brand-accent)] transition-colors flex items-center gap-2">
                <LogOut className="w-3 h-3" /> Log Out
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              LEFT: TRAVEL DNA
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="md:col-span-5">
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
              ].map(dna => (
                <div key={dna.label} className="group">
                  <div className="flex justify-between items-center text-[11px] font-bold tracking-[0.15em] uppercase mb-2">
                    <span className="text-[var(--color-brand-charcoal)]">{dna.label}</span>
                    <span className="text-[var(--color-brand-charcoal-light)]">{dna.val}%</span>
                  </div>
                  <div className="h-1 bg-[var(--color-brand-surface)] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[var(--color-brand-charcoal-light)] group-hover:bg-[var(--color-brand-accent)] transition-colors"
                      style={{ width: `${dna.val}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              RIGHT: ACTIVITY
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <div className="md:col-span-7 flex flex-col gap-12">
            
            {/* Saved Places */}
            <div>
              <div className="flex justify-between items-center mb-6 border-b border-[var(--color-brand-border)] pb-4">
                <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">Saved Places</h2>
                <button className="text-[10px] font-bold tracking-[0.1em] uppercase hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-1">
                  View All <ChevronRight className="w-3 h-3" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Johnson's Cafe", type: "EAT", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop" },
                  { name: "The Himalayan", type: "STAY", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop" }
                ].map(place => (
                  <div key={place.name} className="group cursor-pointer">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-brand-surface)] mb-3 relative">
                      <div className="absolute top-2 right-2 p-1.5 bg-[var(--color-brand-background)]/50 backdrop-blur-sm rounded-full z-10 text-[var(--color-brand-accent)]">
                        <Heart className="w-3 h-3 fill-current" />
                      </div>
                      <img src={place.img} alt={place.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                    </div>
                    <h3 className="text-lg font-serif mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors">{place.name}</h3>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">{place.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-4 mt-8 border-t border-[var(--color-brand-border)] pt-8">
              {['Preferences', 'Payment Methods', 'Notifications', 'Privacy & Security'].map(link => (
                <button key={link} className="flex justify-between items-center py-4 border-b border-[var(--color-brand-border)]/50 hover:border-[var(--color-brand-charcoal-light)] transition-colors group">
                  <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-accent)] transition-colors">{link}</span>
                  <ChevronRight className="w-4 h-4 text-[var(--color-brand-charcoal-light)] group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
