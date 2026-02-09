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
      {children} {highlight ? <span className="text-[#6B7D5B]">{highlight}</span> : null}
    </h2>
  );
}
