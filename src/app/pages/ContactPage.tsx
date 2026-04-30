import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { submitContact } from '@/app/lib/submitContact';

// Draft message templates for each service
const messageDrafts = {
  'clearance': `Hello, I'm interested in your clearance services. I need help with [please specify: office removal/furniture removal/end-of-tenancy clearance/etc.]. 

Property type: [Commercial/Residential]
Approximate volume: [Small/Medium/Large]
Preferred date: [Date]
Location: [Address]

Additional details: `,
  
  'cleaning': `Hello, I'm interested in your cleaning services. I need [please specify: carpet steam cleaning/patio pressure washing/bin sanitisation/AC cleaning/etc.].

Property type: [Commercial/Residential]
Area size: [Approximate square footage]
Preferred date: [Date]
Location: [Address]

Additional details: `,
  
  'painting-decor': `Hello, I'm interested in your painting & decor services. I need [please specify: commercial painting/residential painting/end-of-tenancy painting/etc.].

Property type: [Commercial/Residential]
Number of rooms: [Number]
Preferred date: [Date]
Location: [Address]

Additional details: `,
  
  'marine-detailing': `Hello, I'm interested in your marine detailing services. I need [please specify: pressure washing/steam cleaning/hull cleaning/protective coating/chrome polishing/etc.].

Vessel type: [Yacht/Boat/Other]
Vessel size: [Length in feet]
Marina location: [Location]
Preferred date: [Date]

Additional details: `,
  
  'aviation-detailing': `Hello, I'm interested in your aviation detailing services. I need [please specify: exterior wash/interior cabin detailing/cockpit cleaning/protective coating/etc.].

Aircraft type: [Private Jet/Helicopter/Small Aircraft]
Hangar/FBO location: [Location]
Preferred date: [Date]

Additional details: `,
  
  'general': `Hello, I'm interested in your services. Please provide more information about:

Service needed: 
Property/Location type: 
Preferred date: 

Additional details: `
};

const services = [
  { value: 'clearance', label: 'Clearance Services' },
  { value: 'cleaning', label: 'Cleaning Services' },
  { value: 'painting-decor', label: 'Painting & Decor' },
  { value: 'marine-detailing', label: 'Marine Detailing' },
  { value: 'aviation-detailing', label: 'Aviation Detailing' },
  { value: 'general', label: 'General Inquiry' }
];

export const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceParam || 'general',
    message: messageDrafts[serviceParam as keyof typeof messageDrafts] || messageDrafts.general
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Update message when service changes
  useEffect(() => {
    if (serviceParam && messageDrafts[serviceParam as keyof typeof messageDrafts]) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam,
        message: messageDrafts[serviceParam as keyof typeof messageDrafts]
      }));
    }
  }, [serviceParam]);

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newService = e.target.value;
    setFormData({
      ...formData,
      service: newService,
      message: messageDrafts[newService as keyof typeof messageDrafts] || messageDrafts.general
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;

      await submitContact({
        source: 'contact-page',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        serviceLabel,
        message: formData.message
      });

      setIsSubmitted(true);
    } catch (error) {
      setSubmitError('We could not submit your request right now. Please try again in a moment.');
      console.error('Contact form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">Get in Touch</h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Ready to get started? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#0E3A6D]/10">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Information Sidebar */}
            <div className="lg:w-2/5 bg-[#0E3A6D] p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-100 text-lg mb-12">
                We're here to help with all your removal, cleaning, and detailing needs. Reach out today!
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
                    <p className="text-lg font-bold">07429 312968</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">Email Us</p>
                    <p className="text-lg font-bold break-all">shavonhemmings3@gmail.com</p>
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

            {/* Contact Form */}
            <div className="lg:w-3/5 p-12 lg:p-20">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Message Sent!</h3>
                  <p className="text-[#6B7280] mb-8">
                    Your request has been sent to our team. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#0E3A6D] font-bold hover:text-[#D62828] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-6">
                    <div className="space-y-2 flex-1 min-w-[200px]">
                      <label className="text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Full Name *</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-6 py-4 rounded-xl bg-[#F7F9FC] border border-[#0E3A6D]/20 focus:border-[#0E3A6D] focus:ring-4 focus:ring-[#0E3A6D]/10 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2 flex-1 min-w-[200px]">
                      <label className="text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Email Address *</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-6 py-4 rounded-xl bg-[#F7F9FC] border border-[#0E3A6D]/20 focus:border-[#0E3A6D] focus:ring-4 focus:ring-[#0E3A6D]/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+44 7XXX XXXXXX" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-6 py-4 rounded-xl bg-[#F7F9FC] border border-[#0E3A6D]/20 focus:border-[#0E3A6D] focus:ring-4 focus:ring-[#0E3A6D]/10 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Service Required *</label>
                    <select 
                      value={formData.service}
                      onChange={handleServiceChange}
                      required
                      className="w-full px-6 py-4 rounded-xl bg-[#F7F9FC] border border-[#0E3A6D]/20 focus:border-[#0E3A6D] focus:ring-4 focus:ring-[#0E3A6D]/10 outline-none transition-all appearance-none"
                    >
                      {services.map(service => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1C1C1C] uppercase tracking-wider">Your Message *</label>
                    <textarea 
                      rows={10} 
                      placeholder="Tell us about your needs..." 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-6 py-4 rounded-xl bg-[#F7F9FC] border border-[#0E3A6D]/20 focus:border-[#0E3A6D] focus:ring-4 focus:ring-[#0E3A6D]/10 outline-none transition-all resize-none font-mono text-sm"
                    ></textarea>
                    <p className="text-xs text-[#6B7280]">
                      Feel free to modify the template above with your specific requirements
                    </p>
                  </div>

                  {submitError && (
                    <p className="text-sm text-[#D62828] font-medium">{submitError}</p>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-5 bg-[#D62828] text-white rounded-xl font-bold text-lg hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};