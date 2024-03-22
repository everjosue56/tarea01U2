//7. Crear un programa que determine si un número introducido en un Prompt es par o
//no, la respuesta será mostrada en la consola.

const num1 = prompt('ingrese un numero');
const numero1 = parseInt(num1);

if( numero1 % 2){
    console.log(`el numero ${numero1} no es par.`);

}else{
    console.log(`el numero ${numero1} es par.`);
}