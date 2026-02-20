export default function PrimaryButton({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) {
  return (
    <button className="bg-[#2d70fb] px-6 py-3 rounded-2xl font-bold shadow-lg shadow-[#2d70fb]/40 active:scale-95 transition-all duration-200" onClick={onClick}>
      {children}
    </button>
  );
}
