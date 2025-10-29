// ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// EJERCICIO 5
// Enunciado:
// Crea una función llamada `reordenarPalabras(oracion)` que:
//  • Reciba una cadena con palabras separadas por espacios.
//  • Devuelva un arreglo ordenado alfabéticamente,
//    pero con las palabras en mayúsculas.
//
// Ejemplo:
// reordenarPalabras("sol luna estrella planeta");
// Resultado esperado: ["ESTRELLA", "LUNA", "PLANETA", "SOL"]
// ------------------------------------------------------------

function reordenarPalabras(oracion) { 
    if (typeof oracion !== "string") {
        console.log("Error: se esperaba una cadena de texto.");
        return [];
    }
 
    let palabras = oracion.split(" ");
 
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].toUpperCase();
    }
 
    palabras.sort();
 
    return palabras;
}
 
