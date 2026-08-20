import { useState } from "react"
import { MOCK_TRIP } from "../data/mock"
import { Button } from "../components/ui/Button"
import { MapPin, Clock, IndianRupee, Share, Edit2, MoreHorizontal, CloudRain, Sun, Wind, Navigation } from "lucide-react"
import { motion } from "framer-motion"

export default function TripDash() {
  const trip = MOCK_TRIP
  const [activeDay, setActiveDay] = useState(trip.days[0].id)
  
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-73px)] overflow-hidden bg-[var(--color-brand-cream)] pt-[73px]">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LEFT PANE: Itinerary & Info
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="w-full md:w-[55%] lg:w-[45%] h-full overflow-y-auto bg-white border-r border-[var(--color-brand-border)] flex flex-col hide-scrollbar">
        
        {/* Header */}
        <div className="p-8 pb-6 border-b border-[var(--color-brand-border)] sticky top-0 bg-white/95 backdrop-blur-md z-30">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif mb-2 tracking-tight">{trip.destination}</h1>
              <p className="text-[var(--color-brand-charcoal-light)] flex items-center gap-3 text-sm font-medium">
                <span>12–16 Sept</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-brand-border)]"></span>
                <span>5 days · {trip.travelers} travelers</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-brand-border)]"></span>
                <span className="text-[var(--color-brand-accent)] font-semibold">₹{trip.totalEstimatedCost.toLocaleString('en-IN')}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="hidden sm:flex rounded-xl"><Share className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="hidden sm:flex rounded-xl"><Edit2 className="w-4 h-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-xl"><MoreHorizontal className="w-4 h-4" /></Button>
            </div>
          </div>

          {/* Day Navigation */}
          <div className="flex overflow-x-auto gap-6 mt-6 pb-2 hide-scrollbar">
            {trip.days.map((day, idx) => {
              const isActive = activeDay === day.id;
              return (
                <button 
                  key={day.id} 
                  onClick={() => setActiveDay(day.id)}
                  className={`relative whitespace-nowrap pb-2 text-sm font-semibold transition-colors
                    ${isActive ? 'text-[var(--color-brand-charcoal)]' : 'text-[var(--color-brand-charcoal-lighter)] hover:text-[var(--color-brand-charcoal-light)]'}
                  `}
                >
                  Day 0{idx + 1}
                  {isActive && (
                    <motion.div layoutId="activeDayIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-brand-accent)] rounded-t-full" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
        
        <div className="p-8">
          
          {/* Quick Panels (DNA, Weather, Budget) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {/* Trip DNA */}
            <div className="bg-[var(--color-brand-cream)] p-4 rounded-2xl border border-[var(--color-brand-border)]">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-charcoal-lighter)] mb-3">Trip DNA</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-medium">
                  <span>Nature</span><span className="text-[var(--color-brand-accent)]">82%</span>
                </div>
                <div className="w-full h-1 bg-[var(--color-brand-border)] rounded-full overflow-hidden"><div className="h-full bg-[var(--color-brand-accent)] w-[82%]"></div></div>
                
                <div className="flex justify-between items-center text-xs font-medium mt-1">
                  <span>Adventure</span><span className="text-[var(--color-brand-accent)]">71%</span>
                </div>
                <div className="w-full h-1 bg-[var(--color-brand-border)] rounded-full overflow-hidden"><div className="h-full bg-[var(--color-brand-accent)] opacity-70 w-[71%]"></div></div>
              </div>
            </div>

            {/* Weather */}
            <div className="bg-[var(--color-brand-cream)] p-4 rounded-2xl border border-[var(--color-brand-border)] flex flex-col justify-between">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-charcoal-lighter)] mb-1">Weather</h4>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-serif text-[var(--color-brand-charcoal)]">23°</div>
                  <div className="text-xs font-medium text-[var(--color-brand-charcoal-light)]">Sunny</div>
                </div>
                <Sun className="w-8 h-8 text-[#eab308]" />
              </div>
              <div className="text-[10px] font-semibold text-[var(--color-brand-charcoal-lighter)] flex items-center gap-1 mt-2">
                <CloudRain className="w-3 h-3" /> 20%
                <span className="mx-1">•</span>
                <Wind className="w-3 h-3" /> 12km/h
              </div>
            </div>

            {/* Budget */}
            <div className="bg-[var(--color-brand-cream)] p-4 rounded-2xl border border-[var(--color-brand-border)]">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-charcoal-lighter)] mb-1">Budget</h4>
              <div className="text-lg font-serif text-[var(--color-brand-charcoal)] mb-2">₹26.4k <span className="text-xs font-medium text-[var(--color-brand-charcoal-lighter)]">/ ₹30k</span></div>
              <div className="flex gap-1 h-1.5 w-full rounded-full overflow-hidden mb-2">
                <div className="bg-[var(--color-brand-accent)] w-[40%]"></div>
                <div className="bg-[var(--color-brand-accent-light)] w-[20%]"></div>
                <div className="bg-[var(--color-brand-charcoal-light)] w-[15%]"></div>
              </div>
              <div className="text-[10px] font-medium text-[var(--color-brand-charcoal-light)] leading-tight">
                Acc: ₹12k <br/>Trans: ₹5.4k
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px before:h-full before:w-px before:bg-[var(--color-brand-border)] space-y-8">
            
            {trip.days.find(d => d.id === activeDay)?.items.map((item, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                key={item.id} 
                className="relative flex gap-6 group cursor-pointer"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 w-9 h-9 flex items-center justify-center rounded-full border-4 border-white bg-[var(--color-brand-cream)] text-[var(--color-brand-charcoal-lighter)] group-hover:bg-[var(--color-brand-accent)] group-hover:text-white transition-colors z-10 shadow-sm">
                  {item.type === 'hotel' ? <MapPin className="w-3.5 h-3.5" /> : 
                   item.type === 'restaurant' ? <Clock className="w-3.5 h-3.5" /> : 
                   <MapPin className="w-3.5 h-3.5" />}
                </div>
                
                {/* Content Card */}
                <div className="flex-1 ml-10 p-5 rounded-2xl border border-[var(--color-brand-border)] bg-white hover:border-[var(--color-brand-accent)] hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-[var(--color-brand-accent)] tracking-wider">{item.startTime}</span>
                    <span className="text-xs font-semibold text-[var(--color-brand-charcoal-lighter)] flex items-center bg-[var(--color-brand-cream)] px-2 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 mr-1"/> {item.duration}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-medium mb-1 text-[var(--color-brand-charcoal)]">{item.title}</h3>
                  <p className="text-sm font-medium text-[var(--color-brand-charcoal-lighter)] mb-3">{item.location}</p>
                  
                  {item.image && (
                    <div className="w-full h-40 rounded-xl overflow-hidden mb-4 relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  )}
                  
                  {item.description && (
                    <p className="text-sm text-[var(--color-brand-charcoal-light)] mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[var(--color-brand-charcoal-light)] pt-4 border-t border-[var(--color-brand-border-light)]">
                    <span className="flex items-center text-[var(--color-brand-charcoal)]"><IndianRupee className="w-3.5 h-3.5 mr-1 text-[var(--color-brand-accent)]"/> {item.estimatedCost}</span>
                    {item.distanceFromPrevious && (
                      <span className="flex items-center"><Navigation className="w-3 h-3 mr-1"/> {item.distanceFromPrevious}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* End of Day marker */}
            <div className="relative flex items-center gap-6 pt-4">
              <div className="absolute left-0 w-9 h-9 flex items-center justify-center rounded-full bg-transparent z-10">
                <div className="w-2 h-2 rounded-full bg-[var(--color-brand-border)]"></div>
              </div>
              <div className="ml-10 flex-1 border-t border-dashed border-[var(--color-brand-border)]"></div>
            </div>

          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          RIGHT PANE: Map View
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="hidden md:block w-[45%] lg:w-[55%] h-full relative bg-[#E5E3DF] overflow-hidden">
        {/* Mock Map Background - using a subtle pattern to simulate a map without a real API yet */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply" 
             style={{ backgroundImage: 'radial-gradient(#C6C3BC 1px, transparent 0)', backgroundSize: '20px 20px' }}>
        </div>
        
        {/* Mock Route Line (SVG) */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 200 300 Q 300 200, 400 400 T 600 250" fill="transparent" stroke="var(--color-brand-accent)" strokeWidth="3" strokeDasharray="6 6" className="opacity-60" />
        </svg>

        {/* Mock Map Markers */}
        <div className="absolute top-[300px] left-[200px] flex flex-col items-center group cursor-pointer">
          <div className="bg-white px-3 py-1 rounded-full shadow-md text-xs font-semibold mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors whitespace-nowrap">Check-in</div>
          <div className="w-4 h-4 bg-white border-2 border-[var(--color-brand-accent)] rounded-full shadow-lg group-hover:scale-125 transition-transform"></div>
        </div>

        <div className="absolute top-[400px] left-[400px] flex flex-col items-center group cursor-pointer z-10">
          <div className="bg-[var(--color-brand-accent)] text-white px-3 py-1 rounded-full shadow-lg text-xs font-semibold mb-1 whitespace-nowrap">Hadimba Temple</div>
          <div className="w-5 h-5 bg-[var(--color-brand-accent)] border-2 border-white rounded-full shadow-lg scale-110 relative">
            <div className="absolute inset-0 bg-[var(--color-brand-accent)] rounded-full animate-ping opacity-40"></div>
          </div>
        </div>

        <div className="absolute top-[250px] left-[600px] flex flex-col items-center group cursor-pointer">
          <div className="bg-white px-3 py-1 rounded-full shadow-md text-xs font-semibold mb-1 group-hover:text-[var(--color-brand-accent)] transition-colors whitespace-nowrap">Cafe 1947</div>
          <div className="w-4 h-4 bg-white border-2 border-[var(--color-brand-accent)] rounded-full shadow-lg group-hover:scale-125 transition-transform"></div>
        </div>
        
        {/* Map Controls */}
        <div className="absolute bottom-8 right-8 flex flex-col gap-2">
          <Button variant="default" size="icon" className="rounded-xl shadow-lg bg-white text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-cream)] hover:text-[var(--color-brand-accent)]">+</Button>
          <Button variant="default" size="icon" className="rounded-xl shadow-lg bg-white text-[var(--color-brand-charcoal)] hover:bg-[var(--color-brand-cream)] hover:text-[var(--color-brand-accent)]">-</Button>
        </div>
      </div>
    </div>
  )
}
