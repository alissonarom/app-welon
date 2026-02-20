"use client";

import { Bell, User } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        bg-[#10142d]/70
        border-b border-white/10
        transition-all duration-300
      "
    >
      <div className="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Nome */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Welon"
            width={102}
            height={42}
            className="rounded-lg"
            priority
          />
        </div>


        {/* Ações */}
        <div className="flex items-center gap-4">
          
          {/* Notificações */}
  <button className="relative text-white/70 hover:text-white transition-colors">
    <Bell size={20} />

    {/* Badge */}
    <span className="
      absolute -top-2 -right-2
      bg-red-500
      text-[10px]
      font-semibold
      text-white
              w-5 h-5
              rounded-full
              flex items-center justify-center
              shadow-md
            ">
              8
            </span>
          </button>
          
          {/* Avatar usuário */}
          <button onClick={() => {
    localStorage.removeItem("welon_auth");
    window.location.href = "/login";
  }} className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
            <Image
              src="/assets/will.png"
              alt="Usuário"
              width={32}
              height={32}
              className="object-cover w-full h-full"
            />
          </button>
          
        </div>
          
      </div>
    </header>
  );
}
