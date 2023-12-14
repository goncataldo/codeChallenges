import { Logger } from "./Logger";

type Product = {
  uuid: string;
  name: string;
  price: number;
  weight: number;
};

export class Catalogo {
  private readonly log: Logger;

  constructor(private products: Product[], log: Logger) {
    this.log = log;
  }
  addProduct(product: Product): void {
    this.products.push(product);
    this.notifyProductCreated(product);
  }
  notifyProductCreated(product: Product): void {
    this.log.info(`Product with id ${product.uuid} has been added to catalogue.`);
  }
  getProducts(): Product[] {
    return this.products;
  }
  deleteProductById(id: string): void {
    const index = this.products.findIndex((product) => product.uuid === id);
    if (index !== -1) {
      this.products.splice(index, 1)[0];
      this.log.info(`Product with id ${id} has been deleted.`);
    } else {
      this.log.error(`Product with id ${id} not found in the catalogue.`);
    }
  }
  filterProductsByAttribute(attribute: keyof object, value: string): object[] {
    return this.products.filter((product) => product[attribute] === value);
  }
}
