import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function GlitchText({ text, className, size = "md" }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-5xl md:text-7xl",
    xl: "text-7xl md:text-9xl",
  };

  return (
    <div 
      className={cn("relative inline-block font-display uppercase tracking-widest", sizeClasses[size], className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10">{text}</span>
      {(isHovered || Math.random() > 0.95) && (
        <>
          <motion.span
            className="absolute top-0 left-0 -z-10 text-primary opacity-70"
            animate={{ x: [-2, 2, -1, 0], y: [1, -1, 0] }}
            transition={{ repeat: Infinity, duration: 0.2 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 -z-10 text-secondary opacity-70"
            animate={{ x: [2, -2, 1, 0], y: [-1, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.2, delay: 0.1 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
}
