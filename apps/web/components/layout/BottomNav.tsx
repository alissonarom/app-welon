"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, Calendar, Search, User } from "lucide-react";

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Events", icon: Calendar, path: "/events" },
    { label: "Search", icon: Search, path: "/search" },
    { label: "Profile", icon: User, path: "/profile" }
  ];

  return (
    <div className="fixed bottom-6 left-3 right-3 z-50 flex justify-center">
      <nav
        className="
          w-full max-w-md
          px-0 py-0
          rounded-3xl
          backdrop-blur-md
          bg-white/10
          shadow-2xl
          flex justify-between items-center
        "
      >
        {navItems.map((item) => {
          const isActive =
  item.path === "/"
    ? pathname === "/"
    : pathname.startsWith(item.path);

          const Icon = item.icon;

          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`
                flex items-center gap-2
                px-4 py-3
                rounded-3xl
                transition-all duration-300
                ${
                  isActive
                    ? "bg-[#2d70fb] text-white"
                    : "text-slate-400"
                }
              `}
            >
              <Icon
                size={20}
                className={`
                  transition-all duration-300
                  ${isActive ? "scale-110" : ""}
                `}
              />

              <span
                className={`
                  text-xs font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "opacity-100 max-w-[80px]"
                      : "opacity-0 max-w-0 overflow-hidden"
                  }
                `}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
