import { Wifi, Network, Cable } from "lucide-react";
import Reveal from "@/components/Reveal";

const responsibilities = [
  { icon: Wifi, text: "Installed and configured Wi-Fi networks in office environments" },
  { icon: Network, text: "Troubleshot network and router connectivity problems" },
  { icon: Cable, text: "Assisted in maintaining switches, cables, and network infrastructure" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-3 text-sm font-semibold tracking-widest text-primary">
          <span className="h-px w-8 bg-primary/50" />
          EXPERIENCE
        </h2>
      </Reveal>

      <Reveal delay={80} className="max-w-2xl">
        <div className="relative rounded-2xl glass p-6 card-elevate md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Internship</p>
              <h3 className="mt-1 text-lg font-semibold text-card-foreground md:text-xl">
                Networking Intern <span className="text-muted-foreground">·</span>{" "}
                <span className="text-primary">Ethiopian Electric Utility</span>
              </h3>
            </div>
            <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-secondary-foreground">
              On-site
            </span>
          </div>

          <ul className="mt-6 space-y-3">
            {responsibilities.map((item, i) => (
              <li
                key={item.text}
                className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors duration-300 hover:bg-secondary/50"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon size={14} />
                </span>
                <span className="leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
};

export default ExperienceSection;
