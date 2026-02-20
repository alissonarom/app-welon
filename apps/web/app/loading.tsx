// app/loading.tsx

import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen w-full bg-[#10142d] flex items-center justify-center">
      <Image
        src="/assets/logo.png"
        alt="Welon"
        width={180}
        height={60}
        className="object-contain animate-pulse"
        priority
      />
    </div>
  );
}
