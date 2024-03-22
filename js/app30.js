// Crear una función que tome como parámetro un arreglo de números, retornar el número
// menor, si es un número negativo mostrar su valor absoluto.

const arregloEjemplo = [-19, 3, -9, 7, 2];

function encontrarNumeroMenor(arreglo) {
    if (arreglo.length === 0) {
        return "El arreglo esta vacio";
    }
    const menor = Math.min(...arreglo);
    
    if (menor < 0) {
        return Math.abs(menor);  
    } 
      return menor;  
}
const numeroMenor = encontrarNumeroMenor(arregloEjemplo);
console.log("Número menor:", numeroMenor);
