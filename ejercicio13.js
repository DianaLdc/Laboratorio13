// ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// EJERCICIO 13
// Enunciado:
// Crea una función llamada combinarCatalogos(tiendaA, tiendaB)
// que reciba dos objetos donde:
//  • Cada propiedad representa el nombre de un producto y su valor es el precio.
//  • Si un producto aparece en ambos, se mantiene el precio más bajo.
//  • Todos los precios finales deben tener dos decimales.
// ------------------------------------------------------------

function combinarCatalogos(tiendaA, tiendaB) {
    let catalogoFinal = {};
 
    for (let producto in tiendaA) {
        catalogoFinal[producto] = tiendaA[producto];
    }
 
    for (let producto in tiendaB) {
        if (catalogoFinal.hasOwnProperty(producto)) { 
            catalogoFinal[producto] = Math.min(catalogoFinal[producto], tiendaB[producto]);
        } else { 
            catalogoFinal[producto] = tiendaB[producto];
        }
    }
 
    for (let producto in catalogoFinal) {
        catalogoFinal[producto] = parseFloat(catalogoFinal[producto].toFixed(2));
    }

    return catalogoFinal;
}
