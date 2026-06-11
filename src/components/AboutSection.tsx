const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-sm tracking-widest text-primary mb-8 font-semibold">ABOUT</h2>
      <div className="max-w-2xl space-y-4 text-foreground leading-relaxed">
        <p>
          I am a Computer Science graduate with practical experience in networking and IT systems
          from my internship at <span className="font-semibold text-card-foreground">Ethiopian Electric Utility</span>.
          I have worked on Wi-Fi installation, cable troubleshooting, and network maintenance.
        </p>
        <p>
          I am also passionate about building modern web applications and software solutions.
          I enjoy solving complex problems and creating efficient, user-friendly digital experiences.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
