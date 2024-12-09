document.addEventListener("DOMContentLoaded", () => {
  const controller = new AbortController();
  //   const signal = controller.signal;
  document.addEventListener("click", async (event) => {
    if (
      event.target.matches(".js-minus-btn") ||
      event.target.closest(".js-minus-btn")
    ) {
      event.preventDefault();

      console.log("Minus btn click");
      const btn = event.target.matches(".js-minus-btn")
        ? event.target
        : event.target.closest(".js-minus-btn");
      const counter = event.target.closest(".js-counter");
      const min = counter.hasAttribute("data-min")
        ? counter.getAttribute("data-min")
        : 1;
      const input = counter.querySelector("input");

      if (+input.value - 1 < min) {
        btn.disabled = true;
        return;
      }
      input.value = +input.value - 1;

      //   try {
      //     const response = await fetch("/", { signal });
      //     if (!response.ok) throw new Error("Error when pressing plus");
      //     input.value = +input.value - 1;

      //     const changeEvent = new Event("change");
      //     input.dispatchEvent(changeEvent);
      //   } catch (err) {
      //     console.log(err);
      //     return;
      //   }
    }

    if (
      event.target.matches(".js-plus-btn") ||
      event.target.closest(".js-plus-btn")
    ) {
      console.log("Plus click");
      event.preventDefault();
      const counter = event.target.closest(".js-counter");
      const max = counter.hasAttribute("data-max")
        ? counter.getAttribute("data-max")
        : null;
      const input = counter.querySelector("input");

      if (counter.hasAttribute("data-max") && +input.value + 1 > max) {
        return;
      }
      input.value = +input.value + 1;
      //   try {
      //     const response = await fetch("/", { signal });
      //     if (!response.ok) throw new Error("Error when pressing minus");
      //     input.value = +input.value + 1;
      //     const changeEvent = new Event("change");
      //     input.dispatchEvent(changeEvent);
      //   } catch (err) {
      //     console.log(err);
      //     return;
      //   }
    }
  });
});
