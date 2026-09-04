import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  Heart, ShieldCheck, Clock, MapPin, Phone, Mail, ChevronDown, ChevronUp,
  ArrowRight, FileText, CheckCircle2, Award, Scale, HelpCircle, Package,
  Trash2, Shield, Info, Sparkles, Building2, UserCheck, AlertCircle
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';

import heroImage from '@/assets/house-clearance-east-sussex-hero.png';
import livingRoomImage from '@/assets/house-clearance-living-room.png';
import storageImage from '@/assets/house-clearance-storage-transport.png';

const whyFamiliesChooseUs = [
  "Patient, well-trained staff who understand grief and never rush the process",
  "Fair, upfront pricing with no hidden fees",
  "Clear communication from the first enquiry to the final handover",
  "Quick scheduling, often within days of a first call",
  "Support for executors, solicitors and grieving relatives alike"
];

const probateInvolveItems = [
  "Furniture and household items",
  "Kitchen and bathroom contents",
  "Clothing and personal belongings",
  "Paperwork and old documents",
  "Garage, shed and loft clutter",
  "Garden furniture and tools",
  "White goods and electronics"
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Get in Touch",
    description: "Share the property details, access points and rough timeline with our friendly East Sussex team."
  },
  {
    number: "02",
    title: "Receive a Quote",
    description: "The team gives a clear, no-obligation price with no sales pressure."
  },
  {
    number: "03",
    title: "Book a Visit",
    description: "The team agrees a time around family and solicitor commitments."
  },
  {
    number: "04",
    title: "Sort and Clear",
    description: "The team works room by room, starting with valuables and paperwork."
  },
  {
    number: "05",
    title: "Final Clean",
    description: "The team leaves the property tidy, ready for its next step."
  }
];

const priceFactorsTable = [
  { factor: "Property size", effect: "A small flat costs less to clear than a large family home" },
  { factor: "Volume of belongings", effect: "More items mean more time and labour" },
  { factor: "Access", effect: "Stairs, narrow lanes or limited parking can add to the job" },
  { factor: "Sorting needs", effect: "Extra care for valuables or paperwork adds time" },
  { factor: "Timescale", effect: "An urgent deadline from an executor or solicitor can affect planning" }
];

const comparisonTable = [
  { feature: "Handles sensitive items with care", probate: "Yes", standard: "Sometimes", skip: "No" },
  { feature: "Full property sort included", probate: "Yes", standard: "Sometimes", skip: "No" },
  { feature: "Suitable for executors and solicitors", probate: "Yes", standard: "Not always", skip: "No" },
  { feature: "Speed of service", probate: "Fast and flexible", standard: "Varies", skip: "Fast, but labour still needed" }
];

const prepSteps = [
  "Set aside any documents still needed, such as bank letters or the will",
  "Mark items already promised to specific beneficiaries",
  "Sort out keys, parking and access for the clearance van",
  "Mention any special instructions, such as a room to leave untouched"
];

const coveredAreas = [
  "Lewes", "Eastbourne", "Hastings", "Uckfield", "Battle", "Crowborough", "Seaford", "Hailsham"
];

const faqs = [
  {
    q: "How much does probate clearance cost?",
    a: "The price depends on the property, number of items, access and services required. Contact Hemmings Anytime for a clear, no-obligation quote."
  },
  {
    q: "Can you clear only one room?",
    a: "Yes. Part clearance is available for selected rooms, garages, lofts and other areas."
  },
  {
    q: "Do I need to be at the property?",
    a: "Not always. Access may be arranged through a key safe, estate agent, neighbour or family member."
  },
  {
    q: "Do you provide storage?",
    a: "Yes. Storage and transport solutions are available for belongings that need to be kept."
  },
  {
    q: "Do you remove waste?",
    a: "Yes. Waste removal is available as part of the clearance service. For larger amounts of unwanted household waste, our rubbish clearance East Sussex service may also be suitable."
  },
  {
    q: "Can you clear a garage or loft?",
    a: "Yes. Garages, lofts and sheds can be included where access and items are suitable."
  },
  {
    q: "How do I book probate clearance?",
    a: "Contact Hemmings Anytime with the property address and details of what needs clearing. The team can then discuss the job and arrange a quote."
  }
];

export const ProbateClearanceEastSussexPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <ServicePageHero
        title="Probate Clearance East Sussex"
        description="Clearing a home after someone passes is a heavy job. Hemmings Anytime offers caring Probate Clearance East Sussex for local families. Workers sort items carefully, protect key documents, and clear the space safely."
        icon={<Heart className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={heroImage}
            alt="Probate Clearance East Sussex - Hemmings Anytime"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact?service=probate-clearance-east-sussex"
              className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C] shadow-lg hover:shadow-xl text-center"
            >
              Get a Free Probate Clearance Quote Today
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

      {/* Intro & Lead Section */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#D62828] text-sm font-semibold">
                <Heart className="w-4 h-4 text-[#D62828]" /> Caring, Reliable Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
                Probate Clearance East Sussex – Caring, Reliable Support
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Simple pricing, clear schedules, and free quotes help executors stay stress-free. Working across Lewes, Hastings, Eastbourne, and Uckfield, this Probate Clearance East Sussex service clears the home completely.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Handling legal estates means dealing with endless calls and papers. A clearance service should ease that load, not add to it. The team arrives on schedule, keeps things simple, and explains each step clearly.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact?service=probate-clearance-east-sussex"
                  className="inline-flex items-center gap-2 font-bold text-[#D62828] hover:text-[#B91C1C] text-lg group"
                >
                  Get a free probate clearance quote today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0E3A6D] text-white p-8 rounded-2xl shadow-xl space-y-6">
                <h3 className="text-xl font-bold border-b border-blue-800 pb-4 flex items-center gap-2 text-white">
                  <ShieldCheck className="w-6 h-6 text-[#F4C430]" /> Why Families Choose Hemmings Anytime
                </h3>
                <ul className="space-y-3.5">
                  {whyFamiliesChooseUs.map((point, idx) => (
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

      {/* What Does Probate Clearance Involve? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Understanding the Process</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                What Does Probate Clearance Involve?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Probate clearance means clearing a home once the executor has legal permission to deal with someone's property and belongings through a{' '}
                <a
                  href="https://www.gov.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0E3A6D] hover:underline"
                >
                  Grant of Probate
                </a>
                .
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unlike a standard{' '}
                <Link
                  to="/services/clearance/house-clearance-east-sussex"
                  className="font-bold text-[#D62828] hover:underline"
                >
                  house clearance East Sussex
                </Link>{' '}
                job, probate clearance often means sorting through items collected over a lifetime, during a difficult and emotional time.
              </p>

              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-200 space-y-3">
                <h3 className="font-bold text-[#1C1C1C] text-lg">A typical probate house clearance East Sussex job can include:</h3>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {probateInvolveItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-[#D62828] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={livingRoomImage}
                  alt="Probate Clearance East Sussex Property Sorting"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Sorting Valuables and Paperwork Card */}
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 sm:p-10 space-y-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 font-bold">
                <FileText className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-amber-950">Sorting Valuables and Paperwork</h3>
            </div>
            <p className="text-amber-900 text-base leading-relaxed">
              Important items get separated right away. The team puts jewelry and key papers in a safe place before starting the main work.
            </p>
            <p className="text-amber-900 text-base leading-relaxed">
              Every trusted probate clearance East Sussex provider treats this step with care, since families often only discover later how much a small keepsake means to them.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Simple 5-Step Process</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              Booking a probate clearance East Sussex job follows a few clear, respectful steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {howItWorksSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm relative hover:border-red-200 transition-colors"
              >
                <span className="text-3xl font-black text-[#D62828] block mb-3">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* What Happens on Clearance Day? */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm space-y-4 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1C1C1C] flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#D62828]" /> What Happens on Clearance Day?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The team arrives on schedule and works through the property space by space. Special and valuable items get set aside first, before furniture, appliances and general clutter follow.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Executors do not need to stay for the whole job, though many like to see the early stages and point out anything unusual. Once the team clears everything agreed, they give the property a final clean and tidy before handover.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm italic">
              Many customers also ask about being present on the day and what happens to items once removed — the FAQs below cover both.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown & Comparison Tables */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Table 1: What Affects the Price? */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Transparent Cost Factors</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                What Affects the Price?
              </h2>
              <p className="text-gray-600 text-base">
                There is no single fixed price for a probate clearance East Sussex job, since every property and estate is different. Here is what tends to shape the final cost.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-1/3">Factor</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-2/3">How It Affects the Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {priceFactorsTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="py-4 px-6 font-bold text-[#1C1C1C] text-base">{row.factor}</td>
                        <td className="py-4 px-6 text-gray-600 text-base">{row.effect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-blue-50/60 border-t border-blue-100 text-center">
                <p className="text-[#0E3A6D] text-sm font-medium">
                  💡 A free survey, or even a set of photos, gives an accurate price with no surprises once work starts.
                </p>
              </div>
            </div>
          </div>

          {/* Table 2: Probate Clearance vs Standard Clearance */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Service Comparison</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Probate Clearance vs Standard Clearance
              </h2>
              <p className="text-gray-600 text-base">
                Families often weigh a probate-specific service against more general options. Here is a simple comparison.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider">Feature</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider text-center bg-[#D62828]">Probate Clearance Service</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider text-center">Standard House Clearance</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider text-center">Skip Hire Only</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparisonTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="py-4 px-6 font-bold text-[#1C1C1C] text-sm sm:text-base">{row.feature}</td>
                        <td className="py-4 px-6 text-center font-extrabold text-[#D62828] bg-red-50/40 text-sm sm:text-base">{row.probate}</td>
                        <td className="py-4 px-6 text-center text-gray-600 text-sm sm:text-base">{row.standard}</td>
                        <td className="py-4 px-6 text-center text-gray-600 text-sm sm:text-base">{row.skip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-center text-gray-600 text-sm font-medium">
              This is why many families managing an estate clearance East Sussex job choose a service built specifically around probate needs.
            </p>
          </div>

        </div>
      </section>

      {/* Preparing the Property & Support for Solicitors */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            
            {/* Preparing the Property */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1C1C1C] flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#D62828]" /> Preparing the Property
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A short list of prep steps keeps the clearance day simple. It helps to:
                </p>
                <ul className="space-y-3 pt-2">
                  {prepSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-[#D62828] shrink-0 mt-1.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-xs text-gray-600">
                  💡 <strong>Note:</strong> Nothing needs to be perfect. The team works with missing information every week and can guide a family through each step.
                </p>
              </div>
            </div>

            {/* Support for Solicitors and Executors */}
            <div className="bg-[#0E3A6D] text-white p-8 sm:p-10 rounded-3xl shadow-lg space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3.5 py-1 rounded-full bg-[#F4C430]/20 text-[#F4C430] text-xs font-extrabold uppercase tracking-wider inline-block">
                  Legal & Estate Support
                </span>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Scale className="w-6 h-6 text-[#F4C430]" /> Support for Solicitors & Executors
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Many requests come from solicitors handling family estates. Clear communication and written prices help legal professionals close cases quickly.
                </p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  Families and law firms rely on Hemmings Anytime for Probate Clearance East Sussex because the service makes legal estate work simple and stress-free.
                </p>
              </div>

              {/* Areas Covered */}
              <div className="pt-6 border-t border-blue-800 space-y-3">
                <h4 className="text-sm font-bold text-[#F4C430] flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Areas Covered
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Probate clearance is available across: {coveredAreas.join(", ")}.
                </p>
                <p className="text-[11px] text-gray-400">
                  Please share the full property address when requesting a quote, since travel time and access can affect the price.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              Probate Clearance FAQs
            </h2>
            <p className="text-gray-600">
              Find quick answers regarding our East Sussex probate clearance services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#F7F9FC] rounded-2xl border border-gray-200 overflow-hidden transition-all shadow-sm"
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
                  <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-200">
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
            Book Probate Clearance East Sussex
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            Clearing a loved one's home is hard enough without extra stress. Hemmings Anytime offers a caring probate clearance East Sussex service for families and executors, working around the family's timescale from start to finish.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact?service=probate-clearance-east-sussex"
              className="bg-white text-[#D62828] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-lg inline-block"
            >
              Request Free Probate Quote
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
          </div>
        </div>
      </section>
    </div>
  );
};
