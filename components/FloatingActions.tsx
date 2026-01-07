import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 pointer-events-none">
      
      {/* Instagram */}
      <motion.a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-12 h-12 glass-panel rounded-full flex items-center justify-center shadow-lg text-gray-700 hover:text-pink-600 active:scale-90 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Instagram size={20} strokeWidth={2} />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg text-white active:scale-90 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.1, type: "spring" }}
      >
        <MessageCircle size={20} strokeWidth={2} fill="white" className="text-white" />
      </motion.a>
    </div>
  );
};
