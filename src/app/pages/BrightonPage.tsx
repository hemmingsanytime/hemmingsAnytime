import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  MapPin, Phone, Star, Users, Clock, Building2,
  Truck, Package, Sparkles, Box, ClipboardList, Award,
  ParkingSquare, Construction, TrafficCone, Trash2,
  ChevronDown, ChevronUp, CheckCircle2, Quote, ArrowRight,
} from 'lucide-react';
import removalHeroImage from '@/assets/removal-hero-image.avif';

/* ─────────────────────── DATA ─────────────────────── */

const stats = [
  { value: '5.0', label: 'Average Rating' },
  { value: '100%', label: 'Same Team Every Job' },
];

const services = [
  {
    icon: <Truck className="w-7 h-7" />,
    title: 'Residential Removals',
    description: 'Full house and flat removals across Brighton, from Kemptown studios to Hove five-beds. We pack, wrap, load, transport, and place everything exactly where you want it.',
    tag: 'Most Popular',
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Commercial Removals',
    description: 'Office relocations, retail fit-out removals, and warehouse clearances. After-hours service available so your business doesn\'t miss a day. IT equipment handled with care.',
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: 'End-of-Tenancy Cleaning',
    description: 'Deposit-back guaranteed deep cleans that Brighton letting agents actually accept. Kitchens, bathrooms, carpets, ovens — every inch covered to professional standards.',
  },
  {
    icon: <Box className="w-7 h-7" />,
    title: 'Secure Storage',
    description: 'Clean, dry, monitored storage units 15 minutes from Brighton centre. Flexible terms — one week or one year. We pick up, store, and deliver back when you\'re ready.',
  },
  {
    icon: <ClipboardList className="w-7 h-7" />,
    title: 'Packing Service',
    description: 'Don\'t have time to pack? Our team brings materials and packs everything professionally. Fragile items, artwork, electronics — all wrapped and labelled for safe transport.',
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: 'Full Move + Clean + Store',
    description: 'Our signature service. One call books your removal, end-of-tenancy clean, and storage — all handled by the same team, on the same day. No gaps, no handoffs.',
    tag: 'Bundle & Save',
  },
];

const whyChooseUs = [
  {
    title: 'We Handle Brighton\'s Tricky Access',
    description: 'Narrow lanes in The Lanes, permit-only parking in Kemptown, tight stairwells in Regency conversions — we\'ve done them all hundreds of times. No surprises on move day.',
  },
  {
    title: 'Parking Permits Sorted for You',
    description: 'Brighton & Hove Council requires parking suspension for most moves. We handle the permit application so you don\'t have to chase the council yourself.',
  },
  {
    title: 'One Team, Start to Finish',
    description: 'The same crew that loads your boxes also cleans your old place and delivers to storage. No strangers cycling through your home, no finger-pointing between companies.',
  },
  {
    title: 'After Hours & Weekend Service',
    description: 'Need a move at 7am before your tenancy ends at noon? We work early mornings, evenings, and weekends. Brighton doesn\'t stop — neither do we.',
  },
  {
    title: 'Friendly, Careful Crew',
    description: 'Our team treats your belongings like their own. Every item wrapped, every surface protected, every piece of furniture placed — not dumped — exactly where you want it.',
  },
];

const localKnowledge = [
  {
    icon: <ParkingSquare className="w-7 h-7" />,
    title: 'Parking & Permit Requirements',
    description: 'Most Brighton streets require a parking bay suspension (£35–£65 via BH Council, 5 working days notice). We handle the application and always have backup plans for contested bays on busy streets like Western Road or St James\'s Street.',
  },
  {
    icon: <Construction className="w-7 h-7" />,
    title: 'Tricky Building Access',
    description: 'Regency-era conversions in Brunswick and Adelaide Crescent mean tight staircases and no lifts. North Laine properties have narrow rear access. We bring the right equipment — hoisting straps, furniture tilters, and slim trolleys — every time.',
  },
  {
    icon: <TrafficCone className="w-7 h-7" />,
    title: 'Brighton Traffic Patterns',
    description: 'We avoid the A23/A27 junction during school runs, plan around event days at the Brighton Centre and Amex Stadium, and know which seafront routes get gridlocked during summer weekends. Your move stays on schedule.',
  },
  {
    icon: <Trash2 className="w-7 h-7" />,
    title: 'Council Waste & Disposal Rules',
    description: 'Brighton & Hove Council limits bulky waste collections to 3 items per booking. We handle excess furniture disposal through licensed waste carriers — no fly-tipping risk, no fines, full documentation provided.',
  },
];

const reviews = [
  {
    text: 'Moved out of a third-floor flat in Kemptown with no lift and they didn\'t flinch. Had the whole place cleared and cleaned in under four hours. Letting agent approved the clean first time — got my full deposit back.',
    name: 'James M.',
    location: 'Kemptown, Brighton',
    service: 'Removal + End-of-Tenancy Clean',
  },
  {
    text: 'We needed our office contents out on a Friday evening so staff could start in the new space Monday morning. They arrived at 6pm, worked until it was done, and even arranged storage for the furniture we weren\'t keeping. Seamless.',
    name: 'Sarah L.',
    location: 'North Laine, Brighton',
    service: 'Commercial Removal + Storage',
  },
  {
    text: 'Third time using them. Moved from Hove to Worthing this time and they handled parking permits at both ends, packed everything, and cleaned the old place. One call really does cover it all. Won\'t use anyone else.',
    name: 'David P.',
    location: 'Hove → Worthing',
    service: 'Full Bundle: Move + Clean + Pack',
  },
];

const faqs = [
  {
    q: 'How far in advance should I book a move in Brighton?',
    a: 'We recommend 2–3 weeks for most Brighton moves, and 4+ weeks during peak season (June–September and end-of-month dates). That said, we do same-week and next-day moves when capacity allows — call us and we\'ll always try to fit you in.',
  },
  {
    q: 'Do you handle Brighton parking permits for my move?',
    a: 'Yes. Most Brighton streets require a parking bay suspension, which needs 5 working days\' notice with Brighton & Hove Council. We handle the entire application for you and confirm the bay is reserved before your move date. The council fee (typically £35–£65) is passed through at cost.',
  },
  {
    q: 'What\'s included in your end-of-tenancy cleaning for Brighton properties?',
    a: 'Every room cleaned top to bottom: kitchen appliances including inside the oven, all bathrooms descaled and sanitised, carpets vacuumed and spot-treated, all surfaces wiped, windows cleaned internally, and skirting boards done. We clean to a standard that Brighton letting agents accept for deposit return — if the agent flags anything, we come back and fix it at no extra charge.',
  },
  {
    q: 'Can you move me into a flat with no lift in Brighton?',
    a: 'Absolutely. A huge number of Brighton properties are Regency conversions with narrow staircases and no lifts — we handle these every week. We bring furniture tilters, hoisting straps, and protective wrapping as standard. Just let us know the floor level when you book so we assign the right crew size.',
  },
  {
    q: 'What\'s your cancellation policy?',
    a: 'Cancel more than 48 hours before your scheduled date and there\'s no charge. Cancellations within 48 hours may incur a fee to cover the reserved crew and vehicle, but we always try to reschedule first if your plans change. Life happens — we get it.',
  },
  {
    q: 'Can I store items if my new Brighton property isn\'t ready yet?',
    a: 'Yes — and this is actually one of the most common reasons people use our bundle service. We\'ll move you out, clean your old place, and take everything to our secure storage facility (15 minutes from Brighton centre). When your new place is ready, we deliver everything back. No minimum stay, flexible weekly terms.',
  },
];

const nearbyAreas = [
  'Hove', 'Worthing', 'Lewes', 'Eastbourne', 'Shoreham-by-Sea',
  'Peacehaven', 'Rottingdean', 'Saltdean', 'Portslade', 'Newhaven',
  'Burgess Hill', 'Haywards Heath', 'Crawley', 'Horsham',
];

/* ─────────────────────── FAQ ACCORDION ITEM ─────────────────────── */

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-[#0E3A6D]/8 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 lg:p-7 text-left cursor-pointer"
      >
        <span className="font-bold text-[#1C1C1C] text-base lg:text-lg leading-snug pr-4">{q}</span>
        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0E3A6D]/5 flex items-center justify-center">
          {open ? (
            <ChevronUp className="w-5 h-5 text-[#0E3A6D]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#0E3A6D]" />
          )}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="px-6 lg:px-7 pb-6 lg:pb-7 text-[#6B7280] text-base leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  );
};

/* ─────────────────────── PAGE COMPONENT ─────────────────────── */

export const BrightonPage = () => {
  return (
    <div className="bg-white">
      {/* ──── TOP BAR ──── */}
      <div className="bg-[#0E3A6D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm lg:text-base">
          <span className="flex items-center gap-2 font-medium">
            <MapPin className="w-4 h-4 text-[#F4C430]" />
            Serving Brighton, Hove & surrounding areas
          </span>
          <span className="hidden sm:block text-white/30">|</span>
          <a href="tel:07557460940" className="flex items-center gap-2 font-medium hover:text-[#F4C430] transition-colors">
            Need help? Call <span className="font-bold">07557 460940</span> — available after hours
          </a>
        </div>
      </div>

      {/* ──── HERO SECTION ──── */}
      <section className="relative w-full min-h-[650px] lg:min-h-[720px] py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden flex items-center">
        {/* Background */}
        <img
          src={removalHeroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div aria-hidden className="bg-black/60 absolute inset-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 lg:gap-7 items-center text-center"
          >
            {/* Location badge */}
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 text-white text-sm lg:text-base font-medium">
              <MapPin className="w-4 h-4 text-[#F4C430]" />
              Brighton, East Sussex
            </span>

            {/* Stars */}
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 lg:w-6 lg:h-6 fill-[#F4C430] text-[#F4C430]" />
              ))}
              <span className="text-[#F4C430] font-bold text-base lg:text-xl ml-1">5.0</span>
            </div>

            {/* Heading */}
            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-5xl leading-[1.1] lg:leading-tight text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_40%)]">
                One Call. Removed. Cleaned. Stored.
                <br />
                <span className="text-[#F4C430]">— in Brighton.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 max-w-3xl font-medium">
                One team handles everything — so you don't have to.
              </p>
              <p className="text-white/60 text-sm lg:text-base font-medium">
                Trusted by 230+ Brighton households and businesses since 2018
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 w-full sm:w-auto justify-center mt-2">
              <Link
                to="/contact?service=brighton"
                className="bg-[#D62828] border-2 border-transparent text-white flex gap-3 items-center justify-center px-7 lg:px-10 py-3.5 lg:py-4.5 rounded-xl hover:bg-[#B91C1C] transition-all group shadow-lg text-lg font-bold"
              >
                Get Your Free Brighton Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:07557460940"
                className="bg-[#0E3A6D] text-white flex items-center justify-center gap-3 px-7 lg:px-10 py-3.5 lg:py-4.5 rounded-xl hover:bg-[#0C2F58] transition-all shadow-lg text-lg font-bold"
              >
                <Phone className="w-5 h-5" strokeWidth={2.2} />
                07557 460940
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-2">
              {[
                { Icon: Users, label: 'Friendly Staff' },
                { Icon: Clock, label: 'After Hours Available' },
                { Icon: Building2, label: 'Commercial & Residential' },
              ].map(({ Icon, label }) => (
                <span key={label} className="flex items-center gap-2.5 text-base font-semibold text-white tracking-wide">
                  <Icon size={20} strokeWidth={2.5} className="text-[#F4C430]" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── STATS BAR ──── */}
      <section className="bg-[#0E3A6D] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          <div className="grid grid-cols-2 gap-8 lg:gap-12 max-w-2xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-extrabold text-[#F4C430] mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm lg:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SERVICES SECTION ──── */}
      <section className="py-20 lg:py-28 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#0E3A6D]/8 text-[#0E3A6D] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              Services Available in Brighton
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1C1C1C] mb-4 leading-tight">
              Everything You Need. One Booking.
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
              No chasing three different companies. We handle your entire move, clean, and storage from a single phone call.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="relative p-8 rounded-2xl bg-white border border-[#0E3A6D]/5 shadow-md hover:-translate-y-2 hover:shadow-xl hover:border-[#0E3A6D]/15 transition-all duration-300 group flex flex-col"
              >
                {service.tag && (
                  <span className="absolute -top-3 left-6 bg-[#D62828] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {service.tag}
                  </span>
                )}
                <div className="w-14 h-14 rounded-2xl bg-[#0E3A6D]/5 flex items-center justify-center mb-6 text-[#0E3A6D] group-hover:bg-[#0E3A6D] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">{service.title}</h3>
                <p className="text-[#6B7280] text-[0.95rem] leading-relaxed flex-1">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── WHY BRIGHTON CHOOSES US ──── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left intro */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-5/12 lg:sticky lg:top-36"
            >
              <span className="inline-block bg-[#0E3A6D]/8 text-[#0E3A6D] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
                Why Brighton Chooses Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1C1C1C] mb-6 leading-tight">
                We Know Brighton Inside Out
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                We don't just serve Brighton — we work here every week. That means faster routes, fewer surprises, and no wasted time.
              </p>

              {/* Badge */}
              <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-[#0E3A6D]/5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0E3A6D] flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#0E3A6D]">230+</div>
                  <div className="text-[#6B7280] text-sm font-medium">Brighton jobs completed</div>
                </div>
              </div>
            </motion.div>

            {/* Right features */}
            <div className="w-full lg:w-7/12 space-y-5">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-5 bg-[#F7F9FC] rounded-2xl p-6 lg:p-7 border border-transparent hover:border-[#0E3A6D]/10 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-6 h-6 text-[#0E3A6D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1C] text-lg mb-1.5">{item.title}</h3>
                    <p className="text-[#6B7280] text-[0.95rem] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── LOCAL KNOWLEDGE (DARK) ──── */}
      <section className="py-20 lg:py-28 bg-[#0E3A6D] relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-white/10 text-white text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              Brighton Local Knowledge
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              What We Know That Others Don't
            </h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">
              Eight years of working in Brighton has taught us things no GPS or Google search can.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {localKnowledge.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 lg:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F4C430]/15 flex items-center justify-center mb-5 text-[#F4C430]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-blue-100/70 text-[0.95rem] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── REVIEWS ──── */}
      <section className="py-20 lg:py-28 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-[#0E3A6D]/8 text-[#0E3A6D] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              Brighton Reviews
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#1C1C1C] mb-4 leading-tight">
              What Brighton Residents Say
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
              Real reviews from real Brighton customers. No edits, no cherry-picking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white rounded-2xl p-7 lg:p-8 border border-[#0E3A6D]/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#F4C430] text-[#F4C430]" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#0E3A6D]/10 mb-3" />
                <p className="text-[#1C1C1C] text-[0.95rem] leading-relaxed mb-6 flex-1 italic">
                  "{review.text}"
                </p>

                <div className="border-t border-[#0E3A6D]/5 pt-5">
                  <div className="font-bold text-[#1C1C1C]">{review.name}</div>
                  <div className="text-[#6B7280] text-sm">{review.location}</div>
                  <div className="text-[#0E3A6D] text-sm font-medium mt-1">{review.service}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── FAQ ──── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block bg-[#0E3A6D]/8 text-[#0E3A6D] text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-5">
              Brighton FAQs
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1C1C1C] mb-4 leading-tight">
              Questions Brighton Customers Ask
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ──── FINAL CTA ──── */}
      <section className="py-20 lg:py-28 bg-[#0E3A6D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
              Moving in Brighton?
              <br />
              <span className="text-[#F4C430]">One call. We'll handle the rest.</span>
            </h2>
            <p className="text-blue-100/80 text-lg lg:text-xl max-w-2xl">
              Get your free, no-obligation quote in under 2 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 w-full sm:w-auto mt-2">
              <Link
                to="/contact?service=brighton"
                className="bg-[#D62828] text-white px-8 lg:px-10 py-4 rounded-xl font-bold hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
              >
                Get Your Free Brighton Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:07557460940"
                className="bg-white/10 text-white px-8 lg:px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-3 text-lg"
              >
                <Phone className="w-5 h-5" />
                07557 460940
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-4 text-white/70 text-sm font-medium">
              {[
                { Icon: Users, label: 'Friendly Staff' },
                { Icon: Star, label: '5 Star Reviews' },
                { Icon: MapPin, label: 'Serving Brighton Since 2018' },
                { Icon: Clock, label: 'After Hours Available' },
              ].map(({ Icon, label }) => (
                <span key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#F4C430]" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── NEARBY SERVICE AREAS ──── */}
      <section className="py-14 lg:py-16 bg-[#F7F9FC] border-t border-[#0E3A6D]/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-[#1C1C1C] mb-6">Also Serving Areas Near Brighton:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span
                key={area}
                className="bg-white border border-[#0E3A6D]/8 text-[#1C1C1C] text-sm font-medium px-4 py-2 rounded-full hover:border-[#0E3A6D]/20 hover:shadow-sm transition-all cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
