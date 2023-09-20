class Producto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public price: number,
    public readonly weight: number
  ) {
    if (!this.id) throw new ProductValidationError("Product id is missing");
    if (!this.name) throw new ProductValidationError("Product name is missing");
    if (!this.price) throw new ProductValidationError("Product price is missing");
    if (!this.weight) throw new ProductValidationError("Product weight is missing");
    this.productCreated();
  }
  public toString(): string {
    return JSON.stringify(this);
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
  private productCreated(): void {
    console.log(`Product with id ${this.id} has been created.`);
  }
  public notifyProductCreated(): void {
    console.log(`Product with id ${this.id} has been created.`);
  }
}

class ProductValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Product Validation Error";
  }
}

const notebook: Producto = new Producto("166", "Lenovo Thinkpad", 100, 30);
console.log(notebook.toString());
console.log(notebook.priceWithDelivery());
notebook.notifyProductCreated();
