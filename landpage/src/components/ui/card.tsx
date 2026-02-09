import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-[#6B7D5B]/20 bg-[#2A2A2A]/40 backdrop-blur-sm shadow-[0_0_40px_-20px_rgba(107,125,91,0.45)] transition-all duration-300",
        "hover:border-[#6B7D5B]/50 hover:shadow-[0_0_45px_-18px_rgba(107,125,91,0.6)]",
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardContent };
