import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Explore() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[var(--color-brand-background)] text-[var(--color-brand-charcoal)] font-sans pt-32 pb-40">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left max-w-2xl">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)] block mb-6">Explore</span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-6 text-balance">
            Go somewhere<br/>different.
          </h1>
          <p className="text-[var(--color-brand-charcoal-light)] text-xl">
            Destinations for the way you want to travel.
          </p>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            TRENDING NOW (Hero Grid)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mb-32">
          <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            <div className="md:col-span-8 group cursor-pointer relative overflow-hidden" onClick={() => navigate('/trip/demo')}>
              <div className="aspect-[16/10] bg-[var(--color-brand-surface)]">
                <img src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-90 group-hover:opacity-100" alt="Ladakh" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-background)]/90 via-[var(--color-brand-background)]/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-accent)] mb-3">High Altitude</span>
                <h3 className="text-4xl md:text-5xl font-serif mb-4">Ladakh</h3>
                <p className="text-lg text-[var(--color-brand-charcoal-light)] font-medium max-w-md mb-6">Where the road disappears into the mountains and time slows down.</p>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.1em] uppercase group-hover:text-[var(--color-brand-accent)] transition-colors">
                  Explore Journey <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6">
              
              <div className="flex-1 group cursor-pointer relative overflow-hidden" onClick={() => navigate('/trip/demo')}>
                <div className="absolute inset-0 bg-[var(--color-brand-surface)]">
                  <img src="https://images.unsplash.com/photo-1514222718160-c3d32cb07cb0?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100" alt="Kerala" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-background)]/90 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-serif mb-2">Kerala</h3>
                  <p className="text-sm text-[var(--color-brand-charcoal-light)]">Slow mornings. Wild coastlines.</p>
                </div>
              </div>

              <div className="flex-1 group cursor-pointer relative overflow-hidden" onClick={() => navigate('/trip/demo')}>
                <div className="absolute inset-0 bg-[var(--color-brand-surface)]">
                  <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2754&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100" alt="Rajasthan" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-background)]/90 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-serif mb-2">Rajasthan</h3>
                  <p className="text-sm text-[var(--color-brand-charcoal-light)]">Colour, history and horizons.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CURATED COLLECTIONS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mb-24">
          <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4">Curated Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              {
                title: "Mountain Air",
                desc: "High altitude escapes.",
                img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2940&auto=format&fit=crop"
              },
              {
                title: "Coastal Days",
                desc: "Where the land meets the sea.",
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop"
              },
              {
                title: "Hidden Places",
                desc: "Away from the crowds.",
                img: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2940&auto=format&fit=crop"
              }
            ].map((collection) => (
              <div key={collection.title} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden bg-[var(--color-brand-surface)] mb-6 rounded-2xl">
                  <img src={collection.img} alt={collection.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0" />
                </div>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-[var(--color-brand-accent)] transition-colors">{collection.title}</h3>
                <p className="text-[var(--color-brand-charcoal-light)]">{collection.desc}</p>
              </div>
            ))}

          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            WEEKEND ESCAPES (Text Heavy / Minimal Image)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div>
          <h2 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-light)] mb-8 border-b border-[var(--color-brand-border)] pb-4">Weekend Escapes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Rishikesh', 'Coorg', 'Ooty', 'Udaipur'].map(place => (
              <div key={place} className="border border-[var(--color-brand-border)] p-8 rounded-2xl hover:bg-[var(--color-brand-surface)] transition-colors cursor-pointer group">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-lighter)] block mb-12">2-3 Days</span>
                <h3 className="text-3xl font-serif mb-4">{place}</h3>
                <div className="w-8 h-[1px] bg-[var(--color-brand-charcoal-light)] group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
