import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';

export default function Navbar() {
  const location = useLocation();
  const { cartItems } = useCart();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-studio-black/90 backdrop-blur-md border-b border-dashed border-studio-gold/25 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        
        {/* Left: Branding */}
        <Link to="/" className="text-center group select-none shrink-0">
          <h1 className="font-cinzel text-lg md:text-2xl lg:text-3xl font-bold tracking-widest text-studio-gold transition-colors duration-300 group-hover:text-studio-gold-hover">
            DK PHOTO STUDIO
          </h1>
        </Link>

        {/* Center: Static Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 lg:px-4 py-2 font-sans text-[11px] lg:text-xs tracking-widest font-bold transition-all duration-300 ${
                  isActive
                    ? 'text-studio-gold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-studio-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Inquiry Quick Link with Dynamic Badge Count */}
        <Link
          to="/contact"
          className="text-studio-gold hover:text-studio-gold-hover p-2 transition-colors relative flex items-center justify-center"
          aria-label="Inquire Now"
        >
          <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
          {cartItems.length > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
              {cartItems.length}
            </span>
          )}
        </Link>

      </div>

      {/* Mobile Navigation Bar (visible on small screens) */}
      <nav className="md:hidden border-t border-dashed border-studio-gold/10 px-2 py-2 flex items-center justify-center gap-1 overflow-x-auto">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-1.5 font-sans text-[9px] tracking-widest font-bold transition-all duration-300 whitespace-nowrap rounded-sm ${
                isActive
                  ? 'text-studio-gold bg-studio-gold/10'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
