import { useCallback, useState } from 'react';
import { Sidebar } from '~/components/Sidebar';
import { MobileBar } from '~/components/MobileBar';
import { MobileNav } from '~/components/MobileNav';
import { HeroSection } from '~/components/sections/HeroSection';
import { SkillsSection } from '~/components/sections/SkillsSection';
import { ExperiencesSection } from '~/components/sections/ExperiencesSection';
import { ProjectsSection } from '~/components/sections/ProjectsSection';
import { BlogSection } from '~/components/sections/BlogSection';
import { Footer } from '~/components/Footer';
import { useActiveSection } from '~/hooks/useActiveSection';
import type { SectionId } from '~/types';

const SECTION_IDS: SectionId[] = ['about', 'skills', 'experiences', 'projects', 'blog'];

export function PortfolioLayout() {
  const active = useActiveSection(SECTION_IDS);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleNavigate = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Update the hash without a scroll jump for browsers that override smooth.
    if (window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  }, []);

  return (
    <div className="relative min-h-dvh bg-navy text-ink">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-radial-spot"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-grid-faint bg-grid opacity-[0.18]"
      />

      <MobileBar onOpen={() => setMobileNavOpen(true)} />
      <MobileNav
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        active={active}
        onNavigate={handleNavigate}
      />

      <div className="lg:flex">
        <Sidebar active={active} onNavigate={handleNavigate} />

        <main className="min-w-0 flex-1 px-5 pb-12 sm:px-8 lg:px-12 lg:pl-16 lg:pr-20 xl:pr-28">
          <div className="mx-auto w-full max-w-5xl">
            <HeroSection />
            <SkillsSection />
            <ExperiencesSection />
            <ProjectsSection />
            <BlogSection />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}