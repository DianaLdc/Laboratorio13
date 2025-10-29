 // ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// EJERCICIO 4
// Enunciado:
// Crea una función llamada `filtrarYTransformar(arr)` que reciba
// un arreglo de números y:
//  • Elimine los valores negativos
//  • Eleve los restantes al cuadrado
//  • Devuelva la suma total de esos cuadrados
//
// Ejemplo:
// filtrarYTransformar([2, -3, 4, -1, 5]); // Resultado esperado: 45
// ------------------------------------------------------------
function filtrarYTransformar(arr) { 
    if (!Array.isArray(arr)) {
        console.log("Error: se esperaba un arreglo de números.");
        return 0;
    }

    let suma = 0;  
 
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
 
        if (num >= 0) {
            suma += num * num;  
        }
    }
 
    return suma;
}
