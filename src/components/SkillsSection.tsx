import { Code2, Globe, Network, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";

const skillCategories = [
  { title: "Programming", icon: Code2, skills: ["Java", "JavaScript", "TypeScript"] },
  { title: "Web Development", icon: Globe, skills: ["HTML", "CSS", "React", "Tailwind CSS"] },
  { title: "Networking", icon: Network, skills: ["Routers", "Switches", "Cisco Packet Tracer"] },
  { title: "Tools", icon: Wrench, skills: ["Git", "Visual Studio Code", "Vercel"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-3 text-sm font-semibold tracking-widest text-primary">
          <span className="h-px w-8 bg-primary/50" />
          SKILLS
        </h2>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 80}>
            <div className="group h-full rounded-2xl glass p-5 card-elevate">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:rotate-6">
                  <cat.icon size={16} />
                </span>
                <h3 className="text-sm font-semibold text-card-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-primary/20 bg-secondary/60 px-3 py-1 text-xs text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
