// Test 2: getById()
// Busca el elemento con id=2 (calculadora) y lo muestra en consola
// luego busca el elemento 10 que no existe y lo muestra en consola

const fs = require("fs");
const { Contenedor } = require("./contenedor.js");
const idCalculadora = 2;
const idQueNoExiste = 10;

// restablecer el contenido de "productos.txt"
fs.copyFileSync("productos.txt.bkp", "productos.txt");

const productos = new Contenedor("./productos.txt");

console.log("Producto 2:", productos.getById(idCalculadora));
console.log("Producto 10:", productos.getById(idQueNoExiste));
