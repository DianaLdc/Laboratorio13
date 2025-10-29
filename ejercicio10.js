// ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// EJERCICIO 10
// Enunciado:
// Crea una función invertirMap(map) que reciba un Map y devuelva
// uno nuevo donde las claves sean los valores y los valores sean
// las claves.
// ------------------------------------------------------------

function invertirMap(map) {
    let nuevoMap = new Map();
    for (let [clave, valor] of map) {
        nuevoMap.set(valor, clave);
    }
    return nuevoMap;
}
