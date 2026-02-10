import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

import { GradientDivider } from '@/components/atoms/gradient-divider';
import { BrandWordmark } from '@/components/atoms/brand-wordmark';
import { RevealOnMount } from '@/components/atoms/reveal-on-mount';
import { ScrollIndicator } from '@/components/atoms/scroll-indicator';
import { SocialLink } from '@/components/molecules/social-link';

export function HeroSection() {
  return (
    <section
      id='hero'
      className='relative flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24 text-center'
    >
      <div className='relative z-10 flex max-w-4xl flex-col items-center gap-8'>
        <RevealOnMount
          delay={0}
          className='flex w-full flex-col items-center justify-center'
        >
          <BrandWordmark className='text-3xl md:text-6xl' />
        </RevealOnMount>

        <RevealOnMount delay={300}>
          <p className='text-2xl italic text-[#B8A896] md:text-3xl'>
            Conectando tecnologia
            <br />ao seu negócio
          </p>
        </RevealOnMount>

        <RevealOnMount delay={550}>
          <GradientDivider className='w-32' />
        </RevealOnMount>

        <RevealOnMount delay={750}>
          <p className='max-w-2xl text-balance text-lg text-[#E8E1D9]/85'>
            Desenvolvemos soluções digitais sob medida para elevar operações,
            acelerar resultados e transformar ideias em produtos de software
            escaláveis.
          </p>
        </RevealOnMount>

        <RevealOnMount delay={950}>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <SocialLink
              icon={MessageCircle}
              href='https://wa.me/554599022878?text=Olá%2C%20gostaria%20de%20entender%20mais%20sobre%20os%20serviços%20da%20Omodei%20Labs'
              label='Falar no WhatsApp'
              borderColor='border-[#25D366]/40'
              backgroundColor='bg-[#25D366]/20 text-[#25D366]'
            />
            <SocialLink
              icon={Instagram}
              href='https://instagram.com/omodeilabs'
              label='Visitar Instagram'
              borderColor='border-[#E4405F]/40'
              backgroundColor='bg-[#E4405F]/20 text-[#E4405F]'
            />
            <SocialLink
              icon={Linkedin}
              href='https://www.linkedin.com/company/omodei-labs'
              label='Visitar LinkedIn'
              borderColor='border-[#0A66C2]/40'
              backgroundColor='bg-[#0A66C2]/20 text-[#0A66C2]'
            />
          </div>
        </RevealOnMount>
      </div>

      <div className='absolute bottom-12 z-10'>
        <ScrollIndicator />
      </div>
    </section>
  );
}
