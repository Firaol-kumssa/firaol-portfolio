import profileImg from "@/assets/profile.jpg";
import { Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const SideNav = () => {
  const active = useActiveSection(["hero", ...navItems.map((n) => n.href.slice(1))]);

  return (
    <nav className="hidden md:flex flex-col justify-between fixed left-0 top-0 h-screen w-64 px-10 py-10 z-50">
      <div>
        <div className="group/photo mb-6">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0 shadow-glow transition-all duration-500 group-hover/photo:w-24 group-hover/photo:h-24 group-hover/photo:border-primary/60 group-hover/photo:shadow-lg group-hover/photo:shadow-primary/20">
              <img src={profileImg} alt="Firaol Kumssa" className="w-full h-full object-cover" />
            </div>
            <div className="group-hover/photo:hidden">
              <h2 className="text-lg font-bold text-primary leading-tight font-display">Firaol Kumssa</h2>
              <p className="text-[10px] text-muted-foreground">CS Graduate | Web Developer</p>
            </div>
          </a>
          <div className="hidden group-hover/photo:block mt-3">
            <p className="text-sm font-semibold text-primary font-display">Firaol Tassew Kumssa</p>
            <p className="text-xs text-muted-foreground">Software Engineer</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-10">
          I build reliable, scalable, and efficient digital systems.
        </p>

        <ul className="space-y-6">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-3 text-sm tracking-widest transition-colors duration-300",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
                  )}
                >
                  <span
                    className={cn(
                      "h-px bg-muted-foreground transition-all duration-300 group-hover:bg-primary",
                      isActive ? "w-10 bg-primary" : "w-6",
                    )}
                  />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-5 text-muted-foreground">
        <a
          href="https://github.com/Firaol-kumssa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github size={19} />
        </a>
        <a
          href="https://www.linkedin.com/in/firaol-kumssa-390009346/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={19} />
        </a>
        <a
          href="https://wa.me/251912687252"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
          aria-label="WhatsApp"
        >
          <MessageCircle size={19} />
        </a>
        <a
          href="tel:+251912687252"
          className="hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
          aria-label="Phone"
        >
          <Phone size={19} />
        </a>
      </div>
    </nav>
  );
};

export default SideNav;
