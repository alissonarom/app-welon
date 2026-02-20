export default function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-[#2d70fb]/40">
      {children}
    </div>
  );
}
