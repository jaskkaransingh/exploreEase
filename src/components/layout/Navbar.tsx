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

  // Hide global navbar on the cinematic landing page
  if (location.pathname === '/') {
    return null;
  }


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
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/90 backdrop-blur-md border-b border-[var(--color-brand-border)] py-3 shadow-sm" 
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <Compass className="h-7 w-7 text-[var(--color-brand-accent)]" strokeWidth={1.5} />
            <span className="font-serif text-2xl font-semibold text-[var(--color-brand-charcoal)] tracking-tight">ExploreEase</span>
          </Link>

          {/* Desktop Center Navigation */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--color-brand-accent)]",
                  location.pathname === link.path ? "text-[var(--color-brand-charcoal)]" : "text-[var(--color-brand-charcoal-light)]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-5">
            <button className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] transition-colors">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-accent)] transition-colors">
              <Heart className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <Link to="/profile" className="text-[var(--color-brand-charcoal-light)] hover:text-[var(--color-brand-charcoal)] transition-colors">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </Link>
            <div className="w-px h-5 bg-[var(--color-brand-border)] mx-1"></div>
            <Link to="/plan">
              <Button className="rounded-full px-6 font-semibold shadow-sm hover:shadow-md transition-all">
                Plan a trip
              </Button>
            </Link>
          </div>

          {/* Mobile Toggles */}
          <div className="flex md:hidden items-center gap-4 z-50">
            <button className="text-[var(--color-brand-charcoal)]">
              <Search className="w-6 h-6" strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--color-brand-charcoal)] p-1 -mr-1"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" strokeWidth={1.5} /> : <Menu className="w-7 h-7" strokeWidth={1.5} />}
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
            className="fixed inset-0 z-40 bg-[var(--color-brand-cream)] pt-24 px-6 pb-8 flex flex-col"
          >
            <div className="flex flex-col gap-6 text-2xl font-serif">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-accent)] border-b border-[var(--color-brand-border)] pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/profile"
                className="text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-accent)] border-b border-[var(--color-brand-border)] pb-4 flex items-center justify-between"
              >
                Profile
                <User className="w-6 h-6" strokeWidth={1.5} />
              </Link>
              <Link 
                to="/saved"
                className="text-[var(--color-brand-charcoal)] hover:text-[var(--color-brand-accent)] border-b border-[var(--color-brand-border)] pb-4 flex items-center justify-between"
              >
                Saved Places
                <Heart className="w-6 h-6" strokeWidth={1.5} />
              </Link>
            </div>
            
            <div className="mt-auto">
              <Link to="/plan" className="block">
                <Button className="w-full rounded-xl py-6 text-lg shadow-sm">
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
