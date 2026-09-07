import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./SiteMotion.css";

export default function SiteMotion() {
  const { pathname } = useLocation();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis;
    let observer;
    let elements = [];

    const clear = () => {
      lenis?.destroy();
      observer?.disconnect();
      elements.forEach((element) => {
        element.classList.remove("motion-pending", "motion-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };

    const setup = () => {
      clear();
      if (preference.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -120 },
        prevent: (node) => node.matches?.("[data-lenis-prevent], .overflow-x-auto, .overflow-y-auto"),
      });

      if (!("IntersectionObserver" in window)) return;
      // Animate content, never section wrappers containing positioned artwork.
      elements = [...document.querySelectorAll("#root section h1, #root section h2, #root section p, #root [data-reveal]")]
        .filter((element) => !element.parentElement.closest("[data-reveal]"));

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });

      elements.forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
        element.classList.add("motion-pending");
        observer.observe(element);
      });
    };

    setup();
    preference.addEventListener("change", setup);
    return () => {
      clear();
      preference.removeEventListener("change", setup);
    };
  }, [pathname]);

  return null;
}
