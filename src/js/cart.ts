import Cart, { CartItem } from "./classes/Cart";

type AddItemEvent = CustomEvent<{
  item: CartItem;
}>;
type RemoveItemEvent = CustomEvent<{
  item: CartItem;
}>;
type AddItemsEvent = CustomEvent<{
  items: CartItem[];
}>;
type IncrementItemEvent = CustomEvent<{
  item: CartItem;
  amount: number;
}>;

export default function cart() {
  const cart = new Cart();

  let addedToCartTimer: ReturnType<typeof setTimeout> | null = null;
  const addedToCartPopup =
    document.querySelector<HTMLElement>(".added-to-cart");
  const addedToCartPopupText = addedToCartPopup?.querySelector<HTMLElement>(
    ".added-to-cart__text"
  );
  const addedToCartClose = addedToCartPopup?.querySelector<HTMLButtonElement>(
    ".added-to-cart__close"
  );

  addedToCartClose?.addEventListener("click", (event) => {
    event.preventDefault();
    addedToCartPopup?.classList.remove("shown");
  });

  document.addEventListener("cart:addItem", ((event: AddItemEvent) => {
    const item = event.detail.item;
    cart.addItem(item);
    addedToCartPopup?.classList.add("shown");
    if (addedToCartPopupText)
      addedToCartPopupText.textContent = `${item.title} добавлен(-а) в корзину`;
    if (addedToCartTimer) clearTimeout(addedToCartTimer);
    setTimeout(() => {
      addedToCartPopup?.classList.remove("shown");
      addedToCartTimer = null;
    }, 6000);
  }) as EventListener);
  document.addEventListener("cart:addItems", ((event: AddItemsEvent) => {
    const items = event.detail.items;
    cart.addItems(items);
    addedToCartPopup?.classList.add("shown");
    if (addedToCartPopupText)
      addedToCartPopupText.textContent = `${items
        .map((item) => item.title)
        .join(", ")} добавлены в корзину`;
    if (addedToCartTimer) clearTimeout(addedToCartTimer);
    setTimeout(() => {
      addedToCartPopup?.classList.remove("shown");
      addedToCartTimer = null;
    }, 6000);
  }) as EventListener);
  document.addEventListener("cart:removeItem", ((event: RemoveItemEvent) => {
    const item = event.detail.item;
    cart.removeItem(item);
  }) as EventListener);
  document.addEventListener("cart:incrementItem", ((
    event: IncrementItemEvent
  ) => {
    const { item, amount } = event.detail;
    cart.incrementItem(item, amount);
  }) as EventListener);
  document.addEventListener("cart:clear", (() => {
    cart.clear();
  }) as EventListener);
}
