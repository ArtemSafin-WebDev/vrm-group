export default function complectation() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".complectation")
  );
  elements.forEach((element) => {
    const variants = Array.from(
      element.querySelectorAll<HTMLElement>(".complectation__variant")
    );
    variants.forEach((element) => {
      const showMoreBtn = element.querySelector<HTMLButtonElement>(
        ".complectation__variant-show-more"
      );
      showMoreBtn?.addEventListener("click", (event) => {
        event.preventDefault();
        showMoreBtn
          .closest<HTMLElement>(".complectation__variant-robot")
          ?.classList.toggle("show-all");
      });
    });
  });
}
