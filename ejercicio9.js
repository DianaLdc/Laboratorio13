// ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// EJERCICIO 9
// Enunciado:
// Crea una función contarPalabras(texto) que use un Map para contar
// cuántas veces aparece cada palabra en una cadena (sin distinguir
// mayúsculas).
// Ejemplo:
// contarPalabras("sol luna sol sol estrella luna");
// Resultado esperado: Map { "sol" => 3, "luna" => 2, "estrella" => 1 }
// ------------------------------------------------------------

function contarPalabras(texto) { 
    let palabras = texto.toLowerCase().split(" ");
 
    let conteo = new Map();
 
    for (let palabra of palabras) {
        if (conteo.has(palabra)) { 
            conteo.set(palabra, conteo.get(palabra) + 1);
        } else { 
            conteo.set(palabra, 1);
        }
    }
 
    return conteo;
}
