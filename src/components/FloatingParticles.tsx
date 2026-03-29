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

const COLORS = [
  "var(--rose)",
  "var(--petal)",
  "var(--bloom)",
  "var(--pink)",
  "var(--blush)",
];

export default function FloatingParticles({ count = 18 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 4 + Math.random() * 8,
        duration: 12 + Math.random() * 18,
        delay: Math.random() * 15,
        opacity: 0.15 + Math.random() * 0.3,
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
            bottom: "-20px",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `float-up ${p.duration}s ease-in-out ${p.delay}s infinite`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}
