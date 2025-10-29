// ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// EJERCICIO 7
// Enunciado:
// Crea una función llamada `tieneDuplicados(arr)` que use un Set
// para determinar si un arreglo contiene elementos repetidos.
// Debe devolver true si hay duplicados.
// ------------------------------------------------------------

function tieneDuplicados(arr) { 
    let conjunto = new Set(arr);

    return conjunto.size < arr.length;
}
