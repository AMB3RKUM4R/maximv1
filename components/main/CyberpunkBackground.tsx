"use client";

const CyberpunkBackground = () => {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden bg-cyber-bg">
      {/* Layer 1 - Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 213, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 213, 0, 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Layer 2 - Digital Rain */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute w-px bg-gradient-to-b from-cyber-primary/50 to-transparent animate-digital-rain-smooth will-change-transform"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${30 + Math.random() * 70}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${4 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Layer 3 - Glow Orbs */}
       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-smooth will-change-transform"></div>
       <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-cyan/10 rounded-full blur-3xl animate-pulse-smooth will-change-transform delay-1000"></div>

      {/* Layer 4 - Floating Geometric Shapes */}
       <div className="absolute top-10 right-1/4 w-24 h-24 border-2 border-cyber-cyan/30 rotate-45 animate-spin-smooth will-change-transform"></div>
       <div className="absolute bottom-10 left-1/4 w-32 h-32 border-2 border-cyber-primary/30 -rotate-12 animate-float-smooth will-change-transform"></div>

    </div>
  );
};

export default CyberpunkBackground;