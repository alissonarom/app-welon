"use client";

import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  category: string;
  images: string[];
}

export default function EventCard({
  id,
  title,
  date,
  category,
  images
}: EventCardProps) {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <button
      onClick={() => router.push(`/events/${id}`)}
      className="relative w-full h-64 rounded-3xl overflow-hidden group"
    >
      {/* Carousel images */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt={title}
          fill
          className={`
            object-cover
            transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}

      {/* Fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-left space-y-2">

        {/* Linha 1 - Chip */}
        <div className="w-1/3">
          <span className="
            px-3 py-1 text-xs rounded-full
            backdrop-blur-md
            bg-white/10
            border border-white/20
            text-white
          ">
            {category}
          </span>
        </div>

        {/* Linha 2 - Título */}
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        {/* Linha 3 - Data */}
        <div className="flex items-center gap-2 text-sm text-white/80">
          <Calendar size={16} />
          <span>{date}</span>
        </div>

        {/* Indicadores */}
        <div className="flex gap-1 pt-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-6 bg-[#2d70fb]"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </button>
  );
}
