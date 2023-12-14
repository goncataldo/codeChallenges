import { Catalogo } from "./Catalogo";
import { Logger } from "./Logger";
import { PriceCalculator } from "./CalculateDelivery";
import { ProductValidation } from "./ProductValidation";
import { generateUUID } from "../utils/UuidGenerator";

export class Producto {
  private readonly catalog: Catalogo;
  private readonly log: Logger;
  public readonly uuid: string;

  constructor(
    public readonly name: string,
    public price: number,
    public readonly weight: number,
    catalog: Catalogo,
    log: Logger
  ) {
    ProductValidation.validate(name, price, weight);

    this.catalog = catalog;
    this.log = log;

    this.uuid = this.newProductUUID();
    this.productCreated();
    this.addToCatalog();
  }
  private newProductUUID(): any {
    return generateUUID();
  }
  private productCreated(): void {
    this.log.info(`Product with id ${this.uuid} has been created.`);
  }
  private addToCatalog() {
    this.catalog.addProduct(this);
  }
  toString(): string {
    return JSON.stringify(this);
  }
  priceWithDelivery(): number {
    return PriceCalculator.calculatePriceWithDelivery(this.price, this.weight);
  }
}
