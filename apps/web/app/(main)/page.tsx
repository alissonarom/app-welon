"use client";

import { useState } from "react";
import Dashboard from "@/components/dashboard/Dashboard";
import EventView from "@/components/events/EventView";
import ProfileView from "@/components/profile/ProfileView";

export default function Home() {
  const [view, setView] = useState<"dashboard" | "events" | "profile">("dashboard");

  return (
    <>
      {view === "dashboard" && <Dashboard />}
      {view === "events" && <EventView />}
      {view === "profile" && <ProfileView />}

      {/* Passa função para nav via context futuramente */}
    </>
  );
}
