import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import type { ReactNode } from 'react';

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  imageClassName?: string;
};

type ServiceCardItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

type HighlightItem = {
  title: string;
  description: string;
};

export const ServiceSectionIntro = ({
  title,
  description,
  titleClassName = 'text-3xl font-bold text-[#1C1C1C] mb-4',
  descriptionClassName = 'text-[#6B7280] max-w-2xl mx-auto',
}: {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) => (
  <div className="text-center mb-16">
    <h2 className={titleClassName}>{title}</h2>
    <p className={descriptionClassName}>{description}</p>
  </div>
);

export const ServiceImageGallery = ({
  items,
  className = 'flex flex-wrap gap-6 mb-20',
}: {
  items: GalleryItem[];
  className?: string;
}) => (
  <div className={className}>
    {items.map((item) => (
      <div
        key={item.caption}
        className={item.className ?? 'relative rounded-3xl overflow-hidden group w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] h-96'}
      >
        <ImageWithFallback
          src={item.src}
          alt={item.alt}
          className={item.imageClassName ?? 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E3A6D]/80 to-transparent flex items-end p-6">
          <p className="text-white font-bold text-lg">{item.caption}</p>
        </div>
      </div>
    ))}
  </div>
);

export const ServiceCardsGrid = ({
  items,
  layout = 'stacked',
  cardClassName = 'p-8 rounded-2xl border border-[#0E3A6D]/10 bg-[#F7F9FC] hover:bg-white hover:shadow-xl transition-all group w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]',
  wrapperClassName = 'flex flex-wrap gap-8 mb-20',
  iconWrapperClassName = 'w-12 h-12 bg-[#F2F4FF] text-[#0E3A6D] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0E3A6D] group-hover:text-white transition-colors',
  titleClassName = 'text-xl font-bold text-[#1C1C1C] mb-3',
  descriptionClassName = 'text-[#6B7280] text-sm leading-relaxed',
}: {
  items: ServiceCardItem[];
  layout?: 'stacked' | 'inline';
  cardClassName?: string;
  wrapperClassName?: string;
  iconWrapperClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) => (
  <div className={wrapperClassName}>
    {items.map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={cardClassName}
      >
        {layout === 'inline' ? (
          <div className="flex items-start gap-4">
            <div className={iconWrapperClassName}>{item.icon}</div>
            <div>
              <h3 className={titleClassName}>{item.title}</h3>
              <p className={descriptionClassName}>{item.description}</p>
            </div>
          </div>
        ) : (
          <>
            <div className={iconWrapperClassName}>{item.icon}</div>
            <h3 className={titleClassName}>{item.title}</h3>
            <p className={descriptionClassName}>{item.description}</p>
          </>
        )}
      </motion.div>
    ))}
  </div>
);

export const ChecklistRow = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
    {items.map((item) => (
      <div key={item} className="flex items-center gap-3 text-[#1C1C1C]">
        <CheckCircle2 className="text-[#0E3A6D] w-5 h-5 flex-shrink-0" />
        <span className="font-medium">{item}</span>
      </div>
    ))}
  </div>
);

export const HighlightList = ({
  items,
  title,
}: {
  items: HighlightItem[];
  title: string;
}) => (
  <div>
    <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6 uppercase tracking-wider">{title}</h2>
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.title} className="flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-[#0E3A6D] flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-bold text-[#1C1C1C] mb-1">{item.title}</h4>
            <p className="text-[#6B7280]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
