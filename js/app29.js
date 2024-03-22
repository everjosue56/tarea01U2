// 29. Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
// vacío debe devolver cero.

const arregloEjemplo = [4, 7, 12, 5, 9];

function calcularPromedio(arreglo) {
     
    if (arreglo.length === 0) {
        return 0;  
    }
    const suma = arreglo.reduce((acumulador, elemento) => acumulador + elemento, 0);
    const promedio = suma / arreglo.length;
    
    return promedio;  
}
const promedio = calcularPromedio(arregloEjemplo);
console.log("Promedio del arreglo:", promedio);
