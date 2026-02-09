import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
}

export function ScrollIndicator({ className }: ScrollIndicatorProps) {
  return (
    <div
      className={cn(
        "animate-fade-in flex h-12 w-6 items-start justify-center rounded-full border-2 border-[#6B7D5B] p-1",
        className,
      )}
      style={{ animationDelay: "1200ms" }}
    >
      <span className="h-2 w-2 animate-scroll-indicator rounded-full bg-[#6B7D5B]" />
    </div>
  );
}
