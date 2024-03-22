// Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
// arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1]


const arregloOriginal = [1, 2, 3, 4, 5];

function invertirArreglo(arreglo) {
    const copiaArreglo = arreglo.slice();
    return copiaArreglo.reverse();
}

const arregloInvertido = invertirArreglo(arregloOriginal);
console.log("Arreglo original:", arregloOriginal);
console.log("Arreglo invertido:", arregloInvertido);
