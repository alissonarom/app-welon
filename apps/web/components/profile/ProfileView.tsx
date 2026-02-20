"use client";

import GlassCard from "@/components/ui/GlassCard";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Image from "next/image";
// TODO Criar /api/profile-Conectar Mongo-Transformar ProfileView em Server Component-Remover mock

interface Profile {
  name: string;
  role: string;
  company: string;
  bio: string;
  connections: number;
  ranking: number;
}

const mockProfile: Profile = {
  name: "William Santos",
  role: "Empresário",
  company: "Welon",
  bio: "Empreendedor e fundador do Welon, Will Santos é um especialista em conexões estratégicas.",
  connections: 128,
  ranking: 2
};

export default function ProfileView() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Perfil</h1>
        <p className="text-slate-400">
          Sua presença estratégica dentro do ecossistema.
        </p>
      </div>

      {/* Card principal */}
      <GlassCard>
        <div className="p-8 space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2d70fb] to-indigo-500">
              <Image
                src="/assets/will.png"
                alt="Will"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>


            <div>
              <h2 className="text-2xl font-semibold">
                {mockProfile.name}
              </h2>
              <p className="text-slate-400">
                {mockProfile.role} • {mockProfile.company}
              </p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed text-sm">
            {mockProfile.bio}
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#2d70fb]">
                {mockProfile.connections}
              </p>
              <p className="text-xs text-slate-400">
                Conexões
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-[#2d70fb]">
                #{mockProfile.ranking}
              </p>
              <p className="text-xs text-slate-400">
                Ranking
              </p>
            </div>
          </div>

          <div className="pt-4">
            <PrimaryButton>
              Editar Perfil
            </PrimaryButton>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
