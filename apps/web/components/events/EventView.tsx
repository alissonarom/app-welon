"use client";

import EventCard from "@/components/events/EventCard";

interface Event {
  id: string;
  title: string;
  date: string;
  category: string;
  images: string[];
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Welon Experience 2026",
    date: "Dez 01 - 18:00",
    category: "Networking",
    images: [
      "/assets/event1.png",
      "/assets/event1.1.png",
      "/assets/event1.2.png"
    ]
  },
  {
    id: "2",
    title: "AI Business Summit",
    date: "Jan 15 - 09:00",
    category: "Summit",
    images: [
      "/assets/event2.png",
      "/assets/event2.1.png",
      "/assets/event2.2.png"
    ]
  },
  {
    id: "3",
    title: "Founder Talks",
    date: "Fev 03 - 19:30",
    category: "Talks",
    images: [
      "/assets/event3.png",
      "/assets/event3.1.png",
      "/assets/event3.2.png"
    ]
  }
];

export default function EventView() {
  return (
    <div className="space-y-8 animate-fadeIn">
      <div>
        <h1 className="text-3xl font-bold mb-2">Eventos</h1>
        <p className="text-slate-400">
          Descubra experiências estratégicas e oportunidades de conexão.
        </p>
      </div>

      <div className="space-y-6">
        {mockEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}
