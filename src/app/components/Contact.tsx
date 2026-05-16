import { Link } from 'react-router';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import imgAviationDetailing from "@/assets/aviation-interior-detailing-image.avif";
import { ContactInformationSidebar } from './ContactInformationSidebar';


export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#0E3A6D]/10">
          <div className="flex flex-col lg:flex-row">

            <ContactInformationSidebar 
              title="Let's Get Started"
              description="Ready for a cleaner, more organised space? Reach out today for a free, no-obligation quote."
            />

            <div className="lg:w-3/5 p-12 lg:p-20 flex flex-col items-center justify-center text-center">
              <h3 className="text-3xl font-bold text-[#1C1C1C] mb-6">Get Your Free Quote</h3>
              <p className="text-lg text-[#6B7280] mb-8 max-w-xl">
                Click below to fill out our detailed contact form and tell us about your specific needs. We'll get back to you as soon as possible with a personalised quote.
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
                    href="tel:+447557460940" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7F9FC] border border-[#0E3A6D]/20 rounded-xl text-[#0E3A6D] font-bold hover:bg-[#F2F4FF] transition-all"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                  <a 
                    href="mailto:hemmingsanytime@gmail.com" 
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