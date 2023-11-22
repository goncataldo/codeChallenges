import {inventario} from './Inventory';
import { ProductValidationError } from '../utils/ProductValidationError';

export class Producto {
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
      this.#productCreated();    
      this.#notifyProductCreated();
    }
    toString(): string {
      return JSON.stringify(this);
    }
    priceWithDelivery(): number {
      const weight = this.weight;
      let priceWithDelivery = this.price;
      for (let i = 0; i < weight; i++) {
        if (i % 10 === 0) {
          priceWithDelivery += priceWithDelivery * 0.05;
        }
      }
      return priceWithDelivery;
    }
    #productCreated(): void {
      console.log(`Product with id ${this.id} has been created.`);
    }
    #notifyProductCreated(): void {
      inventario.addProduct(this);
      console.log(`Product with id ${this.id} has been created and saved in inventory.`);
    }
  }