// 8. Crear un programa que determine si un número introducido en un Prompt es divisible
// por 5 o no, mostrar el resultado con console.log.

const num1 = prompt('ingrese un numero');
const numero1 = parseInt(num1);

if( numero1 % 5){
    console.log(`el numero ${numero1} no es divisible.`);

}else{
    console.log(`el numero ${numero1} es divisible.`);
}

const resultado = numero1 / 5;
console.log(`el resultado del numero divido antre 5 es ${resultado}`);