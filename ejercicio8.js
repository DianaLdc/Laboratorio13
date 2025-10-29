// ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// ------------------------------------------------------------
// FUNCIÓN LÓGICA - EJERCICIO 8
// ------------------------------------------------------------
// Calcula el precio total de una lista de compras usando un Map
// que contiene productos y precios.
// ------------------------------------------------------------

function calcularTotal(productos, compras) {
    let total = 0;

    for (let i = 0; i < compras.length; i++) {
        let producto = compras[i];
        if (productos.has(producto)) {
            total += productos.get(producto);
        } else {
            console.log(`El producto "${producto}" no está registrado.`);
        }
    }

    return total;
}
