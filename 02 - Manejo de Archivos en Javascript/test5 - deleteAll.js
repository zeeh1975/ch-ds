// Test 5: deleteAll()
// Invoca el metodo deleteAll() y muestra el contenido
// del objeto productos que deberia coincidir con
// el contenido final de productos.txt

const fs = require("fs");
const { Contenedor } = require("./contenedor.js");

// restablecer el contenido de "productos.txt"
fs.copyFileSync("productos.txt.bkp", "productos.txt");

const productos = new Contenedor("./productos.txt");

productos.deleteAll();

console.log("Contenido despues deleteAll(): ", productos.getAll());


