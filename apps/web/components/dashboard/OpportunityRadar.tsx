"use client";

import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";

interface Opportunity {
  id: string;
  title: string;
  description: string;
  relevance: number; // % de compatibilidade
}

const mockOpportunities: Opportunity[] = [
  {
    id: "1",
    title: "Investidor buscando startups SaaS",
    description:
      "Grupo de investidores presente no próximo evento Welon busca startups B2B com faturamento recorrente.",
    relevance: 94
  },
  {
    id: "2",
    title: "Parceria estratégica em IA",
    description:
      "Empresa do ecossistema busca parceiro para implementação de soluções de inteligência artificial.",
    relevance: 87
  }
];

export default function OpportunityRadar() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div>
        <h2 className="text-lg font-semibold">
          Radar de Oportunidades
        </h2>
        <p className="text-slate-400 text-sm">
          Oportunidades alinhadas ao seu perfil estratégico.
        </p>
      </div>

      <div className="space-y-4">
        {mockOpportunities.map((opportunity) => (
          <GlassCard key={opportunity.id}>
            <div className="p-5 space-y-4">
              
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-white">
                  {opportunity.title}
                </h3>

                <span className="text-xs font-semibold text-[#2d70fb]">
                  {opportunity.relevance}% match
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {opportunity.description}
              </p>

              {/* Barra de relevância */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2d70fb] transition-all duration-700"
                  style={{ width: `${opportunity.relevance}%` }}
                />
              </div>

              <PrimaryButton>
                Ver Detalhes
              </PrimaryButton>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
