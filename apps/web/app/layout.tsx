import "./globals.css";
import { ReactNode } from "react";
import ParticlesBackground from "@/components/layout/ParticlesBackground";

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#10142d] text-white">
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}
