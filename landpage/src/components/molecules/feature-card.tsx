import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={cn("group h-full", className)}>
      <CardContent>
        <div className="mb-4 flex items-center justify-start">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#8A52D1]/25 to-[#519FFC]/25 text-[#8A52D1] transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-7 w-7" aria-hidden />
          </div>
        </div>
        <h3 className="mb-3 text-lg font-semibold text-[#E8E1D9]">{title}</h3>
        <p className="text-sm text-[#B8A896]">{description}</p>
      </CardContent>
    </Card>
  );
}
