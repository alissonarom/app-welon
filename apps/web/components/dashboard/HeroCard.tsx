"use client";

import { useRouter } from "next/navigation";
import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface HeroCardProps {
  name?: string;
  xp?: number;
  level?: number;
}

export default function HeroCard({
  name = "William Santos",
  xp = 1240,
  level = 3
}: HeroCardProps) {
  const router = useRouter();

  return (
    <GlassCard>
      <div className="p-6 space-y-6 animate-fadeIn">
        {/* Saudação */}
        <div>
          <h2 className="text-lg text-slate-400">
            Bem-vindo,
          </h2>
          <h1 className="text-2xl font-bold">
            {name}
          </h1>
        </div>

        {/* Level + XP */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-slate-400">
            <span>Nível {level}</span>
            <span>{xp} XP</span>
          </div>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2d70fb] transition-all duration-700"
              style={{ width: `${(xp % 1000) / 10}%` }}
            />
          </div>
        </div>

        {/* CTA */}
        <PrimaryButton onClick={() => router.push("/events")}>
          Explorar Eventos
        </PrimaryButton>
      </div>
    </GlassCard>
  );
}
