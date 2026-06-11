import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { title: "Programming", skills: ["Java", "JavaScript"] },
  { title: "Web Development", skills: ["HTML", "CSS", "React", "Tailwind CSS"] },
  { title: "Networking", skills: ["Routers", "Switches", "Cisco Packet Tracer"] },
  { title: "Tools", skills: ["Git", "Visual Studio Code"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-sm tracking-widest text-primary mb-8 font-semibold">SKILLS</h2>
      <div className="max-w-2xl space-y-8">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-sm font-medium text-card-foreground mb-3">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-secondary text-primary border-primary/20 hover:bg-primary/10 transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
