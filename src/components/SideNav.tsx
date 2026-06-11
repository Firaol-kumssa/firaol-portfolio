import profileImg from "@/assets/profile.jpg";
import { Mail, Github, Phone } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
];

const SideNav = () => {
  return (
    <nav className="hidden md:flex flex-col justify-between fixed left-0 top-0 h-screen w-64 px-10 py-10 z-50">
      <div>
        <div className="group/photo mb-6">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0 transition-all duration-500 group-hover/photo:w-24 group-hover/photo:h-24 group-hover/photo:border-primary/60 group-hover/photo:shadow-lg group-hover/photo:shadow-primary/20">
              <img src={profileImg} alt="Firaol Kumssa" className="w-full h-full object-cover" />
            </div>
            <div className="group-hover/photo:hidden">
              <h2 className="text-lg font-bold text-primary leading-tight">Firaol Kumssa</h2>
              <p className="text-[10px] text-muted-foreground">CS Graduate | Web Developer</p>
            </div>
          </a>
          <div className="hidden group-hover/photo:block mt-3">
            <p className="text-sm font-semibold text-primary">Firaol Tassew Kumssa</p>
            <p className="text-xs text-muted-foreground">Web Developer</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-10">
          I build reliable, scalable, and efficient digital systems.
        </p>

        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex items-center gap-3 text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <span className="h-px w-6 bg-muted-foreground group-hover:w-10 group-hover:bg-primary transition-all duration-300" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-5 text-muted-foreground">
        <a href="mailto:firaol.kumssa@gmail.com" className="hover:text-primary transition-colors" aria-label="Email"><Mail size={20} /></a>
        <a href="https://github.com/Firaol-kumssa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub"><Github size={20} /></a>
        <a href="tel:+251912687252" className="hover:text-primary transition-colors" aria-label="Phone"><Phone size={20} /></a>
      </div>
    </nav>
  );
};

export default SideNav;
