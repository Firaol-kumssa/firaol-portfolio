import { useEffect, useState } from "react";

/**
 * useActiveSection
 * Observes each section id and reports whichever one currently occupies
 * the most "active" band of the viewport, so the nav can highlight it.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
          setActive(top.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
