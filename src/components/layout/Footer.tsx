import { Link } from "react-router-dom"
import { Compass, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { AmbientGlow } from "../../components/ui/AmbientGlow"
import { revealContainer, revealItem } from "../../lib/motion"

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-[var(--color-brand-charcoal)] border-t border-[var(--color-brand-border)] py-24 px-6 md:px-12 relative z-10 overflow-hidden">
      <AmbientGlow className="bottom-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[var(--color-brand-accent-dark)] opacity-10" duration={40} />
      
      <motion.div 
        variants={revealContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 relative z-10"
      >
        
        {/* Brand & Tagline */}
        <motion.div variants={revealItem} className="max-w-sm">
          <Link to="/" className="flex items-center gap-2 mb-6 group inline-flex">
            <Compass className="h-6 w-6 text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-accent)] transition-colors transform group-hover:rotate-45 duration-500" strokeWidth={1.5} />
            <span className="font-serif text-2xl font-semibold text-[var(--color-brand-charcoal)] tracking-tight">ExploreEase</span>
          </Link>
          <p className="text-2xl font-serif italic text-[var(--color-brand-charcoal-light)]">
            "Go somewhere worth remembering."
          </p>
        </motion.div>

        {/* Links */}
        <motion.div variants={revealItem} className="flex flex-col md:flex-row gap-16 md:gap-32">
          
          <div className="flex flex-col gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
            {['Explore', 'Places', 'My Trips', 'About', 'Privacy'].map(link => (
              <Link 
                key={link} 
                to={link === 'About' || link === 'Privacy' ? '#' : `/${link.toLowerCase().replace(' ', '')}`}
                className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] hover:translate-x-1 transition-all flex items-center gap-2 group"
              >
                {link} <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--color-brand-accent)] transition-all" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
            <a href="#" className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] hover:translate-x-1 transition-all flex items-center gap-2 group">
              Instagram <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--color-brand-accent)] transition-all" />
            </a>
            <a href="#" className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] hover:translate-x-1 transition-all flex items-center gap-2 group">
              GitHub <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[var(--color-brand-accent)] transition-all" />
            </a>
          </div>

        </motion.div>

      </motion.div>

      {/* Copyright */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-[var(--color-brand-border)] flex justify-between items-center text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand-charcoal-lighter)] relative z-10"
      >
        <span>© 2026 ExploreEase</span>
        <span>A Cinematic Travel Experience</span>
      </motion.div>
    </footer>
  )
}
