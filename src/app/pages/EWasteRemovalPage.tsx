import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Monitor, HardDrive, Smartphone, Printer, Tv, Battery, Server, Recycle,
  CheckCircle2, ShieldCheck, Leaf, Building2,
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';
import {
  ServiceCardsGrid,
} from '@/app/components/service-page/ServicePageSections';
import ewasteHeroImage from "@/assets/office-space-removal-image.avif";
import wasteRemovalImage from "@/assets/waste-removal-image.avif";

const whatWeHandle = [
  {
    title: "Computers, Laptops & Servers",
    description: "Complete disposal and recycling of desktop computers, laptops, servers, and all associated peripherals with secure data destruction included.",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    title: "Hard Drives & Storage Devices",
    description: "Certified secure data destruction for hard drives, SSDs, USB drives, and all storage media — ensuring your sensitive data is irrecoverably erased.",
    icon: <HardDrive className="w-6 h-6" />
  },
  {
    title: "Mobile Phones & Tablets",
    description: "Responsible collection and recycling of smartphones, tablets, and portable devices with full data sanitisation and WEEE-compliant processing.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "Networking & Office Electronics",
    description: "Disposal of routers, switches, printers, scanners, copiers, and other office electronics through specialised recycling facilities.",
    icon: <Printer className="w-6 h-6" />
  },
  {
    title: "TVs, Monitors & Displays",
    description: "Safe removal and eco-friendly recycling of CRT, LCD, LED, and plasma screens — handled with care to prevent hazardous material release.",
    icon: <Tv className="w-6 h-6" />
  },
  {
    title: "Household Appliances",
    description: "Collection and responsible disposal of fridges, washing machines, microwaves, and other household electrical items in compliance with WEEE regulations.",
    icon: <Server className="w-6 h-6" />
  },
  {
    title: "Batteries, Cables & Accessories",
    description: "Specialist recycling for batteries, power supplies, cables, chargers, and small electronic accessories to minimise landfill waste.",
    icon: <Battery className="w-6 h-6" />
  },
  {
    title: "Large-Scale IT Asset Disposal",
    description: "End-to-end IT asset disposal for businesses, data centres, and organisations — including asset tracking, secure logistics, and certification.",
    icon: <Recycle className="w-6 h-6" />
  },
];

const keyFeatures = [
  "Certified E-Waste Partner",
  "Secure Data Destruction",
  "Large-Scale IT Asset Disposal",
  "Eco-Friendly Recycling Processes",
  "Residential & Commercial Collections",
  "Carbon-Conscious Waste Management",
];

const whoWeServe = [
  {
    title: "Businesses & Corporations",
    desc: "Office clearouts, IT refresh cycles, and bulk electronics disposal with full audit trails.",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "Educational Institutions",
    desc: "Schools, colleges, and universities — we handle outdated classroom tech and lab equipment.",
    icon: <Monitor className="w-5 h-5" />,
  },
  {
    title: "Government Organisations",
    desc: "Compliant disposal with secure data destruction and full certification for public sector bodies.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Healthcare Facilities",
    desc: "Safe removal of medical-grade electronics with strict compliance to environmental and data standards.",
    icon: <Recycle className="w-5 h-5" />,
  },
  {
    title: "Residential Customers",
    desc: "Household appliance pickups, old computer disposal, and small electronics recycling for homeowners.",
    icon: <Tv className="w-5 h-5" />,
  },
  {
    title: "Data Centres",
    desc: "Large-scale decommissioning of servers, racks, networking infrastructure, and storage arrays.",
    icon: <Server className="w-5 h-5" />,
  },
];

export const EWasteRemovalPage = () => {
  return (
    <div className="bg-white">
      <ServicePageHero
        title="Certified E-Waste Removal"
        description="We are a certified e-waste partner specialising in the safe collection, removal, and disposal of all types of electronic waste for businesses, institutions, and residential customers."
        icon={<Recycle className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={ewasteHeroImage}
            alt="E-Waste Removal Services"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <Link
            to="/contact?service=e-waste-removal"
            className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C]"
          >
            Schedule E-Waste Collection
          </Link>
        }
      />

      {/* Why Choose Us — Split Layout */}
      <section className="py-20 sm:py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left — Intro */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-5/12 lg:sticky lg:top-32"
            >
              <div className="w-12 h-1.5 bg-[#F4C430] rounded-full mb-6" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] mb-6 leading-tight">
                Responsible Electronic Waste Disposal
              </h2>
              <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed mb-8">
                From large-scale IT asset disposal to domestic appliances, we ensure every item is processed responsibly through specialised recycling facilities. Our comprehensive WEEE (Waste Electrical and Electronic Equipment) disposal solutions include secure data destruction, environmentally responsible recycling, and carbon-conscious waste management practices.
              </p>
              <Link
                to="/contact?service=e-waste-removal"
                className="inline-flex items-center gap-2 bg-[#0E3A6D] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#0C2F58] transition-all shadow-lg hover:shadow-xl"
              >
                Get a Free Quote
              </Link>
            </motion.div>

            {/* Right — Key Features Grid */}
            <div className="w-full lg:w-7/12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-[#0E3A6D]/8 shadow-sm hover:shadow-md transition-all"
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

      {/* What We Handle — Service Cards */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 sm:mb-16"
          >
            <div className="w-12 h-1.5 bg-[#F4C430] rounded-full mb-6 mx-auto" />
            <h2 className="text-3xl font-extrabold text-[#1C1C1C] mb-4">What We Handle</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-base sm:text-lg">
              Our team is equipped to collect, transport, and responsibly recycle all types of electronic waste — no matter the size or quantity.
            </p>
          </motion.div>

          <ServiceCardsGrid
            items={whatWeHandle}
            wrapperClassName="flex flex-wrap gap-5 sm:gap-8 justify-center"
            cardClassName="p-6 sm:p-8 rounded-2xl border border-[#0E3A6D]/10 bg-[#F7F9FC] hover:bg-white hover:shadow-xl transition-all group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.5rem)]"
          />
        </div>
      </section>

      {/* Secure Data Destruction — Split Feature */}
      <section className="py-20 sm:py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden group w-full lg:w-1/2 h-72 sm:h-96"
            >
              <ImageWithFallback
                src={wasteRemovalImage}
                alt="Secure data destruction and e-waste recycling"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A6D]/80 to-transparent flex items-end p-6 sm:p-8">
                <p className="text-white font-bold text-lg">Secure Data Destruction & Recycling</p>
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1C1C] mb-6">Protect Your Data, Protect the Planet</h2>
              <p className="text-[#6B7280] text-base sm:text-lg leading-relaxed mb-8">
                Every device we collect undergoes certified data sanitisation or physical destruction before recycling. We provide full documentation and certificates of destruction for your compliance records.
              </p>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  "WEEE-compliant processing",
                  "Certified data destruction certificates",
                  "Environmentally responsible recycling",
                  "Full audit trail & documentation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3.5 text-[#1C1C1C]">
                    <span className="w-8 h-8 rounded-lg bg-[#F4C430]/15 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#0E3A6D]" />
                    </span>
                    <span className="font-semibold text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact?service=e-waste-removal"
                className="bg-[#D62828] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl inline-block text-sm sm:text-base"
              >
                Request Data Destruction
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 sm:mb-16"
          >
            <div className="w-12 h-1.5 bg-[#F4C430] rounded-full mb-6 mx-auto" />
            <h2 className="text-3xl font-extrabold text-[#1C1C1C] mb-4">Who We Serve</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-base sm:text-lg">
              From small residential pickups to large-scale corporate IT asset disposal — we serve clients of every size.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {whoWeServe.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="bg-[#F7F9FC] rounded-2xl p-6 sm:p-7 border border-[#0E3A6D]/8 hover:bg-white hover:shadow-lg transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0E3A6D]/8 flex items-center justify-center mb-5 group-hover:bg-[#0E3A6D] group-hover:text-white text-[#0E3A6D] transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1C1C1C] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
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
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-5 h-5 text-[#F4C430]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-white">Dispose of Your E-Waste Responsibly</h2>
            <p className="text-blue-100 mb-10 text-base sm:text-lg max-w-2xl mx-auto">
              Protect your data and support a cleaner environment. Get in touch for a free e-waste collection quote today.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Link
                to="/contact?service=e-waste-removal"
                className="bg-[#D62828] text-white px-10 py-4 rounded-full font-bold hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl inline-block"
              >
                Get a Free E-Waste Quote
              </Link>
              <Link
                to="/services/clearance"
                className="bg-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20 inline-block"
              >
                View Clearance Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
