import { cn } from "@/lib/utils";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  visibleClassName?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  className,
  visibleClassName,
}: RevealOnScrollProps) {
  return (
    <div
      className={cn(
        "animate-fade-in-up transition-all duration-700 ease-out",
        visibleClassName,
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
