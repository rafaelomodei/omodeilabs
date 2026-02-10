import { AnimatedBackground } from '@/components/organisms/animated-background';
import { Navbar } from '@/components/organisms/navbar';
import { AboutSection } from '@/components/sections/about-section';
import { Footer } from '@/components/sections/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { SolutionsSection } from '@/components/sections/solutions-section';
// import { TeamSection } from '@/components/sections/team-section';

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-x-hidden bg-[#0C0C0C] text-white'>
      <Navbar />
      <main className='relative z-10 flex flex-col gap-0'>
        <HeroSection />
        <SolutionsSection />
        <AboutSection />
        {/* <TeamSection /> */}
        <AnimatedBackground />
      </main>
      <Footer />
    </div>
  );
}
