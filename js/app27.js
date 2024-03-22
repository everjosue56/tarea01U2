// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares, pista: utilizar reduce().


function filtrarNumerosPares(arreglo) {
   
    const numerosPares = arreglo.reduce((resultado, numero) => {
      
        if (numero % 2 === 0) {
            resultado.push(numero);
        }
        return resultado;
    }, []);

    return numerosPares; 
}

const arregloOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarNumerosPares(arregloOriginal);
console.log("Números pares:", numerosPares);


