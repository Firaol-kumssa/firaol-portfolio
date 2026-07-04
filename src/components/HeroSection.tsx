import { ArrowRight, Mail, Sparkles } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";

const HeroSection = () => {
  return (
    <section id="hero" className="relative pt-16 pb-24 md:pt-24 md:pb-32">
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for new opportunities
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Firaol <span className="gradient-text">Kumssa</span>
        </h1>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-5 max-w-xl text-lg text-card-foreground md:text-xl">
          Software engineer crafting fast, reliable web applications — with a
          networking background that keeps systems resilient end to end.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Computer Science graduate specializing in modern web development and
          practical network infrastructure. I turn ambiguous problems into
          polished, production-ready products.
        </p>
      </Reveal>

      <Reveal delay={280} className="mt-9 flex flex-wrap items-center gap-4">
        <MagneticButton
          size="lg"
          className="group gap-2 rounded-full px-6 shadow-glow"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          View Projects
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </MagneticButton>
        <MagneticButton
          size="lg"
          variant="outline"
          className="group gap-2 rounded-full border-border/80 bg-background/40 px-6 backdrop-blur"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Mail size={16} />
          Get in touch
        </MagneticButton>
      </Reveal>

      <Reveal delay={360} className="mt-16 grid max-w-xl grid-cols-3 gap-4">
        {[
          { label: "Focus", value: "Web Apps" },
          { label: "Background", value: "Networking" },
          { label: "Mindset", value: "Ship it right" },
        ].map((stat) => (
          <div key={stat.label} className="group rounded-2xl glass p-4 card-elevate">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{stat.label}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-card-foreground">
              <Sparkles size={13} className="text-primary" />
              {stat.value}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default HeroSection;
