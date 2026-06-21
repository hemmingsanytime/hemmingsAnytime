import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Warehouse, ShieldCheck, Clock, KeyRound, Camera, ThermometerSun, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';
import {
  ServiceCardsGrid,
  ServiceImageGallery,
} from '@/app/components/service-page/ServicePageSections';
import storageHeroImage from "@/assets/storage-hero-image.avif";
import storageImage from "@/assets/storage-image.avif";
import singleStorageImage from "@/assets/single-storage-image.avif";
import officeSpaceRemovalImage from "@/assets/office-space-removal-image.avif";

const features = [
  {
    title: "Short-Term Storage",
    description: "Flexible storage solutions for days or weeks — perfect for house moves, renovations, or temporary downsizing between properties.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Long-Term Storage",
    description: "Secure, affordable long-term storage for businesses and individuals who need a reliable space for months or years.",
    icon: <Warehouse className="w-6 h-6" />
  },
  {
    title: "Secure Facilities",
    description: "Our storage units are fully alarmed, individually locked, and monitored 24/7 to keep your belongings completely safe.",
    icon: <KeyRound className="w-6 h-6" />
  },
  {
    title: "CCTV Monitored",
    description: "Round-the-clock CCTV surveillance across all facilities provides you with peace of mind knowing your items are always protected.",
    icon: <Camera className="w-6 h-6" />
  },
  {
    title: "Climate Controlled",
    description: "Temperature-regulated units available for sensitive items such as electronics, artwork, documents, and antique furniture.",
    icon: <ThermometerSun className="w-6 h-6" />
  },
  {
    title: "Fully Insured",
    description: "All items stored with us are covered by comprehensive insurance, giving you complete peace of mind during the storage period.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
];

const galleryItems = [
  {
    src: storageImage,
    alt: "Secure storage facility with organised units",
    caption: "Secure Storage Units",
  },
  {
    src: singleStorageImage,
    alt: "Single item storage solution",
    caption: "Flexible Unit Sizes",
  },
  {
    src: officeSpaceRemovalImage,
    alt: "Office furniture in secure storage",
    caption: "Commercial Storage",
  },
];

const keyFeatures = [
  "24/7 CCTV monitoring",
  "Individual unit alarms",
  "Flexible access hours",
  "Multiple unit sizes",
  "Competitive monthly rates",
  "Collection & delivery available",
];

const howItWorks = [
  { step: "01", title: "Get in Touch", description: "Contact us to discuss your storage needs and we'll recommend the right unit size for you." },
  { step: "02", title: "We Collect", description: "Our removal team can collect your items and transport them safely to our secure facility." },
  { step: "03", title: "Safe & Sound", description: "Your belongings are stored in our alarmed, CCTV-monitored units until you need them back." },
  { step: "04", title: "We Deliver", description: "When you're ready, we'll deliver your items back to any address at a time that suits you." },
];

export const StoragePage = () => {
  return (
    <div className="bg-white">
      <ServicePageHero
        title="Secure Storage Solutions"
        description="Whether you need short-term storage during a move or long-term space for your business, our secure, climate-controlled facilities keep your belongings safe — anytime."
        icon={<Warehouse className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={storageHeroImage}
            alt="Secure Storage Facilities"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <Link
            to="/contact?service=storage"
            className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C]"
          >
            Reserve Storage Now
          </Link>
        }
      />

      {/* Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceImageGallery items={galleryItems} />
        </div>
      </section>

      {/* Why Choose Us — Split Layout */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left — Intro */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-5/12 lg:sticky lg:top-32"
            >
              <div className="w-12 h-1.5 bg-[#F4C430] rounded-full mb-6" />
              <h2 className="text-4xl font-extrabold text-[#1C1C1C] mb-6 leading-tight">
                Storage That Works Around You
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                At Hemmings Anytime, we understand that every storage need is different. That's why we offer a range of unit sizes, flexible contracts, and optional collection and delivery services to make storing your belongings as hassle-free as possible.
              </p>
              <Link
                to="/contact?service=storage"
                className="inline-flex items-center gap-2 bg-[#0E3A6D] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#0C2F58] transition-all shadow-lg hover:shadow-xl"
              >
                Get a Free Quote
              </Link>
            </motion.div>

            {/* Right — Key Features Grid */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-[#0E3A6D]/8 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#0E3A6D]/8 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[#0E3A6D]" />
                    </div>
                    <span className="text-[#1C1C1C] font-semibold text-[0.95rem] leading-snug pt-2">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-12 h-1.5 bg-[#F4C430] rounded-full mb-6 mx-auto" />
            <h2 className="text-3xl font-extrabold text-[#1C1C1C] mb-4">Our Storage Options</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">Flexible, secure, and tailored to your needs.</p>
          </motion.div>

          <ServiceCardsGrid
            items={features}
            wrapperClassName="flex flex-wrap gap-8 justify-center"
            cardClassName="p-8 rounded-2xl border border-[#0E3A6D]/10 bg-[#F7F9FC] hover:bg-white hover:shadow-xl transition-all group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-12 h-1.5 bg-[#F4C430] rounded-full mb-6 mx-auto" />
            <h2 className="text-3xl font-extrabold text-[#1C1C1C] mb-4">How It Works</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">Getting started with our storage service is simple and straightforward.</p>
          </motion.div>

          <div className="relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden md:block absolute top-[3.5rem] left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-[#0E3A6D]/10 via-[#0E3A6D]/20 to-[#0E3A6D]/10" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.45 }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-16 h-16 bg-[#0E3A6D] text-[#F4C430] rounded-2xl flex items-center justify-center mx-auto mb-6 text-xl font-extrabold shadow-lg shadow-[#0E3A6D]/20">
                    {item.step}
                  </div>
                  <div className="bg-white rounded-2xl p-6 border border-[#0E3A6D]/8 shadow-sm hover:shadow-lg transition-all h-full">
                    <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">{item.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Storage + Removal Bundle CTA */}
      <section className="py-20 bg-[#0E3A6D]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold mb-6 text-white">Need Removal & Storage Together?</h2>
            <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">Bundle our removal and storage services for a seamless, stress-free experience. We'll handle the move and keep your items safe until you're ready.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact?service=storage"
                className="bg-[#D62828] text-white px-10 py-4 rounded-full font-bold hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl inline-block"
              >
                Get a Storage Quote
              </Link>
              <Link
                to="/services/removal"
                className="bg-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20 inline-block"
              >
                View Removal Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
