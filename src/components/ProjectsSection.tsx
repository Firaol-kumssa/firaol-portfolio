import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, TypeScript, and Tailwind CSS to showcase skills and projects.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "QR / Barcode System",
    description: "A system for generating and scanning QR codes and barcodes for inventory or asset tracking.",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Networking Simulation Project",
    description: "A network topology simulation using Cisco Packet Tracer to design and test enterprise network layouts.",
    tags: ["Cisco Packet Tracer", "Networking"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-sm tracking-widest text-primary mb-8 font-semibold">PROJECTS</h2>
      <div className="max-w-2xl space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group p-6 rounded-lg hover:bg-secondary/50 transition-colors duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-sm text-foreground mt-2 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
