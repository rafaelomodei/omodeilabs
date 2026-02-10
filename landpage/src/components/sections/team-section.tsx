import { GradientDivider } from "@/components/atoms/gradient-divider";
import { RevealOnScroll } from "@/components/atoms/reveal-on-scroll";
import { SectionHeading } from "@/components/atoms/section-heading";
import { TeamCard } from "@/components/molecules/team-card";

const TEAM = [
  {
    name: "Rafael Omodei",
    role: "CTO",
    image: "/png/rafael-omodei-cto.png",
    description:
      "Especialista em tecnologia e impressão 3D, Rafael lidera a inovação técnica da Omodei Labs.",
    linkedin: "https://www.linkedin.com/in/rafael-omodei/",
  },
  {
    name: "João Pedro Martis",
    role: "CMO",
    image: "/png/joao-pedro-martins-cmo.png",
    description:
      "Visionário criativo e estrategista, João Pedro conduz posicionamento e crescimento da Omodei Labs.",
    linkedin: "https://www.linkedin.com/in/joao-pedro-9a1328247/",
  },
] as const;

export function TeamSection() {
  return (
    <section id="equipe" className="px-6 py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <div className="text-center">
          <RevealOnScroll>
            <SectionHeading highlight="Equipe">Nossa</SectionHeading>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <GradientDivider className="mx-auto mt-6 w-24" />
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <p className="mt-4 text-lg text-[#B8A896]">
              Conheça as mentes por trás da Omodei Labs, unindo tecnologia e criatividade para transformar negócios.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {TEAM.map((member, index) => (
            <RevealOnScroll key={member.name} delay={index * 150}>
              <TeamCard
                name={member.name}
                role={member.role}
                description={member.description}
                image={member.image}
                linkedin={member.linkedin}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
