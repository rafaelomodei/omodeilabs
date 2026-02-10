import { cn } from '@/lib/utils';

interface BrandWordmarkProps {
  className?: string;
}

export function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-[#F50591] via-[#683884] to-[#519FFC] bg-clip-text text-lg font-extrabold tracking-[0.25em] text-transparent',
        className,
      )}
    >
      OMODEI LABS
    </span>
  );
}
