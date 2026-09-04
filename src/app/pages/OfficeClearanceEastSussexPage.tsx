import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  Building2, ShieldCheck, Clock, MapPin, Phone, Mail, ChevronDown, ChevronUp,
  ArrowRight, FileText, CheckCircle2, Star, Scale, HelpCircle, Package,
  Trash2, Shield, Info, Sparkles, UserCheck, AlertCircle, RefreshCw, Briefcase, DollarSign
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';

import heroImage from '@/assets/house-clearance-east-sussex-hero.png';
import officeRemovalImg from '@/assets/office-space-removal-image.avif';
import officeCleaningImg from '@/assets/office-space-cleaning-image.avif';

const officeClearanceItems = [
  "Desks, chairs, and workstations",
  "Filing cabinets and storage units",
  "Broken or unwanted furniture",
  "Old computers, monitors, and cables",
  "Single items or a full office strip-out"
];

const whyChooseUsPoints = [
  {
    title: "After-hours service",
    description: "The crew works evenings and weekends, so the workday never stops and staff never trip over a clearance in progress.",
    icon: <Clock className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Trained staff",
    description: "Every worker knows how to handle office furniture, electronics, and high-value items with care, not just muscle.",
    icon: <UserCheck className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Fair prices",
    description: "Rates stay honest, with no hidden fees added after the job starts. Long-term contracts get special rates.",
    icon: <DollarSign className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "500+ jobs done",
    description: "The team has cleared offices, shops, and homes across the region, from single rooms to full buildings.",
    icon: <Building2 className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "5-star rating",
    description: "Real clients rate the service highly, job after job across East Sussex.",
    icon: <Star className="w-6 h-6 text-[#D62828] fill-[#D62828]" />
  },
  {
    title: "24/7 care",
    description: "Help is available any time, day or night, for urgent commercial clearances too.",
    icon: <ShieldCheck className="w-6 h-6 text-[#D62828]" />
  }
];

const coveredAreas = [
  "Brighton & Hove", "Hastings", "Eastbourne", "Lewes", "Haywards Heath", "Bexhill", "Seaford"
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Ask for a Free Quote",
    description: "Share a few details or photos of the space online or by phone."
  },
  {
    number: "02",
    title: "Pick a Time",
    description: "Choose a slot that fits the business, including evenings or weekends."
  },
  {
    number: "03",
    title: "Clearance Day",
    description: "The crew arrives, removes everything, and sorts it for recycling or disposal."
  },
  {
    number: "04",
    title: "Job Finished",
    description: "The team leaves the space clean and hands over proof of legal, correct disposal."
  }
];

const comparisonTable = [
  { feature: "Labour included", office: "Yes", skip: "No, you load it yourself" },
  { feature: "Street permit needed", office: "No", skip: "Often, yes" },
  { feature: "Electronics disposal", office: "Yes, WEEE-compliant", skip: "Not accepted" },
  { feature: "Speed", office: "Same-day possible", skip: "Days of loading" },
  { feature: "After-hours option", office: "Yes", skip: "No" }
];

const priceGuideTable = [
  { size: "Single item", covers: "One desk, chair, or cabinet", price: "From £40" },
  { size: "Small office", covers: "One room, up to 10 items", price: "From £150" },
  { size: "Medium office", covers: "Several rooms or a small floor", price: "From £350" },
  { size: "Large office", covers: "Full floor or building strip-out", price: "Custom quote" }
];

const faqs = [
  {
    q: "How much does office clearance cost in East Sussex?",
    a: "Small jobs start from around £40 for a single item. Full office clearances cost more and depend on size and access. A free quote confirms the exact price."
  },
  {
    q: "How fast can a team clear an office?",
    a: "Small offices often clear within a day or two of booking. Bigger jobs get scheduled based on size."
  },
  {
    q: "Does the team recycle old computers safely?",
    a: "Yes. Old electronics go through WEEE recycling, which follows UK rules for safe, legal disposal."
  },
  {
    q: "Can clearance happen after work hours?",
    a: "Yes. Evening and weekend slots keep the business running as normal during the day."
  },
  {
    q: "Which towns does the service cover?",
    a: "Brighton, Hove, Hastings, Eastbourne, Lewes, Haywards Heath, Bexhill, and Seaford, with more of East Sussex covered on request."
  },
  {
    q: "Is the service licensed?",
    a: "Yes. All clearance and waste removal work follows UK licensing rules."
  },
  {
    q: "Does the crew move furniture between rooms too?",
    a: "Yes. Along with clearance, the team fits and moves furniture and appliances, so a re-arranged office is just as easy to book as a full clear-out."
  }
];

export const OfficeClearanceEastSussexPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <ServicePageHero
        title="Office Clearance East Sussex"
        description="Office clearance services in East Sussex remove old desks, chairs, filing cabinets and unwanted office equipment. Suitable items can be sorted for reuse or recycling, while other waste is handled in the right way."
        icon={<Building2 className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={heroImage}
            alt="Office Clearance East Sussex - Hemmings Anytime"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact?service=office-clearance-east-sussex"
              className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C] shadow-lg hover:shadow-xl text-center"
            >
              Book an Office Clearance Today
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

      {/* Intro Banner & Proof Section */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-50 text-amber-800 text-xs font-extrabold border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-[#D62828] text-[#D62828]" /> 5★ Rated Commercial Clearance
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#0E3A6D] text-xs font-extrabold">
                  <Building2 className="w-3.5 h-3.5" /> 500+ Jobs Completed
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
                Commercial Office Clearance Across East Sussex
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Businesses can find out what gets removed, how pricing works and what to expect during the clearance. Services are available for offices in Brighton, Hastings, Eastbourne and nearby East Sussex towns.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With over 500 completed jobs and a 5-star rating, Hemmings Anytime offers a trusted option for businesses that need a clear and tidy workspace without disrupting daily operations.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact?service=office-clearance-east-sussex"
                  className="inline-flex items-center gap-2 font-bold text-[#D62828] hover:text-[#B91C1C] text-lg group"
                >
                  Get your free commercial clearance quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0E3A6D] text-white p-8 rounded-2xl shadow-xl space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4C430]/20 text-[#F4C430] mb-1">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">After-Hours Slots Available</h3>
              <p className="text-sm text-gray-200">
                Evening and weekend bookings mean zero downtime for your staff.
              </p>
              <a
                href="tel:07557460940"
                className="inline-block w-full py-3 bg-[#D62828] hover:bg-[#B91C1C] text-white font-bold rounded-full transition-colors shadow-md text-base mt-2"
              >
                Call 07557 460940
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Does Office Clearance Include? & What We Remove */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Comprehensive Workplace Removal</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                What Does Office Clearance Include?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Clearing an office means removing all unwanted company assets. A professional team takes the items away, sorts recyclable goods, and disposes of waste safely. Solutions fit any job size, from a single desk up to an entire floor.
              </p>

              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-200 space-y-3">
                <h3 className="font-bold text-[#1C1C1C] text-lg">A typical office clearance covers:</h3>
                <div className="space-y-2.5 pt-1">
                  {officeClearanceItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-base font-medium text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#D62828] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                Quick clearance of leftover rubbish ensures rental properties stay ready for new tenants.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={officeRemovalImg}
                  alt="East Sussex Office Clearance Service"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* WEEE Recycling & Waste Handling Banner */}
          <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8 sm:p-10 space-y-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#0E3A6D] shrink-0 font-bold">
                <RefreshCw className="w-6 h-6 text-[#0E3A6D]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0E3A6D]">Office Waste Recycling & WEEE Compliance</h3>
            </div>
            <p className="text-blue-950 text-base leading-relaxed">
              Not everything ends up as waste. The crew sorts each item on the spot. Desks and chairs in good condition go straight to reuse programs or recycling centers. Paper and cardboard materials get processed in separate recycling streams.
            </p>
            <p className="text-blue-950 text-base leading-relaxed">
              Old PCs and monitors should be handled according to{' '}
              <a
                href="https://www.gov.uk/guidance/collecting-used-and-waste-electrical-and-electronic-equipment?utm_source=chatgpt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#D62828] underline hover:text-[#B91C1C]"
              >
                WEEE recycling guidance
              </a>
              , with business electrical waste managed under the relevant UK waste rules. For larger amounts of unwanted commercial waste,{' '}
              <Link to="/services/waste-removal" className="font-bold text-[#0E3A6D] underline">
                waste clearance East Sussex
              </Link>{' '}
              services can also be arranged. Sorting takes place on-site, preventing mixed waste and giving every item a distinct plan.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Hemmings Anytime */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Trusted Commercial Partner</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              Why Choose Hemmings Anytime
            </h2>
            <p className="text-gray-600 text-lg">
              Letting a team into a workplace takes trust. Here is why East Sussex businesses pick this one:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-red-200 transition-colors space-y-4 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1C]">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200 max-w-4xl mx-auto text-center">
            <p className="text-gray-700 text-sm sm:text-base font-medium">
              🛡️ The crew follows health and safety rules on every job. This keeps the space safe and leaves a strong first impression for clients who walk in afterward.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Covered & How Commercial Clearance Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-red-50 text-[#D62828] text-sm font-semibold inline-block">
                Countywide Coverage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Commercial Clearance East Sussex Areas
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Commercial clearance East Sussex jobs run across the whole county. The team regularly works in:
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
                Busy town centres, like Brighton's Lanes or Eastbourne's seafront, often have tight parking and short loading times. After-hours booking solves this. The crew clears the space once the building empties, so neighbouring shops and offices never feel the disruption.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={officeCleaningImg}
                  alt="East Sussex Commercial Office Clearance"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* How Commercial Clearance Works Steps */}
          <div className="bg-[#F7F9FC] rounded-3xl p-8 sm:p-12 border border-gray-200/80">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Step-by-Step Workflow</span>
              <h2 className="text-3xl font-extrabold text-[#1C1C1C]">
                How Commercial Clearance East Sussex Works
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorksSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200 relative shadow-sm">
                  <span className="text-3xl font-black text-[#D62828] block mb-3">{step.number}</span>
                  <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-gray-500 italic">
              Small offices often finish in one visit. Bigger jobs, like a multi-room strip-out, get spread across more than one day.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table: Office Clearance vs Skip Hire & Price Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Office Clearance vs Skip Hire */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Smarter Than a Skip</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Office Clearance vs Skip Hire
              </h2>
              <p className="text-gray-600 text-base">
                A skip is not always the best choice for an office. Here is how the two compare:
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider">Feature</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider text-center bg-[#D62828]">Office Clearance</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider text-center">Skip Hire</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {comparisonTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="py-4 px-6 font-bold text-[#1C1C1C] text-sm sm:text-base">{row.feature}</td>
                        <td className="py-4 px-6 text-center font-extrabold text-[#D62828] bg-red-50/40 text-sm sm:text-base">{row.office}</td>
                        <td className="py-4 px-6 text-center text-gray-600 text-sm sm:text-base">{row.skip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-center text-gray-600 text-sm font-medium">
              A skip suits a slow job with no rush. A managed clearance suits a business that needs the space back fast, without staff lifting a single box.
            </p>
          </div>

          {/* Price Guide Table */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Transparent Costing</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Price Guide
              </h2>
              <p className="text-gray-600 text-base">
                Prices depend on how much needs clearing and how easy the space is to reach. This table gives a rough guide. Every job still gets a free, exact quote before booking.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider">Job Size</th>
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
              <div className="p-6 bg-amber-50 border-t border-amber-100 text-center">
                <p className="text-amber-900 text-xs sm:text-sm font-medium">
                  *Guide prices only. The final price depends on access, item count, and how fast the job needs finishing. Contact the team for an exact quote.
                </p>
              </div>
            </div>
          </div>

          {/* Other Services for Businesses */}
          <div className="bg-[#0E3A6D] text-white rounded-3xl p-8 sm:p-10 space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-6 h-6 text-[#F4C430]" /> Other Services for Businesses
            </h3>
            <p className="text-gray-200 text-base leading-relaxed">
              Office clearance is one part of a bigger service. Beyond clearances, the team also provides{' '}
              <Link to="/services/removal/house-removals-east-sussex" className="font-bold text-[#F4C430] hover:underline">
                office removals East Sussex
              </Link>{' '}
              businesses can use when furniture, equipment or other workplace items need moving to another location.
            </p>
            <p className="text-gray-200 text-base leading-relaxed">
              Businesses preparing spaces for new tenants can secure full clear-outs, deep cleaning, and painting through a single provider.
            </p>
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
              Find quick answers regarding our East Sussex office clearance services.
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
            Book an Office Clearance Today
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            Ready to clear the space? Get a free quote online or call now to book a time that fits the business day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact?service=office-clearance-east-sussex"
              className="bg-white text-[#D62828] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-lg inline-block"
            >
              Get Free Commercial Quote
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
