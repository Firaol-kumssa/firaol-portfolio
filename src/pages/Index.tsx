import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SideNav />
      <MobileNav />
      <main className="md:ml-64 px-6 md:px-16 lg:px-24 pt-20 md:pt-0 max-w-3xl">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <footer className="py-12 text-center text-xs text-muted-foreground">
          © 2026 Firaol Kumssa. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Index;
