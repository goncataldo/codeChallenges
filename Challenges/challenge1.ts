class Producto {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public weight: number
  ) {
    this.productCreated();
  }
  public toString(product: object): string {
    return JSON.stringify(product);
  }
  public priceWithDelivery(): number {
    const weight = this.weight;
    let priceWithDelivery = this.price;
    for (let i = 0; i < weight; i++) {
      if (i % 10 === 0) {
        priceWithDelivery += priceWithDelivery * 0.05;
      }
    }
    return priceWithDelivery;
  }
  public productCreated(): void {
    console.log(`Product with id ${this.id} has been created.`);
  }
  public notifyProductCreated(): void {
    console.log(`Product with id ${this.id} has been created.`);
  }
}

const notebook: Producto = new Producto("code#8281", "Lenovo Thinkpad", 100, 30);
console.log(notebook.toString(notebook));
console.log(notebook.priceWithDelivery());
notebook.notifyProductCreated();
