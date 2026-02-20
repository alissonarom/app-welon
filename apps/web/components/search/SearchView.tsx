"use client";

export default function SearchView() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-2xl font-bold">Buscar</h1>
      <p className="text-slate-400">
        Encontre membros, eventos e oportunidades dentro do ecossistema.
      </p>

      <input
        type="text"
        placeholder="Digite um nome ou empresa..."
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-[#2d70fb]"
      />
    </div>
  );
}
