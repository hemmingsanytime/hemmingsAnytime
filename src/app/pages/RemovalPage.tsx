import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Truck, Box, Home, Package, ArrowRightLeft, Clock, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';
import {
  ServiceCardsGrid,
  ServiceImageGallery,
} from '@/app/components/service-page/ServicePageSections';
import removalHeroImage from "@/assets/removal-hero-image.avif";
import officeSpaceRemovalImage from "@/assets/office-space-removal-image.avif";
import singleItemRemovalImage from "@/assets/single-item-removal-image.avif";
import wasteRemovalImage from "@/assets/waste-removal-image.avif";
import movingAndRelocationImage from "@/assets/moving-and-relocation-image.avif";

const features = [
  {
    title: "Full House & Office Removal",
    description: "Complete packing, loading, transport, and unloading for residential and commercial relocations of any size.",
    icon: <Truck className="w-6 h-6" />
  },
  {
    title: "Single Item Removal",
    description: "No job is too small. We offer quick pickup for individual appliances, mattresses, or large furniture pieces.",
    icon: <Box className="w-6 h-6" />
  },
  {
    title: "End-of-Tenancy Clearance",
    description: "Specialised waste removal designed to meet landlord and estate agent standards, leaving the property ready for the next tenant.",
    icon: <Home className="w-6 h-6" />
  },
  {
    title: "Furniture & Appliance Fitting",
    description: "We don't just deliver — we assemble and install your furniture and appliances exactly where you need them.",
    icon: <Package className="w-6 h-6" />
  },
  {
    title: "Immediate Drop-Off & Pickup",
    description: "Need something moved now? Our priority carriage service handles urgent transport requests with same-day availability.",
    icon: <ArrowRightLeft className="w-6 h-6" />
  },
  {
    title: "After-Hours Availability",
    description: "We work around your schedule. Evening, weekend, and bank holiday removals are available to minimise disruption to your routine.",
    icon: <Clock className="w-6 h-6" />
  },
];

const galleryItems = [
  {
    src: officeSpaceRemovalImage,
    alt: "Professional office removal team packing and loading",
    caption: "Office Space Removal",
  },
  {
    src: movingAndRelocationImage,
    alt: "Residential moving and relocation service",
    caption: "Moving & Relocation",
  },
  {
    src: singleItemRemovalImage,
    alt: "Single item removal for large furniture",
    caption: "Single Item Removal",
  },
];

const keyFeatures = [
  "Fully insured removal team",
  "Careful handling of fragile items",
  "Competitive transparent pricing",
  "Same-day service available",
  "Packing materials provided",
  "No hidden fees",
];

export const RemovalPage = () => {
  return (
    <div className="bg-white">
      <ServicePageHero
        title="Professional Removal Services"
        description="From full house moves to single item pickups, our experienced team handles every removal with care, efficiency, and professionalism — anytime you need us."
        icon={<Truck className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={removalHeroImage}
            alt="Professional Removal Services"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <Link
            to="/contact?service=removal"
            className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C]"
          >
            Book Your Removal
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
                Expert Removal Solutions Anytime, Anywhere
              </h2>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                Hemmings Anytime provides a comprehensive range of removal services designed to take the stress out of moving. Whether you're relocating an entire office or just need to get rid of a broken sofa, our skilled crew is ready to handle the job with professionalism and efficiency.
              </p>
              <Link
                to="/contact?service=removal"
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
            <h2 className="text-3xl font-extrabold text-[#1C1C1C] mb-4">Our Removal Services</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">Everything you need for a seamless, stress-free move.</p>
          </motion.div>

          <ServiceCardsGrid
            items={features}
            wrapperClassName="flex flex-wrap gap-8 justify-center"
            cardClassName="p-8 rounded-2xl border border-[#0E3A6D]/10 bg-[#F7F9FC] hover:bg-white hover:shadow-xl transition-all group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
          />
        </div>
      </section>

      {/* Waste Removal Highlight */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden group w-full lg:w-1/2 h-96"
            >
              <ImageWithFallback
                src={wasteRemovalImage}
                alt="Professional waste removal service"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A6D]/80 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-lg">Waste & Rubbish Removal</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full lg:w-1/2"
            >
              <div className="w-12 h-1.5 bg-[#F4C430] rounded-full mb-6" />
              <h2 className="text-3xl font-extrabold text-[#1C1C1C] mb-6">Skip the Trips to the Tip</h2>
              <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                We collect and remove large amounts of waste in one go, making it easy to clear out spaces quickly and efficiently. As licensed waste carriers, we ensure all disposal is handled responsibly and in compliance with environmental regulations.
              </p>
              <ul className="space-y-4 mb-10">
                {["Licensed waste carriers", "Eco-friendly disposal methods", "Bulk waste collection", "Garden and construction waste"].map((item) => (
                  <li key={item} className="flex items-center gap-3.5 text-[#1C1C1C]">
                    <span className="w-8 h-8 rounded-lg bg-[#F4C430]/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#0E3A6D]" />
                    </span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact?service=removal"
                className="bg-[#D62828] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl inline-block"
              >
                Get a Waste Removal Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0E3A6D]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold mb-6 text-white">Need Immediate Pickup or Delivery?</h2>
            <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">We offer flexible logistics solutions for furniture and appliance fitting along with priority transport services.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact?service=removal"
                className="bg-[#D62828] text-white px-10 py-4 rounded-full font-bold hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl inline-block"
              >
                Contact Our Removal Team
              </Link>
              <Link
                to="/services/storage"
                className="bg-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20 inline-block"
              >
                View Storage Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
