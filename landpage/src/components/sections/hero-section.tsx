import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Image from "next/image";

import { GradientDivider } from "@/components/atoms/gradient-divider";
import { RevealOnMount } from "@/components/atoms/reveal-on-mount";
import { ScrollIndicator } from "@/components/atoms/scroll-indicator";
import { SocialLink } from "@/components/molecules/social-link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24 text-center"
    >
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8">
        <RevealOnMount delay={0} className="flex w-full flex-col items-center justify-center">
          <Image
            src="svg/logo-verdeforma-coluna.svg"
            height={64}
            width={682}
            alt="logo verde forma"
            priority
          />
        </RevealOnMount>

        <RevealOnMount delay={300}>
          <p className="text-2xl italic text-[#B8A896] md:text-3xl">
            Onde o verde vira forma
            <br />e o espaço ganha vida
          </p>
        </RevealOnMount>

        <RevealOnMount delay={550}>
          <GradientDivider className="w-32" />
        </RevealOnMount>

        <RevealOnMount delay={750}>
          <p className="max-w-2xl text-balance text-lg text-[#E8E1D9]/85">
            Vasos geométricos impressos em 3D que transformam ambientes. Design
            exclusivo, sustentabilidade e sofisticação para dar vida aos seus
            espaços.
          </p>
        </RevealOnMount>

        <RevealOnMount delay={950}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <SocialLink
              icon={MessageCircle}
              href="https://wa.me/554599022878"
              label="Falar no WhatsApp"
              borderColor="border-[#25D366]/40"
              backgroundColor="bg-[#25D366]/20 text-[#25D366]"
            />
            <SocialLink
              icon={Instagram}
              href="https://instagram.com/verdeforma.oficia"
              label="Visitar Instagram"
              borderColor="border-[#E4405F]/40"
              backgroundColor="bg-[#E4405F]/20 text-[#E4405F]"
            />
            <SocialLink
              icon={Facebook}
              href="https://www.facebook.com/people/Verde-Forma/61578301753314/"
              label="Visitar Facebook"
              borderColor="border-[#1877F2]/40"
              backgroundColor="bg-[#1877F2]/20 text-[#1877F2]"
            />
          </div>
        </RevealOnMount>
      </div>

      <div className="absolute bottom-12 z-10">
        <ScrollIndicator />
      </div>
    </section>
  );
}
