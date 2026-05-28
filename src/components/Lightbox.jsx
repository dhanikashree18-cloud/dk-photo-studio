import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  // Support keyboard arrow keys navigation and prevent body scrolling when open
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 py-6 px-4 backdrop-blur-md select-none"
        onClick={onClose}
      >
        {/* Top bar details inside Lightbox */}
        <div 
          className="max-w-7xl w-full mx-auto flex items-center justify-between z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <span className="text-[10px] uppercase font-sans tracking-widest text-studio-gold">
              {currentImage.category}
            </span>
            <h3 className="font-cinzel text-sm md:text-lg text-white font-semibold mt-0.5">
              {currentImage.title}
            </h3>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-white/70 hover:text-studio-gold bg-white/5 hover:bg-white/10 rounded-full transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center: Interactive Image slide wrapper */}
        <div className="flex-grow flex items-center justify-center relative w-full max-w-5xl mx-auto my-4">
          
          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-2 md:left-4 z-10 p-3 text-white/65 hover:text-studio-gold bg-white/5 hover:bg-white/10 rounded-full transition-all backdrop-blur-sm"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image slide */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex items-center justify-center p-2 max-h-[70vh] md:max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="max-w-full max-h-full object-contain rounded border border-studio-gold/10 glow-gold shadow-2xl"
            />
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-2 md:right-4 z-10 p-3 text-white/65 hover:text-studio-gold bg-white/5 hover:bg-white/10 rounded-full transition-all backdrop-blur-sm"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom bar summary */}
        <div 
          className="max-w-7xl w-full mx-auto text-center z-10 text-xs text-gray-500 font-sans tracking-widest"
          onClick={(e) => e.stopPropagation()}
        >
          <span>
            {currentIndex + 1} / {images.length}
          </span>
          {currentImage.description && (
            <p className="mt-1 text-gray-400 max-w-md mx-auto line-clamp-1">
              "{currentImage.description}"
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
