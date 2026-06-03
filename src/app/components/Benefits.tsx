import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users, Tag, CheckCircle } from 'lucide-react';
import imgClearance from "@/assets/clearance-service-cover.avif";

const benefits = [
  {
    Icon: Clock,
    title: 'After-Hours Service',
    desc: 'We work around your schedule — cleaning and collections happen after business hours so your day is never interrupted.',
    borderClass: 'bg-[#0E3A6D]',
    iconClass: 'text-[#0E3A6D]',
  },
  {
    Icon: Users,
    title: 'Well-Trained Staff',
    desc: 'Every team member is vetted, trained, and experienced in handling high-value items, sensitive spaces, and commercial environments.',
    borderClass: 'bg-[#F4C430]',
    iconClass: 'text-[#1C1C1C]',
  },
  {
    Icon: Tag,
    title: 'Affordable Rates',
    desc: 'Fair, transparent pricing with no hidden fees. We offer special rates for long-term commercial contracts.',
    borderClass: 'bg-[#D62828]',
    iconClass: 'text-[#D62828]',
  },
];

const highlights = [
  'Balanced time management on every job',
  'Health & safety compliant at all times',
  'Better first impressions for your clients',
  'Peace of mind — guaranteed',
];

const stats = [
  { value: '500+', label: 'Jobs Completed' },
  { value: '5★', label: 'Client Rating' },
  { value: '24/7', label: 'After-Hours Care' },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="overflow-hidden bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-stretch">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-1 flex flex-col justify-center"
          >
            <h2 className="mb-3 text-[2rem] font-bold leading-tight text-[#0E3A6D]">
              Why Choose Hemmings Anytime?
            </h2>
            <p className="mb-10 max-w-[460px] text-base leading-[1.7] text-[#6B7280]">
              We do the heavy lifting — literally. Here's what sets us apart from the rest.
            </p>

            <div className="flex flex-col gap-5">
              {benefits.map((benefit, i) => {
                const { Icon } = benefit;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    className="flex gap-0"
                  >
                    {/* Left accent border */}
                    <div className={`mr-5 w-1 flex-shrink-0 rounded ${benefit.borderClass}`} />
                    {/* Card */}
                    <div className="flex-1 rounded-xl border border-[rgba(14,58,109,0.07)] bg-[#F7F9FC] px-5 py-[18px]">
                      <div className="mb-2 flex items-center gap-2.5">
                        <Icon className={benefit.iconClass} size={18} strokeWidth={2.2} />
                        <h3 className="m-0 text-base font-bold text-[#1C1C1C]">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="m-0 text-sm leading-[1.6] text-[#6B7280]">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right column — real photo with dark overlay */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative min-h-[480px] flex-1 overflow-hidden rounded-3xl"
          >
            {/* Background photo */}
            <img
              src={imgClearance}
              alt="Hemmings Anytime team at work"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark overlay — brand blue tinted */}
            <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(14,58,109,0.7)_0%,rgba(8,22,48,0.7)_100%)]" />

            {/* Content */}
            <div className="relative z-[2] flex h-full flex-col justify-between px-10 py-11">
              <div>
                <h3 className="mb-3 text-[1.6rem] font-bold leading-[1.25] text-white">
                  Commercial &amp; Residential — we handle both.
                </h3>
                <p className="mb-8 text-[0.9rem] leading-[1.7] text-white">
                  From a single sofa removal to a full office clearance, our team shows up prepared, on time, and ready to work.
                </p>

                {/* Highlights — solid checkmark list, no glassmorphism */}
                <div className="flex flex-col gap-3">
                  {highlights.map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle size={17} color="#F4C430" strokeWidth={2.2} className="shrink-0" />
                      <span className="text-sm leading-[1.5] text-white">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats row — honest numbers */}
              <div className="mt-9 flex gap-0 border-t border-[rgba(255,255,255,0.12)] pt-7">
                {stats.map((stat, i) => (
                  <React.Fragment key={i}>
                    <div className="flex-1 text-center">
                      <div className="text-[1.75rem] font-extrabold leading-none text-[#F4C430]">
                        {stat.value}
                      </div>
                      <div className="mt-[5px] text-[0.78rem] tracking-[0.03em] text-[rgba(255,255,255,0.55)]">
                        {stat.label}
                      </div>
                    </div>
                    {i < stats.length - 1 && (
                      <div className="mx-1 w-px bg-[rgba(255,255,255,0.12)]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
