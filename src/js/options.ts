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
    const itemsParent = element.querySelector<HTMLElement>(".options__tabs");
    const setActive = (index: number) => {
      const initiallyActive = items[index]?.classList.contains("active");
      btns.forEach((btn) => btn.classList.remove("active"));
      items.forEach((item) => item.classList.remove("active"));

      if (
        !(initiallyActive && window.matchMedia("(max-width: 640px)").matches)
      ) {
        btns[index]?.classList.add("active");
        items[index]?.classList.add("active");
      }
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

    let swapped = false;
    const mql = window.matchMedia("(max-width: 640px)");

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && !swapped) {
        btns.forEach((btn, btnIndex) => {
          const parent = btn.parentElement;
          if (!parent) return;
          parent.appendChild(items[btnIndex]);
        });
        swapped = true;
      } else {
        if (!swapped) return;
        items.forEach((item) => itemsParent?.appendChild(item));
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
