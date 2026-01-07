import React, { useState, useRef, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

interface PerfumeBottle3DProps {
  liquidColor: string;
  name: string;
}

export const PerfumeBottle3D: React.FC<PerfumeBottle3DProps> = ({ liquidColor, name }) => {
  const [rotateY, setRotateY] = useState(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);

  const springRotateY = useSpring(rotateY, { stiffness: 60, damping: 20 });

  const handlePointerDown = (e: React.PointerEvent | React.TouchEvent) => {
    isDragging.current = true;
    lastX.current = 'touches' in e ? e.touches[0].clientX : (e as React.PointerEvent).clientX;
  };

  const handlePointerMove = (e: React.PointerEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.PointerEvent).clientX;
    const delta = clientX - lastX.current;
    setRotateY((prev) => prev + delta * 0.4); // Slower, heavier feel
    lastX.current = clientX;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    // Subtle auto-rotation breathing
    const interval = setInterval(() => {
      if (!isDragging.current) {
        setRotateY((prev) => prev + Math.sin(Date.now() / 1000) * 0.05);
      }
    }, 16);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    springRotateY.set(rotateY);
  }, [rotateY, springRotateY]);

  // Dimensions
  const w = 160;
  const h = 210;
  const d = 45; // Thinner profile like real bottles

  // -- STYLES --
  
  // Glass Face
  const glassStyle: React.CSSProperties = {
    position: 'absolute',
    backfaceVisibility: 'hidden', // Hide backface for cleaner glass look
    border: '1px solid rgba(255,255,255,0.6)',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
    backdropFilter: 'blur(1px)',
    borderRadius: '40px', // Rounded shoulders matching photo
    boxShadow: 'inset 0 0 20px rgba(255,255,255,0.5), 0 10px 30px rgba(0,0,0,0.1)',
  };

  // Liquid
  const liquidStyle: React.CSSProperties = {
    position: 'absolute',
    background: liquidColor,
    opacity: 0.85,
    borderRadius: '32px', // Slightly smaller radius for inner liquid
    boxShadow: `inset 0 0 20px rgba(0,0,0,0.1)`,
    backfaceVisibility: 'hidden',
  };

  // Label - Specific "Radiant Aura" beige style
  const labelStyle: React.CSSProperties = {
    position: 'absolute',
    width: '100px',
    height: '110px',
    background: '#FDF5E6', // Old Lace / Beige
    border: '1px solid #D4AF37', // Gold border
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    backfaceVisibility: 'hidden',
  };

  return (
    <div 
      className="relative w-full h-[400px] flex items-center justify-center overflow-hidden touch-none perspective-[1000px]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      {/* 3D Scene Container */}
      <motion.div 
        style={{ 
          transformStyle: 'preserve-3d', 
          rotateY: springRotateY,
          rotateX: 5 // Slight tilt to look up at bottle
        }}
        className="relative w-[160px] h-[220px]"
      >
        {/* --- BOTTLE BODY --- */}

        {/* Front Glass */}
        <div style={{ ...glassStyle, width: w, height: h, transform: `translateZ(${d/2}px)` }}>
           {/* Reflection Highlight */}
           <div className="absolute top-4 right-4 w-4 h-full bg-gradient-to-b from-white/40 to-transparent skew-x-[-10deg] rounded-full blur-md" />
           
           {/* LABEL */}
           <div style={{ ...labelStyle, top: '25%', left: 'calc(50% - 50px)' }}>
             <div className="w-full h-full border border-[#D4AF37] flex flex-col items-center justify-center p-1">
                {/* Logo Icon Placeholder */}
                <div className="mb-2 text-[#D4AF37]">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                     <path d="M12 3L14.5 8.5L20 9.5L16 13.5L17 19L12 16.5L7 19L8 13.5L4 9.5L9.5 8.5L12 3Z" />
                   </svg>
                </div>
                <span className="text-[8px] tracking-[0.2em] font-serif text-gray-800 uppercase mb-2">Amary</span>
                <span className="text-[14px] font-serif font-bold text-gray-900 leading-tight text-center italic">{name}</span>
                <span className="text-[5px] tracking-widest text-gray-500 mt-2 uppercase">Eau de Parfum</span>
             </div>
           </div>
        </div>

        {/* Back Glass */}
        <div style={{ ...glassStyle, width: w, height: h, transform: `rotateY(180deg) translateZ(${d/2}px)` }} />

        {/* Side Glass (Left/Right) - Darker for thickness */}
        <div style={{ 
          position: 'absolute', 
          width: d, height: h - 40, // Slightly shorter to fit rounded corners
          background: 'rgba(255,255,255,0.3)',
          border: '1px solid rgba(255,255,255,0.4)',
          transform: `rotateY(90deg) translateZ(${w/2 - 2}px)`, 
          left: (w-d)/2, top: 20
        }} />
        <div style={{ 
          position: 'absolute', 
          width: d, height: h - 40, 
          background: 'rgba(255,255,255,0.3)',
          border: '1px solid rgba(255,255,255,0.4)',
          transform: `rotateY(-90deg) translateZ(${w/2 - 2}px)`, 
          left: (w-d)/2, top: 20
        }} />

        {/* --- LIQUID (Inner Volume) --- */}
        <div style={{ transformStyle: 'preserve-3d', transform: 'scale3d(0.9, 0.9, 0.9)' }} className="absolute inset-0 pointer-events-none">
            {/* Liquid Front */}
            <div style={{ ...liquidStyle, width: w, height: h-10, top: 10, transform: `translateZ(${d/2 - 5}px)` }} />
            {/* Liquid Back */}
            <div style={{ ...liquidStyle, width: w, height: h-10, top: 10, transform: `rotateY(180deg) translateZ(${d/2 - 5}px)` }} />
            {/* Liquid Sides */}
             <div style={{ 
               position: 'absolute', width: d-10, height: h-10, top: 10, left: (w-(d-10))/2,
               background: liquidColor, opacity: 0.9,
               transform: `rotateY(90deg) translateZ(${w/2 - 5}px)` 
             }} />
             <div style={{ 
               position: 'absolute', width: d-10, height: h-10, top: 10, left: (w-(d-10))/2,
               background: liquidColor, opacity: 0.9,
               transform: `rotateY(-90deg) translateZ(${w/2 - 5}px)` 
             }} />
        </div>

        {/* --- CAP (Glossy Black Cylinder) --- */}
        <div style={{ 
            transformStyle: 'preserve-3d', 
            position: 'absolute',
            top: -55,
            left: (w - 40)/2,
            width: 40,
            height: 55,
        }}>
            {/* Cap Front (Curved gradient) */}
            <div style={{ 
              width: 40, height: 55, 
              background: 'linear-gradient(90deg, #333 0%, #111 20%, #000 45%, #444 55%, #000 80%, #111 100%)', 
              position: 'absolute', transform: `translateZ(20px)`,
              borderRadius: '2px 2px 0 0'
            }} />
            {/* Cap Back */}
            <div style={{ 
              width: 40, height: 55, 
              background: '#111', 
              position: 'absolute', transform: `rotateY(180deg) translateZ(20px)` 
            }} />
            {/* Cap Sides */}
            <div style={{ width: 40, height: 55, background: '#0a0a0a', position: 'absolute', transform: `rotateY(90deg) translateZ(20px)`, left: 0 }} />
            <div style={{ width: 40, height: 55, background: '#0a0a0a', position: 'absolute', transform: `rotateY(-90deg) translateZ(20px)`, left: 0 }} />
            
            {/* Cap Top */}
            <div style={{ 
              width: 40, height: 40, 
              background: 'radial-gradient(circle, #333, #000)', 
              position: 'absolute', transform: `rotateX(90deg) translateZ(20px)`, top: -20,
              borderRadius: '50%' 
            }} />
            
            {/* Nozzle Tube (Inside bottle) */}
            <div style={{
              width: 2, height: h - 20,
              background: 'rgba(255,255,255,0.4)',
              position: 'absolute',
              top: 55, left: 19,
              transform: `translateZ(0px)`
            }} />
        </div>

      </motion.div>

      {/* Realistic Shadow */}
      <div className="absolute bottom-16 w-[120px] h-[30px] bg-black/30 blur-2xl rounded-[50%] transform scale-y-50" />
      
      {/* Interaction Hint */}
      <div className="absolute bottom-8 flex gap-2 items-center text-[9px] text-gray-400 font-medium uppercase tracking-[0.2em] animate-pulse">
         <div className="w-8 h-[1px] bg-gray-300" />
         <span>Rotate 360°</span>
         <div className="w-8 h-[1px] bg-gray-300" />
      </div>
    </div>
  );
};