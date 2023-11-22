var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
define("classes/Inventory", ["require", "exports"], function (require, exports) {
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
});
define("utils/ProductValidationError", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductValidationError = void 0;
    class ProductValidationError extends Error {
        constructor(message) {
            super(message);
            this.name = "Product Validation Error";
        }
    }
    exports.ProductValidationError = ProductValidationError;
});
define("classes/Product", ["require", "exports", "classes/Inventory", "utils/ProductValidationError"], function (require, exports, Inventory_1, ProductValidationError_1) {
    "use strict";
    var _Producto_instances, _Producto_productCreated, _Producto_notifyProductCreated;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Producto = void 0;
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
});
define("app", ["require", "exports", "classes/Product", "classes/Inventory"], function (require, exports, Product_1, Inventory_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("asde");
    try {
        const notebook = new Product_1.Producto("1", "thinkpad", 100, 30);
        console.log(notebook.toString());
        console.log(notebook.priceWithDelivery());
    }
    catch (e) {
        console.error(e);
    }
    try {
        new Product_1.Producto("2", "macbook", 250, 20);
        new Product_1.Producto("3", "macbook", 200, 30);
        new Product_1.Producto("4", "iphone", 200, 20);
        console.log(Inventory_2.inventario.getProducts());
        Inventory_2.inventario.deleteProductById("1");
        console.log(Inventory_2.inventario.getProducts());
        console.log(Inventory_2.inventario.filterProductsByAttribute("name", "macbook"));
    }
    catch (e) {
        console.error(e);
    }
});
//# sourceMappingURL=app.js.map