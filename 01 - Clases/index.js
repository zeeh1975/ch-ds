class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    if (!nombre || !apellido || !libros || !mascotas) {
      throw "Debe indicar nombre, apellido, libros, mascotas";
    }
    if (typeof nombre != "string") {
      throw "nombre debe ser un string";
    }
    if (typeof apellido != "string") {
      throw "apellido debe ser un string";
    }
    if (!Array.isArray(libros)) {
      throw "libros debe ser un array";
    }
    if (!Array.isArray(mascotas)) {
      throw "mascotas debe ser un array";
    }
    this.usuarioNombre = nombre;
    this.usuarioApellido = apellido;
    this.usuarioLibros = libros;
    this.usuarioMascotas = mascotas;
  }
  getFullName() {
    return `${this.usuarioNombre} ${this.usuarioApellido}`;
  }
  addMascota(mascota) {
    if (typeof mascota === "string") {
      this.usuarioMascotas.push(mascota);
    } else {
      throw "mascota debe ser un string";
    }
  }
  countMascotas() {
    return this.usuarioMascotas.length;
  }
  addBook(nombre, autor) {
    this.usuarioLibros.push({ nombre: nombre, autor: autor });
  }
  getBookNames() {
    return this.usuarioLibros.map((value) => {
      return value.nombre;
    });
  }
}

let yo = new Usuario(
  "Eduardo",
  "Hernandez",
  [
    { nombre: "Harry Potter", autor: "J.K.Rowling" },
    { nombre: "El Señor de los Anillos", autor: "J.R.R.Tolkien" },
  ],
  ["Tomas", "Pichichus"]
);

console.log("Nombre completo: ", yo.getFullName());
yo.addMascota("Pulgoso");
console.log("Cantidad de mascotas: ", yo.countMascotas());
yo.addBook("El Código da Vinci", "Dan Brown");
console.log("Libros: ", yo.getBookNames());

