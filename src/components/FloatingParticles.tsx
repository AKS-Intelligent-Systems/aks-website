"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

const COLORS = ["var(--rose)", "var(--petal)", "var(--mauve)", "var(--blush)"];

export default function FloatingParticles({ count = 12 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const actualCount = isMobile ? Math.min(count, 6) : count;
    setParticles(
      Array.from({ length: actualCount }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 3 + Math.random() * 5,
        duration: 14 + Math.random() * 16,
        delay: Math.random() * 12,
        opacity: 0.15 + Math.random() * 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    );
  }, [count]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `float-up ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
