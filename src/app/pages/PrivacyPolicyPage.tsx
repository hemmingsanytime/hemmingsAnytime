import React from 'react';
import { Shield } from 'lucide-react';

export const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <div className="w-16 h-16 bg-[#F2F4FF] rounded-full flex items-center justify-center">
            <Shield className="w-8 h-8 text-[#0E3A6D]" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4 text-center">Privacy Policy</h1>
        <p className="text-center text-[#6B7280] mb-12">Last Updated: February 23, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">1. Introduction</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Hemmings Anytime ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">2. Information We Collect</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280]">
              <li>Request a quote or service through our contact forms</li>
              <li>Contact us via email or phone</li>
              <li>Subscribe to our communications</li>
              <li>Interact with our website</li>
            </ul>
            <p className="text-[#6B7280] leading-relaxed mt-4">
              This information may include your name, email address, phone number, property address, and service requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">3. How We Use Your Information</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280]">
              <li>Provide and manage our removal, storage, cleaning, and detailing services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you service updates and communications</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">4. Information Sharing</h2>
            <p className="text-[#6B7280] leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280] mt-4">
              <li>With service providers who assist us in operating our business</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">5. Data Security</h2>
            <p className="text-[#6B7280] leading-relaxed">
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">6. Your Rights</h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6B7280]">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">7. Cookies and Tracking</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">8. Third-Party Links</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Our website may contain links to third-party websites (such as TikTok). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">9. Children's Privacy</h2>
            <p className="text-[#6B7280] leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">10. Changes to This Policy</h2>
            <p className="text-[#6B7280] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">11. Contact Us</h2>
            <p className="text-[#6B7280] leading-relaxed">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-[#F7F9FC] p-6 rounded-xl mt-4 border border-[#0E3A6D]/10">
              <p className="text-[#1C1C1C] mb-2">
                <span className="font-bold">Email:</span> hemmingsanytime@gmail.com
              </p>
              <p className="text-[#1C1C1C]">
                <span className="font-bold">Phone:</span> 07557 460940 / 07445 145540
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
