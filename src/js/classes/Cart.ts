type Robot = {
  type: "robot";
  id: string | number;
  title: string;
  price: number;
  quantity: number;
};

type Cell = {
  type: "cell";
  id: string | number;
  title: string;
  price: number;
  quantity: number;
  complectation?: {
    title: string;
    price: number;
  };
  robot: Robot;
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

  public addItem = (item: CartItem) => {
    this.items = this.getItems();
    const itemsCopy = [...this.items];
    const sameItemInCart = itemsCopy.find(
      (someItem) => someItem.type === item.type && someItem.id === item.id
    );
    if (sameItemInCart) {
      sameItemInCart.quantity += item.quantity;
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

  public removeItem = (item: CartItem) => {
    this.items = this.getItems();
    const itemsCopy = [...this.items];
    this.saveItems(
      itemsCopy.filter((someItem) => {
        if (someItem.id === item.id && someItem.type === item.type)
          return false;
        return true;
      })
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
