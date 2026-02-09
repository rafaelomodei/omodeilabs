import { Box, Leaf, Sparkles } from "lucide-react";

import { GradientDivider } from "@/components/atoms/gradient-divider";
import { RevealOnScroll } from "@/components/atoms/reveal-on-scroll";
import { SectionHeading } from "@/components/atoms/section-heading";
import { FeatureCard } from "@/components/molecules/feature-card";

const FEATURES = [
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Comprometidos com práticas sustentáveis e materiais eco-friendly.",
  },
  {
    icon: Box,
    title: "Design 3D",
    description: "Tecnologia de ponta para criar formas únicas e inovadoras.",
  },
  {
    icon: Sparkles,
    title: "Exclusividade",
    description: "Peças pensadas para transformar e dar vida ao seu espaço.",
  },
] as const;

export function AboutSection() {
  return (
    <section id="sobre" className="px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <div className="text-center">
          <RevealOnScroll>
            <SectionHeading highlight="Verde Forma">Sobre a</SectionHeading>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <GradientDivider className="mx-auto mt-6 w-24" />
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="space-y-6 rounded-3xl border border-[#6B7D5B]/20 bg-[#2A2A2A]/50 p-8 text-left text-[#E8E1D9]/90 backdrop-blur-sm md:p-12">
            <p>
              A <span className="text-[#6B7D5B]">Verde Forma</span> nasceu da união entre design, tecnologia e natureza. Acreditamos
              que cada ambiente merece vida, forma e personalidade. Por isso, criamos vasos geométricos impressos em 3D que
              transcendem a decoração tradicional.
            </p>
            <p>
              Nossa missão é simples: <span className="italic text-[#B8A896]">fazer o verde virar forma e o espaço ganhar vida</span>.
              Cada peça é pensada para harmonizar estética contemporânea com funcionalidade, trazendo sofisticação e frescor para
              residências, escritórios e espaços comerciais.
            </p>
            <p>
              Combinamos a precisão da impressão 3D com design exclusivo, criando produtos únicos que respeitam o meio ambiente e
              elevam a experiência de viver com plantas.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <RevealOnScroll key={feature.title} delay={index * 120}>
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
