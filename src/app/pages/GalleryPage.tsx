import React, { useEffect } from 'react';
import { Camera, ExternalLink } from 'lucide-react';

export const GalleryPage = () => {
  // Redirect to TikTok after a brief moment
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://www.tiktok.com/@hemmingsanytime';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleManualRedirect = () => {
    window.location.href = 'https://www.tiktok.com/@hemmingsanytime';
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-[#0E3A6D]/10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-[#F2F4FF] rounded-full flex items-center justify-center">
              <Camera className="w-10 h-10 text-[#0E3A6D]" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">View Our Work</h1>
          <p className="text-lg text-[#6B7280] mb-8">
            We showcase our latest projects and service highlights on TikTok. You'll be redirected automatically in a moment...
          </p>

          <div className="flex items-center justify-center mb-8">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#0E3A6D] border-t-transparent"></div>
          </div>

          <button
            onClick={handleManualRedirect}
            className="inline-flex items-center gap-2 bg-[#D62828] text-white px-8 py-4 rounded-full font-bold hover:bg-[#B91C1C] transition-all shadow-lg group"
          >
            Visit Our TikTok Page
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <p className="text-sm text-[#6B7280] mt-6">
            Or click the button above to visit our TikTok page immediately
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#6B7280]">
            Don't have TikTok? Contact us directly at{' '}
            <a href="mailto:shavonhemmings3@gmail.com" className="text-[#0E3A6D] font-bold hover:text-[#D62828] transition-colors">
              shavonhemmings3@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
