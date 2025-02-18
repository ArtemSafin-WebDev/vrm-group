import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function productGallery() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-product-gallery")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: 1,
      speed: 600,
      modules: [Pagination, Navigation],
      spaceBetween: 10,
      pagination: {
        el: element.querySelector<HTMLElement>(
          ".product-intro__gallery-pagination"
        ),
        type: "bullets",
        clickable: true,
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".product-intro__gallery-slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".product-intro__gallery-slider-arrow--next"
        ),
      },
    });
  });
}
