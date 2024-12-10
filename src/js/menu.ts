export default function menu() {
  const menuOpenBtn = document.querySelector<HTMLButtonElement>(
    ".page-header__burger"
  );
  const menuCloseBtns = Array.from(
    document.querySelectorAll<HTMLElement>(".page-header__menu-close")
  );
  const backBtns = Array.from(
    document.querySelectorAll<HTMLElement>(".page-header__back-btn")
  );
  const links = Array.from(
    document.querySelectorAll<HTMLElement>(
      ".page-header__nav-list-item--has-dropdown >  a, .page-header__nav-list-item--catalog > a,.page-header__catalog-main-categories-list-item > a"
    )
  );
  menuOpenBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.add("menu-open");
  });
  menuCloseBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.remove("menu-open");
      links.forEach((link) => link.parentElement?.classList.remove("active"));
    })
  );

  links.forEach((link) => {
    const item = link.parentElement;

    link.addEventListener("click", (event) => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        event.preventDefault();
        item?.classList.add("active");
      }
    });
  });
  backBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      const closestCategoriesItem = btn.closest<HTMLElement>(
        ".page-header__catalog-main-categories-list-item"
      );
      if (closestCategoriesItem) {
        closestCategoriesItem.classList.remove("active");
        return;
      }
      const closestListItem = btn.closest<HTMLElement>(
        ".page-header__nav-list-item"
      );
      if (closestListItem) {
        closestListItem.classList.remove("active");
        return;
      }
    })
  );
}
