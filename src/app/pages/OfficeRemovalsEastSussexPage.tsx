import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  Truck, ShieldCheck, Clock, MapPin, Phone, Mail, ChevronDown, ChevronUp,
  ArrowRight, FileText, CheckCircle2, Star, Scale, HelpCircle, Package,
  Trash2, Shield, Info, Sparkles, UserCheck, AlertCircle, RefreshCw, Briefcase, DollarSign, Box, Tag
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';

import heroImage from '@/assets/house-removals-east-sussex-hero.png';
import manAndVanImg from '@/assets/man-and-van-removals-east-sussex.png';
import officeRemovalImg from '@/assets/office-space-removal-image.avif';

const whyChooseUsPoints = [
  "Experienced removal team",
  "Fully insured team",
  "Competitive and transparent pricing",
  "Same-day services available",
  "Flexible transport options",
  "Storage solutions available",
  "Help with single items to full house moves"
];

const businessRemovalServicesList = [
  "Full house and office relocations",
  "Single item pickup and delivery",
  "Furniture and appliance fitting at the new site",
  "Same-day priority transport for urgent moves",
  "Packing materials provided on request",
  "After-hours availability, including evenings and weekends",
  "Short and long-term storage, with 24/7 CCTV monitoring",
  "Climate-controlled storage units for sensitive stock or files"
];

const businessTypes = [
  {
    title: "Small Offices & Start-ups",
    description: "Small offices, start-ups, or micro-teams can complete a move in just a few hours. Desks, chairs, and boxes fit into a single trip, with on-site furniture placement included."
  },
  {
    title: "Large Offices & Multi-Floor Moves",
    description: "Bigger relocations cover multiple rooms, departments, and floors. Items get labelled and loaded in a planned order, so unpacking at the new site follows the same layout as the old one, cutting down on lost time during the first week."
  },
  {
    title: "Retail and Warehouse Moves",
    description: "Shop fittings, stockrooms, and warehouse shelving all need careful handling, often outside trading hours. Evening and weekend slots keep a shop or unit open to customers while the move happens behind the scenes."
  },
  {
    title: "Single Items to Full House Moves",
    description: "Not every job is a business move. The same crew handles single item pickups, full house relocations, and everything between — useful for a business owner moving home at the same time as relocating the office."
  }
];

const coveredAreas = [
  "Brighton & Hove", "Hastings", "Eastbourne", "Lewes", "Haywards Heath", "Bexhill", "Seaford"
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Get a Free Quote",
    description: "Share the move details, item list, or a few photos online or by phone."
  },
  {
    number: "02",
    title: "Book a Date",
    description: "Pick a time that suits the business, including evenings or weekends."
  },
  {
    number: "03",
    title: "Pack and Load",
    description: "The crew packs fragile items, protects furniture, and loads the van carefully."
  },
  {
    number: "04",
    title: "Transport & Unload",
    description: "Everything travels safely to the new site and gets placed where it belongs."
  },
  {
    number: "05",
    title: "Job Done",
    description: "The old space gets cleared, and the new one is ready to use."
  }
];

const comparisonTable = [
  { feature: "Labour included", office: "Yes", diy: "No, staff do the lifting" },
  { feature: "Insurance on items", office: "Yes", diy: "Usually none" },
  { feature: "Same-day option", office: "Yes", diy: "Rarely" },
  { feature: "Furniture fitting at new site", office: "Yes", diy: "Extra time and tools needed" },
  { feature: "Storage available", office: "Yes", diy: "Not included" }
];

const priceGuideTable = [
  { size: "Single item", covers: "One desk, chair, or appliance", price: "From £45" },
  { size: "Small office", covers: "One room, up to 10 items", price: "From £180" },
  { size: "Medium office", covers: "Several rooms or a small floor", price: "From £400" },
  { size: "Large office", covers: "Full floor or full building move", price: "Custom quote" }
];

const faqs = [
  {
    q: "How much does an office removal cost in East Sussex?",
    a: "Small single-item moves start from around £45. Full office relocations cost more, based on size and distance. A free quote confirms the exact price, and the current offer takes 20% off any service."
  },
  {
    q: "Can a removal happen the same day?",
    a: "Yes. Same-day priority transport is available for urgent moves, subject to availability."
  },
  {
    q: "Is the removal team insured?",
    a: "Yes. The team is fully insured, covering furniture and equipment during transport."
  },
  {
    q: "Does the service include packing materials?",
    a: "Yes. Packing materials are provided on request, so fragile items travel safely."
  },
  {
    q: "Can items go into storage during a move?",
    a: "Yes. Short and long-term storage is available, including one month free storage with the current offer."
  },
  {
    q: "Which towns does the service cover?",
    a: "Brighton, Hove, Hastings, Eastbourne, Lewes, Haywards Heath, Bexhill, and Seaford, with more of East Sussex covered on request."
  }
];

export const OfficeRemovalsEastSussexPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <ServicePageHero
        title="Office Removals East Sussex"
        description="Office removal services in East Sussex relocate desks, inventory, and equipment without business interruptions. Hemmings Anytime covers packing, heavy lifting, and insured transport with fast same-day options."
        icon={<Truck className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={heroImage}
            alt="Office Removals East Sussex - Hemmings Anytime"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact?service=office-removals-east-sussex"
              className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C] shadow-lg hover:shadow-xl text-center"
            >
              Book Your Move Today
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

      {/* Intro & Special Offer Banner */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Limited Time Discount Banner */}
          <div className="mb-10 bg-gradient-to-r from-[#D62828] to-[#B91C1C] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-red-700">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5 text-[#F4C430]" /> Limited Offer
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Claim 20% Off + 1 Month Free Storage
              </h3>
              <p className="text-red-100 text-sm sm:text-base">
                Book your East Sussex office move today and receive a 20% discount plus 30 days of complimentary secure storage.
              </p>
            </div>
            <Link
              to="/contact?service=office-removals-east-sussex"
              className="bg-white text-[#D62828] px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all shadow-md text-base whitespace-nowrap shrink-0"
            >
              Claim 20% Offer Now
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#0E3A6D] text-sm font-semibold">
                <Truck className="w-4 h-4 text-[#0E3A6D]" /> Fast & Insured Relocations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
                Seamless Office Relocations Across East Sussex
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                A business move brings a long list of jobs — heavy desks, tangled cables, boxes that never seem to end. Office removals East Sussex businesses trust take that list away.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Professional staff cover packing, lifting, and transport for single items or multi-story office buildings, helping new spaces open for business fast.
              </p>

              {/* Cross Link to Office Clearance */}
              <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
                <h4 className="font-bold text-amber-950 flex items-center gap-2 text-base">
                  <Building2 className="w-5 h-5 text-amber-700" /> Need Office Clearance Too?
                </h4>
                <p className="text-amber-900 text-sm leading-relaxed">
                  Commercial spaces sometimes need clearing before or after a move. Our{' '}
                  <Link to="/services/clearance/office-clearance-east-sussex" className="font-bold text-[#D62828] underline">
                    office clearance East Sussex
                  </Link>{' '}
                  service handles unwanted desks, IT equipment, furniture, and stock with care, helping businesses prepare their space quickly.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact?service=office-removals-east-sussex"
                  className="inline-flex items-center gap-2 font-bold text-[#D62828] hover:text-[#B91C1C] text-lg group"
                >
                  Get your free move quote now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0E3A6D] text-white p-8 rounded-2xl shadow-xl space-y-6">
                <h3 className="text-xl font-bold border-b border-blue-800 pb-4 flex items-center gap-2 text-white">
                  <ShieldCheck className="w-6 h-6 text-[#F4C430]" /> Why Choose Hemmings Anytime?
                </h3>
                <ul className="space-y-3.5">
                  {whyChooseUsPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-[#F4C430] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Removal Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Full-Service Commercial Moving</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                What Do Office Removals Include?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A removal company{' '}
                <a
                  href="https://en.wikipedia.org/wiki/East_Sussex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0E3A6D] hover:underline"
                >
                  East Sussex
                </a>{' '}
                businesses rely on needs to cover more than just a van and a driver. Office moving shifts an entire business operation to a new property cleanly and efficiently.
              </p>

              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-200 space-y-3">
                <h3 className="font-bold text-[#1C1C1C] text-lg">Our comprehensive business removal service handles:</h3>
                <div className="space-y-2.5 pt-1">
                  {businessRemovalServicesList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-base font-medium text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#D62828] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                One team covers the whole move, from the first box packed to the last shelf fitted at the new address.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={manAndVanImg}
                  alt="East Sussex Business Removal Van and Logistics Team"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Moves for Every Business Size */}
          <div className="space-y-10 pt-10 border-t border-gray-100">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Tailored Relocations</span>
              <h2 className="text-3xl font-extrabold text-[#1C1C1C]">
                Moves for Every Business Size
              </h2>
              <p className="text-gray-600 text-base">
                No two moves look the same. A one-person consultancy needs a desk and a filing cabinet moved across town. A growing company needs three floors packed, labelled, and unloaded in the right order. The same team handles both.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {businessTypes.map((biz, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F9FC] p-8 rounded-3xl border border-gray-200/80 hover:border-red-200 transition-colors space-y-3"
                >
                  <h3 className="text-xl font-bold text-[#1C1C1C] flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#D62828]" />
                    <span>{biz.title}</span>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{biz.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Office Removal Areas in East Sussex & How It Works */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0E3A6D] text-sm font-semibold inline-block">
                Local Knowledge
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Office Removal Areas in East Sussex
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A removal company East Sussex wide needs strong local knowledge, not just a big van. The crew regularly works across:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-1">
                {coveredAreas.map((town, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-base font-bold text-gray-800">
                    <MapPin className="w-4 h-4 text-[#D62828] shrink-0" />
                    <span>{town}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed text-base pt-2">
                Successful moves factor in local streets, parking permits, and strict loading hours. Advance route planning keeps transport on schedule, particularly in congested areas like the Eastbourne seafront or Brighton's Lanes.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={officeRemovalImg}
                  alt="Commercial Office Relocation East Sussex"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* How Office Removals Work Steps */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Clear Execution</span>
              <h2 className="text-3xl font-extrabold text-[#1C1C1C]">
                How Office Removals Work
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {howItWorksSteps.map((step, idx) => (
                <div key={idx} className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-100 relative">
                  <span className="text-3xl font-black text-[#D62828] block mb-3">{step.number}</span>
                  <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-gray-500 italic">
              Small office moves often finish within a single day. Larger relocations, spread across multiple floors, get scheduled over more than one visit.
            </p>
          </div>

        </div>
      </section>

      {/* Comparison Table: Office Removals vs DIY & Price Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Office Removals vs DIY Moving */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Professional vs DIY</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Office Removals vs DIY Moving
              </h2>
              <p className="text-gray-600 text-base">
                Some businesses try to move everything themselves. Here's how that compares to booking a removal team:
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider">Feature</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider text-center bg-[#D62828]">Office Removals</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider text-center">DIY Moving</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparisonTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="py-4 px-6 font-bold text-[#1C1C1C] text-sm sm:text-base">{row.feature}</td>
                        <td className="py-4 px-6 text-center font-extrabold text-[#D62828] bg-red-50/40 text-sm sm:text-base">{row.office}</td>
                        <td className="py-4 px-6 text-center text-gray-600 text-sm sm:text-base">{row.diy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-center text-gray-600 text-sm font-medium">
              DIY moving works for a tiny office with almost nothing to shift. A managed removal suits any business that needs the new site running fast, without staff pulling muscles instead of doing their jobs.
            </p>
          </div>

          {/* Removal Prices Table */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Transparent Costing</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Removal Prices
              </h2>
              <p className="text-gray-600 text-base">
                Costs change based on distance, item count, and access at both ends. This table gives a rough starting point. A free, exact quote always follows a quick look at the job.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider">Move Size</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider">What It Covers</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider text-right">Guide Price*</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {priceGuideTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="py-4 px-6 font-bold text-[#1C1C1C] text-base">{row.size}</td>
                        <td className="py-4 px-6 text-gray-600 text-base">{row.covers}</td>
                        <td className="py-4 px-6 text-right font-extrabold text-[#D62828] text-base">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-red-50 border-t border-red-100 text-center">
                <p className="text-[#D62828] text-xs sm:text-sm font-bold">
                  🎁 *Guide prices only. The final price depends on distance, access, and how many items need moving. A 20% discount currently applies to any service booked, plus one month of free storage.
                </p>
              </div>
            </div>
          </div>

          {/* Storage During a Move */}
          <div className="bg-[#0E3A6D] text-white rounded-3xl p-8 sm:p-10 space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Box className="w-6 h-6 text-[#F4C430]" /> Storage During a Move
            </h3>
            <p className="text-gray-200 text-base leading-relaxed">
              Flexible storage bridges the gap when new offices cannot take everything at once. Secure units offer 24/7 CCTV, individual alarms, and climate-controlled environments for sensitive records and valuable stock.
            </p>
            <p className="text-gray-200 text-base leading-relaxed">
              Items can be collected, stored, and delivered again once the new office is ready — useful for a phased move or a business still finalising its new floor plan.
            </p>
            <div className="pt-2">
              <Link to="/services/storage" className="inline-flex items-center gap-2 font-bold text-[#F4C430] hover:underline text-base">
                <span>Explore Secure Storage Options</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              Office Removal FAQs
            </h2>
            <p className="text-gray-600">
              Find quick answers regarding our East Sussex office removal services.
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
            Book Your Move Today
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            Ready to move? Claim 20% off any service plus one month of free storage, and get a free, no-obligation quote for the move.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact?service=office-removals-east-sussex"
              className="bg-white text-[#D62828] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-lg inline-block"
            >
              Get Free Relocation Quote
            </Link>
            <a
              href="tel:+447557460940"
              className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-[#F4C430]" /> 📞 07557 460940
            </a>
          </div>

          <div className="pt-6 border-t border-white/20 flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-red-100">
            <span className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#F4C430]" /> 07557 460940 / 07429 312968
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#F4C430]" /> hemmingsanytime@gmail.com
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#F4C430]" /> Hours: 24/7 — After-Hours Available
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
