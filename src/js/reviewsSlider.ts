import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function reviewsSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".reviews-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Pagination, Navigation],

      pagination: {
        el: element.querySelector<HTMLElement>(".reviews-slider__pagination"),
        type: "fraction",
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".reviews-slider__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".reviews-slider__arrow--next"
        ),
      },
    });
  });
}
