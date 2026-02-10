import { Code2, Handshake, Rocket } from 'lucide-react';

import { GradientDivider } from '@/components/atoms/gradient-divider';
import { RevealOnScroll } from '@/components/atoms/reveal-on-scroll';
import { SectionHeading } from '@/components/atoms/section-heading';

const SOLUTIONS = [
  {
    icon: Code2,
    title: 'Desenvolvimento Sob Medida',
    description:
      'Plataformas web, aplicativos mobile e sistemas internos construídos para o fluxo real do seu negócio.',
    metric: '+30 projetos entregues',
  },
  {
    icon: Rocket,
    title: 'Evolução de Produto Digital',
    description:
      'Atuamos desde a descoberta até a entrega contínua, acelerando roadmap, performance e escalabilidade.',
    metric: 'Média de 40% mais velocidade',
  },
  {
    icon: Handshake,
    title: 'Parcerias Estratégicas',
    description:
      'Times dedicados para colaborar com startups e empresas em desafios de tecnologia com foco em resultado.',
    metric: 'Clientes em 3 segmentos',
  },
] as const;

export function SolutionsSection() {
  return (
    <section id='solucoes' className='px-6 py-24'>
      <div className='mx-auto flex max-w-6xl flex-col gap-16'>
        <div className='text-center'>
          <RevealOnScroll>
            <SectionHeading highlight='Soluções'>Nossas</SectionHeading>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <p className='mt-4 text-lg text-[#B8A896]'>
              Tecnologia aplicada para construir software que gera impacto real.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <GradientDivider className='mx-auto mt-6' />
          </RevealOnScroll>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {SOLUTIONS.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <RevealOnScroll key={solution.title} delay={index * 120}>
                <article className='group h-full rounded-2xl border border-[#8A52D1]/20 bg-[#2A2A2A]/40 p-7 backdrop-blur-sm transition-all duration-500 hover:border-[#8A52D1]/50'>
                  <div className='mb-5 inline-flex rounded-xl border border-[#8A52D1]/25 bg-[#8A52D1]/10 p-3 text-[#8A52D1]'>
                    <Icon className='h-6 w-6' />
                  </div>
                  <h3 className='mb-3 text-xl font-semibold text-[#E8E1D9]'>
                    {solution.title}
                  </h3>
                  <p className='mb-6 text-[#E8E1D9]/80'>{solution.description}</p>
                  <p className='text-sm font-semibold uppercase tracking-[0.14em] text-[#8A52D1]'>
                    {solution.metric}
                  </p>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
