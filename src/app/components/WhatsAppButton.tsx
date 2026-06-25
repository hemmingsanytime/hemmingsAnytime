import { motion } from 'motion/react';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/message/SSL4OWYKQKHNE1"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.6)] transition-shadow duration-300 animate-bounce-subtle"
      style={{
        animation: 'whatsapp-pop 2s ease-in-out infinite',
      }}
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .15 5.33.15 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.43zM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.88 9.88 0 0 1-1.53-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.9-9.88 9.9zm5.43-7.42c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.79.98-.97 1.18-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.54-.08-.15-.69-1.66-.94-2.27-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.54.08-.82.38-.28.3-1.07 1.04-1.07 2.54 0 1.5 1.1 2.95 1.26 3.15.15.2 2.17 3.3 5.24 4.63.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.44.25-.7.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35z"/>
      </svg>

      {/* Pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />

      {/* Inline keyframes */}
      <style>{`
        @keyframes whatsapp-pop {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </motion.a>
  );
};
