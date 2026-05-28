import { Link } from 'react-router-dom';
import { Camera, Compass, Film, BookOpen, Layers, Milestone, CheckCircle2, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../components/CartContext';

const DrawingDivider = () => (
  <div className="flex justify-center text-studio-gold/25 my-8">
    <div className="flex flex-col items-center">
      <div className="w-[1px] h-8 bg-studio-gold/20 mb-2"></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 stroke-[1.2]">
        <circle cx="12" cy="12" r="10" />
        <path d="m10 15 5-3-5-3v6Z" />
      </svg>
      <div className="w-12 h-[1px] bg-studio-gold/25 mt-2"></div>
    </div>
  </div>
);

export default function Services() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const packages = [
    {
      id: "pkg_signature_wedding",
      name: "The Signature Wedding",
      price: "$2,850",
      description: "Complete full-day premium wedding documentation featuring dual principal photographers, luxury lighting arrays, and Florentine vellum prints.",
      inclusions: [
        "10 Hours Coverage by principal team",
        "Second professional camera operator",
        "500+ Fully edited signature vellum assets",
        "Hand-stitched leather vellum layout album",
        "Digital archive delivery (Double-redundant secure backup)",
        "Complimentary outdoor sunset couple session"
      ],
      tag: "POPULAR SELECT"
    },
    {
      id: "pkg_editorial_fashion",
      name: "The Editorial Fashion",
      price: "$1,650",
      description: "High-contrast, dramatic studio and outdoor modeling portfolio shoots configured with state-of-the-art camera systems and fashion directors.",
      inclusions: [
        "5 Hours studio/location session",
        "Creative moodboard & fashion styling direction",
        "80+ High-fidelity hand-retouched editorial assets",
        "Studio lighting technicians and setups",
        "Full digital licensing rights for publication",
        "Leica medium-format system configuration"
      ],
      tag: "FASHION CHIC"
    },
    {
      id: "pkg_landmark_event",
      name: "The Landmark Event",
      price: "$1,200",
      description: "Comprehensive coverage of birthdays, ear piercing ceremonies, puberty functions, and corporate banquets. Styled with candle-light clarity.",
      inclusions: [
        "6 Hours active event coverage",
        "Single professional camera operator",
        "150+ Signature high-resolution edits",
        "Online secure sharing gallery (1 year access)",
        "Drone flight cinematic angles (1 hour)",
        "Standard layout bound album"
      ],
      tag: "STANDARD CEREMONY"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Page Header */}
      <section className="w-full bg-[#0d0d0f] border-b border-dashed border-studio-gold/15 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] tracking-[0.25em] text-studio-gold font-sans font-bold uppercase mb-3 block">
            OUR CAPABILITIES
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl text-studio-gold tracking-widest font-bold mb-4">
            Services & Packages
          </h2>
          <p className="text-gray-500 font-sans text-xs md:text-sm font-light tracking-wide max-w-md mx-auto mt-2">
            Select one or more specialized tiers to add to your custom inquiry bag, then dispatch instantly on WhatsApp!
          </p>
          <div className="w-16 h-[1px] bg-studio-gold/30 mx-auto mt-4"></div>
        </div>
      </section>

      {/* Core Specialties Grid */}
      <section className="w-full max-w-7xl px-6 py-20">
        
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.25em] text-studio-gold font-sans font-bold uppercase block mb-3">
            TECHNICAL ARSENAL
          </span>
          <h3 className="font-cinzel text-2xl md:text-3xl text-white font-semibold">
            Specialist Offerings
          </h3>
          <div className="w-16 h-[1px] bg-studio-gold/25 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* specialty 1 */}
          <div className="p-8 border border-studio-gold/10 bg-velvet-card text-center rounded-sm">
            <div className="w-12 h-12 rounded-full border border-studio-gold/20 flex items-center justify-center mx-auto mb-6 bg-studio-black text-studio-gold">
              <Camera className="w-5 h-5 stroke-[1.2]" />
            </div>
            <h4 className="font-cinzel text-xl text-studio-gold font-medium mb-3">
              Artisanal Photography
            </h4>
            <p className="text-xs text-gray-500 font-sans font-light leading-relaxed max-w-xs mx-auto">
              Standard B&W tones, custom gold gradient lighting, and vintage-grade composition designed to deliver physical heirlooms.
            </p>
          </div>

          {/* specialty 2 */}
          <div className="p-8 border border-studio-gold/10 bg-velvet-card text-center rounded-sm">
            <div className="w-12 h-12 rounded-full border border-studio-gold/20 flex items-center justify-center mx-auto mb-6 bg-studio-black text-studio-gold">
              <Film className="w-5 h-5 stroke-[1.2]" />
            </div>
            <h4 className="font-cinzel text-xl text-studio-gold font-medium mb-3">
              Drone Cinematography
            </h4>
            <p className="text-xs text-gray-500 font-sans font-light leading-relaxed max-w-xs mx-auto">
              Wide-angle drone sweeps captured with 8K ProRes systems to isolate couples and venues against sweeping natural horizons.
            </p>
          </div>

          {/* specialty 3 */}
          <div className="p-8 border border-studio-gold/10 bg-velvet-card text-center rounded-sm">
            <div className="w-12 h-12 rounded-full border border-studio-gold/20 flex items-center justify-center mx-auto mb-6 bg-studio-black text-studio-gold">
              <BookOpen className="w-5 h-5 stroke-[1.2]" />
            </div>
            <h4 className="font-cinzel text-xl text-studio-gold font-medium mb-3">
              Album Designing
            </h4>
            <p className="text-xs text-gray-500 font-sans font-light leading-relaxed max-w-xs mx-auto">
              Exquisite hand-bound layouts on Florentine vellum and imported Italian textured leather bindings. Made to outlast centuries.
            </p>
          </div>

        </div>

      </section>

      {/* Drawing Divider */}
      <DrawingDivider />

      {/* Pricing Cards Section */}
      <section className="w-full bg-[#0d0d0f] border-y border-dashed border-studio-gold/15 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.25em] text-studio-gold font-sans font-bold uppercase block mb-3">
              FINANCIAL TRANSLATION
            </span>
            <h3 className="font-cinzel text-2xl md:text-3xl text-studio-gold font-semibold">
              Curated Studio Investment
            </h3>
            <div className="w-16 h-[1px] bg-studio-gold/25 mx-auto mt-4"></div>
          </div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {packages.map((pkg, idx) => {
              const isPopular = pkg.tag === 'POPULAR SELECT';
              const isInCart = cartItems.some((i) => i.id === pkg.id && i.category === 'Studio Package');
              return (
                <div 
                  key={idx}
                  className={`relative p-8 rounded-sm flex flex-col justify-between border transition-all duration-300 ${
                    isPopular 
                      ? 'border-studio-gold bg-studio-black glow-gold' 
                      : 'border-studio-gold/10 bg-velvet-card hover:border-studio-gold/30'
                  }`}
                >
                  {/* Tag badge for high-end look */}
                  <div className="absolute top-4 right-4 bg-zinc-900 border border-zinc-800 text-[8px] tracking-widest text-studio-gold font-sans font-bold px-2 py-0.5 rounded-full">
                    {pkg.tag}
                  </div>

                  <div>
                    <h4 className="font-cinzel text-2xl text-white font-medium tracking-wide mb-2">
                      {pkg.name}
                    </h4>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="font-cinzel text-3xl md:text-4xl text-studio-gold font-bold">
                        {pkg.price}
                      </span>
                      <span className="text-[10px] text-gray-500 font-sans">USD INVST.</span>
                    </div>

                    <p className="text-gray-400 text-xs md:text-sm font-sans font-light leading-relaxed mb-6 border-b border-zinc-800 pb-6">
                      {pkg.description}
                    </p>

                    {/* Inclusions list */}
                    <ul className="space-y-4 text-xs font-sans text-gray-400 mb-8 text-left leading-relaxed">
                      {pkg.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-studio-gold flex-shrink-0 mt-0.5 stroke-[1.5]" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {isInCart ? (
                    <button 
                      onClick={() => removeFromCart(pkg.id, 'Studio Package')}
                      className="w-full py-3 text-center font-sans font-bold text-xs tracking-widest transition-all rounded-sm bg-studio-gold/10 hover:bg-red-950/20 text-studio-gold hover:text-red-400 border border-studio-gold/20 hover:border-red-900/30 flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      ADDED (REMOVE FROM BAG)
                    </button>
                  ) : (
                    <button 
                      onClick={() => addToCart({
                        id: pkg.id,
                        title: pkg.name,
                        category: 'Studio Package',
                        price: pkg.price
                      })}
                      className={`w-full py-3 text-center font-sans font-bold text-xs tracking-widest transition-all rounded-sm flex items-center justify-center gap-2 ${
                        isPopular 
                          ? 'bg-studio-gold hover:bg-studio-gold-hover text-studio-black font-bold' 
                          : 'bg-zinc-900 border border-zinc-800 hover:border-studio-gold text-white'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      ADD TO INQUIRY BAG
                    </button>
                  )}

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* Frequently Asked Inquiries CTA */}
      <section className="w-full max-w-4xl px-6 py-20 text-center">
        <h3 className="font-cinzel text-xl md:text-2xl text-studio-gold font-semibold tracking-widest mb-4">
          HAVE A CUSTOM REQUIREMENT?
        </h3>
        <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed max-w-md mx-auto mb-8">
          We construct bespoke photography solutions for international destination weddings, multi-day shoots, or custom publishing requests. Let us tailor a proposal for you.
        </p>
        <Link 
          to="/contact" 
          className="px-8 py-3.5 bg-studio-gold hover:bg-studio-gold-hover text-studio-black font-sans font-bold text-xs tracking-widest transition-all rounded-sm glow-gold hover:scale-[1.02]"
        >
          CONTACT THE CREATIVE OFFICE
        </Link>
      </section>

    </div>
  );
}
