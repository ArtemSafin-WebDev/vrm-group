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

export default function cart() {
  const cart = new Cart();

  document.addEventListener("cart:addItem", ((event: AddItemEvent) => {
    const item = event.detail.item;
    cart.addItem(item);
  }) as EventListener);
  document.addEventListener("cart:addItems", ((event: AddItemsEvent) => {
    const items = event.detail.items;
    cart.addItems(items);
  }) as EventListener);
  document.addEventListener("cart:removeItem", ((event: RemoveItemEvent) => {
    const item = event.detail.item;
    cart.removeItem(item);
  }) as EventListener);
  document.addEventListener("cart:clear", (() => {
    cart.clear();
  }) as EventListener);
}
