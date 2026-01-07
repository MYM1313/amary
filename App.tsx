import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Menu,
  Instagram,
  Mail,
  Droplet,
  Globe,
  Clock,
  ArrowRight,
  Users,
  Quote,
  Star,
  Sparkles,
  Info
} from 'lucide-react';
import { 
  SOCIAL_LINKS, 
  COLLECTIONS, 
  PRODUCTS,
  FRAGRANCE_FAMILIES,
  TESTIMONIALS,
  US_POINTS
} from './constants';
import { Product } from './types';
import { Button } from './components/Button';
import { FloatingActions } from './components/FloatingActions';
import { ProductDetail } from './components/ProductDetail';
import { MenuOverlay } from './components/MenuOverlay';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax & Fade Effects
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.15]);
  const navBg = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.85)"]);
  const navBackdrop = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);
  const navBorder = useTransform(scrollY, [0, 100], ["rgba(0,0,0,0)", "rgba(0,0,0,0.06)"]);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" as const },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  };

  const handleInstagram = () => {
    window.open(SOCIAL_LINKS.instagram, '_blank');
  };

  const getProductForCollection = (collectionId: string) => {
    return PRODUCTS.find(p => p.collectionId === collectionId);
  };

  const logoGradient = "bg-gradient-to-br from-[#F5D061] via-[#D4AF37] to-[#8F6B29] text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]";

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex justify-center w-full font-sans selection:bg-gray-900 selection:text-white">
      {/* Mobile Frame */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative overflow-hidden flex flex-col border-x border-gray-100/50">
        
        {/* Futuristic Navigation */}
        <motion.header 
          style={{ backgroundColor: navBg, backdropFilter: navBackdrop, borderBottom: `1px solid`, borderColor: navBorder }}
          className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center max-w-md mx-auto transition-all duration-500"
        >
          {/* Brand Logo - Top Left */}
          <div className="w-10 h-10 flex items-center justify-start">
             <span className={`font-serif text-3xl font-bold tracking-[-0.1em] ${logoGradient}`}>AA</span>
          </div>

          <h1 className="text-xl font-bold tracking-[0.15em] uppercase text-gray-900 absolute left-1/2 -translate-x-1/2 whitespace-nowrap drop-shadow-sm">
            Amary Aroma
          </h1>
          
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-full glass-panel border-white/60 text-gray-900 shadow-sm z-10"
          >
            <Menu size={22} strokeWidth={1.5} />
          </motion.button>
        </motion.header>

        <main className="flex-1 w-full bg-[#F8F9FA]">
          
          {/* Cinematic Hero Section */}
          <section id="home" className="relative h-[95vh] w-full overflow-hidden flex flex-col justify-end pb-16">
            <motion.div 
              style={{ opacity: heroOpacity, scale: heroScale }}
              className="absolute inset-0 w-full h-full"
            >
              {/* Abstract Futuristic Background */}
              <div className="absolute inset-0 bg-gray-200">
                <img 
                   src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=1200&auto=format&fit=crop"
                   className="w-full h-full object-cover opacity-90"
                   alt="Hero"
                />
              </div>
              
              {/* Animated Light Streaks (Simulated with gradients) */}
              <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10 blur-[100px] animate-pulse" />

              {/* Cinematic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none mix-blend-overlay" />
            </motion.div>

            <div className="relative z-20 px-8 text-center text-white">
              <motion.div 
                initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.2, duration: 1.4, ease: "easeOut" }}
              >
                <div className="flex justify-center gap-3 mb-6 opacity-70">
                   <div className="h-[1px] w-6 bg-white/60 self-center" />
                   <p className="text-[10px] uppercase tracking-[0.3em] font-light">Pure Oils · Unisex</p>
                   <div className="h-[1px] w-6 bg-white/60 self-center" />
                </div>
                
                <h2 className="text-[3.2rem] font-serif mb-6 leading-[1.05] italic tracking-tight drop-shadow-xl text-shadow">
                  Crafted to<br/>Captivate.
                </h2>
                <p className="text-white/80 font-light text-sm mb-10 max-w-[85%] mx-auto leading-relaxed tracking-wide">
                  Made to last. Crafted in India.<br/>
                  Discover your signature aura.
                </p>
                
                <div className="flex flex-col gap-4 items-center">
                  <Button 
                    variant="glass" 
                    fullWidth 
                    className="!border-white/20 !bg-white/10 backdrop-blur-xl hover:!bg-white/20 transition-all"
                    onClick={handleInstagram}
                    icon={<Instagram size={16} />}
                  >
                    Explore on Instagram
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* FRAGRANCE ENCYCLOPEDIA */}
          <section id="encyclopedia" className="pt-20 pb-8 bg-[#F8F9FA] relative overflow-hidden z-10">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-b from-blue-50/40 to-transparent rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-t from-purple-50/40 to-transparent rounded-full blur-[80px] pointer-events-none" />

            <motion.div {...fadeInUp} className="px-8 mb-8 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Knowledge</span>
              <h3 className="text-2xl font-serif text-gray-900 italic">Fragrance Encyclopedia</h3>
            </motion.div>

            <div className="flex overflow-x-auto snap-x snap-mandatory px-6 gap-6 pb-12 no-scrollbar relative z-10 pl-[24px] pr-[24px]">
              {FRAGRANCE_FAMILIES.map((family, i) => (
                <motion.div
                  key={family.id}
                  initial={{ opacity: 0, x: 50, rotateY: 5 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.1, duration: 0.7, type: "spring", stiffness: 40 }}
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  className="snap-center shrink-0 w-[240px] h-[340px] rounded-[32px] relative overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.08)] cursor-pointer bg-gray-900"
                >
                  <motion.img 
                    src={family.image} 
                    alt={family.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${family.color} mix-blend-overlay opacity-50 group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
                  <div className="absolute inset-0 border border-white/10 rounded-[32px] pointer-events-none" />
                  
                  <div className="absolute inset-x-4 bottom-4 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex flex-col justify-end transition-all duration-300 group-hover:bg-white/15">
                    <div className="flex items-center justify-between mb-3 text-white/90">
                       <h4 className="text-xl font-serif italic tracking-wide">{family.name}</h4>
                       <Info size={16} className="opacity-60" />
                    </div>
                    <div className="w-8 h-[1px] bg-white/40 mb-3" />
                    <p className="text-[11px] text-white/80 leading-relaxed font-light line-clamp-3">{family.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Collections Grid */}
          <section id="collections" className="pt-8 pb-20 bg-white relative rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.03)] z-20">
             <div className="px-8 mb-8 text-center pt-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">The Collection</span>
                <h3 className="text-3xl font-serif text-gray-900 italic">Curated Scents</h3>
             </div>

             <div className="px-5 grid grid-cols-2 gap-4 mb-10 perspective-[1000px]">
                {COLLECTIONS.map((col, idx) => {
                   const product = getProductForCollection(col.id);
                   return (
                     <motion.div 
                       key={col.id}
                       initial={{ opacity: 0, rotateX: 15, y: 30 }}
                       whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                       transition={{ 
                           delay: idx * 0.1, 
                           type: "spring",
                           stiffness: 100,
                           damping: 20
                       }}
                       viewport={{ once: true, margin: "-10%" }}
                       whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                       whileTap={{ scale: 0.95 }}
                       onClick={() => product && setSelectedProduct(product)}
                       className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.15)] cursor-pointer group transform-gpu transition-all duration-300 bg-gray-50 z-10"
                     >
                        <img src={col.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                           <h4 className="text-lg font-serif italic mb-0.5 drop-shadow-md">{col.name}</h4>
                           <p className="text-[9px] font-medium uppercase tracking-widest opacity-90 drop-shadow-sm">{col.description}</p>
                        </div>
                     </motion.div>
                   );
                })}
             </div>

             <div className="px-6 relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-full bg-gradient-to-r from-purple-200/40 via-pink-200/40 to-amber-200/40 blur-2xl -z-10 rounded-full opacity-60" />
                
                <Button 
                   variant="glass" 
                   fullWidth 
                   className="!bg-white/60 !backdrop-blur-xl !border-white/60 !text-gray-900 !py-5 !shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:!bg-white/80 transition-all active:scale-[0.98] group"
                   onClick={handleInstagram}
                >
                   <div className="flex items-center justify-center gap-3">
                      <Instagram size={20} className="text-pink-600" />
                      <span className="font-serif italic text-lg tracking-wide">Discover on Instagram</span>
                      <ArrowRight size={16} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                   </div>
                </Button>
             </div>
          </section>

          {/* REVIEWS / TESTIMONIALS */}
          <section id="reviews" className="py-16 relative overflow-hidden bg-[#F8F9FA] z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,248,225,0.4),transparent_50%)] pointer-events-none" />
            
            <motion.div {...fadeInUp} className="px-8 mb-10 flex items-center justify-between">
               <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 block mb-2">Community</span>
                  <h3 className="text-2xl font-serif text-gray-900 italic">Loved by You</h3>
               </div>
               <div className="flex gap-0.5 text-[#D4AF37]">
                 {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
               </div>
            </motion.div>

            <div className="flex overflow-x-auto snap-x snap-mandatory px-6 gap-5 pb-6 no-scrollbar">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  className="snap-center shrink-0 w-[280px] glass-panel border border-white/60 p-6 rounded-[24px] shadow-sm relative flex flex-col justify-between"
                >
                   <Quote className="absolute top-4 right-4 text-gray-200" size={40} />
                   <p className="text-sm text-gray-700 italic leading-relaxed mb-6 relative z-10">"{t.text}"</p>
                   
                   <div className="flex items-center gap-3">
                      <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                      <div>
                        <p className="text-xs font-bold text-gray-900">{t.name}</p>
                        <p className="text-[9px] text-gray-500 uppercase tracking-wider">{t.location}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* WHY AMARY (YMRE) - Compact Premium Cards */}
          <section id="why-amary" className="py-24 bg-[#F8F9FA] relative overflow-hidden z-20">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA] via-transparent to-[#F8F9FA]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-100/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            <motion.div {...fadeInUp} className="px-8 mb-16 text-center relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 block mb-3">Philosophy</span>
              <h3 className="text-4xl font-serif text-gray-900 italic leading-tight drop-shadow-sm">Why Amary?</h3>
            </motion.div>

            <div className="flex overflow-x-auto snap-x snap-mandatory px-6 gap-4 pb-16 no-scrollbar relative z-10 pl-[24px] pr-[24px]">
               {US_POINTS.map((usp, i) => (
                 <motion.div
                   key={usp.id}
                   initial={{ opacity: 0, y: 40, rotateX: 10 }}
                   whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                   viewport={{ once: true, margin: "-10%" }}
                   transition={{ delay: i * 0.15, duration: 0.8, type: "spring", bounce: 0.3 }}
                   whileTap={{ scale: 0.95 }}
                   className="snap-center shrink-0 w-[170px] h-[240px] relative group perspective-[1000px]"
                 >
                    {/* Glass Card Container */}
                    <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-[32px] border border-white/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] group-hover:bg-white/80">
                        
                        {/* Indian-inspired Accent Gradients based on type */}
                        {usp.icon === 'droplet' && <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/40 rounded-full blur-2xl -mr-10 -mt-10" />}
                        {usp.icon === 'users' && <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100/40 rounded-full blur-2xl -mr-10 -mt-10" />}
                        {usp.icon === 'globe' && <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl -mr-10 -mt-10" />}
                        {usp.icon === 'clock' && <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl -mr-10 -mt-10" />}
                        
                        <div className="h-full w-full flex flex-col items-center justify-center p-5 relative z-10">
                            
                            {/* Icon */}
                            <motion.div 
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-14 h-14 mb-5 rounded-2xl bg-white/80 shadow-[inset_0_2px_4px_rgba(255,255,255,1),0_4px_10px_rgba(0,0,0,0.04)] border border-white flex items-center justify-center"
                            >
                                {usp.icon === 'droplet' && <Droplet size={24} strokeWidth={1.5} className="text-cyan-700" />}
                                {usp.icon === 'users' && <Users size={24} strokeWidth={1.5} className="text-rose-700" />}
                                {usp.icon === 'globe' && <Globe size={24} strokeWidth={1.5} className="text-emerald-700" />}
                                {usp.icon === 'clock' && <Clock size={24} strokeWidth={1.5} className="text-amber-700" />}
                            </motion.div>
                            
                            <h4 className="text-lg font-serif italic text-gray-900 mb-2 tracking-wide text-center leading-tight">
                                {usp.title}
                            </h4>
                            
                            <p className="text-[11px] text-gray-500 leading-tight font-light text-center">{usp.description}</p>
                        </div>
                    </div>
                 </motion.div>
               ))}
               {/* Padding div to allow last card to be fully seen + peek effect happens naturally due to width */}
               <div className="w-2 shrink-0" />
            </div>
          </section>

          {/* BRAND STORY */}
          <section id="story" className="py-16 bg-[#F8F9FA] relative overflow-hidden">
             {/* Parallax Image Background Block */}
             <div className="h-[320px] w-full relative mb-10 overflow-hidden">
                <motion.div 
                   style={{ y: useTransform(scrollY, [1500, 2500], [-20, 20]) }}
                   className="absolute inset-0 bg-gray-200"
                >
                  <img src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 scale-110" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-[#F8F9FA]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8F9FA]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8 max-w-[80%] z-10">
                   <h2 className="text-4xl font-serif italic text-gray-900 mb-2 leading-tight drop-shadow-sm">Rooted in<br/>Heritage.</h2>
                </div>
             </div>

             <motion.div {...fadeInUp} className="px-8 relative z-10">
                <div className="flex gap-4 mb-8">
                   <div className="w-[2px] h-auto min-h-[100px] bg-gradient-to-b from-[#D4AF37] to-transparent" />
                   <div>
                      <p className="text-sm text-gray-600 leading-7 mb-4 font-light text-justify">
                        Amary Aroma was born in the narrow, fragrant lanes of <span className="text-gray-900 font-medium">Kannauj</span>, India’s perfume capital. We believe that luxury shouldn't be whispered—it should be felt.
                      </p>
                      <p className="text-sm text-gray-600 leading-7 font-light text-justify">
                        Our unisex blends are crafted with pure, high-concentration oils, ensuring that your signature scent lingers from dawn until dusk. No boundaries, just pure essence.
                      </p>
                   </div>
                </div>
                
                <Button 
                   variant="glass" 
                   fullWidth 
                   className="!bg-white !text-gray-900 !border-gray-200 shadow-md flex items-center justify-center gap-2 hover:!bg-gray-50" 
                   onClick={handleInstagram}
                >
                   <Sparkles size={16} className="text-[#D4AF37]" />
                   <span>Read Our Full Story</span>
                </Button>
             </motion.div>
          </section>

          {/* Connect / Contact Section */}
          <section id="connect" className="px-4 pb-16 pt-10 bg-[#F8F9FA]">
            <div className="bg-white rounded-[32px] p-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100">
               {/* Decorative Gradient Blobs */}
               <div className="absolute top-[-30%] right-[-30%] w-80 h-80 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-[80px] pointer-events-none" />
               <div className="absolute bottom-[-30%] left-[-30%] w-80 h-80 bg-gradient-to-tr from-orange-50 to-pink-50 rounded-full blur-[80px] pointer-events-none" />
               
               <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-serif text-gray-900 mb-2 italic">Get in Touch</h3>
                  <p className="text-gray-400 text-[10px] mb-8 font-medium tracking-widest uppercase">
                     Delhi · Noida
                  </p>

                  <div className="space-y-3 max-w-xs mx-auto">
                     <button 
                       onClick={handleInstagram}
                       className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg active:scale-98 transition-transform"
                     >
                        <Instagram size={16} /> 
                        <span>DM on Instagram</span>
                     </button>
                     
                     <div className="pt-2 text-[10px] text-gray-400 font-light">
                        <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center justify-center gap-2 hover:text-gray-900 transition-colors py-2">
                           <Mail size={12} /> {SOCIAL_LINKS.email.replace('mailto:', '')}
                        </a>
                     </div>
                  </div>
               </div>
            </div>
          </section>

          {/* Minimal Footer */}
          <footer className="bg-[#F8F9FA] pb-28 px-8 text-center border-t border-gray-200/50 pt-12">
             <motion.div 
                whileHover={{ y: -2 }}
                className="flex flex-col items-center justify-center gap-3 mb-8 cursor-pointer"
             >
               <div className="w-10 h-10 flex items-center justify-center">
                  <span className={`font-serif text-2xl font-bold tracking-[-0.15em] ${logoGradient}`}>AA</span>
               </div>
               <h4 className="font-serif italic text-gray-900 text-lg">Amary Aroma</h4>
             </motion.div>
             
             <div className="flex justify-center gap-6 text-[9px] text-gray-500 uppercase tracking-widest font-medium">
                <a href="#collections" className="hover:text-black transition-colors">Collections</a>
                <a href="#" onClick={handleInstagram} className="hover:text-black transition-colors">Instagram</a>
             </div>
             <p className="text-[9px] text-gray-300 mt-10 font-light">© 2024 Amary Aroma.</p>
          </footer>

        </main>

        {/* Global Overlays */}
        <FloatingActions />
        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <ProductDetail 
          product={selectedProduct} 
          isOpen={!!selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
        
      </div>
    </div>
  );
}

export default App;