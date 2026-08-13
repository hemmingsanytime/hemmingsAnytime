import { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router';
import { Menu, X, Phone, ChevronDown, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import logo from "@/assets/logo.png";

const serviceAreas = [
  { name: 'Brighton', slug: 'brighton', path: '/areas/brighton' },
  { name: 'Hastings', slug: 'hastings' },
  { name: 'Haywards Heath', slug: 'haywards-heath' },
  { name: 'Eastbourne', slug: 'eastbourne' },
  { name: 'Hove', slug: 'hove' },
  { name: 'Lewes', slug: 'lewes' },
  { name: 'Bexhill', slug: 'bexhill' },
  { name: 'Seaford', slug: 'seaford' },
] as const;

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAreasOpen, setIsMobileAreasOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed left-0 right-0 z-50 top-[40px] bg-[#F7F9FC]/95 backdrop-blur-sm border-b border-[#0E3A6D]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Hemmings Anytime Logo" className="h-11 min-[360px]:h-14 w-auto object-contain" />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-[#6B7280] hover:text-[#0E3A6D] font-medium transition-colors flex items-center gap-1">
                Services
                <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full -left-4 w-64 bg-white border border-[#0E3A6D]/10 shadow-xl rounded-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {/* Clearance Parent Link */}
                <Link 
                  to="/services/clearance" 
                  className="block px-6 py-2.5 font-bold text-[#0E3A6D] hover:bg-[#F2F4FF] transition-colors"
                >
                  Clearance
                </Link>
                
                {/* Child pages under Clearance */}
                <div className="my-1 py-1 bg-[#F8FAFC]">
                  <Link 
                    to="/services/clearance/house-clearance-east-sussex" 
                    className="flex items-center gap-2 pl-10 pr-6 py-2 text-sm font-medium text-[#4B5563] hover:text-[#D62828] hover:bg-[#F1F5F9] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] shrink-0" />
                    <span>House Clearance East Sussex</span>
                  </Link>
                </div>

                {/* Removal Parent Link */}
                <Link 
                  to="/services/removal" 
                  className="block px-6 py-2.5 font-bold text-[#0E3A6D] hover:bg-[#F2F4FF] transition-colors"
                >
                  Removal
                </Link>
                
                {/* Child pages under Removal */}
                <div className="my-1 py-1 bg-[#F8FAFC]">
                  <Link 
                    to="/services/removal/house-removals-east-sussex" 
                    className="flex items-center gap-2 pl-10 pr-6 py-2 text-sm font-medium text-[#4B5563] hover:text-[#D62828] hover:bg-[#F1F5F9] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] shrink-0" />
                    <span>House Removals East Sussex</span>
                  </Link>
                </div>
                <Link to="/services/storage" className="block px-6 py-2.5 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Storage</Link>
                <Link to="/services/cleaning" className="block px-6 py-2.5 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Cleaning</Link>
                <Link to="/services/painting-decor" className="block px-6 py-2.5 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Painting & Decor</Link>
                <Link to="/services/marine-detailing" className="block px-6 py-2.5 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Marine Detailing</Link>
                <Link to="/services/aviation-detailing" className="block px-6 py-2.5 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Aviation Detailing</Link>
                <Link to="/services/waste-removal" className="block px-6 py-2.5 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Waste Removal</Link>
              </div>
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative group">
              <button className="text-[#6B7280] hover:text-[#0E3A6D] font-medium transition-colors flex items-center gap-1">
                Service Areas
                <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full -left-4 w-56 bg-white border border-[#0E3A6D]/10 shadow-xl rounded-2xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {serviceAreas.map((area) =>
                  'path' in area && area.path ? (
                    <Link
                      key={area.slug}
                      to={area.path}
                      className="flex items-center gap-2.5 px-6 py-2.5 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors"
                    >
                      <MapPin size={14} className="flex-shrink-0 text-[#D62828]" />
                      {area.name}
                    </Link>
                  ) : (
                    <a
                      key={area.slug}
                      href={`/#service-area-${area.slug}`}
                      onClick={(e) => handleAnchorClick(e, `#service-area-${area.slug}`)}
                      className="flex items-center gap-2.5 px-6 py-2.5 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors"
                    >
                      <MapPin size={14} className="flex-shrink-0 text-[#D62828]" />
                      {area.name}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Reviews */}
            <Link
              to="/reviews"
              className="text-[#6B7280] hover:text-[#0E3A6D] font-medium transition-colors"
            >
              Reviews
            </Link>

            {/* Benefits */}
            <a
              href="/#benefits"
              onClick={(e) => handleAnchorClick(e, '#benefits')}
              className="text-[#6B7280] hover:text-[#0E3A6D] font-medium transition-colors"
            >
              Benefits
            </a>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 ml-2">
              <Link 
                to="/contact"
                className="bg-[#D62828] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#B91C1C] transition-all shadow-md hover:shadow-lg text-[0.95rem]"
              >
                Get a Quote
              </Link>
              <a
                href="tel:07557460940"
                className="inline-flex items-center gap-2.5 bg-[#0E3A6D] text-white px-7 py-3 rounded-full font-bold hover:bg-[#0C2F58] transition-all shadow-md hover:shadow-lg text-base tracking-wide"
              >
                <Phone size={20} strokeWidth={2.5} />
                <span>07557 460940</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button & call button */}
          <div className="lg:hidden flex items-center gap-2 min-[360px]:gap-3">
            <motion.a
              href="tel:07557460940"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-flex items-center justify-center gap-1.5 min-[360px]:gap-2 bg-[#0E3A6D] text-white px-3 py-2 min-[360px]:px-4 min-[360px]:py-2.5 rounded-full font-bold hover:bg-[#0C2F58] transition-colors shadow-md hover:shadow-lg text-[11px] min-[360px]:text-sm tracking-wider whitespace-nowrap shrink-0"
              aria-label="Call Now: 07557 460940"
            >
              <Phone size={14} className="min-[360px]:size-[16px]" strokeWidth={2.5} />
              <span>07557 460940</span>
            </motion.a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#6B7280] p-1.5 min-[360px]:p-2 flex items-center justify-center shrink-0"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} className="min-[360px]:size-[32px]" /> : <Menu size={28} className="min-[360px]:size-[32px]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#0E3A6D]/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">

            {/* Services accordion */}
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="flex items-center justify-between w-full px-3 py-3 font-bold text-[#1C1C1C] border-b border-[#0E3A6D]/10"
            >
              Services
              <ChevronDown size={16} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileServicesOpen && (
              <div className="space-y-1">
                <Link to="/services/clearance" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2.5 font-bold text-[#0E3A6D] hover:bg-[#F2F4FF] rounded-lg">Clearance</Link>
                <div className="pl-10 pr-4 py-1 space-y-1 bg-[#F8FAFC] rounded-lg border-l-2 border-[#D62828]/40 my-1">
                  <Link to="/services/clearance/house-clearance-east-sussex" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-1.5 text-sm font-medium text-[#4B5563] hover:text-[#D62828]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] shrink-0" />
                    <span>House Clearance East Sussex</span>
                  </Link>
                </div>
                <Link to="/services/removal" onClick={() => setIsMenuOpen(false)} className="block px-6 py-2.5 font-bold text-[#0E3A6D] hover:bg-[#F2F4FF] rounded-lg">Removal</Link>
                <div className="pl-10 pr-4 py-1 space-y-1 bg-[#F8FAFC] rounded-lg border-l-2 border-[#D62828]/40 my-1">
                  <Link to="/services/removal/house-removals-east-sussex" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 py-1.5 text-sm font-medium text-[#4B5563] hover:text-[#D62828]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D62828] shrink-0" />
                    <span>House Removals East Sussex</span>
                  </Link>
                </div>
                <Link to="/services/storage" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Storage</Link>
                <Link to="/services/cleaning" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Cleaning</Link>
                <Link to="/services/painting-decor" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Painting & Decor</Link>
                <Link to="/services/marine-detailing" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Marine Detailing</Link>
                <Link to="/services/aviation-detailing" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Aviation Detailing</Link>
                <Link to="/services/waste-removal" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Waste Removal</Link>
              </div>
            )}

            {/* Service Areas accordion */}
            <button
              onClick={() => setIsMobileAreasOpen(!isMobileAreasOpen)}
              className="flex items-center justify-between w-full px-3 py-3 font-bold text-[#1C1C1C] border-b border-[#0E3A6D]/10"
            >
              Service Areas
              <ChevronDown size={16} className={`transition-transform ${isMobileAreasOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileAreasOpen && (
              <div className="space-y-1">
                {serviceAreas.map((area) =>
                  'path' in area && area.path ? (
                    <Link
                      key={area.slug}
                      to={area.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2.5 px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg"
                    >
                      <MapPin size={14} className="text-[#D62828]" />
                      {area.name}
                    </Link>
                  ) : (
                    <a
                      key={area.slug}
                      href={`/#service-area-${area.slug}`}
                      onClick={(e) => handleAnchorClick(e, `#service-area-${area.slug}`)}
                      className="flex items-center gap-2.5 px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg"
                    >
                      <MapPin size={14} className="text-[#D62828]" />
                      {area.name}
                    </a>
                  )
                )}
              </div>
            )}

            <Link
              to="/reviews"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg"
            >
              Reviews
            </Link>

            <a
              href="/#benefits"
              onClick={(e) => handleAnchorClick(e, '#benefits')}
              className="block px-3 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg"
            >
              Benefits
            </a>

            {/* Mobile CTA buttons */}
            <div className="pt-3 space-y-2 border-t border-[#0E3A6D]/10 mt-2">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-center px-3 py-3.5 bg-[#D62828] text-white font-bold rounded-xl text-base"
              >
                Get a Quote
              </Link>
              <a
                href="tel:07557460940"
                className="flex items-center justify-center gap-2.5 w-full px-3 py-3.5 bg-[#0E3A6D] text-white font-bold rounded-xl text-base tracking-wide"
              >
                <Phone size={20} />
                07557 460940
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};