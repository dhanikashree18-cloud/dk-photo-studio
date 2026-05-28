import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Check, AlertCircle, Trash2, Calendar, User, FileText, Info } from 'lucide-react';
import { useCart } from '../components/CartContext';

export default function Contact() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const eventTypes = [
    'Wedding Photography',
    'Pre-Wedding Shoots',
    'Baby Shoots',
    'Fashion Photography',
    'Event Coverage',
    'Custom Request'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear field error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Please provide a valid phone number.';
    }

    if (!formData.eventType) tempErrors.eventType = 'Please select an event type.';
    if (!formData.date) tempErrors.date = 'Please select a preferred event date.';
    if (!formData.message.trim()) tempErrors.message = 'Please share some details about your session.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Build WhatsApp message content details matching requested customer items
      const selectedItemsText = cartItems.length > 0 
        ? cartItems.map((item, idx) => `• [${item.category}] ${item.title}${item.price ? ` (${item.price})` : ''}`).join('\n')
        : 'None selected';

      const whatsappText = `*DK PHOTO STUDIO BOOKING INQUIRY*%0A` +
        `----------------------------------------%0A` +
        `*Customer Details:*%0A` +
        `• Name: ${formData.name}%0A` +
        `• Email: ${formData.email}%0A` +
        `• Phone: ${formData.phone}%0A` +
        `• Date: ${formData.date}%0A` +
        `• Category: ${formData.eventType}%0A%0A` +
        `*Selected Items / Services:*%0A` +
        `${encodeURIComponent(selectedItemsText)}%0A%0A` +
        `*Message / Session Details:*%0A` +
        `"${formData.message}"%0A` +
        `----------------------------------------%0A` +
        `Sent via DK Photo Studio Online Portal`;

      // Dispatch to WhatsApp
      const whatsappUrl = `https://wa.me/919790381026?text=${whatsappText}`;
      
      // Open in window
      window.open(whatsappUrl, '_blank');

      setIsSubmitted(true);
      clearCart();
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Page Header */}
      <section className="w-full bg-[#0d0d0f] border-b border-dashed border-studio-gold/15 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] tracking-[0.25em] text-studio-gold font-sans font-bold uppercase mb-3 block">
            SECURE A SESSION
          </span>
          <h2 className="font-cinzel text-4xl md:text-5xl text-studio-gold tracking-widest font-bold mb-4">
            Booking & Contact
          </h2>
          <div className="w-16 h-[1px] bg-studio-gold/30 mx-auto"></div>
        </div>
      </section>

      {/* Main Form & details section */}
      <section className="w-full max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Contact Info & Cart Panel */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-6 h-[1.5px] bg-studio-gold"></div>
            <span className="text-[10px] tracking-widest text-studio-gold font-sans font-bold uppercase">
              STUDIO INQUIRIES
            </span>
          </div>

          <h3 className="font-cinzel text-2xl md:text-3xl text-white tracking-wide font-semibold mb-2">
            Connect With The Creative Office
          </h3>

          <p className="text-gray-400 font-sans text-sm md:text-base font-light leading-relaxed mb-4">
            We operate by private appointment only. Get in touch to schedule a studio visit or request a custom package call.
          </p>

          {/* Cart Bag list display */}
          <div className="w-full border border-dashed border-studio-gold/20 p-6 rounded-sm bg-[#0c0c0e]">
            <h4 className="font-cinzel text-xs text-studio-gold font-bold tracking-widest uppercase mb-4 flex items-center justify-between">
              <span>SELECTED ITEMS BAG</span>
              <span className="bg-studio-gold/15 text-studio-gold px-2 py-0.5 rounded text-[10px]">
                {cartItems.length} items
              </span>
            </h4>

            {cartItems.length === 0 ? (
              <div className="py-6 text-center text-gray-500 font-sans text-xs flex flex-col items-center gap-2">
                <Info className="w-5 h-5 text-gray-600 stroke-[1.5]" />
                <p>No photos or packages selected yet.</p>
                <p className="text-[10px] text-gray-600">Browse the Gallery and Services to add items to your custom booking request.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3 p-3 bg-velvet-card border border-studio-gold/10 rounded-sm">
                    <div className="flex items-center gap-3">
                      {item.src && (
                        <img 
                          src={item.src} 
                          alt="" 
                          className="w-10 h-10 object-cover border border-studio-gold/15 rounded bg-zinc-950 flex-shrink-0"
                        />
                      )}
                      <div className="text-left leading-snug">
                        <span className="text-[8px] uppercase tracking-wider text-studio-gold font-sans block">{item.category}</span>
                        <h5 className="font-sans text-xs text-white font-medium line-clamp-1">{item.title}</h5>
                        {item.price && (
                          <span className="text-[10px] text-gray-400 font-sans">{item.price}</span>
                        )}
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id, item.category)}
                      className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 font-sans text-xs md:text-sm tracking-wide">
            
            <div className="flex items-start gap-4 p-5 bg-velvet-card border border-studio-gold/10 rounded-sm">
              <MapPin className="w-5 h-5 text-studio-gold stroke-[1.2] mt-0.5" />
              <div>
                <h5 className="font-cinzel text-sm text-white font-medium mb-1">STUDIO ADDRESS</h5>
                <p className="text-gray-500 font-light leading-relaxed">
                  DK PHOTO STUDIO, Ground Floor, 315 Vaigai Main Road, Srinagar, Iyerbungalow, Madurai - 625017
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-velvet-card border border-studio-gold/10 rounded-sm">
              <Phone className="w-5 h-5 text-studio-gold stroke-[1.2] mt-0.5" />
              <div>
                <h5 className="font-cinzel text-sm text-white font-medium mb-1">DIRECT VOICE LINES</h5>
                <p className="text-gray-500 font-light leading-relaxed">
                  +91 97903 81026
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-velvet-card border border-studio-gold/10 rounded-sm">
              <Mail className="w-5 h-5 text-studio-gold stroke-[1.2] mt-0.5" />
              <div>
                <h5 className="font-cinzel text-sm text-white font-medium mb-1">SECURE ELECTRONIC INBOX</h5>
                <p className="text-gray-500 font-light leading-relaxed">
                  dhanikashree18@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* Social icons */}
          <div className="border-t border-dashed border-studio-gold/15 pt-8 mt-4">
            <span className="text-[10px] text-gray-500 font-sans uppercase tracking-widest block mb-4">SOCIAL CHANNELS</span>
            <div className="flex gap-4">
              <a href="https://instagram.com/_._shrxx_._18_._" target="_blank" rel="noreferrer" className="p-3 bg-velvet-card hover:bg-studio-gold text-studio-gold hover:text-studio-black rounded-full border border-studio-gold/15 transition-all" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Right Side: Form (Validation and premium fields) */}
        <div className="lg:col-span-7 bg-velvet-card border border-studio-gold/15 p-8 rounded-sm relative shadow-2xl">
          
          <span className="text-[9px] tracking-widest text-studio-gold font-sans uppercase font-bold block mb-2">INQUIRY DISPATCH</span>
          <h3 className="font-cinzel text-xl md:text-2xl text-white font-semibold mb-6">
            Inquire Rates & Availability
          </h3>
          <div className="w-12 h-[1px] bg-studio-gold/25 mb-8"></div>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            
            {/* Input field: Name */}
            <div>
              <label htmlFor="name" className="block text-[10px] font-sans tracking-widest text-studio-gold uppercase font-bold mb-2">
                YOUR FULL NAME *
              </label>
              <input 
                type="text" 
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Aditi Sharma"
                className={`w-full bg-studio-black border px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-studio-gold transition-colors ${
                  errors.name ? 'border-red-500' : 'border-zinc-800'
                }`}
              />
              {errors.name && (
                <span className="text-red-400 text-[10px] flex items-center gap-1 mt-1 font-sans">
                  <AlertCircle className="w-3 h-3" /> {errors.name}
                </span>
              )}
            </div>

            {/* Grid for Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[10px] font-sans tracking-widest text-studio-gold uppercase font-bold mb-2">
                  EMAIL ADDRESS *
                </label>
                <input 
                  type="email" 
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. aditi@gmail.com"
                  className={`w-full bg-studio-black border px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-studio-gold transition-colors ${
                    errors.email ? 'border-red-500' : 'border-zinc-800'
                  }`}
                />
                {errors.email && (
                  <span className="text-red-400 text-[10px] flex items-center gap-1 mt-1 font-sans">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-[10px] font-sans tracking-widest text-studio-gold uppercase font-bold mb-2">
                  TELEPHONE CONTACT *
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98405 12345"
                  className={`w-full bg-studio-black border px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-studio-gold transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-zinc-800'
                  }`}
                />
                {errors.phone && (
                  <span className="text-red-400 text-[10px] flex items-center gap-1 mt-1 font-sans">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </span>
                )}
              </div>

            </div>

            {/* Grid for Event Type & Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Event Type */}
              <div>
                <label htmlFor="eventType" className="block text-[10px] font-sans tracking-widest text-studio-gold uppercase font-bold mb-2">
                  EVENT TYPE *
                </label>
                <select 
                  name="eventType"
                  id="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={`w-full bg-studio-black text-gray-400 border px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-studio-gold transition-colors ${
                    errors.eventType ? 'border-red-500' : 'border-zinc-800'
                  }`}
                >
                  <option value="">Select session type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="bg-studio-black text-gray-200">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.eventType && (
                  <span className="text-red-400 text-[10px] flex items-center gap-1 mt-1 font-sans">
                    <AlertCircle className="w-3 h-3" /> {errors.eventType}
                  </span>
                )}
              </div>

              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-[10px] font-sans tracking-widest text-studio-gold uppercase font-bold mb-2">
                  PREFERRED EVENT DATE *
                </label>
                <input 
                  type="date" 
                  name="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full bg-studio-black text-gray-400 border px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-studio-gold transition-colors ${
                    errors.date ? 'border-red-500' : 'border-zinc-800'
                  }`}
                />
                {errors.date && (
                  <span className="text-red-400 text-[10px] flex items-center gap-1 mt-1 font-sans">
                    <AlertCircle className="w-3 h-3" /> {errors.date}
                  </span>
                )}
              </div>

            </div>

            {/* Message Details */}
            <div>
              <label htmlFor="message" className="block text-[10px] font-sans tracking-widest text-studio-gold uppercase font-bold mb-2">
                SESSION DETAILS & SCHEDULE *
              </label>
              <textarea 
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share with us: timeline, preferred locations, indoor/outdoor details..."
                className={`w-full bg-studio-black border px-4 py-3 text-xs md:text-sm font-sans focus:outline-none focus:border-studio-gold transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-zinc-800'
                }`}
              />
              {errors.message && (
                <span className="text-red-400 text-[10px] flex items-center gap-1 mt-1 font-sans">
                  <AlertCircle className="w-3 h-3" /> {errors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button 
                type="submit"
                className="w-full py-4 bg-[#25d366] hover:bg-[#20ba5a] text-black font-sans font-bold text-xs tracking-widest transition-all rounded-sm glow-gold flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                SUBMIT & CONTACT ON WHATSAPP
              </button>
            </div>

          </form>

        </div>

      </section>

      {/* Styled Dark Google Maps section */}
      <section className="w-full h-96 relative border-t border-dashed border-studio-gold/15 bg-studio-black overflow-hidden">
        
        {/* Elegant backdrop filter forcing dark map */}
        <div className="absolute inset-0 z-10 pointer-events-none border-y border-dashed border-studio-gold/15"></div>
        <div className="w-full h-full filter invert grayscale contrast-[130%] brightness-[40%] hue-rotate-180 mix-blend-difference select-none">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d78.1!3d9.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b2f8e3e4e1!2sIyer%20Bungalow%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716719114620!5m2!1sen!2sin" 
            className="w-full h-full border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="DK Photo Studio Map Location"
          ></iframe>
        </div>

        {/* Float map detail card */}
        <div className="absolute bottom-6 right-6 z-20 bg-studio-black/90 backdrop-blur-md border border-studio-gold/20 p-5 rounded-sm max-w-xs text-left shadow-2xl">
          <h4 className="font-cinzel text-xs text-studio-gold tracking-widest font-semibold mb-2">
            DK PHOTO STUDIO
          </h4>
          <p className="text-[10px] text-gray-400 font-sans leading-relaxed">
            315 Vaigai Main Road, Srinagar, Iyerbungalow, Madurai - 625017. Ground Floor.
          </p>
        </div>

      </section>

      {/* Success Modal Popup Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-velvet-card border border-studio-gold p-8 max-w-md w-full text-center rounded-sm relative glow-gold"
            >
              {/* Success icon growing */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-studio-gold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-studio-gold/25"
              >
                <Check className="w-8 h-8 text-studio-black stroke-[3]" />
              </motion.div>

              <h4 className="font-cinzel text-2xl text-studio-gold tracking-wide font-medium mb-3">
                WhatsApp Dispatch Successful!
              </h4>
              
              <div className="w-12 h-[1px] bg-studio-gold/30 mx-auto mb-4"></div>

              <p className="text-gray-300 font-sans text-xs md:text-sm font-light leading-relaxed mb-6">
                Your order has been composed and redirected to **DK PHOTO STUDIO** on WhatsApp at **+91 97903 81026**!
              </p>

              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-2.5 bg-studio-gold hover:bg-studio-gold-hover text-studio-black font-sans font-bold text-xs tracking-widest transition-all rounded-sm"
              >
                OKAY, PERFECT
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
