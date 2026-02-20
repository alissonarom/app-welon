"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowLeft, Heart, Star } from "lucide-react";
import { eventsData } from "@/components/events/mockData";

export default function EventDetails() {
  const params = useParams();
  const router = useRouter();
  const event = eventsData.find((e) => e.id === params.id);

  const [current, setCurrent] = useState(0);
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!event) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % event.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [event]);

  if (!event) return <div>Evento não encontrado</div>;

  return (
    <div className="space-y-8 animate-fadeIn">

      {/* ================= HERO CAROUSEL ================= */}
      <div className="relative h-[32vh] w-full overflow-hidden rounded-b-3xl">

        {event.images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={event.title}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Top buttons */}
        <div className="absolute top-6 left-6 right-6 flex justify-between">

          <button
            onClick={() => router.back()}
            className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
          >
            <ArrowLeft className="text-white" size={18} />
          </button>

          <button
            onClick={() => setLiked(!liked)}
            className={`p-3 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 ${
              liked ? "bg-red-500 scale-110" : "bg-white/10"
            }`}
          >
            <Heart
              size={18}
              className={liked ? "text-white fill-white" : "text-white"}
            />
          </button>
        </div>
      </div>

      {/* ================= INFO SECTION ================= */}
      <div className="space-y-4 px-1">

        <h1 className="text-2xl font-bold">{event.title}</h1>

        <div className="flex flex-col gap-2 text-slate-300 text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {event.date}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {event.time}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {event.location}
          </div>
        </div>
      </div>

      {/* ================= SOBRE ================= */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Sobre este evento</h2>

        <p className={`text-slate-300 text-sm leading-relaxed ${
          expanded ? "" : "line-clamp-4"
        }`}>
          {event.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#2d70fb] text-sm"
        >
          {expanded ? "Mostrar menos" : "Mostrar mais"}
        </button>
      </div>

      {/* ================= HOTÉIS ================= */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Hotéis próximos</h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3].map((hotel, index) => (
            <div
              key={index}
              className="relative min-w-[85%] h-48 rounded-3xl overflow-hidden"
            >
              <Image
                src={`/assets/hotel${hotel}.png`}
                alt="hotel"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <span className="absolute top-4 left-4 text-white font-semibold">Hotel Laguna</span>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm">
                <span>5min</span>

                <span className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  4,8 - R$ 450
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
