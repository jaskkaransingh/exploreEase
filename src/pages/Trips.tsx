import { useNavigate } from "react-router-dom"
import { ArrowRight, MoreVertical } from "lucide-react"

export default function Trips() {
  const navigate = useNavigate()

  return (
    <div className="flex-1 bg-[var(--color-brand-cream)] pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-brand-charcoal)] mb-12">Your journeys</h1>

        {/* UPCOMING TRIPS */}
        <section className="mb-20">
          <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--color-brand-charcoal-lighter)] mb-6">Upcoming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Postcard Trip Card */}
            <div 
              onClick={() => navigate('/trip/demo-manali')}
              className="group bg-white rounded-3xl overflow-hidden border border-[var(--color-brand-border)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1524492413363-8e36786a5120?q=80&w=2940&auto=format&fit=crop" alt="Manali" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-brand-charcoal)]">
                  In 24 days
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-serif uppercase tracking-widest text-[var(--color-brand-charcoal)] mb-2">Manali</h3>
                    <p className="text-[var(--color-brand-charcoal-light)] font-medium">12–16 September</p>
                  </div>
                  <button className="text-[var(--color-brand-charcoal-lighter)] hover:text-[var(--color-brand-charcoal)] p-1 rounded-full hover:bg-[var(--color-brand-cream)] transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 text-sm font-medium text-[var(--color-brand-charcoal)] mb-8">
                  <span>5 days</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-brand-border)]"></span>
                  <span>2 travelers</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-brand-border)]"></span>
                  <span>₹26,400</span>
                </div>
                
                <div className="mt-auto pt-6 border-t border-[var(--color-brand-border)] flex items-center justify-between group-hover:border-[var(--color-brand-accent-light)] transition-colors">
                  <div className="flex-1 mr-8">
                    <div className="flex justify-between text-xs font-semibold text-[var(--color-brand-charcoal-lighter)] mb-2">
                      <span>Planning Progress</span>
                      <span className="text-[var(--color-brand-accent)]">68%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[var(--color-brand-border-light)] rounded-full overflow-hidden">
                      <div className="h-full bg-[var(--color-brand-accent)] w-[68%]"></div>
                    </div>
                  </div>
                  <div className="text-[var(--color-brand-accent)] font-semibold flex items-center gap-1 text-sm">
                    Continue <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* DRAFTS */}
        <section className="mb-20">
          <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--color-brand-charcoal-lighter)] mb-6">Drafts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="group bg-[var(--color-brand-cream-dark)] rounded-2xl p-6 border border-[var(--color-brand-border)] border-dashed hover:border-[var(--color-brand-accent)] cursor-pointer transition-colors">
              <h3 className="text-xl font-serif text-[var(--color-brand-charcoal)] mb-1">Weekend in Goa</h3>
              <p className="text-sm text-[var(--color-brand-charcoal-light)] mb-6">Dates undecided</p>
              <div className="flex justify-between items-center text-sm font-medium text-[var(--color-brand-accent)]">
                Finish planning <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            
          </div>
        </section>
        
        {/* PAST TRIPS */}
        <section>
          <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--color-brand-charcoal-lighter)] mb-6">Past Trips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80 hover:opacity-100 transition-opacity">
            
            <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-brand-border)] cursor-pointer">
              <div className="aspect-[2/1] relative grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2754&auto=format&fit=crop" alt="Jaipur" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-serif uppercase tracking-widest text-[var(--color-brand-charcoal)] mb-1">Jaipur</h3>
                <p className="text-sm text-[var(--color-brand-charcoal-light)]">March 2024</p>
              </div>
            </div>
            
          </div>
        </section>

      </div>
    </div>
  )
}
