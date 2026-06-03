import { Link } from 'react-router';
import { Truck, Box, Trash2, Home } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ServicePageHero } from '@/app/components/service-page/ServicePageHero';
import {
  ChecklistRow,
  ServiceCardsGrid,
  ServiceImageGallery,
  ServiceSectionIntro,
} from '@/app/components/service-page/ServicePageSections';
import clearanceHeroImage from "@/assets/removal-hero-image.avif";
import officeSpaceRemovalImage from "@/assets/office-space-removal-image.avif";
import singleItemRemovalImage from "@/assets/single-item-removal-image.avif";
import wasteRemovalImage from "@/assets/waste-removal-image.avif";

const features = [
  {
    title: "Office Space Removal",
    description: "Complete office clearing including furniture, electronics, and documentation disposal with full cleaning and storage options.",
    icon: <Box className="w-6 h-6" />
  },
  {
    title: "Single Item Removal",
    description: "No job is too small. We offer quick pickup for individual appliances, mattresses, or large furniture pieces.",
    icon: <Truck className="w-6 h-6" />
  },
  {
    title: "End-of-Tenancy Clearance",
    description: "Specialised waste removal and deep cleaning services designed to meet landlord and estate agent standards.",
    icon: <Home className="w-6 h-6" />
  },
  {
    title: "Waste Removal",
    description: "Skip the trips to the tip. We collect and remove large amounts of waste in one go, making it easy to clear out spaces quickly and efficiently.",
    icon: <Trash2 className="w-6 h-6" />
  }
];

const galleryItems = [
  {
    src: officeSpaceRemovalImage,
    alt: "Removal Workers",
    caption: "Professional Removal Team",
  },
  {
    src: singleItemRemovalImage,
    alt: "Single Item Removal",
    caption: "Single Item Removal",
  },
  {
    src: wasteRemovalImage,
    alt: "Waste Removal",
    caption: "Waste Removal",
  },
];

const keyFeatures = [
  "Licensed waste carriers",
  "Eco-friendly disposal methods",
  "Fully insured team",
  "Competitive transparent pricing",
  "Same-day services available",
];

export const ClearancePage = () => {
  return (
    <div className="bg-white">
      <ServicePageHero
        title="Professional Clearance & Storage"
        description="Our experienced removal team handles everything from full office suites to single items, providing efficient, eco-friendly clearance and storage solutions for every need."
        icon={<Truck className="h-16 w-16 text-[#F4C430]" />}
        background={
          <ImageWithFallback
            src={clearanceHeroImage}
            alt="Office Clearance"
            className="h-full w-full object-cover"
          />
        }
        actions={
          <Link
            to="/contact?service=clearance"
            className="whitespace-nowrap rounded-full bg-[#D62828] px-10 py-4 font-bold text-white transition-all hover:bg-[#B91C1C]"
          >
            Schedule Clearance Now
          </Link>
        }
      />

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceImageGallery items={galleryItems} />

          <ServiceSectionIntro
            title="Expert Removal Solutions Anytime, Anywhere"
            description="Hemmings Anytime provides a comprehensive range of clearance services designed to take the stress out of your space management. Whether you're relocating an entire office or just need to get rid of a broken sofa, our skilled crew is ready to handle the job with professionalism and efficiency."
            titleClassName="text-3xl font-bold text-[#1C1C1C] mb-6"
            descriptionClassName="text-lg text-[#6B7280] max-w-3xl mx-auto leading-relaxed"
          />

          <ChecklistRow items={keyFeatures} />

          <ServiceCardsGrid items={features} wrapperClassName="flex flex-wrap gap-8" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1C1C1C]">Need immediate drop-off and pickup carriage?</h2>
          <p className="text-[#6B7280] mb-10 text-lg">We offer flexible logistics solutions for furniture and appliance fitting along with priority transport services.</p>
          <Link 
            to="/contact?service=clearance"
            className="bg-[#D62828] text-white px-10 py-4 rounded-full font-bold hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl inline-block"
          >
            Contact Our Clearance Team
          </Link>
        </div>
      </section>
    </div>
  );
};