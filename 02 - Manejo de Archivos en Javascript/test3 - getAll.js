// Test 3: getAll()
// Agrega dos productos al contenido original y
// muestra en consola el llamado a getAll()

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

const idLapices = productos.save({
  title: "Lapices",
  price: 250.45,
  thumbnail:
    "https://cdn2.iconfinder.com/data/icons/baby-and-kids-6/48/34-256.png",
});

console.log("getAll():", formateaObj(productos.getAll()));

