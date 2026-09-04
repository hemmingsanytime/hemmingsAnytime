import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  Truck, Box, ShieldCheck, Clock, MapPin, Phone, Mail, ChevronDown, ChevronUp,
  ArrowRight, FileText, CheckCircle2, Star, Scale, HelpCircle, Package,
  Shield, Info, Sparkles, Building2, UserCheck, AlertCircle, RefreshCw,
  Home, Lock, Wrench, Calendar, Heart
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';

import heroImage from '@/assets/house-clearance-storage-transport.png';
import storageHeroImg from '@/assets/storage-hero-image.avif';
import removalsHeroImg from '@/assets/house-removals-east-sussex-hero.png';

const whatWeMoveItems = [
  "Full house moves",
  "Office relocations",
  "Single item pickup and delivery",
  "Furniture and appliance fitting",
  "Packing materials and support",
  "After-hours moves"
];

const storageOptionsList = [
  "Short and long-term storage units",
  "24/7 CCTV monitoring",
  "Climate-controlled options",
  "Individual unit alarms",
  "Collection and delivery to storage",
  "Fully insured cover"
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Describe the Move",
    description: "Tell us about your property size, item count, and any storage needs."
  },
  {
    number: "02",
    title: "Get a Clear Quote",
    description: "Receive a transparent price based on the job requirements and distance."
  },
  {
    number: "03",
    title: "Pick a Date",
    description: "Select a date that suits you, including same-day or after-hours slots."
  },
  {
    number: "04",
    title: "Pack and Load",
    description: "The team packs and loads furniture, boxes, and equipment with care."
  },
  {
    number: "05",
    title: "Deliver or Store",
    description: "Items are delivered directly or moved into secure storage as planned."
  }
];

const useCasesList = [
  "Homeowners moving to a new property",
  "Tenants relocating between rentals",
  "Offices moving to new premises",
  "Businesses needing short-term storage during a refit",
  "Landlords storing furniture between tenancies",
  "Anyone downsizing and needing extra space"
];

const whyChooseUsPoints = [
  {
    title: "Vetted & Trained Staff",
    description: "Every worker is vetted and professionally trained to move your home or office safely.",
    icon: <UserCheck className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "500+ Successful Jobs",
    description: "Proven track record with over 500 completed removal and storage jobs across the region.",
    icon: <AwardIcon className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "5-Star Client Rating",
    description: "Consistently rated 5 stars by happy homeowners and local businesses.",
    icon: <Star className="w-6 h-6 text-[#D62828] fill-[#D62828]" />
  },
  {
    title: "Strict Health & Safety",
    description: "We apply rigorous health and safety standards on every single visit.",
    icon: <ShieldCheck className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Honest & Fair Pricing",
    description: "Clear prices with no sneaky hidden extras added on top after booking.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Out-of-Hours Capacity",
    description: "Dedicated evening and weekend slots so you never have to miss work.",
    icon: <Clock className="w-6 h-6 text-[#D62828]" />
  }
];

function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return <Sparkles {...props} />;
}

const priceFactorsTable = [
  { type: "Single item move", affect: "Size, weight and distance" },
  { type: "Full house move", affect: "Property size and access" },
  { type: "Office relocation", affect: "Equipment volume and site access" },
  { type: "Storage add-on", affect: "Unit size and length of stay" }
];

const coveredAreas = [
  "Brighton", "Hastings", "Eastbourne", "Hove", "Lewes", "Haywards Heath", "Bexhill", "Seaford"
];

const faqs = [
  {
    q: "What is included in removal and storage?",
    a: "Removal and storage covers packing, loading, transport and delivery of furniture and belongings, plus secure storage units for anything that needs to stay off-site for a while."
  },
  {
    q: "Can a move happen the same day?",
    a: "Yes, same day removals East Sussex support is available for urgent jobs, using priority transport to fit the move in as quickly as possible."
  },
  {
    q: "How much does removal and storage cost in East Sussex?",
    a: "Cost depends on property size, distance and whether storage is needed. The team gives a transparent quote after a quick description of the job, so there are no surprises on moving day."
  },
  {
    q: "Is storage secure?",
    a: "Yes, storage units come with 24/7 CCTV monitoring, individual unit alarms and fully insured cover for peace of mind."
  },
  {
    q: "Can furniture be fitted at the new property?",
    a: "Yes, the team offers furniture and appliance fitting, including beds, wardrobes and flat-pack items that need assembling."
  },
  {
    q: "Are after-hours moves available?",
    a: "Yes, the team arranges after-hours removal and storage East Sussex bookings for anyone who cannot fit a move into the working day."
  }
];

export const RemovalAndStorageEastSussexPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <ServicePageHero
        title="Removal and Storage East Sussex for Homes & Offices"
        description="Moving house or business is time-consuming, complicated, and hard work. Hemmings Anytime makes removal and storage East Sussex simple by handling both jobs in one streamlined service."
        icon={<Box className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={heroImage}
            alt="Removal and Storage East Sussex - Hemmings Anytime"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact?service=removal-and-storage-east-sussex"
              className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C] shadow-lg hover:shadow-xl text-center"
            >
              Get Your Free Quote
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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#D62828] text-sm font-semibold">
                <Box className="w-4 h-4 text-[#D62828]" /> Streamlined Combined Package
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
                One Team For Both Removals & Secure Storage
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Furniture, boxes, and equipment can be moved and stored together, with flexible same-day and out-of-hours availability. Get a free quote and choose a time that works for you.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                <a
                  href="https://hemmingsanytime.com/"
                  className="font-bold text-[#0E3A6D] hover:underline"
                >
                  Hemmings Anytime
                </a>{' '}
                handles all the carrying, loading, and delivery so customers never have to lift alone. For a small flat or a full house, the crew brings the right van and plans a direct route to get things moved fast.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact?service=removal-and-storage-east-sussex"
                  className="inline-flex items-center gap-2 font-bold text-[#D62828] hover:text-[#B91C1C] text-lg group"
                >
                  Get your free removal and storage quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0E3A6D] text-white p-8 rounded-2xl shadow-xl space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4C430]/20 text-[#F4C430] mb-1">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Same-Day Slots Available</h3>
              <p className="text-sm text-gray-200">
                Need urgent transport or immediate storage? Priority booking is available today.
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

      {/* What We Move & Same Day Removals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* What We Move */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Comprehensive Logistics</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                What We Move
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                The team handles full house and office relocations, along with smaller jobs. Removal and storage East Sussex bookings can include:
              </p>

              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-200 space-y-3">
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {whatWeMoveItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-base font-bold text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#D62828] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                The team handles all the carrying, loading, and delivery so customers never have to lift alone.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={removalsHeroImg}
                  alt="East Sussex Removal and Storage Vehicle"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Same Day Removals East Sussex Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 sm:p-10 space-y-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 font-bold">
                <Clock className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-amber-950">Same Day Removals East Sussex</h3>
            </div>
            <p className="text-amber-900 text-base leading-relaxed">
              Some moves cannot wait for a booked slot weeks ahead. Same day removals East Sussex support covers urgent jobs, using priority transport to get furniture and boxes moved on short notice. This can help with a sudden change of plans, an unexpected end-of-tenancy notice, or simply a move that got booked later than planned.
            </p>
            <p className="text-amber-900 text-base leading-relaxed">
              <strong>Booking Same Day Removals East Sussex:</strong> A same day removals East Sussex request can cover a single item or a full property. The team fits the job in as quickly as possible, without cutting corners on care or handling. A quick call or message with the details, including property access and rough item count, helps the team confirm availability fast.
            </p>
          </div>

        </div>
      </section>

      {/* Storage Options & How It Works */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Storage Options */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={storageHeroImg}
                  alt="Secure Storage Units East Sussex 24/7 CCTV"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0E3A6D] text-sm font-semibold inline-flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#0E3A6D]" /> Secure Facilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Secure Storage Options
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Not everything needs to move straight into a new property. The team offers:
              </p>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-3">
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {storageOptionsList.map((opt, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-gray-800">
                      <ShieldCheck className="w-4 h-4 text-[#D62828] shrink-0" />
                      <span>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 text-base leading-relaxed">
                This makes removal and storage East Sussex bookings useful for renovations, downsizing, or gaps between moving out and moving in. A unit can be booked for a few weeks or for many months, and the team collects items directly from the property, so there is no need to drive boxes and furniture to a facility alone. Customers can also request delivery straight from storage into a new home or office once it is ready.
              </p>
            </div>
          </div>

          {/* How It Works Steps */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Step-by-Step Guidance</span>
              <h2 className="text-3xl font-extrabold text-[#1C1C1C]">
                How It Works
              </h2>
              <p className="text-gray-600 text-base">
                Booking stays simple from the first message to moving day.
              </p>
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

            <div className="mt-8 p-6 bg-blue-50/70 rounded-2xl border border-blue-100 text-center space-y-2">
              <p className="text-[#0E3A6D] text-sm font-medium">
                💪 Don't hire a van, don't rope in your mates for a favour, don't do multiple trips; we do all the heavy lifting for you from start to finish. We will give you a call the day before to discuss the time and access for that day.
              </p>
              <p className="text-xs text-gray-500">
                Customers preparing for a house move can also refer to official{' '}
                <a
                  href="http://gov.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#D62828] underline"
                >
                  GOV.UK moving home guidance
                </a>{' '}
                for practical information when planning their move.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Packing & Fitting & Home & Business Moves */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Packing & Fitting Banner */}
          <div className="bg-[#0E3A6D] text-white rounded-3xl p-8 sm:p-10 space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <Wrench className="w-6 h-6 text-[#F4C430]" /> Packing & Fitting Included
            </h3>
            <p className="text-gray-200 text-base leading-relaxed">
              The service includes materials needed for packing, so clients don't need to buy or collect boxes or wrapping paper. Fragile items receive their individual protection with wrapping, and bigger furniture is covered for transit to the van.
            </p>
            <p className="text-gray-200 text-base leading-relaxed">
              Our service also includes positioning of all furniture and appliances in the new location — placing beds, dismantling and re-assembly of wardrobes and furniture from kits etc, which allows clients to get settled right away rather than waste a weekend following instructions.
            </p>
          </div>

          {/* Home & Business Moves */}
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Flexible Solutions</span>
              <h2 className="text-3xl font-extrabold text-[#1C1C1C]">
                Home & Business Moves
              </h2>
              <p className="text-gray-600 text-base">
                Removal and storage East Sussex support suits many situations:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCasesList.map((useCase, idx) => (
                <div key={idx} className="bg-[#F7F9FC] p-5 rounded-2xl border border-gray-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D62828] shrink-0" />
                  <span className="text-sm font-bold text-gray-800">{useCase}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-base leading-relaxed text-center max-w-4xl mx-auto">
              Every move is tailored around the property and the client's own timetable, instead of following a set method. For example, a small flat may need a very different approach from a full office relocation, with vehicle capacity and manpower planned around the size and access of the property. Customers planning a residential move can also use{' '}
              <Link to="/services/removal/house-removals-east-sussex" className="font-bold text-[#D62828] underline">
                house removals East Sussex
              </Link>
              , while businesses relocating to new premises can arrange{' '}
              <Link to="/services/removal/office-removals-east-sussex" className="font-bold text-[#0E3A6D] underline">
                office removals East Sussex
              </Link>
              .
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us & Pricing Table */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Why Choose Us */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Trusted Local Service</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Why Choose Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUsPoints.map((pt, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                    {pt.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1C1C]">{pt.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{pt.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Transparent Cost Factors</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Pricing
              </h2>
              <p className="text-gray-600 text-base">
                Every move is different, so the final price depends on a few factors rather than a flat rate.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-1/3">Job Type</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-2/3">What May Affect the Quote</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {priceFactorsTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}>
                        <td className="py-4 px-6 font-bold text-[#1C1C1C] text-base">{row.type}</td>
                        <td className="py-4 px-6 text-gray-600 text-base">{row.affect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-blue-50/60 border-t border-blue-100 text-center">
                <p className="text-[#0E3A6D] text-xs sm:text-sm font-medium">
                  The team gives a clear, transparent quote before booking, and offers special rates for long-term commercial contracts. Factors that shape the price include distance, access, the number of items, and whether storage forms part of the job.
                </p>
              </div>
            </div>
          </div>

          {/* Areas We Cover */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#1C1C1C]">Areas We Cover</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-base font-bold text-gray-800">
              {coveredAreas.map((town, idx) => (
                <span key={idx} className="flex items-center gap-1.5 bg-[#F7F9FC] px-4 py-2 rounded-full border border-gray-200">
                  <MapPin className="w-4 h-4 text-[#D62828]" /> {town}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Removal and Storage East Sussex bookings are made on behalf of the team in Brighton, Hastings, Eastbourne, Hove, Lewes, Haywards Heath, Bexhill and Seaford and also take in the towns and villages around those major towns and cities. So whether it be a coastal flat or town-centre offices, or a rural family home, distance rarely gets in the way of your moving and storage!
            </p>
          </div>

        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Frequently Asked Questions</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              Removal & Storage FAQs
            </h2>
            <p className="text-gray-600">
              Find quick answers regarding our East Sussex removal and storage services.
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
            Get Your Quote
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            A move does not need to mean stress, hired vans or last-minute panic. Removal and storage East Sussex bookings take just a few minutes to arrange, with a free, no-obligation quote and a date to match the plan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact?service=removal-and-storage-east-sussex"
              className="bg-white text-[#D62828] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-lg inline-block"
            >
              Get Your Free Quote
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
              <Phone className="w-4 h-4 text-[#F4C430]" /> Call On: 07557 460940
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#F4C430]" /> 24/7 — After-Hours Available
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
