"use client";

import { ReactNode, useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/layout/BottomNav";

export default function MainLayout({
  children
}: {
  children: ReactNode;
}) {

  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("welon_auth");

    if (!auth) {
      router.replace("/login");
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return null;

  return (
    <>
      <Header />
      <main className="pt-20 pb-24 px-4 md:px-8 max-w-4xl mx-auto">
        {children}
      </main>
      <BottomNav />
    </>
  );
}
