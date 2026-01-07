import React, { useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, ChevronRight, Instagram, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'Home', href: '#home', sub: 'Begin Journey' },
  { label: 'Encyclopedia', href: '#encyclopedia', sub: 'Fragrance Families' },
  { label: 'Collections', href: '#collections', sub: 'Explore Scents' },
  { label: 'Reviews', href: '#reviews', sub: 'Community Love' },
  { label: 'Why Amary', href: '#why-amary', sub: 'Our Philosophy' },
  { label: 'Brand Story', href: '#story', sub: 'Heritage' },
  { label: 'Get in Touch', href: '#connect', sub: 'Contact Us' },
];

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 400);
    }
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  // Drawer Animation Variants
  const sidebarVariants: Variants = {
    closed: { 
      x: '-100%',
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40 
      }
    },
    open: { 
      x: 0,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 40,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
          />

          {/* Side Drawer */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 left-0 bottom-0 z-[51] w-[85%] max-w-[320px] bg-[#F8F9FA]/90 backdrop-blur-3xl border-r border-white/40 shadow-2xl flex flex-col overflow-hidden"
          >
             {/* Decorative Elements */}
             <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-50/40 to-transparent pointer-events-none" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-t from-purple-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

             {/* Header */}
             <div className="relative pt-16 px-8 pb-8 flex justify-between items-end border-b border-gray-100/50">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-1">Menu</span>
                    <span className="font-serif text-3xl font-bold italic text-gray-900 tracking-tight">Amary</span>
                </div>
                <button 
                  onClick={onClose} 
                  className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center border border-white text-gray-800 shadow-sm active:scale-90 transition-all mb-1 hover:bg-white"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
             </div>

             {/* Navigation Links */}
             <nav className="flex-1 px-6 py-8 flex flex-col gap-3 overflow-y-auto no-scrollbar relative z-10">
                {menuItems.map((item) => (
                   <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => { e.preventDefault(); handleLinkClick(item.href); }}
                      variants={itemVariants}
                      className="group relative overflow-hidden p-4 rounded-2xl bg-white/40 border border-white/60 hover:bg-white/90 active:scale-[0.98] transition-all duration-300 shadow-sm active:shadow-inner"
                   >
                      <div className="flex items-center justify-between relative z-10">
                        <div>
                            <span className="block font-serif text-xl text-gray-900 italic mb-0.5 group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                            <span className="text-[9px] uppercase tracking-wider text-gray-400 font-medium group-hover:text-amber-600 transition-colors">{item.sub}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-gray-300 group-hover:text-gray-900 group-hover:shadow-md transition-all duration-300">
                             <ChevronRight size={14} />
                        </div>
                      </div>
                      
                      {/* Active Highlight Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
                   </motion.a>
                ))}
             </nav>

             {/* Footer / Socials */}
             <div className="p-8 bg-white/40 border-t border-white/50 relative z-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 font-bold">Follow Us</p>
                <div className="flex gap-3">
                   <button onClick={() => handleSocialClick(SOCIAL_LINKS.instagram)} className="flex-1 py-3 bg-white/70 rounded-xl border border-white/60 flex items-center justify-center gap-2 text-xs font-medium text-gray-700 shadow-sm active:scale-95 transition-transform hover:text-pink-600 hover:bg-white">
                      <Instagram size={16} /> Instagram
                   </button>
                   <button onClick={() => handleSocialClick(SOCIAL_LINKS.email)} className="flex-1 py-3 bg-white/70 rounded-xl border border-white/60 flex items-center justify-center gap-2 text-xs font-medium text-gray-700 shadow-sm active:scale-95 transition-transform hover:text-blue-600 hover:bg-white">
                      <Mail size={16} /> Email
                   </button>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-[9px] text-gray-400 font-light tracking-wide">© 2024 Amary Aroma</p>
                </div>
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};