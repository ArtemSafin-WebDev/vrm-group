export default function simpleCounter() {
  const elements = Array.from(document.querySelectorAll(".js-simple-counter"));

  elements.forEach((element) => {
    const plusBtn = element.querySelector<HTMLButtonElement>(
      ".js-simple-counter-plus"
    )!;
    const minusBtn = element.querySelector<HTMLButtonElement>(
      ".js-simple-counter-minus"
    )!;
    const input = element.querySelector<HTMLInputElement>("input")!;

    minusBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const min = element.hasAttribute("data-min")
        ? Number(element.getAttribute("data-min"))
        : 1;

      if (+input.value - 2 < min) {
        minusBtn.disabled = true;
      }
      if (+input.value - 1 < min) {
        return;
      }
      input.value = (+input.value - 1).toString();
    });

    plusBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      input.value = (+input.value + 1).toString();
      minusBtn.disabled = false;
    });
  });
}
