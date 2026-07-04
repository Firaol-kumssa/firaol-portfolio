/**
 * Fixed, decorative ambient background: soft blurred gradient orbs plus a
 * faint dot-grid. Pure CSS animation, `aria-hidden` and `pointer-events-none`
 * so it never interferes with content, scroll, or screen readers.
 */
const BackgroundOrbs = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[110px] motion-safe:animate-blob" />
      <div
        className="absolute top-1/3 -right-24 h-[24rem] w-[24rem] rounded-full bg-violet/20 blur-[110px] motion-safe:animate-blob"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[22rem] w-[22rem] rounded-full bg-pink/10 blur-[110px] motion-safe:animate-blob"
        style={{ animationDelay: "6s" }}
      />
    </div>
  );
};

export default BackgroundOrbs;
