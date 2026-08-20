import { useState } from "react"
import { SearchInput } from "../components/ui/SearchInput"
import { Chip } from "../components/ui/Chip"
import { Button } from "../components/ui/Button"
import { Heart, Plus, Star, MapPin } from "lucide-react"

const FILTERS = ["All", "Attractions", "Hotels", "Restaurants"]

const PLACES = [
  {
    id: 1,
    name: "Johnson's Cafe",
    type: "Restaurant",
    rating: 4.6,
    reviews: 324,
    price: "₹₹",
    distance: "1.2 km",
    tags: ["Italian", "Continental", "Live Music"],
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "The Himalayan Resort",
    type: "Hotel",
    rating: 4.8,
    reviews: 156,
    price: "₹₹₹₹",
    distance: "2.5 km",
    tags: ["Luxury", "Pool", "Mountain View"],
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Solang Valley",
    type: "Attraction",
    rating: 4.5,
    reviews: 1240,
    price: "Free",
    distance: "14 km",
    tags: ["Adventure", "Snow", "Views"],
    img: "https://images.unsplash.com/photo-1626014903706-e7e61bc8481d?q=80&w=2940&auto=format&fit=crop"
  }
]

export default function Places() {
  const [activeFilter, setActiveFilter] = useState("All")
  
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-73px)] overflow-hidden bg-[var(--color-brand-cream)] pt-[73px]">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LEFT PANE: Places List
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="w-full md:w-[60%] lg:w-[50%] h-full flex flex-col bg-[var(--color-brand-cream)] border-r border-[var(--color-brand-border)]">
        
        {/* Header & Controls */}
        <div className="p-6 md:p-8 pb-6 border-b border-[var(--color-brand-border)] bg-white sticky top-0 z-10 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-serif mb-6 text-balance">Find places worth adding to your trip.</h1>
          
          <SearchInput 
            placeholder="Search hotels, restaurants, attractions..." 
            className="h-12 bg-[var(--color-brand-cream)] border-transparent focus-visible:bg-white focus-visible:border-[var(--color-brand-accent)]"
            containerClassName="mb-6"
          />
          
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            {FILTERS.map(f => (
              <Chip 
                key={f} 
                active={activeFilter === f} 
                onClick={() => setActiveFilter(f)}
                className="whitespace-nowrap rounded-lg border-transparent shadow-none font-semibold text-xs py-2 px-5"
              >
                {f}
              </Chip>
            ))}
          </div>
        </div>
        
        {/* Places Feed */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {PLACES.map(place => (
            <div key={place.id} className="group bg-white rounded-[1.5rem] border border-[var(--color-brand-border)] overflow-hidden flex flex-col sm:flex-row hover:border-[var(--color-brand-accent)] hover:shadow-lg transition-all">
              
              {/* Image */}
              <div className="sm:w-[40%] aspect-[4/3] sm:aspect-auto relative overflow-hidden">
                <img src={place.img} alt={place.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/50 backdrop-blur-md hover:bg-white text-[var(--color-brand-charcoal)] rounded-full h-8 w-8">
                  <Heart className="w-4 h-4" />
                </Button>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-charcoal)] shadow-sm">
                  {place.type}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 sm:w-[60%] flex flex-col">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-serif font-medium line-clamp-1">{place.name}</h3>
                </div>
                
                <div className="flex items-center gap-3 text-sm font-medium text-[var(--color-brand-charcoal-light)] mb-4">
                  <span className="flex items-center text-[var(--color-brand-charcoal)]">
                    <Star className="w-3.5 h-3.5 mr-1 fill-current text-[#eab308]" /> 
                    {place.rating} <span className="text-[var(--color-brand-charcoal-lighter)] font-normal ml-1">({place.reviews})</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-brand-border)]"></span>
                  <span className="text-[var(--color-brand-charcoal)] font-semibold">{place.price}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-brand-border)]"></span>
                  <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {place.distance}</span>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {place.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold text-[var(--color-brand-charcoal-lighter)] border border-[var(--color-brand-border)] px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button variant="outline" className="w-full justify-center gap-2 rounded-xl h-10 shadow-sm group-hover:bg-[var(--color-brand-charcoal)] group-hover:text-white transition-colors">
                    <Plus className="w-4 h-4" /> Add to trip
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          RIGHT PANE: Map View
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="hidden md:block md:w-[40%] lg:w-[50%] h-full relative bg-[#E5E3DF] overflow-hidden border-l border-[var(--color-brand-border)] shadow-inner">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
             style={{ backgroundImage: 'radial-gradient(#C6C3BC 1px, transparent 0)', backgroundSize: '15px 15px' }}>
        </div>
        
        {/* Mock Map Markers for Places */}
        {PLACES.map((place, i) => (
          <div key={place.id} className="absolute flex flex-col items-center group cursor-pointer" style={{ top: `${30 + i*20}%`, left: `${30 + (i%2)*30}%` }}>
            <div className="bg-white px-3 py-1.5 rounded-xl shadow-md text-xs font-semibold mb-1 group-hover:text-white group-hover:bg-[var(--color-brand-accent)] transition-colors whitespace-nowrap border border-[var(--color-brand-border)] flex items-center gap-1">
              <span className="font-bold">{place.price !== 'Free' ? place.price : ''}</span> {place.name}
            </div>
            <div className="w-3 h-3 bg-white border-2 border-[var(--color-brand-accent)] rounded-full shadow-md group-hover:scale-125 transition-transform"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
