"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const CalculateDelivery_1 = require("./CalculateDelivery");
const ProductValidation_1 = require("./ProductValidation");
const UuidGenerator_1 = require("../utils/UuidGenerator");
class Producto {
    constructor(name, price, weight, catalog, log) {
        this.name = name;
        this.price = price;
        this.weight = weight;
        ProductValidation_1.ProductValidation.validate(name, price, weight);
        this.catalog = catalog;
        this.log = log;
        this.uuid = this.newProductUUID();
        this.productCreated();
        this.addToCatalog();
    }
    newProductUUID() {
        return (0, UuidGenerator_1.generateUUID)();
    }
    productCreated() {
        this.log.info(`Product with id ${this.uuid} has been created.`);
    }
    addToCatalog() {
        this.catalog.addProduct(this);
    }
    toString() {
        return JSON.stringify(this);
    }
    priceWithDelivery() {
        return CalculateDelivery_1.PriceCalculator.calculatePriceWithDelivery(this.price, this.weight);
    }
}
exports.Producto = Producto;
//# sourceMappingURL=Product.js.map