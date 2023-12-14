import { ProductValidationError } from "../utils/ProductValidationError";

export class ProductValidation {
  static validate(
    name: string,
    price: number,
    weight: number
  ): void {
    if (!name) throw new ProductValidationError("Product name is missing");
    if (!price) throw new ProductValidationError("Product price is missing");
    if (!weight) throw new ProductValidationError("Product weight is missing");
  }
}
