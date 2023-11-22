import {Producto} from './classes/Product'
import {inventario} from './classes/Inventory'

// Metodos productos
console.log("asde")
try {
    const notebook: Producto = new Producto("1", "thinkpad", 100, 30);
    console.log(notebook.toString());
    console.log(notebook.priceWithDelivery());
  } catch (e) {
    console.error(e)
  }

  // Metodos inventario
  try {
    new Producto("2", "macbook", 250, 20);
    new Producto("3", "macbook", 200, 30);
    new Producto("4", "iphone", 200, 20);
    console.log(inventario.getProducts())
    inventario.deleteProductById("1")
    console.log(inventario.getProducts())
    console.log(inventario.filterProductsByAttribute("name", "macbook"));
  } catch (e) {
    console.error(e)
  }
  