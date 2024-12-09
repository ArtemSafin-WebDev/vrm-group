import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Flip);

export default function options() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".options")
  );
  elements.forEach((element) => {
    const btns = Array.from(
      element.querySelectorAll<HTMLButtonElement>(".options__btn")
    );
    const items = Array.from(
      element.querySelectorAll<HTMLElement>(".options__tabs-item")
    );
    const setActive = (index: number) => {
      const state = Flip.getState(".options__tabs-item");

      const initiallyActive = items[index]?.classList.contains("active");
      btns.forEach((btn) => btn.classList.remove("active"));
      items.forEach((item) => item.classList.remove("active"));

      if (
        !(initiallyActive && window.matchMedia("(max-width: 640px)").matches)
      ) {
        btns[index]?.classList.add("active");
        items[index]?.classList.add("active");
      }

      Flip.from(state, {
        duration: 0.4,
        absoluteOnLeave: true,
        onComplete: () => {
          ScrollTrigger.refresh();
        },
        onEnter: (elements) => {
          gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, duration: 0.4 });
        },
        onLeave: (elements) =>
          gsap.fromTo(elements, { opacity: 1 }, { opacity: 0, duration: 0.4 }),
      });
    };
    btns.forEach((btn) => btn.classList.remove("active"));
    items.forEach((item) => item.classList.remove("active"));
    btns[0]?.classList.add("active");
    items[0]?.classList.add("active");

    btns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActive(btnIndex);
      });
    });
  });
}
