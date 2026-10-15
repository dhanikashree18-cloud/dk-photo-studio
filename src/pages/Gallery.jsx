import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '../components/Lightbox';
import { useCart } from '../components/CartContext';
import { ShoppingBag, Check } from 'lucide-react';

// Complete curated high-quality visual portfolio dataset
const galleryItems = [
  // Wedding Photography
  {
    id: 1,
    src: '/wedding_1.jpg',
    title: 'The Crimson Thread',
    category: 'Wedding Photography',
    description: 'A traditional South Indian couple leaning close against a shuttered gate, sharing a candid smile with floral garlands.',
  },
  {
    id: 2,
    src: '/wedding_2.jpg',
    title: 'Infinite Smiles',
    category: 'Wedding Photography',
    description: 'The bride and groom by a classical decorated pillar, sharing a look of absolute joy and laughter.',
  },
  {
    id: 3,
    src: '/wedding_3.jpg',
    title: 'Whispered Promises',
    category: 'Wedding Photography',
    description: 'An intimate glance under warm indoor lighting, highlighting fine gold jewelry and fresh jasmines.',
  },
  {
    id: 31,
    src: '/wedding_4.jpg',
    title: 'The Sacred Blessing',
    category: 'Wedding Photography',
    description: 'A touching moment as the groom kisses the bride during the ceremony, surrounded by blessings and family.',
  },

  // Post-Wedding Shoots
  {
    id: 4,
    src: '/postwedding_1.jpg',
    title: 'The Crimson Grace',
    category: 'Post-Wedding Shoots',
    description: 'An intimate portrait of a couple in traditional attire, with the bride in a rich red saree leaning gently against the groom.',
  },
  {
    id: 5,
    src: '/postwedding_2.jpg',
    title: 'Gilded Whispers',
    category: 'Post-Wedding Shoots',
    description: 'A radiant closeup of a couple embracing lovingly in golden-cream outfits, showing rich traditional details and henna designs.',
  },
  {
    id: 6,
    src: '/postwedding_3.jpg',
    title: 'Traditional Devotion',
    category: 'Post-Wedding Shoots',
    description: 'A romantic moment framed as the groom holds the bride\'s chin gently in a warm outdoor traditional session.',
  },
  {
    id: 61,
    src: '/postwedding_4.jpg',
    title: 'Golden Hour Park',
    category: 'Post-Wedding Shoots',
    description: 'A bright, lively three-panel collage capturing a modern couple sharing sweet moments and poses in an autumn-lit park.',
  },
  {
    id: 62,
    src: '/postwedding_5.jpg',
    title: 'Royal Vows',
    category: 'Post-Wedding Shoots',
    description: 'An elegant portrait of a couple in formal wedding attire, with the bride in a red silk saree embracing the groom in a black bandhgala.',
  },

  // Baby Shoots
  {
    id: 7,
    src: '/baby_1.jpg',
    title: 'Golden Outdoor Slumber',
    category: 'Baby Shoots',
    description: 'An adorable newborn sleeping peacefully in a woven basket surrounded by warm golden sunshine and cozy quilts.',
  },
  {
    id: 8,
    src: '/baby_2.jpg',
    title: 'Rustic Garden Cradle',
    category: 'Baby Shoots',
    description: 'A beautiful sleeping baby resting chin-on-hands inside a vintage wooden tub amidst summer wildflowers.',
  },
  {
    id: 9,
    src: '/baby_3.jpg',
    title: 'Teddy Bear Picnic',
    category: 'Baby Shoots',
    description: 'A lovely toddler sitting in a grassy meadow on a lace blanket, framed perfectly alongside three matching teddy bears.',
  },
  {
    id: 91,
    src: '/baby_4.jpg',
    title: 'Heirloom Fields',
    category: 'Baby Shoots',
    description: 'A joyful family portrait celebrating in the open grassy fields with parents lifting their baby in high spirits.',
  },
  {
    id: 92,
    src: '/baby_5.jpg',
    title: 'Monochrome Motherhood',
    category: 'Baby Shoots',
    description: 'A deep emotional black and white closeup portrait of a mother holding her newborn baby close to her shoulder.',
  },

  // Fashion Photography
  {
    id: 10,
    src: '/model_1.jpg',
    title: 'Minimalist Ivory Suite',
    category: 'Fashion Photography',
    description: 'High-contrast fashion portrait featuring a model in a sharp white double-breasted suit sitting on a transparent acrylic chair.',
  },
  {
    id: 11,
    src: '/model_2.jpg',
    title: 'Earthtone Editorial',
    category: 'Fashion Photography',
    description: 'Chic studio portrait capturing a model posing on an ivory cube setup against a warm tan backdrop.',
  },
  {
    id: 12,
    src: '/model_3.jpg',
    title: 'Sartorial Splendor',
    category: 'Fashion Photography',
    description: 'An elegant outdoor portrait of a young lady in a soft pastel green designer saree sitting gracefully on mossy stone steps.',
  },
  {
    id: 121,
    src: '/model_4.jpg',
    title: 'Floral Carousel swing',
    category: 'Baby Shoots', // Note: Image 4 is actually a baby swing! Let's categorize it as Baby Shoots to keep layout perfect.
    description: 'An adorable toddler dressed in a soft pink frill dress sitting inside a custom floral swing surrounded by roses and cloud beds.',
  },
  {
    id: 122,
    src: '/model_5.jpg',
    title: 'Crimson Power Suit',
    category: 'Fashion Photography',
    description: 'Bold professional studio modeling portrait featuring a striking red suit against a clean neutral grey background.',
  },

  // Event Coverage
  {
    id: 13,
    src: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    title: 'Crystal & Candlelight',
    category: 'Event Coverage',
    description: 'Exquisite corporate gala detail shot focusing on crystal dinnerware and flickering candles.',
  },
  {
    id: 14,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    title: 'Metropolitan Banquet',
    category: 'Event Coverage',
    description: 'Wide-angle ambient framing of standard banquets, speeches, and client laughs.',
  },
  {
    id: 15,
    src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    title: 'The Grand Entrance',
    category: 'Event Coverage',
    description: 'Spontaneous energy and live lighting captures during musical event entries.',
  },
];

const categories = [
  'All',
  'Wedding Photography',
  'Post-Wedding Shoots',
  'Baby Shoots',
  'Fashion Photography',
  'Event Coverage'
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Filter images based on state selection
  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Page Header */}
      <section className="w-full bg-[#0d0d0f] border-b border-dashed border-studio-gold/15 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] tracking-[0.25em] text-studio-gold font-sans font-bold uppercase mb-3 block">
            STUDIO ARCHIVES
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl text-studio-gold tracking-widest font-bold mb-4">
            Curated Gallery
          </h2>
          <p className="text-gray-500 font-sans text-xs md:text-sm font-light tracking-wide max-w-md mx-auto mt-2">
            Select items you love to add them to your inquiry bag, then complete your order directly on WhatsApp!
          </p>
          <div className="w-16 h-[1px] bg-studio-gold/30 mx-auto mt-4"></div>
        </div>
      </section>

      {/* Filter Tabs Navigation */}
      <section className="w-full px-6 py-8 border-b border-dashed border-studio-gold/10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3 font-sans text-xs md:text-sm tracking-wider font-bold">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 transition-all duration-300 relative uppercase ${
                  isActive ? 'text-studio-gold' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {cat}
                {isActive && (
                  <motion.div 
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-studio-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Photography Grid */}
      <section className="w-full max-w-7xl px-6 py-16 md:py-24">
        
        {/* Render filtered items */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const isInCart = cartItems.some((i) => i.id === item.id && i.category === item.category);
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative border border-studio-gold/10 hover:border-studio-gold/35 p-3 bg-velvet-card rounded-sm transition-all duration-500 hover:scale-[1.02] shadow-xl flex flex-col justify-between"
                >
                  
                  <div>
                    {/* Photo frame */}
                    <div 
                      className="relative aspect-[3/2] overflow-hidden rounded-sm border border-studio-gold/5 bg-zinc-950 cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      {/* Backdrop shading hover layer */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                      
                      <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover filter contrast-[1.08] transition-transform duration-700 group-hover:scale-108"
                        loading="lazy"
                      />
                      
                      {/* Zoom Indicator */}
                      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-60 transition-opacity z-20 text-studio-gold scale-75">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 stroke-[1.2]">
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                    </div>

                    {/* Metadata overlay text */}
                    <div className="mt-4 text-left px-1">
                      <span className="text-[9px] font-sans text-studio-gold/75 tracking-widest uppercase font-bold">
                        {item.category}
                      </span>
                      <h4 className="font-cinzel text-lg text-white font-medium tracking-wide mt-1 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-[11px] font-sans font-light leading-relaxed mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Add to Inquiry/Cart Button */}
                  <div className="mt-6 pt-3 border-t border-dashed border-studio-gold/10 px-1">
                    {isInCart ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFromCart(item.id, item.category);
                        }}
                        className="w-full py-2 bg-studio-gold/10 hover:bg-red-950/20 text-studio-gold hover:text-red-400 border border-studio-gold/20 hover:border-red-900/30 rounded-sm text-[10px] tracking-widest font-sans font-bold transition-all duration-300 flex items-center justify-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5" />
                        ADDED TO BAG (REMOVE)
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart({
                            id: item.id,
                            title: item.title,
                            category: item.category,
                            src: item.src
                          });
                        }}
                        className="w-full py-2 bg-zinc-900 hover:bg-studio-gold text-white hover:text-studio-black border border-zinc-800 hover:border-studio-gold rounded-sm text-[10px] tracking-widest font-sans font-bold transition-all duration-300 flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        ADD TO INQUIRY BAG
                      </button>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty portfolio statement if no items */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-sans tracking-widest">
            NO PORTFOLIO ASSETS AVAILABLE IN THIS CATEGORY.
          </div>
        )}

      </section>

      {/* Lightbox Overlay rendering */}
      <Lightbox
        images={filteredItems}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />

    </div>
  );
}
