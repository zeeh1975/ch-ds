// Test 1: save()
// Agrega dos productos y muestra el contenido
// del objeto productos que deberia coincidir con
// el contenido final de productos.txt

const fs = require("fs");
const { Contenedor, formateaObj } = require("./contenedor.js");

// restablecer el contenido de "productos.txt"
fs.copyFileSync("productos.txt.bkp", "productos.txt");

const productos = new Contenedor("./productos.txt");

const idSacapuntas = productos.save({
  title: "Saca puntas",
  price: 85.0,
  thumbnail:
    "https://cdn2.iconfinder.com/data/icons/back-to-school-144/512/sharpener_pencil_school_office_stationery_tool-256.png",
});
console.log("Id saca puntas: ", idSacapuntas);

const idLapices = productos.save({
  title: "Lapices",
  price: 250.45,
  thumbnail:
    "https://cdn2.iconfinder.com/data/icons/baby-and-kids-6/48/34-256.png",
});
console.log("Id lapices: ", idLapices);

console.log("objeto productos: ", formateaObj(productos));
