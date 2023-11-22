"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventario = void 0;
class Inventario {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
        console.log(`Product with id ${product.id} has been added to inventory.`);
    }
    getProducts() {
        return this.products;
    }
    deleteProductById(id) {
        const index = this.products.findIndex((product) => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1)[0];
            console.log(`Product with id ${id} has been deleted.`);
        }
        else {
            console.log(`Product with id ${id} not found in the inventory.`);
        }
    }
    filterProductsByAttribute(attribute, value) {
        return this.products.filter((product) => product[attribute] === value);
    }
}
exports.inventario = new Inventario();
//# sourceMappingURL=Inventory.js.map