// Crear una función que reciba un número entero y muestre un error si el tipo de dato
// pasado es de otro tipo.

const numero = prompt('ingrese un numero entero')


function correccion(numero){
    return numero % 1 === 0;
}
if(correccion(numero)){
    console.log(`el numero ${numero} es un estero`);

}else{
    console.log(`el numero ${numero} no es un estero`);

}