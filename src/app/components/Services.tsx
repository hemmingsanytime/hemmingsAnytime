import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Truck, Sparkles, Paintbrush, Anchor, Plane, Warehouse,
  ChevronRight, ArrowRight
} from 'lucide-react';

import clearanceServiceImage from "@/assets/clearance-service-cover.avif";
import cleaningServiceImage from "@/assets/cleaning-service-cover.avif";
import paintingAndDecorServiceImage from "@/assets/painting-and-decor-service-cover.avif";
import marineDetailingServiceImage from "@/assets/marine-detailing-service-cover.avif";
import aviationDetailingServiceImage from "@/assets/aviation-detailing-service-cover.avif";
import removalServiceImage from "@/assets/removal-hero-image.avif";
import storageServiceImage from "@/assets/storage-hero-image.avif";

const services = [
  {
    image: clearanceServiceImage,
    alt: "Clearance Services",
    title: "Clearance",
    CategoryIcon: Truck,
    items: [
      "Office space removal / cleaning / storage",
      "Broken furniture removal",
      "End-of-tenancy waste removal and cleaning",
      "Single item removal",
      "Furniture / Appliance fitting",
      "Immediate drop-off and pickup carriage",
    ],
    link: "/clearance",
  },
  {
    image: removalServiceImage,
    alt: "Removal Services",
    title: "Removal",
    CategoryIcon: Truck,
    items: [
      "Full house & office relocations",
      "Single item pickup & delivery",
      "Furniture & appliance fitting",
      "Same-day priority transport",
      "Packing materials provided",
      "After-hours availability",
    ],
    link: "/removal",
  },
  {
    image: storageServiceImage,
    alt: "Storage Services",
    title: "Storage",
    CategoryIcon: Warehouse,
    items: [
      "Short & long-term units",
      "24/7 CCTV monitoring",
      "Climate-controlled options",
      "Individual unit alarms",
      "Collection & delivery available",
      "Fully insured",
    ],
    link: "/storage",
  },
  {
    image: cleaningServiceImage,
    alt: "Cleaning Services",
    title: "Cleaning",
    CategoryIcon: Sparkles,
    items: [
      "Carpets / Sofa steam cleaning",
      "Patio pressure washing",
      "Commercial / Residential bin sanitisation",
      "AC unit / Ventilation cleaning",
      "Signage / Banner cleaning",
    ],
    link: "/cleaning",
  },
  {
    image: paintingAndDecorServiceImage,
    alt: "Painting & Decor Services",
    title: "Painting & Decor",
    CategoryIcon: Paintbrush,
    items: [
      "Commercial / Residential painting",
      "End-of-tenancy painting and decor",
      "Space Beautification",
    ],
    link: "/painting-decor",
  },
  {
    image: marineDetailingServiceImage,
    alt: "Marine Detailing Services",
    title: "Marine Detailing",
    CategoryIcon: Anchor,
    items: [
      "Pressure washing",
      "Steam cleaning",
      "Carpet detailing",
      "Protective coating",
      "Chrome polishing",
      "Hull cleaning",
    ],
    link: "/marine-detailing",
  },
  {
    image: aviationDetailingServiceImage,
    alt: "Aviation Detailing Services",
    title: "Aviation Detailing",
    CategoryIcon: Plane,
    items: [
      "Exterior wash and polish",
      "Interior cabin detailing",
      "Cockpit cleaning",
      "Protective coating",
    ],
    link: "/aviation-detailing",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-[#F7F9FC] py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="mb-2.5 text-[2.1rem] font-bold leading-[1.2] text-[#0E3A6D]">
            Our Services
          </h2>
          <p className="mx-auto max-w-[650px] text-base text-[#6B7280]">
            From comprehensive clearances to professional cleaning, painting, marine, and aviation detailing—we handle it all with precision and care.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-7">
          {services.map((service, index) => {
            const { CategoryIcon } = service;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.45 }}
                className="group flex h-[480px] w-[340px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-[rgba(14,58,109,0.07)] bg-white shadow-[0_2px_16px_rgba(14,58,109,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(14,58,109,0.18)]"
              >
                {/* Image — fixed 210px, title lives here */}
                <div className="relative h-[210px] w-[340px] flex-shrink-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />

                  {/* Dark gradient — stronger at bottom for title readability */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,26,50,0.82)_0%,rgba(10,26,50,0.25)_55%,transparent_100%)]" />

                  {/* Title + icon — bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 z-[2] flex items-center gap-2.5 px-4 pb-4 pt-3">
                    {/* Icon circle */}
                    <span className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-[#F4C430] shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                      <CategoryIcon size={18} color="#0E3A6D" strokeWidth={2.2} />
                    </span>

                    {/* Title */}
                    <h3 className="m-0 text-[1.15rem] font-bold leading-[1.2] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col px-5 pb-5 pt-[18px]">

                  {/* Bullet list — plain text, highlight dot */}
                  <ul className="m-0 flex flex-1 list-none flex-col gap-2 p-0">
                    {service.items.map((label, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F4C430] shadow-[0_0_0_2px_rgba(244,196,48,0.2)]" />
                        <span className="text-[0.845rem] leading-[1.5] text-[#374151]">
                          {label}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-[18px] border-t border-[#F2F4FF] pt-[14px]">
                    <Link
                      to={`/services/${service.link}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F2F4FF] px-4 py-[9px] text-[0.84rem] font-semibold tracking-[0.02em] text-[#0E3A6D] no-underline transition-colors duration-200 group-hover:bg-[#0E3A6D] group-hover:text-white"
                    >
                      Explore {service.title}
                      <ArrowRight size={14} strokeWidth={2.2} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="mb-3 text-[0.92rem] text-[#6B7280]">
            Need a quote for one of our services?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-[#0E3A6D] px-7 py-3 text-[0.95rem] font-bold tracking-[0.01em] text-white no-underline shadow-[0_4px_16px_rgba(14,58,109,0.25)]"
          >
            Get a Free Quote
            <ChevronRight size={16} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
