export class ProductValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Product Validation Error";
  }
}
