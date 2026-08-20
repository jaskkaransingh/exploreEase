import { useNavigate } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { MapPin, Calendar, Users } from "lucide-react"

export default function Landing() {
  const navigate = useNavigate()
  
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2921&auto=format&fit=crop" 
            alt="Travel background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f9f7f4]"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-[#222222] mb-6 tracking-tight">Plan less. <span className="italic text-[#c08552]">Explore more.</span></h1>
          <p className="text-lg md:text-xl text-[#555555] mb-12 max-w-2xl mx-auto">
            Build personalized itineraries in seconds. Your next great adventure is just a few clicks away.
          </p>
          
          {/* Search Box */}
          <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#e2e2e2] flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#888888]" />
              <Input placeholder="Where to?" className="pl-10 h-12 border-none bg-transparent shadow-none focus-visible:ring-0" />
            </div>
            <div className="w-px bg-[#e2e2e2] hidden md:block"></div>
            <div className="flex-1 relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#888888]" />
              <Input placeholder="Dates" className="pl-10 h-12 border-none bg-transparent shadow-none focus-visible:ring-0" />
            </div>
            <div className="w-px bg-[#e2e2e2] hidden md:block"></div>
            <div className="flex-1 relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#888888]" />
              <Input placeholder="Travelers" className="pl-10 h-12 border-none bg-transparent shadow-none focus-visible:ring-0" />
            </div>
            <Button onClick={() => navigate('/plan')} className="h-12 px-8 text-base shrink-0">
              Plan my trip
            </Button>
          </div>
        </div>
      </section>

      {/* Curated Destinations */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif mb-10 text-center">Trending Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skeleton cards for now */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer rounded-2xl overflow-hidden border border-[#e2e2e2] bg-white transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <div className="aspect-[4/3] bg-[#e2e2e2] relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${i === 1 ? '1524492413363-8e36786a5120?q=80&w=2940' : i === 2 ? '1596426462615-54877717d23d?q=80&w=2894' : '1514222718160-c3d32cb07cb0?q=80&w=2940'}&auto=format&fit=crop`}
                  alt="Destination"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-2">{i === 1 ? 'Manali, India' : i === 2 ? 'Goa, India' : 'Jaipur, India'}</h3>
                <p className="text-[#555555] text-sm mb-4">Mountain valleys, rivers, and cafe culture.</p>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-[#c08552]">From ₹25,000</span>
                  <span className="text-[#888888]">5-7 days</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
