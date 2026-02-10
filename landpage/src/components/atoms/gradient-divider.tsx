import { cn } from "@/lib/utils";

interface GradientDividerProps {
  className?: string;
}

export function GradientDivider({ className }: GradientDividerProps) {
  return (
    <div
      className={cn(
        "h-px w-32 bg-gradient-to-r from-[#F50591]/0 via-[#8A52D1] to-[#519FFC]/80",
        className,
      )}
    />
  );
}
