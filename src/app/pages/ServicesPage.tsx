import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  Truck, Box, Trash2, Home, CheckCircle2, ShieldCheck, Clock, 
  MapPin, Phone, ChevronDown, ChevronUp, ArrowRight, Sparkles, Building2,
  Package, Scale, FileText, HelpCircle, RefreshCw, Star, Layers, Calendar,
  Shield, Compass, Info
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';

import heroImage from '@/assets/house-clearance-east-sussex-hero.png';
import livingRoomImage from '@/assets/house-clearance-living-room.png';
import storageImage from '@/assets/house-clearance-storage-transport.png';
import removalsHeroImg from '@/assets/house-removals-east-sussex-hero.png';
import manAndVanImg from '@/assets/man-and-van-removals-east-sussex.png';

interface ServiceItem {
  title: string;
  description: string;
  link: string;
  badge?: string;
  icon: React.ReactNode;
}

const popularServices: ServiceItem[] = [
  {
    title: "House Clearance East Sussex",
    description: "Full homes, single rooms, garages, and lofts, from Eastbourne terraces to Lewes cottages. Sorted, removed, and left tidy.",
    link: "/services/clearance/house-clearance-east-sussex",
    badge: "Most Popular",
    icon: <Home className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Probate Clearance East Sussex",
    description: "A sensitive service for after a bereavement. Paperwork, keepsakes, and valuables are checked carefully first, with solicitors and families kept informed throughout.",
    link: "/services/clearance/probate-clearance-east-sussex",
    icon: <FileText className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Office Clearance East Sussex",
    description: "Commercial spaces cleared with minimal disruption. Evening and weekend slots keep a business running on schedule. Desks, IT equipment, and stock handled with care.",
    link: "/services/clearance/office-clearance-east-sussex",
    icon: <Building2 className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Garden & Rubbish Clearance East Sussex",
    description: "Garden waste, general rubbish, and bulky items removed and disposed of through licensed routes — no fly-tipping, full paperwork provided.",
    link: "/services/clearance/rubbish-clearance-east-sussex",
    icon: <Trash2 className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "House Removals East Sussex",
    description: "Full house and flat moves across the county. Packing, wrapping, loading, and placement, right down to the last box.",
    link: "/services/removal/house-removals-east-sussex",
    badge: "Most Popular",
    icon: <Truck className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Office Removals East Sussex",
    description: "Business relocations planned around opening hours, with weekend and evening slots available so a team loses no working time.",
    link: "/services/removal/office-removals-east-sussex",
    icon: <Building2 className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Furniture Removal East Sussex",
    description: "Single items or a full load, collected and taken on for donation, recycling, or licensed disposal.",
    link: "/contact?service=furniture-removal-east-sussex",
    icon: <Package className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Removal & Storage East Sussex",
    description: "Moving and storing combined into one booking. Short or long-term units, collected and delivered back on request.",
    link: "/services/storage",
    icon: <Box className="w-6 h-6 text-[#D62828]" />
  }
];

const pricingData = [
  { service: "House Clearance", factor: "Property size and waste type" },
  { service: "Probate Clearance", factor: "Property size and type of items" },
  { service: "Office Clearance", factor: "Number of desks, rooms and floors" },
  { service: "Garden & Rubbish Clearance", factor: "Waste volume and site access" },
  { service: "House Removals", factor: "Distance and number of rooms" },
  { service: "Office Removals", factor: "Business size and moving time" },
  { service: "Furniture Removal", factor: "Item size and number of items" },
  { service: "Removal & Storage", factor: "Storage size and storage duration" }
];

const whyChooseUsPoints = [
  {
    title: "Local, Not Just Nearby",
    description: "Weekly work across the county means faster routes, fewer delays, and no learning curve on the day.",
    icon: <MapPin className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Difficult Access? We Can Help",
    description: "Narrow lanes in Lewes, restricted seafront parking in Eastbourne and Hastings, tight staircases in older conversions — all familiar territory, with equipment ready for each one.",
    icon: <Compass className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Parking Permits Arranged in Advance",
    description: "Parking bay suspensions and loading permits get sorted with the council before job day arrives.",
    icon: <FileText className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "One Team From Clearance to Storage",
    description: "The same people who clear a property also load the removal and deliver into storage. No new faces mid-job.",
    icon: <ShieldCheck className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Flexible Clearance & Removal Times",
    description: "Early clearances before a house sale completes, evening office moves, weekend availability — the schedule bends to fit.",
    icon: <Clock className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Careful With Everything",
    description: "Every item wrapped, every surface protected, furniture placed rather than dropped into position.",
    icon: <Shield className="w-6 h-6 text-[#D62828]" />
  }
];

const localKnowledgePoints = [
  {
    title: "Difficult Property Access",
    description: "Victorian and Georgian conversions in Hastings, Lewes, and Eastbourne mean narrow staircases and no lift. Rural properties often bring long, unpaved driveways. Furniture tilters and hoisting straps come as standard for both."
  },
  {
    title: "Local Traffic & Travel Times",
    description: "The A27 and A259 slow down at predictable times of day; seafront routes back up on summer weekends; event days near Eastbourne and the Brighton border add delays. Jobs get scheduled around all three."
  },
  {
    title: "Responsible Waste Disposal",
    description: "Local councils cap bulky waste collections and require licensed carriers for certain items. Everything goes through licensed disposal with documentation kept, so no fines land on the customer."
  }
];

const faqs = [
  {
    q: "How far in advance should a clearance or removal be booked in East Sussex?",
    a: "2–3 weeks works for most jobs, rising to 4+ weeks in peak season (June–September, plus end-of-month dates). Same-week and next-day slots do come up when the schedule allows, so it's worth asking either way."
  },
  {
    q: "Are parking permits included for East Sussex jobs?",
    a: "Yes. Town centres such as Lewes, Eastbourne, and Hastings Old Town often require a parking bay suspension for the van. The application gets submitted and the space confirmed ahead of the job date, with any council fee passed through at cost."
  },
  {
    q: "What does a house clearance in East Sussex actually include?",
    a: "Every room, floor to ceiling — furniture, appliances, general belongings. Items get sorted along the way: donated where a charity can use them, recycled where possible, and the rest taken through licensed waste routes. The property is left swept and tidy."
  },
  {
    q: "Can a property with no lift or awkward access still be cleared?",
    a: "Yes. Much of the local housing stock is Victorian or Georgian, with narrow stairs and no lift, alongside rural properties with long or unpaved driveways. Furniture tilters, hoisting straps, and protective wrapping cover both cases — just flag the access details at booking so the right crew size gets assigned."
  },
  {
    q: "What happens if a booking needs to be cancelled?",
    a: "No charge for cancellations more than 48 hours before the scheduled date. Inside 48 hours, a small fee may apply to cover the reserved crew and vehicle — though rescheduling is always offered first."
  },
  {
    q: "Is storage available if the new East Sussex property isn't ready yet?",
    a: "Yes — this is one of the most common reasons for the bundle service. The old property gets cleared or emptied, everything goes into secure storage, and it's delivered back once the new place is ready. No minimum stay, flexible weekly terms."
  },
  {
    q: "What's involved in probate clearance?",
    a: "The full property gets cleared, but paperwork, valuables, jewellery, and keepsakes are checked for first, before anything is removed. Families and solicitors stay informed throughout, at a pace that respects what's being dealt with."
  }
];

export const ServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <ServicePageHero
        title="House Clearance, Removal & Storage Across East Sussex"
        description="One trusted team handles house clearance, removals and storage from start to finish. We make the whole process simple, reliable and stress-free for homes and businesses across East Sussex."
        icon={<Layers className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={heroImage}
            alt="Services Available in East Sussex - Hemmings Anytime"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact?service=east-sussex-services"
              className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C] shadow-lg hover:shadow-xl text-center"
            >
              Get Your Free East Sussex Quote
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

      {/* Intro Banner Section */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-[#D62828] text-sm font-semibold">
                <MapPin className="w-4 h-4" /> Services Available in East Sussex
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
                Everything Sorted in One Booking
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Separate firms for clearance, removal, and storage cost time and money. A single call covers all three.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're clearing a Victorian property in Lewes, moving flat in Eastbourne, or relocating an office in Hastings, Hemmings Anytime delivers seamless, end-to-end service across East Sussex.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#0E3A6D] text-white p-8 rounded-2xl shadow-xl space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4C430]/20 text-[#F4C430] mb-2">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">One Call Covers It All</h3>
              <p className="text-sm text-gray-200">
                Get a free, no-obligation quote tailored to your exact property and timeline.
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

      {/* Services Grid (Most Popular Services) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Services Available in East Sussex</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              Most Popular Services
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our full range of property clearance, removal, and secure storage solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((srv, idx) => (
              <div
                key={idx}
                className="bg-[#F7F9FC] p-6 rounded-3xl border border-gray-100 hover:border-red-200 transition-all hover:shadow-md flex flex-col justify-between group relative"
              >
                <div>
                  {srv.badge && (
                    <span className="absolute top-4 right-4 bg-[#D62828] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                      {srv.badge}
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1C1C] mb-3 leading-snug">{srv.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{srv.description}</p>
                </div>
                <div>
                  <Link
                    to={srv.link}
                    className="inline-flex items-center gap-2 font-bold text-[#D62828] hover:text-[#B91C1C] text-sm group-hover:translate-x-1 transition-all"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle & Save Highlight Card */}
          <div className="mt-12 bg-gradient-to-r from-[#0E3A6D] via-[#114682] to-[#0E3A6D] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-900 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <Layers className="w-80 h-80 text-white" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F4C430] text-[#1C1C1C] font-extrabold text-xs uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Bundle & Save
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Full Clearance + Removal + Storage
                </h3>
                <p className="text-gray-200 text-base leading-relaxed max-w-2xl">
                  The signature package: clearance, removal, and storage, handled by one crew on one day. No gaps between handoffs.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  to="/contact?service=bundle-signature-package"
                  className="bg-[#D62828] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg text-center w-full sm:w-auto"
                >
                  Book Signature Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide Table */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Transparent Pricing</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              Clear, Simple Pricing for Every Service
            </h2>
            <p className="text-gray-600 text-lg">
              The cost depends on the property size, access, distance, and type or amount of items. We provide a clear quote based on your needs.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0E3A6D] text-white">
                    <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-1/2">Service</th>
                    <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-1/2">What Affects the Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {pricingData.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white hover:bg-red-50/30' : 'bg-gray-50/60 hover:bg-red-50/30'}
                    >
                      <td className="py-4 px-6 font-bold text-[#1C1C1C] text-base flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#D62828] shrink-0" />
                        <span>{item.service}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-600 text-base">{item.factor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-amber-50 border-t border-amber-100 text-center">
              <p className="text-amber-900 text-sm font-medium">
                💡 Need an instant customized quote? Call our East Sussex team on <a href="tel:07557460940" className="font-bold underline text-[#D62828]">07557 460940</a> or submit details via our quote form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why East Sussex Chooses Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              WHY EAST SUSSEX CHOOSES US
            </h2>
            <p className="text-gray-600 text-lg">
              Reliable local expertise, transparent handling, and dedicated crews from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-[#F7F9FC] p-8 rounded-3xl border border-gray-100 hover:border-red-200 transition-colors space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1C]">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* East Sussex Local Knowledge */}
      <section className="py-20 bg-[#1C1C1C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-[#F4C430]/20 text-[#F4C430] text-sm font-semibold inline-block uppercase tracking-wider">
                EAST SUSSEX LOCAL KNOWLEDGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Local Details That Make a Difference
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Years working the county surface things that don't show up on a route planner.
              </p>
              <div className="rounded-3xl overflow-hidden border border-gray-800 shadow-xl mt-6 hidden lg:block">
                <ImageWithFallback
                  src={removalsHeroImg}
                  alt="East Sussex Local Knowledge Removal Team"
                  className="w-full h-[260px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {localKnowledgePoints.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-bold text-[#F4C430] flex items-center gap-2">
                    <Info className="w-5 h-5 text-[#F4C430] shrink-0" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">East Sussex FAQs</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
              Common Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about booking house clearances, removals, and storage in East Sussex.
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
            Clearing or Moving in East Sussex?
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            One call covers it. A free, no-obligation quote takes under 2 minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact?service=east-sussex-services"
              className="bg-white text-[#D62828] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-lg inline-block"
            >
              Get Your Free East Sussex Quote
            </Link>
            <a
              href="tel:+447557460940"
              className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-[#F4C430]" /> 📞 07557 460940
            </a>
          </div>

          <div className="pt-6 border-t border-white/20 flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-red-100">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F4C430]" /> Friendly Staff
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#F4C430] fill-[#F4C430]" /> 5 Star Reviews
            </span>
            <span>·</span>
            <span>Serving East Sussex Since 2018</span>
            <span>·</span>
            <span>After Hours Available</span>
          </div>
        </div>
      </section>
    </div>
  );
};
