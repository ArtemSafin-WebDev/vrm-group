import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function gallerySlider() {
  const initGallerySlider = (element: HTMLElement) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Pagination, Navigation],

      pagination: {
        el: element.querySelector<HTMLElement>(".gallery-slider__pagination"),
        type: "fraction",
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".gallery-slider__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".gallery-slider__arrow--next"
        ),
      },
    });
  };

  const sliders = Array.from(
    document.querySelectorAll<HTMLElement>(".gallery-slider")
  );
  sliders.forEach((slider) => initGallerySlider(slider));
}
