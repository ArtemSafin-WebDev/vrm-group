type Robot = {
  type: "robot";
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  href: string;
};

type Cell = {
  type: "cell";
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  image?: string;
  href: string;
  totalPrice: number;
  complectation?: {
    title: string;
    price: number;
  };
  robot: {
    title: string;
  };
};

type CartItem = Robot | Cell;

export default class Cart {
  public items: CartItem[] = [];
  constructor() {
    this.items = this.getItems();

    console.log("Cart items", this.items);
  }

  public getItems = (): CartItem[] => {
    const data = window.localStorage.getItem("cartItems");
    if (data) {
      const items = JSON.parse(data) as CartItem[];
      console.log("Reading cart items", items);
      return items;
    }
    return [];
  };

  public saveItems = (items: CartItem[]) => {
    window.localStorage.setItem("cartItems", JSON.stringify(items));
    this.items = this.getItems();
    console.log("Cart items saved");
  };

  public addItems = (items: CartItem[]) => {
    items.forEach((item) => this.addItem(item));
  };

  private compare = (item: CartItem, someItem: CartItem) => {
    return (
      someItem.type === item.type &&
      someItem.id === item.id &&
      (item.type === "cell" && someItem.type === "cell"
        ? item.robot.title === someItem.robot.title
        : true) &&
      (item.type === "cell" &&
      item.complectation &&
      someItem.type === "cell" &&
      someItem.complectation
        ? item.complectation.title === someItem.complectation.title
        : true)
    );
  };

  public addItem = (item: CartItem) => {
    this.items = this.getItems();
    const itemsCopy = [...this.items];

    const sameItemInCart = itemsCopy.find((someItem) =>
      this.compare(item, someItem)
    );
    if (sameItemInCart) {
      sameItemInCart.quantity =
        Number(sameItemInCart.quantity) + Number(item.quantity);
      this.saveItems(itemsCopy);
      this.items = this.getItems();
      console.log("Item quantity changed", item);
    } else {
      itemsCopy.push(item);
      this.saveItems(itemsCopy);
      this.items = this.getItems();
      console.log("New item added", item);
    }
  };

  public incrementItem = (item: CartItem, amount: number) => {
    this.items = this.getItems();
    const itemsCopy = [...this.items];
    const sameItemInCart = itemsCopy.find((someItem) =>
      this.compare(item, someItem)
    );
    if (!sameItemInCart) return;
    sameItemInCart.quantity = Number(sameItemInCart.quantity) + Number(amount);
    this.saveItems(itemsCopy);
    this.items = this.getItems();
  };

  public removeItem = (item: CartItem) => {
    this.items = this.getItems();
    const itemsCopy = [...this.items];
    this.saveItems(
      itemsCopy.filter((someItem) => !this.compare(item, someItem))
    );
    this.items = this.getItems();
    console.log("Item removed", item);
  };

  public clear() {
    window.localStorage.setItem("cartItems", "");
    this.items = this.getItems();
    console.log("Cart has been cleared", this.items);
  }
}

export type { CartItem };
