import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Landing from "./pages/Landing"
import Plan from "./pages/Plan"
import Explore from "./pages/Explore"
import TripDash from "./pages/TripDash"
import Places from "./pages/Places"
import Trips from "./pages/Trips"
import Profile from "./pages/Profile"
import MobileNav from "./components/layout/MobileNav"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[var(--color-brand-cream)] text-[var(--color-brand-charcoal)]">
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
      </div>
    </BrowserRouter>
  )
}

export default App
