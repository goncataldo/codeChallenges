"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Producto_instances, _Producto_productCreated, _Producto_notifyProductCreated;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const Inventory_1 = require("./Inventory");
const ProductValidationError_1 = require("../utils/ProductValidationError");
class Producto {
    constructor(id, name, price, weight) {
        _Producto_instances.add(this);
        this.id = id;
        this.name = name;
        this.price = price;
        this.weight = weight;
        if (!this.id)
            throw new ProductValidationError_1.ProductValidationError("Product id is missing");
        if (!this.name)
            throw new ProductValidationError_1.ProductValidationError("Product name is missing");
        if (!this.price)
            throw new ProductValidationError_1.ProductValidationError("Product price is missing");
        if (!this.weight)
            throw new ProductValidationError_1.ProductValidationError("Product weight is missing");
        __classPrivateFieldGet(this, _Producto_instances, "m", _Producto_productCreated).call(this);
        __classPrivateFieldGet(this, _Producto_instances, "m", _Producto_notifyProductCreated).call(this);
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
}
exports.Producto = Producto;
_Producto_instances = new WeakSet(), _Producto_productCreated = function _Producto_productCreated() {
    console.log(`Product with id ${this.id} has been created.`);
}, _Producto_notifyProductCreated = function _Producto_notifyProductCreated() {
    Inventory_1.inventario.addProduct(this);
    console.log(`Product with id ${this.id} has been created and saved in inventory.`);
};
//# sourceMappingURL=Product.js.map