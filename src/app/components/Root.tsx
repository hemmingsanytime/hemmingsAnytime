import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { SeoUpdater } from './SeoUpdater';

export const Root = () => {
  const { pathname, hash } = useLocation();

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
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
