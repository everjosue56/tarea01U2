//2. Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.

const numero1 = prompt('ingrese el primer numero');
const numero2 = prompt('ingrese el segundo numero');
const numero3 = prompt('ingrese el tercer numero');

const num1 = parseInt(numero1);
const num2 = parseInt(numero2);
const num3 = parseInt(numero3);

if (num1 > num2 && num1 >= num3) {
    console.log(`el numero ${num1} es mayor que los numeros ${num2} y ${num3}`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`el numero ${num2} es mayor que los numeros ${num1} y ${num3}`);
} else {
    console.log(`el numero ${num3} es mayor que los numeros ${num1} y ${num2}`);
};