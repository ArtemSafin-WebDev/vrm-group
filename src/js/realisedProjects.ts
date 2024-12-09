import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function realisedProjects() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".realised-projects")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Pagination, Navigation],
      allowTouchMove: false,
      pagination: {
        el: element.querySelector<HTMLElement>(
          ".realised-projects__slider-pagination"
        ),
        type: "fraction",
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".realised-projects__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".realised-projects__slider-arrow--next"
        ),
      },
    });
  });
}
