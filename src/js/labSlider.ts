import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function labSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".lab__slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    const mql = window.matchMedia("(max-width: 640px)");
    const options: SwiperOptions = {
      slidesPerView: "auto",
      speed: 600,
      modules: [Pagination, Navigation],
      pagination: {
        el: element.querySelector<HTMLElement>(".lab__slider-pagination"),
        type: "fraction",
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".lab__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".lab__slider-arrow--next"
        ),
      },
    };

    let instance: Swiper | null = null;

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        instance = new Swiper(container, options);
      } else {
        if (instance) {
          instance.destroy();
          instance = null;
        }
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
