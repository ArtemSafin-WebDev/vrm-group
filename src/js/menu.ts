export default function menu() {
  const menuOpenBtn = document.querySelector<HTMLButtonElement>(
    ".page-header__burger"
  );
  const menuCloseBtn = document.querySelector<HTMLElement>(
    ".page-header__menu-close"
  );
  menuOpenBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.add("menu-open");
  });
  menuCloseBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.remove("menu-open");
  });
}
