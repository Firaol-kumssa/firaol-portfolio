const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-sm tracking-widest text-primary mb-8 font-semibold">EXPERIENCE</h2>
      <div className="max-w-2xl">
        <div className="group p-6 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Internship</p>
          <h3 className="text-lg font-semibold text-card-foreground">
            Networking Intern · <span className="text-primary">Ethiopian Electric Utility</span>
          </h3>
          <ul className="mt-4 space-y-2 text-foreground text-sm leading-relaxed">
            <li className="flex gap-2">
              <span className="text-primary mt-1">▸</span>
              Installed and configured Wi-Fi networks in office environments
            </li>
            <li className="flex gap-2">
              <span className="text-primary mt-1">▸</span>
              Troubleshot network and router connectivity problems
            </li>
            <li className="flex gap-2">
              <span className="text-primary mt-1">▸</span>
              Assisted in maintaining switches, cables, and network infrastructure
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
