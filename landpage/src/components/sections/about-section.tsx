import { BrainCircuit, Layers3, ShieldCheck } from 'lucide-react';

import { GradientDivider } from '@/components/atoms/gradient-divider';
import { RevealOnScroll } from '@/components/atoms/reveal-on-scroll';
import { SectionHeading } from '@/components/atoms/section-heading';
import { FeatureCard } from '@/components/molecules/feature-card';

const FEATURES = [
  {
    icon: BrainCircuit,
    title: 'Inteligência de Produto',
    description:
      'Traduzimos desafios de negócio em soluções digitais claras, mensuráveis e orientadas por dados.',
  },
  {
    icon: Layers3,
    title: 'Arquitetura Escalável',
    description:
      'Construímos software com base sólida para crescer com segurança, performance e manutenção simples.',
  },
  {
    icon: ShieldCheck,
    title: 'Parceria de Longo Prazo',
    description:
      'Mais que entrega, atuamos lado a lado para evoluir continuamente cada produto digital.',
  },
] as const;

export function AboutSection() {
  return (
    <section id='sobre' className='px-6 py-24'>
      <div className='mx-auto flex max-w-5xl flex-col gap-16'>
        <div className='text-center'>
          <RevealOnScroll>
            <SectionHeading highlight='Omodei Labs'>Sobre a</SectionHeading>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <GradientDivider className='mx-auto mt-6 w-24' />
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className='space-y-6 rounded-3xl border border-[#6B7D5B]/20 bg-[#2A2A2A]/50 p-8 text-left text-[#E8E1D9]/90 backdrop-blur-sm md:p-12'>
            <p>
              A <span className='text-[#6B7D5B]'>Omodei Labs</span> nasceu com o
              propósito de conectar tecnologia e resultado. Combinamos
              estratégia, design e engenharia para desenvolver software que
              resolve problemas reais de empresas em crescimento.
            </p>
            <p>
              Nossa missão é simples:{' '}
              <span className='italic text-[#B8A896]'>
                transformar objetivos de negócio em produtos digitais de alto
                impacto
              </span>
              . Cada projeto é pensado para gerar eficiência, experiência e
              escalabilidade.
            </p>
            <p>
              Atuamos com foco em qualidade técnica, visão de produto e
              colaboração contínua, construindo soluções robustas para web,
              mobile e operações internas.
            </p>
          </div>
        </RevealOnScroll>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
          {FEATURES.map((feature, index) => (
            <RevealOnScroll key={feature.title} delay={index * 120}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
