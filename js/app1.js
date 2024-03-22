// 1. Escriba un programa que pida dos números y escriba en la consola cuál es el mayor.

const num1 = prompt('ingrese el primer numero');
const num2 = prompt('ingrese el segundo numero');

const numero1 = parseInt(num1);
const numero2 = parseInt(num2);

if (numero1 > numero2) {
    console.log(`el numero ${numero1} es mayor que ${numero2}`);
}else{
    console.log(`el numero ${numero2} es mayor que ${numero1}`);
};