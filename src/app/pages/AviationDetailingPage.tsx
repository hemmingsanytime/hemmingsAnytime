import { Link } from 'react-router';
import { Plane, Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';
import {
  HighlightList,
  ServiceCardsGrid,
  ServiceImageGallery,
  ServiceSectionIntro,
} from '@/app/components/service-page/ServicePageSections';
import AviationExteriorWashImage from "@/assets/aviation-exterior-wash-image.avif";
import AviationInteriorDetailingImage from "@/assets/aviation-interior-detailing-image.avif";
import AviationCockpitDetailingImage from "@/assets/aviation-cockpit-detailing-image.avif";
import AviationDetailingServiceCover from "@/assets/aviation-detailing-service-cover.avif";
import AircraftImage from "@/assets/aircraft-image.avif";

const aviationServices = [
  {
    title: "Exterior Wash and Polish",
    description: "Professional aircraft exterior cleaning and polishing to maintain aerodynamic surfaces and appearance.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Interior Cabin Detailing",
    description: "Complete cabin interior detailing including leather treatment, upholstery cleaning, and surface restoration.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Cockpit Cleaning",
    description: "Careful cleaning of cockpit instruments, panels, and surfaces with aviation-approved products.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "Protective Coating",
    description: "Application of protective coatings and sealants designed specifically for aircraft surfaces and materials.",
    icon: <Shield className="w-6 h-6" />
  }
];

const galleryItems = [
  {
    src: AviationExteriorWashImage,
    alt: "Aircraft Exterior Wash",
    caption: "Aircraft Exterior Wash",
    className: "relative rounded-3xl overflow-hidden group w-full md:w-[calc(50%-0.75rem)] h-96",
  },
  {
    src: AviationInteriorDetailingImage,
    alt: "Aviation Service",
    caption: "Professional Aircraft Detailing",
    className: "relative rounded-3xl overflow-hidden group w-full md:w-[calc(50%-0.75rem)] h-96",
  },
  {
    src: AviationCockpitDetailingImage,
    alt: "Ground Service Equipment",
    caption: "Cockpit Detailing",
    className: "relative rounded-3xl overflow-hidden group w-full h-96",
  },
];

const highlightItems = [
  {
    title: "FAA-Compliant Products",
    description: "All cleaning agents and treatments meet aviation safety standards and regulations.",
  },
  {
    title: "Certified Technicians",
    description: "Our team is trained in aircraft care and understands the unique requirements of aviation surfaces.",
  },
  {
    title: "Hangar or FBO Service",
    description: "We come to your location, providing convenient on-site service at your hangar or FBO.",
  },
  {
    title: "Attention to Detail",
    description: "Meticulous care for every surface, from fuselage to cockpit instruments.",
  },
];

export const AviationDetailingPage = () => {
  return (
    <div className="bg-white">
      <ServicePageHero
        title="Aviation Detailing Services"
        description="Our expert aviation detailing crew services private jets, helicopters, and small aircraft. We provide hangar-quality care with aviation-certified products and trained specialists."
        icon={<Plane className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={AircraftImage}
            alt="Aviation Detailing"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <>
            <Link
              to="/contact?service=aviation-detailing"
              className="rounded-full bg-[#D62828] px-8 py-4 font-bold text-white transition-all hover:bg-[#B91C1C]"
            >
              Request a Quote
            </Link>
            <Link
              to="/gallery"
              className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold backdrop-blur-sm transition-all hover:bg-white/20"
            >
              See Our Work
            </Link>
          </>
        }
      />

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceImageGallery items={galleryItems} />

          <ServiceSectionIntro
            title="Professional Aircraft Care"
            description="Our certified aviation detailing team ensures your aircraft maintains its value and appearance."
            titleClassName="text-4xl font-bold text-[#1C1C1C] mb-4 uppercase tracking-wider"
            descriptionClassName="text-lg text-[#6B7280] max-w-3xl mx-auto"
          />

          <ServiceCardsGrid
            items={aviationServices}
            layout="inline"
            wrapperClassName="flex flex-wrap gap-8"
            cardClassName="bg-white border border-[#0E3A6D]/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all w-full md:w-[calc(50%-1rem)]"
            iconWrapperClassName="flex-shrink-0 w-14 h-14 bg-[#F2F4FF] text-[#0E3A6D] rounded-xl flex items-center justify-center"
            titleClassName="text-xl font-bold text-[#1C1C1C] mb-3"
            descriptionClassName="text-[#6B7280] leading-relaxed"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src={AviationDetailingServiceCover}
                  alt="Aviation Interior Detailing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <HighlightList
                title="Aviation-Grade Excellence"
                items={highlightItems}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0E3A6D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to elevate your aircraft's appearance?</h2>
          <p className="text-blue-100 text-lg mb-12">Contact us for a consultation and discover how our aviation detailing expertise can benefit your aircraft.</p>
          <Link 
            to="/contact?service=aviation-detailing"
            className="inline-flex items-center gap-2 bg-[#D62828] text-white px-10 py-5 rounded-full font-bold hover:bg-[#B91C1C] transition-all shadow-xl group"
          >
            Get Your Aviation Detailing Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};