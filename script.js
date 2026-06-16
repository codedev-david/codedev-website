// Reveal sections as they scroll into view (progressive enhancement —
// everything is visible without JS via the prefers-reduced-motion / no-JS paths).
const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -24px 0px",
    }
  );

  reveals.forEach((section, index) => {
    section.style.transitionDelay = `${Math.min(index * 60, 180)}ms`;
    observer.observe(section);
  });
} else {
  reveals.forEach((section) => section.classList.add("is-visible"));
}
