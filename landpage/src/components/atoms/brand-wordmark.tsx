import { cn } from '@/lib/utils';

interface BrandWordmarkProps {
  className?: string;
}

export function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <span className={cn('font-semibold tracking-[0.4em] text-lg', className)}>
      <span className='text-[#E8E1D9]'>VERDE</span>
      <span className='text-[#E8E1D9]'> FORMA</span>
    </span>
  );
}
