import Image from "next/image";
import { Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

export function TeamCard({ name, role, description, image, linkedin }: TeamCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#8A52D1]/20 bg-[#2A2A2A]/40 backdrop-blur-sm transition-all duration-500 hover:border-[#8A52D1]/50">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      <div className="relative z-10 space-y-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-[#8A52D1]">{role}</p>
            <h3 className="text-lg font-semibold text-[#E8E1D9]">{name}</h3>
          </div>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0A66C2]/40 bg-[#0A66C2]/20 text-[#0A66C2] transition-transform duration-300 hover:scale-105 hover:bg-[#0A66C2]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
            aria-label={`Abrir LinkedIn de ${name}`}
          >
            <Linkedin className="h-5 w-5" aria-hidden />
          </a>
        </div>
        <p className="text-sm text-[#B8A896]">{description}</p>
      </div>
    </div>
  );
}
