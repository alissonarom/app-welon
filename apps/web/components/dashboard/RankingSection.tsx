"use client";

import GlassCard from "@/components/ui/GlassCard";

interface RankingUser {
  id: string;
  name: string;
  company: string;
  xp: number;
  position: number;
}

const mockRanking: RankingUser[] = [
  {
    id: "1",
    name: "Carlos Mendes",
    company: "Capital Pro",
    xp: 5420,
    position: 1
  },
  {
    id: "2",
    name: "Fernanda Lima",
    company: "Growth Ventures",
    xp: 4980,
    position: 2
  },
  {
    id: "3",
    name: "Alisson Morais",
    company: "Cronus IA Company",
    xp: 4650,
    position: 3
  }
];

export default function RankingSection() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div>
        <h2 className="text-lg font-semibold">
          Ranking do Ecossistema
        </h2>
        <p className="text-slate-400 text-sm">
          Os membros mais ativos e estratégicos da comunidade.
        </p>
      </div>

      <div className="space-y-3">
        {mockRanking.map((user) => (
          <GlassCard key={user.id}>
            <div className="p-4 flex items-center justify-between">
              
              {/* Posição + Info */}
              <div className="flex items-center gap-4">
                
                <div className="w-8 h-8 rounded-lg bg-[#2d70fb] flex items-center justify-center text-sm font-bold">
                  #{user.position}
                </div>

                <div>
                  <h3 className="font-medium">
                    {user.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {user.company}
                  </p>
                </div>
              </div>

              {/* XP */}
              <div className="text-right">
                <p className="text-[#2d70fb] font-semibold">
                  {user.xp} XP
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
