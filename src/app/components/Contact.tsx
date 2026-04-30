import { Link } from 'react-router';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import imgAviationDetailing from "@/assets/aviation-interior-detailing-image.avif";


export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#0E3A6D]/10">
          <div className="flex flex-col lg:flex-row">

            <div className="relative lg:w-2/5 overflow-hidden p-12 text-white">
              <img
                src={imgAviationDetailing}
                alt="Hemmings Anytime team at work"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[30%_0%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(155deg,#0e3a6de6_0%,#081630e6_100%)]" />

              <div className="relative z-[2]">
                <h2 className="text-4xl font-bold mb-6">Let's Get Started</h2>
                <p className="text-blue-100 text-lg mb-12">
                  Ready for a cleaner, more organized space? Reach out today for a free, no-obligation quote.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">Call Us</p>
                      <p className="text-lg font-bold">07557 460940</p>
                      <p className="text-lg font-bold">07445 145540</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">Email Us</p>
                      <p className="text-lg font-bold break-all">shemmings72@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="bg-white/10 p-4 rounded-2xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">Service Areas</p>
                      <p className="text-lg font-bold">Commercial & Residential</p>
                    </div>
                  </div>
                </div>

                <div className="mt-20">
                  <p className="text-blue-200 text-sm mb-4">Available for After-Hours Services</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4C430]/20 text-[#F4C430] rounded-full border border-[#F4C430]/30">
                    <span className="w-2 h-2 bg-[#F4C430] rounded-full animate-pulse"></span>
                    <span className="text-sm font-bold uppercase tracking-widest">Ready to Help</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5 p-12 lg:p-20 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-bold text-[#1C1C1C] mb-6">Get Your Free Quote</h3>
              <p className="text-lg text-[#6B7280] mb-8 max-w-xl">
                Click below to fill out our detailed contact form and tell us about your specific needs. We'll get back to you as soon as possible with a personalized quote.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#D62828] text-white rounded-xl font-bold text-lg hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl group"
              >
                Go to Contact Form
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="mt-12 pt-12 border-t border-[#0E3A6D]/10 w-full">
                <p className="text-sm text-[#6B7280] mb-4">Or contact us directly:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="tel:07557460940" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7F9FC] border border-[#0E3A6D]/20 rounded-xl text-[#0E3A6D] font-bold hover:bg-[#F2F4FF] transition-all"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a 
                    href="mailto:shavonhemmings3@gmail.com" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7F9FC] border border-[#0E3A6D]/20 rounded-xl text-[#0E3A6D] font-bold hover:bg-[#F2F4FF] transition-all"
                  >
                    <Mail size={18} />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};