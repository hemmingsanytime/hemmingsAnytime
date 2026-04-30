import {useState} from 'react';
import { NavLink, Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F9FC]/95 backdrop-blur-sm border-b border-[#0E3A6D]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Hemmings Anytime Logo" className="h-14 w-auto object-contain" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-[#0E3A6D]' : 'text-[#6B7280] hover:text-[#0E3A6D]'}`
              }
            >
              Home
            </NavLink>
            <div className="relative group">
              <button className="text-[#6B7280] hover:text-[#0E3A6D] font-medium transition-colors flex items-center gap-1">
                Services
              </button>
              <div className="absolute top-full -left-4 w-56 bg-white border border-[#0E3A6D]/10 shadow-xl rounded-2xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/services/clearance" className="block px-6 py-2 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Clearance</Link>
                <Link to="/services/cleaning" className="block px-6 py-2 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Cleaning</Link>
                <Link to="/services/painting-decor" className="block px-6 py-2 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Painting & Decor</Link>
                <Link to="/services/marine-detailing" className="block px-6 py-2 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Marine Detailing</Link>
                <Link to="/services/aviation-detailing" className="block px-6 py-2 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Aviation Detailing</Link>
              </div>
            </div>
            <a href="/#benefits" className="text-[#6B7280] hover:text-[#0E3A6D] font-medium transition-colors">Benefits</a>
            <Link 
              to="/contact"
              className="bg-[#D62828] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#B91C1C] transition-all shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#6B7280] p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#0E3A6D]/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Home</Link>
            <div className="px-3 py-3 font-bold text-[#1C1C1C] border-b border-[#0E3A6D]/10">Services</div>
            <Link to="/services/clearance" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Clearance</Link>
            <Link to="/services/cleaning" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Cleaning</Link>
            <Link to="/services/painting-decor" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Painting & Decor</Link>
            <Link to="/services/marine-detailing" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Marine Detailing</Link>
            <Link to="/services/aviation-detailing" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Aviation Detailing</Link>
            <a href="/#benefits" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Benefits</a>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-[#D62828] font-bold">Get a Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
};