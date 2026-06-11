import { useState } from "react";
import { Menu, X, Mail, Github, Phone } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-primary font-bold">Firaol Kumssa</span>
        <button onClick={() => setOpen(!open)} className="text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="px-6 pb-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-5 pt-4 text-muted-foreground">
            <a href="mailto:firaol.kumssa@gmail.com" className="hover:text-primary transition-colors"><Mail size={18} /></a>
            <a href="https://github.com/Firaol-kumssa" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={18} /></a>
            <a href="tel:+251912687252" className="hover:text-primary transition-colors"><Phone size={18} /></a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
