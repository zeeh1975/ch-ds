// Test 4: deleteById()
// Elimina la escuadra (id=1) y muestra el contenido 
// del objeto productos que deberia coincidir con
// el contenido final de productos.txt
// Intenta eliminar un elemento inexistente y lanza una excepcion

const fs = require("fs");
const { Contenedor, formateaObj } = require("./contenedor.js");
const idEscuadra=1;
const idQueNoExiste = 10;

// restablecer el contenido de "productos.txt"
fs.copyFileSync("productos.txt.bkp", "productos.txt");

const productos = new Contenedor("./productos.txt");

productos.deleteById(idEscuadra);

console.log(
  "Contenido despues de eliminar escuadra: ",
  formateaObj(productos.getAll())
);

productos.deleteById(idQueNoExiste);


