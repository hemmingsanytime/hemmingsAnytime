import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Clock, MapPin, Phone } from "lucide-react";
import svgPaths from "../../imports/svg-7t9c65iule";
import removalHeroImage from "@/assets/removal-hero-image.avif";
import storageHeroImage from "@/assets/storage-hero-image.avif";
import cleaningHeroImage from "@/assets/cleaning-hero-image.avif";
import pressureWashingVideo from "@/assets/pressure-washing-video.mp4";
import PressureWashingVideoPoster from "@/assets/pressure-washing-video-thumbnail.avif";

const backgroundMedia = [
  { type: "image", src: removalHeroImage },
  { type: "video", src: pressureWashingVideo, poster: PressureWashingVideoPoster },
  { type: "image", src: storageHeroImage },
  { type: "image", src: cleaningHeroImage },
] as const;

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundMedia.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const preloadImages = backgroundMedia
      .filter((media) => media.type === "image")
      .map((media) => {
        const image = new Image();
        image.src = media.src;
        return image;
      });

    return () => {
      preloadImages.forEach((image) => {
        image.src = "";
      });
    };
  }, []);

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] py-20 px-4 sm:px-6 lg:px-12 overflow-hidden flex items-center">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {backgroundMedia.map((media, index) =>
          media.type === "image" ? (
            <motion.img
              key={media.src}
              src={media.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              initial={false}
              animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          ) : (
            <motion.video
              key={media.src}
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              initial={false}
              animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              poster={media.poster ?? undefined}
            >
              <source src={media.src} type="video/mp4" />
            </motion.video>
          ),
        )}
      </div>

      {/* Dark Overlay */}
      <div
        aria-hidden
        className="bg-linear-[135deg,#0e3a6deb_0%,#0e3a6dd9_50%,#0a1a32e6_100%] absolute inset-0 pointer-events-none opacity-75"
      />


      <div className="max-w-7xl mx-auto relative w-full">
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:gap-8 items-center text-center"
        >


          {/* Tag */}
          <div className="flex items-center gap-0 shadow-lg rounded-full overflow-hidden border-2 border-[rgba(247, 249, 252, 0.25)] cursor-not-allowed">
            <div className="bg-[#f4c430]/80 px-5 py-2.5 lg:px-6 lg:py-3 flex items-center border-r border-[#1C1C1C]/50">
              <p className="font-bold text-[#1C1C1C] text-sm lg:text-base tracking-wide">
                COMMERCIAL
              </p>
            </div>
            <div className="bg-[#f4c430]/80 px-5 py-2.5 lg:px-6 lg:py-3 flex items-center border-l border-[#1C1C1C]/50">
              <p className="font-bold text-[#1C1C1C] text-sm lg:text-base tracking-wide">
                RESIDENTIAL
              </p>
            </div>
          </div>

     
          {/* Heading */}
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl leading-tight">
            <span className="text-[#f7f9fc]">Your Trusted Partner for </span>
            <span className="text-[#f4c430]">Removal, Storage & Cleaning</span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full sm:w-auto justify-center">
            <a
              href="/contact?service=general"
              className="bg-[#d62828] flex gap-3 lg:gap-4 items-center justify-center px-8 lg:px-10 py-4 lg:py-5 rounded-xl hover:bg-[#B91C1C] transition-all group shadow-lg"
            >
              <span className="font-medium text-[#f7f9fc] text-lg lg:text-lg whitespace-nowrap">
                Get a Free Quote
              </span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 14.1667 14.1667"
              >
                <path
                  d={svgPaths.p32ca9a00}
                  stroke="#F7F9FC"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </svg>
            </a>
            <a
              href="tel:07557460940"
              className="bg-[#0E3A6D] text-white flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 rounded-xl hover:bg-[#0C2F58] hover:scale-[1.02] hover:shadow-xl transition-all shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E3A6D]"
            >
              <Phone size={22} strokeWidth={2.2} />
              <span className="font-bold text-white text-lg lg:text-lg whitespace-nowrap">
                07557 460940
              </span>
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
            {[
              { Icon: ShieldCheck, label: "Licensed & Insured" },
              { Icon: Clock, label: "After-Hours Available" },
              { Icon: MapPin, label: "Commercial & Residential" },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-sm text-[rgba(247,249,252,0.75)]"
              >
                <Icon size={14} strokeWidth={2} className="shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};