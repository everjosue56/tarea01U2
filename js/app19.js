// 19. Usando for, crear un programa que determine si un número es perfecto o no, (se dice
//     que un número es perfecto si el número es igual a sus divisores, ejemplos 6 = 1 + 2 + 3).

const numero = prompt('ingrese un numero para saber si es perfecto');
const Numero = parseInt(numero);

let divisores = 0;

for(let i = 1; i < Numero; i++){
if(Numero % i === 0){
      divisores += i;
}
}

if( divisores  === Numero){
     console.log('este numero es perfecto');
}else{
    console.log('este numero no es perfecto');
}
