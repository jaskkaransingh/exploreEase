import { Search, ArrowDown, Compass, Heart, User, Menu } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import videoBg from "../mylivewallpapers-com-Northern-Lights-4K.mp4"
export default function Landing() {
  const navigate = useNavigate()
  const { scrollY } = useScroll()
  
  // Parallax effects
  const textY = useTransform(scrollY, [0, 500], [0, 150])
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0])
  


  return (
    <div className="relative w-full h-screen bg-[#1a2327] overflow-hidden text-white font-sans selection:bg-white/30">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LAYER 1: BACKGROUND (Sky & Distant Mountains)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        {/* Cinematic color grading overlay to match the reference (teal top, warm bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c3035]/60 via-transparent to-[#0a1114]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#cf8a5c]/20 via-transparent to-transparent mix-blend-overlay"></div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LAYER 2: TYPOGRAPHY (Behind foreground mountain)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.div 
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
        style={{ y: textY, opacity: textOpacity }}
      >
        <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-2 opacity-90 font-serif">The call of the</h2>
        <h1 className="text-[12vw] md:text-[14vw] font-black leading-none tracking-tighter text-white drop-shadow-2xl font-sans" style={{ textShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
          Wild
        </h1>
      </motion.div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LAYER 4: UI ELEMENTS (On top of everything)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0 z-30 flex flex-col justify-between p-8 md:p-12">
        
        {/* Top Navbar */}
        <header className="flex justify-between items-center z-50 pointer-events-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <Compass className="h-7 w-7 text-white" strokeWidth={1.5} />
            <span className="font-serif text-2xl font-semibold text-white tracking-tight">ExploreEase</span>
          </div>
          
          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.2em] uppercase absolute left-1/2 -translate-x-1/2">
            {[
              { name: "Explore", path: "/explore" },
              { name: "Places", path: "/places" },
              { name: "My Trips", path: "/trips" }
            ].map((link) => (
              <a 
                key={link.name} 
                onClick={() => navigate(link.path)}
                className="hover:text-white/70 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <button className="hover:text-white/70 transition-colors">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="hover:text-white/70 transition-colors">
              <Heart className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="hover:text-white/70 transition-colors" onClick={() => navigate('/profile')}>
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <div className="w-px h-5 bg-white/30 mx-2"></div>
            <button 
              onClick={() => navigate('/plan')}
              className="px-6 py-2.5 rounded-full bg-white text-[#1a2327] text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Plan a trip
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex gap-4">
            <Search className="w-6 h-6" />
            <Menu className="w-6 h-6" />
          </div>
        </header>

        {/* Center Button (placed perfectly under the text/mountains) */}
        <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full pointer-events-auto">
          <button 
            onClick={() => navigate('/explore')}
            className="text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 hover:text-white/70 transition-colors bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10"
          >
            Start Exploring <span className="text-[14px] leading-none mb-[2px]">&rsaquo;</span>
          </button>
        </div>

        {/* Bottom Elements */}
        <div className="flex justify-between items-end pb-4">
          
          {/* Audio/Waveform Icon (Left) */}
          <div className="flex gap-[3px] items-center h-6 opacity-70">
            {[3, 6, 4, 8, 5, 3, 7, 4, 2].map((height, i) => (
              <motion.div 
                key={i}
                animate={{ height: [height*2, height*4, height*2] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1, ease: "easeInOut" }}
                className="w-[2px] bg-white rounded-full"
                style={{ height: `${height*2}px` }}
              />
            ))}
          </div>

          {/* Pagination Dots (Center) */}
          <div className="absolute left-1/2 bottom-12 -translate-x-1/2 flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white/70 transition-colors cursor-pointer border border-transparent hover:border-white/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-transparent border border-white/50 hover:bg-white/40 transition-colors cursor-pointer"></div>
          </div>

          {/* Empty div for flex spacing since vertical social links handle the right edge */}
          <div className="w-10"></div>
        </div>

        {/* Right Edge: Vertical Social Links & Scroll Indicator */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center h-full justify-between py-32 pointer-events-none">
          
          {/* Vertical Socials */}
          <div className="flex flex-col gap-12 pointer-events-auto">
            {['Youtube', 'Instagram', 'Twitter', 'Facebook'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[10px] font-bold tracking-[0.2em] uppercase origin-center -rotate-90 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Vertical Scroll Indicator */}
          <div className="flex flex-col items-center gap-4 mt-auto mb-12 opacity-80">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase origin-center -rotate-90 whitespace-nowrap mb-6">
              Scroll
            </span>
            <div className="w-px h-12 bg-white/30 relative">
              <motion.div 
                animate={{ y: [0, 24, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-full h-1/2 bg-white absolute top-0"
              />
            </div>
            <ArrowDown className="w-3 h-3 mt-1" />
          </div>
          
        </div>
        
      </div>
    </div>
  )
}
