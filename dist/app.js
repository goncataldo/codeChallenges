"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./classes/Product");
const Inventory_1 = require("./classes/Inventory");
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
    console.log(Inventory_1.inventario.getProducts());
    Inventory_1.inventario.deleteProductById("1");
    console.log(Inventory_1.inventario.getProducts());
    console.log(Inventory_1.inventario.filterProductsByAttribute("name", "macbook"));
}
catch (e) {
    console.error(e);
}
//# sourceMappingURL=app.js.map