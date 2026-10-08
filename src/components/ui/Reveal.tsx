"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if element is already in viewport on mount (e.g. above fold or restored scroll)
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: threshold ?? 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(36px)";
      case "down":
        return "translateY(-36px)";
      case "left":
        return "translateX(36px)";
      case "right":
        return "translateX(-36px)";
      case "zoom":
        return "scale(0.92)";
      case "fade":
      default:
        return "translateY(0)";
    }
  };

  return (
    <div
      ref={ref}
      className={cn("transition-all ease-[cubic-bezier(0.16,1,0.3,1)]", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0) scale(1)" : getInitialTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
