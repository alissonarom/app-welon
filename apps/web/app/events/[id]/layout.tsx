import { ReactNode } from "react";
import Header from "@/components/layout/Header";

export default function EventDetailsLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-20 px-4 md:px-8 max-w-4xl mx-auto pb-32">
        {children}
      </main>
      {/* CTA FIXO */}
      <div className="fixed bottom-6 left-0 right-0 z-[999] flex justify-center pointer-events-none">
        <button
          className="
            pointer-events-auto
            w-[90%] max-w-md
            py-4
            rounded-2xl
            bg-[#2d70fb]
            font-semibold
            shadow-2xl
            transition-all duration-300
            hover:scale-[1.02]
            active:scale-95
          "
        >
          Comprar ingresso
        </button>
      </div>
    </>
  );
}
