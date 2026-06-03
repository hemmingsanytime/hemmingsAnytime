import { motion } from 'motion/react';
import { Star, Quote, MessageSquarePlus } from 'lucide-react';

const reviews = [
  {
    name: 'James T.',
    location: 'Brighton',
    rating: 5,
    text: 'Hemmings Anytime cleared our entire office space over a weekend. Professional, punctual, and left everything spotless. Highly recommend their after-hours service!',
    service: 'Clearance',
  },
  {
    name: 'Sarah M.',
    location: 'Eastbourne',
    rating: 5,
    text: 'We hired them for end-of-tenancy cleaning and the results were outstanding. The team was thorough and incredibly polite. Our landlord was impressed!',
    service: 'Cleaning',
  },
  {
    name: 'David K.',
    location: 'Hove',
    rating: 5,
    text: 'Had our yacht detailed by the Hemmings team — the hull cleaning and protective coating exceeded our expectations. Will definitely use them again next season.',
    service: 'Marine Detailing',
  },
  {
    name: 'Emma W.',
    location: 'Hastings',
    rating: 5,
    text: 'The painting and decor work they did for our restaurant was flawless. Completed on schedule, after hours, so there was zero disruption to our business.',
    service: 'Painting & Decor',
  },
  {
    name: 'Michael R.',
    location: 'Lewes',
    rating: 5,
    text: 'Outstanding aviation detailing service. Every surface inside the cockpit was immaculate. These guys know what they\'re doing and take real pride in their work.',
    service: 'Aviation Detailing',
  },
  {
    name: 'Lisa P.',
    location: 'Seaford',
    rating: 5,
    text: 'Fast, reliable, and affordable. They removed a full house of furniture in under three hours. The pricing was transparent with no hidden fees. Five stars!',
    service: 'Clearance',
  },
];

const serviceOptions = [
  'Clearance',
  'Cleaning',
  'Painting & Decor',
  'Marine Detailing',
  'Aviation Detailing',
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-[#F4C430] text-[#F4C430]' : 'text-gray-300'}
        strokeWidth={1.5}
      />
    ))}
  </div>
);

export const ReviewsPage = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-[#0E3A6D] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(14,58,109,0.95)_0%,rgba(8,22,48,0.95)_100%)]" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(244,196,48,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(214,40,40,0.1) 0%, transparent 50%)',
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Client Reviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-blue-100 max-w-2xl mx-auto mb-8"
          >
            See what businesses and homeowners say about our services. Your
            feedback helps us keep delivering excellence.
          </motion.p>
          <motion.a
            href="https://api.leadconnectorhq.com/widget/survey/E1bpr8Tw4kd3pn8XybQz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#D62828] text-white rounded-full font-semibold hover:bg-[#B91C1C] transition-all shadow-lg hover:shadow-xl text-base cursor-pointer"
          >
            <MessageSquarePlus size={20} />
            Leave a Review
          </motion.a>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="bg-white border-b border-[#0E3A6D]/7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#F7F9FC] border border-[#0E3A6D]/7">
              <div className="text-2xl font-extrabold text-[#0E3A6D]">5.0</div>
              <div>
                <StarRating rating={5} />
                <p className="text-xs text-[#6B7280] mt-0.5">Average Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#F7F9FC] border border-[#0E3A6D]/7">
              <div className="text-2xl font-extrabold text-[#0E3A6D]">100%</div>
              <p className="text-xs text-[#6B7280]">Satisfaction Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Cards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="group relative flex flex-col rounded-2xl border border-[rgba(14,58,109,0.07)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(14,58,109,0.12)]"
              >
                <Quote
                  size={28}
                  className="text-[#0E3A6D]/10 mb-3 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-[0.9rem] leading-[1.7] text-[#374151] flex-1 mb-5">
                  "{review.text}"
                </p>
                <div className="border-t border-[#0E3A6D]/7 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#1C1C1C] text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-[#6B7280]">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <StarRating rating={review.rating} />
                    <p className="text-[0.7rem] text-[#0E3A6D] font-medium mt-1">
                      {review.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-[#6B7280] mb-4">
              Had a great experience? We'd love to hear from you!
            </p>
            <a
              href="https://api.leadconnectorhq.com/widget/survey/E1bpr8Tw4kd3pn8XybQz"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0E3A6D] text-white rounded-full font-semibold hover:bg-[#0C2F58] transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              <MessageSquarePlus size={20} />
              Leave a Review
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};
