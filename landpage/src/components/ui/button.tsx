import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "secondary"
    | "link"
    | "soft";
  size?: "default" | "sm" | "lg" | "icon";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-gradient-to-r from-[#6B7D5B] to-[#8B7765] text-white shadow-sm hover:shadow-lg hover:shadow-[#6B7D5B]/25 transition-shadow",
  outline:
    "border border-[#6B7D5B]/40 text-[#E8E1D9] hover:bg-[#6B7D5B]/10",
  ghost:
    "text-[#E8E1D9] hover:bg-white/5",
  secondary:
    "bg-[#2A2A2A]/80 text-[#E8E1D9] border border-[#6B7D5B]/30 hover:border-[#6B7D5B]/60",
  link:
    "text-[#6B7D5B] underline-offset-4 hover:underline",
  soft: "bg-[#6B7D5B]/15 text-[#E8E1D9] hover:bg-[#6B7D5B]/25",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-11 px-6 rounded-lg text-sm font-medium",
  sm: "h-9 px-4 rounded-md text-sm",
  lg: "h-12 px-7 rounded-xl text-base",
  icon: "h-11 w-11 rounded-full",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", type = "button", ...props },
    ref,
  ) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B7D5B]/50 disabled:pointer-events-none disabled:opacity-60",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
