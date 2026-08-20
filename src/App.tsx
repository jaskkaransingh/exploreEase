import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Landing from "./pages/Landing"
import Plan from "./pages/Plan"
import Explore from "./pages/Explore"
import TripDash from "./pages/TripDash"

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#f9f7f4] text-[#222222]">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/trip/:tripId" element={<TripDash />} />
            {/* Fallback route */}
            <Route path="*" element={<div className="p-8 text-center">404 - Page not found</div>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
