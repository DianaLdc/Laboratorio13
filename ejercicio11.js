// ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// EJERCICIO 11
// Enunciado:
// Crea un objeto auto con propiedades marca, modelo, año,
// y un método detalles() que muestre sus datos.
// ------------------------------------------------------------

function Auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;

    this.detalles = function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    };
}
