import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function ourClients() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".our-clients")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      speed: 600,
      slidesPerView: "auto",
      modules: [Navigation, Pagination],
      pagination: {
        el: element.querySelector<HTMLElement>(
          ".our-clients__slider-pagination"
        ),
        type: "fraction",
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".our-clients__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".our-clients__slider-arrow--next"
        ),
      },
    });
  });
}
