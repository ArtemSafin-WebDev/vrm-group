import Swiper from "swiper";
import { Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function projectCards() {
  const initSlider = (card: HTMLElement) => {
    const container = card.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: 1,
      speed: 600,
      spaceBetween: 0,
      longSwipesRatio: 0.2,
      modules: [Pagination, EffectFade],
      allowTouchMove: true,
      effect: "fade",
      fadeEffect: {
        crossFade: false,
      },
      pagination: {
        el: card.querySelector<HTMLDivElement>(".project-card__pagination"),
        type: "bullets",
        clickable: true,
      },
      nested: card.closest(".swiper") ? true : false,
    });
  };

  const cards = Array.from(
    document.querySelectorAll<HTMLElement>(".project-card")
  );
  cards.forEach((card) => initSlider(card));
}
