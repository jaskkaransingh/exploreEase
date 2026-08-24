import { useState, useEffect } from "react"
import { Search, MapPin, Star, Heart, Plus } from "lucide-react"
import { motion } from "framer-motion"
import { AmbientGlow } from "../components/ui/AmbientGlow"
import { FramedImage } from "../components/ui/FramedImage"
import { PassportStamp } from "../components/ui/PassportStamp"
import { Skeleton } from "../components/ui/Skeleton"
import { heroContainer, heroItem, revealContainer, revealItem, hoverLift, EASE } from "../lib/motion"

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
    },
    {
      id: 4,
      name: "Cafe 1947",
      category: "EAT",
      location: "Old Manali",
      rating: "4.5",
      price: "₹₹",
      distance: "1.5 KM",
      image: "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=2940&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "ShivAdya Resort",
      category: "STAYS",
      location: "Karjan",
      rating: "4.7",
      price: "₹₹₹",
      distance: "8.1 KM",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2960&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Jogini Waterfall Trek",
      category: "EXPERIENCES",
      location: "Vashisht",
      rating: "4.8",
      price: "FREE",
      distance: "3.2 KM",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2940&auto=format&fit=crop"
    }
  ].map((p, i) => ({ ...p, saved: i % 3 === 0 })) // Mock some saved places

  const categories = ['ALL', 'STAYS', 'EAT', 'EXPERIENCES']
  const [isLoading, setIsLoading] = useState(false)

  const [prevDeps, setPrevDeps] = useState({ search: searchQuery, cat: activeCategory })
  if (searchQuery !== prevDeps.search || activeCategory !== prevDeps.cat) {
    setPrevDeps({ search: searchQuery, cat: activeCategory })
    setIsLoading(true)
  }

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 800)
      return () => clearTimeout(timer)
    }
  }, [isLoading])
  const filteredPlaces = (activeCategory === 'ALL' ? places : places.filter(p => p.category === activeCategory))
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="min-h-screen bg-transparent text-[var(--color-brand-charcoal)] font-sans pt-24 relative overflow-hidden">
      <AmbientGlow className="top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--color-brand-accent-dark)]" duration={45} />
      
      <div className="flex flex-col lg:flex-row h-[calc(100vh-96px)] relative z-10">
        
        {/* LEFT PANE: PLACES LIST */}
        <div className="w-full lg:w-1/2 h-full overflow-y-auto px-6 md:px-12 py-8 hide-scrollbar">
          
          <div className="max-w-2xl">
            {/* Header */}
            <motion.div 
              variants={heroContainer}
              initial="hidden"
              animate="show"
              className="mb-12"
            >
              <motion.h1 variants={heroItem} className="text-4xl md:text-5xl font-serif tracking-tight mb-4 text-balance">
                Places worth<br/>the detour.
              </motion.h1>
              <motion.p variants={heroItem} className="text-[var(--color-brand-charcoal-light)] text-lg">
                Find somewhere to stay, eat or simply wander.
              </motion.p>
            </motion.div>

            {/* Controls */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
              className="flex flex-col gap-6 mb-12"
            >
              <div className="relative w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--color-brand-charcoal-light)] w-5 h-5" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search places..." 
                  className="w-full bg-[var(--color-brand-surface)]/80 backdrop-blur-md border border-[var(--color-brand-border)] rounded-full text-[var(--color-brand-charcoal)] py-4 pl-14 pr-6 focus:outline-none focus:border-[var(--color-brand-charcoal-light)] transition-colors placeholder:text-[var(--color-brand-charcoal-light)] shadow-sm"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {categories.map(cat => (
                  <motion.button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase whitespace-nowrap transition-colors border shadow-sm ${
                      activeCategory === cat 
                        ? 'bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] border-[var(--color-brand-charcoal)]' 
                        : 'bg-[var(--color-brand-surface)]/40 backdrop-blur-xl text-[var(--color-brand-charcoal-light)] border-[var(--color-brand-border)] hover:border-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)]'
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* List */}
            <motion.div 
              variants={revealContainer}
              initial="hidden"
              animate="show"
              className="space-y-8 pb-20"
            >
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <div key={`skel-${i}`} className="flex gap-6 border-b border-[var(--color-brand-border)] pb-8">
                    <Skeleton className="w-1/3 aspect-[4/5] rounded-xl" />
                    <div className="w-2/3 flex flex-col py-2 space-y-4">
                      <Skeleton className="h-4 w-1/4" />
                      <Skeleton className="h-8 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <div className="mt-auto flex gap-3">
                        <Skeleton className="h-10 flex-1 rounded-full" />
                        <Skeleton className="h-10 flex-1 rounded-full" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                filteredPlaces.map(place => (
                  <motion.div 
                    key={place.id} 
                    variants={revealItem}
                    whileHover={hoverLift}
                    className="flex gap-6 group cursor-pointer border-b border-[var(--color-brand-border)] pb-8"
                  >
                    <div className="w-1/3 aspect-[4/5] rounded-xl overflow-hidden shrink-0 relative">
                      <FramedImage 
                        src={place.image} 
                        alt={place.name} 
                        className="w-full h-full"
                        kenBurnsScale={1.05}
                        kenBurnsDuration={20}
                      />
                      {place.saved && (
                        <div className="absolute top-2 right-2 pointer-events-none">
                          <PassportStamp placeName={place.name.substring(0, 8)} angle={15} />
                        </div>
                      )}
                    </div>
                    <div className="w-2/3 flex flex-col py-2">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-accent)]">{place.category}</span>
                        <button className={`transition-colors transform hover:scale-110 active:scale-95 ${place.saved ? 'text-[var(--color-brand-accent)]' : 'text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-accent)]'}`}>
                          <Heart className={`w-5 h-5 ${place.saved ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      <h3 className="text-2xl font-serif mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors">{place.name}</h3>
                      <div className="flex items-center gap-1 text-[var(--color-brand-charcoal-light)] mb-4 text-sm font-medium">
                        <MapPin className="w-4 h-4" />
                        {place.location}
                      </div>
                      <div className="flex items-center gap-4 text-[11px] font-bold tracking-[0.1em] uppercase text-[var(--color-brand-charcoal-lighter)] mb-auto">
                        <span className="flex items-center gap-1 text-[var(--color-brand-charcoal)]"><Star className="w-3 h-3 fill-current text-[var(--color-brand-accent)]" /> {place.rating}</span>
                        <span className="w-1 h-1 bg-[var(--color-brand-border)] rounded-full"></span>
                        <span>{place.price}</span>
                        <span className="w-1 h-1 bg-[var(--color-brand-border)] rounded-full"></span>
                        <span>{place.distance}</span>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button className="flex-1 py-3 border border-[var(--color-brand-border)] rounded-full text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--color-brand-surface)] transition-colors">
                          {place.saved ? 'Saved' : 'Save'}
                        </button>
                        <button className="flex-1 py-3 bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] rounded-full text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--color-brand-accent)] transition-colors flex items-center justify-center gap-2">
                          <Plus className="w-3 h-3" /> Trip
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </motion.div>

          </div>
        </div>

        {/* RIGHT PANE: MAP */}
        <div className="hidden lg:block w-1/2 h-full bg-[var(--color-brand-surface)] relative border-l border-[var(--color-brand-border)] overflow-hidden">
          {/* Map Placeholder */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen transition-transform duration-1000"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop)` }}
          />
          
          <AmbientGlow className="bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-[var(--color-brand-accent-light)] opacity-20" duration={35} />

          {/* Map Markers mapping to places */}
          {places.map((place, idx) => {
            const isActive = activeCategory === 'ALL' || activeCategory === place.category;
            return (
              <div 
                key={place.id}
                className="absolute"
                style={{
                  top: `${20 + (idx * 12)}%`,
                  left: `${40 + (idx % 2 === 0 ? 15 : -15)}%`,
                  zIndex: isActive ? 10 : 0
                }}
              >
                <div 
                  className={`relative w-4 h-4 rounded-full shadow-lg cursor-pointer transition-all duration-500 hover:scale-150 ${
                    isActive 
                      ? 'bg-[var(--color-brand-charcoal)] opacity-100' 
                      : 'bg-[var(--color-brand-charcoal-light)] opacity-30 scale-75'
                  }`}
                >
                  {/* Ping effect for active markers */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-[var(--color-brand-charcoal)] animate-marker-ping"></div>
                  )}
                  {/* Center dot */}
                  <div className="absolute inset-1 rounded-full bg-[var(--color-brand-background)]"></div>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}
