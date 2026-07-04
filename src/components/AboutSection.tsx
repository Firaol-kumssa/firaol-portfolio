import { Network, Code2, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Modern web development",
    body: "Building responsive, accessible interfaces with React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Network,
    title: "Networking foundation",
    body: "Hands-on experience with Wi-Fi deployment, switches, and troubleshooting from an internship at Ethiopian Electric Utility.",
  },
  {
    icon: Rocket,
    title: "Ship-it mindset",
    body: "I care about the last 10% — performance, polish, and details that make a product feel finished.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-3 text-sm font-semibold tracking-widest text-primary">
          <span className="h-px w-8 bg-primary/50" />
          ABOUT
        </h2>
      </Reveal>

      <Reveal delay={60} className="max-w-2xl space-y-4 leading-relaxed text-foreground">
        <p>
          I'm a Computer Science graduate with practical experience in
          networking and IT systems from my internship at{" "}
          <span className="font-semibold text-card-foreground">Ethiopian Electric Utility</span>,
          where I worked on Wi-Fi installation, cable troubleshooting, and
          network maintenance.
        </p>
        <p>
          I'm equally passionate about building modern web applications —
          solving complex problems and shipping efficient, user-friendly
          digital experiences that feel as good as they work.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={120 + i * 80}>
            <div className="gradient-border group h-full rounded-2xl glass p-5 card-elevate">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <item.icon size={18} />
              </div>
              <h3 className="text-sm font-semibold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
