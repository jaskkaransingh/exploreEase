import { Link } from "react-router-dom"
import { Compass } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#e2e2e2] bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Compass className="h-6 w-6 text-[#c08552]" />
          <span className="font-serif text-xl font-semibold text-[#222222]">ExploreEase</span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link to="/explore" className="text-sm font-medium text-[#555555] hover:text-[#222222] transition-colors">Explore</Link>
          <Link to="/plan" className="text-sm font-medium text-[#555555] hover:text-[#222222] transition-colors">Plan Trip</Link>
          <Link to="/trips" className="text-sm font-medium text-[#555555] hover:text-[#222222] transition-colors">My Trips</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/login" className="text-sm font-medium text-[#222222] hover:text-[#c08552] transition-colors">Log in</Link>
          <Link to="/plan" className="hidden md:flex items-center justify-center bg-[#222222] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#c08552] transition-colors">Start Planning</Link>
        </div>
      </div>
    </nav>
  )
}
