export default function catalog() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".catalog")
  );
  elements.forEach((element) => {
    const filtersBtn = element.querySelector<HTMLButtonElement>(
      ".catalog__filters-btn"
    );
    const filtersCloseBtn = element.querySelector<HTMLButtonElement>(
      ".catalog__filters-close"
    );

    const submitBtn = element.querySelector('button[type="submit"]');
    filtersBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("filters-shown");
    });
    filtersCloseBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.remove("filters-shown");
    });
    submitBtn?.addEventListener("click", () => {
      document.body.classList.remove("filters-shown");
    });
  });
}
