"use client";

import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface Connection {
  id: string;
  name: string;
  company: string;
  matchScore: number;
}

const mockConnections: Connection[] = [
  {
    id: "1",
    name: "Fernanda Lima",
    company: "Growth Ventures",
    matchScore: 92
  },
  {
    id: "2",
    name: "Ricardo Souza",
    company: "AI Tech Labs",
    matchScore: 87
  },
  {
    id: "3",
    name: "Juliana Martins",
    company: "Capital Bridge",
    matchScore: 81
  }
];

export default function RecommendedConnections() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div>
        <h2 className="text-lg font-semibold">
          Conexões Recomendadas
        </h2>
        <p className="text-slate-400 text-sm">
          Sugestões estratégicas baseadas no seu perfil.
        </p>
      </div>

      <div className="space-y-4">
        {mockConnections.map((connection) => (
          <GlassCard key={connection.id}>
            <div className="p-4 flex items-center justify-between">
              
              {/* Info */}
              <div>
                <h3 className="font-medium">
                  {connection.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {connection.company}
                </p>

                <div className="mt-2 text-xs text-[#2d70fb] font-semibold">
                  Match {connection.matchScore}%
                </div>
              </div>

              {/* CTA */}
              <PrimaryButton>
                Conectar
              </PrimaryButton>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
