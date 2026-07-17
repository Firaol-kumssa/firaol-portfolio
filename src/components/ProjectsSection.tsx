import { QrCode, Cookie, Code2, Mountain, UserRound, KanbanSquare } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "QR Inventory Management System",
    description:
      "A modern QR-based inventory system that helps businesses manage products, generate QR codes, track stock, and streamline operations through an intuitive dashboard.",
    url: "https://qr-inventory-app-flame.vercel.app/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "QR code generation",
      "Real-time inventory tracking",
      "Dashboard analytics",
      "Responsive UI across devices",
    ],
    icon: QrCode,
    gradient: "from-primary/80 via-primary to-violet/70",
  },
  {
    title: "Azi Shalom Golden Bites",
    description:
      "A premium cookie & bakery brand site designed to showcase products with an elegant, e-commerce-inspired experience and engaging animations.",
    url: "https://azi-shalom-golden-bites.vercel.app/",
    tags: ["React", "Tailwind CSS", "UI/UX"],
    features: [
      "Product showcase & branding",
      "Responsive landing page",
      "Interactive UI with smooth animations",
      "Premium visual design",
    ],
    icon: Cookie,
    gradient: "from-pink/70 via-violet/70 to-primary/70",
  },
  {
    title: "DUKA Hiking & Travel",
    description:
      "Modern travel and tourism website for DUKA Hiking & Travel, showcasing Ethiopian hiking destinations, guided tours, travel news, and adventure experiences. Designed and developed by Firaol Kumssa.",
    url: "https://duka-trails-explorer.firaol-kumssa.workers.dev/",
    tags: ["React", "TanStack Start", "Tailwind CSS"],
    features: [
      "Curated Ethiopian destination showcase",
      "Animated hiking trail & news section",
      "Responsive photo gallery",
      "Booking & contact flow",
    ],
    icon: Mountain,
    gradient: "from-primary/70 via-violet/60 to-pink/60",
  },
  {
    title: "Shewit Solomon — Portfolio",
    description:
      "Professional portfolio website for Shewit Solomon Aregay, showcasing her experience in civil engineering, business administration, project coordination, tourism, and humanitarian initiatives. Built and designed by Firaol Kumssa.",
    url: "https://shewit-portfolio.firaol-kumssa.workers.dev/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Multi-discipline experience showcase",
      "Clean, professional presentation",
      "Responsive, recruiter-friendly layout",
      "Fast, optimized performance",
    ],
    icon: UserRound,
    gradient: "from-violet/70 via-pink/60 to-primary/60",
  },
  {
    title: "Taskmaster",
    description:
      "A modern project management and issue tracking application inspired by Linear, featuring Kanban boards, task management, analytics, and team collaboration. Designed and developed by Firaol Kumssa.",
    url: "https://taskmaster.firaol-kumssa.workers.dev/",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Kanban-style task boards",
      "Team collaboration tools",
      "Analytics dashboard",
      "Linear-inspired, minimal UI",
    ],
    icon: KanbanSquare,
    gradient: "from-pink/70 via-primary/60 to-violet/60",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — a personal portfolio built with React, TypeScript, and Tailwind CSS, designed to feel premium, fast, and unmistakably intentional.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    features: [
      "Scroll-triggered animations",
      "Glassmorphism & gradient accents",
      "Accessible, responsive layout",
      "Optimized for performance",
    ],
    icon: Code2,
    gradient: "from-violet/70 via-primary/70 to-pink/60",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-3 text-sm font-semibold tracking-widest text-primary">
          <span className="h-px w-8 bg-primary/50" />
          PROJECTS
        </h2>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100} className={project.title === "Portfolio Website" ? "sm:col-span-2" : ""}>
            <div className={project.title === "Portfolio Website" ? "mx-auto max-w-md" : ""}>
              <ProjectCard project={project} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
