"use strict";
class Producto {
    constructor(id, name, price, weight) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.productCreated();
    }
    toString(product) {
        return JSON.stringify(product);
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
const notebook = new Producto("code#8281", "Lenovo Thinkpad", 100, 30);
console.log(notebook.toString(notebook));
console.log(notebook.priceWithDelivery());
notebook.notifyProductCreated();
//# sourceMappingURL=app.js.map