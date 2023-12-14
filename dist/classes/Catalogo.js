"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalogo = void 0;
class Catalogo {
    constructor(products, log) {
        this.products = products;
        this.log = log;
    }
    addProduct(product) {
        this.products.push(product);
        this.notifyProductCreated(product);
    }
    notifyProductCreated(product) {
        this.log.info(`Product with id ${product.uuid} has been added to catalogue.`);
    }
    getProducts() {
        return this.products;
    }
    deleteProductById(id) {
        const index = this.products.findIndex((product) => product.uuid === id);
        if (index !== -1) {
            this.products.splice(index, 1)[0];
            this.log.info(`Product with id ${id} has been deleted.`);
        }
        else {
            this.log.error(`Product with id ${id} not found in the catalogue.`);
        }
    }
    filterProductsByAttribute(attribute, value) {
        return this.products.filter((product) => product[attribute] === value);
    }
}
exports.Catalogo = Catalogo;
//# sourceMappingURL=Catalogo.js.map