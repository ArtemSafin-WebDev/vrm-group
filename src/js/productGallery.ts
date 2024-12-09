import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";

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
      modules: [Pagination],
      pagination: {
        el: element.querySelector<HTMLElement>(
          ".product-intro__gallery-pagination"
        ),
        type: "bullets",
        clickable: true,
      },
    });
  });
}
