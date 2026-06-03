import { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router';
import { Menu, X, Phone, ChevronDown, MapPin } from 'lucide-react';
import logo from "@/assets/logo.png";

const serviceAreas = [
  { name: 'Brighton', slug: 'brighton' },
  { name: 'Hastings', slug: 'hastings' },
  { name: 'Haywards Heath', slug: 'haywards-heath' },
  { name: 'Eastbourne', slug: 'eastbourne' },
  { name: 'Hove', slug: 'hove' },
  { name: 'Lewes', slug: 'lewes' },
  { name: 'Bexhill', slug: 'bexhill' },
  { name: 'Seaford', slug: 'seaford' },
];

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F9FC]/95 backdrop-blur-sm border-b border-[#0E3A6D]/10 shadow-sm">
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
              <div className="absolute top-full -left-4 w-56 bg-white border border-[#0E3A6D]/10 shadow-xl rounded-2xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/services/clearance" className="block px-6 py-2 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Clearance</Link>
                <Link to="/services/cleaning" className="block px-6 py-2 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Cleaning</Link>
                <Link to="/services/painting-decor" className="block px-6 py-2 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Painting & Decor</Link>
                <Link to="/services/marine-detailing" className="block px-6 py-2 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Marine Detailing</Link>
                <Link to="/services/aviation-detailing" className="block px-6 py-2 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors">Aviation Detailing</Link>
              </div>
            </div>

            {/* Service Areas Dropdown */}
            <div className="relative group">
              <button className="text-[#6B7280] hover:text-[#0E3A6D] font-medium transition-colors flex items-center gap-1">
                Service Areas
                <ChevronDown size={15} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full -left-4 w-56 bg-white border border-[#0E3A6D]/10 shadow-xl rounded-2xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {serviceAreas.map((area) => (
                  <a
                    key={area.slug}
                    href={`/#service-area-${area.slug}`}
                    onClick={(e) => handleAnchorClick(e, `#service-area-${area.slug}`)}
                    className="flex items-center gap-2.5 px-6 py-2.5 text-[#6B7280] hover:bg-[#F2F4FF] hover:text-[#0E3A6D] transition-colors"
                  >
                    <MapPin size={14} className="flex-shrink-0 text-[#D62828]" />
                    {area.name}
                  </a>
                ))}
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
          <div className="lg:hidden flex items-center gap-1.5 min-[360px]:gap-2">
            <a
              href="tel:07557460940"
              className="inline-flex items-center justify-center gap-1 min-[360px]:gap-1.5 bg-[#0E3A6D] text-white px-2 py-1.5 min-[360px]:px-3 min-[360px]:py-2 rounded-full font-bold hover:bg-[#0C2F58] transition-all shadow-md hover:shadow-lg text-[10px] min-[360px]:text-xs tracking-wider whitespace-nowrap shrink-0"
              aria-label="Call Now: 07557 460940"
            >
              <Phone size={13} className="min-[360px]:size-[14px]" strokeWidth={2.5} />
              <span>07557 460940</span>
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#6B7280] p-1.5 min-[360px]:p-2 flex items-center justify-center shrink-0"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={26} className="min-[360px]:size-[28px]" /> : <Menu size={26} className="min-[360px]:size-[28px]" />}
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
                <Link to="/services/clearance" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Clearance</Link>
                <Link to="/services/cleaning" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Cleaning</Link>
                <Link to="/services/painting-decor" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Painting & Decor</Link>
                <Link to="/services/marine-detailing" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Marine Detailing</Link>
                <Link to="/services/aviation-detailing" onClick={() => setIsMenuOpen(false)} className="block px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg">Aviation Detailing</Link>
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
                {serviceAreas.map((area) => (
                  <a
                    key={area.slug}
                    href={`/#service-area-${area.slug}`}
                    onClick={(e) => handleAnchorClick(e, `#service-area-${area.slug}`)}
                    className="flex items-center gap-2.5 px-6 py-3 text-[#6B7280] hover:bg-[#F2F4FF] rounded-lg"
                  >
                    <MapPin size={14} className="text-[#D62828]" />
                    {area.name}
                  </a>
                ))}
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