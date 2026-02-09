import { cn } from "@/lib/utils";

interface RevealOnMountProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  visibleClassName?: string;
}

export function RevealOnMount({
  children,
  delay = 0,
  className,
  visibleClassName,
}: RevealOnMountProps) {
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
