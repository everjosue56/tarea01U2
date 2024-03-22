// Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.

const numero = prompt('ingrese un numero');
const N = parseInt(numero);

let contador = 1;

while( contador <= N ){
    console.log(contador);
    contador+=2;
}