import {Producto} from './Product'

class Inventario {
    private products: Producto[] = [];
    addProduct(product: Producto): void {
      this.products.push(product);
      console.log(`Product with id ${product.id} has been added to inventory.`);
    }
    getProducts(): Producto[] {
      return this.products;
    }
    deleteProductById(id: string): void {
      const index = this.products.findIndex((product) => product.id === id);
      if (index !== -1) {
        this.products.splice(index, 1)[0];
        console.log(`Product with id ${id} has been deleted.`);
      } else {
        console.log(`Product with id ${id} not found in the inventory.`);
      }
    }
    filterProductsByAttribute(attribute: keyof Producto, value: any): Producto[] {
      return this.products.filter((product) => product[attribute] === value);
    }
  }
  export const inventario: Inventario = new Inventario()
  