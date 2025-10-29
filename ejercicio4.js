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
