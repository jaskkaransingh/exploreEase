import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Compass, Search, Heart, User, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../ui/Button"
import { cn } from "../../lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: "Explore", path: "/explore" },
    { name: "Places", path: "/places" },
    { name: "My Trips", path: "/trips" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 pointer-events-auto",
          isScrolled 
            ? "bg-transparent py-4" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50 group">
            <Compass className="h-6 w-6 text-[var(--color-brand-charcoal)] group-hover:text-[var(--color-brand-accent)] transition-colors" strokeWidth={1.5} />
            <span className="font-serif text-2xl font-semibold text-[var(--color-brand-charcoal)] tracking-tight">ExploreEase</span>
          </Link>

          {/* Desktop Center Navigation */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-[11px] font-bold tracking-[0.2em] uppercase transition-colors",
                  location.pathname === link.path ? "text-[var(--color-brand-charcoal)]" : "text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-[var(--color-brand-charcoal)] hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="text-[var(--color-brand-charcoal)] hover:opacity-70 transition-opacity">
              <Heart className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <Link to="/profile" className="text-[var(--color-brand-charcoal)] hover:opacity-70 transition-opacity">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <div className="w-px h-5 bg-[var(--color-brand-border)] mx-1"></div>
            <Link to="/plan">
              <button className="px-6 py-2.5 rounded-full bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)] text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--color-brand-charcoal-light)] transition-colors shadow-sm">
                Plan a trip
              </button>
            </Link>
          </div>

          {/* Mobile Toggles */}
          <div className="flex md:hidden items-center gap-5 z-50">
            <button className="text-[var(--color-brand-charcoal)]">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--color-brand-charcoal)]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--color-brand-background)] pt-24 px-8 pb-12 flex flex-col"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-2xl font-serif text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-accent)] border-b border-[var(--color-brand-border)] pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/saved"
                className="text-2xl font-serif text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-accent)] border-b border-[var(--color-brand-border)] pb-4 flex items-center justify-between"
              >
                Saved Places
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            </div>
            
            <div className="mt-auto">
              <Link to="/plan" className="block">
                <Button className="w-full h-14 rounded-full text-[12px] tracking-[0.1em] uppercase font-bold bg-[var(--color-brand-charcoal)] text-[var(--color-brand-background)]">
                  Plan a trip
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
