// ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// EJERCICIO 6
// Enunciado:
// Crea un Set con nombres y elimina los repetidos automáticamente.
//
// Ejemplo:
// ["Ana", "Luis", "Ana", "Pedro", "Luis"]
// Resultado esperado (sin repetidos): Set { "Ana", "Luis", "Pedro" }
// ------------------------------------------------------------
 
let nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis", "Carla", "Pedro"];

let nombresUnicos = new Set(nombres);
console.log(nombres);
console.log(nombresUnicos);
 
