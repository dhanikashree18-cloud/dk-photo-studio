import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './components/CartContext';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  return (
    <CartProvider>
      <Router>
        {/* Reset window scroll height on page switches */}
        <ScrollToTop />

        <div className="flex flex-col min-h-screen bg-studio-black text-gray-200">
          
          {/* Sticky Glassmorphism Header */}
          <Navbar />

          {/* Core Page Router Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Premium Studio Footer */}
          <Footer />

        </div>
      </Router>
    </CartProvider>
  );
}
