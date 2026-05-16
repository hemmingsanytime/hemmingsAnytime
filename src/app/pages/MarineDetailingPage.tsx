import { Link } from 'react-router';
import { Anchor, Droplet, Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';
import {
  HighlightList,
  ServiceCardsGrid,
  ServiceImageGallery,
  ServiceSectionIntro,
} from '@/app/components/service-page/ServicePageSections';
import MarineDetailingCoverImage from "@/assets/marine-detailing-service-cover.avif";
import HullCleaningImage from "@/assets/hull-cleaning-image.avif";
import MarineCarpetDetailingImage from "@/assets/marine-carpet-detailing-image.avif";
import MarineChromePolishingImage from "@/assets/marine-chrome-polishing.avif";

const marineServices = [
  {
    title: "Pressure Washing",
    description: "High-powered cleaning to remove salt, grime, and marine growth from hull exteriors and deck surfaces.",
    icon: <Droplet className="w-6 h-6" />
  },
  {
    title: "Steam Cleaning",
    description: "Deep steam cleaning for interior cabins, upholstery, and carpets to eliminate odors and bacteria.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Carpet Detailing",
    description: "Professional carpet cleaning and treatment for all marine-grade carpeting and floor coverings.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "Protective Coating",
    description: "Application of protective sealants and coatings to preserve surfaces and maintain vessel integrity.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Chrome Polishing",
    description: "Specialised polishing for chrome fittings, rails, and hardware to restore brilliant shine.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Hull Cleaning",
    description: "Thorough hull cleaning including underwater surfaces, removing barnacles and marine organisms.",
    icon: <Anchor className="w-6 h-6" />
  },
  {
    title: "Marine Build-up Removal",
    description: "Removal of stubborn marine deposits, salt build-up, and oxidation from all vessel surfaces.",
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

const galleryItems = [
  {
    src: HullCleaningImage,
    alt: "Hull Cleaning",
    caption: "Hull Cleaning & Maintenance",
  },
  {
    src: MarineCarpetDetailingImage,
    alt: "Boat Carpet Detailing",
    caption: "Detailing Services",
  },
  {
    src: MarineChromePolishingImage,
    alt: "Sailboat Maintenance",
    caption: "Chrome Polishing",
  },
];

const highlightItems = [
  {
    title: "Marina-Grade Equipment",
    description: "Our crew uses professional-grade tools and marine-specific cleaning products designed for vessels.",
  },
  {
    title: "Experienced Team",
    description: "Our staff is trained in marine detailing techniques and understands the unique challenges of saltwater environments.",
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Marine-safe cleaning agents that protect both your vessel and the environment.",
  },
  {
    title: "Flexible Scheduling",
    description: "We work around your schedule, providing services at your marina or dock location.",
  },
];

export const MarineDetailingPage = () => {
  return (
    <div className="bg-white">
      <ServicePageHero
        title="Marine Detailing Services"
        description="Our experienced marine detailing team keeps your yacht and boat in pristine condition. From pressure washing to protective coatings, we deliver marina-grade excellence."
        icon={<Anchor className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={MarineDetailingCoverImage}
            alt="Marine Detailing"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <>
            <Link
              to="/contact?service=marine-detailing"
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
            title="Comprehensive Marine Care"
            description="Our specialist team handles all aspects of marine detailing, ensuring your boat or yacht receives the professional care it deserves."
            titleClassName="text-4xl font-bold text-[#1C1C1C] mb-4 uppercase tracking-wider"
            descriptionClassName="text-lg text-[#6B7280] max-w-3xl mx-auto"
          />

          <ServiceCardsGrid
            items={marineServices}
            layout="inline"
            wrapperClassName="flex flex-wrap gap-8 justify-center"
            cardClassName="bg-white border border-[#0E3A6D]/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            iconWrapperClassName="flex-shrink-0 w-12 h-12 bg-[#F2F4FF] text-[#0E3A6D] rounded-xl flex items-center justify-center"
            titleClassName="text-lg font-bold text-[#1C1C1C] mb-2"
            descriptionClassName="text-[#6B7280] text-sm leading-relaxed"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div>
              <HighlightList
                title="Why Choose Hemmings for Marine Detailing?"
                items={highlightItems}
              />
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGNsZWFuaW5nJTIwZGV0YWlsfGVufDF8fHx8MTcwODAxMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Marine Detailing Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0E3A6D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to give your vessel the care it deserves?</h2>
          <p className="text-blue-100 text-lg mb-12">Contact us today for a free consultation and personalised quote for your marine detailing needs.</p>
          <Link 
            to="/contact?service=marine-detailing"
            className="inline-flex items-center gap-2 bg-[#D62828] text-white px-10 py-5 rounded-full font-bold hover:bg-[#B91C1C] transition-all shadow-xl group"
          >
            Get Your Marine Detailing Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};