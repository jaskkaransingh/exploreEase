import { Map, Share2, Download, ArrowLeft, CloudRain, Sun } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function TripDash() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[var(--color-brand-background)] text-[var(--color-brand-charcoal)] font-sans">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TOP NAV / CONTEXT
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header className="sticky top-0 z-40 bg-[var(--color-brand-background)]/90 backdrop-blur-md border-b border-[var(--color-brand-border)]">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/trips')} className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)]">
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
            <button className="p-2 text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] transition-colors">
              <Download className="w-4 h-4" />
            </button>
            <button className="px-5 py-2 bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-full text-[10px] font-bold tracking-[0.1em] uppercase hover:border-[var(--color-brand-charcoal-light)] transition-colors">
              Edit Trip
            </button>
          </div>
        </div>
      </header>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SPLIT LAYOUT
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="flex flex-col lg:flex-row max-w-[1600px] mx-auto h-[calc(100vh-80px)]">
        
        {/* LEFT PANE: ITINERARY TIMELINE */}
        <div className="w-full lg:w-1/2 h-full overflow-y-auto px-6 py-12 hide-scrollbar">
          
          <div className="max-w-xl mx-auto">
            {/* Day Selector */}
            <div className="flex items-center gap-6 mb-16 overflow-x-auto pb-4 hide-scrollbar">
              {['DAY 01', 'DAY 02', 'DAY 03', 'DAY 04', 'DAY 05'].map((day, i) => (
                <button key={day} className={`text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap transition-colors ${i === 0 ? 'text-[var(--color-brand-charcoal)] border-b border-[var(--color-brand-charcoal)] pb-1' : 'text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)]'}`}>
                  {day}
                </button>
              ))}
            </div>

            {/* Weather Integration (Contextual) */}
            <div className="mb-16 border-l-2 border-[var(--color-brand-border)] pl-6 py-1">
              <div className="flex items-center gap-3 mb-2 text-[var(--color-brand-charcoal)]">
                <Sun className="w-5 h-5" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Today · 23° · Clear Skies</span>
              </div>
              <p className="text-sm text-[var(--color-brand-charcoal-light)] font-serif italic">
                20% chance of rain. Good conditions for outdoor exploration in the morning.
              </p>
            </div>

            {/* Itinerary Timeline */}
            <div className="relative border-l border-[var(--color-brand-border)] ml-3 space-y-16 pb-16">
              
              {/* Item 1 */}
              <div className="relative pl-10 group">
                <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] bg-[var(--color-brand-background)] border-2 border-[var(--color-brand-charcoal-light)] rounded-full group-hover:border-[var(--color-brand-accent)] group-hover:bg-[var(--color-brand-accent)] transition-all"></div>
                <div className="mb-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-accent)]">09:00</span>
                </div>
                <h3 className="text-2xl font-serif mb-1">Hotel Check-in</h3>
                <p className="text-[var(--color-brand-charcoal-light)] text-[11px] font-bold tracking-[0.1em] uppercase mb-4">Manali Town</p>
                <div className="aspect-[16/7] overflow-hidden rounded-xl bg-[var(--color-brand-surface)]">
                  <img src="https://images.unsplash.com/photo-1542314831-c6a4d1429df4?q=80&w=2940&auto=format&fit=crop" alt="Hotel" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative pl-10 group">
                <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] bg-[var(--color-brand-background)] border-2 border-[var(--color-brand-charcoal-light)] rounded-full group-hover:border-[var(--color-brand-charcoal)] transition-all"></div>
                <div className="mb-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">10:30</span>
                </div>
                <h3 className="text-2xl font-serif mb-1">Hadimba Temple</h3>
                <p className="text-[var(--color-brand-charcoal-light)] text-sm font-medium mb-3">Ancient wooden architecture surrounded by cedar forests.</p>
                <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.1em] uppercase text-[var(--color-brand-charcoal-lighter)]">
                  <span>1 HR 15 MIN</span>
                  <span className="w-1 h-1 bg-[var(--color-brand-border)] rounded-full"></span>
                  <span>₹30 ENTRY</span>
                </div>
              </div>

              {/* Weather Interruption Context */}
              <div className="relative pl-10 my-4">
                <div className="absolute left-[-12px] top-1 bg-[var(--color-brand-background)] py-2">
                  <CloudRain className="w-5 h-5 text-[var(--color-brand-charcoal-lighter)]" />
                </div>
                <div className="bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-xl p-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] block mb-1">Friday Forecast Update</span>
                  <p className="text-sm font-serif italic text-[var(--color-brand-charcoal)]">Rain likely after 15:00. Consider moving outdoor activities earlier.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative pl-10 group">
                <div className="absolute left-[-5px] top-1 w-[9px] h-[9px] bg-[var(--color-brand-background)] border-2 border-[var(--color-brand-charcoal-light)] rounded-full group-hover:border-[var(--color-brand-charcoal)] transition-all"></div>
                <div className="mb-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)]">13:00</span>
                </div>
                <h3 className="text-2xl font-serif mb-1">Lunch</h3>
                <p className="text-[var(--color-brand-charcoal-light)] text-[11px] font-bold tracking-[0.1em] uppercase">Johnson's Cafe</p>
              </div>

            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                TRIP DNA & BUDGET
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div className="mt-24 pt-16 border-t border-[var(--color-brand-border)]">
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-charcoal-light)] mb-10">Your Trip DNA</h2>
              <div className="space-y-6 max-w-sm">
                {[
                  { label: "NATURE", val: "82%" },
                  { label: "SLOW TRAVEL", val: "64%" },
                  { label: "FOOD", val: "58%" },
                  { label: "CULTURE", val: "42%" }
                ].map(dna => (
                  <div key={dna.label} className="flex justify-between items-center text-[11px] font-bold tracking-[0.15em] uppercase">
                    <span className="text-[var(--color-brand-charcoal)]">{dna.label}</span>
                    <span className="text-[var(--color-brand-charcoal-light)]">{dna.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 pt-16 border-t border-[var(--color-brand-border)] pb-24">
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-charcoal-light)] mb-10">The Numbers</h2>
              <div className="mb-10">
                <span className="text-4xl font-serif block mb-1">₹26,400</span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-accent)]">Estimated Total</span>
              </div>
              <div className="space-y-5 max-w-sm">
                {[
                  { label: "STAY", val: "₹12,000" },
                  { label: "TRANSPORT", val: "₹5,400" },
                  { label: "FOOD", val: "₹4,500" },
                  { label: "EXPERIENCES", val: "₹2,500" },
                  { label: "MISC.", val: "₹2,000" }
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center text-[10px] font-bold tracking-[0.15em] uppercase border-b border-[var(--color-brand-border)]/50 pb-3">
                    <span className="text-[var(--color-brand-charcoal-light)]">{item.label}</span>
                    <span className="text-[var(--color-brand-charcoal)]">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT PANE: MAP PLACEHOLDER */}
        <div className="hidden lg:block w-1/2 h-full bg-[#080d0f] relative overflow-hidden">
          {/* Using a stylized dark map image from Unsplash to match the cinematic vibe until real Map API */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--color-brand-background)] opacity-50"></div>
          
          {/* Map markers (Placeholder) */}
          <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-[var(--color-brand-accent)] rounded-full shadow-[0_0_20px_var(--color-brand-accent)] border-[3px] border-[var(--color-brand-background)]"></div>
          <div className="absolute top-[45%] left-[45%] w-3 h-3 bg-[var(--color-brand-charcoal)] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] border-2 border-[var(--color-brand-background)]"></div>
          
          <div className="absolute bottom-8 right-8 bg-[var(--color-brand-surface)]/80 backdrop-blur-md border border-[var(--color-brand-border)] p-4 rounded-xl flex items-center gap-4 shadow-xl">
            <Map className="w-5 h-5 text-[var(--color-brand-charcoal-light)]" />
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase">Interactive Map Loading</span>
          </div>
        </div>

      </div>
    </div>
  )
}
