// ------------------------------------------------------------
// LABORATORIO 13 - JAVASCRIPT: ESTRUCTURAS DE DATOS
// ------------------------------------------------------------
// EJERCICIO 14
// Enunciado:
// Crea una función llamada gestionarEmpleados(empleados) que reciba
// un array de objetos con las propiedades id, nombre, area y salario.
// La función debe crear un Map donde la clave sea el área y el valor
// sea un objeto con los empleados y el salario promedio por área.
// ------------------------------------------------------------

function gestionarEmpleados(empleados) {
    let mapaAreas = new Map();
 
    for (let empleado of empleados) {
        let area = empleado.area;
 
        if (!mapaAreas.has(area)) {
            mapaAreas.set(area, { empleados: [], salarios: [] });
        }
 
        mapaAreas.get(area).empleados.push(empleado.nombre);
        mapaAreas.get(area).salarios.push(empleado.salario);
    }
 
    let resultado = {};
    for (let [area, datos] of mapaAreas) {
        let suma = 0;
        for (let s of datos.salarios) {
            suma += s;
        }
        let promedio = suma / datos.salarios.length;

        resultado[area] = {
            empleados: datos.empleados,
            promedio: promedio
        };
    }

    return resultado;
}
  





















