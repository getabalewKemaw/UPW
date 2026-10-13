"use client";

import { useEffect, useState, useCallback } from "react";
import { sound } from "@/utils/sound";

interface SparkParticle {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
  size: number;
}

const HATCH_COLORS = [
  "#f97316", // Vibrant Orange
  "#06b6d4", // Electric Cyan
  "#6366f1", // Deep Indigo
  "#10b981", // Emerald
  "#eab308", // Golden Yellow
  "#ec4899", // Neon Rose
];

export function ClickSpark() {
  const [particles, setParticles] = useState<SparkParticle[]>([]);

  const spawnSparks = useCallback((e: MouseEvent) => {
    // Play tactile click sound on interaction
    sound.playClick();

    const originX = e.clientX;
    const originY = e.clientY;
    const count = 7;
    const newSparks: SparkParticle[] = [];
    const timestamp = Date.now();

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI + (Math.random() - 0.5) * 0.4;
      const distance = 20 + Math.random() * 22; // 20px to 42px radial burst
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      const color = HATCH_COLORS[i % HATCH_COLORS.length];
      const size = 3 + Math.random() * 2; // 3px to 5px micro UI point

      newSparks.push({
        id: timestamp + i + Math.random(),
        x: originX,
        y: originY,
        dx,
        dy,
        color,
        size,
      });
    }

    setParticles((prev) => [...prev.slice(-30), ...newSparks]);

    // Clean up particles after animation completes
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newSparks.some((ns) => ns.id === p.id)));
    }, 450);
  }, []);

  useEffect(() => {
    window.addEventListener("pointerdown", spawnSparks);
    return () => window.removeEventListener("pointerdown", spawnSparks);
  }, [spawnSparks]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full pointer-events-none animate-spark-burst"
          style={
            {
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 6px ${p.color}`,
              "--spark-dx": `${p.dx}px`,
              "--spark-dy": `${p.dy}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
