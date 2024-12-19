const initGallerySlider = (element) => {
  const container = element.querySelector(".swiper");
  if (!container) return;
  new Swiper(container, {
    slidesPerView: "auto",
    speed: 600,
    pagination: {
      el: element.querySelector(".gallery-slider__pagination"),
      type: "fraction",
    },
    navigation: {
      prevEl: element.querySelector(".gallery-slider__arrow--prev"),
      nextEl: element.querySelector(".gallery-slider__arrow--next"),
    },
  });
};

const sliders = Array.from(document.querySelectorAll(".gallery-slider"));
sliders.forEach((slider) => initGallerySlider(slider));

function initializeACFSlider($block) {
  console.log("Native slider element", $block[0]);
  initGallerySlider($block[0]);
}

//@ts-ignore
if (window.acf) {
  //@ts-ignore
  window.acf.addAction(
    "render_block_preview/type=gallery-slider",
    initializeACFSlider
  );
}
