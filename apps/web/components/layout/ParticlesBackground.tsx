"use client";

import { useEffect, useState } from "react";

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-gradient-radial from-[#1a1f3d] to-[#10142d] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p}
          className="absolute bg-[#2d70fb] rounded-full opacity-10 blur-sm animate-[float_15s_linear_infinite]"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}
