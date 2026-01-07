import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { ArrowLeft, Instagram, Sparkles, Layers, Sun } from 'lucide-react';
import { Button } from './Button';
import { SOCIAL_LINKS } from '../constants';

interface ProductDetailProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!product) return null;

  const handleInstagram = () => {
    window.open(SOCIAL_LINKS.instagram, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: "tween", duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 bg-[#F8F9FA] z-[60] overflow-y-auto no-scrollbar"
        >
          {/* Top Navigation */}
          <div className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center pointer-events-none">
            <motion.button 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={onClose}
              className="pointer-events-auto w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center text-gray-800 shadow-sm active:scale-90 transition-transform hover:bg-white/60"
            >
              <ArrowLeft size={20} strokeWidth={1.5} />
            </motion.button>
            
            <div className="pointer-events-auto px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-white/50 text-[10px] font-bold uppercase tracking-widest text-gray-800 shadow-sm">
               {product.vibe}
            </div>
          </div>

          {/* Cinematic Image Section */}
          <section className="relative h-[60vh] w-full bg-[#F2F2F7] flex items-center justify-center pt-8 overflow-hidden">
             {/* Background Layers */}
             <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-[#E5E5EA]" />
             
             {/* Ambient Glow matching product color */}
             <div 
               className="absolute inset-0 opacity-30 blur-[100px]"
               style={{ background: `radial-gradient(circle at center, ${product.liquidColor}, transparent 70%)` }}
             />
             
             {/* Premium Glassmorphic Panel Behind Image */}
             <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[380px] bg-gradient-to-br from-white/40 via-white/10 to-transparent backdrop-blur-2xl rounded-[50px] border border-white/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,0.6)]"
             >
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 to-transparent rounded-[50px] pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/30 blur-3xl rounded-full pointer-events-none mix-blend-overlay" />
             </motion.div>

             {/* Product Image */}
             <motion.img
                src={product.image}
                alt={product.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="relative z-10 h-[75%] w-auto object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.2)]"
             />
          </section>

          {/* Detailed Content */}
          <div className="relative bg-white rounded-t-[40px] -mt-12 px-8 pt-12 pb-32 min-h-[50vh] shadow-[0_-15px_50px_rgba(0,0,0,0.04)] z-20">
             
             {/* Title Block */}
             <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-gray-900 mb-3 italic tracking-tight">{product.name}</h2>
                <div className="flex justify-center gap-3 mb-2 items-center">
                   <div className="h-[1px] w-6 bg-gray-200" />
                   <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Eau de Parfum · {product.longevity}</span>
                   <div className="h-[1px] w-6 bg-gray-200" />
                </div>
             </div>

             {/* Story & Description */}
             <div className="mb-10 text-center">
                <p className="text-base text-gray-600 font-light leading-relaxed max-w-sm mx-auto">
                    {product.description}
                </p>
             </div>

             {/* Structured Details */}
             <div className="space-y-4">
                
                {/* Mood - Clean Apple Style */}
                <div className="bg-gray-50/80 rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-amber-600 shrink-0">
                        <Sun size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-1">The Vibe</h3>
                        <p className="text-sm text-gray-600 font-light">{product.vibe.replace(' / ', ' & ')} — Perfect for {product.occasion}.</p>
                    </div>
                </div>

                {/* Notes - Visual Hierarchy */}
                <div className="bg-gray-50/80 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-5">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-rose-600 shrink-0">
                            <Layers size={18} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900">Olfactory Pyramid</h3>
                    </div>
                    
                    <div className="space-y-4 pl-14 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[19px] top-2 bottom-4 w-[1px] bg-gray-200" />

                         <div className="relative">
                            <div className="absolute -left-[39px] top-2 w-2 h-2 rounded-full bg-gray-300 border-2 border-white" />
                            <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Top</span>
                            <span className="text-sm text-gray-800 font-medium">{product.notes.top.join(', ')}</span>
                         </div>
                         <div className="relative">
                            <div className="absolute -left-[39px] top-2 w-2 h-2 rounded-full bg-gray-300 border-2 border-white" />
                            <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Heart</span>
                            <span className="text-sm text-gray-800 font-medium">{product.notes.heart.join(', ')}</span>
                         </div>
                         <div className="relative">
                            <div className="absolute -left-[39px] top-2 w-2 h-2 rounded-full bg-gray-300 border-2 border-white" />
                            <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Base</span>
                            <span className="text-sm text-gray-800 font-medium">{product.notes.base.join(', ')}</span>
                         </div>
                    </div>
                </div>
                
                 {/* Craftsmanship */}
                 <div className="bg-gray-50/80 rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-purple-600 shrink-0">
                        <Sparkles size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-1">Craftsmanship</h3>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">{product.craftsmanship}</p>
                    </div>
                </div>

             </div>

             {/* Footer CTA */}
             <div className="mt-12 mb-6">
                <Button 
                   variant="primary"
                   fullWidth
                   className="!py-5 text-base flex items-center justify-center gap-2 shadow-2xl shadow-gray-200"
                   onClick={handleInstagram}
                >
                   <Instagram size={20} />
                   <span>Order on Instagram</span>
                </Button>
                <p className="text-center text-[10px] text-gray-400 mt-4 tracking-wide font-medium">
                   Free shipping on all orders in Delhi NCR
                </p>
             </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};