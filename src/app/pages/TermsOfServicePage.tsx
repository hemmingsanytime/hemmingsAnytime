import { FileText } from 'lucide-react';

export const TermsOfServicePage = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-[#F2F4FF] rounded-full flex items-center justify-center">
            <FileText className="w-8 h-8 text-[#0E3A6D]" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4 text-center">Terms of Service</h1>
        <p className="text-center text-[#6B7280] mb-12">Last Updated: February 23, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#6B7280] leading-relaxed">
              By accessing or using the services provided by Hemmings Anytime, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">2. Services Provided</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Hemmings Anytime provides the following services for commercial and residential clients:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280]">
              <li>Clearance services (removal, storage, furniture fitting)</li>
              <li>Cleaning services (steam cleaning, pressure washing, sanitisation)</li>
              <li>Painting and decor services</li>
              <li>Marine detailing services</li>
              <li>Aviation detailing services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">3. Service Quotes and Pricing</h2>
            <p className="text-[#6B7280] leading-relaxed">
              All quotes provided are estimates based on the information you provide. Final pricing may vary depending on the actual scope of work required. We reserve the right to adjust pricing if additional services or unforeseen circumstances arise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">4. Scheduling and Cancellations</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              <strong>Scheduling:</strong> We offer flexible scheduling, including after-hours services. Service times are subject to availability and will be confirmed upon booking.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              <strong>Cancellations:</strong> If you need to cancel or reschedule a service, please provide at least 24 hours' notice. Cancellations with less notice may be subject to a cancellation fee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">5. Client Responsibilities</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Clients are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280]">
              <li>Providing accurate information about the property and service requirements</li>
              <li>Ensuring access to the property at the scheduled time</li>
              <li>Removing or securing valuable and fragile items before clearance services</li>
              <li>Informing us of any hazardous materials or special conditions</li>
              <li>Ensuring payment is made according to agreed terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">6. Liability and Insurance</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Hemmings Anytime carries appropriate insurance for our services. We take reasonable care in performing our work, but we are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280] mt-4">
              <li>Damage to items not properly disclosed or identified</li>
              <li>Pre-existing damage to property</li>
              <li>Items of exceptional value unless specifically declared and insured</li>
              <li>Delays due to circumstances beyond our control</li>
            </ul>
            <p className="text-[#6B7280] leading-relaxed mt-4">
              Clients are advised to ensure adequate insurance coverage for their property and belongings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">7. Payment Terms</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Payment is due upon completion of services unless otherwise agreed in writing. We accept various payment methods. Late payments may be subject to additional charges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">8. Disposal and Environmental Responsibility</h2>
            <p className="text-[#6B7280] leading-relaxed">
              For clearance services, we dispose of items in accordance with local regulations. We make reasonable efforts to recycle and donate items where appropriate. Clients are responsible for disclosing any hazardous materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">9. Warranty and Guarantees</h2>
            <p className="text-[#6B7280] leading-relaxed">
              We stand behind the quality of our work. If you are not satisfied with our services, please contact us within 48 hours of service completion. We will work with you to address any concerns and make reasonable efforts to resolve issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">10. Intellectual Property</h2>
            <p className="text-[#6B7280] leading-relaxed">
              All content on our website, including text, graphics, logos, and images, is the property of Hemmings Anytime and is protected by copyright laws. You may not use our content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">11. Limitation of Liability</h2>
            <p className="text-[#6B7280] leading-relaxed">
              To the maximum extent permitted by law, Hemmings Anytime shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">12. Governing Law</h2>
            <p className="text-[#6B7280] leading-relaxed">
              These Terms of Service are governed by the laws of the United Kingdom. Any disputes shall be resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">13. Changes to Terms</h2>
            <p className="text-[#6B7280] leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Updated terms will be posted on our website with a revised "Last Updated" date. Your continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">14. Contact Information</h2>
            <p className="text-[#6B7280] leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[#F7F9FC] p-6 rounded-xl mt-4 border border-[#0E3A6D]/10">
              <p className="text-[#1C1C1C] mb-2">
                <span className="font-bold">Email:</span> shavonhemmings3@gmail.com
              </p>
              <p className="text-[#1C1C1C]">
                <span className="font-bold">Phone:</span> 07557 460940 / 07445 145540
              </p>
            </div>
          </section>

          <div className="bg-[#F4C430]/10 border-2 border-[#F4C430] rounded-2xl p-8 mt-12">
            <p className="text-lg font-bold text-[#1C1C1C] text-center italic">
              "We deliver more than we promise!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
