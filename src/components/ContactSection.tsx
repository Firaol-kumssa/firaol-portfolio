import { useState } from "react";
import { Check, Copy, Github, Linkedin, MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const PHONE_DISPLAY = "+251 912 687 252";
const PHONE_E164 = "+251912687252";

const contactMethods = [
  {
    key: "phone",
    label: "Phone",
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_E164}`,
    icon: Phone,
    copyValue: PHONE_DISPLAY,
    cta: "Call",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: "https://wa.me/251912687252",
    icon: MessageCircle,
    copyValue: PHONE_DISPLAY,
    cta: "Message",
  },
  {
    key: "github",
    label: "GitHub",
    value: "Firaol-kumssa",
    href: "https://github.com/Firaol-kumssa",
    icon: Github,
    copyValue: "https://github.com/Firaol-kumssa",
    cta: "Visit",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "firaol-kumssa",
    href: "https://www.linkedin.com/in/firaol-kumssa-390009346/",
    icon: Linkedin,
    copyValue: "https://www.linkedin.com/in/firaol-kumssa-390009346/",
    cta: "Connect",
  },
];

const ContactSection = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey((current) => (current === key ? null : current)), 1800);
    } catch {
      // Clipboard API unavailable — fail silently, the direct link still works.
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <Reveal>
        <h2 className="mb-4 flex items-center gap-3 text-sm font-semibold tracking-widest text-primary">
          <span className="h-px w-8 bg-primary/50" />
          CONTACT
        </h2>
      </Reveal>

      <Reveal delay={60}>
        <p className="max-w-lg text-foreground">
          Have a role, project, or idea in mind? I'd love to hear about it —
          reach out through whichever channel is easiest for you.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {contactMethods.map((method, i) => {
          const isCopied = copiedKey === method.key;
          return (
            <Reveal key={method.key} delay={120 + i * 70}>
              <div className="gradient-border group relative flex items-center gap-4 rounded-2xl glass p-5 card-elevate">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <method.icon size={19} />
                </span>

                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="min-w-0 flex-1"
                >
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{method.label}</p>
                  <p className="truncate text-sm font-medium text-card-foreground transition-colors group-hover:text-primary">
                    {method.value}
                  </p>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(method.key, method.copyValue)}
                  aria-label={`Copy ${method.label}`}
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary",
                    isCopied && "border-primary/60 text-primary",
                  )}
                >
                  {isCopied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;
