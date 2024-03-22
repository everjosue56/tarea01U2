//3. Escriba un programa que pida un número y diga si es divisible por 2.

const numero1 = prompt('ingrese un numero');
const num1 = parseInt(numero1);

if(num1 % 2){
    console.log(`el numero ${num1} no es divisible entre 2`);
}else{
    console.log(`el numero ${num1} es divisible entre 2`);
}