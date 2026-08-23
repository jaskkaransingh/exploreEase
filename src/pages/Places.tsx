import { useState } from "react"
import { Search, MapPin, Star, Heart, Plus } from "lucide-react"

export default function Places() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')

  const places = [
    {
      id: 1,
      name: "Johnson's Cafe",
      category: "EAT",
      location: "Old Manali",
      rating: "4.6",
      price: "₹₹",
      distance: "1.2 KM",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2874&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "The Himalayan",
      category: "STAYS",
      location: "Hadimba Road",
      rating: "4.8",
      price: "₹₹₹",
      distance: "2.5 KM",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Solang Valley Paragliding",
      category: "EXPERIENCES",
      location: "Solang Valley",
      rating: "4.9",
      price: "₹₹",
      distance: "14 KM",
      image: "https://images.unsplash.com/photo-1527633216839-4d64319fb777?q=80&w=2940&auto=format&fit=crop"
    }
  ]

  const categories = ['ALL', 'STAYS', 'EAT', 'EXPERIENCES']
  const filteredPlaces = activeCategory === 'ALL' ? places : places.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-[var(--color-brand-background)] text-[var(--color-brand-charcoal)] font-sans pt-24">
      
      <div className="flex flex-col lg:flex-row h-[calc(100vh-96px)]">
        
        {/* LEFT PANE: PLACES LIST */}
        <div className="w-full lg:w-1/2 h-full overflow-y-auto px-6 md:px-12 py-8 hide-scrollbar">
          
          <div className="max-w-2xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-balance">
                Places worth<br/>the detour.
              </h1>
              <p className="text-[var(--color-brand-charcoal-light)] text-lg">
                Find somewhere to stay, eat or simply wander.
              </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-6 mb-12">
              <div className="relative w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--color-brand-charcoal-light)] w-5 h-5" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search places..." 
                  className="w-full bg-[var(--color-brand-surface)] border border-[var(--color-brand-border)] rounded-full text-[var(--color-brand-charcoal)] py-4 pl-14 pr-6 focus:outline-none focus:border-[var(--color-brand-charcoal-light)] transition-colors placeholder:text-[var(--color-brand-charcoal-light)]"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase whitespace-nowrap transition-colors border ${
                      activeCategory === cat 
                        ? 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] border-[var(--color-brand-charcoal)]' 
                        : 'bg-transparent text-[var(--color-brand-charcoal-light)] border-[var(--color-brand-border)] hover:border-[var(--color-brand-charcoal-light)]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="space-y-8 pb-20">
              {filteredPlaces.map(place => (
                <div key={place.id} className="flex gap-6 group cursor-pointer border-b border-[var(--color-brand-border)] pb-8">
                  <div className="w-1/3 aspect-[4/5] rounded-xl overflow-hidden bg-[var(--color-brand-surface)] shrink-0">
                    <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                  </div>
                  <div className="w-2/3 flex flex-col py-2">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-accent)]">{place.category}</span>
                      <button className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-accent)] transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    <h3 className="text-2xl font-serif mb-1">{place.name}</h3>
                    <div className="flex items-center gap-1 text-[var(--color-brand-charcoal-light)] mb-4 text-sm font-medium">
                      <MapPin className="w-4 h-4" />
                      {place.location}
                    </div>
                    <div className="flex items-center gap-4 text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--color-brand-charcoal-lighter)] mb-auto">
                      <span className="flex items-center gap-1 text-[var(--color-brand-charcoal)]"><Star className="w-3 h-3 fill-current" /> {place.rating}</span>
                      <span className="w-1 h-1 bg-[var(--color-brand-border)] rounded-full"></span>
                      <span>{place.price}</span>
                      <span className="w-1 h-1 bg-[var(--color-brand-border)] rounded-full"></span>
                      <span>{place.distance}</span>
                    </div>
                    <div className="flex gap-3 mt-6">
                      <button className="flex-1 py-3 border border-[var(--color-brand-border)] rounded-full text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--color-brand-surface)] transition-colors">
                        Save
                      </button>
                      <button className="flex-1 py-3 bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] rounded-full text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--color-brand-charcoal-light)] transition-colors flex items-center justify-center gap-2">
                        <Plus className="w-3 h-3" /> Trip
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT PANE: MAP */}
        <div className="hidden lg:block w-1/2 h-full bg-[var(--color-brand-surface)] relative border-l border-[var(--color-brand-border)]">
          {/* Map Placeholder */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop)` }}
          />
          
          {/* Map Markers mapping to places */}
          {places.map((place, idx) => (
            <div 
              key={place.id}
              className={`absolute w-3 h-3 rounded-full border-2 border-[var(--color-brand-background)] shadow-lg cursor-pointer transition-all hover:scale-150 ${
                activeCategory === 'ALL' || activeCategory === place.category 
                  ? 'bg-[var(--color-brand-charcoal)] opacity-100' 
                  : 'bg-[var(--color-brand-charcoal-light)] opacity-30'
              }`}
              style={{
                top: `${30 + (idx * 20)}%`,
                left: `${40 + (idx % 2 === 0 ? 15 : -15)}%`
              }}
            ></div>
          ))}

        </div>

      </div>
    </div>
  )
}
