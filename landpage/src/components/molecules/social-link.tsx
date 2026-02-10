import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
  label: string;
  className?: string;
  borderColor: string;
  backgroundColor: string;
}

export function SocialLink({
  icon: Icon,
  href,
  label,
  className,
  borderColor,
  backgroundColor,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border text-sm font-medium transition-transform duration-300 hover:scale-[1.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A52D1]/50",
        borderColor,
        backgroundColor,
        className,
      )}
      aria-label={label}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </a>
  );
}
