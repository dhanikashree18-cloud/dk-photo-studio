import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Smile, Compass, ChevronRight, Camera, Award, Globe, HeartHandshake } from 'lucide-react';

// Compass divider SVG for the four corners
const DraftingCompass = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className="w-8 h-8 text-studio-gold/45" 
    strokeWidth="1.2"
  >
    <circle cx="12" cy="5" r="1.5" />
    <path d="M12 6.5L7 20" />
    <path d="M12 6.5L17 20" />
    <path d="M9 14h6" />
    <circle cx="12" cy="14" r="0.8" fill="currentColor" />
  </svg>
);

// Dynamic Gold Monogram SVG representation matching Mockup 1
const GoldMonogram = () => (
  <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center bg-[#0d0d0f] rounded-sm select-none border border-studio-gold/15 shadow-inner">
    {/* Monogram texture backing */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80')] bg-cover opacity-10 blend-luminosity rounded-sm"></div>
    
    {/* SVG Monogram Crest */}
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      className="w-40 h-40 md:w-48 md:h-48 text-studio-gold drop-shadow-[0_2px_15px_rgba(223,186,107,0.35)]"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd98c" />
          <stop offset="50%" stopColor="#dfba6b" />
          <stop offset="100%" stopColor="#ca9f4a" />
        </linearGradient>
      </defs>

      {/* Decorative Outer Flourishes */}
      <path 
        d="M30,100 C30,70 60,30 100,30 C140,30 170,70 170,100 C170,130 140,170 100,170 C60,170 30,130 30,100 Z" 
        stroke="url(#goldGradient)" 
        strokeWidth="1" 
        strokeDasharray="2 3"
      />

      <path 
        d="M20,100 C20,50 60,20 100,20 C140,20 180,50 180,100 C180,150 140,180 100,180 C60,180 20,150 20,100 Z" 
        stroke="url(#goldGradient)" 
        strokeWidth="0.5" 
      />

      {/* Main Calligraphic Monogram DK */}
      {/* Letter D */}
      <path 
        d="M60,65 C60,65 95,50 95,85 C95,115 80,140 62,140 C55,140 50,135 50,125 C50,105 70,70 60,65 Z" 
        fill="none" 
        stroke="url(#goldGradient)" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
      {/* Camera Shutter/Aperture blade inside Letter D */}
      <circle cx="73" cy="115" r="8" stroke="url(#goldGradient)" strokeWidth="1" />
      <path d="M73,107 L77,112 M73,123 L69,118 M77,117 L72,119 M69,113 L74,111" stroke="url(#goldGradient)" strokeWidth="1" />

      {/* Letter K */}
      <path 
        d="M102,60 C102,60 105,130 100,140" 
        fill="none" 
        stroke="url(#goldGradient)" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
      {/* Top diagonal leg with loop */}
      <path 
        d="M140,65 C135,65 110,85 105,95" 
        fill="none" 
        stroke="url(#goldGradient)" 
        strokeWidth="3.5" 
        strokeLinecap="round"
      />
      {/* Shutter lens circle element in K */}
      <circle cx="132" cy="74" r="6" stroke="url(#goldGradient)" strokeWidth="1" />
      <circle cx="132" cy="74" r="2" fill="url(#goldGradient)" />

      {/* Bottom diagonal leg with flourish */}
      <path 
        d="M106,98 C115,110 130,135 145,135 C152,135 158,128 150,120" 
        fill="none" 
        stroke="url(#goldGradient)" 
        strokeWidth="3.5" 
        strokeLinecap="round"
      />

      {/* Swirly Calligraphy Accents */}
      <path 
        d="M50,45 Q100,30 150,45" 
        fill="none" 
        stroke="url(#goldGradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M45,155 Q100,170 155,155" 
        fill="none" 
        stroke="url(#goldGradient)" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <circle cx="50" cy="45" r="2.5" fill="url(#goldGradient)" />
      <circle cx="150" cy="45" r="2.5" fill="url(#goldGradient)" />
      <circle cx="45" cy="155" r="2.5" fill="url(#goldGradient)" />
      <circle cx="155" cy="155" r="2.5" fill="url(#goldGradient)" />
    </svg>
  </div>
);

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* SECTION 1: HERO LANDING VIEW (Image 1 Reference) */}
      <section className="relative w-full min-h-[90vh] bg-studio-black flex items-center justify-center px-6 py-12 border-b border-dashed border-studio-gold/25 overflow-hidden">
        
        {/* Fine dark canvas grid overlay backing */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/30 via-studio-black to-studio-black opacity-90"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfba6b05_1px,transparent_1px),linear-gradient(to_bottom,#dfba6b05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Framing box replicating the premium grid layout */}
        <div className="relative w-full max-w-xl aspect-square md:max-w-2xl border border-dashed border-studio-gold/15 bg-studio-black/40 backdrop-blur-sm p-8 md:p-12 flex flex-col items-center justify-between shadow-2xl">
          
          {/* Drafting compass dividers in all four corners */}
          <div className="absolute top-4 left-4 rotate-180"><DraftingCompass /></div>
          <div className="absolute top-4 right-4 -rotate-90"><DraftingCompass /></div>
          <div className="absolute bottom-4 left-4 rotate-90"><DraftingCompass /></div>
          <div className="absolute bottom-4 right-4"><DraftingCompass /></div>

          {/* Central Logo Header */}
          <div className="text-center mt-6">
            <h2 className="font-cinzel text-2xl md:text-4xl text-studio-gold tracking-[0.25em] font-semibold leading-relaxed">
              DK PHOTO
            </h2>
            <h2 className="font-cinzel text-2xl md:text-4xl text-studio-gold tracking-[0.25em] font-semibold leading-relaxed">
              STUDIO
            </h2>
            <div className="w-16 h-[1px] bg-studio-gold/30 mx-auto mt-4"></div>
          </div>

          {/* Luxury Custom Monogram Emblem */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="my-8 md:my-10"
          >
            <GoldMonogram />
          </motion.div>

          {/* Bottom taglines & Scroll Callout */}
          <div className="text-center mb-6">
            <p className="text-[10px] md:text-xs text-gray-500 tracking-[0.2em] uppercase font-sans">
              ESTABLISHED IN MCMXCVI • CAPTURING TRUTH
            </p>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-6 text-studio-gold/60 text-xs font-sans tracking-widest cursor-pointer select-none"
              onClick={() => document.getElementById('experience-section').scrollIntoView({ behavior: 'smooth' })}
            >
              EXPLORE DETAILS ↓
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 2: EXPERIENCE & CAMERA SUMMARY (Image 2 Reference) */}
      <section id="experience-section" className="w-full max-w-7xl px-6 py-20 md:py-28 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        
        {/* Left: Professional low-light camera portrait */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-studio-gold/15 to-transparent rounded-sm blur-md opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full bg-[#121214] border border-studio-gold/15 p-4 rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" 
              alt="DK Photo Studio Premium Camera Setup" 
              className="w-full h-full object-cover rounded-sm filter grayscale contrast-125"
            />
            {/* Minimal overlays resembling design */}
            <div className="absolute top-8 left-8"><DraftingCompass /></div>
            <div className="absolute bottom-8 right-8"><DraftingCompass /></div>
          </div>
        </div>

        {/* Right: Studio tagline statement & introduction */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1.5px] bg-studio-gold"></div>
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-studio-gold font-sans">
              ESTABLISHED STUDIO
            </span>
          </div>

          <h3 className="font-cinzel text-2xl md:text-4xl text-studio-gold font-semibold tracking-wide leading-snug md:leading-relaxed mb-6">
            We have well experienced photographers in our studio to capture your valuable moments of your life.
          </h3>

          <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed mb-8 max-w-xl">
            Crafting visual heirlooms with the precision of a master tailor, we document the threads of your legacy through high-fidelity photography. Every shadow, light ray, and emotional capture is curated with artisan devotion.
          </p>

          <Link to="/contact" className="px-8 py-3.5 bg-studio-gold hover:bg-studio-gold-hover text-studio-black font-sans font-bold text-xs tracking-widest transition-all rounded-sm glow-gold hover:scale-[1.02]">
            INQUIRE NOW
          </Link>
        </div>
      </section>

      {/* SECTION 3: SERVICES GRID (Image 2 Reference - "OUR SERVICES") */}
      <section className="w-full bg-[#0d0d0f] border-y border-dashed border-studio-gold/20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-dashed border-studio-gold/15 pb-6 mb-12">
            <div>
              <h2 className="font-cinzel text-3xl md:text-4xl text-studio-gold tracking-widest font-semibold">
                OUR SERVICES
              </h2>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="font-cinzel text-xs tracking-[0.2em] text-studio-gold/60">
                CATALOGUE '26
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service 01: Ear Piercing Ceremony */}
            <div className="bg-velvet-card bg-velvet-card-hover p-6 rounded-sm flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs text-gray-500 font-sans tracking-widest font-bold">01</span>
                  <Globe className="w-5 h-5 text-studio-gold stroke-[1.2]" />
                </div>
                <h4 className="font-cinzel text-xl text-studio-gold font-medium tracking-wide mb-4">
                  Ear Piercing Ceremony
                </h4>
              </div>
              <div className="mt-4 aspect-[4/3] rounded-sm overflow-hidden border border-studio-gold/10">
                <img 
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=400&q=80" 
                  alt="Ear Piercing Ceremony" 
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Service 02: Birthday Parties */}
            <div className="bg-velvet-card bg-velvet-card-hover p-6 rounded-sm flex flex-col justify-between transition-all duration-300 min-h-[300px]">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs text-gray-500 font-sans tracking-widest font-bold">02</span>
                  <Camera className="w-5 h-5 text-studio-gold stroke-[1.2]" />
                </div>
                <h4 className="font-cinzel text-xl text-studio-gold font-medium tracking-wide mb-4">
                  Birthday Parties
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed">
                  Documenting the joy of growth with cinematic clarity and candid warmth. We record the laughter, milestones, and glowing candle lights.
                </p>
              </div>
              <div className="mt-8 text-left">
                <Link to="/contact" className="text-[10px] text-studio-gold font-semibold tracking-widest hover:underline flex items-center gap-1 font-sans">
                  INQUIRE RATES <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 03: Puberty Function */}
            <div className="bg-velvet-card bg-velvet-card-hover p-6 rounded-sm flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs text-gray-500 font-sans tracking-widest font-bold">03</span>
                  <Award className="w-5 h-5 text-studio-gold stroke-[1.2]" />
                </div>
                <h4 className="font-cinzel text-xl text-studio-gold font-medium tracking-wide mb-4">
                  Puberty Function
                </h4>
              </div>
              <div className="mt-4 aspect-[4/3] rounded-sm overflow-hidden border border-studio-gold/10">
                <img 
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80" 
                  alt="Puberty Function Ceremony" 
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Service 04: Pre-Wedding Shoot */}
            <div className="bg-velvet-card bg-velvet-card-hover p-6 rounded-sm flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs text-gray-500 font-sans tracking-widest font-bold">04</span>
                  <Heart className="w-5 h-5 text-studio-gold stroke-[1.2]" />
                </div>
                <h4 className="font-cinzel text-xl text-studio-gold font-medium tracking-wide mb-4">
                  Pre-Wedding Shoot
                </h4>
              </div>
              <div className="mt-4 p-4 border border-dashed border-studio-gold/15 bg-studio-black rounded-sm text-center">
                <div className="w-10 h-10 rounded-full border border-studio-gold/30 flex items-center justify-center mx-auto mb-3">
                  <HeartHandshake className="w-4 h-4 text-studio-gold" />
                </div>
                <p className="text-gray-400 italic text-[11px] font-serif leading-relaxed px-1">
                  "Capturing the beginning of your forever thread."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: CURATED CAPTURES / PORTFOLIO (Image 3 Reference) */}
      <section className="w-full max-w-7xl px-6 py-20 md:py-28">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-3xl md:text-5xl text-studio-gold tracking-widest font-bold">
            Curated Captures
          </h2>
          <div className="w-20 h-[1px] bg-studio-gold/30 mx-auto mt-4"></div>
        </div>

        {/* Portfolio Dynamic Cards */}
        <div className="flex flex-col gap-12">
          
          {/* Card 1: Wedding Shoot */}
          <div className="w-full flex flex-col md:flex-row border border-dashed border-studio-gold/20 p-6 md:p-8 bg-[#0c0c0e] rounded-sm gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-video md:aspect-[3/2] overflow-hidden border border-studio-gold/15 rounded-sm">
              <img 
                src="/wedding_4.jpg" 
                alt="Wedding Shoot Portfolio" 
                className="w-full h-full object-cover hover:scale-[1.03] transition-all duration-700"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="flex justify-between items-center w-full mb-4">
                <span className="text-[10px] tracking-widest text-gray-500 font-sans uppercase">FEATURED GALLERY</span>
                <Heart className="w-5 h-5 text-studio-gold fill-studio-gold/10" />
              </div>
              <h3 className="font-cinzel text-2xl md:text-3xl text-studio-gold font-medium mb-3">
                Wedding Shoot
              </h3>
              <p className="text-gray-400 text-sm font-sans font-light leading-relaxed mb-6">
                Eternalizing the sacred threads of union. We construct romantic layouts with cinematic framing to capture glances, ceremonies, and royal expressions.
              </p>
              <div className="flex gap-3 mb-6">
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] tracking-widest text-studio-gold font-sans font-bold uppercase rounded-full">
                  • SIGNATURE
                </span>
                <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] tracking-widest text-studio-gold font-sans font-bold uppercase rounded-full">
                  FULL DAY
                </span>
              </div>
              <Link to="/gallery" className="text-xs text-studio-gold hover:text-studio-gold-hover font-semibold tracking-widest underline underline-offset-4 decoration-studio-gold/30 hover:decoration-studio-gold transition-colors font-sans">
                EXPLORE ALBUM
              </Link>
            </div>
          </div>

          {/* Card 2: Post Wedding Shoot with Smartphone Frame */}
          <div className="w-full flex flex-col md:flex-row-reverse border border-dashed border-studio-gold/20 p-6 md:p-8 bg-[#0c0c0e] rounded-sm gap-8 items-center">
            
            {/* Smartphone Outline Container */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
              <div className="relative w-64 md:w-72 aspect-[9/19] bg-zinc-950 border-[6px] border-zinc-800 rounded-[36px] shadow-2xl p-2.5 flex items-center justify-center ring-2 ring-studio-gold/25">
                
                {/* Speaker/Camera notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-zinc-800 rounded-full z-20 flex items-center justify-center">
                  <div className="w-12 h-1 bg-zinc-900 rounded-full mr-2"></div>
                  <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full"></div>
                </div>

                {/* Smartphone Screen Image */}
                <div className="w-full h-full rounded-[28px] overflow-hidden relative">
                  <img 
                    src="/postwedding_1.jpg" 
                    alt="Smartphone post wedding mockup" 
                    className="w-full h-full object-cover filter contrast-110"
                  />
                  {/* Subtle dark layout */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-4 right-4 text-left z-10">
                    <span className="text-[8px] tracking-widest text-studio-gold uppercase font-sans">DK LIVE GALLERY</span>
                    <h5 className="font-cinzel text-xs text-white tracking-wider mt-0.5">The Crimson Grace</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="flex justify-between items-center w-full mb-4">
                <span className="text-[10px] tracking-widest text-gray-500 font-sans uppercase">LIVE CAPTURE</span>
                <Sparkles className="w-5 h-5 text-studio-gold" />
              </div>
              <h3 className="font-cinzel text-2xl md:text-3xl text-studio-gold font-medium mb-3">
                Post Wedding Shoot
              </h3>
              <p className="text-gray-400 text-sm font-sans font-light leading-relaxed mb-6">
                Artisanal romance in quiet, high-fashion landscapes. We isolate your emotions against the sweeping tides, dramatic sunsets, and peaceful shores.
              </p>
              <Link to="/contact" className="px-6 py-3 bg-studio-gold hover:bg-studio-gold-hover text-studio-black font-sans font-bold text-xs tracking-widest transition-all rounded-sm glow-gold hover:scale-[1.02]">
                INQUIRE AVAILABILITY
              </Link>
            </div>
          </div>

          {/* Card 3: Baby Shower Function */}
          <div className="w-full flex flex-col md:flex-row border border-dashed border-studio-gold/20 p-6 md:p-8 bg-[#0c0c0e] rounded-sm gap-8 items-center">
            <div className="w-full md:w-1/2 aspect-video md:aspect-[3/2] overflow-hidden border border-studio-gold/15 rounded-sm">
              <img 
                src="/baby_3.jpg" 
                alt="Baby Shoot Picnic with Teddies" 
                className="w-full h-full object-cover hover:scale-[1.03] transition-all duration-700"
              />
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <div className="flex justify-between items-center w-full mb-4">
                <span className="text-[10px] tracking-widest text-gray-500 font-sans uppercase">DECOR & AMBIANCE</span>
                <Smile className="w-5 h-5 text-studio-gold" />
              </div>
              <h3 className="font-cinzel text-2xl md:text-3xl text-studio-gold font-medium mb-3">
                Baby Shower Function
              </h3>
              <p className="text-gray-400 text-sm font-sans font-light leading-relaxed mb-6">
                Celebrating the first weave of a new life. We document standard and luxury tablescapes, crystal glassware, candles, and families gathering in warmth.
              </p>
              <div className="flex gap-4 text-xs font-sans text-studio-gold/75 tracking-wider font-bold mb-6">
                <span>⏱ 4 HOURS SESSIONS</span>
                <span>📸 100+ HI-FI EDITS</span>
              </div>
              <Link to="/gallery" className="text-xs text-studio-gold hover:text-studio-gold-hover font-semibold tracking-widest underline underline-offset-4 decoration-studio-gold/30 hover:decoration-studio-gold transition-colors font-sans">
                EXPLORE GALLERY
              </Link>
            </div>
          </div>

        </div>

        {/* Decorative Gold Leaf Emblem at base */}
        <div className="flex justify-center mt-20 text-studio-gold/30">
          <div className="flex flex-col items-center">
            <div className="w-[1px] h-10 bg-studio-gold/20 mb-3"></div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 stroke-[1.2]" strokeLinecap="round">
              <path d="M12 2C12 2 7 8 7 13C7 16 9 19 12 22C15 19 17 16 17 13C17 8 12 2 12 2Z" />
              <path d="M12 22V10" />
              <path d="M8.5 12C8.5 12 10.5 11 12 13" />
              <path d="M15.5 15C15.5 15 13.5 14 12 16" />
            </svg>
            <div className="w-16 h-[1.5px] bg-studio-gold/30 mt-3"></div>
          </div>
        </div>

      </section>

      {/* SECTION 5: MODELING, LEGACY & EDITORIALS (Image 4 Reference) */}
      <section className="w-full bg-studio-black border-t border-dashed border-studio-gold/20 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          {/* Main monochrome highlight banner */}
          <div className="w-full border border-studio-gold/15 bg-[#0b0b0d] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 rounded-sm mb-16">
            <div className="w-full lg:w-2/5 aspect-[4/5] overflow-hidden rounded-sm border border-studio-gold/10">
              <img 
                src="/model_1.jpg" 
                alt="High contrast editorial modeling portrait" 
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>
            
            <div className="w-full lg:w-3/5 text-left flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.25em] text-studio-gold font-sans font-bold uppercase mb-4">
                CRAFTING MOMENTS
              </span>
              <h3 className="font-cinzel text-3xl md:text-5xl text-white tracking-wide font-bold leading-tight mb-8">
                Artisanal Photography for the Discriminating Eye
              </h3>
              <div className="w-20 h-[1px] bg-studio-gold/30 mb-8"></div>
              <p className="text-gray-400 font-sans text-sm md:text-base font-light leading-relaxed">
                For those who demand more than a simple shutter click. We study your texture, frame the depth, and use custom dramatic shadows to compile timeless high-contrast editorial assets.
              </p>
            </div>
          </div>

          {/* Cards Grid: Modeling & Baby Shoot */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            
            {/* Item 01: Modeling Photo Shoot */}
            <div className="border border-studio-gold/15 bg-velvet-card p-8 rounded-sm flex flex-col justify-between relative overflow-hidden group min-h-[350px]">
              {/* Backing symbol decoration */}
              <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Camera className="w-36 h-36 text-studio-gold stroke-[0.5]" />
              </div>
              
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800 mb-6">
                  <span className="text-xs text-gray-500 font-sans tracking-widest font-bold">01 / EDITORIAL</span>
                  <Sparkles className="w-5 h-5 text-studio-gold stroke-[1.2]" />
                </div>
                <h4 className="font-cinzel text-2xl text-studio-gold font-medium mb-4">
                  Modeling Photo Shoot
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed max-w-sm">
                  Elevate your portfolio with cinematic lighting and high-end fashion aesthetics. We specialize in capturing the texture of your style with sharp focus and professional color grading.
                </p>
              </div>
              
              <div className="mt-8 z-10 text-left">
                <Link to="/contact" className="px-6 py-2.5 bg-studio-gold hover:bg-studio-gold-hover text-studio-black font-sans font-bold text-xs tracking-widest transition-all rounded-sm inline-block">
                  INQUIRY
                </Link>
              </div>
            </div>

            {/* Item 02: Baby Photo Shoot */}
            <div className="border border-studio-gold/15 bg-velvet-card p-8 rounded-sm flex flex-col justify-between relative overflow-hidden group min-h-[350px]">
              {/* Backing symbol decoration */}
              <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Smile className="w-36 h-36 text-studio-gold stroke-[0.5]" />
              </div>
              
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-zinc-800 mb-6">
                  <span className="text-xs text-gray-500 font-sans tracking-widest font-bold">02 / LEGACY</span>
                  <Award className="w-5 h-5 text-studio-gold stroke-[1.2]" />
                </div>
                <h4 className="font-cinzel text-2xl text-studio-gold font-medium mb-4">
                  Baby Photo Shoot
                </h4>
                <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed max-w-sm">
                  Timeless, soft-lit portraits of your little ones. We use gentle, natural-feel textures and warm tones to preserve early memories in their absolute purest forms.
                </p>
              </div>
              
              <div className="mt-8 z-10 text-left">
                <Link to="/gallery" className="px-6 py-2.5 bg-studio-gold hover:bg-studio-gold-hover text-studio-black font-sans font-bold text-xs tracking-widest transition-all rounded-sm inline-block">
                  VIEW GALLERY
                </Link>
              </div>
            </div>

          </div>

          {/* Special center Callout Banner */}
          <div className="w-full max-w-4xl text-center py-16 px-6 border-y border-dashed border-studio-gold/20 flex flex-col items-center">
            
            <h4 className="font-serif italic text-3xl md:text-5xl text-studio-gold leading-tight mb-4 select-none">
              "Best and affordable for your special days"
            </h4>
            
            <p className="text-gray-400 font-sans text-xs md:text-sm tracking-widest uppercase mb-10 max-w-md">
              Excellence woven into every frame, tailored for your unique narrative.
            </p>

            <Link 
              to="/contact" 
              className="px-10 py-4 bg-studio-gold hover:bg-studio-gold-hover text-studio-black font-sans font-bold text-sm tracking-widest transition-all rounded-sm glow-gold hover:scale-[1.03] select-none"
            >
              BOOK NOW
            </Link>
            
          </div>

        </div>
      </section>

    </div>
  );
}
