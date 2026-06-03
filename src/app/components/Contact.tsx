import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ContactInformationSidebar } from './ContactInformationSidebar';
import { submitContact } from '@/app/lib/submitContact';

const serviceOptions = [
  { value: '', label: 'Select a service', disabled: true },
  { value: 'clearance', label: 'Clearance' },
  { value: 'cleaning', label: 'Cleaning' },
  { value: 'painting-decor', label: 'Painting & Decor' },
  { value: 'marine-detailing', label: 'Marine Detailing' },
  { value: 'aviation-detailing', label: 'Aviation Detailing' },
  { value: 'other', label: 'Other' },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        return value.trim().length < 2 ? 'Please enter your full name' : '';
      case 'phone': {
        const phoneClean = value.replace(/[\s\-\(\)]/g, '');
        return phoneClean.length < 7 || !/^[\+]?[0-9]{7,15}$/.test(phoneClean)
          ? 'Please enter a valid phone number'
          : '';
      }
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Please enter a valid email address'
          : '';
      case 'service':
        return !value ? 'Please select a service' : '';
      default:
        return '';
    }
  };

  const handleBlur = (field: string) => {
    const value = formData[field as keyof typeof formData];
    const error = validateField(field, value);
    setFieldErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    // Validate all required fields
    const errors: Record<string, string> = {};
    for (const field of ['name', 'phone', 'email', 'service']) {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) errors[field] = error;
    }
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);

    try {
      const serviceLabel =
        serviceOptions.find((s) => s.value === formData.service)?.label ||
        formData.service;

      await submitContact({
        source: 'contact-page',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        serviceLabel,
        message: formData.message || '(No additional details provided)',
      });

      // Add a 300ms delay to allow external tracking scripts (like GHL) to process the submission event
      setTimeout(() => {
        setIsSubmitted(true);
      }, 300);
    } catch (error) {
      setSubmitError(
        'We could not submit your request right now. Please try again in a moment.'
      );
      console.error('Inline contact form submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-[#F7F9FC] border border-[#0E3A6D]/15 focus:border-[#0E3A6D] focus:ring-3 focus:ring-[#0E3A6D]/10 outline-none transition-all text-[#1C1C1C] text-sm placeholder:text-[#9CA3AF]';
  const labelClasses =
    'block text-sm font-bold text-[#1C1C1C] mb-1.5';
  const errorClasses = 'text-xs text-[#D62828] mt-1';

  return (
    <section id="contact" className="py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#0E3A6D]/10">
          <div className="flex flex-col lg:flex-row">

            <ContactInformationSidebar 
              title="Let's Get Started"
              description="Ready for a cleaner, more organised space? Reach out today for a free, no-obligation quote."
            />

            {/* Right side — Inline Form */}
            <div className="lg:w-3/5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              {/* Success Message (kept in DOM) */}
              <div className={isSubmitted ? "block text-center py-8" : "hidden"}>
                <div className="flex items-center justify-center mb-5">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9 text-green-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-3">
                  Thank You!
                </h3>
                <p className="text-[#6B7280] text-base mb-6 max-w-md mx-auto">
                  Your request has been submitted to our team. We will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
                    setFieldErrors({});
                  }}
                  className="text-[#0E3A6D] font-bold hover:text-[#D62828] transition-colors cursor-pointer"
                >
                  Send Another Request
                </button>
              </div>

              {/* Form elements (kept in DOM but hidden on success) */}
              <div className={isSubmitted ? "hidden" : "block"}>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] mb-2">
                  Get a Free Quote
                </h3>
                <p className="text-sm text-[#6B7280] mb-6">
                  Fill in the details below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Full Name */}
                  <div>
                    <label className={labelClasses}>Full Name <span className="text-[#D62828]">*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onBlur={() => handleBlur('name')}
                      placeholder="Your full name"
                      className={inputClasses}
                    />
                    {fieldErrors.name && <p className={errorClasses}>{fieldErrors.name}</p>}
                  </div>

                  {/* Phone & Email side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClasses}>Phone Number <span className="text-[#D62828]">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onBlur={() => handleBlur('phone')}
                        placeholder="Your phone number"
                        className={inputClasses}
                      />
                      {fieldErrors.phone && <p className={errorClasses}>{fieldErrors.phone}</p>}
                    </div>
                    <div>
                      <label className={labelClasses}>Email Address <span className="text-[#D62828]">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onBlur={() => handleBlur('email')}
                        placeholder="Your email address"
                        className={inputClasses}
                      />
                      {fieldErrors.email && <p className={errorClasses}>{fieldErrors.email}</p>}
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className={labelClasses}>Service Required <span className="text-[#D62828]">*</span></label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      onBlur={() => handleBlur('service')}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.service && <p className={errorClasses}>{fieldErrors.service}</p>}
                  </div>

                  {/* Description */}
                  <div>
                    <label className={labelClasses}>Description</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Description"
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  {/* Error message */}
                  {submitError && (
                    <p className="text-sm text-[#D62828] font-medium">{submitError}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#D62828] text-white rounded-xl font-bold text-base hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting…' : 'Send Enquiry'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};