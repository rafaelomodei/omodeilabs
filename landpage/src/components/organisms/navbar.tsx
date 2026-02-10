'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { BrandWordmark } from '@/components/atoms/brand-wordmark';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { id: 'hero', label: 'Início' },
  { id: 'solucoes', label: 'Soluções' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'equipe', label: 'Equipe' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, []);

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? 'border-b border-[#6B7D5B]/20 bg-[#0F0F0F]/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <button
          type='button'
          onClick={() => handleScrollTo('hero')}
          className='transition-transform duration-300 hover:scale-[1.03]'
          aria-label='Voltar ao topo'
        >
          <BrandWordmark className='text-sm md:text-base' />
        </button>

        <nav className='hidden items-center gap-8 md:flex'>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type='button'
              onClick={() => handleScrollTo(item.id)}
              className='relative text-sm font-medium text-[#E8E1D9] transition-colors duration-300 hover:text-[#6B7D5B]'
            >
              {item.label}
              <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-[#6B7D5B] transition-all duration-300 hover:w-full' />
            </button>
          ))}
        </nav>

        <Button
          type='button'
          size='icon'
          variant='ghost'
          className='text-[#E8E1D9] md:hidden'
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label='Abrir menu'
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </Button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen
            ? 'pointer-events-auto max-h-[24rem] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div
          className={`border-t border-[#6B7D5B]/20 bg-[#111111]/95 backdrop-blur-xl ${
            isMenuOpen ? 'px-6 py-6' : 'px-6 py-0'
          }`}
        >
          <div className='flex flex-col gap-4'>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type='button'
                onClick={() => handleScrollTo(item.id)}
                className='text-left text-base font-medium text-[#E8E1D9] transition-colors duration-200 hover:text-[#6B7D5B]'
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
