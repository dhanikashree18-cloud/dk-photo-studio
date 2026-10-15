import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0d0d0e] border-t border-dashed border-studio-gold/10 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Branding header in Gold Cinzel */}
        <h2 className="font-cinzel text-3xl md:text-4xl tracking-widest text-studio-gold font-bold mb-8">
          DK PHOTO STUDIO
        </h2>

        {/* Navigation links formatted exactly as mockups */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-10 text-xs md:text-sm font-semibold tracking-widest font-sans">
          <a 
            href="https://instagram.com/_._shrxx_._18_._" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-studio-gold underline underline-offset-4 decoration-studio-gold/45 hover:decoration-studio-gold transition-colors"
          >
            INSTAGRAM
          </a>
           <a 
            href="https://portfolio-mu-five-ovu5ei80zv.vercel.app/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-gray-400 hover:text-studio-gold underline underline-offset-4 decoration-studio-gold/45 hover:decoration-studio-gold transition-colors"
          >
          PORTFOLIO
          </a>
          <Link 
            to="/contact" 
            className="text-gray-400 hover:text-studio-gold underline underline-offset-4 decoration-studio-gold/45 hover:decoration-studio-gold transition-colors"
          >
            INQUIRY
          </Link>
          <Link 
            to="/about" 
            className="text-gray-400 hover:text-studio-gold underline underline-offset-4 decoration-studio-gold/45 hover:decoration-studio-gold transition-colors"
          >
            JOURNAL
          </Link>
        </div>

        {/* Thin divider line */}
        <div className="w-24 h-[1px] bg-studio-gold/25 mb-8"></div>

        {/* Copyright notice matching mockups */}
        <p className="text-[10px] md:text-xs text-gray-500 tracking-widest font-sans">
          &copy; {currentYear} DK PHOTO STUDIO. ALL THREADS RESERVED.
        </p>

      </div>
    </footer>
  );
}
