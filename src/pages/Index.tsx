import SideNav from "@/components/SideNav";
import MobileNav from "@/components/MobileNav";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { Github, Linkedin, MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BackgroundOrbs />
      <SideNav />
      <MobileNav />
      <main className="md:ml-64 px-6 md:px-16 lg:px-24 pt-24 md:pt-0 max-w-3xl">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />

        <footer className="mt-8 flex flex-col items-center gap-4 border-t border-border/60 py-10 text-center">
          <div className="flex gap-5 text-muted-foreground">
            <a
              href="https://github.com/Firaol-kumssa"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/firaol-kumssa-390009346/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://wa.me/251912687252"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="WhatsApp"
            >
              <MessageCircle size={17} />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript &amp; Tailwind CSS.
          </p>
          <p className="text-xs text-muted-foreground">© 2026 Firaol Kumssa. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
