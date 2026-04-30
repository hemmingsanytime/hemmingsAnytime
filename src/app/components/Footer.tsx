import { Link } from 'react-router';
import logo from "@/assets/logo.png";
import footerBgImage from "@/assets/single-storage-image.avif";
import { Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden py-20 text-gray-300 border-t border-white/15">
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
        className="absolute inset-0 bg-[linear-gradient(155deg,rgba(14,58,109,0.9)_0%,rgba(8,22,48,0.9)_100%)]"
      />

      <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-12 mb-16">
          <div className="flex-1 min-w-[280px] md:min-w-[400px]">
            <Link to="/">
              <img src={logo} alt="Hemmings Anytime" className="h-14 w-auto mb-8" />
            </Link>
            <p className="max-w-md text-lg leading-relaxed mb-8">
              Specializing in professional removal, storage, cleaning, painting, marine, and aviation detailing for commercial and residential clients. Delivering peace of mind and excellence anytime you need it.
            </p>
            <div className="flex gap-4">
              <a 
                href="mailto:shavonhemmings3@gmail.com" 
                className="w-10 h-10 rounded-lg bg-[#1E4F8A] flex items-center justify-center hover:bg-[#D62828] hover:text-white transition-all"
                aria-label="Email Us"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1E4F8A] flex items-center justify-center hover:bg-[#D62828] hover:text-white transition-all"
                aria-label="Visit our Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12a12 12 0 1 0-13.88 11.85v-8.39H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.46h-2.79v8.39A12 12 0 0 0 24 12z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1E4F8A] flex items-center justify-center hover:bg-[#D62828] hover:text-white transition-all"
                aria-label="Chat with us on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .15 5.33.15 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.43zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.88 9.88 0 0 1-1.53-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.9-9.88 9.9zm5.43-7.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.54-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.54.08-.82.38-.28.3-1.07 1.04-1.07 2.54 0 1.5 1.1 2.95 1.26 3.15.15.2 2.17 3.3 5.24 4.63.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.44.25-.7.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35z"/>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@hemmingsanytime" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1E4F8A] flex items-center justify-center hover:bg-[#D62828] hover:text-white transition-all"
                aria-label="Visit our TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex-1 min-w-[180px]">
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services/clearance" className="hover:text-[#F4C430] transition-colors">Clearance</Link></li>
              <li><Link to="/services/cleaning" className="hover:text-[#F4C430] transition-colors">Cleaning</Link></li>
              <li><Link to="/services/painting-decor" className="hover:text-[#F4C430] transition-colors">Painting & Decor</Link></li>
              <li><Link to="/services/marine-detailing" className="hover:text-[#F4C430] transition-colors">Marine Detailing</Link></li>
              <li><Link to="/services/aviation-detailing" className="hover:text-[#F4C430] transition-colors">Aviation Detailing</Link></li>
            </ul>
          </div>

          <div className="flex-1 min-w-[180px]">
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {/* <li><Link to="/" className="hover:text-[#F4C430] transition-colors">About Us</Link></li> */}
              <li><a href="/#benefits" className="hover:text-[#F4C430] transition-colors">Why Choose Us</a></li>
              <li><Link to="/contact" className="hover:text-[#F4C430] transition-colors">Contact</Link></li>
              <li><Link to="/gallery" className="hover:text-[#F4C430] transition-colors">Gallery</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#F4C430] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-[#F4C430] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© {new Date().getFullYear()} Hemmings Anytime. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#F4C430] transition-colors group"
          >
            BACK TO TOP
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};