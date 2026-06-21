import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { PromoBanner } from './PromoBanner';
import { SeoUpdater } from './SeoUpdater';

export const Root = () => {
  const { pathname, hash } = useLocation();

  // Push virtual pageview to GTM dataLayer and send gtag page_view on every route change
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'virtualPageview',
      pagePath: pathname,
      pageTitle: document.title,
    });

    // Send page_view to Google Analytics & Google Ads on every route change
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-4BCYGN2HDB', {
        page_path: pathname,
        page_title: document.title,
      });
      window.gtag('config', 'AW-18213228383', {
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname]);

  // Scroll to top on route change, or scroll to hash target
  useEffect(() => {
    if (hash) {
      // Small delay to allow the page to render before scrolling
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <SeoUpdater />
      <PromoBanner />
      <Navbar />
      {/* pt accounts for: promo banner (~40px) + navbar (80px) = ~120px */}
      <main className="pt-[120px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
