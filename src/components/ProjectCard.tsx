import { ExternalLink, Check, LucideIcon } from "lucide-react";
import { useTilt } from "@/hooks/use-tilt";

export interface Project {
  title: string;
  description: string;
  url?: string;
  tags: string[];
  features: string[];
  icon: LucideIcon;
  gradient: string; // tailwind gradient classes for the preview mockup
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(5);
  const Icon = project.icon;

  const CardInner = (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="gradient-border group relative h-full overflow-hidden rounded-3xl glass card-elevate transition-transform duration-300 ease-out [transform-style:preserve-3d]"
    >
      {/* Browser-chrome style preview mockup, since no live screenshot asset is bundled */}
      <div className={`relative flex h-40 flex-col justify-between overflow-hidden bg-gradient-to-br p-4 sm:h-48 ${project.gradient}`}>
        <div className="absolute inset-0 opacity-20 dot-grid" />
        <div className="relative flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-background/40" />
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <Icon
            size={56}
            strokeWidth={1.3}
            className="text-background/90 drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        {project.url && (
          <span className="relative flex items-center gap-1 self-start rounded-full bg-background/20 px-2.5 py-1 text-[10px] font-medium text-background/90 backdrop-blur">
            Live project
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          {project.url && (
            <ExternalLink size={16} className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-foreground">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
              <Check size={12} className="mt-0.5 shrink-0 text-primary" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
              {tag}
            </span>
          ))}
        </div>

        {project.url && (
          <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-80 transition-opacity group-hover:opacity-100">
            View live demo
            <ExternalLink size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        )}
      </div>
    </div>
  );

  if (!project.url) return CardInner;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open live demo of ${project.title}`}
      className="block h-full rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {CardInner}
    </a>
  );
};

export default ProjectCard;
