import { Link } from 'react-router';
import logo from "@/assets/logo.png";
import footerBgImage from "@/assets/single-storage-image.avif";
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const Footer = () => {

  return (
    <footer className="relative overflow-hidden text-gray-300 border-t border-white/15">
      {/* Background */}
      <img
        src={footerBgImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(155deg,rgba(14,58,109,0.93)_0%,rgba(8,22,48,0.95)_100%)]"
      />

      {/* Main Footer Content */}
      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">

          {/* Column 1 — Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Hemmings Anytime" className="h-14 w-auto" />
            </Link>
            <p className="text-base leading-[1.7] text-gray-300/90 mb-6 max-w-xs">
              Professional clearance, cleaning, painting, marine & aviation detailing for commercial and residential clients. Delivering excellence anytime you need it.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="mailto:hemmingsanytime@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#D62828] text-gray-300 hover:text-white transition-all duration-300"
                aria-label="Email Us"
              >
                <Mail size={17} />
              </a>
              <a
                href="https://wa.me/message/SSL4OWYKQKHNE1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#25D366] text-gray-300 hover:text-white transition-all duration-300"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-[17px] h-[17px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .15 5.33.15 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.43zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.88 9.88 0 0 1-1.53-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.9-9.88 9.9zm5.43-7.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.54-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.54.08-.82.38-.28.3-1.07 1.04-1.07 2.54 0 1.5 1.1 2.95 1.26 3.15.15.2 2.17 3.3 5.24 4.63.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.44.25-.7.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-[0.15em]">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              <li>
                <Link to="/services" className="text-base text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-base text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Reviews
                </Link>
              </li>
              <li>
                <a href="/#benefits" className="text-base text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Why Choose Us
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Clearance & Removals */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-[0.15em]">
              Clearance & Removals
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services/clearance/house-clearance-east-sussex" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  House Clearance
                </Link>
              </li>
              <li>
                <Link to="/services/clearance/probate-clearance-east-sussex" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Probate Clearance
                </Link>
              </li>
              <li>
                <Link to="/services/clearance/office-clearance-east-sussex" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Office Clearance
                </Link>
              </li>
              <li>
                <Link to="/services/clearance/rubbish-clearance-east-sussex" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Rubbish Clearance
                </Link>
              </li>
              <li>
                <Link to="/services/removal/house-removals-east-sussex" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  House Removals
                </Link>
              </li>
              <li>
                <Link to="/services/removal/office-removals-east-sussex" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Office Removals
                </Link>
              </li>
              <li>
                <Link to="/services/removal/furniture-removal-east-sussex" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Furniture Removal
                </Link>
              </li>
              <li>
                <Link to="/services/storage/removal-and-storage-east-sussex" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Removal & Storage
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Specialist Services & Service Areas */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-[0.15em]">
              Specialist Services & Areas
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/services/storage" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Storage Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/cleaning" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Cleaning Services
                </Link>
              </li>
              <li>
                <Link to="/services/painting-decor" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Painting & Decor
                </Link>
              </li>
              <li>
                <Link to="/services/marine-detailing" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Marine Detailing
                </Link>
              </li>
              <li>
                <Link to="/services/aviation-detailing" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Aviation Detailing
                </Link>
              </li>
              <li>
                <Link to="/services/waste-removal" className="text-sm text-gray-300/80 hover:text-[#F4C430] transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430]/50 flex-shrink-0" />
                  Waste Removal
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link to="/areas/brighton" className="text-sm font-semibold text-[#F4C430] hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4C430] flex-shrink-0" />
                  Brighton & Hove Removals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Contact Information */}
          <div>
            <h4 className="text-white font-bold text-base mb-5 uppercase tracking-[0.15em]">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={16} className="text-[#F4C430]" />
                </div>
                <div>
                  <p className="text-sm text-gray-300/80 mb-0.5">Phone</p>
                  <a href="tel:07557460940" className="text-base text-white font-semibold hover:text-[#F4C430] transition-colors">
                    07557 460940
                  </a>
                  <br />
                  <a href="tel:07429312968" className="text-base text-white font-semibold hover:text-[#F4C430] transition-colors">
                    07429 312968
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={16} className="text-[#F4C430]" />
                </div>
                <div>
                  <p className="text-sm text-gray-300/80 mb-0.5">Email</p>
                  <a href="mailto:hemmingsanytime@gmail.com" className="text-base text-white font-semibold hover:text-[#F4C430] transition-colors break-all">
                    hemmingsanytime@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#F4C430]" />
                </div>
                <div>
                  <p className="text-sm text-gray-300/80 mb-0.5">Address</p>
                  <p className="text-base text-white font-semibold leading-snug">
                    4 Leaf Hall Rd, Eastbourne BN22 7NH, United Kingdom
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={16} className="text-[#F4C430]" />
                </div>
                <div>
                  <p className="text-sm text-gray-300/80 mb-0.5">Business Hours</p>
                  <p className="text-base text-white font-semibold">24/7 — After-Hours Available</p>
                </div>
              </li>
              <li className="pt-2">
                <div className="rounded-xl overflow-hidden border border-white/20 shadow-md bg-white/5">
                  <iframe
                    title="Hemmings Anytime Location Map"
                    src="https://maps.google.com/maps?q=4+Leaf+Hall+Rd,+Eastbourne+BN22+7NH,+United+Kingdom&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="130"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full block"
                  />
                  <a
                    href="https://maps.app.goo.gl/y5jMYwyeddAaZ2CJ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-1.5 bg-black/40 hover:bg-[#D62828] text-xs text-white font-semibold transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left — Copyright */}
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Hemmings Anytime. All rights reserved.
            </p>

            {/* Right — Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#F4C430] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-500">·</span>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-[#F4C430] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};