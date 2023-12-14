import { Producto } from "./classes/Product";
import { Catalogo } from "./classes/Catalogo";
import { Logger } from "./classes/Logger";
import { Events } from "./classes/Events";

const logger = new Logger();
const catalog = new Catalogo([], logger);
const events = new Events();

console.log(catalog);
console.log(events.getEvents());

const samsung = new Producto("Samsung s9", 5000, 100, catalog, logger);
events.addEvent("NEW_PRODUCT", samsung);
const xiaomi = new Producto("Xiaomi Note 11", 2500, 110, catalog, logger);
events.addEvent("NEW_PRODUCT", xiaomi);

console.log(catalog);
console.log(events.getEvents());
