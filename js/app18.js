//Todos los ejercicios de while anteriores los debe replicar con el ciclo for.

//     18.1  Usando for mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
//ingresa el usuario en un prompt.

// const numero = prompt('ingrese un numero');
// const N = parseInt(numero);
// for(let contador = 1; contador <= N; contador++){
// console.log(contador);
// }


//     18.2  Usando for mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.

// const numero = prompt('ingrese un numero');
// const N = parseInt(numero);
// for(let contador = 1; contador <= N; contador+=2){
//     console.log(contador);
// }


//    18.3  Usando for mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

// const numero = prompt('ingrese un numero');
// const N = parseInt(numero);
// for(let contador = N; contador >= 1; contador-=1 ){
//    console.log(contador);
// }


//    18.4   Usando for, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.

// const numero = prompt('ingrese un numero');
// const N = parseInt(numero);
// for(let contador = 1; contador <=12 ; contador++){
//    const multiplicacion= (contador*N)
//     console.log(multiplicacion);
// }



//    18.5   Usar for, realizar la suma de todos los números pares entre N y M donde N y M los
//ingresa un usuario.

const n = prompt('ingrese el numero N ');
const N = parseInt(n);
const m = prompt('ingrese el numero M');
const M = parseInt(m);

if(!isNaN(N) && !isNaN(M)){

    let suma = 0;

    for(let contador = N; contador <= M ;contador++){

        if( contador %2 === 0 ){

             suma += contador;
        }
            
    }
    console.log(`la suma de todos los numeros entre ${N} y ${M} es igual a: ${suma}`);

}else{

        console.log(`no fue posible desarrollar la operacion`);}



