// ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// Enunciado:
// Crea una función llamada `doblarNumeros` que reciba un arreglo
// de números y devuelva uno nuevo con cada número duplicado.
//
// Ejemplo:
// doblarNumeros([1, 2, 3]); // [2, 4, 6]
// ------------------------------------------------------------

function doblarNumeros(arr) { 
    if (!Array.isArray(arr)) {
        console.log("Error: se esperaba un arreglo de números.");
        return [];
    }
 
    let resultado = arr.map(num => num * 2);
 
    return resultado;
}
