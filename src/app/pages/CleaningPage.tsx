import { Link } from 'react-router';
import { Sparkles, Wind, Droplets, Trash, ShieldCheck, Clock } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';
import {
  ServiceCardsGrid,
  ServiceImageGallery,
  ServiceSectionIntro,
} from '@/app/components/service-page/ServicePageSections';
import PressureWashingVideo from "@/assets/pressure-washing-video.mp4";
import BeforeAfterPressureWashingImage from "@/assets/before-after-pressure-washing-image.avif"
import ACAndVentilationCleaningImage from "@/assets/ac-and-ventilation-cleaning-image.avif";
import officeSpaceCleaningImage from "@/assets/office-space-cleaning-image.avif";
import SofaSteamCleaningImage from "@/assets/sofa-steam-cleaning-image.avif"
import BinSanitisationImage from "@/assets/cleaning-service-cover.avif"
import SignCleanageImage from "@/assets/before-after-sign-cleaning-image.avif";

const cleaningServices = [
  {
    title: "Carpet & Sofa Steam Cleaning",
    description: "Deep hot-water extraction cleaning that removes allergens, dust mites, and tough stains from your upholstery.",
    icon: <Droplets className="w-6 h-6" />
  },
  {
    title: "Patio Pressure Washing",
    description: "High-pressure restoration for stone, brick, and concrete surfaces, removing moss, algae, and built-up grime.",
    icon: <Wind className="w-6 h-6" />
  },
  {
    title: "Bin Sanitisation",
    description: "Professional cleaning and disinfection of commercial and residential bins to eliminate odors and bacteria.",
    icon: <Trash className="w-6 h-6" />
  },
  {
    title: "AC & Ventilation Cleaning",
    description: "Expert maintenance of air conditioning units and ductwork for better air quality and system efficiency.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Sign Cleanage",
    description: "Dirty signage costs attention. We clean and restore your signs so your business stays visible, sharp, and inviting.",
    icon: <Sparkles className="w-6 h-6" />
  },
];

const galleryItems = [
  {
    src: ACAndVentilationCleaningImage,
    alt: "Furniture Cleaning",
    caption: "AC & Ventilation Cleaning",
  },
  {
    src: officeSpaceCleaningImage,
    alt: "Office Space Cleaners",
    caption: "Office Space Cleaning",
  },
  {
    src: BeforeAfterPressureWashingImage,
    alt: "Outdoor Cleaning Services",
    caption: "Patio & Driveway Cleaning",
  },
  {
    src: SofaSteamCleaningImage,
    alt: "Sofa Steam Cleaning Services",
    caption: "Professional Sofa Steam Cleaning",
  },
  {
    src: BinSanitisationImage,
    alt: "Bin Sanitisation",
    caption: "Bin Sanitisation",
  },
  {
    src: SignCleanageImage,
    alt: "Sign Cleanage",
    caption: "Sign Cleanage",
  },
];

export const CleaningPage = () => {
  return (
    <div className="bg-white">
      <ServicePageHero
        title="Expert Cleaning Services"
        description="Restore the beauty and hygiene of your property with our skilled team providing steam cleaning, pressure washing, and sanitisation services."
        icon={<Sparkles className="h-16 w-16 text-[#F4C430]" />}
        background={
          <video
            className="h-full w-full object-cover object-bottom"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src={PressureWashingVideo} type="video/mp4" />
          </video>
        }
        actions={
          <Link
            to="/contact?service=cleaning"
            className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C]"
          >
            Schedule Cleaning Now
          </Link>
        }
      />

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceImageGallery items={galleryItems} />

          <ServiceSectionIntro
            title="Our Specialized Cleaning Services"
            description="Our experienced cleaning team uses industrial-grade disinfectants and professional equipment to ensure your environment is safe, clean, and welcoming."
          />

          <ServiceCardsGrid
            items={cleaningServices}
            layout="inline"
            wrapperClassName="flex flex-wrap gap-8 justify-center"
            cardClassName="bg-white border border-[#0E3A6D]/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            iconWrapperClassName="flex-shrink-0 w-12 h-12 bg-[#F2F4FF] text-[#0E3A6D] rounded-xl flex items-center justify-center"
            titleClassName="text-lg font-bold text-[#1C1C1C] mb-2"
            descriptionClassName="text-[#6B7280] text-sm leading-relaxed"
          />

          <div className="flex flex-wrap gap-8 py-24">
            <div className="bg-[#F2F4FF] p-10 rounded-3xl border border-[#0E3A6D]/10 w-full lg:w-[calc(33.333%-1.5rem)]">
              <Clock className="w-10 h-10 text-[#0E3A6D] mb-6" />
              <h4 className="text-xl font-bold text-[#1C1C1C] mb-4">After-Hours Service</h4>
              <p className="text-[#6B7280]">We offer flexible cleaning schedules including overnight and weekend shifts to minimize disruption to your business operations.</p>
            </div>
            <div className="bg-[#F2F4FF] p-10 rounded-3xl border border-[#0E3A6D]/10 w-full lg:w-[calc(33.333%-1.5rem)]">
              <ShieldCheck className="w-10 h-10 text-[#0E3A6D] mb-6" />
              <h4 className="text-xl font-bold text-[#1C1C1C] mb-4">Health & Safety</h4>
              <p className="text-[#6B7280]">All staff are COSHH trained and follow strict safety protocols to maintain a healthy workplace for your employees and guests.</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden group w-full lg:w-[calc(33.333%-1.5rem)]">
              <ImageWithFallback
                src={BinSanitisationImage}
                alt="Commercial & Residential Bin Sanitisation"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A6D]/80 to-transparent flex items-end p-8">
                <p className="text-white font-bold text-lg">Commercial & Residential Bin Sanitisation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="bg-[#0E3A6D] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Better First Impressions</h2>
              <p className="text-blue-100">A clean premises speaks volumes. Let us help you impress your guests and customers.</p>
            </div>
            <Link 
              to="/contact?service=cleaning"
              className="bg-[#D62828] hover:bg-[#B91C1C] text-white px-10 py-4 rounded-full font-bold transition-all whitespace-nowrap"
            >
              Schedule Cleaning Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};