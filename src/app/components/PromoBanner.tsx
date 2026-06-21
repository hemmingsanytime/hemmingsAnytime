import { Sparkles, Tag } from 'lucide-react';

export const PromoBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] overflow-hidden bg-gradient-to-r from-[#D62828] via-[#E63946] to-[#D62828] text-white">
      {/* Animated shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 60%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s ease-in-out infinite',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3 py-2.5 sm:py-3 text-center">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#F4C430] flex-shrink-0 hidden min-[420px]:block" />

          {/* Mobile layout */}
          <p className="text-sm sm:text-base lg:text-lg font-bold tracking-wide leading-tight">
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-0.5 mr-2 text-xs font-extrabold uppercase tracking-wider">
              <Tag className="w-3 h-3" />
              Limited Offer
            </span>
            <span className="font-extrabold text-[#F4C430]">20% OFF</span>
            <span className="mx-1"> on Any Service</span>
            <span className="text-white/50 mx-0.5">+</span>
            <span className="font-extrabold text-[#F4C430]">1 Month Free Storage</span>
          </p>

          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#F4C430] flex-shrink-0 hidden min-[420px]:block" />
        </div>
      </div>

      {/* Shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
};
