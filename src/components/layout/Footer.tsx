import { Link } from "react-router-dom"
import { Compass } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-brand-background)] text-[var(--color-brand-charcoal)] border-t border-[var(--color-brand-border)] py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        
        {/* Brand & Tagline */}
        <div className="max-w-sm">
          <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
            <Compass className="h-6 w-6 text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-accent)] transition-colors" strokeWidth={1.5} />
            <span className="font-serif text-2xl font-semibold text-[var(--color-brand-charcoal)] tracking-tight">ExploreEase</span>
          </Link>
          <p className="text-2xl font-serif italic text-[var(--color-brand-charcoal-light)]">
            "Go somewhere worth remembering."
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          
          <div className="flex flex-col gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
            {['Explore', 'Places', 'My Trips', 'About', 'Privacy'].map(link => (
              <Link 
                key={link} 
                to={link === 'About' || link === 'Privacy' ? '#' : `/${link.toLowerCase().replace(' ', '')}`}
                className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-accent)] transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
            <a href="#" className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-accent)] transition-colors">Instagram</a>
            <a href="#" className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-accent)] transition-colors">GitHub</a>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-[var(--color-brand-border)] flex justify-between items-center text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-lighter)]">
        <span>© 2026 ExploreEase</span>
        <span>A Cinematic Travel Experience</span>
      </div>
    </footer>
  )
}
