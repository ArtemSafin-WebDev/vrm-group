import Swiper from "swiper";
import { Pagination, EffectFade, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function intro() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".intro"));

  elements.forEach((element) => {
    const mainContainer = element.querySelector<HTMLElement>(
      ".intro__wrapper-bg .swiper"
    );
    const bgContainer = element.querySelector<HTMLElement>(
      ".intro__wrapper-inner .swiper"
    );
    if (!(mainContainer && bgContainer)) return;

    const mainInstance = new Swiper(mainContainer, {
      speed: 600,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      modules: [Pagination, Controller, EffectFade],
      pagination: {
        el: element.querySelector<HTMLElement>(".intro__pagination"),
        clickable: true,
      },
    });

    const bgInstance = new Swiper(bgContainer, {
      speed: 600,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      modules: [Controller, EffectFade],
    });

    mainInstance.controller.control = bgInstance;
    bgInstance.controller.control = mainInstance;
  });
}
