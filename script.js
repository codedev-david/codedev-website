// Reveal sections as they scroll into view (progressive enhancement —
// content is fully visible without JS via the <noscript> / reduced-motion paths).
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
    { threshold: 0.14, rootMargin: "0px 0px -24px 0px" }
  );

  reveals.forEach((section, index) => {
    section.style.transitionDelay = `${Math.min(index * 60, 200)}ms`;
    observer.observe(section);
  });
} else {
  reveals.forEach((section) => section.classList.add("is-visible"));
}

// Frost the sticky header once the page is scrolled.
const header = document.querySelector(".site-header");
if (header) {
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Cursor-follow spotlight — desktop pointers only, and never when the user
// has asked for reduced motion. rAF-throttled to one DOM write per frame.
const spotlight = document.querySelector(".spotlight");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (spotlight && finePointer && !reducedMotion) {
  let queued = false;
  let px = 0;
  let py = 0;
  window.addEventListener(
    "pointermove",
    (event) => {
      px = event.clientX;
      py = event.clientY;
      if (!queued) {
        queued = true;
        requestAnimationFrame(() => {
          spotlight.style.setProperty("--mx", `${px}px`);
          spotlight.style.setProperty("--my", `${py}px`);
          queued = false;
        });
      }
    },
    { passive: true }
  );
}
