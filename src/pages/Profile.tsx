import { Settings, Heart, Map, LogOut, Hexagon } from "lucide-react"

export default function Profile() {
  return (
    <div className="flex-1 bg-[var(--color-brand-cream)] pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-[var(--color-brand-cream-dark)] shrink-0">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)] mb-2">Elena Rodriguez</h1>
            <p className="text-lg text-[var(--color-brand-accent)] font-medium mb-6">The Mindful Explorer</p>
            <p className="text-[var(--color-brand-charcoal-light)] max-w-md mx-auto md:mx-0">
              Passionate about slow travel, local food trails, and finding quiet corners in bustling cities.
            </p>
          </div>
          <div className="flex flex-row md:flex-col gap-3">
            <button className="px-5 py-2 rounded-lg bg-white border border-[var(--color-brand-border)] text-sm font-semibold hover:border-[var(--color-brand-charcoal)] transition-colors flex items-center justify-center gap-2">
              <Settings className="w-4 h-4" /> Edit Profile
            </button>
            <button className="px-5 py-2 rounded-lg bg-white border border-[var(--color-brand-border)] text-sm font-semibold text-red-500 hover:border-red-500 transition-colors flex items-center justify-center gap-2">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column */}
          <div className="md:col-span-7 space-y-8">
            
            {/* Trip DNA */}
            <div className="bg-white p-8 rounded-3xl border border-[var(--color-brand-border)] shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <Hexagon className="w-6 h-6 text-[var(--color-brand-accent)]" />
                <h2 className="text-2xl font-serif">Your Travel DNA</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { label: "Culture & History", val: 85 },
                  { label: "Food & Culinary", val: 75 },
                  { label: "Nature & Scenery", val: 60 },
                  { label: "Relaxation", val: 40 },
                  { label: "Nightlife", val: 15 },
                ].map((dna, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center text-sm font-medium mb-2">
                      <span className="text-[var(--color-brand-charcoal)]">{dna.label}</span>
                      <span className="text-[var(--color-brand-charcoal-lighter)]">{dna.val}%</span>
                    </div>
                    <div className="w-full h-2 bg-[var(--color-brand-cream)] rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-brand-accent)] transition-all duration-1000" style={{ width: `${dna.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--color-brand-charcoal)] text-white p-6 rounded-3xl">
                <p className="text-sm font-medium text-[var(--color-brand-charcoal-lighter)] mb-2 uppercase tracking-widest">Countries</p>
                <p className="text-4xl font-serif">12</p>
              </div>
              <div className="bg-white border border-[var(--color-brand-border)] p-6 rounded-3xl shadow-sm">
                <p className="text-sm font-medium text-[var(--color-brand-charcoal-lighter)] mb-2 uppercase tracking-widest">Trips</p>
                <p className="text-4xl font-serif text-[var(--color-brand-charcoal)]">24</p>
              </div>
            </div>
            
          </div>
          
          {/* Right Column */}
          <div className="md:col-span-5 space-y-8">
            
            {/* Quick Links */}
            <div className="bg-white p-6 rounded-3xl border border-[var(--color-brand-border)] shadow-sm space-y-2">
              <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-[var(--color-brand-cream)] transition-colors group">
                <div className="flex items-center gap-3 font-medium text-[var(--color-brand-charcoal)]">
                  <Heart className="w-5 h-5 text-[var(--color-brand-charcoal-light)] group-hover:text-[var(--color-brand-accent)]" />
                  Saved Places
                </div>
                <span className="bg-[var(--color-brand-border)] text-xs font-bold px-2 py-1 rounded-md text-[var(--color-brand-charcoal-light)]">14</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-[var(--color-brand-cream)] transition-colors group">
                <div className="flex items-center gap-3 font-medium text-[var(--color-brand-charcoal)]">
                  <Map className="w-5 h-5 text-[var(--color-brand-charcoal-light)] group-hover:text-[var(--color-brand-accent)]" />
                  Past Itineraries
                </div>
                <span className="bg-[var(--color-brand-border)] text-xs font-bold px-2 py-1 rounded-md text-[var(--color-brand-charcoal-light)]">8</span>
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-[var(--color-brand-cream)] transition-colors group">
                <div className="flex items-center gap-3 font-medium text-[var(--color-brand-charcoal)]">
                  <Settings className="w-5 h-5 text-[var(--color-brand-charcoal-light)] group-hover:text-[var(--color-brand-accent)]" />
                  Preferences
                </div>
              </button>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}
