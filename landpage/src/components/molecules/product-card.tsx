import Image from "next/image";
import { ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  index: number;
  href: string;
}

export function ProductCard({ name, price, image, index, href }: ProductCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#6B7D5B]/20 bg-[#2A2A2A]/40 backdrop-blur-sm transition-all duration-500",
        "hover:border-[#6B7D5B]/50",
      )}
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="h-full w-full bg-gradient-to-br from-[#6B7D5B]/15 via-transparent to-[#8B7765]/15" />
      </div>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="relative z-10 space-y-3 p-6">
        <h3 className="text-lg font-semibold text-[#E8E1D9]">{name}</h3>
        <p className="text-[#6B7D5B]">{price}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#6B7D5B] to-[#8B7765] px-4 py-3 text-sm font-semibold text-white transition-shadow hover:shadow-lg hover:shadow-[#6B7D5B]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7D5B]/50"
        >
          <ShoppingBag className="h-5 w-5" aria-hidden />
          Comprar na Shopee
        </a>
      </div>
    </div>
  );
}
