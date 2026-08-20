import { useState } from "react"
import { SearchInput } from "../components/ui/SearchInput"
import { Chip } from "../components/ui/Chip"
import { Button } from "../components/ui/Button"

const FILTERS = ["All", "Nature", "Adventure", "Food", "Culture", "Beach", "Mountains", "Weekend"]

const DESTINATIONS = [
  {
    id: 1,
    name: "Manali",
    category: "Mountains",
    duration: "4–5 days",
    budget: "₹18k–₹30k",
    desc: "Mountain mornings, winding roads and slow evenings.",
    img: "https://images.unsplash.com/photo-1524492413363-8e36786a5120?q=80&w=2940&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Goa",
    category: "Beach",
    duration: "5–7 days",
    budget: "₹25k–₹45k",
    desc: "Beyond the beaches, discover Portuguese heritage.",
    img: "https://images.unsplash.com/photo-1514222718160-c3d32cb07cb0?q=80&w=2940&auto=format&fit=crop",
    featured: false
  },
  {
    id: 3,
    name: "Jaipur",
    category: "Culture",
    duration: "3–4 days",
    budget: "₹15k–₹25k",
    desc: "Royal palaces, vibrant bazaars, and rich history.",
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2754&auto=format&fit=crop",
    featured: false
  },
  {
    id: 4,
    name: "Munnar",
    category: "Nature",
    duration: "4–6 days",
    budget: "₹20k–₹35k",
    desc: "Endless tea gardens wrapped in mist.",
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2938&auto=format&fit=crop",
    featured: true
  }
]

export default function Explore() {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <div className="flex-1 bg-[var(--color-brand-cream)] pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header & Search */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-serif text-[var(--color-brand-charcoal)] mb-8 leading-tight">
            Explore the world,<br />your way.
          </h1>
          <SearchInput 
            placeholder="Search destinations, places or experiences" 
            className="h-14 text-lg rounded-2xl"
            containerClassName="mb-10"
          />
          
          <div className="flex flex-wrap gap-3">
            {FILTERS.map(f => (
              <Chip 
                key={f} 
                active={activeFilter === f} 
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </Chip>
            ))}
          </div>
        </div>

        {/* Section: Trending Now */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif mb-8">Trending now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.slice(0, 3).map(dest => (
              <div key={dest.id} className="group cursor-pointer flex flex-col h-full">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-charcoal)]">
                    {dest.category}
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif">{dest.name}</h3>
                    <div className="text-right text-sm font-medium">
                      <span className="text-[var(--color-brand-charcoal-lighter)]">{dest.duration}</span>
                    </div>
                  </div>
                  <p className="text-[var(--color-brand-charcoal-light)] mb-6 flex-1 text-balance">
                    {dest.desc}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-[var(--color-brand-border)]">
                    <span className="font-semibold flex items-center text-sm">
                      {dest.budget}
                    </span>
                    <Button variant="ghost" className="text-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)]/10 px-4">
                      Explore trip
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Featured Destination (Asymmetrical) */}
        <section className="mb-24">
          <div className="bg-white rounded-[2rem] overflow-hidden border border-[var(--color-brand-border)] shadow-sm flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <span className="text-[var(--color-brand-accent)] font-semibold uppercase tracking-widest text-sm mb-4">Nature Escapes</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">{DESTINATIONS[3].name}</h2>
              <p className="text-lg text-[var(--color-brand-charcoal-light)] mb-8 max-w-md">
                {DESTINATIONS[3].desc} A perfect retreat from the bustling city life.
              </p>
              <div className="flex items-center gap-6 mb-10">
                <div>
                  <p className="text-xs text-[var(--color-brand-charcoal-lighter)] uppercase tracking-wider mb-1">Duration</p>
                  <p className="font-semibold">{DESTINATIONS[3].duration}</p>
                </div>
                <div className="w-px h-8 bg-[var(--color-brand-border)]"></div>
                <div>
                  <p className="text-xs text-[var(--color-brand-charcoal-lighter)] uppercase tracking-wider mb-1">Est. Budget</p>
                  <p className="font-semibold">{DESTINATIONS[3].budget}</p>
                </div>
              </div>
              <div>
                <Button size="lg" className="rounded-xl shadow-sm">Explore Munnar</Button>
              </div>
            </div>
            <div className="md:w-1/2 min-h-[400px]">
              <img src={DESTINATIONS[3].img} alt={DESTINATIONS[3].name} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
        
      </div>
    </div>
  )
}
