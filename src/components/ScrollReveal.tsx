"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight + 40) {
      setIsVisible(true);
      setReady(true);
      return;
    }

    setReady(true);

    let done = false;

    const reveal = () => {
      if (done) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 60) {
        done = true;
        setIsVisible(true);
        window.removeEventListener("scroll", reveal);
        window.removeEventListener("touchmove", reveal);
        clearInterval(poll);
      }
    };

    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("touchmove", reveal, { passive: true });
    const poll = setInterval(reveal, 400);

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("touchmove", reveal);
      clearInterval(poll);
    };
  }, []);

  const style: React.CSSProperties | undefined = ready
    ? {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
      }
    : undefined;

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
