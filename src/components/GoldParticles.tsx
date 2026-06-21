"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Props = {
  count?: number;
  className?: string;
  tone?: "gold" | "ivory";
};

/**
 * Deterministic particle field — same seed across SSR + client to avoid
 * hydration mismatches.
 */
export function GoldParticles({ count = 36, className = "", tone = "gold" }: Props) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const seed = i * 9301 + 49297;
      const r1 = ((seed * 1.31) % 100) / 100;
      const r2 = ((seed * 2.71) % 100) / 100;
      const r3 = ((seed * 7.13) % 100) / 100;
      const r4 = ((seed * 5.17) % 100) / 100;
      return {
        left: r1 * 100,
        top: r2 * 100,
        size: 1 + r3 * 3,
        duration: 8 + r4 * 14,
        delay: r1 * 6,
        opacity: 0.25 + r3 * 0.6,
      };
    });
  }, [count]);

  const color = tone === "gold" ? "#E5C97E" : "#F5EFE3";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((p, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, p.opacity, p.opacity, 0],
            y: [-20, -200],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: color,
            boxShadow: `0 0 ${p.size * 4}px ${color}`,
          }}
          className="absolute rounded-full"
        />
      ))}
    </div>
  );
}
