import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function reasons() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".reasons")
  );
  elements.forEach((element) => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=30%",
        },
      });
      tl.from(".reasons__wrapper", {
        autoAlpha: 0,
        duration: 1.5,
        y: 30,
        ease: "power2.out",
      });
    }, element);
  });
}
