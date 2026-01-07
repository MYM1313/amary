import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  icon
}) => {
  const baseStyles = "relative font-medium rounded-full transition-all duration-300 flex items-center justify-center ios-tap-highlight-none overflow-hidden";
  
  const variants = {
    primary: "bg-[#1c1c1e] text-white shadow-xl shadow-gray-300/50 active:scale-95",
    secondary: "bg-white/90 backdrop-blur text-gray-900 shadow-md active:scale-95 border border-white/50",
    outline: "bg-transparent border border-gray-900/20 text-gray-900 active:bg-gray-50 active:scale-95",
    ghost: "bg-transparent text-gray-600 active:text-gray-900 active:bg-gray-100/30",
    glass: "glass-panel text-white border-white/30 hover:bg-white/20 active:scale-95"
  };

  const sizes = "px-7 py-4 text-[15px] tracking-wide";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${variants[variant]} ${sizes} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2 opacity-90">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      )}
    </motion.button>
  );
};
