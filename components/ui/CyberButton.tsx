import { ReactNode } from "react";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const CyberButton = ({ children, className, ...props }: CyberButtonProps) => {
  return (
    <button
      {...props}
      className={`px-10 py-4 bg-cyber-primary text-cyber-bg font-bold text-lg rounded-md border-2 border-cyber-primary hover:bg-transparent hover:text-cyber-primary transition-all duration-300 shadow-[0_0_15px_rgba(255,213,0,0.5)] hover:shadow-[0_0_25px_rgba(255,213,0,0.8)] ${className}`}
    >
      {children}
    </button>
  );
};