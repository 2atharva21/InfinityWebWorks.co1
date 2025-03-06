"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface AnimatedIconProps {
  icon: React.ReactNode;
  color?: string;
  size?: number | string;
  hoverScale?: number;
  className?: string;
  delay?: number;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon,
  color = "text-primary",
  size = 48,
  hoverScale = 1.2,
  className = "",
  delay = 0,
}) => {
  // Memoized styles for performance
  const computedSize = useMemo(() => ({ width: size, height: size }), [size]);

  return (
    <motion.div
      className={`flex items-center justify-center ${color} ${className}`}
      style={{ ...computedSize, willChange: "transform" }}
      initial={{ scale: 0, rotate: -180, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      whileHover={{
        scale: hoverScale,
        rotate: [0, 15, -10, 0], // Adds a slight bounce effect
        transition: { type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.9 }} // Click effect
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay,
      }}
      aria-hidden="true" // Decorative icon
    >
      {icon}
    </motion.div>
  );
};

export default AnimatedIcon;
