import { cn } from "@/lib/utils";

interface GradientDividerProps {
  className?: string;
}

export function GradientDivider({ className }: GradientDividerProps) {
  return (
    <div
      className={cn(
        "h-px w-32 bg-gradient-to-r from-transparent via-[#6B7D5B] to-transparent",
        className,
      )}
    />
  );
}
