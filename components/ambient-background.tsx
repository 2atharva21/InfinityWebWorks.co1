"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./ambient-background.module.css";

// Utility function for throttling
function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Interface for color configuration
interface ColorConfig {
  hue: number;
  saturation: number;
  lightness: number;
}

// Particle interface with scroll-based color
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  baseHue: number;
  update: () => void;
  draw: () => void;
}

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const scrollRef = useRef(0);

  // Define color palette for scroll-based gradient
  const colorPalette: ColorConfig[] = [
    { hue: 260, saturation: 70, lightness: 40 }, // Purple (top)
    { hue: 220, saturation: 60, lightness: 50 }, // Blue (middle)
    { hue: 300, saturation: 80, lightness: 45 }, // Magenta (bottom)
  ];

  // Function to interpolate between two colors based on scroll position
  const interpolateColor = (scrollPercent: number): string => {
    const colorIndex = scrollPercent * (colorPalette.length - 1);
    const lowerIndex = Math.floor(colorIndex);
    const upperIndex = Math.min(lowerIndex + 1, colorPalette.length - 1);
    const blend = colorIndex - lowerIndex;

    const lowerColor = colorPalette[lowerIndex];
    const upperColor = colorPalette[upperIndex];

    const hue = lowerColor.hue + (upperColor.hue - lowerColor.hue) * blend;
    const saturation =
      lowerColor.saturation + (upperColor.saturation - lowerColor.saturation) * blend;
    const lightness =
      lowerColor.lightness + (upperColor.lightness - lowerColor.lightness) * blend;

    return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.1)`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Failed to get 2D context");
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    class ParticleImpl implements Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      baseHue: number;

      constructor() {
        if (!canvas) {
          throw new Error("Canvas element not found");
        }
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.baseHue = colorPalette[0].hue; // Start with first color
        this.color = interpolateColor(0); // Use initial scroll position
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (!canvas) return;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        // Mouse interaction: make particles grow when near mouse
        const dx = this.x - mouse.current.x;
        const dy = this.y - mouse.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          this.size = Math.min(this.size + 1, 10);
        } else {
          this.size = Math.max(this.size - 0.1, 1);
        }

        // Update color based on scroll
        const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollRef.current / (scrollMax || 1); // Avoid division by 0
        this.color = interpolateColor(scrollPercent);
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color.replace("0.1)", "0.5)");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Initialize particles
    function init() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new ParticleImpl());
      }
    }

    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    init();
    animate();

    // Event listeners
    const handleResize = throttle(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }, 200);

    const handleScroll = throttle(() => {
      scrollRef.current = window.scrollY;
      particles.forEach(p => p.update());
    }, 16);

    const handleMouseMove = throttle((event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    }, 16);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 ${styles.floating} ${styles.root}`}
      style={{ backdropFilter: "blur(10px)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  );
}
