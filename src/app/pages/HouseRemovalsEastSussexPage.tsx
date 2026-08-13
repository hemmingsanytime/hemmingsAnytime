import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Truck, Box, Home, CheckCircle2, ShieldCheck, Clock, 
  MapPin, Phone, ChevronDown, ChevronUp, ArrowRight, Building2,
  Package, Scale, FileText, HelpCircle, RefreshCw, UserCheck, Layers
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';

import heroImage from '@/assets/house-removals-east-sussex-hero.png';
import manAndVanImg from '@/assets/man-and-van-removals-east-sussex.png';
import storageImage from '@/assets/house-clearance-storage-transport.png';

const keyFeatures = [
  "Experienced removal team",
  "Fully insured team",
  "Competitive and transparent pricing",
  "Same-day services available",
  "Flexible transport options",
  "Storage solutions available",
  "Help with single items to full house moves"
];

const serviceOptions = [
  "Full house moves",
  "Flat removals",
  "Furniture moves",
  "Boxes and household items",
  "Single large items",
  "Furniture delivery",
  "Storage transport",
  "Small local moves"
];

const manAndVanUses = [
  "Studio flats",
  "One-bedroom flats",
  "Small house moves",
  "Furniture collection",
  "Appliance delivery",
  "Storage moves",
  "Single-item transport"
];

const removalTypes = [
  {
    icon: <Home className="w-7 h-7 text-[#D62828]" />,
    title: "Full House Removals",
    description: "A full house move often includes furniture, boxes, appliances and many personal items. Our team can help move all agreed items, saving you from making several trips or lifting heavy furniture on your own.",
    items: ["Living room furniture", "Bedroom furniture", "Dining tables and chairs", "Wardrobes", "Boxes & household items", "Suitable appliances"]
  },
  {
    icon: <Building2 className="w-7 h-7 text-[#D62828]" />,
    title: "Flat Removals",
    description: "Moving from a flat can have unique challenges like stairs, lifts, tight hallways or limited parking. Tell us about the property before booking so we can plan access smoothly.",
    items: ["Studio flats", "One-bedroom flats", "Two-bedroom flats", "Apartment moves", "Rental properties"]
  },
  {
    icon: <Truck className="w-7 h-7 text-[#D62828]" />,
    title: "Man & Van Removals East Sussex",
    description: "Not every move needs a large removal crew. Our man and van removal service is a cost-effective, flexible choice for renters, students, or smaller item transports.",
    items: ["Studio & 1-bed flats", "Furniture collection", "Appliance delivery", "Storage unit moves"]
  },
  {
    icon: <Box className="w-7 h-7 text-[#D62828]" />,
    title: "Furniture & Single Item Removals",
    description: "Sofas, beds and wardrobes can be heavy and awkward to move. We handle individual large furniture pieces or single-item transport to save you from finding a suitable vehicle.",
    items: ["Sofas & armchairs", "Beds & mattresses", "Wardrobes & cabinets", "Tables & chairs", "Large appliances"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Tell Us About Your Move",
    description: "Contact Hemmings Anytime with collection and delivery addresses, property size, and details of what needs moving. Photos help show the volume of furniture."
  },
  {
    number: "02",
    title: "Discuss the Move",
    description: "We discuss property access, parking, stairs or lifts, item counts, preferred moving dates, and any storage requirements."
  },
  {
    number: "03",
    title: "Arrange Your Moving Day",
    description: "Once details are agreed, a suitable date and time are arranged. Same-day service may be available for smaller moves."
  },
  {
    number: "04",
    title: "We Move Your Items",
    description: "Our professional removal team collects agreed items safely and transports them to your new address, taking care of all heavy lifting."
  },
  {
    number: "05",
    title: "Delivery & Unloading",
    description: "Items are delivered and carefully positioned at your new address. Storage arrangements can also be handled as part of the move."
  }
];

const faqs = [
  {
    q: "How much do house removals cost in East Sussex?",
    a: "The cost depends on the size of the move, the number of items, access, and the distance between the properties. Contact us with your move details for a suitable quote."
  },
  {
    q: "Do you move full houses?",
    a: "Yes. Hemmings Anytime can help with larger house moves as well as smaller flat and furniture moves."
  },
  {
    q: "Do you offer man and van removals?",
    a: "Yes. We provide man and van removals East Sussex for smaller moves, furniture transport and single-item jobs."
  },
  {
    q: "Can you help with flat removals?",
    a: "Yes. Our removal service is suitable for flats and apartments. Tell us about stairs, lifts and access before the move."
  },
  {
    q: "Is same-day removal available?",
    a: "Same-day services may be available for some smaller jobs, depending on the move and current availability."
  }
];

export const HouseRemovalsEastSussexPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <ServicePageHero
        title="House Removals East Sussex"
        description="Moving house takes time. Packing boxes, lifting furniture and finding the right vehicle can make the day feel stressful. Hemmings Anytime provides house removals East Sussex for people who want a simple, reliable moving service."
        icon={<Truck className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={heroImage}
            alt="House Removals East Sussex - Hemmings Anytime"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact?service=house-removals-east-sussex"
              className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C] shadow-lg hover:shadow-xl text-center"
            >
              Get Your Removal Quote
            </Link>
            <a
              href="tel:+447557460940"
              className="whitespace-nowrap rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-md px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-[#1C1C1C] text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-[#F4C430]" />
              07557 460940
            </a>
          </div>
        }
      />

      {/* Intro & Service Overview */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#D62828] text-sm font-semibold">
                <MapPin className="w-4 h-4" /> East Sussex Removals
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
                Reliable House & Flat Removals in East Sussex
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team can help with full house moves, smaller flat moves and furniture transport. We can also help with single large items and secure storage when needed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you are moving across town or to another part of East Sussex, we plan the move around your exact needs and timeline.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact?service=house-removals-east-sussex"
                  className="inline-flex items-center gap-2 font-bold text-[#D62828] hover:text-[#B91C1C] text-lg group"
                >
                  Need help with your move? Contact us today 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#1C1C1C] text-white p-8 rounded-2xl shadow-xl space-y-6">
                <h3 className="text-xl font-bold border-b border-gray-800 pb-4 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#F4C430]" /> Why Choose Hemmings Anytime?
                </h3>
                <ul className="space-y-3">
                  {keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                      <CheckCircle2 className="w-5 h-5 text-[#F4C430] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Flexible Removal Options</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              Our House Removal Services
            </h2>
            <p className="text-lg text-gray-600">
              Every move is different. A one-bedroom flat needs a different service from a family home with several rooms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {serviceOptions.map((opt, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#D62828] shrink-0" />
                <span className="font-semibold text-gray-800 text-sm">{opt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {removalTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-4">
                  {type.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1C1C1C]">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{type.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">Suitable for:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.items.map((item, itemIdx) => (
                      <span key={itemIdx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Man & Van Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0E3A6D] text-sm font-semibold inline-flex items-center gap-2">
                <Truck className="w-4 h-4" /> Cost-Effective Option
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Man and Van Removals East Sussex
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Not every move needs a large removal crew. Our man and van removals service is a great choice for smaller moves, students, renters, and people moving selected pieces of furniture.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {manAndVanUses.map((use, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D62828] shrink-0" />
                    <span>{use}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 text-sm">
                It offers a simple, economical way to move items without hiring a large removal truck or crew.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <ImageWithFallback
                src={manAndVanImg}
                alt="Man and Van Removals East Sussex"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Storage & Removals Spotlight */}
      <section className="py-20 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-[#F4C430]/20 text-[#F4C430] text-sm font-semibold inline-block">
                Removals & Storage Combo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                House Removals and Storage Solutions
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                You may not be moving everything straight into your new home. People often need to store furniture while finishing renovation work or deciding what to keep.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Hemmings Anytime offers integrated storage and transport solutions in East Sussex. Let our team know before your move, and we can plan both removal and storage under one seamless service.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact?service=house-removals-east-sussex"
                  className="inline-block rounded-full bg-[#D62828] hover:bg-[#B91C1C] px-8 py-4 font-bold text-white transition-all shadow-md"
                >
                  Book Removals + Storage
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl">
                <ImageWithFallback
                  src={storageImage}
                  alt="Storage Transport East Sussex"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Step-by-Step</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              How Our House Removal Service Works
            </h2>
            <p className="text-gray-600 text-lg">
              Five clear steps to make your house move in East Sussex stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-100 hover:border-red-200 transition-colors"
              >
                <span className="text-3xl font-black text-[#D62828] block mb-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Common Questions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              FAQs About House Removals East Sussex
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-bold text-lg text-[#1C1C1C] flex justify-between items-center gap-4 hover:text-[#D62828] transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#D62828] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    <p className="mt-4 text-base">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#D62828] to-[#B91C1C] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Get a House Removal Quote in East Sussex
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            Moving home does not have to mean hiring a van and doing all the heavy lifting yourself. Contact Hemmings Anytime today to arrange your house removal in East Sussex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact?service=house-removals-east-sussex"
              className="bg-white text-[#D62828] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-lg inline-block"
            >
              Contact Hemmings Anytime Today
            </Link>
            <a
              href="tel:+447557460940"
              className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-[#F4C430]" /> Call 07557 460940
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
