//6. Escribir un programa que escriba en pantalla los divisores de un número dado.

const num1 = prompt('ingrese un numero');
const numero1 = parseInt(num1);

for(let i = 1; i <= numero1; i++){

    if( numero1 % i ===0 ){
        console.log(i);
    }
};

