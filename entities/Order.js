module.exports = class Order {
  #user;
  #total;
  #items;

  constructor(items, user) {
    items.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        throw new Error("Quantity out of Stock!");
      }

      this.#items = items;
      this.#user = user;
      this.#total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);
    });
  }

  get orderData() {
    this.#items;
    this.#user;
    this.#total;
  }
};
