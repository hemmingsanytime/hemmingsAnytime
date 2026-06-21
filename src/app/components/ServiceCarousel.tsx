import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SofaSteamCleaningImage from "@/assets/sofa-steam-cleaning-image.avif";
import OfficeSpaceRemovalImage from "@/assets/office-space-removal-image.avif";
import MovingAndRelocationImage from "@/assets/moving-and-relocation-image.avif";
import RemovalHeroImage from "@/assets/removal-hero-image.avif";
import StorageImage from "@/assets/storage-image.avif"
import ModernPaintingImage from "@/assets/modern-painting-image.avif";
import HullCleaningImage from "@/assets/hull-cleaning-image.avif";
import AviationDetailingImage from "@/assets/aircraft-detailing-image.avif";
import IndustrialCleaningImage from "@/assets/industrial-cleaning-image.avif"
import FactoryCleaningImage from "@/assets-png/factory-cleaning-image.jpg"
import SignCleaningImage from "@/assets/sign-cleaning-image.avif"

type Slide = {
  image: string;
  label: string;
  alt: string;
  imageClassName?: string;
};

const slides: Slide[] = [
  {
    image: SofaSteamCleaningImage,
    label: "Cleaning Services",
    alt: "Professional Cleaning Services",
    imageClassName: "object-center",
  },
  {
    image: SignCleaningImage,
    label: "Sign Cleaning",
    alt: "Sign Cleaning Services",
    imageClassName: "object-[75%_50%]"
  },
  {
    image: FactoryCleaningImage,
    label: "Factory Cleaning",
    alt: "Factory Cleaning Services",
    imageClassName: "object-bottom"
  },
  {
    image: OfficeSpaceRemovalImage,
    label: "Packing Services",
    alt: "Professional Packing Services",
    imageClassName: "object-[0%_15%]",
  },
  {
    image: RemovalHeroImage,
    label: "Removal Services",
    alt: "Professional Removal Services",
    imageClassName: "object-center",
  },
  {
    image: IndustrialCleaningImage,
    label: "Industrial Cleaning",
    alt: "Industrial Cleaning Services",
    imageClassName: "object-bottom"
  },
  {
    image: HullCleaningImage,
    label: "Marine Cleaning Services",
    alt: "Marine Detailing",
    imageClassName: "object-[50%_60%]",
  },
  {
    image: ModernPaintingImage,
    label: "Painting & Decor",
    alt: "Interior Painting Services",
    imageClassName: "object-[50%_0%]",
  },
  {
    image: AviationDetailingImage,
    label: "Aviation Detailing Services",
    alt: "Aviation Detailing",
    imageClassName: "object-[50%_0%]",
  },
  {
    image: MovingAndRelocationImage,
    label: "Moving and Relocation",
    alt: "Moving and Relocation",
    imageClassName: "object-[0%_5%]",
  },
  {
    image: StorageImage,
    label: "Storage Solutions",
    alt: "Storage Services",
    imageClassName: "object-[50%_40%]",
  },
];



export const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timeout = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useEffect(() => {
    const preloadImages = slides.map((slide) => {
      const image = new Image();
      image.src = slide.image;
      return image;
    });

    return () => {
      preloadImages.forEach((image) => {
        image.src = '';
      });
    };
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Carousel Container */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-2xl">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              >
                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].alt}
                  loading="eager"
                  fetchPriority={currentIndex === 0 ? 'high' : 'auto'}
                  decoding="async"
                  className={`w-full h-full object-cover ${slides[currentIndex].imageClassName ?? ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-bold text-white text-center">
                    {slides[currentIndex].label}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} color="#0E3A6D" strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={24} color="#0E3A6D" strokeWidth={2.5} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? "w-8 bg-[#0E3A6D]" : "w-2 bg-[#D1D5DB]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
