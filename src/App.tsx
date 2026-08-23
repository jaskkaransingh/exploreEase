import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css" // Standard css required for lenis 1.1+ (though sometimes not strictly needed depending on version, it's good practice. I'll omit it if it fails, actually Lenis v1 works without it for basic setup, but let's just stick to standard JS integration)

import Navbar from "./components/layout/Navbar"
import Landing from "./pages/Landing"
import Plan from "./pages/Plan"
import Explore from "./pages/Explore"
import TripDash from "./pages/TripDash"
import Places from "./pages/Places"
import Trips from "./pages/Trips"
import Profile from "./pages/Profile"
import Footer from "./components/layout/Footer"
import MobileNav from "./components/layout/MobileNav"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05, // Lower value means smoother, more "floaty" scroll (default is 0.1)
      wheelMultiplier: 1,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[var(--color-brand-background)] text-[var(--color-brand-charcoal)]">
        <Navbar />
        <main className="flex-1 flex flex-col relative">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/trip/:tripId" element={<TripDash />} />
            <Route path="/places" element={<Places />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/profile" element={<Profile />} />
            {/* Fallback route */}
            <Route path="*" element={<div className="p-24 text-center text-2xl font-serif">404 - Page not found</div>} />
          </Routes>
        </main>
        <MobileNav />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
