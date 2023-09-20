"use strict";
class Producto {
    constructor(id, name, price, weight) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.weight = weight;
        if (!this.id)
            throw new ProductValidationError("Product id is missing");
        if (!this.name)
            throw new ProductValidationError("Product name is missing");
        if (!this.price)
            throw new ProductValidationError("Product price is missing");
        if (!this.weight)
            throw new ProductValidationError("Product weight is missing");
        this.productCreated();
    }
    toString() {
        return JSON.stringify(this);
    }
    priceWithDelivery() {
        const weight = this.weight;
        let priceWithDelivery = this.price;
        for (let i = 0; i < weight; i++) {
            if (i % 10 === 0) {
                priceWithDelivery += priceWithDelivery * 0.05;
            }
        }
        return priceWithDelivery;
    }
    productCreated() {
        console.log(`Product with id ${this.id} has been created.`);
    }
    notifyProductCreated() {
        console.log(`Product with id ${this.id} has been created.`);
    }
}
class ProductValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "Product Validation Error";
    }
}
const notebook = new Producto("166", "Lenovo Thinkpad", 100, 30);
console.log(notebook.toString());
console.log(notebook.priceWithDelivery());
notebook.notifyProductCreated();
//# sourceMappingURL=app.js.map