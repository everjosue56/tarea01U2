//17. Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
//ingresa un usuario.

const n = prompt('ingrese el numero N ');
const N = parseInt(n);
const m = prompt('ingrese el numero M');
const M = parseInt(m);

if(!isNaN(N) && !isNaN(M)){

    let suma = 0;
    let contador = N;
     
    while(contador <= M){

        if( contador %2 === 0 ){

             suma += contador;
        }
             contador++;
    }
    console.log(`la suma de todos los numeros entre ${N} y ${M} es igual a: ${suma}`);

}else{

        console.log(`no fue posible desarrollar la operacion`);}
