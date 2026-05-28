import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Compass, Eye, ShieldCheck, Zap } from 'lucide-react';

const DrawingDivider = () => (
  <div className="flex justify-center text-studio-gold/25 my-8">
    <div className="flex flex-col items-center">
      <div className="w-[1px] h-8 bg-studio-gold/20 mb-2"></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 stroke-[1.2]">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
      <div className="w-12 h-[1px] bg-studio-gold/25 mt-2"></div>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Hero Banner Header */}
      <section className="w-full bg-[#0d0d0f] border-b border-dashed border-studio-gold/15 py-24 px-6 text-center relative overflow-hidden">
        {/* Background grids */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dfba6b03_1px,transparent_1px),linear-gradient(to_bottom,#dfba6b03_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-[10px] tracking-[0.25em] text-studio-gold font-sans font-bold uppercase mb-4 block">
            THE CHRONICLE OF DK
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl text-studio-gold tracking-widest font-bold mb-6">
            Artistry Behind The Lens
          </h2>
          <div className="w-20 h-[1.5px] bg-studio-gold/30 mx-auto mb-8"></div>
          <p className="text-gray-400 font-sans text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto">
            "Tailoring photographic heirlooms with deliberate lighting and meticulous framing. We document standard and landmark events for those who discriminate between common captures and fine art."
          </p>
        </div>
      </section>

      {/* Main Philosophy & Legacy (Image 4 Aesthetic) */}
      <section className="w-full max-w-7xl px-6 py-20 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left image block */}
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-studio-gold/10 to-transparent blur-lg opacity-75"></div>
          
          <div className="relative border border-studio-gold/15 bg-studio-black p-4 rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" 
              alt="Artisanal portrait in grey coat" 
              className="w-full aspect-[4/5] object-cover rounded-sm filter grayscale contrast-125 brightness-90"
            />
            
            {/* Compass corners overlay */}
            <div className="absolute top-8 left-8 text-studio-gold/40">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 stroke-[1.2]">
                <circle cx="12" cy="12" r="10" />
                <path d="m16.2 7.8-2 5.6-5.6 2 2-5.6 5.6-2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right content details */}
        <div className="w-full lg:w-1/2 text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[1.5px] bg-studio-gold"></div>
            <span className="text-[10px] tracking-widest text-studio-gold font-sans font-bold uppercase">
              CRAFTING EXPERIENCE
            </span>
          </div>

          <h3 className="font-cinzel text-2xl md:text-3xl text-white tracking-wide font-semibold mb-6">
            Documenting the Threads of Your Legacy Since 1996
          </h3>

          <div className="space-y-6 text-gray-400 font-sans text-sm md:text-base font-light leading-relaxed">
            <p>
              DK PHOTO STUDIO was conceived as a rejection of sterile, automated digital captures. We believe a photograph is a physical container of emotional resonance, structured through precise shadows and classical geometry.
            </p>
            <p>
              Under the creative leadership of our principal photographers, we merge elements of haute couture fashion editing with organic documentary filmmaking. The result is a signature portfolio that looks luxurious, timeless, and expensive.
            </p>
            <p>
              Whether it is a sacred Wedding Shoot, a pre-wedding seaside romance, a high-fashion Modeling Shoot, or intimate family ceremonies, we apply standard artisanal dedication to preserve your life's golden threads.
            </p>
          </div>

          {/* Quick numbers list */}
          <div className="grid grid-cols-3 gap-4 border-t border-dashed border-studio-gold/15 pt-8 mt-8">
            <div>
              <h5 className="font-cinzel text-xl md:text-2xl text-studio-gold font-bold">15+</h5>
              <p className="text-[10px] text-gray-500 font-sans uppercase tracking-widest mt-1">YEARS SERVICE</p>
            </div>
            <div>
              <h5 className="font-cinzel text-xl md:text-2xl text-studio-gold font-bold">850+</h5>
              <p className="text-[10px] text-gray-500 font-sans uppercase tracking-widest mt-1">GOLDEN ALBUMS</p>
            </div>
            <div>
              <h5 className="font-cinzel text-xl md:text-2xl text-studio-gold font-bold">120+</h5>
              <p className="text-[10px] text-gray-500 font-sans uppercase tracking-widest mt-1">AWARDS WON</p>
            </div>
          </div>

        </div>
      </section>

      {/* Drawing Divider symbol */}
      <DrawingDivider />

      {/* Creative values Grid */}
      <section className="w-full bg-[#0d0d0f] border-y border-dashed border-studio-gold/15 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.25em] text-studio-gold font-sans font-bold uppercase block mb-3">
              CREATIVE METRICS
            </span>
            <h3 className="font-cinzel text-2xl md:text-3xl text-studio-gold font-semibold">
              Our Photographic Standards
            </h3>
            <div className="w-16 h-[1px] bg-studio-gold/25 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Metric 1 */}
            <div className="p-6 bg-studio-black border border-studio-gold/10 rounded-sm">
              <Eye className="w-6 h-6 text-studio-gold mb-4 stroke-[1.2]" />
              <h4 className="font-cinzel text-lg text-white font-medium mb-3">Deliberate Vision</h4>
              <p className="text-xs text-gray-500 font-sans font-light leading-relaxed">
                We plan every composition prior to the shutter press. No mindless burst shots, only thoughtful emotional documentation.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-6 bg-studio-black border border-studio-gold/10 rounded-sm">
              <Award className="w-6 h-6 text-studio-gold mb-4 stroke-[1.2]" />
              <h4 className="font-cinzel text-lg text-white font-medium mb-3">Signature Grade</h4>
              <p className="text-xs text-gray-500 font-sans font-light leading-relaxed">
                Our custom editing processes render deep B&W tones, velvety textures, and gold gradient light curves.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-6 bg-studio-black border border-studio-gold/10 rounded-sm">
              <Zap className="w-6 h-6 text-studio-gold mb-4 stroke-[1.2]" />
              <h4 className="font-cinzel text-lg text-white font-medium mb-3">Artisanal Gear</h4>
              <p className="text-xs text-gray-500 font-sans font-light leading-relaxed">
                Using Leica and Hasselblad medium format cameras to capture the crisp fabric textures and fine details.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-6 bg-studio-black border border-studio-gold/10 rounded-sm">
              <ShieldCheck className="w-6 h-6 text-studio-gold mb-4 stroke-[1.2]" />
              <h4 className="font-cinzel text-lg text-white font-medium mb-3">Legacy Archive</h4>
              <p className="text-xs text-gray-500 font-sans font-light leading-relaxed">
                All finished projects are archived in double-redundant local arrays, ensuring your family lineage remains secured forever.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* The Gear Section (High-end details) */}
      <section className="w-full max-w-7xl px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto border border-dashed border-studio-gold/15 bg-velvet-card p-8 md:p-12 rounded-sm relative overflow-hidden">
          
          <div className="absolute top-4 left-4"><Compass className="w-5 h-5 text-studio-gold/30" /></div>
          <div className="absolute bottom-4 right-4"><Compass className="w-5 h-5 text-studio-gold/30" /></div>
          
          <span className="text-[9px] tracking-widest text-gray-500 font-sans uppercase">LUXURY OPTICS</span>
          <h3 className="font-cinzel text-xl md:text-2xl text-studio-gold font-semibold tracking-widest mt-2 mb-6">
            EQUIPMENT SPECIFICATION
          </h3>
          
          <div className="w-12 h-[1px] bg-studio-gold/30 mx-auto mb-8"></div>
          
          <ul className="text-xs md:text-sm font-sans text-gray-400 space-y-4 max-w-md mx-auto text-left leading-relaxed">
            <li className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-white font-medium">Medium Format Systems</span>
              <span>Hasselblad H6D-100c & Leica S3</span>
            </li>
            <li className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-white font-medium">Artisanal Glass Prime Lenses</span>
              <span>Summicron-S 45mm & Noctilux 50mm f/0.95</span>
            </li>
            <li className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-white font-medium">Cinematic Flight Systems</span>
              <span>DJI Inspire 3 (8K Full Frame ProRes)</span>
            </li>
            <li className="flex justify-between pb-2">
              <span className="text-white font-medium">Luxury Album Leather Binding</span>
              <span>Hand-stitched Florentine Vellum</span>
            </li>
          </ul>

          <div className="mt-10">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-studio-gold hover:bg-studio-gold-hover text-studio-black font-sans font-bold text-xs tracking-widest transition-all rounded-sm glow-gold hover:scale-[1.02]"
            >
              BOOK A SESSION
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
