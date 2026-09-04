import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  Trash2, ShieldCheck, Clock, MapPin, Phone, Mail, ChevronDown, ChevronUp,
  ArrowRight, FileText, CheckCircle2, Star, Scale, HelpCircle, Package,
  Shield, Info, Sparkles, Building2, UserCheck, AlertCircle, RefreshCw,
  Trees, Home, Layers, Sparkle, Wrench
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';

import heroImage from '@/assets/house-clearance-east-sussex-hero.png';
import wasteRemovalImg from '@/assets/waste-removal-image.avif';
import gardenImg from '@/assets/garden-beautification-image.avif';

const rubbishItems = [
  "Old sofas, beds and chairs",
  "Mattresses and wardrobes",
  "Desks and office furniture",
  "Boxes and general household clutter",
  "Old appliances",
  "Garage and shed contents",
  "Broken garden furniture",
  "Branches and garden waste",
  "Small renovation waste",
  "Old computers, printers and monitors",
  "General commercial waste"
];

const gardenItems = [
  "Branches and hedge cuttings",
  "Grass, leaves and plant waste",
  "Old garden furniture",
  "Shed contents",
  "Broken timber and fencing",
  "Unwanted outdoor items",
  "General garden rubbish"
];

const businessWasteItems = [
  "Rental property clear-outs",
  "Shop and office waste",
  "Garage clearances",
  "Renovation leftovers",
  "Old business furniture",
  "Stockroom clutter",
  "Waste left after repair work",
  "Single bulky item collections"
];

const wasteTypesTable = [
  { type: "Household waste", examples: "Furniture, boxes and general clutter" },
  { type: "Garden waste", examples: "Branches, cuttings and garden furniture" },
  { type: "Bulky waste", examples: "Sofas, mattresses and wardrobes" },
  { type: "Appliances", examples: "Fridges, cookers and washing machines" },
  { type: "Office waste", examples: "Desks, chairs, cabinets and equipment" },
  { type: "Renovation waste", examples: "Offcuts, packaging and small DIY debris" }
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Share Job Details",
    description: "Explain what needs removing and where it is located."
  },
  {
    number: "02",
    title: "Get a Quote",
    description: "The price is based on the amount and type of waste, plus access."
  },
  {
    number: "03",
    title: "Choose a Date",
    description: "Pick a collection time that works for the property or business."
  },
  {
    number: "04",
    title: "Items Are Loaded",
    description: "The team carries and loads the agreed items."
  },
  {
    number: "05",
    title: "Space Is Cleared",
    description: "The rubbish is taken away, leaving the area ready for use."
  }
];

const targetCustomers = [
  "Homeowners clearing unwanted items",
  "Landlords preparing rental properties",
  "Tenants leaving a property",
  "Letting agents between tenancies",
  "Shops with unwanted stock or furniture",
  "Offices with old equipment",
  "Tradespeople with leftover job waste",
  "Property managers handling several buildings",
  "Businesses needing after-hours clearance"
];

const otherPropertyServices = [
  { name: "House Clearance", path: "/services/clearance/house-clearance-east-sussex" },
  { name: "Probate Clearance", path: "/services/clearance/probate-clearance-east-sussex" },
  { name: "Office Clearance", path: "/services/clearance/office-clearance-east-sussex" },
  { name: "House Removals", path: "/services/removal/house-removals-east-sussex" },
  { name: "Office Removals", path: "/services/removal/office-removals-east-sussex" },
  { name: "Removal & Storage", path: "/services/storage" },
  { name: "Cleaning Services", path: "/services/cleaning" },
  { name: "Furniture & Appliance Fitting", path: "/contact" },
  { name: "Painting & Decorating", path: "/services/painting-decor" },
  { name: "Carpet & Sofa Cleaning", path: "/services/cleaning" },
  { name: "Patio Pressure Washing", path: "/services/cleaning" },
  { name: "Bin Sanitisation", path: "/services/cleaning" },
  { name: "AC & Ventilation Cleaning", path: "/services/cleaning" }
];

const coveredAreas = [
  "Brighton & Hove", "Eastbourne", "Hastings", "Lewes", "Haywards Heath", "Bexhill", "Seaford"
];

const priceFactorsTable = [
  { factor: "Amount of rubbish", detail: "Larger loads take more time and space" },
  { factor: "Type of waste", detail: "Different materials may need different handling" },
  { factor: "Heavy items", detail: "Bulky furniture needs more lifting" },
  { factor: "Property access", detail: "Stairs, narrow spaces and long carrying distances matter" },
  { factor: "Collection location", detail: "Travel distance can affect the quote" },
  { factor: "Extra services", detail: "Cleaning, storage or removal may add to the job" }
];

const skipComparisonTable = [
  { feature: "Loading included", rubbish: "Yes", skip: "No" },
  { feature: "Heavy lifting", rubbish: "Included", skip: "Customer handles it" },
  { feature: "Furniture removal", rubbish: "Yes", skip: "Depends on skip rules" },
  { feature: "Electrical waste", rubbish: "Can be arranged correctly", skip: "Restrictions may apply" },
  { feature: "Space needed for skip", rubbish: "No skip left at property", skip: "Yes" },
  { feature: "Quick clear-out", rubbish: "Suitable", skip: "Better for slower projects" }
];

const whyChooseBenefits = [
  "Free, clear quotes",
  "Residential and commercial work",
  "Flexible booking times",
  "After-hours availability",
  "Loading and carrying included",
  "Support for small and large jobs",
  "Responsible waste handling",
  "Related removal, storage and cleaning services",
  "Coverage across East Sussex"
];

const faqs = [
  {
    q: "What does rubbish clearance include?",
    a: "The service includes carrying, loading and removing agreed unwanted items from homes, gardens, offices and businesses. Waste is then sorted and handled through suitable disposal or recycling routes."
  },
  {
    q: "What items can be removed?",
    a: "Common items include furniture, mattresses, appliances, garden waste, office equipment, boxes and general rubbish. Restricted or hazardous materials may need special arrangements."
  },
  {
    q: "How much does rubbish clearance cost in East Sussex?",
    a: "The price depends on the amount and type of rubbish, access and collection location. A quote can be provided before the booking so the expected cost is clear."
  },
  {
    q: "Can garden waste be collected?",
    a: "Yes. Branches, hedge cuttings, grass, leaves, old garden furniture and other suitable garden waste can be included in a garden clearance East Sussex job."
  },
  {
    q: "Can businesses book rubbish clearance?",
    a: "Yes. Shops, offices, landlords, tradespeople and other local businesses can arrange one-off or regular collections based on their needs."
  },
  {
    q: "Can old computers and electrical items be removed?",
    a: "Yes. Old computers, monitors, printers and other suitable electrical items can be handled through appropriate WEEE recycling routes."
  }
];

export const RubbishClearanceEastSussexPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <ServicePageHero
        title="Rubbish Clearance East Sussex"
        description="Old rubbish and unwanted items can build up fast, taking away useful space in a home, garden or workplace. Rubbish clearance East Sussex services make it easier to clear unwanted items without the heavy lifting."
        icon={<Trash2 className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={heroImage}
            alt="Rubbish Clearance East Sussex - Hemmings Anytime"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact?service=rubbish-clearance-east-sussex"
              className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C] shadow-lg hover:shadow-xl text-center"
            >
              Book Rubbish Clearance Today
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
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-yellow-50 text-amber-800 text-xs font-extrabold border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-[#D62828] text-[#D62828]" /> 5★ Rated Waste Removal
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-50 text-green-800 text-xs font-extrabold">
                  <Trash2 className="w-3.5 h-3.5 text-green-600" /> Licensed Waste Carrier
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
                Effortless Rubbish & Waste Removal Across East Sussex
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Get a clear quote, choose a suitable collection time, and let the team handle all the heavy loading and removal.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                <a
                  href="https://hemmingsanytime.com/"
                  className="font-bold text-[#0E3A6D] hover:underline"
                >
                  Hemmings Anytime
                </a>{' '}
                provides clearance support for homeowners, landlords, tradespeople and local businesses across East Sussex. From a few bulky items to a larger property clear-out, the service is planned around the size and type of job.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact?service=rubbish-clearance-east-sussex"
                  className="inline-flex items-center gap-2 font-bold text-[#D62828] hover:text-[#B91C1C] text-lg group"
                >
                  Get your free rubbish clearance quote today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0E3A6D] text-white p-8 rounded-2xl shadow-xl space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4C430]/20 text-[#F4C430] mb-1">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Zero Lifting Required</h3>
              <p className="text-sm text-gray-200">
                Our crew carries items directly from your home, garden, loft, or office into the van.
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

      {/* What Can Rubbish Clearance Remove? & Garden Clearance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Section 1: What Can Rubbish Clearance Remove? */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Full Item Spectrum</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                What Can Rubbish Clearance Remove?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Rubbish removal teams take much more than standard garbage bags. Items are carried from the property and loaded for removal — there is no need to move heavy furniture outside first.
              </p>

              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-200 space-y-3">
                <h3 className="font-bold text-[#1C1C1C] text-lg">Common items cleared include:</h3>
                <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                  {rubbishItems.map((item, idx) => (
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
                  src={wasteRemovalImg}
                  alt="East Sussex Waste Removal Truck and Team"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Garden Clearance East Sussex */}
          <div className="grid lg:grid-cols-12 gap-12 items-center pt-10 border-t border-gray-100">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={gardenImg}
                  alt="Garden Clearance East Sussex Green Waste Removal"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold inline-flex items-center gap-2">
                <Trees className="w-4 h-4" /> Garden & Outdoor Spaces
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Garden Clearance East Sussex
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Gardens can become crowded with branches, old furniture, broken fencing and unwanted items. Garden clearance East Sussex services help turn an untidy outdoor area into a clean and usable space.
              </p>

              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-200 space-y-3">
                <h3 className="font-bold text-[#1C1C1C] text-base">Garden jobs can include:</h3>
                <div className="grid sm:grid-cols-2 gap-2.5 pt-1">
                  {gardenItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-sm italic">
                Book a quick garden sweep or a full clear-out all at once. It is great for getting ready to sell a home, move renters, or start repairs.
              </p>
            </div>
          </div>

          {/* Section 3: Waste Clearance for Homes & Businesses */}
          <div className="bg-[#0E3A6D] text-white rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-[#F4C430]/20 text-[#F4C430] text-xs font-extrabold uppercase tracking-wider inline-block">
                Commercial & Domestic
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Waste Clearance East Sussex for Homes & Businesses
              </h2>
              <p className="text-gray-200 text-base leading-relaxed max-w-3xl">
                Waste clearance East Sussex services are useful for more than private homes. Landlords, shops, offices, tradespeople and property managers may also need unwanted waste removed.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {businessWasteItems.map((job, idx) => (
                <div key={idx} className="bg-white/10 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4C430] shrink-0" />
                  <span className="text-sm font-medium text-white">{job}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-300">
              One-off collections are suitable for smaller jobs, while larger businesses can discuss regular clearance needs.
            </p>
          </div>

        </div>
      </section>

      {/* Types of Waste We Remove & How It Works */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Types of Waste We Remove Table */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Categorized Removal</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Types of Waste We Remove
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-1/3">Waste Type</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-2/3">Common Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {wasteTypesTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="py-4 px-6 font-bold text-[#1C1C1C] text-base flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-[#D62828] shrink-0" />
                          <span>{row.type}</span>
                        </td>
                        <td className="py-4 px-6 text-gray-600 text-base">{row.examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-amber-50 border-t border-amber-100 text-center">
                <p className="text-amber-900 text-xs sm:text-sm font-medium">
                  ⚠️ Some restricted or hazardous materials need special arrangements. Details should be shared when requesting a quote so the correct handling plan can be used.
                </p>
              </div>
            </div>
          </div>

          {/* How Rubbish Clearance Works Steps */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Simple Booking</span>
              <h2 className="text-3xl font-extrabold text-[#1C1C1C]">
                How Rubbish Clearance Works
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
              Photos can also help show the amount of waste before the booking. This makes it easier to understand the size of the job.
            </p>
          </div>

          {/* Responsible Waste Disposal & Recycling Banner */}
          <div className="bg-green-50 border border-green-200 rounded-3xl p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-800 shrink-0 font-bold">
                <RefreshCw className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-green-950">Responsible Waste Disposal & WEEE Recycling</h3>
            </div>
            <p className="text-green-900 text-base leading-relaxed">
              Collected rubbish is sorted where possible. Reusable items and recyclable materials can be separated from general waste. Paper, cardboard, metals and suitable electrical items may enter the correct recycling streams.
            </p>
            <p className="text-green-900 text-base leading-relaxed">
              Old electrical equipment can be handled through{' '}
              <a
                href="https://en.wikipedia.org/wiki/Electronic_waste"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0E3A6D] underline hover:text-[#D62828]"
              >
                WEEE recycling
              </a>{' '}
              routes, helping reduce the amount of waste sent to landfill. The aim is simple: sort what can be recovered and handle the remaining waste through suitable disposal channels.
            </p>
          </div>

        </div>
      </section>

      {/* Who Can Use Rubbish Clearance & Other Property Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Who Can Use Rubbish Clearance */}
            <div className="bg-[#F7F9FC] p-8 sm:p-10 rounded-3xl border border-gray-200 space-y-6">
              <h3 className="text-2xl font-bold text-[#1C1C1C] flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-[#D62828]" /> Who Can Use Rubbish Clearance?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rubbish clearance can help many types of customers across East Sussex:
              </p>
              <div className="space-y-3">
                {targetCustomers.map((cust, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#D62828] shrink-0" />
                    <span>{cust}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Property Services */}
            <div className="bg-[#0E3A6D] text-white p-8 sm:p-10 rounded-3xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Layers className="w-6 h-6 text-[#F4C430]" /> Other Property Services
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  A rubbish collection is sometimes only one part of a larger property job. Related services include:
                </p>
                <div className="grid sm:grid-cols-2 gap-2 pt-2">
                  {otherPropertyServices.map((srv, idx) => (
                    <Link
                      key={idx}
                      to={srv.path}
                      className="flex items-center gap-2 text-xs font-semibold text-gray-200 hover:text-[#F4C430] transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-[#F4C430] shrink-0" />
                      <span>{srv.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-300 border-t border-blue-800 pt-4">
                Property owners, landlords, and businesses use this to clear out spaces fast and get them ready for new use.
              </p>
            </div>
          </div>

          {/* Areas Covered */}
          <div className="bg-[#F7F9FC] rounded-3xl p-8 border border-gray-200 text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#1C1C1C]">Rubbish Clearance Areas in East Sussex</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-base font-bold text-gray-800">
              {coveredAreas.map((town, idx) => (
                <span key={idx} className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <MapPin className="w-4 h-4 text-[#D62828]" /> {town}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 max-w-2xl mx-auto">
              Teams clear houses, offices, shops, and yards everywhere. Town locations often have tight parking, while country spots have long paths. Adding these notes helps shape the quote.
            </p>
          </div>

        </div>
      </section>

      {/* What Affects the Price? & Rubbish Clearance vs Skip Hire */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* What Affects the Price? Table */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Price Transparency</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                What Affects the Price?
              </h2>
              <p className="text-gray-600 text-base">
                There is no single price for every clearance because each job is different.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-1/3">Job Factor</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-2/3">What Can Affect the Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {priceFactorsTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="py-4 px-6 font-bold text-[#1C1C1C] text-base">{row.factor}</td>
                        <td className="py-4 px-6 text-gray-600 text-base">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-blue-50/60 border-t border-blue-100 text-center">
                <p className="text-[#0E3A6D] text-sm font-medium">
                  💡 Get a clear price before the team starts working so there are no surprises about the cost.
                </p>
              </div>
            </div>
          </div>

          {/* Rubbish Clearance vs Skip Hire Table */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Service Comparison</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Rubbish Clearance vs Skip Hire
              </h2>
              <p className="text-gray-600 text-base">
                A managed clearance can be easier when there are heavy or bulky items to remove.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider">Feature</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider text-center bg-[#D62828]">Rubbish Clearance</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider text-center">Skip Hire</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {skipComparisonTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="py-4 px-6 font-bold text-[#1C1C1C] text-sm sm:text-base">{row.feature}</td>
                        <td className="py-4 px-6 text-center font-extrabold text-[#D62828] bg-red-50/40 text-sm sm:text-base">{row.rubbish}</td>
                        <td className="py-4 px-6 text-center text-gray-600 text-sm sm:text-base">{row.skip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 text-center text-gray-600 text-sm font-medium">
              Skip hire can work well for some building jobs. A collection service is useful when the customer wants the items carried away without doing the lifting.
            </p>
          </div>

          {/* Why Choose This Clearance Service? */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 space-y-6">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <h3 className="text-2xl font-bold text-[#1C1C1C]">Why Choose This Clearance Service?</h3>
              <p className="text-gray-600 text-sm">A clearance job should be simple, clear and easy to arrange.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {whyChooseBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-[#F7F9FC] border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#D62828] shrink-0" />
                  <span className="text-sm font-bold text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-center">
              <p className="text-amber-900 text-sm font-medium">
                ⭐ More than 500 jobs completed and a 5-star rating provide useful trust signals for customers looking for local property services.
              </p>
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
              Rubbish Clearance FAQs
            </h2>
            <p className="text-gray-600">
              Find quick answers regarding our East Sussex rubbish & waste clearance services.
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
            Book Rubbish Clearance Today
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            Unwanted rubbish does not need to take up useful space. From one bulky item to a larger home, garden or business clear-out, the job can be arranged around a suitable collection time. Get a free quote today and make the next clearance simple.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact?service=rubbish-clearance-east-sussex"
              className="bg-white text-[#D62828] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-lg inline-block"
            >
              Get Your Free Waste Quote
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
