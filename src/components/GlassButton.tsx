import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const GlassButton = ({ children, variant = "primary", className, onClick }: GlassButtonProps) => {
  const baseStyles = "glass px-8 py-3 rounded-lg font-medium transition-all duration-300";
  
  const variantStyles = {
    primary: "text-primary border-primary glow-primary hover:bg-primary/10",
    secondary: "text-secondary border-secondary hover:bg-secondary/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default GlassButton;
