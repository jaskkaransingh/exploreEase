import { Link, useLocation } from "react-router-dom"
import { Compass, Search, Map, User } from "lucide-react"
import { motion } from "framer-motion"
import { EASE, DURATION_FAST } from "../../lib/motion"

export default function MobileNav() {
  const location = useLocation()
  
  // Don't show bottom nav on Plan or TripDash where screen real estate is critical
  if (location.pathname.startsWith('/plan') || location.pathname.startsWith('/trip/')) {
    return null;
  }

  const navItems = [
    { icon: <Compass className="w-6 h-6" strokeWidth={1.5} />, label: "Explore", path: "/" },
    { icon: <Search className="w-6 h-6" strokeWidth={1.5} />, label: "Places", path: "/places" },
    { icon: <Map className="w-6 h-6" strokeWidth={1.5} />, label: "Trips", path: "/trips" },
    { icon: <User className="w-6 h-6" strokeWidth={1.5} />, label: "Profile", path: "/profile" },
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--color-brand-background)]/95 backdrop-blur-lg border-t border-[var(--color-brand-border)] z-50 px-6 py-3 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="flex justify-between items-center relative">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))
          
          return (
            <Link 
              key={item.label} 
              to={item.path}
              className="relative flex flex-col items-center gap-1.5 w-16"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={`transition-colors duration-300 ${isActive ? 'text-[var(--color-brand-accent)]' : 'text-[var(--color-brand-charcoal-lighter)] hover:text-[var(--color-brand-charcoal)]'}`}
              >
                {item.icon}
              </motion.div>
              <span className={`text-[10px] font-semibold tracking-wide transition-colors duration-300 ${isActive ? 'text-[var(--color-brand-accent)]' : 'text-[var(--color-brand-charcoal-lighter)]'}`}>
                {item.label}
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="mobileNavIndicator"
                  className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-[var(--color-brand-accent)]"
                  transition={{ duration: DURATION_FAST, ease: EASE }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
