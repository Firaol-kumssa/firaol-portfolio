import { useState } from "react";
import { Github, Linkedin, Menu, MessageCircle, Phone, X } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border/60">
      <div className="flex items-center justify-between px-6 py-4">
        <span className="text-primary font-bold font-display">Firaol Kumssa</span>
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground transition-transform duration-300 active:scale-90"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <div className="px-6 pb-6 space-y-4">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm tracking-widest text-muted-foreground hover:text-primary transition-colors"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-5 pt-4 text-muted-foreground">
              <a
                href="https://github.com/Firaol-kumssa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/firaol-kumssa-390009346/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.me/251912687252"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a href="tel:+251912687252" className="hover:text-primary transition-colors" aria-label="Phone">
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
