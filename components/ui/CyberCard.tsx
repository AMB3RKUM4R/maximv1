import { ReactNode } from "react";

export const CyberCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative group">
      {/* Moving Shadow Layers */}
      <div className="absolute inset-0 bg-cyber-glow rounded-2xl transform translate-x-2 translate-y-2 blur-xl group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300 will-change-transform"></div>
      
      {/* Main Card */}
      <div className="relative bg-black/80 backdrop-blur-md border-2 border-gray-800 rounded-2xl p-8 shadow-2xl group-hover:border-cyber-primary/50 transition-all duration-300">
        {/* Animated Corner Decorations */}
        <div className="absolute -top-px -left-px w-8 h-8 border-l-4 border-t-4 border-transparent group-hover:border-cyber-primary transition-all duration-300"></div>
        <div className="absolute -top-px -right-px w-8 h-8 border-r-4 border-t-4 border-transparent group-hover:border-cyber-primary transition-all duration-300"></div>
        <div className="absolute -bottom-px -left-px w-8 h-8 border-l-4 border-b-4 border-transparent group-hover:border-cyber-primary transition-all duration-300"></div>
        <div className="absolute -bottom-px -right-px w-8 h-8 border-r-4 border-b-4 border-transparent group-hover:border-cyber-primary transition-all duration-300"></div>
        
        {children}
      </div>
    </div>
  );
};