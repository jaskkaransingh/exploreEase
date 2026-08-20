import { MOCK_TRIP } from "../data/mock"
import { MapPin, Clock, IndianRupee } from "lucide-react"

export default function TripDash() {
  const trip = MOCK_TRIP
  
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
      {/* Left: Itinerary Timeline */}
      <div className="w-full md:w-1/2 h-full overflow-y-auto bg-white border-r border-[#e2e2e2]">
        <div className="p-8 border-b border-[#e2e2e2]">
          <h1 className="text-4xl font-serif mb-2">{trip.destination}</h1>
          <p className="text-[#555555] flex items-center gap-4 text-sm font-medium">
            <span>{trip.startDate} – {trip.endDate}</span>
            <span className="w-1 h-1 rounded-full bg-[#d4a373]"></span>
            <span>{trip.travelers} travelers</span>
            <span className="w-1 h-1 rounded-full bg-[#d4a373]"></span>
            <span>₹{trip.totalEstimatedCost} est.</span>
          </p>
        </div>
        
        {/* Day Navigation */}
        <div className="flex overflow-x-auto px-8 py-4 gap-4 border-b border-[#e2e2e2] sticky top-0 bg-white z-10">
          {trip.days.map((day, idx) => (
            <button key={day.id} className={`whitespace-nowrap pb-2 text-sm font-semibold transition-colors ${idx === 0 ? 'text-[#c08552] border-b-2 border-[#c08552]' : 'text-[#888888] hover:text-[#222222]'}`}>
              Day 0{idx + 1}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="p-8">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#e2e2e2] before:to-transparent">
            {trip.days[0].items.map((item) => (
              <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#f9f7f4] text-[#c08552] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-[#c08552]"></div>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-[#e2e2e2] bg-white shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] hover:border-[#c08552] transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#c08552]">{item.startTime}</span>
                    <span className="text-xs text-[#888888] flex items-center"><Clock className="w-3 h-3 mr-1"/> {item.duration}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-[#555555] mb-3 line-clamp-2">{item.description}</p>
                  
                  {item.image && (
                    <div className="w-full h-32 rounded-lg overflow-hidden mb-3">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 text-xs font-medium text-[#888888] pt-3 border-t border-[#f9f7f4]">
                    <span className="flex items-center"><IndianRupee className="w-3 h-3 mr-1"/> {item.estimatedCost}</span>
                    {item.distanceFromPrevious && (
                      <span className="flex items-center"><MapPin className="w-3 h-3 mr-1"/> {item.distanceFromPrevious}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Map Area Placeholder */}
      <div className="hidden md:block w-1/2 h-full bg-[#e8e4db] relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[#888888]">
          <MapPin className="w-12 h-12 mb-4 opacity-50" />
          <p className="font-medium">Interactive Map Component Placeholder</p>
        </div>
      </div>
    </div>
  )
}
