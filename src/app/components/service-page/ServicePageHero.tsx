import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type ServicePageHeroProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  actions: ReactNode;
  background: ReactNode;
};

export const ServicePageHero = ({
  title,
  description,
  icon,
  actions,
  background,
}: ServicePageHeroProps) => (
  <section className="relative flex min-h-[600px] w-full items-center overflow-hidden bg-[#0E3A6D] py-24 text-white">
    <div className="absolute inset-0">{background}</div>
    <div
      aria-hidden
      className="bg-linear-[135deg,#0e3a6deb_0%,#0e3a6dd9_50%,#0a1a32e6_100%] absolute inset-0 pointer-events-none opacity-75"
    />
    <div className="relative mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {icon ? <div className="mb-6 flex items-center justify-center">{icon}</div> : null}
        <h1 className="mb-6 text-5xl font-extrabold md:text-6xl">{title}</h1>
        <p className="mx-auto mb-10 max-w-3xl text-xl text-blue-100">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">{actions}</div>
      </motion.div>
    </div>
  </section>
);
