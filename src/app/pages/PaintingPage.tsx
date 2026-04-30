import { Link } from 'react-router';
import { Home, Building2, CheckSquare, Star, Paintbrush, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';
import {
  ServiceCardsGrid,
  ServiceImageGallery,
  ServiceSectionIntro,
} from '@/app/components/service-page/ServicePageSections';
import PaintingAndDecorCover from "@/assets/painting-and-decor-service-cover.avif";
import InteriorPaintingImage from "@/assets/interior-painting-image.avif";
import GardenBeautificationImage from "@/assets/garden-beautification-image.avif";
import ModernPaintingImage from "@/assets/modern-painting-image.avif";
import ExteriorPaintingImage from "@/assets/exterior-painting-image.avif";

const paintingServices = [
  {
    title: "Commercial Painting",
    description: "Revitalize your office, retail, or industrial space with high-quality, durable finishes that reflect your brand's excellence.",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: "Residential Painting",
    description: "Expert interior and exterior painting services that bring new life to your home with precision and attention to detail.",
    icon: <Home className="w-6 h-6" />
  },
  {
    title: "End-of-Tenancy Painting",
    description: "Fast-turnaround painting and touch-up services to ensure your property is ready for the next tenant and meets inspection standards.",
    icon: <CheckSquare className="w-6 h-6" />
  },
  {
    title: "Specialist Decor",
    description: "Space beautification, custom finishes, feature walls, and decorative accents that add character and style to any room.",
    icon: <Star className="w-6 h-6" />
  }
];

const galleryItems = [
  {
    src: GardenBeautificationImage,
    alt: "Beautification",
    caption: "Beautification Services",
    className: "relative rounded-3xl overflow-hidden group w-full md:w-[calc(50%-0.75rem)] h-96",
  },
  {
    src: ModernPaintingImage,
    alt: "Interior Painting Work",
    caption: "Modern Interior Decor",
    className: "relative rounded-3xl overflow-hidden group w-full md:w-[calc(50%-0.75rem)] h-96",
  },
  {
    src: InteriorPaintingImage,
    alt: "Professional Painting Service",
    caption: "Professional Painting",
    className: "relative rounded-3xl overflow-hidden group w-full md:w-[calc(50%-0.75rem)] h-96",
  },
  {
    src: ExteriorPaintingImage,
    alt: "Exterior Painting Services",
    caption: "Exterior Painting & Restoration",
    className: "relative rounded-3xl overflow-hidden group w-full md:w-[calc(50%-0.75rem)] h-96",
  },
];

export const PaintingPage = () => {
  return (
    <div className="bg-white">
      <ServicePageHero
        title="Expert Painting & Decor"
        description="Transform your property with our professional painters delivering finishes that last. From commercial buildings to residential homes, we bring excellence to every project."
        icon={<Paintbrush className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={PaintingAndDecorCover}
            alt="Professional Painting"
            className="h-full w-full scale-125 object-cover object-top"
          />
        }
        actions={
          <>
            <Link
              to="/contact?service=painting-decor"
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
            title="Quality That Lasts"
            description="At Hemmings Anytime, we believe that a great paint job starts with meticulous preparation. Our skilled painters handle everything from surface repairs and priming to the final coat, ensuring a flawless finish every time. We use premium paints and professional tools to deliver results that exceed your expectations."
            titleClassName="text-3xl font-bold text-[#1C1C1C] mb-6 uppercase tracking-wider"
            descriptionClassName="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed"
          />

          <ServiceCardsGrid items={paintingServices} wrapperClassName="flex flex-wrap gap-8" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0E3A6D] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to transform your space?</h2>
          <p className="text-blue-100 text-lg mb-12">Whether it's a small room or a large commercial project, we bring the same level of commitment and excellence to every job.</p>
          <Link 
            to="/contact?service=painting-decor"
            className="inline-flex items-center gap-2 bg-[#D62828] text-white px-10 py-5 rounded-full font-bold hover:bg-[#B91C1C] transition-all shadow-xl group"
          >
            Get Your Personalized Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};