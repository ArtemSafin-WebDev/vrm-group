import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function faq() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".faq"));

  elements.forEach((element) => {
    const accordions = Array.from(element.querySelectorAll(".faq__accordion"));
    accordions.forEach((accordion) => {
      const dropdown = accordion.querySelector<HTMLElement>(
        ".faq__accordion-dropdown"
      );
      accordion.addEventListener("click", (event) => {
        event.preventDefault();
        accordions.forEach((otherAccordion) => {
          if (accordion !== otherAccordion)
            otherAccordion.classList.remove("active");
        });
        accordion.classList.toggle("active");
      });

      dropdown?.addEventListener("transitionend", () => {
        ScrollTrigger.refresh();
      });
    });
  });
}
