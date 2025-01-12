import gsap from "gsap";

import { TextPlugin, ScrollTrigger, SteppedEase } from "gsap/all";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function automation() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".automation")
  );
  elements.forEach((element) => {
    const textElement = element.querySelector<HTMLElement>(
      ".automation__text-element"
    );
    if (!textElement) return;
    const cursor = element.querySelector<HTMLElement>(
      ".automation__text-cursor"
    );
    const text = textElement.textContent;
    if (!text) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 641px)", () => {
      const blinkingCursor = gsap.fromTo(
        cursor,
        { autoAlpha: 0, x: -10 },
        { autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1) }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=20%",
        },
      });

      tl.fromTo(
        textElement,
        {
          text: {
            value: "",
          },
        },
        {
          text: {
            value: text,
          },
          duration: 3,
          delay: 0.5,
          ease: "none",
        }
      )
        .add(() => {
          blinkingCursor.kill();
        }, ">+=0.5")
        .to(cursor, {
          autoAlpha: 0,
          duration: 0.2,
        });
    });
  });
}
