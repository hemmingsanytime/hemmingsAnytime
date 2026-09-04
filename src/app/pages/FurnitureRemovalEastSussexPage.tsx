import React, { useState } from 'react';
import { Link } from 'react-router';
import {
  Package, ShieldCheck, Clock, MapPin, Phone, Mail, ChevronDown, ChevronUp,
  ArrowRight, FileText, CheckCircle2, Star, Scale, HelpCircle,
  Shield, Info, Sparkles, Building2, UserCheck, AlertCircle, RefreshCw,
  Home, Armchair, Bed, Wrench, Layers
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';

import heroImage from '@/assets/single-item-removal-image.avif';
import livingRoomImg from '@/assets/house-clearance-living-room.png';
import removalsHeroImg from '@/assets/house-removals-east-sussex-hero.png';

const furnitureItems = [
  "Sofas and armchairs",
  "Beds, mattresses and bed frames",
  "Wardrobes and chests of drawers",
  "Dining tables and chairs",
  "Broken or damaged furniture",
  "Office desks and chairs",
  "Other bulky household or business furniture"
];

const furnitureTypesTable = [
  { type: "Living room", examples: "Sofas, armchairs, coffee tables" },
  { type: "Bedroom", examples: "Beds, mattresses, wardrobes" },
  { type: "Dining", examples: "Tables, chairs, sideboards" },
  { type: "Office", examples: "Desks, chairs, filing cabinets" },
  { type: "Other bulky items", examples: "Broken furniture, bookcases, shelving units" }
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Describe the Furniture",
    description: "Tell us what needs collecting, including rough sizes or photos if helpful."
  },
  {
    number: "02",
    title: "Get a Clear Quote",
    description: "Receive a transparent price based on the number and type of items."
  },
  {
    number: "03",
    title: "Pick a Date",
    description: "Choose a collection date that suits you, including after-hours slots."
  },
  {
    number: "04",
    title: "Heavy Lifting",
    description: "The team lifts and carries each piece out of your property carefully."
  },
  {
    number: "05",
    title: "Responsible Handling",
    description: "Furniture is processed for reuse, donation, or legal recycling."
  }
];

const targetCustomers = [
  "Homeowners replacing old sofas, beds or wardrobes",
  "Landlords clearing furniture between tenancies",
  "Tenants removing items at the end of a rental",
  "Offices updating desks, chairs or storage units",
  "Shops clearing old display furniture",
  "Anyone downsizing or decluttering a property"
];

const whyChooseUsPoints = [
  {
    title: "Vetted & Trained Staff",
    description: "All team members are thoroughly vetted and trained for residential and commercial environments.",
    icon: <UserCheck className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "500+ Jobs Completed",
    description: "Over 500 successful furniture removals and collections completed across East Sussex.",
    icon: <Sparkles className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "5-Star Rating",
    description: "Consistently rated 5 stars by happy local homeowners, landlords, and businesses.",
    icon: <Star className="w-6 h-6 text-[#D62828] fill-[#D62828]" />
  },
  {
    title: "Health & Safety Compliant",
    description: "We strictly adhere to health and safety standards on every single visit.",
    icon: <ShieldCheck className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Upfront & Honest Prices",
    description: "Clear prices with zero hidden fees or unexpected costs added after booking.",
    icon: <CheckCircle2 className="w-6 h-6 text-[#D62828]" />
  },
  {
    title: "Out-of-Hours Collections",
    description: "Flexible evening and weekend slots available so you never have to take time off work.",
    icon: <Clock className="w-6 h-6 text-[#D62828]" />
  }
];

const priceFactorsTable = [
  { type: "Single item", affect: "Size and weight of the piece" },
  { type: "Multiple items", affect: "Number and type of furniture" },
  { type: "Full room or property", affect: "Total volume and access" },
  { type: "Business or office job", affect: "Item count and site access" }
];

const coveredAreas = [
  "Brighton", "Hastings", "Eastbourne", "Hove", "Lewes", "Haywards Heath", "Bexhill", "Seaford"
];

const faqs = [
  {
    q: "What counts as furniture removal?",
    a: "Furniture removal covers the lifting, carrying and collection of unwanted or broken furniture from a home or business, followed by responsible reuse or disposal once it leaves the property."
  },
  {
    q: "What furniture can be collected?",
    a: "The team can collect most household and office furniture, including sofas, beds, wardrobes, tables, desks and broken items. Very large built-in units may need checking in advance."
  },
  {
    q: "How much does furniture removal cost in East Sussex?",
    a: "Cost depends on the number, size and type of items, along with property access. The team gives a transparent quote after a quick description of the job, with no hidden fees."
  },
  {
    q: "Can a single item be collected?",
    a: "Yes, the team offers single item removal, so a customer can book a single sofa, bed or wardrobe on its own, without needing a full property clearance."
  },
  {
    q: "How quickly can furniture be collected?",
    a: "The team offers same-day priority transport for urgent jobs, and arranges after-hours collections for anyone who cannot fit a visit into the working day."
  },
  {
    q: "What happens to collected furniture?",
    a: "The team checks each piece for reuse potential before deciding on disposal, keeping suitable items separate from general waste under a licensed and fully compliant process."
  }
];

export const FurnitureRemovalEastSussexPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#1C1C1C] min-h-screen">
      {/* Hero Section */}
      <ServicePageHero
        title="Furniture Removal East Sussex for Homes and Businesses"
        description="The more unwanted furniture you own, the more space they take up in a room or office. Hemmings Anytime provides Furniture removal East Sussex for bulky, awkward items such as beds, sofas, wardrobes and more."
        icon={<Armchair className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={heroImage}
            alt="Furniture Removal East Sussex - Hemmings Anytime"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact?service=furniture-removal-east-sussex"
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
                <Armchair className="w-4 h-4 text-[#D62828]" /> 24/7 Expert Furniture Removal
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] tracking-tight">
                Stress-Free Furniture Collection & Disposal
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Helping homeowners, landlords, tenants and businesses so they don't even need to worry about lifting anything. Get your free quote now and arrange your collection.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                <a
                  href="https://hemmingsanytime.com/"
                  className="font-bold text-[#0E3A6D] hover:underline"
                >
                  Hemmings Anytime
                </a>{' '}
                removes all heavy furniture manually so that no one needs to do anything. This range of furniture disposal and relocation services East Sussex includes individual items or entire rooms with express 24-hour same day removal for last-minute needs.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact?service=furniture-removal-east-sussex"
                  className="inline-flex items-center gap-2 font-bold text-[#D62828] hover:text-[#B91C1C] text-lg group"
                >
                  Arrange your furniture collection today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#0E3A6D] text-white p-8 rounded-2xl shadow-xl space-y-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4C430]/20 text-[#F4C430] mb-1">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Single Item or Full Loads</h3>
              <p className="text-sm text-gray-200">
                From a single armchair to an entire building of desks and wardrobes.
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

      {/* What Furniture Can Be Removed & Sofa Removal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Section 1: What Furniture Can Be Removed */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Full Variety Covered</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                What Furniture Can Be Removed
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A furniture removal visit is not limited to a single item. The team collects:
              </p>

              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-200 space-y-3">
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  {furnitureItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-base font-bold text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#D62828] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-gray-600">
                💡 <strong>Furniture Collection East Sussex Explained:</strong> Our East Sussex office, house moving, end of tenancy removal team, or house reordering collection will typically carry items as part of an office move, a house move, a house clean out, or a bedroom room change around.
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <ImageWithFallback
                  src={livingRoomImg}
                  alt="East Sussex Living Room Furniture Removal"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Sofa Removal East Sussex for Bulky Items */}
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 sm:p-10 space-y-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 font-bold">
                <Armchair className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-amber-950">Sofa Removal East Sussex for Bulky Items</h3>
            </div>
            <p className="text-amber-900 text-base leading-relaxed">
              Sofas, beds and large wardrobes are among the most difficult to relocate on your own. Sofa removals East Sussex assist lifts, carries and loads these for you to ensure none of your bulky things has ever needed to be scraped in hallways or wrangled onto staircases.
            </p>
            <p className="text-amber-900 text-base leading-relaxed">
              <strong>Why Choose Sofa Removal East Sussex Support:</strong> Most of the people avail sofa removal East Sussex for their old sofas, couches and armchairs when they order a new set of furniture and have their new items delivered to their door. We have also got furniture fitting available too so, if a new settee or wardrobe is delivered on the same day we can take the old one away and deliver the new one and have it assembled for you.
            </p>
          </div>

          {/* Section 3: What Can Be Removed? Table */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Furniture Categories</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                What Can Be Removed?
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden max-w-5xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-1/3">Furniture Type</th>
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-2/3">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {furnitureTypesTable.map((row, idx) => (
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
              <div className="p-6 bg-blue-50/60 border-t border-blue-100 text-center">
                <p className="text-[#0E3A6D] text-xs sm:text-sm font-medium">
                  If a piece is not listed above, ask the team, since a furniture removal East Sussex booking can often take other large or bulky items too.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How the Service Works & Reuse / Responsible Disposal */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* How the Service Works */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Simple Booking</span>
              <h2 className="text-3xl font-extrabold text-[#1C1C1C]">
                How the Service Works
              </h2>
              <p className="text-gray-600 text-base">
                Booking a collection stays simple from start to finish.
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

            <div className="mt-8 text-center text-xs text-gray-500 font-medium">
              💡 There is no need to move anything to the door first; carrying is part of every furniture removal East Sussex booking.
            </div>
          </div>

          {/* Reuse & Responsible Disposal */}
          <div className="bg-green-50 border border-green-200 rounded-3xl p-8 sm:p-10 space-y-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-800 shrink-0 font-bold">
                <RefreshCw className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-green-950">Reuse and Responsible Disposal</h3>
            </div>
            <p className="text-green-900 text-base leading-relaxed">
              Upon collecting furniture, items are assessed to see if they are suitable for reuse or resale before any other action is taken. Suitable furniture is kept separate from general waste where possible. For larger amounts of unwanted household waste, customers can also use our{' '}
              <Link to="/services/clearance/rubbish-clearance-east-sussex" className="font-bold text-[#0E3A6D] underline">
                rubbish clearance East Sussex
              </Link>{' '}
              service.
            </p>
            <p className="text-green-900 text-base leading-relaxed">
              Where furniture cannot be reused, waste is handled through the correct authorised route. Customers can check waste carrier information through the{' '}
              <a
                href="https://www.gov.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0E3A6D] underline"
              >
                Environment Agency's public register.
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* Homes, Landlords & Businesses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Target Audience */}
            <div className="bg-[#F7F9FC] p-8 sm:p-10 rounded-3xl border border-gray-200 space-y-6">
              <h3 className="text-2xl font-bold text-[#1C1C1C] flex items-center gap-2">
                <UserCheck className="w-6 h-6 text-[#D62828]" /> Homes, Landlords and Businesses
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This kind of collection work suits a wide range of situations, including:
              </p>
              <div className="space-y-3">
                {targetCustomers.map((cust, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#D62828] shrink-0" />
                    <span>{cust}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">
                Homeowners who are moving to a new property can also arrange{' '}
                <Link to="/services/removal/house-removals-east-sussex" className="font-bold text-[#D62828] underline">
                  house removals East Sussex
                </Link>{' '}
                for the wider move, including furniture and household belongings.
              </p>
            </div>

            {/* Image & Flexibility Note */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-full min-h-[250px]">
                <ImageWithFallback
                  src={removalsHeroImg}
                  alt="East Sussex Furniture Relocation Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-[#0E3A6D] text-white rounded-2xl shadow-md">
                <p className="text-sm font-medium">
                  Because every job is different, the amount collected on a furniture removal East Sussex visit can range from a single chair to a full house of furniture.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Hemmings Anytime & What Affects the Price */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Why Choose Us */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Professional Excellence</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                Why Choose Hemmings Anytime
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

          {/* What Affects the Price Table */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <span className="text-[#D62828] font-bold uppercase tracking-wider text-sm">Transparent Costing</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C]">
                What Affects the Price
              </h2>
              <p className="text-gray-600 text-base">
                Every furniture removal job is different, so the final price depends on a few factors rather than a flat rate.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0E3A6D] text-white">
                      <th className="py-4 px-6 text-base font-bold uppercase tracking-wider w-1/3">Job Size or Type</th>
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
                  The team gives a clear, transparent quote before booking, based on what needs collecting, and offers special rates for long-term commercial contracts.
                </p>
              </div>
            </div>
          </div>

          {/* Areas Covered Across East Sussex */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#1C1C1C]">Areas Covered Across East Sussex</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-base font-bold text-gray-800">
              {coveredAreas.map((town, idx) => (
                <span key={idx} className="flex items-center gap-1.5 bg-[#F7F9FC] px-4 py-2 rounded-full border border-gray-200">
                  <MapPin className="w-4 h-4 text-[#D62828]" /> {town}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
              The team carries out furniture assortments throughout East Sussex covering Brighton, Hastings, Eastbourne, Hove, Lewes, Haywards Heath, Bexhill and Seaford as well as the surrounding villages and private houses. Town center properties, coastal houses and country homes are included within furniture removals East Sussex.
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
              Furniture Removal FAQs
            </h2>
            <p className="text-gray-600">
              Find quick answers regarding our East Sussex furniture collection and disposal services.
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
            Book Furniture Removal Today
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
            A house full of unused furniture should not be considered permanent! A booking for furniture removal in East Sussex only takes a few moments to make. We provide a free, no obligation quote before confirming a collection date and time which should be convenient for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact?service=furniture-removal-east-sussex"
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
