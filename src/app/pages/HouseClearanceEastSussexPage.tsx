import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Truck, Box, Trash2, Home, CheckCircle2, ShieldCheck, Clock, 
  MapPin, Phone, ChevronDown, ChevronUp, ArrowRight, Sparkles, Building2,
  Package, Scale, FileText, HelpCircle, RefreshCw
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';

import heroImage from '@/assets/house-clearance-east-sussex-hero.png';
import livingRoomImage from '@/assets/house-clearance-living-room.png';
import storageImage from '@/assets/house-clearance-storage-transport.png';
import wasteRemovalImg from '@/assets/waste-removal-image.avif';

const keyFeatures = [
  "Experienced removal team",
  "Licensed waste carriers",
  "Eco-friendly disposal methods",
  "Fully insured team",
  "Competitive & transparent pricing",
  "Same-day services available",
  "Flexible transport & storage options"
];

const itemsWeRemove = [
  "Sofas and chairs",
  "Beds and mattresses",
  "Tables and wardrobes",
  "Large household furniture",
  "Appliances & white goods",
  "General household items",
  "Unwanted belongings",
  "Suitable household waste",
  "Items left after a tenancy"
];

const coreServices = [
  {
    icon: <Home className="w-7 h-7 text-[#D62828]" />,
    title: "Full House Clearance",
    description: "A full house clearance can take a lot of time. Moving heavy furniture and making repeated trips to a disposal site is difficult. Our removal team can clear suitable furniture, appliances, household items and waste from across the property. This can help when you are moving, selling a home or preparing a property for its next use."
  },
  {
    icon: <Box className="w-7 h-7 text-[#D62828]" />,
    title: "Partial House Clearance",
    description: "You may not need the whole house cleared. We can help with smaller jobs too. This could include clearing a bedroom, garage, loft or selected areas of a property. You can also arrange a collection for a small number of large items."
  },
  {
    icon: <Truck className="w-7 h-7 text-[#D62828]" />,
    title: "Single Item Removal",
    description: "Sometimes you only need one item taken away. Hemmings Anytime offers single-item removal for suitable bulky items such as sofas, mattresses, beds, appliances, and large furniture. This saves you the trouble of finding a suitable vehicle or making several trips yourself."
  },
  {
    icon: <Building2 className="w-7 h-7 text-[#D62828]" />,
    title: "End-of-Tenancy Clearance",
    description: "Moving out can leave furniture, appliances and other unwanted items behind. Our end-of-tenancy clearance service helps tenants, landlords and property managers clear suitable items from a property to prepare the space for cleaning, repairs, viewings or a new tenant."
  }
];

const useCases = [
  {
    title: "House Clearance for Landlords",
    description: "Landlords may need a property cleared after a tenant leaves furniture, appliances, and other items behind. A quick clearance helps prepare the property for its next stage.",
    highlights: ["End-of-tenancy clearance", "Furniture removal", "Bulky item collection", "Waste removal", "Property preparation", "Transport and storage"]
  },
  {
    title: "House Clearance for Property Sales",
    description: "Preparing a home for sale involves more than cleaning it. Large amounts of furniture make rooms feel smaller. Clearing one room or the whole property creates a cleaner space for viewings.",
    highlights: ["Decluttering before staging", "Full property empties", "Flexible scheduling around estate agents"]
  },
  {
    title: "House Clearance & Storage Solutions",
    description: "There is no need to throw everything removed from a property. You may need to move furniture into storage while renovating or moving home. We will move items you want to keep instead of treating them as waste.",
    highlights: ["Clean, dry & secure units", "Direct transport to storage", "Short or long-term storage in East Sussex"]
  }
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description: "Contact Hemmings Anytime and explain what needs to be removed. Tell us the property location and whether you need a full or partial clearance. Photos can also help show the size of the job."
  },
  {
    number: "02",
    title: "Discuss the Job",
    description: "We discuss the items, property access, and any extra services you may need, such as waste removal, storage, or transport."
  },
  {
    number: "03",
    title: "Arrange Collection",
    description: "After discussing the details, we arrange a suitable collection time. Same-day service may be available for urgent requirements."
  },
  {
    number: "04",
    title: "We Clear the Property",
    description: "Our professional removal team collects agreed items efficiently. You do not need to handle heavy furniture or arrange trips yourself."
  },
  {
    number: "05",
    title: "Disposal or Storage",
    description: "Suitable unwanted items are handled through licensed eco-friendly disposal. Items you wish to keep can be transported directly to storage."
  }
];

const faqs = [
  {
    q: "How much does house clearance cost in East Sussex?",
    a: "The cost depends on the size of the property, the number of items, access, and the type of removal needed. Contact us with details of the job for a suitable quote."
  },
  {
    q: "Can you remove one item?",
    a: "Yes. Single-item removal is available for suitable large items such as sofas, mattresses, appliances and furniture."
  },
  {
    q: "Do you provide end-of-tenancy clearance?",
    a: "Yes. We provide end-of-tenancy clearance for suitable household items and waste. This can help landlords, tenants and property managers prepare a property."
  },
  {
    q: "Can you provide storage?",
    a: "Yes. Hemmings Anytime also offers storage and transport solutions. Tell us if you need items moved into storage instead of disposing of them."
  },
  {
    q: "Is same-day house clearance available?",
    a: "Same-day services are available for some jobs. Availability will depend on the size of the clearance and your collection requirements."
  },
  {
    q: "How do I arrange a house clearance?",
    a: "Contact Hemmings Anytime with the property location and details of the items that need removing. The team can then discuss the clearance and arrange the next steps."
  }
];

export const HouseClearanceEastSussexPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <ServicePageHero
        title="House Clearance East Sussex"
        description="Clearing a house can be a big job. Furniture, appliances, boxes and unwanted items can quickly fill a property. Hemmings Anytime provides reliable house clearance East Sussex services for homes and other spaces."
        icon={<Home className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={heroImage}
            alt="House Clearance East Sussex - Hemmings Anytime"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact?service=house-clearance-east-sussex"
              className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C] shadow-lg hover:shadow-xl text-center"
            >
              Arrange Your Clearance Today
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

      {/* Intro & Key Highlights */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#D62828] text-sm font-semibold">
                <MapPin className="w-4 h-4" /> East Sussex Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
                Reliable Property Clearance in East Sussex
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We can remove single bulky items or clear a full property. Our team can also help with waste removal, transport and storage when needed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every house clearance is different. Some customers need help with a few large items, while others need an empty property. Our property clearance service in East Sussex is tailored to the exact size and requirements of your job.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact?service=house-clearance-east-sussex"
                  className="inline-flex items-center gap-2 font-bold text-[#D62828] hover:text-[#B91C1C] text-lg group"
                >
                  Need to clear a property? Contact us today 
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

      {/* Items We Remove Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              What We Can Remove
            </h2>
            <p className="text-lg text-gray-600">
              Our clearance service covers a wide spectrum of furniture, household goods, appliances, and tenant waste across East Sussex.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemsWeRemove.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 hover:bg-red-50/50 border border-gray-100 transition-all hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#D62828] font-bold shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#D62828]" />
                </div>
                <span className="font-semibold text-gray-800 text-base">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center bg-amber-50 rounded-2xl p-6 border border-amber-200 max-w-4xl mx-auto">
            <p className="text-amber-900 text-sm sm:text-base font-medium">
              💡 <strong>Note:</strong> If you have a large or unusual item, contact us before booking. We can quickly check whether it is suitable for collection.
            </p>
          </div>
        </div>
      </section>

      {/* House Clearance Services Grid */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Tailored Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              House Clearance Services We Provide
            </h2>
            <p className="text-gray-600 text-lg">
              Whether you need an entire house cleared out or just a single couch removed, we have the right team and equipment for the job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1C1C1C]">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase Gallery & Responsible Waste Removal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold inline-flex items-center gap-2">
                <Trash2 className="w-4 h-4" /> Environment First
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Responsible Waste Removal & Eco-Friendly Disposal
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                House clearance often creates a large amount of waste. Taking everything to the local tip yourself can mean several exhausting trips and extra work.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hemmings Anytime provides responsible waste removal as part of its house clearance services. We use <strong>licensed waste carriers</strong> and prioritize eco-friendly disposal methods to minimize landfill impact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This is a simple, hassle-free way to deal with unwanted items while our experienced removal team handles all heavy lifting, collection, and transport.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <ImageWithFallback
                src={livingRoomImage}
                alt="Cleared East Sussex house ready for sale"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Landlords, Property Sales & Storage Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="bg-[#F7F9FC] rounded-3xl p-8 border border-gray-200/80 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#1C1C1C]">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                  {useCase.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#D62828]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Feature Spotlight */}
      <section className="py-20 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-[#F4C430]/20 text-[#F4C430] text-sm font-semibold inline-block">
                Combined Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                House Clearance & Secure Storage in East Sussex
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                There is no need to throw away everything removed from a property. You may need to move furniture into storage while you renovate, move home, or decide what to keep.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Hemmings Anytime offers house clearance East Sussex with integrated storage and transport solutions. We will safely move the items that you want to keep directly into secure storage instead of treating them as waste.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact?service=house-clearance-east-sussex"
                  className="inline-block rounded-full bg-[#D62828] hover:bg-[#B91C1C] px-8 py-4 font-bold text-white transition-all shadow-md"
                >
                  Tell Us If You Need Clearance + Storage
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl">
                <ImageWithFallback
                  src={storageImage}
                  alt="Secure Storage Unit East Sussex"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How House Clearance Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Step-by-Step Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              How House Clearance Works
            </h2>
            <p className="text-gray-600 text-lg">
              We make clearing a property straightforward from initial contact to final disposal or storage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-100 relative hover:border-red-200 transition-colors"
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

      {/* FAQs Section */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find quick answers regarding our East Sussex house clearance services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all shadow-sm"
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
            Get House Clearance in East Sussex Today
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            A house clearance does not have to mean hiring a skip, finding a large vehicle and making repeated trips. Contact Hemmings Anytime to arrange your clearance effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact?service=house-clearance-east-sussex"
              className="bg-white text-[#D62828] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-lg inline-block"
            >
              Contact Hemmings Anytime
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
