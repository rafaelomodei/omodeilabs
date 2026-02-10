import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  highlight?: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  children,
  highlight,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-4xl md:text-5xl font-semibold tracking-tight text-[#E8E1D9]",
        className,
      )}
    >
      {children} {highlight ? <span className="bg-gradient-to-r from-[#F50591] via-[#8A52D1] to-[#519FFC] bg-clip-text text-transparent">{highlight}</span> : null}
    </h2>
  );
}
