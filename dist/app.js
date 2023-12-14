"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./classes/Product");
const Catalogo_1 = require("./classes/Catalogo");
const Logger_1 = require("./classes/Logger");
const Events_1 = require("./classes/Events");
const logger = new Logger_1.Logger();
const catalog = new Catalogo_1.Catalogo([], logger);
const events = new Events_1.Events();
console.log(catalog);
console.log(events.getEvents());
const samsung = new Product_1.Producto("Samsung s9", 5000, 100, catalog, logger);
events.addEvent("NEW_PRODUCT", samsung);
const xiaomi = new Product_1.Producto("Xiaomi Note 11", 2500, 110, catalog, logger);
events.addEvent("NEW_PRODUCT", xiaomi);
console.log(catalog);
console.log(events.getEvents());
//# sourceMappingURL=app.js.map